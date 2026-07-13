import { pgTable, uuid, text, timestamp, date, time, integer, boolean } from "drizzle-orm/pg-core";
import { patients } from "./patients";
import { userProfiles } from "./users";

export const appointments = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  patientId: uuid("patient_id")
    .references(() => patients.id, { onDelete: "cascade" })
    .notNull(),
  doctorProfileId: uuid("doctor_id"),
  appointmentDate: date("appointment_date").notNull(),
  appointmentTime: time("appointment_time").notNull(),
  status: text("status").default("Booked").notNull(), // 'Booked', 'Confirmed', 'CheckedIn', 'Cancelled', 'NoShow'
  source: text("source").notNull(), // 'Website', 'WhatsApp', 'Walk-in', 'Phone'
  notes: text("notes"),
  bookedBy: uuid("booked_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const doctorAvailability = pgTable("doctor_availability", {
  id: uuid("id").primaryKey().defaultRandom(),
  dayOfWeek: integer("day_of_week").notNull(), // 0 = Sunday, 1 = Monday, etc.
  startTimeMorning: time("start_time_morning"),
  endTimeMorning: time("end_time_morning"),
  startTimeEvening: time("start_time_evening"),
  endTimeEvening: time("end_time_evening"),
  isHoliday: boolean("is_holiday").default(false).notNull(),
});
