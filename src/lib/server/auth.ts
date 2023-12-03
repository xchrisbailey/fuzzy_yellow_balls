import { dev } from '$app/environment';
import { queryClient } from '$lib/db';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: postgresAdapter(queryClient, {
		user: 'user',
		session: 'session',
		key: 'user_key'
	}),
	getUserAttributes: (data) => {
		return {
			email: data.email,
			first_name: data.first_name,
			last_name: data.last_name,
			role: data.role
		};
	}
});

export type Auth = typeof auth;
