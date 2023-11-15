import { redirect } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from './$types';
import db from '$lib/db';
import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const { locals, params } = event;
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	try {
		const review = await db.review.findFirst({ where: { user_id: session.user.userId } });
		if (!review)
			throw redirect(
				302,
				`/string/${params.id}`,
				{
					type: 'error',
					message: 'You have not reviewed this string yet.'
				},
				event
			);

		return {
			form: superValidate(review, schema)
		};
	} catch (err) {
		console.error(err);
		if (err instanceof Error) {
			return fail(500, { message: err.message });
		} else {
			return fail(500, { message: 'Unknown error' });
		}
	}
};
