// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	const strings = await locals.db.query.strings.findMany({ with: { brand: true, reviews: true } });
	return {
		strings
	};
};
