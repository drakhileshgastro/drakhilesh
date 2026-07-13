-- ============================================================
-- Migration 001 — Appointment Funnel Enhancements
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- Project: dfevnuornvrthufbrdop (drakhileshgastro)
-- ============================================================

-- Add preferred_time column (Morning/Evening slot preference)
ALTER TABLE gastro_leads
  ADD COLUMN IF NOT EXISTS preferred_time TEXT;

-- Add confirmation_sent flag (WhatsApp sent after telecaller confirms)
ALTER TABLE gastro_leads
  ADD COLUMN IF NOT EXISTS confirmation_sent BOOLEAN DEFAULT FALSE;

-- Add comment for clarity
COMMENT ON COLUMN gastro_leads.preferred_time IS 'Patient preferred slot: Morning (10am–2pm) or Evening (5pm–8pm)';
COMMENT ON COLUMN gastro_leads.confirmation_sent IS 'True after WhatsApp confirmation was sent to patient on appointment confirm';

-- Verify
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'gastro_leads'
  AND column_name IN ('preferred_time', 'confirmation_sent');
