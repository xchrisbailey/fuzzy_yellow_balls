import { user } from '$lib/db/schema';
import { profile_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const current_user = await locals.db.query.user.findFirst({
		where: eq(user.id, session.user.userId),
		columns: {
			email: true,
			first_name: true,
			last_name: true
		}
	});
	if (!current_user) throw redirect(302, '/login');

	const form = await superValidate(current_user, profile_schema);

	return {
		form,
		session
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, profile_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.update(user).set(form.data).where(eq(user.id, session.user.userId));
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		return message(form, { type: 'error', text: 'profile updated' });
	}
} satisfies Actions;
