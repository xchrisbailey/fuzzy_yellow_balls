// @ts-nocheck
import { user } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(302, '/login');
	}

	const current_user = await locals.db.query.user.findFirst({
		where: eq(user.id, session.user.userId),
		with: {
			reviews: {
				with: {
					string: {
						with: {
							brand: true
						}
					}
				}
			}
		}
	});

	if (!current_user) {
		throw redirect(302, '/login');
	}

	return {
		reviews: current_user.reviews
	};
};
