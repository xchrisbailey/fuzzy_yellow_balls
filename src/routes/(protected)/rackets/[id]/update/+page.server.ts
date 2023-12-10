import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { eq } from 'drizzle-orm';
import { rackets } from '$lib/db/schema';
import { superValidate } from 'sveltekit-superforms/server';
import { racket_review_schema } from '$lib/form_schemas';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');

	const review = await locals.db.query.racket_reviews.findFirst({
		where: eq(rackets.id, params.id)
	});
	if (!review) throw redirect(302, '/rackets');

	const form = await superValidate(review, racket_review_schema);

	return { form };
};
