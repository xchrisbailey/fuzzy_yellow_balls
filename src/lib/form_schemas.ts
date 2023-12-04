import { z } from 'zod';

export const login_schema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});

export type LoginFormSchema = typeof login_schema;

export const signup_schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	first_name: z.string(),
	last_name: z.string()
});

export type SignupFormSchema = typeof signup_schema;

export const string_schema = z.object({
	name: z.string().min(1),
	brand_id: z.string().min(1),
	material: z.string().min(1),
	description: z.string().min(1)
});

export type StringFormSchema = typeof string_schema;

export const racket_schema = z.object({
	name: z.string().min(1),
	weight: z.coerce.number().int().min(1).max(500),
	weight_unit: z.enum(['grams', 'ounces']).default('grams'),
	head_size: z.coerce.number().int().min(1).max(500),
	description: z.string().min(1),
	brand_id: z.string().min(1)
});

export type RacketFormSchema = typeof racket_schema;

export const profile_schema = z.object({
	email: z.string().email(),
	first_name: z.string(),
	last_name: z.string()
});

export type ProfileFormSchema = typeof profile_schema;

export const review_schema = z.object({
	power: z.coerce.number().int().min(1).max(10),
	feel: z.coerce.number().int().min(1).max(10),
	control: z.coerce.number().int().min(1).max(10),
	durability: z.coerce.number().int().min(1).max(10),
	spin: z.coerce.number().int().min(1).max(10),
	comfort: z.coerce.number().int().min(1).max(10),
	playability: z.coerce.number().int().min(1).max(10),
	comments: z.string().max(500)
});

export type ReviewFormSchema = typeof review_schema;
