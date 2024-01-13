import { r as redirect, f as fail } from "../../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../../chunks/superValidate.js";
import { c as string_schema } from "../../../../../../chunks/form_schemas.js";
import { eq } from "drizzle-orm";
import { s as strings } from "../../../../../../chunks/schema.js";
const load = async ({ locals, params }) => {
  const session = await locals.auth.validate();
  if (!session || session.user.role !== "ADMIN")
    throw redirect(302, "/login");
  const id = params.id;
  if (!id)
    throw redirect(302, "/strings");
  const string = await locals.db.query.strings.findFirst({
    where: eq(strings.id, id)
  });
  if (!string)
    throw redirect(302, "/strings");
  const brands = await locals.db.query.brands.findMany({});
  const form = await superValidate({ ...string, brand_id: string.brand_id }, string_schema);
  return {
    form,
    brands
  };
};
const actions = {
  default: async ({ request, locals, params }) => {
    const session = await locals.auth.validate();
    if (!session || session.user.role !== "ADMIN")
      throw redirect(301, "/login");
    const form = await superValidate(request, string_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.update(strings).set(form.data).where(eq(strings.id, params.id));
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
    return message(form, { type: "success", text: `${form.data.name} updated` });
  }
};
export {
  actions,
  load
};
