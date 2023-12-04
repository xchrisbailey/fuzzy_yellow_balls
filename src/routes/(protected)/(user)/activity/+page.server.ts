import { user } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(302, '/login');
	}

	const current_user = await locals.db.query.user.findFirst({
		where: eq(user.id, session.user.userId),
		with: {
			reviews: true
		}
	});

	if (!current_user) {
		throw redirect(302, '/login');
	}

	return {
		reviews: current_user.reviews
	};
};
