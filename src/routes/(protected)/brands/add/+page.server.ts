import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { error_message_format } from '$lib/helpers/errors';

const schema = z.object({
	name: z.string(),
	about: z.string()
});

export type NewBrandForm = typeof schema;

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const form = await superValidate(schema);
	return { form };
};

export const actions = {
	default: async ({ request, locals, url }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, schema);
		if (!form.valid) {
			throw fail(400, { form });
		}

		try {
			await locals.db.brand.create({ data: form.data });
		} catch (err) {
			console.error(err);
			return message(form, error_message_format(err));
		}

		const return_url = url.searchParams.get('return_to') || '/';
		throw redirect(302, return_url);
	}
} satisfies Actions;
