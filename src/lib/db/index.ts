import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

const dbUrl =
	env.NODE_ENV === 'test'
		? 'postgres://postgres:postgres@0.0.0.0:5432/fuzzy_yellow_balls_test'
		: 'postgres://postgres:postgres@0.0.0.0:5432/fuzzy_yellow_balls';
// for migrations
export const migrationClient = postgres(dbUrl, { max: 1 });

// for query purposes
export const queryClient = postgres(dbUrl);
export const db = drizzle(queryClient, { schema });
