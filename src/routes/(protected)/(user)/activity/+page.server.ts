import { user } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(302, '/login');
	}

	const reviews = await locals.db.query.reviews.findMany({
		where: eq(user.id, session.user.userId),
		with: {
			string: {
				with: { brand: true }
			}
		}
	});

	return {
		reviews
	};
};
