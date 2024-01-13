// @ts-nocheck
import type { LayoutServerLoad } from './$types';
import { loadFlash } from 'sveltekit-flash-message/server';

export const load = loadFlash(async ({ locals }) => {
	const session = await locals.auth.validate();
	return { session };
});
;null as any as LayoutServerLoad;