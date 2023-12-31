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
	year: z.coerce.number().int().min(1950).max(2025).step(1),
	weight: z.coerce.number().int().min(1).max(500),
	weight_unit: z.enum(['grams', 'ounces']).default('grams'),
	balance: z.coerce.number().int().min(1).max(500),
	balance_unit: z.enum(['inches', 'centimeters', 'points']).default('points'),
	head_size: z.coerce.number().int().min(1).max(500).step(1),
	swingweight: z.coerce.number().int().min(1).max(500).step(1),
	mains: z.coerce.number().int().min(1).max(500).step(1),
	crosses: z.coerce.number().int().min(1).max(500).step(1),
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

export const racket_review_schema = z.object({
	groundstrokes: z.coerce.number().int().min(1).max(10),
	volleys: z.coerce.number().int().min(1).max(10),
	serves: z.coerce.number().int().min(1).max(10),
	returns: z.coerce.number().int().min(1).max(10),
	power: z.coerce.number().int().min(1).max(10),
	control: z.coerce.number().int().min(1).max(10),
	maneuverability: z.coerce.number().int().min(1).max(10),
	stability: z.coerce.number().int().min(1).max(10),
	comfort: z.coerce.number().int().min(1).max(10),
	feel: z.coerce.number().int().min(1).max(10),
	topspin: z.coerce.number().int().min(1).max(10),
	slice: z.coerce.number().int().min(1).max(10),
	comments: z.string().max(500)
});

export type RacketReviewFormSchema = typeof racket_review_schema;
