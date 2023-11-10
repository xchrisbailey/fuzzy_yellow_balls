import db from '$lib/db';
import type { TennisString } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const strings: TennisString[] = await db.tennisString.findMany({});
	return {
		strings
	};
};
