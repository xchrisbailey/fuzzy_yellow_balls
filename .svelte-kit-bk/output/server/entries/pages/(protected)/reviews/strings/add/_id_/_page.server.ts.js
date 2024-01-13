import { r as redirect, f as fail } from "../../../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../../../chunks/superValidate.js";
import { b as review_schema } from "../../../../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../../../../chunks/errors.js";
import { s as strings, c as reviews } from "../../../../../../../chunks/schema.js";
import { eq } from "drizzle-orm";
const load = async ({ locals, params }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const form = await superValidate(review_schema);
  const string = await locals.db.query.strings.findFirst({
    where: eq(strings.id, params.id),
    with: { brand: true }
  });
  if (!string)
    throw redirect(302, "/strings");
  return {
    form,
    string
  };
};
const actions = {
  default: async (event) => {
    const { locals, params, request } = event;
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(302, "/login");
    const form = await superValidate(request, review_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.insert(reviews).values({
        ...form.data,
        string_id: params.id,
        user_id: session.user.userId
      });
    } catch (err) {
      console.error(err);
      return message(form, { type: "error", text: error_message_format(err) });
    }
    return message(form, { type: "success", text: "review added" });
  }
};
export {
  actions,
  load
};
