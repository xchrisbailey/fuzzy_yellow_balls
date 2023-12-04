import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { racket_schema } from '$lib/form_schemas';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(302, '/login');
	}

	const brands = await locals.db.query.brands.findMany();

	const form = await superValidate(racket_schema);

	return {
		form,
		brands
	};
};
