import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { string_schema } from '$lib/form_schemas';
import { eq } from 'drizzle-orm';
import { strings, type Brand } from '$lib/db/schema';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session || session.user.role !== 'ADMIN') throw redirect(302, '/login');

	const id = params.id;
	if (!id) throw redirect(302, '/strings');

	const string = await locals.db.query.strings.findFirst({
		where: eq(strings.id, id)
	});
	if (!string) throw redirect(302, '/strings');

	const brands: Brand[] = await locals.db.query.brands.findMany({});

	const form = await superValidate({ ...string, brand_id: string.brand_id }, string_schema);

	return {
		form,
		brands
	};
};

export const actions = {
	default: async ({ request, locals, params }) => {
		const session = await locals.auth.validate();
		if (!session || session.user.role !== 'ADMIN') throw redirect(301, '/login');

		const form = await superValidate(request, string_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.update(strings).set(form.data).where(eq(strings.id, params.id));

			return { form };
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
	}
} satisfies Actions;
