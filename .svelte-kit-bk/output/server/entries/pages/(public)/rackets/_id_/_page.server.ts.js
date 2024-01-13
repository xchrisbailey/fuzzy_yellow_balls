import { eq } from "drizzle-orm";
import { r as rackets } from "../../../../../chunks/schema.js";
import { r as redirect } from "../../../../../chunks/index.js";
const load = async ({ params, locals, fetch }) => {
  const racket = await locals.db.query.rackets.findFirst({
    where: eq(rackets.id, params.id),
    with: {
      brand: true,
      reviews: {
        with: {
          racket: {
            with: {
              brand: true
            }
          }
        },
        limit: 10
      }
    }
  });
  if (!racket) {
    throw redirect(302, "/rackets");
  }
  const youtube_reviews_response = await fetch(
    `/api/youtube/racket/${racket.brand.name}/${racket.name}`
  );
  const youtube_reviews = await youtube_reviews_response.json();
  return {
    racket,
    youtube_reviews
  };
};
export {
  load
};
