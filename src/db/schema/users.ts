import { pgTable, uuid, text, timestamp, boolean } from "drizzle-orm/pg-core";

// Mock table for referencing the Supabase auth.users table
export const authUsers = pgTable("users", {
  id: uuid("id").primaryKey(),
});

export const roles = pgTable("roles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(), // e.g. 'Super Admin', 'Doctor', 'Reception', 'Executive', 'Marketing'
  permissions: text("permissions").array().notNull().default([]), // e.g. ['read:leads', 'write:appointments']
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const userProfiles = pgTable("user_profiles", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  fullName: text("full_name").notNull(),
  roleId: uuid("role_id").references(() => roles.id, { onDelete: "set null" }),
  isActive: boolean("is_active").default(true).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
