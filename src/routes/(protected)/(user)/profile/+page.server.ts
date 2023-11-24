import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const user = await locals.db.user.findUnique({
		where: { id: session.user.userId },
		select: { email: true, first_name: true, last_name: true }
	});
	if (!user) throw redirect(302, '/login');

	const form = await superValidate(user, formSchema);

	return {
		form,
		session
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, formSchema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.user.update({
				where: { id: session.user.userId },
				data: { ...form.data }
			});

			return { form };
		} catch (err) {
			console.error(err);
			if (err instanceof Error) {
				return fail(400, { message: err.message });
			}
			return fail(400, { message: `something went wrong: ${err}` });
		}
	}
} satisfies Actions;
