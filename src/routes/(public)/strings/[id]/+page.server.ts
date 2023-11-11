import db from '$lib/db';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const string = await db.tennisString.findFirst({
		where: { id: params.id },
		include: { Brand: true }
	});

	if (!string) {
		throw redirect(302, '/string');
	}

	return { string };
};
