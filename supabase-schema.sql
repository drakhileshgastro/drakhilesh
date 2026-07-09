-- ============================================================
-- drakhileshgastro.com — Full Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- Project: dfevnuornvrthufbrdop (drakhileshgastro@gmail.com)
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── LEADS TABLE ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS gastro_leads (
  lead_id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_name        TEXT NOT NULL,
  patient_phone       TEXT NOT NULL,
  patient_city        TEXT NOT NULL DEFAULT '',
  condition           TEXT NOT NULL DEFAULT '',
  preferred_date      DATE,
  source              TEXT NOT NULL DEFAULT 'Website Form',
  status              TEXT NOT NULL DEFAULT 'New',
  assigned_to         TEXT,
  notes               TEXT,
  follow_up_date      DATE,
  confirmed_datetime  TIMESTAMPTZ,
  acknowledgement_sent BOOLEAN NOT NULL DEFAULT FALSE,
  visit_count         INTEGER NOT NULL DEFAULT 0,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── REVENUE TABLE ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS gastro_revenue (
  revenue_id        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_name      TEXT NOT NULL,
  consultation_fee  NUMERIC(10,2) NOT NULL DEFAULT 0,
  condition_tag     TEXT NOT NULL DEFAULT 'Other',
  visit_date        DATE NOT NULL DEFAULT CURRENT_DATE,
  notes             TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────
ALTER TABLE gastro_leads   ENABLE ROW LEVEL SECURITY;
ALTER TABLE gastro_revenue ENABLE ROW LEVEL SECURITY;

-- Public can INSERT leads (website contact forms)
CREATE POLICY "public_insert_leads" ON gastro_leads
  FOR INSERT TO anon WITH CHECK (true);

-- Authenticated users (doctor/telecaller) can do everything
CREATE POLICY "auth_all_leads" ON gastro_leads
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_all_revenue" ON gastro_revenue
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ─── REALTIME ────────────────────────────────────────────────
-- Enable realtime for CRM live updates
ALTER PUBLICATION supabase_realtime ADD TABLE gastro_leads;
ALTER PUBLICATION supabase_realtime ADD TABLE gastro_revenue;

-- ─── INDEXES ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_leads_status     ON gastro_leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON gastro_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_phone      ON gastro_leads(patient_phone);
CREATE INDEX IF NOT EXISTS idx_revenue_date     ON gastro_revenue(visit_date DESC);
