import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	first_name: z.string(),
	last_name: z.string()
});

export type FormSchema = typeof formSchema;
