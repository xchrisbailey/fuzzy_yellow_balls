import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { d as schema } from "./schema.js";
import { postgres as postgres$1 } from "@lucia-auth/adapter-postgresql";
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
const dbUrl = process.env.NODE_ENV === "test" ? "postgres://postgres:postgres@0.0.0.0:5432/fuzzy_yellow_balls_test" : "postgres://postgres:postgres@0.0.0.0:5432/fuzzy_yellow_balls";
postgres(dbUrl, { max: 1 });
const queryClient = postgres(dbUrl);
const db = drizzle(queryClient, { schema });
const auth = lucia({
  env: "PROD",
  middleware: sveltekit(),
  adapter: postgres$1(queryClient, {
    user: "user",
    session: "session",
    key: "user_key"
  }),
  getUserAttributes: (data) => {
    return {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      role: data.role
    };
  }
});
export {
  auth as a,
  db as d
};
