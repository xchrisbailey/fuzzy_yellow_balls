/* eslint-disable @typescript-eslint/ban-types */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="lucia" />

import type { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		interface PageData {
			flash?: { type: 'success' | 'error'; message: string };
		}

		interface Locals {
			db: PrismaClient;
			auth: import('lucia').AuthRequest;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import('$lib/server/auth').Auth;
		type DatabaseUserAttributes = {
			email: string;
			first_name: string;
			last_name: string;
			role: 'Admin' | 'User';
		};
		// type DatabaseSessionAttributes = {};
		type DatabaseSessionAttributes = Record<string, unknown>;
	}
}

export {};
