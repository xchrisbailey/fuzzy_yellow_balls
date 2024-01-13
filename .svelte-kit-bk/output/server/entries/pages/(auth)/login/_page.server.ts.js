import { l as login_schema } from "../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../chunks/errors.js";
import { a as auth } from "../../../../chunks/auth.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../chunks/superValidate.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) {
    throw redirect(302, "/");
  }
  const form = await superValidate(login_schema);
  return {
    form
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, login_schema);
    if (!form.valid)
      return fail(400, { form });
    try {
      const key = await auth.useKey("email", form.data.email.toLowerCase(), form.data.password);
      const session = await auth.createSession({
        userId: key.userId,
        attributes: {}
      });
      locals.auth.setSession(session);
    } catch (err) {
      console.error(err);
      return message(form, { type: "error", text: error_message_format(err) });
    }
    throw redirect(302, "/");
  }
};
export {
  actions,
  load
};
