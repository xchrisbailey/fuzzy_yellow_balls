import { racket_reviews } from '$lib/db/schema';
import { racket_review_schema } from '$lib/form_schemas';
import { error_message_format } from '$lib/helpers/errors';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const form = await superValidate(racket_review_schema);

	const racket = await locals.db.query.rackets.findFirst({
		where: eq(racket_reviews.id, params.racket_id),
		with: { brand: true }
	});

	if (!racket) throw redirect(302, '/rackets');

	return { form, racket };
};

export const actions = {
	default: async ({ request, locals, params }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');

		const form = await superValidate(request, racket_review_schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.db.insert(racket_reviews).values({
				...form.data,
				user_id: session.user.userId,
				racket_id: params.racket_id
			});
		} catch (err) {
			console.error(err);
			return message(form, { type: 'error', text: error_message_format(err) });
		}

		throw redirect(302, `/rackets/${params.racket_id}`);
	}
} satisfies Actions;
