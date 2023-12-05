import { relations } from 'drizzle-orm';
import {
	bigint,
	integer,
	pgEnum,
	pgTable,
	text,
	timestamp,
	unique,
	uuid,
	varchar
} from 'drizzle-orm/pg-core';

export const reviews = pgTable(
	'reviews',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull().unique(),
		power: integer('power').notNull(),
		feel: integer('feel').notNull(),
		control: integer('control').notNull(),
		durability: integer('durability').notNull(),
		spin: integer('spin').notNull(),
		comfort: integer('comfort').notNull(),
		playability: integer('playability').notNull(),
		comments: text('comments').notNull(),
		created_at: timestamp('created_at'),
		updated_at: timestamp('updated_at'),
		user_id: varchar('user_id')
			.notNull()
			.references(() => user.id),
		string_id: uuid('string_id')
			.notNull()
			.references(() => strings.id)
	},
	(t) => ({
		unq: unique().on(t.user_id, t.string_id)
	})
);

export const reviews_relations = relations(reviews, ({ one }) => ({
	user: one(user, {
		fields: [reviews.user_id],
		references: [user.id]
	}),
	string: one(strings, {
		fields: [reviews.string_id],
		references: [strings.id]
	})
}));

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;

export const weight_unit_enum = pgEnum('weight_unit', ['grams', 'ounces']);
export const balance_unit_enum = pgEnum('balance_unit', ['inches', 'centimeters', 'points']);

export const rackets = pgTable(
	'rackets',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull().unique(),
		name: varchar('name', { length: 256 }).notNull(),
		weight: integer('weight').notNull(),
		weight_unit: weight_unit_enum('weight_unit').notNull().default('grams'),
		balance: integer('balance').notNull(),
		balance_unit: balance_unit_enum('balance_unit').notNull().default('points'),
		head_size: integer('head_size').notNull(),
		swingweight: integer('swingweight').notNull(),
		mains: integer('mains').notNull(),
		crosses: integer('crosses').notNull(),
		description: text('description').notNull(),
		brand_id: uuid('brand_id')
			.references(() => brands.id)
			.notNull()
	},
	(t) => ({
		unq: unique().on(t.name, t.brand_id)
	})
);

export const racketRelations = relations(rackets, ({ one }) => ({
	brand: one(brands, {
		fields: [rackets.brand_id],
		references: [brands.id]
	})
}));

export type Racket = typeof rackets.$inferSelect;
export type NewRacket = typeof rackets.$inferInsert;

export const strings = pgTable(
	'strings',
	{
		id: uuid('id').defaultRandom().primaryKey().notNull().unique(),
		name: varchar('name', { length: 256 }).notNull(),
		material: varchar('material', { length: 256 }).notNull(),
		description: text('description').notNull(),
		brand_id: uuid('brand_id')
			.references(() => brands.id)
			.notNull()
	},
	(t) => ({
		unq: unique().on(t.name, t.brand_id)
	})
);

export const stringsRelations = relations(strings, ({ one, many }) => ({
	brand: one(brands, {
		fields: [strings.brand_id],
		references: [brands.id]
	}),
	reviews: many(reviews)
}));

export type TString = typeof strings.$inferSelect;
export type NewTString = typeof strings.$inferInsert;

export const brands = pgTable('brands', {
	id: uuid('id').defaultRandom().primaryKey().notNull().unique(),
	name: varchar('name', { length: 256 }).unique().notNull(),
	about: text('about').notNull()
});

export const brands_relations = relations(brands, ({ many }) => ({
	strings: many(strings),
	rackets: many(rackets)
}));

export type Brand = typeof brands.$inferSelect;
export type NewBrand = typeof brands.$inferInsert;

export const role_enum = pgEnum('role', ['ADMIN', 'USER']);

export const user = pgTable('user', {
	id: varchar('id', { length: 15 }).unique().primaryKey(),
	email: varchar('email', { length: 256 }).unique().notNull(),
	first_name: varchar('first_name', { length: 256 }).notNull(),
	last_name: varchar('last_name', { length: 256 }).notNull(),
	role: role_enum('role').default('USER')
});

export const userRelations = relations(user, ({ many }) => ({
	reviews: many(reviews)
}));

export type User = typeof user.$inferSelect;

export const session = pgTable('session', {
	id: varchar('id', { length: 128 }).primaryKey(),
	userId: varchar('user_id', { length: 15 })
		.notNull()
		.references(() => user.id),
	activeExpires: bigint('active_expires', {
		mode: 'number'
	}).notNull(),
	idleExpires: bigint('idle_expires', {
		mode: 'number'
	}).notNull()
});

export const key = pgTable('user_key', {
	id: varchar('id', {
		length: 255
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 15
	})
		.notNull()
		.references(() => user.id),
	hashedPassword: varchar('hashed_password', {
		length: 255
	})
});
