import { relations } from "drizzle-orm";
import { pgTable, uuid, integer, text, varchar, timestamp, unique, pgEnum, bigint } from "drizzle-orm/pg-core";
const racket_reviews = pgTable("racket_reviews", {
  id: uuid("id").defaultRandom().primaryKey().notNull().unique(),
  groundstrokes: integer("groundstrokes").notNull(),
  volleys: integer("volleys").notNull(),
  serves: integer("serves").notNull(),
  returns: integer("returns").notNull(),
  power: integer("power").notNull(),
  control: integer("control").notNull(),
  maneuverability: integer("maneuverability").notNull(),
  stability: integer("stability").notNull(),
  comfort: integer("comfort").notNull(),
  feel: integer("feel").notNull(),
  topspin: integer("topspin").notNull(),
  slice: integer("slice").notNull(),
  comments: text("comments").notNull(),
  user_id: varchar("user_id").notNull().references(() => user.id),
  racket_id: uuid("racket_id").notNull().references(() => rackets.id)
});
const racket_reviews_relations = relations(racket_reviews, ({ one }) => ({
  user: one(user, {
    fields: [racket_reviews.user_id],
    references: [user.id]
  }),
  racket: one(rackets, {
    fields: [racket_reviews.racket_id],
    references: [rackets.id]
  })
}));
const reviews = pgTable(
  "reviews",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull().unique(),
    power: integer("power").notNull(),
    feel: integer("feel").notNull(),
    control: integer("control").notNull(),
    durability: integer("durability").notNull(),
    spin: integer("spin").notNull(),
    comfort: integer("comfort").notNull(),
    playability: integer("playability").notNull(),
    comments: text("comments").notNull(),
    created_at: timestamp("created_at"),
    updated_at: timestamp("updated_at"),
    user_id: varchar("user_id").notNull().references(() => user.id),
    string_id: uuid("string_id").notNull().references(() => strings.id)
  },
  (t) => ({
    unq: unique().on(t.user_id, t.string_id)
  })
);
const reviews_relations = relations(reviews, ({ one }) => ({
  user: one(user, {
    fields: [reviews.user_id],
    references: [user.id]
  }),
  string: one(strings, {
    fields: [reviews.string_id],
    references: [strings.id]
  })
}));
const weight_unit_enum = pgEnum("weight_unit", ["grams", "ounces"]);
const balance_unit_enum = pgEnum("balance_unit", ["inches", "centimeters", "points"]);
const rackets = pgTable(
  "rackets",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull().unique(),
    name: varchar("name", { length: 256 }).notNull(),
    year: integer("year").notNull(),
    weight: integer("weight").notNull(),
    weight_unit: weight_unit_enum("weight_unit").notNull().default("grams"),
    balance: integer("balance").notNull(),
    balance_unit: balance_unit_enum("balance_unit").notNull().default("points"),
    head_size: integer("head_size").notNull(),
    swingweight: integer("swingweight").notNull(),
    mains: integer("mains").notNull(),
    crosses: integer("crosses").notNull(),
    description: text("description").notNull(),
    brand_id: uuid("brand_id").references(() => brands.id).notNull()
  },
  (t) => ({
    unq: unique().on(t.name, t.brand_id)
  })
);
const racketRelations = relations(rackets, ({ one, many }) => ({
  brand: one(brands, {
    fields: [rackets.brand_id],
    references: [brands.id]
  }),
  reviews: many(racket_reviews)
}));
const strings = pgTable(
  "strings",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull().unique(),
    name: varchar("name", { length: 256 }).notNull(),
    material: varchar("material", { length: 256 }).notNull(),
    description: text("description").notNull(),
    brand_id: uuid("brand_id").references(() => brands.id).notNull()
  },
  (t) => ({
    unq: unique().on(t.name, t.brand_id)
  })
);
const stringsRelations = relations(strings, ({ one, many }) => ({
  brand: one(brands, {
    fields: [strings.brand_id],
    references: [brands.id]
  }),
  reviews: many(reviews)
}));
const brands = pgTable("brands", {
  id: uuid("id").defaultRandom().primaryKey().notNull().unique(),
  name: varchar("name", { length: 256 }).unique().notNull(),
  about: text("about").notNull()
});
const brands_relations = relations(brands, ({ many }) => ({
  strings: many(strings),
  rackets: many(rackets)
}));
const role_enum = pgEnum("role", ["ADMIN", "USER"]);
const user = pgTable("user", {
  id: varchar("id", { length: 15 }).unique().primaryKey(),
  email: varchar("email", { length: 256 }).unique().notNull(),
  first_name: varchar("first_name", { length: 256 }).notNull(),
  last_name: varchar("last_name", { length: 256 }).notNull(),
  role: role_enum("role").default("USER")
});
const userRelations = relations(user, ({ many }) => ({
  reviews: many(reviews)
}));
const session = pgTable("session", {
  id: varchar("id", { length: 128 }).primaryKey(),
  userId: varchar("user_id", { length: 15 }).notNull().references(() => user.id),
  activeExpires: bigint("active_expires", {
    mode: "number"
  }).notNull(),
  idleExpires: bigint("idle_expires", {
    mode: "number"
  }).notNull()
});
const key = pgTable("user_key", {
  id: varchar("id", {
    length: 255
  }).primaryKey(),
  userId: varchar("user_id", {
    length: 15
  }).notNull().references(() => user.id),
  hashedPassword: varchar("hashed_password", {
    length: 255
  })
});
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  balance_unit_enum,
  brands,
  brands_relations,
  key,
  racketRelations,
  racket_reviews,
  racket_reviews_relations,
  rackets,
  reviews,
  reviews_relations,
  role_enum,
  session,
  strings,
  stringsRelations,
  user,
  userRelations,
  weight_unit_enum
}, Symbol.toStringTag, { value: "Module" }));
export {
  racket_reviews as a,
  brands as b,
  reviews as c,
  schema as d,
  rackets as r,
  strings as s,
  user as u
};
