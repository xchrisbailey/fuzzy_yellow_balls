import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { reviews, strings } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const form = await superValidate(review_schema);
	const string = await locals.db.query.strings.findFirst({
		where: eq(strings.id, params.id),
		with: { brand: true }
	});

	if (!string) throw redirect(302, '/strings');

	return {
		form,
		string
	};
};

export const actions = {
	default: async (event) => {
		const { locals, params, request } = event;
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, review_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.insert(reviews).values({
				...form.data,
				string_id: params.id,
				user_id: session.user.userId
			});
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		// throw redirect(302, `/strings/${params.id}`);
		return message(form, { type: 'success', text: 'review added' });
	}
} satisfies Actions;
