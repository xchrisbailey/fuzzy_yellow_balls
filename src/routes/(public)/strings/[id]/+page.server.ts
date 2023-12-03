import { strings, type Brand, type TString, type Review } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { YoutubeSearchResponse } from '../../../api/youtube/[brand]/[string]/+server';
import type { PageServerLoad } from './$types';

interface StringWithReviews extends TString {
	brand: Brand;
	reviews: Review[];
}

export const load: PageServerLoad = async ({ locals, params, fetch }) => {
	const string: StringWithReviews | undefined = await locals.db.query.strings.findFirst({
		where: eq(strings.id, params.id),
		with: {
			brand: true,
			reviews: {
				limit: 10
			}
		}
	});

	if (!string) {
		throw redirect(302, '/string');
	}

	const youtube_reviews_response = await fetch(`/api/youtube/${string.name}/${string.name}`);
	const youtube_reviews: YoutubeSearchResponse = await youtube_reviews_response.json();

	return { string, youtube_reviews };
};
