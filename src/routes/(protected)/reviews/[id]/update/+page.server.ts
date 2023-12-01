import { review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { locals, params } = event;
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await locals.db.review.findFirst({
		where: { user_id: session.user.userId },
		include: { string: true, user: true }
	});

	if (!review) {
		throw redirect(302, `/string/${params.id}`);
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
			await locals.db.review.update({
				where: { id: params.id, user_id: session.user.userId },
				data: form.data
			});

			return { form };
		} catch (err) {
			console.error(err);
			return message(form, error_message_format(err));
		}
	}
} satisfies Actions;
