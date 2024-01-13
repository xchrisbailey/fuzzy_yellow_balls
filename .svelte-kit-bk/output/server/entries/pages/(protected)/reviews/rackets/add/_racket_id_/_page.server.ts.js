import { a as racket_reviews } from "../../../../../../../chunks/schema.js";
import { r as racket_review_schema } from "../../../../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../../../../chunks/errors.js";
import { r as redirect, f as fail } from "../../../../../../../chunks/index.js";
import { s as superValidate, m as message } from "../../../../../../../chunks/superValidate.js";
import { eq } from "drizzle-orm";
const load = async ({ locals, params }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const form = await superValidate(racket_review_schema);
  const racket = await locals.db.query.rackets.findFirst({
    where: eq(racket_reviews.id, params.racket_id),
    with: { brand: true }
  });
  if (!racket)
    throw redirect(302, "/rackets");
  return { form, racket };
};
const actions = {
  default: async ({ request, locals, params }) => {
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(302, "/login");
    const form = await superValidate(request, racket_review_schema);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      await locals.db.insert(racket_reviews).values({
        ...form.data,
        user_id: session.user.userId,
        racket_id: params.racket_id
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
