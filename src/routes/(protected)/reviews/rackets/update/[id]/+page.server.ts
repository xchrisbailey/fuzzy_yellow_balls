import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { and, eq } from 'drizzle-orm';
import { racket_reviews, user } from '$lib/db/schema';
import { superValidate } from 'sveltekit-superforms/server';
import { racket_review_schema } from '$lib/form_schemas';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await locals.db.query.racket_reviews.findFirst({
		with: { user: true, racket: true },
		where: and(eq(user.id, session.user.userId), eq(racket_reviews.id, params.id))
	});

	if (!review) {
		throw redirect(302, `/rackets/${params.id}`);
	}

	const form = await superValidate(review, racket_review_schema);
	return { form };
};
