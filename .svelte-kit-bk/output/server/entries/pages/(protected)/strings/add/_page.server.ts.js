import { s as strings } from "../../../../../chunks/schema.js";
import { c as string_schema } from "../../../../../chunks/form_schemas.js";
import { r as redirect, f as fail } from "../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const brands = await locals.db.query.brands.findMany();
  const form = await superValidate(string_schema);
  return {
    form,
    brands
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(301, "/login");
    const form = await superValidate(request, string_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.insert(strings).values(form.data).returning();
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        if (err.message.includes("Unique constraint failed on the fields: (`name`,`brand_id`)")) {
          return message(form, { type: "error", text: "A string with this name already exists" });
        }
        return message(form, { type: "error", text: err.message });
      } else {
        return message(form, { type: "error", text: "Unknown error" });
      }
    }
    return message(form, {
      type: "success",
      text: `${form.data.name} added to database`
    });
  }
};
export {
  actions,
  load
};
