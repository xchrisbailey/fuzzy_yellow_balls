import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { YoutubeSearchResponse } from '../../../api/youtube/[brand]/[string]/+server';

export const load: PageServerLoad = async ({ locals, params, fetch }) => {
	const string = await locals.db.tennisString.findFirst({
		where: { id: params.id },
		include: { Brand: true, Review: { take: 10 } }
	});

	if (!string) {
		throw redirect(302, '/string');
	}

	const youtube_reviews_response = await fetch(`/api/youtube/${string.name}/${string.name}`);
	const youtube_reviews: YoutubeSearchResponse = await youtube_reviews_response.json();

	return { string, youtube_reviews };
};
