import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { racket_schema } from '$lib/form_schemas';
import { rackets } from '$lib/db/schema';
import { error_message_format } from '$lib/helpers/errors';

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

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(301, '/login');

		const form = await superValidate(request, racket_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		let racket_id: { id: string }[];

		try {
			racket_id = await locals.db.insert(rackets).values(form.data).returning({ id: rackets.id });
			if (!racket_id[0]) throw new Error('Unknown error');
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		return message(form, { type: 'success', text: `${form.data.name} added to database` });
		// throw redirect(302, `/rackets/${racket_id[0].id}`);
	}
} satisfies Actions;
