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
		id: uuid('id').unique().primaryKey(),
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
		user_id: uuid('user_id')
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

export const strings = pgTable(
	'strings',
	{
		id: uuid('id').unique().primaryKey().notNull(),
		name: varchar('name', { length: 256 }),
		material: varchar('material', { length: 256 }),
		description: text('description'),
		brand_id: uuid('brand_id')
			.references(() => brands.id)
			.notNull()
	},
	(t) => ({
		unq: unique().on(t.name, t.brand_id)
	})
);

export const brands = pgTable('brands', {
	id: uuid('id').unique().primaryKey(),
	name: varchar('name', { length: 256 }).unique(),
	about: text('about')
});

export const role_enum = pgEnum('role', ['ADMIN', 'USER']);

export const user = pgTable('user', {
	id: varchar('id', { length: 15 }).unique().primaryKey(),
	email: varchar('email', { length: 256 }).unique(),
	first_name: varchar('first_name', { length: 256 }),
	last_name: varchar('last_name', { length: 256 }),
	role: role_enum('role').default('USER')
});

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
