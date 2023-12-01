import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const form = await superValidate(review_schema);
	const string = await locals.db.tennisString.findUnique({
		where: { id: params.id },
		include: {
			Brand: true
		}
	});

	if (!string) throw redirect(302, '/strings');

	return {
		form,
		string
	};
};

export const actions = {
	add: async (event) => {
		const { locals, params, request } = event;
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, review_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.review.create({
				data: {
					...form.data,
					user: { connect: { id: session.user.userId } },
					string: { connect: { id: params.id } }
				}
			});
		} catch (err) {
			console.error(err);
			return message(form, error_message_format(err));
		}

		throw redirect(302, `/strings/${params.id}`);
	}
} satisfies Actions;
