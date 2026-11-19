/**
 * Live GSC Ranking Tracker & Sync Script
 * Usage:
 *   node scripts/sync-gsc-rankings.mjs
 *   npm run gsc:sync
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Load environment variables from .env.local
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

function getServiceAccount() {
  const envKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (envKey) {
    try {
      return JSON.parse(envKey);
    } catch {
      const decoded = Buffer.from(envKey, 'base64').toString('utf8');
      return JSON.parse(decoded);
    }
  }
  throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY not found in .env.local');
}

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const toSign = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(toSign);
  const signature = signer.sign(sa.private_key, 'base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const jwt = `${toSign}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OAuth token exchange failed: HTTP ${res.status} — ${errText}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function fetchGscRankings(token, siteUrl, days = 28) {
  const end = new Date();
  end.setDate(end.getDate() - 2); // 2 days lag for final GSC data
  const start = new Date(end);
  start.setDate(start.getDate() - days);

  const fmt = (d) => d.toISOString().slice(0, 10);
  const startDate = fmt(start);
  const endDate = fmt(end);

  const api = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const res = await fetch(api, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions: ['query', 'page'],
      rowLimit: 500,
      dataState: 'final',
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GSC query failed for ${siteUrl}: ${res.status} — ${text}`);
  }

  const data = await res.json();
  return { rows: data.rows || [], startDate, endDate };
}

async function main() {
  console.log('=======================================================');
  console.log('   Google Search Console Live Ranking & Traffic Sync   ');
  console.log('=======================================================');

  const sa = getServiceAccount();
  console.log(`Service Account: ${sa.client_email}`);

  const token = await getAccessToken(sa);
  console.log(`OAuth2 Token:    Acquired successfully\n`);

  const CANDIDATE_SITES = [
    'sc-domain:drakhileshgastro.com',
    'https://drakhileshgastro.com/',
  ];

  let result = null;
  let activeSite = '';

  for (const site of CANDIDATE_SITES) {
    try {
      result = await fetchGscRankings(token, site);
      activeSite = site;
      break;
    } catch (e) {
      // try next
    }
  }

  if (!result || result.rows.length === 0) {
    console.log('No GSC data returned yet for the given period.');
    return;
  }

  const { rows, startDate, endDate } = result;
  console.log(`Property:        ${activeSite}`);
  console.log(`Date Range:      ${startDate} to ${endDate} (28 Days)`);
  console.log(`Total Queries:   ${rows.length}`);
  console.log('-------------------------------------------------------\n');

  // Sort by impressions descending
  rows.sort((a, b) => b.impressions - a.impressions);

  console.log('TOP 15 QUERIES BY SEARCH IMPRESSIONS:');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log(
    'Query'.padEnd(42) +
    'Clicks'.padStart(8) +
    'Impr'.padStart(10) +
    'CTR'.padStart(8) +
    'Pos'.padStart(8) +
    '   Landing Page'
  );
  console.log('---------------------------------------------------------------------------------------------------------');

  rows.slice(0, 15).forEach((r) => {
    const q = (r.keys[0] || '').slice(0, 40).padEnd(42);
    const clicks = String(r.clicks).padStart(8);
    const impr = String(r.impressions).padStart(10);
    const ctr = `${(r.ctr * 100).toFixed(1)}%`.padStart(8);
    const pos = r.position.toFixed(1).padStart(8);
    const page = (r.keys[1] || '').replace('https://drakhileshgastro.com', '');
    console.log(`${q}${clicks}${impr}${ctr}${pos}   ${page}`);
  });

  // Striking distance keywords (Position 4 to 20)
  const strikingDistance = rows.filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 5);
  strikingDistance.sort((a, b) => b.impressions - a.impressions);

  console.log('\n---------------------------------------------------------------------------------------------------------');
  console.log(`STRIKING-DISTANCE OPPORTUNITIES (Positions 4.0 – 20.0, Quick Ranking Wins): ${strikingDistance.length} keywords`);
  console.log('---------------------------------------------------------------------------------------------------------');
  strikingDistance.slice(0, 10).forEach((r) => {
    const q = (r.keys[0] || '').slice(0, 40).padEnd(42);
    const clicks = String(r.clicks).padStart(8);
    const impr = String(r.impressions).padStart(10);
    const pos = r.position.toFixed(1).padStart(8);
    const page = (r.keys[1] || '').replace('https://drakhileshgastro.com', '');
    console.log(`${q}${clicks}${impr}   Pos: ${pos}   URL: ${page}`);
  });

  console.log('\n=======================================================');
  console.log('GSC Ranking Sync Complete. Progress toward 3,000 Traffic.');
  console.log('=======================================================\n');
}

main().catch((err) => {
  console.error('Fatal sync error:', err.message);
  process.exit(1);
});
