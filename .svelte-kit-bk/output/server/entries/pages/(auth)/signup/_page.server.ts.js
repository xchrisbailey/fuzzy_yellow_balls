import { a as auth } from "../../../../chunks/auth.js";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../chunks/superValidate.js";
import { s as signup_schema } from "../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../chunks/errors.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) {
    throw redirect(302, "/");
  }
  const form = await superValidate(signup_schema);
  return {
    form
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, signup_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      const user = await auth.createUser({
        key: {
          providerId: "email",
          // auth method
          providerUserId: form.data.email.toLowerCase(),
          // unique id when using "email" auth method
          password: form.data.password
          // hashed by Lucia
        },
        attributes: {
          email: form.data.email.toLowerCase(),
          first_name: form.data.first_name,
          last_name: form.data.last_name,
          role: "USER"
        }
      });
      const session = await auth.createSession({
        userId: user.userId,
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
