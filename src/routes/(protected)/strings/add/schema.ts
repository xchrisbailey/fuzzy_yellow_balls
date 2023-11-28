import { z } from 'zod';

export const schema = z.object({
	name: z.string().min(1),
	brand: z.string().min(1),
	material: z.string().min(1),
	description: z.string().min(1)
});

export type StringFormSchema = typeof schema;
