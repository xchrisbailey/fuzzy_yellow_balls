import { c as reviews } from "../../../../../../../chunks/schema.js";
import { b as review_schema } from "../../../../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../../../../chunks/errors.js";
import { r as redirect, f as fail } from "../../../../../../../chunks/index.js";
import { and, eq } from "drizzle-orm";
import { s as superValidate, m as message } from "../../../../../../../chunks/superValidate.js";
const load = async (event) => {
  const { locals, params } = event;
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const review = await locals.db.query.reviews.findFirst({
    where: and(eq(reviews.id, params.string_id), eq(reviews.user_id, session.user.userId)),
    with: { string: true, user: true }
  });
  if (!review) {
    throw redirect(302, `/string/${params.string_id}`);
  }
  const form = await superValidate(review, review_schema);
  return {
    form
  };
};
const actions = {
  default: async (event) => {
    const { locals, request, params } = event;
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(302, "/login");
    const form = await superValidate(request, review_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.update(reviews).set(form.data).where(and(eq(reviews.id, params.string_id), eq(reviews.user_id, session.user.userId)));
    } catch (err) {
      console.error(err);
      return message(form, { type: "error", text: error_message_format(err) });
    }
    return message(form, { type: "success", text: "Review updated successfully" });
  }
};
export {
  actions,
  load
};
