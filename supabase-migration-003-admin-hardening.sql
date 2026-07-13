-- ============================================================
-- Migration 003: Admin / CRM access hardening
-- Run in Supabase SQL Editor after confirming user metadata roles:
--   doctor/admin => admin panel + revenue + user management
--   telecaller   => CRM lead operations only
-- ============================================================

-- Existing broad policies allow any authenticated account to access all lead
-- and revenue data. Replace them with role-aware policies based on the role
-- stored in Supabase auth metadata.

DROP POLICY IF EXISTS "auth_all_leads" ON gastro_leads;
DROP POLICY IF EXISTS "auth_all_revenue" ON gastro_revenue;

CREATE POLICY "crm_and_admin_manage_leads" ON gastro_leads
  FOR ALL TO authenticated
  USING (
    COALESCE(
      auth.jwt() -> 'app_metadata' ->> 'role',
      auth.jwt() -> 'user_metadata' ->> 'role'
    ) IN ('admin', 'doctor', 'telecaller')
  )
  WITH CHECK (
    COALESCE(
      auth.jwt() -> 'app_metadata' ->> 'role',
      auth.jwt() -> 'user_metadata' ->> 'role'
    ) IN ('admin', 'doctor', 'telecaller')
  );

CREATE POLICY "admin_manage_revenue" ON gastro_revenue
  FOR ALL TO authenticated
  USING (
    COALESCE(
      auth.jwt() -> 'app_metadata' ->> 'role',
      auth.jwt() -> 'user_metadata' ->> 'role'
    ) IN ('admin', 'doctor')
  )
  WITH CHECK (
    COALESCE(
      auth.jwt() -> 'app_metadata' ->> 'role',
      auth.jwt() -> 'user_metadata' ->> 'role'
    ) IN ('admin', 'doctor')
  );
