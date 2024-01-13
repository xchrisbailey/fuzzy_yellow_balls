import { j as json } from "../../../../../../../chunks/index.js";
const GOOGLE_API_KEY = "AIzaSyAW7MZvjX2BmL7i_BV3uHkJfZ7BFlbspRM";
const GET = async ({ params }) => {
  const youtube_response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${params.string}%20${params.brand}%20tennis%20${params.type}%20review&key=${GOOGLE_API_KEY}`
  );
  const youtube_reviews = await youtube_response.json();
  return json(youtube_reviews);
};
export {
  GET
};
