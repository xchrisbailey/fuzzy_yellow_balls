import { s as strings } from "../../../../../chunks/schema.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { eq } from "drizzle-orm";
const load = async ({ locals, params, fetch }) => {
  const string = await locals.db.query.strings.findFirst({
    where: eq(strings.id, params.id),
    with: {
      brand: true,
      reviews: {
        with: {
          string: {
            with: { brand: true }
          }
        },
        limit: 10
      }
    }
  });
  if (!string) {
    throw redirect(302, "/string");
  }
  const youtube_reviews_response = await fetch(
    `/api/youtube/string/${string.brand.name}/${string.name}`
  );
  const youtube_reviews = await youtube_reviews_response.json();
  return { string, youtube_reviews };
};
export {
  load
};
