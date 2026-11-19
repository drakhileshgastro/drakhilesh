import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Dr Akhilesh Gastro - Google Search Console Live Data Connector & Diagnostics
 * Uses native Node.js GSC API client with Service Account authentication.
 *
 * Setup:
 * 1. Add `intellix-gsc@cool-skill-412310.iam.gserviceaccount.com` as a user in GSC
 *    under `https://drakhileshgastro.com/` or `sc-domain:drakhileshgastro.com`.
 * 2. Run: node scripts/fetch-gsc-live.mjs
 */

const CANDIDATE_SITES = [
  'https://drakhileshgastro.com/',
  'sc-domain:drakhileshgastro.com',
  'https://www.drakhileshgastro.com/'
];

export function getCredentials() {
  const keyPath = path.resolve(process.cwd(), 'gsc-service-account.json');
  if (fs.existsSync(keyPath)) {
    try {
      const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
      return { clientEmail: keyData.client_email, privateKey: keyData.private_key };
    } catch (e) {
      console.error('Error reading gsc-service-account.json:', e);
    }
  }

  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const saMatch = envContent.match(/GOOGLE_SERVICE_ACCOUNT_KEY=['"]?(\{.+?\})['"]?/);
    if (saMatch) {
      try {
        const keyData = JSON.parse(saMatch[1]);
        return { clientEmail: keyData.client_email, privateKey: keyData.private_key };
      } catch (e) {}
    }
  }

  return null;
}

function createSignedJwt(clientEmail, privateKey) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const b64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const b64Claim = Buffer.from(JSON.stringify(claim)).toString('base64url');
  const signInput = `${b64Header}.${b64Claim}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const signature = signer.sign(privateKey, 'base64url');

  return `${signInput}.${signature}`;
}

export async function getAccessToken(clientEmail, privateKey) {
  const assertion = createSignedJwt(clientEmail, privateKey);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion
    })
  });

  const data = await res.json();
  if (data.error) {
    throw new Error(`OAuth error: ${data.error_description || data.error}`);
  }
  return data.access_token;
}

export async function fetchLiveGscData(options = {}) {
  const creds = getCredentials();
  if (!creds) {
    console.log('\n[GSC Live Connector] Notice: No Service Account credentials configured.');
    return null;
  }

  console.log(`Connecting to Google OAuth for ${creds.clientEmail}...`);
  const token = await getAccessToken(creds.clientEmail, creds.privateKey);
  console.log('Google OAuth authentication successful!\n');

  // Check which properties are currently accessible
  const sitesRes = await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const sitesData = await sitesRes.json();
  console.log('Search Console properties currently accessible to this account:');
  if (sitesData.siteEntry && sitesData.siteEntry.length > 0) {
    sitesData.siteEntry.forEach((s) => {
      console.log(`  - ${s.siteUrl} (Permission: ${s.permissionLevel})`);
    });
  } else {
    console.log('  (None yet)');
  }

  const days = options.days || 28;
  const endDate = options.endDate || new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const startDate = options.startDate || new Date(Date.now() - (days + 3) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  let matchedSite = null;
  let queryData = null;

  for (const site of CANDIDATE_SITES) {
    const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 100
      })
    });

    if (res.ok) {
      matchedSite = site;
      queryData = await res.json();
      break;
    }
  }

  if (!matchedSite) {
    console.log('\n======================================================');
    console.log('ACTION REQUIRED IN GOOGLE SEARCH CONSOLE:');
    console.log(`1. Open https://search.google.com/search-console`);
    console.log(`2. Log in with your account: digitallyarvind@gmail.com`);
    console.log(`3. Select property: drakhileshgastro.com`);
    console.log(`4. Go to Settings -> Users and permissions -> Add user`);
    console.log(`5. Email: ${creds.clientEmail}`);
    console.log(`6. Permission: Full (or Owner)`);
    console.log(`7. Click Add.`);
    console.log('======================================================\n');
    return null;
  }

  console.log(`\nSuccessfully connected to GSC property: ${matchedSite}!`);
  console.log(`Date range: ${startDate} to ${endDate}`);
  console.log(`Keywords found: ${queryData.rows?.length || 0}`);
  if (queryData.rows?.length) {
    console.table(
      queryData.rows.slice(0, 10).map((r) => ({
        keyword: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: `${(r.ctr * 100).toFixed(1)}%`,
        position: r.position.toFixed(1)
      }))
    );
  }

  return { site: matchedSite, queries: queryData.rows || [] };
}

fetchLiveGscData().catch((err) => {
  console.error('GSC Error:', err.message);
});
