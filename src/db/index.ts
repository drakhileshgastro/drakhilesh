import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as appointments from "./schema/appointments";
import * as cms from "./schema/cms";
import * as leads from "./schema/leads";
import * as patients from "./schema/patients";
import * as system from "./schema/system";
import * as users from "./schema/users";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres:your_db_password_here@db.dfevnuornvrthufbrdop.supabase.co:6543/postgres?pgbouncer=true";

// Disable prefetch for PgBouncer compatibility
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, {
  schema: {
    ...appointments,
    ...cms,
    ...leads,
    ...patients,
    ...system,
    ...users,
  },
});
export type DbClient = typeof db;
