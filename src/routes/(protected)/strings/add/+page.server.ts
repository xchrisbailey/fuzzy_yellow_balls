import { strings } from '$lib/db/schema';
import { string_schema } from '$lib/form_schemas';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const brands = await locals.db.query.brands.findMany();

	const form = await superValidate(string_schema);

	return {
		form,
		brands
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(301, '/login');

		const form = await superValidate(request, string_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		// let tennis_string: { id: string }[];

		try {
			await locals.db.insert(strings).values(form.data).returning();
		} catch (err) {
			console.error(err);
			if (err instanceof Error) {
				if (err.message.includes('Unique constraint failed on the fields: (`name`,`brand_id`)')) {
					return message(form, { type: 'error', text: 'A string with this name already exists' });
				}
				return message(form, { type: 'error', text: err.message });
			} else {
				return message(form, { type: 'error', text: 'Unknown error' });
			}
		}

		return message(form, {
			type: 'success',
			text: `${form.data.name} added to database`
		});
	}
} satisfies Actions;
