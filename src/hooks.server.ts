import { auth } from '$lib/server/auth';
import { PrismaClient } from '@prisma/client';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const prisma_client = new PrismaClient();

const db_handler: Handle = async ({ event, resolve }) => {
	event.locals.db = prisma_client;
	const response = await resolve(event);
	return response;
};

const authentication_handler: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const response = await resolve(event);
	return response;
};

// const authorization_handler = CanIKit.handle({
// 	pagePolicies: import.meta.glob('./routes/**/page.policy.*'),
// 	pageSevers: import.meta.glob('./routes/**/+page.server.*'),
// 	layoutPolicies: import.meta.glob('./routes/**/layout.policy.*'),
// 	layoutServers: import.meta.glob('./routes/**/+layout.server.*'),
// 	apiServers: import.meta.glob('./routes/**/+server.*'),
// 	apiPolicies: import.meta.glob('./routes/**/policy.*')
// });

export const handle = sequence(db_handler, authentication_handler);
