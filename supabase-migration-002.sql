-- ============================================================
-- Migration 002: Tasks, Chat Sessions, Page Visits, Facebook
-- Run in: Supabase Dashboard → SQL Editor → New Query
-- Project: dfevnuornvrthufbrdop (drakhileshgastro)
-- ============================================================

-- 1. CRM Task List
CREATE TABLE IF NOT EXISTS crm_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  lead_id UUID REFERENCES gastro_leads(lead_id) ON DELETE SET NULL,
  patient_name TEXT,
  patient_phone TEXT,
  due_date DATE,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
  assigned_to TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

ALTER TABLE crm_tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can manage tasks" ON crm_tasks
  FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_crm_tasks_status ON crm_tasks(status);
CREATE INDEX IF NOT EXISTS idx_crm_tasks_due_date ON crm_tasks(due_date);

-- 2. AI Chatbot Sessions (website + WhatsApp + Facebook)
CREATE TABLE IF NOT EXISTS chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT UNIQUE NOT NULL,
  patient_name TEXT,
  patient_phone TEXT,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  source TEXT DEFAULT 'website' CHECK (source IN ('website', 'whatsapp', 'facebook')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'converted')),
  lead_id UUID REFERENCES gastro_leads(lead_id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
-- Allow anon inserts from website chatbot; authenticated can read all
CREATE POLICY "Anon can upsert own sessions" ON chat_sessions
  FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated can read sessions" ON chat_sessions
  FOR SELECT TO authenticated USING (true);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON chat_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_updated_at ON chat_sessions(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_phone ON chat_sessions(patient_phone) WHERE patient_phone IS NOT NULL;

-- 3. Page Visits (Visitor Intelligence)
CREATE TABLE IF NOT EXISTS page_visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anon can insert page visits" ON page_visits
  FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Authenticated can read page visits" ON page_visits
  FOR SELECT TO authenticated USING (true);
CREATE INDEX IF NOT EXISTS idx_page_visits_created_at ON page_visits(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_visits_page ON page_visits(page);

-- 4. Migration 001 columns (if not already applied)
ALTER TABLE gastro_leads
  ADD COLUMN IF NOT EXISTS preferred_time TEXT,
  ADD COLUMN IF NOT EXISTS confirmation_sent BOOLEAN DEFAULT FALSE;

-- 5. Realtime on chat_sessions and crm_tasks
ALTER PUBLICATION supabase_realtime ADD TABLE chat_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE crm_tasks;
