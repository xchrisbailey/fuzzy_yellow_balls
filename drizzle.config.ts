import type { Config } from 'drizzle-kit';

export default {
	schema: 'src/lib/db/schema.ts',
	out: 'migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DB_URL as string
	},
	verbose: true,
	strict: true
} satisfies Config;
