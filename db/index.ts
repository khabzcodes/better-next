import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL || process.env.POSTGRES_URL;

const client = postgres(DATABASE_URL!, {
  prepare: false,
  idle_timeout: 30,
  connect_timeout: 30,
});

export const db = drizzle(client, { logger: true });
