-- Create CMS schema to isolate editorial data from auth
CREATE SCHEMA IF NOT EXISTS cms;

-- ==========================================
-- 1. SECURITY & ROLES
-- ==========================================

CREATE TYPE cms.user_role AS ENUM ('Admin', 'Editor', 'Reviewer');
CREATE TYPE cms.workflow_status AS ENUM ('Draft', 'InReview', 'Scheduled', 'Published', 'Archived');
CREATE TYPE cms.media_type AS ENUM ('Image', 'Video', 'Document');

CREATE TABLE cms.user_profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name VARCHAR(255) NOT NULL,
  role cms.user_role NOT NULL DEFAULT 'Editor',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 2. MEDIA LIBRARY
-- ==========================================

CREATE TABLE cms.media (
  media_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename VARCHAR(255) NOT NULL,
  storage_path VARCHAR(500) NOT NULL UNIQUE, -- Supabase Storage bucket path
  mime_type VARCHAR(100) NOT NULL,
  file_size INT NOT NULL, -- in bytes
  media_type cms.media_type NOT NULL,
  alt_text VARCHAR(255),
  uploaded_by UUID REFERENCES cms.user_profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 3. CORE EDITORIAL TABLES
-- ==========================================

-- A. Conditions Table
CREATE TABLE cms.conditions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  hindi_title VARCHAR(255) NOT NULL,
  intro_en TEXT NOT NULL,
  intro_hi TEXT NOT NULL,
  symptoms JSONB NOT NULL DEFAULT '[]'::jsonb,
  causes JSONB NOT NULL DEFAULT '[]'::jsonb,
  risk_factors JSONB NOT NULL DEFAULT '[]'::jsonb,
  diagnosis JSONB NOT NULL DEFAULT '[]'::jsonb,
  treatment JSONB NOT NULL DEFAULT '[]'::jsonb,
  diet_eat JSONB NOT NULL DEFAULT '[]'::jsonb,
  diet_avoid JSONB NOT NULL DEFAULT '[]'::jsonb,
  doctor_note TEXT,
  
  -- SEO Block
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  schema_override JSONB,
  
  -- Workflow
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  published_version INT DEFAULT 1,
  publish_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES cms.user_profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- B. Procedures Table
CREATE TABLE cms.procedures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  hindi_title VARCHAR(255) NOT NULL,
  simple_explanation TEXT NOT NULL,
  
  -- Quick Summary
  summary_purpose TEXT NOT NULL,
  summary_duration VARCHAR(100) NOT NULL,
  summary_anaesthesia VARCHAR(100) NOT NULL,
  summary_hospital_stay VARCHAR(100) NOT NULL,
  summary_recovery VARCHAR(100) NOT NULL,
  summary_operator VARCHAR(255) DEFAULT 'Dr. Akhilesh Yadav',
  
  -- Preparation Guidelines
  preparation_fasting TEXT NOT NULL,
  preparation_diet TEXT NOT NULL,
  preparation_medicines TEXT NOT NULL,
  preparation_documents TEXT NOT NULL,
  preparation_companion TEXT NOT NULL,
  
  -- Process Steps
  steps JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of { phase: string, desc: string }
  
  -- Recovery parameters
  recovery_expectations TEXT NOT NULL,
  recovery_return_home TEXT NOT NULL,
  recovery_diet TEXT NOT NULL,
  recovery_activity TEXT NOT NULL,
  recovery_warning_signs JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Safety & Outcomes
  safety_risks TEXT NOT NULL,
  safety_benefits JSONB NOT NULL DEFAULT '[]'::jsonb,
  safety_success_rate VARCHAR(100) NOT NULL,
  safety_monitoring TEXT NOT NULL,
  
  -- Personal Advice
  doctor_advice TEXT NOT NULL,
  
  -- SEO & Workflow
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  schema_override JSONB,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  publish_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES cms.user_profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- C. Symptoms Table
CREATE TABLE cms.symptoms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  hindi_title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  causes JSONB NOT NULL DEFAULT '[]'::jsonb,
  warning_signs JSONB NOT NULL DEFAULT '[]'::jsonb,
  suggested_tests JSONB NOT NULL DEFAULT '[]'::jsonb,
  doctor_advice TEXT NOT NULL,
  
  -- SEO & Workflow
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  publish_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES cms.user_profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- D. Blogs & Articles Table
CREATE TABLE cms.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  title_hindi VARCHAR(255),
  content TEXT NOT NULL, -- Markdown
  quick_summary TEXT NOT NULL,
  read_time VARCHAR(50) NOT NULL,
  category VARCHAR(100) NOT NULL,
  references_list JSONB DEFAULT '[]'::jsonb,
  doctor_insight TEXT,
  
  -- SEO & Workflow
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  publish_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES cms.user_profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- E. Videos Table
CREATE TABLE cms.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  youtube_url VARCHAR(255) NOT NULL,
  thumbnail_id UUID REFERENCES cms.media(media_id) ON DELETE SET NULL,
  category VARCHAR(100) NOT NULL,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- F. FAQs Table
CREATE TABLE cms.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- G. Patient Stories Table
CREATE TABLE cms.patient_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name VARCHAR(255) NOT NULL,
  location VARCHAR(100),
  story_text TEXT NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  video_url VARCHAR(255), -- Optional video testimonial
  condition_id UUID REFERENCES cms.conditions(id) ON DELETE SET NULL,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- H. Doctor Profile Table
CREATE TABLE cms.doctor_profile (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1), -- Enforces single doctor profile record
  name VARCHAR(255) NOT NULL,
  qualification VARCHAR(255) NOT NULL,
  designation VARCHAR(255) NOT NULL,
  experience_years INT NOT NULL,
  clinical_philosophy TEXT NOT NULL,
  biography TEXT NOT NULL,
  timeline JSONB NOT NULL DEFAULT '[]'::jsonb, -- Milestone timelines
  memberships JSONB NOT NULL DEFAULT '[]'::jsonb,
  hospital_name VARCHAR(255) NOT NULL,
  hospital_address TEXT NOT NULL,
  phone VARCHAR(50) NOT NULL,
  whatsapp VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  opd_timings JSONB NOT NULL DEFAULT '[]'::jsonb
);

-- I. Location Pages Table
CREATE TABLE cms.locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL, -- e.g. "Ranchi Clinic", "Bokaro OPD"
  address TEXT NOT NULL,
  map_iframe_url TEXT NOT NULL,
  opd_days VARCHAR(255) NOT NULL,
  opd_hours VARCHAR(255) NOT NULL,
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  status cms.workflow_status NOT NULL DEFAULT 'Draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 4. RELATIONSHIP JUNCTION TABLES
-- ==========================================

-- Condition to Procedure
CREATE TABLE cms.rel_condition_procedure (
  condition_id UUID REFERENCES cms.conditions(id) ON DELETE CASCADE,
  procedure_id UUID REFERENCES cms.procedures(id) ON DELETE CASCADE,
  PRIMARY KEY (condition_id, procedure_id)
);

-- Blog to Condition
CREATE TABLE cms.rel_blog_condition (
  blog_id UUID REFERENCES cms.blogs(id) ON DELETE CASCADE,
  condition_id UUID REFERENCES cms.conditions(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_id, condition_id)
);

-- Blog to Procedure
CREATE TABLE cms.rel_blog_procedure (
  blog_id UUID REFERENCES cms.blogs(id) ON DELETE CASCADE,
  procedure_id UUID REFERENCES cms.procedures(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_id, procedure_id)
);

-- ==========================================
-- 5. SITE CONFIGURATIONS
-- ==========================================

-- Homepage configurations
CREATE TABLE cms.homepage_sections (
  section_key VARCHAR(100) PRIMARY KEY, -- e.g. 'hero', 'symptoms_intro', 'about_teaser'
  content JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Global Navigation
CREATE TABLE cms.navigation (
  id SERIAL PRIMARY KEY,
  menu_tree JSONB NOT NULL, -- Array of nested link nodes: [ { label: "Home", href: "/" }, ... ]
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Footer Config
CREATE TABLE cms.footer (
  id SERIAL PRIMARY KEY,
  quick_links JSONB NOT NULL,
  disclaimer_en TEXT NOT NULL,
  disclaimer_hi TEXT NOT NULL,
  copyright_text VARCHAR(255) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 6. AUDIT & VERSION HISTORY
-- ==========================================

CREATE TABLE cms.content_versions (
  version_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type VARCHAR(100) NOT NULL, -- 'conditions', 'procedures', etc.
  entity_id UUID NOT NULL,
  version_number INT NOT NULL,
  state_data JSONB NOT NULL, -- JSON dump of the record fields
  created_by UUID REFERENCES cms.user_profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cms.audit_logs (
  log_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES cms.user_profiles(user_id),
  action VARCHAR(255) NOT NULL, -- 'CREATE', 'UPDATE', 'PUBLISHED', 'ARCHIVED'
  entity_type VARCHAR(100) NOT NULL,
  entity_id UUID,
  ip_address VARCHAR(45),
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

ALTER TABLE cms.conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.procedures ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "CMS staff can read all editing content" ON cms.conditions
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Editors and Admins can create/edit conditions" ON cms.conditions
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM cms.user_profiles
      WHERE cms.user_profiles.user_id = auth.uid()
      AND cms.user_profiles.role IN ('Editor', 'Admin')
    )
  );

CREATE POLICY "Reviewer and Admin can change workflow status" ON cms.conditions
  FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM cms.user_profiles
      WHERE cms.user_profiles.user_id = auth.uid()
      AND cms.user_profiles.role IN ('Reviewer', 'Admin')
    )
  );

CREATE POLICY "Public API can read published conditions" ON cms.conditions
  FOR SELECT TO anon
  USING (status = 'Published' AND (publish_at IS NULL OR publish_at <= CURRENT_TIMESTAMP));

-- ==========================================
-- 8. TRIGGERS FOR VERSIONING
-- ==========================================

CREATE OR REPLACE FUNCTION cms.log_version_history()
RETURNS TRIGGER AS $$
DECLARE
  next_version INT;
BEGIN
  SELECT COALESCE(MAX(version_number), 0) + 1 INTO next_version
  FROM cms.content_versions
  WHERE entity_id = NEW.id;

  INSERT INTO cms.content_versions (entity_type, entity_id, version_number, state_data, created_by)
  VALUES (TG_TABLE_NAME, NEW.id, next_version, to_jsonb(NEW), NEW.created_by);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trig_conditions_version
  AFTER INSERT OR UPDATE ON cms.conditions
  FOR EACH ROW EXECUTE FUNCTION cms.log_version_history();

CREATE TRIGGER trig_procedures_version
  AFTER INSERT OR UPDATE ON cms.procedures
  FOR EACH ROW EXECUTE FUNCTION cms.log_version_history();

-- ==========================================
-- 9. TSVECTOR FULL-TEXT SEARCH
-- ==========================================

ALTER TABLE cms.blogs ADD COLUMN text_search_vector tsvector;

CREATE OR REPLACE FUNCTION cms.blogs_search_trigger() RETURNS trigger AS $$
begin
  new.text_search_vector :=
    setweight(to_tsvector('english', coalesce(new.title,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(new.content,'')), 'B');
  return new;
end;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trig_blogs_search_update BEFORE INSERT OR UPDATE
  ON cms.blogs FOR EACH ROW EXECUTE FUNCTION cms.blogs_search_trigger();

CREATE INDEX idx_blogs_search ON cms.blogs USING gin(text_search_vector);
