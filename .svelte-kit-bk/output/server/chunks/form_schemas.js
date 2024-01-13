import { z } from "zod";
const login_schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
const signup_schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  first_name: z.string(),
  last_name: z.string()
});
const string_schema = z.object({
  name: z.string().min(1),
  brand_id: z.string().min(1),
  material: z.string().min(1),
  description: z.string().min(1)
});
const racket_schema = z.object({
  name: z.string().min(1),
  year: z.coerce.number().int().min(1950).max(2025).step(1),
  weight: z.coerce.number().int().min(1).max(500),
  weight_unit: z.enum(["grams", "ounces"]).default("grams"),
  balance: z.coerce.number().int().min(1).max(500),
  balance_unit: z.enum(["inches", "centimeters", "points"]).default("points"),
  head_size: z.coerce.number().int().min(1).max(500).step(1),
  swingweight: z.coerce.number().int().min(1).max(500).step(1),
  mains: z.coerce.number().int().min(1).max(500).step(1),
  crosses: z.coerce.number().int().min(1).max(500).step(1),
  description: z.string().min(1),
  brand_id: z.string().min(1)
});
const profile_schema = z.object({
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string()
});
const review_schema = z.object({
  power: z.coerce.number().int().min(1).max(10),
  feel: z.coerce.number().int().min(1).max(10),
  control: z.coerce.number().int().min(1).max(10),
  durability: z.coerce.number().int().min(1).max(10),
  spin: z.coerce.number().int().min(1).max(10),
  comfort: z.coerce.number().int().min(1).max(10),
  playability: z.coerce.number().int().min(1).max(10),
  comments: z.string().max(500)
});
const racket_review_schema = z.object({
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
export {
  racket_schema as a,
  review_schema as b,
  string_schema as c,
  login_schema as l,
  profile_schema as p,
  racket_review_schema as r,
  signup_schema as s
};
