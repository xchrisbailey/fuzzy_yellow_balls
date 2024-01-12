/* eslint-disable @typescript-eslint/ban-types */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />
import * as schema from './lib/db/schema';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

declare global {
	namespace App {
		namespace Superforms {
			type Message = {
				type: 'error' | 'success';
				text: string;
			};
		}
		interface PageData {
			flash?: { type: 'success' | 'error'; message: string };
		}

		interface Locals {
			db: PostgresJsDatabase<typeof schema>;
			auth: import('lucia').AuthRequest;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import('./lib/server/auth').Auth;
		type DatabaseUserAttributes = {
			email: string;
			first_name: string;
			last_name: string;
			role: 'ADMIN' | 'USER';
		};
		// type DatabaseSessionAttributes = {};
		type DatabaseSessionAttributes = Record<string, unknown>;
	}
}

export {};
