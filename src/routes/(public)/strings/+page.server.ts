import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const strings = await locals.db.tennisString.findMany({
		include: { Brand: true, Review: true }
	});
	return {
		strings
	};
};
