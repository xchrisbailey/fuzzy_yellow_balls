import { fail, redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import { racket_reviews } from '$lib/db/schema';
import { message, superValidate } from 'sveltekit-superforms/server';
import { racket_review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await locals.db.query.racket_reviews.findFirst({
		with: { user: true, racket: true },
		where: and(
			eq(racket_reviews.user_id, session.user.userId),
			eq(racket_reviews.id, params.racket_id)
		)
	});

	if (!review) {
		throw redirect(302, `/rackets/${params.racket_id}`);
	}

	const form = await superValidate(review, racket_review_schema);
	return { form };
};

export const actions = {
	default: async ({ locals, request, params }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, racket_review_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db
				.update(racket_reviews)
				.set(form.data)
				.where(
					and(
						eq(racket_reviews.id, params.racket_id),
						eq(racket_reviews.user_id, session.user.userId)
					)
				);
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		return message(form, { type: 'success', text: 'Review updated successfully' });
	}
} satisfies Actions;
