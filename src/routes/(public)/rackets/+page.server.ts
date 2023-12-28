import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
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
