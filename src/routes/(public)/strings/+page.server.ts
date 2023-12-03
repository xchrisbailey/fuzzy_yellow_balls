import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const strings = await locals.db.query.strings.findMany({ with: { brand: true } });
	return {
		strings
	};
};
