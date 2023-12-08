import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { rackets } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';
import type { YoutubeSearchResponse } from '../../../api/youtube/[type]/[brand]/[string]/+server';

export const load: PageServerLoad = async ({ params, locals, fetch }) => {
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
		throw redirect(302, '/rackets');
	}

	const youtube_reviews_response = await fetch(
		`/api/youtube/racket/${racket.brand.name}/${racket.name}`
	);
	const youtube_reviews: YoutubeSearchResponse = await youtube_reviews_response.json();

	return {
		racket,
		youtube_reviews
	};
};
