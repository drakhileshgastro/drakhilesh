import { pgSchema, uuid, text, timestamp, integer, varchar, jsonb } from "drizzle-orm/pg-core";
import { userProfiles } from "./users";

export const cmsSchema = pgSchema("cms");

export const mediaType = cmsSchema.enum("media_type", ["Image", "Video", "Document"]);
export const workflowStatus = cmsSchema.enum("workflow_status", ["Draft", "InReview", "Scheduled", "Published", "Archived"]);

export const media = cmsSchema.table("media", {
  mediaId: uuid("media_id").primaryKey().defaultRandom(),
  filename: varchar("filename", { length: 255 }).notNull(),
  storagePath: varchar("storage_path", { length: 500 }).notNull().unique(), // Supabase storage bucket path
  mimeType: varchar("mime_type", { length: 100 }).notNull(),
  fileSize: integer("file_size").notNull(),
  mediaType: mediaType("media_type").notNull(),
  altText: varchar("alt_text", { length: 255 }),
  uploadedBy: uuid("uploaded_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const conditions = cmsSchema.table("conditions", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  hindiTitle: varchar("hindi_title", { length: 255 }).notNull(),
  introEn: text("intro_en").notNull(),
  introHi: text("intro_hi").notNull(),
  symptoms: jsonb("symptoms").notNull().default([]),
  causes: jsonb("causes").notNull().default([]),
  riskFactors: jsonb("risk_factors").notNull().default([]),
  diagnosis: jsonb("diagnosis").notNull().default([]),
  treatment: jsonb("treatment").notNull().default([]),
  dietEat: jsonb("diet_eat").notNull().default([]),
  dietAvoid: jsonb("diet_avoid").notNull().default([]),
  doctorNote: text("doctor_note"),
  metaTitle: varchar("meta_title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  schemaOverride: jsonb("schema_override"),
  status: workflowStatus("status").default("Draft").notNull(),
  publishedVersion: integer("published_version").default(1),
  publishAt: timestamp("publish_at", { withTimezone: true }),
  createdBy: uuid("created_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const procedures = cmsSchema.table("procedures", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  hindiTitle: varchar("hindi_title", { length: 255 }).notNull(),
  simpleExplanation: text("simple_explanation").notNull(),
  summaryPurpose: text("summary_purpose").notNull(),
  summaryDuration: varchar("summary_duration", { length: 100 }).notNull(),
  summaryAnaesthesia: varchar("summary_anaesthesia", { length: 100 }).notNull(),
  summaryHospitalStay: varchar("summary_hospital_stay", { length: 100 }).notNull(),
  summaryRecovery: varchar("summary_recovery", { length: 100 }).notNull(),
  summaryOperator: varchar("summary_operator", { length: 255 }).default("Dr. Akhilesh Yadav"),
  preparationFasting: text("preparation_fasting").notNull(),
  preparationDiet: text("preparation_diet").notNull(),
  preparationMedicines: text("preparation_medicines").notNull(),
  preparationDocuments: text("preparation_documents").notNull(),
  preparationCompanion: text("preparation_companion").notNull(),
  steps: jsonb("steps").notNull().default([]),
  recoveryExpectations: text("recovery_expectations").notNull(),
  recoveryReturnHome: text("recovery_return_home").notNull(),
  recoveryDiet: text("recovery_diet").notNull(),
  recoveryActivity: text("recovery_activity").notNull(),
  recoveryWarningSigns: jsonb("recovery_warning_signs").notNull().default([]),
  safetyRisks: text("safety_risks").notNull(),
  safetyBenefits: jsonb("safety_benefits").notNull().default([]),
  safetySuccessRate: varchar("safety_success_rate", { length: 100 }).notNull(),
  safetyMonitoring: text("safety_monitoring").notNull(),
  doctorAdvice: text("doctor_advice").notNull(),
  metaTitle: varchar("meta_title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  schemaOverride: jsonb("schema_override"),
  status: workflowStatus("status").default("Draft").notNull(),
  publishAt: timestamp("publish_at", { withTimezone: true }),
  createdBy: uuid("created_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const symptoms = cmsSchema.table("symptoms", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  hindiTitle: varchar("hindi_title", { length: 255 }).notNull(),
  summary: text("summary").notNull(),
  causes: jsonb("causes").notNull().default([]),
  warningSigns: jsonb("warning_signs").notNull().default([]),
  suggestedTests: jsonb("suggested_tests").notNull().default([]),
  doctorAdvice: text("doctor_advice").notNull(),
  metaTitle: varchar("meta_title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  status: workflowStatus("status").default("Draft").notNull(),
  publishAt: timestamp("publish_at", { withTimezone: true }),
  createdBy: uuid("created_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const blogs = cmsSchema.table("blogs", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  titleHindi: varchar("title_hindi", { length: 255 }),
  content: text("content").notNull(), // Markdown body
  quickSummary: text("quick_summary").notNull(),
  readTime: varchar("read_time", { length: 50 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  referencesList: jsonb("references_list").default([]),
  doctorInsight: text("doctor_insight"),
  metaTitle: varchar("meta_title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  status: workflowStatus("status").default("Draft").notNull(),
  publishAt: timestamp("publish_at", { withTimezone: true }),
  createdBy: uuid("created_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const videos = cmsSchema.table("videos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  youtubeUrl: varchar("youtube_url", { length: 255 }).notNull(),
  thumbnailId: uuid("thumbnail_id").references(() => media.mediaId, { onDelete: "set null" }),
  category: varchar("category", { length: 100 }).notNull(),
  status: workflowStatus("status").default("Draft").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const faqs = cmsSchema.table("faqs", {
  id: uuid("id").primaryKey().defaultRandom(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  status: workflowStatus("status").default("Draft").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const patientStories = cmsSchema.table("patient_stories", {
  id: uuid("id").primaryKey().defaultRandom(),
  patientName: varchar("patient_name", { length: 255 }).notNull(),
  location: varchar("location", { length: 100 }),
  storyText: text("story_text").notNull(),
  rating: integer("rating").notNull(),
  videoUrl: varchar("video_url", { length: 255 }),
  conditionId: uuid("condition_id").references(() => conditions.id, { onDelete: "set null" }),
  status: workflowStatus("status").default("Draft").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const doctorProfile = cmsSchema.table("doctor_profile", {
  id: integer("id").primaryKey().default(1),
  name: varchar("name", { length: 255 }).notNull(),
  qualification: varchar("qualification", { length: 255 }).notNull(),
  designation: varchar("designation", { length: 255 }).notNull(),
  experienceYears: integer("experience_years").notNull(),
  clinicalPhilosophy: text("clinical_philosophy").notNull(),
  biography: text("biography").notNull(),
  timeline: jsonb("timeline").notNull().default([]),
  memberships: jsonb("memberships").notNull().default([]),
  hospitalName: varchar("hospital_name", { length: 255 }).notNull(),
  hospitalAddress: text("hospital_address").notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  opdTimings: jsonb("opd_timings").notNull().default([]),
});

export const locations = cmsSchema.table("locations", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  address: text("address").notNull(),
  mapIframeUrl: text("map_iframe_url").notNull(),
  opdDays: varchar("opd_days", { length: 255 }).notNull(),
  opdHours: varchar("opd_hours", { length: 255 }).notNull(),
  metaTitle: varchar("meta_title", { length: 255 }).notNull(),
  metaDescription: text("meta_description").notNull(),
  status: workflowStatus("status").default("Draft").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Junction relationships
export const relConditionProcedure = cmsSchema.table("rel_condition_procedure", {
  conditionId: uuid("condition_id").references(() => conditions.id, { onDelete: "cascade" }),
  procedureId: uuid("procedure_id").references(() => procedures.id, { onDelete: "cascade" }),
});

export const relBlogCondition = cmsSchema.table("rel_blog_condition", {
  blogId: uuid("blog_id").references(() => blogs.id, { onDelete: "cascade" }),
  conditionId: uuid("condition_id").references(() => conditions.id, { onDelete: "cascade" }),
});

export const relBlogProcedure = cmsSchema.table("rel_blog_procedure", {
  blogId: uuid("blog_id").references(() => blogs.id, { onDelete: "cascade" }),
  procedureId: uuid("procedure_id").references(() => procedures.id, { onDelete: "cascade" }),
});

// Site configurations
export const homepageSections = cmsSchema.table("homepage_sections", {
  sectionKey: varchar("section_key", { length: 100 }).primaryKey(),
  content: jsonb("content").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const navigation = cmsSchema.table("navigation", {
  id: integer("id").primaryKey(),
  menuTree: jsonb("menu_tree").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const footer = cmsSchema.table("footer", {
  id: integer("id").primaryKey(),
  quickLinks: jsonb("quick_links").notNull(),
  disclaimerEn: text("disclaimer_en").notNull(),
  disclaimerHi: text("disclaimer_hi").notNull(),
  copyrightText: varchar("copyright_text", { length: 255 }).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// Content versioning
export const contentVersions = cmsSchema.table("content_versions", {
  versionId: uuid("version_id").primaryKey().defaultRandom(),
  entityType: varchar("entity_type", { length: 100 }).notNull(), // 'conditions', 'procedures', etc.
  entityId: uuid("entity_id").notNull(),
  versionNumber: integer("version_number").notNull(),
  stateData: jsonb("state_data").notNull(),
  createdBy: uuid("created_by").references(() => userProfiles.userId, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
