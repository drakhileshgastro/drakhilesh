-- ============================================================
-- Blog Pipeline Schema — Phase 2
-- Project: drakhileshgastro (dfevnuornvrthufbrdop)
-- Run this in Supabase SQL Editor to create all Phase 2 tables
-- ============================================================

-- ============================================================
-- 1. BLOG POSTS TABLE
--    Mirrors the BlogPost TypeScript interface from blog-data.ts
--    so we can migrate from static file to DB in Phase 3
-- ============================================================

CREATE TABLE IF NOT EXISTS public.blog_posts (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug              TEXT UNIQUE NOT NULL,
  title_hi          TEXT NOT NULL,
  title_en          TEXT NOT NULL,
  excerpt_hi        TEXT NOT NULL,
  excerpt_en        TEXT NOT NULL,
  category          TEXT NOT NULL CHECK (category IN ('conditions','procedures','symptoms','diet','locations','tests')),
  read_time_mins    INT NOT NULL,
  published_at      TEXT NOT NULL,              -- "Month Year" format e.g. "August 2026"
  emoji             TEXT NOT NULL,
  image             TEXT,
  tags              TEXT[]   NOT NULL DEFAULT '{}',
  meta_title        TEXT NOT NULL CHECK (char_length(meta_title) <= 60),
  meta_description  TEXT NOT NULL CHECK (char_length(meta_description) <= 155),
  sections          JSONB    NOT NULL DEFAULT '[]'::jsonb,   -- BlogSection[]
  faqs              JSONB             DEFAULT '[]'::jsonb,   -- {q,a}[]
  image_prompt      JSONB,                                   -- {featured,og,card}
  -- Pipeline tracking
  source            TEXT     NOT NULL DEFAULT 'manual'       -- 'pipeline' | 'manual' | 'import'
                    CHECK (source IN ('pipeline','manual','import')),
  status            TEXT     NOT NULL DEFAULT 'published'
                    CHECK (status IN ('draft','published','archived')),
  primary_keyword   TEXT,
  -- AI-writing audit result
  ai_audit_score    INT,                                     -- 0=fail, 1=minor, 2=pass
  ai_audit_flags    JSONB,                                   -- {tier1a:[...], tier2:[...], structural:[...]}
  -- Timestamps
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Full-text search index on English content
CREATE INDEX idx_blog_posts_slug     ON public.blog_posts (slug);
CREATE INDEX idx_blog_posts_category ON public.blog_posts (category);
CREATE INDEX idx_blog_posts_status   ON public.blog_posts (status);
CREATE INDEX idx_blog_posts_created  ON public.blog_posts (created_at DESC);

-- RLS: anon can read published; authenticated (admin) can read/write all
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public reads published blogs"
  ON public.blog_posts FOR SELECT TO anon
  USING (status = 'published');

CREATE POLICY "Admin full access to blog_posts"
  ON public.blog_posts FOR ALL TO authenticated
  USING (true);


-- ============================================================
-- 2. BLOG QUEUE TABLE
--    Keyword requests waiting to enter the pipeline
-- ============================================================

CREATE TABLE IF NOT EXISTS public.blog_queue (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword           TEXT NOT NULL,            -- primary target keyword
  secondary_kws     TEXT[]  DEFAULT '{}',     -- additional keywords to weave in
  target_category   TEXT    NOT NULL
                    CHECK (target_category IN ('conditions','procedures','symptoms','diet','locations','tests')),
  priority          INT     NOT NULL DEFAULT 5 CHECK (priority BETWEEN 1 AND 10),
  status            TEXT    NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','researching','writing','reviewing','published','rejected')),
  requested_by      TEXT    DEFAULT 'admin',  -- who added this item
  notes             TEXT,                     -- any briefing notes
  -- Research output (populated by blog-researcher agent)
  research_brief    JSONB,
  -- Pipeline links
  blog_post_id      UUID REFERENCES public.blog_posts(id) ON DELETE SET NULL,
  -- GSC tracking
  gsc_position_at_publish NUMERIC(6,2),       -- keyword rank when blog went live
  gsc_clicks_30d    INT,                      -- clicks in first 30 days
  -- Timestamps
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER trg_blog_queue_updated_at
  BEFORE UPDATE ON public.blog_queue
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX idx_blog_queue_status   ON public.blog_queue (status);
CREATE INDEX idx_blog_queue_priority ON public.blog_queue (priority DESC);
CREATE INDEX idx_blog_queue_created  ON public.blog_queue (created_at DESC);

ALTER TABLE public.blog_queue ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin full access to blog_queue"
  ON public.blog_queue FOR ALL TO authenticated
  USING (true);


-- ============================================================
-- 3. GSC DATA TABLE
--    Daily Google Search Console performance data
--    Synced via /api/cron/gsc-sync (runs 3am UTC daily)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.gsc_data (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url             TEXT        NOT NULL,   -- full page URL e.g. /blog/pet-me-gas
  keyword         TEXT        NOT NULL,   -- search query
  date            DATE        NOT NULL,
  clicks          INT         NOT NULL DEFAULT 0,
  impressions     INT         NOT NULL DEFAULT 0,
  ctr             NUMERIC(6,4),           -- e.g. 0.0432 = 4.32%
  position        NUMERIC(6,2),           -- avg position e.g. 8.4
  country         TEXT        DEFAULT 'ind',
  device          TEXT        DEFAULT 'DESKTOP',
  -- Denormalized for fast admin dashboard queries
  blog_post_id    UUID REFERENCES public.blog_posts(id) ON DELETE SET NULL,
  synced_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Unique constraint: one row per url × keyword × date × country × device
CREATE UNIQUE INDEX idx_gsc_unique
  ON public.gsc_data (url, keyword, date, country, device);

CREATE INDEX idx_gsc_url      ON public.gsc_data (url);
CREATE INDEX idx_gsc_date     ON public.gsc_data (date DESC);
CREATE INDEX idx_gsc_keyword  ON public.gsc_data (keyword);
CREATE INDEX idx_gsc_position ON public.gsc_data (position);

ALTER TABLE public.gsc_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin reads gsc_data"
  ON public.gsc_data FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Service role writes gsc_data"
  ON public.gsc_data FOR INSERT TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role upserts gsc_data"
  ON public.gsc_data FOR UPDATE TO service_role
  USING (true);


-- ============================================================
-- 4. BLOG KEYWORD MAP TABLE
--    Maps target keywords to pages for admin dashboard view
--    Updated by blog-publisher and GSC sync
-- ============================================================

CREATE TABLE IF NOT EXISTS public.blog_keyword_map (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword         TEXT        NOT NULL,
  page_url        TEXT        NOT NULL,   -- /blog/slug or /conditions/slug etc.
  page_type       TEXT        NOT NULL    -- 'blog' | 'condition' | 'procedure' | 'symptom' | 'location'
                  CHECK (page_type IN ('blog','condition','procedure','symptom','location','diet')),
  blog_post_id    UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  -- Latest GSC snapshot (refreshed daily)
  current_position  NUMERIC(6,2),
  current_clicks    INT DEFAULT 0,
  current_impressions INT DEFAULT 0,
  current_ctr       NUMERIC(6,4),
  -- Trend (compared to 7 days ago)
  position_delta    NUMERIC(6,2),         -- negative = improvement (lower number = higher rank)
  -- Categorisation
  intent          TEXT        DEFAULT 'informational'
                  CHECK (intent IN ('informational','navigational','commercial','transactional')),
  is_primary      BOOLEAN     NOT NULL DEFAULT true,  -- primary vs secondary keyword for this page
  notes           TEXT,
  -- Timestamps
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_keyword_map_unique ON public.blog_keyword_map (keyword, page_url);
CREATE INDEX idx_keyword_map_page    ON public.blog_keyword_map (page_url);
CREATE INDEX idx_keyword_map_pos     ON public.blog_keyword_map (current_position);
CREATE INDEX idx_keyword_map_page_type ON public.blog_keyword_map (page_type);

CREATE TRIGGER trg_keyword_map_updated_at
  BEFORE UPDATE ON public.blog_keyword_map
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.blog_keyword_map ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin full access to blog_keyword_map"
  ON public.blog_keyword_map FOR ALL TO authenticated
  USING (true);

CREATE POLICY "Service role manages keyword map"
  ON public.blog_keyword_map FOR ALL TO service_role
  USING (true);


-- ============================================================
-- 5. HELPER VIEW: blog_traffic_summary
--    Aggregated per-blog traffic from gsc_data
--    Used by admin Traffic Stats screen
-- ============================================================

CREATE OR REPLACE VIEW public.blog_traffic_summary AS
SELECT
  g.url,
  bp.slug,
  bp.title_hi,
  bp.title_en,
  bp.category,
  bp.primary_keyword,
  -- Last 7 days
  SUM(CASE WHEN g.date >= CURRENT_DATE - 7 THEN g.clicks ELSE 0 END)       AS clicks_7d,
  SUM(CASE WHEN g.date >= CURRENT_DATE - 7 THEN g.impressions ELSE 0 END)  AS impressions_7d,
  ROUND(AVG(CASE WHEN g.date >= CURRENT_DATE - 7 THEN g.position END), 1)  AS avg_position_7d,
  -- Last 28 days
  SUM(CASE WHEN g.date >= CURRENT_DATE - 28 THEN g.clicks ELSE 0 END)      AS clicks_28d,
  SUM(CASE WHEN g.date >= CURRENT_DATE - 28 THEN g.impressions ELSE 0 END) AS impressions_28d,
  -- All time
  SUM(g.clicks)                                                             AS clicks_total,
  SUM(g.impressions)                                                        AS impressions_total,
  ROUND(AVG(g.position), 1)                                                 AS avg_position_all,
  MAX(g.date)                                                               AS last_synced_date
FROM public.gsc_data g
LEFT JOIN public.blog_posts bp ON bp.slug = REPLACE(REPLACE(g.url, '/blog/', ''), '/', '')
GROUP BY g.url, bp.slug, bp.title_hi, bp.title_en, bp.category, bp.primary_keyword;


-- ============================================================
-- 6. HELPER VIEW: keyword_opportunity_report
--    Keywords on positions 4-20 (quick-win targets)
--    Used by admin Keyword Mapping screen
-- ============================================================

CREATE OR REPLACE VIEW public.keyword_opportunity_report AS
SELECT
  g.keyword,
  g.url,
  bp.title_hi,
  ROUND(AVG(g.position), 1)    AS avg_position,
  SUM(g.clicks)                AS total_clicks,
  SUM(g.impressions)           AS total_impressions,
  ROUND(AVG(g.ctr) * 100, 2)  AS avg_ctr_pct,
  COUNT(DISTINCT g.date)       AS days_tracked
FROM public.gsc_data g
LEFT JOIN public.blog_posts bp ON bp.slug = REPLACE(REPLACE(g.url, '/blog/', ''), '/', '')
WHERE g.date >= CURRENT_DATE - 90
GROUP BY g.keyword, g.url, bp.title_hi
HAVING AVG(g.position) BETWEEN 4 AND 20
ORDER BY total_impressions DESC;
