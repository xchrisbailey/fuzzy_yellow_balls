import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';

// for migrations
const migrationClient = postgres('postgres://postgres:adminadmin@0.0.0.0:5432/db', { max: 1 });
migrate(drizzle(migrationClient), {
	migrationsFolder: 'migrations'
});

// for query purposes
export const queryClient = postgres('postgres://postgres:postgres@0.0.0.0:5432/string_bar');
export const db = drizzle(queryClient, { schema });
