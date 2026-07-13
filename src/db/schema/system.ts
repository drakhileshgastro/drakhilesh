import { pgTable, uuid, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { userProfiles } from "./users";

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => userProfiles.userId, { onDelete: "set null" }),
  action: text("action").notNull(), // 'CREATE', 'UPDATE', 'DELETE', 'PUBLISH', 'AUTH'
  tableName: text("table_name").notNull(),
  recordId: uuid("record_id"),
  oldData: jsonb("old_data"),
  newData: jsonb("new_data"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const settings = pgTable("settings", {
  key: text("key").primaryKey(), // e.g. 'clinic_name', 'google_api_key', 'smtp_config'
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  status: text("status").default("Unread").notNull(), // 'Unread', 'Read', 'Archived'
  type: text("type").notNull(), // 'Website Lead', 'Appointment', 'WhatsApp', 'System Alert'
  refId: uuid("ref_id"), // Polymorphic relation ID
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
