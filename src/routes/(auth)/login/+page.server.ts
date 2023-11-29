import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { login_schema } from '$lib/form_schemas';

export const load: PageServerLoad = async ({ locals }) => {
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
			if (
				err instanceof LuciaError &&
				(err.message === 'AUTH_INVALID_KEY_ID' || err.message === 'AUTH_INVALID_PASSWORD')
			) {
				return fail(400, {
					message: 'Incorrect email or password'
				});
			}
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
		throw redirect(302, '/');
	}
} satisfies Actions;
