import { json, type RequestHandler } from '@sveltejs/kit';
import { GOOGLE_API_KEY } from '$env/static/private';

export type YoutubeSearchResponse = {
	kind: string;
	etag: string;
	items: YoutubeSearchItem[];
};

type YoutubeSearchItem = {
	kind: string;
	etag: string;
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
};

export const GET: RequestHandler = async ({ params }) => {
	const youtube_response = await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${params.string}%20${params.brand}%20tennis%20${params.type}%20review&key=${GOOGLE_API_KEY}`
	);
	const youtube_reviews: YoutubeSearchResponse = await youtube_response.json();

	return json(youtube_reviews);
};
