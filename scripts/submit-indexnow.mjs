/**
 * IndexNow Bulk Submission CLI
 * Usage:
 *   node scripts/submit-indexnow.mjs           # Submits all URLs (or recent if specified)
 *   node scripts/submit-indexnow.mjs --all     # Submits all 188+ sitemap URLs
 *   node scripts/submit-indexnow.mjs --updated # Submits recently updated pages (locations, pillar blogs, procedures)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Load environment variables from .env.local if present
const envPath = path.join(projectRoot, '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const HOST = 'drakhileshgastro.com';
const BASE_URL = `https://${HOST}`;
const DEFAULT_KEY = '19cb8421d1717f480871a5766b5f179e';
const KEY = process.env.INDEXNOW_KEY || DEFAULT_KEY;
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

// Helper to extract URLs from built sitemap if available
function getUrlsFromBuiltSitemap() {
  const sitemapBodyPath = path.join(projectRoot, '.next/server/app/sitemap.xml.body');
  if (fs.existsSync(sitemapBodyPath)) {
    const content = fs.readFileSync(sitemapBodyPath, 'utf8');
    const matches = content.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g);
    const urls = [];
    for (const match of matches) {
      urls.push(match[1]);
    }
    if (urls.length > 0) return urls;
  }
  return [];
}

// Fallback dynamic generator if build hasn't run yet
function getDynamicUrls() {
  const urls = [
    `${BASE_URL}/`,
    `${BASE_URL}/about`,
    `${BASE_URL}/conditions`,
    `${BASE_URL}/procedures`,
    `${BASE_URL}/symptoms`,
    `${BASE_URL}/patient-guide`,
    `${BASE_URL}/book`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/diet`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/faqs`,
    `${BASE_URL}/videos`,
  ];

  // Read locations
  try {
    const locFile = fs.readFileSync(path.join(projectRoot, 'src/data/locations-data.ts'), 'utf8');
    const locMatches = locFile.matchAll(/slug:\s*["']([^"']+)["']/g);
    for (const m of locMatches) {
      urls.push(`${BASE_URL}/locations/${m[1]}`);
    }
  } catch {}

  // Read procedures
  try {
    const procFile = fs.readFileSync(path.join(projectRoot, 'src/data/procedures-data-v2.ts'), 'utf8');
    const procMatches = procFile.matchAll(/slug:\s*["']([^"']+)["']/g);
    for (const m of procMatches) {
      urls.push(`${BASE_URL}/procedures/${m[1]}`);
    }
  } catch {}

  // Read blogs
  try {
    const blogFile = fs.readFileSync(path.join(projectRoot, 'src/data/blog-data.ts'), 'utf8');
    const blogMatches = blogFile.matchAll(/"slug":\s*"([^"]+)"/g);
    for (const m of blogMatches) {
      urls.push(`${BASE_URL}/blog/${m[1]}`);
    }
  } catch {}

  return Array.from(new Set(urls));
}

// Get recently updated high-priority URLs
function getUpdatedUrls() {
  return [
    `${BASE_URL}/`,
    `${BASE_URL}/about`,
    `${BASE_URL}/procedures`,
    `${BASE_URL}/procedures/ercp-cost-ranchi`,
    `${BASE_URL}/procedures/colonoscopy-ranchi`,
    `${BASE_URL}/locations/ranchi`,
    `${BASE_URL}/locations/dhanbad`,
    `${BASE_URL}/locations/bokaro`,
    `${BASE_URL}/locations/jamshedpur`,
    `${BASE_URL}/locations/hazaribagh`,
    `${BASE_URL}/locations/ramgarh`,
    `${BASE_URL}/locations/giridih`,
    `${BASE_URL}/locations/deoghar`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/blog/fatty-liver-grade-1-2-3-differences-reversal`,
    `${BASE_URL}/blog/gallstones-dissolve-myths-india`,
    `${BASE_URL}/blog/jaundice-symptoms-causes`,
    `${BASE_URL}/blog/chronic-gas-bloating-cures-home-remedies`,
    `${BASE_URL}/sitemap.xml`,
  ];
}

async function submitToIndexNow(urls) {
  console.log(`=======================================================`);
  console.log(`  IndexNow Instant Search Engine Indexing Submission  `);
  console.log(`=======================================================`);
  console.log(`Host:         ${HOST}`);
  console.log(`Key:          ${KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);
  console.log(`Total URLs:   ${urls.length}`);
  console.log(`-------------------------------------------------------`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  for (const endpoint of ENDPOINTS) {
    try {
      const startTime = Date.now();
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      const durationMs = Date.now() - startTime;
      const statusText = res.statusText || (res.status === 200 ? 'OK' : res.status === 202 ? 'Accepted' : 'Unknown');

      if (res.status === 200 || res.status === 202) {
        console.log(`[SUCCESS] ${endpoint}`);
        console.log(`          HTTP ${res.status} (${statusText}) in ${durationMs}ms`);
        console.log(`          Pushed ${urls.length} URL(s) to search engines.`);
      } else {
        const body = await res.text().catch(() => '');
        console.warn(`[WARNING] ${endpoint} returned HTTP ${res.status} (${statusText}): ${body}`);
      }
    } catch (err) {
      console.error(`[ERROR] Failed connecting to ${endpoint}:`, err.message);
    }
  }

  console.log(`-------------------------------------------------------`);
  console.log(`Search engines notified: Bing, Naver, Seznam, Yandex`);
  console.log(`Verification key check:  ${KEY_LOCATION}`);
  console.log(`=======================================================\n`);
}

async function main() {
  const args = process.argv.slice(2);
  const isUpdatedOnly = args.includes('--updated');

  let urls;
  if (isUpdatedOnly) {
    urls = getUpdatedUrls();
  } else {
    urls = getUrlsFromBuiltSitemap();
    if (urls.length === 0) {
      urls = getDynamicUrls();
    }
  }

  await submitToIndexNow(urls);
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
