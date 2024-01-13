import { r as redirect, f as fail } from "../../../../../../chunks/index.js";
import { eq } from "drizzle-orm";
import { r as rackets, a as racket_reviews } from "../../../../../../chunks/schema.js";
import { s as superValidate, m as message } from "../../../../../../chunks/superValidate.js";
import { r as racket_review_schema } from "../../../../../../chunks/form_schemas.js";
import { e as error_message_format } from "../../../../../../chunks/errors.js";
const load = async ({ locals, params }) => {
  const session = await locals.auth.validate();
  if (!session)
    throw redirect(302, "/login");
  const review = await locals.db.query.racket_reviews.findFirst({
    where: eq(rackets.id, params.id),
    with: {
      racket: {
        with: {
          brand: true
        }
      }
    }
  });
  if (!review)
    throw redirect(302, "/rackets");
  const form = await superValidate(review, racket_review_schema);
  return { form, review };
};
const actions = {
  default: async ({ locals, request, params }) => {
    const session = await locals.auth.validate();
    if (!session)
      throw redirect(302, "/login");
    const form = await superValidate(request, racket_review_schema);
    if (!form.valid)
      return fail(400, { form });
    try {
      await locals.db.update(racket_reviews).set(form.data).where(eq(rackets.id, params.id));
    } catch (err) {
      return message(form, { type: "error", text: error_message_format(err) });
    }
    return message(form, { type: "success", text: "Review updated" });
  }
};
export {
  actions,
  load
};
