import { redirect } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from './$types';
import db from '$lib/db';
import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';

export const load: PageServerLoad = async (event) => {
	const { locals, params } = event;
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await db.review.findFirst({
		where: { user_id: session.user.userId },
		include: { string: true, user: true }
	});

	if (!review) {
		throw redirect(
			302,
			`/string/${params.id}`,
			{
				type: 'error',
				message: 'You have not reviewed this string yet.'
			},
			event
		);
	}
	return {
		form: superValidate(review, schema)
	};
};
