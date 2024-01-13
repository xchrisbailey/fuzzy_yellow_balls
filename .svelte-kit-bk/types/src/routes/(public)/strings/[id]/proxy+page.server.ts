// @ts-nocheck
import { strings } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { YoutubeSearchResponse } from '../../../api/youtube/[type]/[brand]/[string]/+server';
import type { PageServerLoad } from './$types';

export const load = async ({ locals, params, fetch }: Parameters<PageServerLoad>[0]) => {
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
		throw redirect(302, '/string');
	}

	const youtube_reviews_response = await fetch(
		`/api/youtube/string/${string.brand.name}/${string.name}`
	);
	const youtube_reviews: YoutubeSearchResponse = await youtube_reviews_response.json();

	return { string, youtube_reviews };
};
