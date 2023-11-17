import { z } from 'zod';

export const schema = z.object({
	power: z.coerce.number().int().min(1).max(10).default(0),
	feel: z.coerce.number().int().min(1).max(10).default(0),
	control: z.coerce.number().int().min(1).max(10).default(0),
	durability: z.coerce.number().int().min(1).max(10).default(0),
	spin: z.coerce.number().int().min(1).max(10).default(0),
	comfort: z.coerce.number().int().min(1).max(10).default(0),
	playability: z.coerce.number().int().min(1).max(10).default(0),
	comments: z.string().max(500)
});

export type Schema = typeof schema;
