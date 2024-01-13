import { u as user } from "../../../../../chunks/schema.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { eq } from "drizzle-orm";
const load = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    throw redirect(302, "/login");
  }
  const current_user = await locals.db.query.user.findFirst({
    where: eq(user.id, session.user.userId),
    with: {
      reviews: {
        with: {
          string: {
            with: {
              brand: true
            }
          }
        }
      }
    }
  });
  if (!current_user) {
    throw redirect(302, "/login");
  }
  return {
    reviews: current_user.reviews
  };
};
export {
  load
};
