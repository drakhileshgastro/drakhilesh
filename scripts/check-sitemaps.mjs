import { getCredentials, getAccessToken } from './fetch-gsc-live.mjs';

async function checkSitemaps() {
  const creds = getCredentials();
  const token = await getAccessToken(creds.clientEmail, creds.privateKey);
  const siteUrl = 'sc-domain:drakhileshgastro.com';
  
  const res = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  console.log('Sitemaps data:', JSON.stringify(data, null, 2));
}

checkSitemaps().catch(console.error);
