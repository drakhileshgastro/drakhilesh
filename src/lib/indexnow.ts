/**
 * IndexNow — Instant search engine indexing ping
 * Protocol: https://www.indexnow.org/documentation
 * Participating Search Engines: Bing, Naver, Seznam, Yandex
 *
 * Setup:
 *  1. Verification key: 19cb8421d1717f480871a5766b5f179e
 *  2. Verification file: public/19cb8421d1717f480871a5766b5f179e.txt
 *  3. Hosted at: https://drakhileshgastro.com/19cb8421d1717f480871a5766b5f179e.txt
 */

import { getAllServiceSlugs } from "@/data/services-data";
import { getAllBlogsForSitemap } from "@/data/blog-data";
import { getAllProcedureSlugs } from "@/data/procedures-data-v2";
import { getAllSymptomSlugs } from "@/data/symptoms-data";
import { LOCATIONS_DATA } from "@/data/locations-data";
import { getAllDietSlugs } from "@/data/diet-data";
import { getAllPatientGuideSlugs } from "@/data/patient-guide-data";

export const SITE_HOST = "drakhileshgastro.com";
export const SITE_URL = `https://${SITE_HOST}`;
export const DEFAULT_INDEXNOW_KEY = "19cb8421d1717f480871a5766b5f179e";

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

export interface IndexNowResult {
  ok: boolean;
  status?: number;
  count: number;
  endpoints: { endpoint: string; status?: number; ok: boolean }[];
  error?: string;
}

/**
 * Pings IndexNow endpoints for an array of relative paths or full URLs.
 * Automatically distributes to Bing, Naver, Seznam, and Yandex.
 */
export async function pingIndexNow(paths: string[]): Promise<IndexNowResult> {
  const key = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
  if (!key) {
    console.warn("[IndexNow] INDEXNOW_KEY not set — skipping ping");
    return { ok: false, count: 0, endpoints: [], error: "INDEXNOW_KEY not set" };
  }

  if (!paths || paths.length === 0) {
    return { ok: true, count: 0, endpoints: [] };
  }

  // Deduplicate and ensure full URLs
  const rawList = paths.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p.startsWith("/") ? "" : "/"}${p}`));
  const urlList = Array.from(new Set(rawList));

  const payload = {
    host: SITE_HOST,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList,
  };

  const results: { endpoint: string; status?: number; ok: boolean }[] = [];
  let atLeastOneSuccess = false;

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      // IndexNow protocol defines 200 (OK) and 202 (Accepted) as successful submission
      const isOk = res.status === 200 || res.status === 202;
      results.push({ endpoint, status: res.status, ok: isOk });

      if (isOk) {
        atLeastOneSuccess = true;
        console.log(`[IndexNow] Submitted ${urlList.length} URL(s) to ${endpoint} — HTTP ${res.status}`);
      } else {
        const body = await res.text().catch(() => "");
        console.error(`[IndexNow] Warning from ${endpoint} (HTTP ${res.status}): ${body}`);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[IndexNow] Network error connecting to ${endpoint}:`, msg);
      results.push({ endpoint, ok: false });
    }
  }

  return {
    ok: atLeastOneSuccess,
    count: urlList.length,
    status: results[0]?.status,
    endpoints: results,
    error: atLeastOneSuccess ? undefined : "All IndexNow endpoint submissions failed",
  };
}

/**
 * Convenience: ping a new or updated blog post after publishing/editing.
 * Also pings /blog (the listing page) and /sitemap.xml so crawlers discover it immediately.
 */
export async function pingNewBlog(slug: string): Promise<IndexNowResult> {
  return pingIndexNow([`/blog/${slug}`, "/blog", "/sitemap.xml"]);
}

/**
 * Ping core landing and conversion pages (call during deploys or sitemap regeneration).
 */
export async function pingAllPages(): Promise<IndexNowResult> {
  const CORE = [
    "/",
    "/about",
    "/conditions",
    "/procedures",
    "/symptoms",
    "/blog",
    "/book",
    "/faqs",
    "/contact",
    "/sitemap.xml",
  ];
  return pingIndexNow(CORE);
}

/**
 * Collect all published, indexable URLs across the entire website.
 */
export function getAllSiteUrls(): string[] {
  const staticPaths = [
    "/",
    "/about",
    "/conditions",
    "/procedures",
    "/symptoms",
    "/patient-guide",
    "/book",
    "/blog",
    "/diet",
    "/contact",
    "/faqs",
    "/videos",
  ];

  const servicePaths = getAllServiceSlugs().map((s) => `/conditions/${s}`);
  const procedurePaths = getAllProcedureSlugs().map((s) => `/procedures/${s}`);
  const symptomPaths = getAllSymptomSlugs().map((s) => `/symptoms/${s}`);
  const locationPaths = Object.keys(LOCATIONS_DATA).map((s) => `/locations/${s}`);
  const dietPaths = getAllDietSlugs().map((s) => `/diet/${s}`);
  const guidePaths = getAllPatientGuideSlugs().map((s) => `/patient-guide/${s}`);
  const blogPaths = getAllBlogsForSitemap().map((b) => `/blog/${b.slug}`);

  const allPaths = [
    ...staticPaths,
    ...servicePaths,
    ...procedurePaths,
    ...symptomPaths,
    ...locationPaths,
    ...dietPaths,
    ...guidePaths,
    ...blogPaths,
    "/sitemap.xml",
  ];

  return Array.from(new Set(allPaths.map((p) => `${SITE_URL}${p}`)));
}

/**
 * Ping all site URLs in bulk (batch size up to 10,000 per IndexNow spec).
 */
export async function pingAllSitemapUrls(): Promise<IndexNowResult> {
  const allUrls = getAllSiteUrls();
  return pingIndexNow(allUrls);
}
