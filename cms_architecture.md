# Complete CMS Architecture Design — DrAkhileshGastro.com

This document specifies the enterprise Content Management System (CMS) architecture designed for **DrAkhileshGastro.com**. Optimized for Supabase (PostgreSQL), it enables a non-technical content team to manage the website's pages, blogs, media, and navigation without touching code, while enforcing workflows, version control, and RLS policies.

The full SQL database definitions are saved at [supabase/cms_schema.sql](file:///c:/Users/Arvind/Downloads/Client/Dr%20Akhilesh%20Yadav/drakhileshgastro/supabase/cms_schema.sql).

---

## 1. CMS Navigation Structure

The CMS interface dashboard is organized into the following navigation structure:

```
CMS Dashboard/
├── Content Management/
│   ├── Conditions (Manage diseases, diet plans, treatments)
│   ├── Procedures (Fasting rules, pre-op, step-by-step lifecycles)
│   ├── Symptoms (Symptom checkers, red flag warnings)
│   ├── Blogs & Library (Articles, bilingual guides, clinical citations)
│   ├── Patient Stories (Text testimonials, video stories)
│   └── Location Pages (Clinic OPD addresses, maps, regional timings)
├── Media Library/
│   ├── File Explorer (Drag & drop files, optimize image size automatically)
│   └── Tags & Categories (Semantic asset taxonomy)
├── Site Configuration/
│   ├── Homepage Sections (Hero text updates, banner CTAs)
│   ├── Global Navigation (Nested menu tree drag-and-drop editor)
│   └── Footer Editor (Links, copyright details, clinical disclosures)
├── Marketing & Leads/
│   ├── Lead Pipeline (CRM inputs, conversion forms, scheduling logs)
│   └── Lead Sources (UTM mappings, Google/Meta campaign tagging)
└── Settings & Security/
    ├── Users & Permissions (Admin, Editor, Reviewer access matrix)
    └── Version History & Audit Trail (Revert changes, audit action logs)
```

---

## 2. Content Workflow & Versioning Engine

Every content module follows a strict lifecycle governed by the CMS Workflow engine:

```
[Draft] -> [In Review] -> [Approved] -> [Scheduled/Published] -> [Archived]
```

- **Draft**: Editable only by the author or editors. Not visible on public API.
- **In Review**: Read-only lock. Awaiting Reviewer/Admin approval.
- **Scheduled**: Approved, waiting for the trigger timestamp (`publish_at`).
- **Published**: Publicly readable. Cached on Next.js edge.
- **Archived**: Hidden from search engines and public APIs, preserved for audit.

---

## 3. Row Level Security (RLS) Policies

All CMS tables require strict access boundaries based on user profiles:
- **CMS Staff**: Allowed read access to all content states (`Draft`, `InReview`, etc.).
- **Editors**: Can insert/edit records.
- **Reviewers / Admins**: Can change status parameters (approvals, publishing).
- **Public**: Access restricted strictly to `status = 'Published'` and `publish_at <= NOW()`.

---

## 4. Version History & Trigger Strategy

To capture historical versions of pages automatically upon updates, we run a PostgreSQL trigger:
- Saves old records in `cms.content_versions` as a JSONB dump on inserts or updates, enabling editors to revert modifications to any past state.

---

## 5. Full-Text Search & Filtering Indexing

- **Composite Search Vectors**: We index the `title` and structural `content` / `intro_en` parameters.
- **GIN index**: Facilitates instant, fast search queries in the editorial panel.
