import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(302, '/');
	}

	const form = await superValidate(formSchema);

	return {
		form
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, formSchema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'email', // auth method
					providerUserId: form.data.email.toLowerCase(), // unique id when using "email" auth method
					password: form.data.password // hashed by Lucia
				},
				attributes: {
					email: form.data.email.toLowerCase(),
					first_name: form.data.first_name,
					last_name: form.data.last_name,
					role: 'User'
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
		throw redirect(302, '/');
	}
};
