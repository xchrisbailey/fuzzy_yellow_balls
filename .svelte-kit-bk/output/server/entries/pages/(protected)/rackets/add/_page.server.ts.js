import { r as redirect, f as fail } from "../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
import { a as racket_schema } from "../../../../../chunks/form_schemas.js";
import { r as rackets } from "../../../../../chunks/schema.js";
import { e as error_message_format } from "../../../../../chunks/errors.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    throw redirect(302, "/login");
  }
  const brands = await locals.db.query.brands.findMany();
  const form = await superValidate(racket_schema);
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
    const form = await superValidate(request, racket_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    let racket_id;
    try {
      racket_id = await locals.db.insert(rackets).values(form.data).returning({ id: rackets.id });
      if (!racket_id[0])
        throw new Error("Unknown error");
    } catch (err) {
      console.error(err);
      return message(form, { type: "error", text: error_message_format(err) });
    }
    return message(form, { type: "success", text: `${form.data.name} added to database` });
  }
};
export {
  actions,
  load
};
