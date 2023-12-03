import { db } from '$lib/db';
import { auth } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

export const handle: Handle = async ({ event, resolve }) => {
	await migrate(db, { migrationsFolder: 'migrations' });

	event.locals.auth = auth.handleRequest(event);
	event.locals.db = db;
	return await resolve(event);
};
