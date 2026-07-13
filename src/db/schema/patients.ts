import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";
import { userProfiles } from "./users";

export const patients = pgTable("patients", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(), // 'Male', 'Female', 'Other'
  phone: text("phone").notNull().unique(),
  email: text("email"),
  address: text("address").notNull(),
  district: text("district").notNull(),
  bloodGroup: text("blood_group"),
  medicalHistory: text("medical_history"), // Markdown notes or summary
  emergencyContactName: text("emergency_contact_name"),
  emergencyContactPhone: text("emergency_contact_phone"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const patientTimeline = pgTable("patient_timeline", {
  id: uuid("id").primaryKey().defaultRandom(),
  patientId: uuid("patient_id")
    .references(() => patients.id, { onDelete: "cascade" })
    .notNull(),
  eventType: text("event_type").notNull(), // e.g. 'Website Visit', 'Google Ads', 'Visited Clinic', 'Diagnosis', 'Prescription'
  eventTitle: text("event_title").notNull(),
  eventDescription: text("event_description"),
  refId: uuid("ref_id"), // pointer to the related entity ID (leads.id, appointments.id, etc.)
  performedBy: uuid("performed_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const prescriptions = pgTable("prescriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  patientId: uuid("patient_id")
    .references(() => patients.id, { onDelete: "cascade" })
    .notNull(),
  diagnoses: text("diagnoses").array().notNull().default([]),
  medicines: text("medicines").notNull(), // JSON block of medicines [{ name, dosage, frequency, duration }]
  doctorAdvice: text("doctor_advice"),
  signedBy: uuid("signed_by")
    .references(() => userProfiles.userId)
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
