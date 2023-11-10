import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import db from '$lib/db';
import { superValidate } from 'sveltekit-superforms/server';
import { schema } from './schema';
import type { Brand } from '@prisma/client';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session || session.user.role !== 'Admin') throw redirect(302, '/login');

	const id = params.id;
	if (!id) throw redirect(302, '/strings');

	const string = await db.tennisString.findUnique({ where: { id }, include: { Brand: true } });

	const brands: Brand[] = await db.brand.findMany({});

	return {
		form: superValidate(string, schema),
		brands,
		current_brand: string?.Brand
	};
};

export const actions = {
	default: async ({ request, locals, params }) => {
		const session = await locals.auth.validate();
		if (!session || session.user.role !== 'Admin') throw redirect(301, '/login');

		const form = await superValidate(request, schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await db.tennisString.update({
				where: { id: params.id },
				data: {
					name: form.data.name,
					material: form.data.material,
					description: form.data.description,
					Brand: {
						connect: {
							id: form.data.brand
						}
					}
				}
			});

			return { form };
		} catch (err) {
			console.error(err);
			if (err instanceof Error) {
				return fail(500, { message: err.message });
			} else {
				return fail(500, { message: 'Unknown error' });
			}
		}
	}
} satisfies Actions;
