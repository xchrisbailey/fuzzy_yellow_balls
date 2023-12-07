import { racket_reviews } from '$lib/db/schema';
import { racket_review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const form = await superValidate(racket_review_schema);

	return { form };
};

export const actions = {
	add: async ({ request, locals, params }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, racket_review_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.insert(racket_reviews).values({
				...form.data,
				user_id: session.user.userId,
				racket_id: params.racket_id
			});
		} catch (err) {
			console.error(err);
			return message(form, error_message_format(err));
		}

		throw redirect(302, `/rackets/${params.racket_id}`);
	}
} satisfies Actions;
