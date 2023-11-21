import { auth } from '$lib/server/auth';
import { PrismaClient } from '@prisma/client';
import type { Handle } from '@sveltejs/kit';

export const prisma_client = new PrismaClient();

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	event.locals.db = prisma_client;
	return await resolve(event);
};
