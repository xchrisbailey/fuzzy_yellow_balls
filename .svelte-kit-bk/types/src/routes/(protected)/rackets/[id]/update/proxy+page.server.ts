// @ts-nocheck
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { eq } from 'drizzle-orm';
import { racket_reviews, rackets } from '$lib/db/schema';
import { message, superValidate } from 'sveltekit-superforms/server';
import { racket_review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';

export const load = async ({ locals, params }: Parameters<PageServerLoad>[0]) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await locals.db.query.racket_reviews.findFirst({
		where: eq(rackets.id, params.id),
		with: {
			racket: {
				with: {
					brand: true
				}
			}
		}
	});
	if (!review) throw redirect(302, '/rackets');

	const form = await superValidate(review, racket_review_schema);

	return { form, review };
};

export const actions = {
	default: async ({ locals, request, params }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, racket_review_schema);
		if (!form.valid) return fail(400, { form });

		try {
			await locals.db.update(racket_reviews).set(form.data).where(eq(rackets.id, params.id));
		} catch (err) {
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		return message(form, { type: 'success', text: 'Review updated' });
	}
} satisfies Actions;
