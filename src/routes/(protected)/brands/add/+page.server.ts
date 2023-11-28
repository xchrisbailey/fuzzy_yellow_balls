import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	name: z.string(),
	about: z.string()
});

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
			return fail(400, { form });
		}

		const return_url = url.searchParams.get('return_to') || '/';
		throw redirect(302, return_url);
	}
} satisfies Actions;
