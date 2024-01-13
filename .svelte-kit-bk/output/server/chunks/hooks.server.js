import { d as db, a as auth } from "./auth.js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
const handle = async ({ event, resolve }) => {
  await migrate(db, { migrationsFolder: "migrations" });
  event.locals.auth = auth.handleRequest(event);
  event.locals.db = db;
  return await resolve(event);
};
export {
  handle
};
