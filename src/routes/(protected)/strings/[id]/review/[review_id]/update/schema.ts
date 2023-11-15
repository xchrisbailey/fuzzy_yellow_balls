import { z } from 'zod';

export const schema = z.object({
	power: z.coerce.number().int().min(1).max(10),
	feel: z.coerce.number().int().min(1).max(10),
	control: z.coerce.number().int().min(1).max(10),
	durability: z.coerce.number().int().min(1).max(10),
	spin: z.coerce.number().int().min(1).max(10),
	comfort: z.coerce.number().int().min(1).max(10),
	playability: z.coerce.number().int().min(1).max(10),
	comments: z.string().max(500)
});

export type FormSchema = typeof schema;
