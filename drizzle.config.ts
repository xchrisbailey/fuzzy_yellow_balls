import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	schema: 'src/lib/db/schema.ts',
	out: 'migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL as string
	},
	verbose: false,
	strict: true
} satisfies Config;
