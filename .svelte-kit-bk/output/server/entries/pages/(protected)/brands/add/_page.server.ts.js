import { e as error_message_format } from "../../../../../chunks/errors.js";
import { r as redirect, f as fail } from "../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
import { z } from "zod";
import { b as brands } from "../../../../../chunks/schema.js";
const schema = z.object({
  name: z.string(),
  about: z.string()
});
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const form = await superValidate(schema);
  return { form };
};
const actions = {
  default: async ({ request, locals }) => {
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(302, "/login");
    const form = await superValidate(request, schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.insert(brands).values(form.data);
    } catch (err) {
      console.error(err);
      return message(form, { type: "error", text: error_message_format(err) });
    }
    return message(form, { type: "success", text: "brand added" });
  }
};
export {
  actions,
  load
};
