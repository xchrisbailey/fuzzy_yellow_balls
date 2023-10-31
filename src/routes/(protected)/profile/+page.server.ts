import { redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { PageServerLoad } from './$types';
import { formSchema } from './schema';
import db from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const user = await db.user.findUnique({
		where: { email: session.user.email },
		select: { email: true, first_name: true, last_name: true }
	});
	if (!user) throw redirect(302, '/login');

	return {
		form: superValidate(user, formSchema)
	};
};
