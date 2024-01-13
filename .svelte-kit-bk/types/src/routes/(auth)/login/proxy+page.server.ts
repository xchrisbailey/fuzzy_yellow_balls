// @ts-nocheck
import { login_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(302, '/');
	}

	const form = await superValidate(login_schema);

	return {
		form
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, login_schema);
		if (!form.valid) return fail(400, { form });

		try {
			const key = await auth.useKey('email', form.data.email.toLowerCase(), form.data.password);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}
		throw redirect(302, '/');
	}
} satisfies Actions;
