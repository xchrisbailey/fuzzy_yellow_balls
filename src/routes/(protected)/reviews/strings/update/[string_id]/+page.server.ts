import { reviews } from '$lib/db/schema';
import { review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { fail, redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { locals, params } = event;
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await locals.db.query.reviews.findFirst({
		where: and(eq(reviews.id, params.string_id), eq(reviews.user_id, session.user.userId)),
		with: { string: true, user: true }
	});

	if (!review) {
		throw redirect(302, `/string/${params.string_id}`);
	}

	const form = await superValidate(review, review_schema);

	return {
		form
	};
};

export const actions = {
	default: async (event) => {
		const { locals, request, params } = event;
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, review_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db
				.update(reviews)
				.set(form.data)
				.where(and(eq(reviews.id, params.string_id), eq(reviews.user_id, session.user.userId)));
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		return message(form, { type: 'success', text: 'Review updated successfully' });
	}
} satisfies Actions;
