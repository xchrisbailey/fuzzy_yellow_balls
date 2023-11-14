import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { schema } from './schema';
import { superValidate } from 'sveltekit-superforms/server';
import db from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	return {
		form: superValidate(schema)
	};
};

export const actions = {
	add: async ({ locals, params, request }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await db.review.create({
				data: {
					...form.data,
					user: { connect: { id: session.user.userId } },
					string: { connect: { id: params.id } }
				}
			});
			return { form };
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	}
} satisfies Actions;
