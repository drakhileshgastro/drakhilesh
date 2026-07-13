import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://postgres:your_db_password_here@db.dfevnuornvrthufbrdop.supabase.co:6543/postgres?pgbouncer=true",
  },
});
