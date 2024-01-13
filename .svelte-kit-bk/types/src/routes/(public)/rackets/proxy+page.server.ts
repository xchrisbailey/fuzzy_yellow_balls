// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	const rackets = await locals.db.query.rackets.findMany({
		with: {
			brand: true,
			reviews: true
		}
	});

	return {
		rackets
	};
};
