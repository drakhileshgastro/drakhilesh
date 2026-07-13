import { pgTable, uuid, text, timestamp, date } from "drizzle-orm/pg-core";
import { patients } from "./patients";
import { userProfiles } from "./users";

export const leadSources = pgTable("lead_sources", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(), // e.g. 'Website', 'Google Ads', 'Meta Ads', 'WhatsApp', 'Phone Call', 'AI Assistant'
  utmSource: text("utm_source"),
  utmCampaign: text("utm_campaign"),
});

export const leads = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  patientId: uuid("patient_id").references(() => patients.id, { onDelete: "set null" }),
  patientName: text("patient_name").notNull(),
  patientPhone: text("patient_phone").notNull(),
  patientCity: text("patient_city").notNull(),
  sourceId: uuid("source_id")
    .references(() => leadSources.id)
    .notNull(),
  status: text("status").default("New").notNull(), // 'New', 'Assigned', 'Contacted', 'Booked', 'Visited', 'Closed', 'Lost'
  assignedTo: uuid("assigned_to").references(() => userProfiles.userId, { onDelete: "set null" }),
  notes: text("notes"),
  followUpDate: date("follow_up_date"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  leadId: uuid("lead_id").references(() => leads.id, { onDelete: "cascade" }),
  patientId: uuid("patient_id").references(() => patients.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").default("Pending").notNull(), // 'Pending', 'In Progress', 'Completed'
  assignedTo: uuid("assigned_to")
    .references(() => userProfiles.userId, { onDelete: "cascade" })
    .notNull(),
  dueDate: timestamp("due_date", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
