import type { Brand, TennisString } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { string_schema } from '$lib/form_schemas';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const brands: Brand[] = await locals.db.brand.findMany({});

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

		let tennis_string: TennisString;

		try {
			tennis_string = await locals.db.tennisString.create({
				data: {
					name: form.data.name,
					Brand: {
						connect: {
							id: form.data.brand
						}
					},
					description: form.data.description,
					material: form.data.material
				}
			});
		} catch (err) {
			console.error(err);
			if (err instanceof Error) {
				return fail(500, { message: err.message });
			} else {
				return fail(500, { message: 'Unknown error' });
			}
		}

		throw redirect(302, `/strings/${tennis_string.id}`);
	}
} satisfies Actions;
