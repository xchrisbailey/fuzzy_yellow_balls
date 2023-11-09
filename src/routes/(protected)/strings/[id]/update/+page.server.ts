import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
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
