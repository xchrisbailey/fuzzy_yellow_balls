import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// for migrations
export const migrationClient = postgres(
	'postgres://postgres:postgres@0.0.0.0:5432/fuzzy_yellow_balls',
	{ max: 1 }
);

// for query purposes
export const queryClient = postgres('postgres://postgres:postgres@0.0.0.0:5432/fuzzy_yellow_balls');
export const db = drizzle(queryClient, { schema });
