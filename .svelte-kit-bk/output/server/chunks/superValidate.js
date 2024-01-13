import { f as fail } from "./index.js";
import { m as mapErrors, d as clone, S as SuperFormError, l as entityData, u as unwrapZodType, p as parse, v as valueOrDefault } from "./errors2.js";
function message(form, message2, options) {
  if (options?.status && options.status >= 400) {
    form.valid = false;
  }
  form.message = message2;
  return !form.valid ? fail(options?.status ?? 400, { form }) : { form };
}
function formDataToValidation(data, schemaData, preprocessed) {
  const output = {};
  const { schemaKeys, entityInfo } = schemaData;
  function parseSingleEntry(key, entry, typeInfo) {
    if (preprocessed && preprocessed.includes(key)) {
      return entry;
    }
    if (entry && typeof entry !== "string") {
      return void 0;
    }
    return parseFormDataEntry(key, entry, typeInfo);
  }
  for (const key of schemaKeys) {
    const typeInfo = entityInfo.typeInfo[key];
    const entries = data.getAll(key);
    if (!(typeInfo.zodType._def.typeName == "ZodArray")) {
      output[key] = parseSingleEntry(key, entries[0], typeInfo);
    } else {
      const arrayType = unwrapZodType(typeInfo.zodType._def.type);
      output[key] = entries.map((e) => parseSingleEntry(key, e, arrayType));
    }
  }
  function parseFormDataEntry(field, value, typeInfo) {
    const newValue = valueOrDefault(value, false, true, typeInfo);
    const zodType = typeInfo.zodType;
    const typeName = zodType._def.typeName;
    if (!value && typeName != "ZodBoolean") {
      return newValue;
    }
    if (typeName == "ZodString") {
      return value;
    } else if (typeName == "ZodNumber") {
      return zodType.isInt ? parseInt(value ?? "", 10) : parseFloat(value ?? "");
    } else if (typeName == "ZodBoolean") {
      return Boolean(value == "false" ? "" : value).valueOf();
    } else if (typeName == "ZodDate") {
      return new Date(value ?? "");
    } else if (typeName == "ZodArray") {
      const arrayType = unwrapZodType(zodType._def.type);
      return parseFormDataEntry(field, value, arrayType);
    } else if (typeName == "ZodBigInt") {
      try {
        return BigInt(value ?? ".");
      } catch {
        return NaN;
      }
    } else if (typeName == "ZodLiteral") {
      const literalType = typeof zodType.value;
      if (literalType === "string")
        return value;
      else if (literalType === "number")
        return parseFloat(value ?? "");
      else if (literalType === "boolean")
        return Boolean(value).valueOf();
      else {
        throw new SuperFormError("Unsupported ZodLiteral type: " + literalType);
      }
    } else if (typeName == "ZodUnion" || typeName == "ZodEnum" || typeName == "ZodAny") {
      return value;
    } else if (typeName == "ZodNativeEnum") {
      const zodEnum = zodType;
      if (value !== null && value in zodEnum.enum) {
        const enumValue = zodEnum.enum[value];
        if (typeof enumValue === "number")
          return enumValue;
        else if (enumValue in zodEnum.enum)
          return zodEnum.enum[enumValue];
      } else if (value !== null && Object.values(zodEnum.enum).includes(value)) {
        return value;
      }
      return void 0;
    } else if (typeName == "ZodSymbol") {
      return Symbol(String(value));
    }
    if (typeName == "ZodObject") {
      throw new SuperFormError(`Object found in form field "${field}". Set the dataType option to "json" and add use:enhance on the client to use nested data structures. More information: https://superforms.rocks/concepts/nested-data`);
    }
    throw new SuperFormError("Unsupported Zod default type: " + zodType.constructor.name);
  }
  return output;
}
function dataToValidate(parsed, schemaData) {
  if (!parsed.data) {
    return schemaData.hasEffects || schemaData.opts.errors === true ? schemaData.entityInfo.defaultEntity : void 0;
  } else {
    return parsed.data;
  }
}
function parseFormData(formData, schemaData, options) {
  function tryParseSuperJson() {
    if (formData.has("__superform_json")) {
      try {
        const output = parse(formData.getAll("__superform_json").join("") ?? "");
        if (typeof output === "object") {
          return output;
        }
      } catch {
      }
    }
    return null;
  }
  const data = tryParseSuperJson();
  const id = formData.get("__superform_id")?.toString() ?? void 0;
  return data ? { id, data, posted: true } : {
    id,
    data: formDataToValidation(formData, schemaData, options?.preprocessed),
    posted: true
  };
}
function parseSearchParams(data, schemaData, options) {
  if (data instanceof URL)
    data = data.searchParams;
  const convert = new FormData();
  for (const [key, value] of data.entries()) {
    convert.append(key, value);
  }
  const output = parseFormData(convert, schemaData, options);
  output.posted = false;
  return output;
}
function validateResult(parsed, schemaData, result) {
  const { opts: options, entityInfo } = schemaData;
  const posted = parsed.posted;
  const id = parsed.data ? options.id ?? parsed.id ?? entityInfo.hash : options.id ?? entityInfo.hash;
  if (!parsed.data) {
    let data = void 0;
    let errors = {};
    const valid = result?.success ?? false;
    const { opts: options2, entityInfo: entityInfo2 } = schemaData;
    if (result) {
      if (result.success) {
        data = result.data;
      } else if (options2.errors === true) {
        errors = mapErrors(result.error.format(), entityInfo2.errorShape);
      }
    }
    return {
      id,
      valid,
      posted,
      errors,
      // Copy the default entity so it's not modified
      data: data ?? clone(entityInfo2.defaultEntity),
      constraints: entityInfo2.constraints
    };
  } else {
    const { opts: options2, schemaKeys, entityInfo: entityInfo2, unwrappedSchema } = schemaData;
    if (!result) {
      throw new SuperFormError("Validation data exists without validation result.");
    }
    if (!result.success) {
      const partialData = parsed.data;
      const errors = options2.errors !== false ? mapErrors(result.error.format(), entityInfo2.errorShape) : {};
      const zodKeyStatus = unwrappedSchema._def.unknownKeys;
      const data = zodKeyStatus == "passthrough" ? { ...clone(entityInfo2.defaultEntity), ...partialData } : Object.fromEntries(schemaKeys.map((key) => [
        key,
        key in partialData ? partialData[key] : clone(entityInfo2.defaultEntity[key])
      ]));
      return {
        id,
        valid: false,
        posted,
        errors,
        data,
        constraints: entityInfo2.constraints
      };
    } else {
      return {
        id,
        valid: true,
        posted,
        errors: {},
        data: result.data,
        constraints: entityInfo2.constraints
      };
    }
  }
}
function getSchemaData(schema, options) {
  const originalSchema = schema;
  let unwrappedSchema = schema;
  let hasEffects = false;
  while (unwrappedSchema._def.typeName == "ZodEffects") {
    hasEffects = true;
    unwrappedSchema = unwrappedSchema._def.schema;
  }
  if (!(unwrappedSchema._def.typeName == "ZodObject")) {
    throw new SuperFormError("Only Zod schema objects can be used with superValidate. Define the schema with z.object({ ... }) and optionally refine/superRefine/transform at the end.");
  }
  const entityInfo = entityData(unwrappedSchema, options?.warnings);
  return {
    originalSchema,
    unwrappedSchema,
    hasEffects,
    entityInfo,
    schemaKeys: entityInfo.keys,
    opts: options ?? {}
  };
}
async function superValidate(data, schema, options) {
  if (data && typeof data === "object" && "safeParseAsync" in data) {
    options = schema;
    schema = data;
    data = null;
  }
  const schemaData = getSchemaData(schema, options);
  async function tryParseFormData(request) {
    let formData = void 0;
    try {
      formData = await request.formData();
    } catch (e) {
      if (e instanceof TypeError && e.message.includes("already been consumed")) {
        throw e;
      }
      return { id: void 0, data: void 0, posted: false };
    }
    return parseFormData(formData, schemaData, options);
  }
  async function parseRequest() {
    let parsed2;
    if (data instanceof FormData) {
      parsed2 = parseFormData(data, schemaData, options);
    } else if (data instanceof URL || data instanceof URLSearchParams) {
      parsed2 = parseSearchParams(data, schemaData, options);
    } else if (data instanceof Request) {
      parsed2 = await tryParseFormData(data);
    } else if (data && typeof data === "object" && "request" in data && data.request instanceof Request) {
      parsed2 = await tryParseFormData(data.request);
    } else {
      parsed2 = {
        id: void 0,
        data,
        posted: false
      };
    }
    const toValidate = dataToValidate(parsed2, schemaData);
    const result2 = toValidate ? await schemaData.originalSchema.safeParseAsync(toValidate) : void 0;
    return { parsed: parsed2, result: result2 };
  }
  const { parsed, result } = await parseRequest();
  return validateResult(parsed, schemaData, result);
}
export {
  message as m,
  superValidate as s
};
