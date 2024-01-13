import { u as user } from "../../../../../chunks/schema.js";
import { p as profile_schema } from "../../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../../chunks/errors.js";
import { r as redirect, f as fail } from "../../../../../chunks/index.js";
import { eq } from "drizzle-orm";
import { s as superValidate, m as message } from "../../../../../chunks/superValidate.js";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const current_user = await locals.db.query.user.findFirst({
    where: eq(user.id, session.user.userId),
    columns: {
      email: true,
      first_name: true,
      last_name: true
    }
  });
  if (!current_user)
    throw redirect(302, "/login");
  const form = await superValidate(current_user, profile_schema);
  return {
    form,
    session
  };
};
const actions = {
  default: async ({ request, locals }) => {
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(302, "/login");
    const form = await superValidate(request, profile_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.update(user).set(form.data).where(eq(user.id, session.user.userId));
    } catch (err) {
      console.error(err);
      return message(form, { type: "error", text: error_message_format(err) });
    }
    return message(form, { type: "error", text: "profile updated" });
  }
};
export {
  actions,
  load
};
