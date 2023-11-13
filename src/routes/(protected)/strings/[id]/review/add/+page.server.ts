import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { schema } from './schema';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	return {
		form: superValidate(schema)
	};
};
