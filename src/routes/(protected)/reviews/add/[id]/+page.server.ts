import db from '$lib/db';
import { Prisma } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import { redirect as flash_redirect } from 'sveltekit-flash-message/server';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { schema } from './schema';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	return {
		form: superValidate(schema)
	};
};

export const actions = {
	add: async (event) => {
		const { locals, params, request } = event;
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

			return redirect(302, `/string/${params.id}`);
		} catch (err) {
			console.error(err);
			if (err instanceof Prisma.PrismaClientKnownRequestError) {
				if (err.code === 'P2002') {
					const message = {
						type: 'error',
						message: 'You have already reviewed this string.'
					} as const;

					throw flash_redirect(message, event);
				}
			}
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	}
} satisfies Actions;
