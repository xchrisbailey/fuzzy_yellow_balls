import db from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const strings = await db.tennisString.findMany({ include: { Brand: true } });
	return {
		strings
	};
};
