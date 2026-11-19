import fs from 'fs';
import path from 'path';
import { getCredentials, getAccessToken } from './fetch-gsc-live.mjs';

async function main() {
  const creds = getCredentials();
  if (!creds) {
    console.error('No credentials found');
    process.exit(1);
  }

  const token = await getAccessToken(creds.clientEmail, creds.privateKey);
  const siteUrl = 'sc-domain:drakhileshgastro.com';

  const queryGSC = async (body) => {
    const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`GSC API error (${res.status}): ${err}`);
    }
    return await res.json();
  };

  const today = new Date();
  // Typically GSC has a 2-3 day lag
  const endDateObj = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  const endDate = endDateObj.toISOString().split('T')[0];

  // Last 28 days
  const startDate28Obj = new Date(endDateObj.getTime() - 27 * 24 * 60 * 60 * 1000);
  const startDate28 = startDate28Obj.toISOString().split('T')[0];

  // Previous 28 days for comparison
  const prevEndDateObj = new Date(startDate28Obj.getTime() - 1 * 24 * 60 * 60 * 1000);
  const prevEndDate = prevEndDateObj.toISOString().split('T')[0];
  const prevStartDateObj = new Date(prevEndDateObj.getTime() - 27 * 24 * 60 * 60 * 1000);
  const prevStartDate = prevStartDateObj.toISOString().split('T')[0];

  // Last 90 days
  const startDate90Obj = new Date(endDateObj.getTime() - 89 * 24 * 60 * 60 * 1000);
  const startDate90 = startDate90Obj.toISOString().split('T')[0];

  console.log(`Running comprehensive GSC audit for ${siteUrl}`);
  console.log(`Current Period (28d): ${startDate28} to ${endDate}`);
  console.log(`Previous Period (28d): ${prevStartDate} to ${prevEndDate}`);
  console.log(`Long-term Period (90d): ${startDate90} to ${endDate}`);

  // 1. Overall Totals for Last 28d
  const currTotals = await queryGSC({
    startDate: startDate28,
    endDate: endDate
  });

  // 2. Overall Totals for Previous 28d
  const prevTotals = await queryGSC({
    startDate: prevStartDate,
    endDate: prevEndDate
  });

  // 3. Overall Totals for 90d
  const totals90 = await queryGSC({
    startDate: startDate90,
    endDate: endDate
  });

  // 4. Daily trend (date dimension) for last 28d and 90d
  const daily90 = await queryGSC({
    startDate: startDate90,
    endDate: endDate,
    dimensions: ['date'],
    rowLimit: 100
  });

  // 5. Queries (last 28d) - up to 1000 rows
  const queries28 = await queryGSC({
    startDate: startDate28,
    endDate: endDate,
    dimensions: ['query'],
    rowLimit: 1000
  });

  // 6. Pages (last 28d) - up to 1000 rows
  const pages28 = await queryGSC({
    startDate: startDate28,
    endDate: endDate,
    dimensions: ['page'],
    rowLimit: 1000
  });

  // 7. Query + Page combinations (to detect cannibalization)
  const queryPages28 = await queryGSC({
    startDate: startDate28,
    endDate: endDate,
    dimensions: ['query', 'page'],
    rowLimit: 1000
  });

  // 8. Devices
  const devices28 = await queryGSC({
    startDate: startDate28,
    endDate: endDate,
    dimensions: ['device']
  });

  // 9. Countries
  const countries28 = await queryGSC({
    startDate: startDate28,
    endDate: endDate,
    dimensions: ['country'],
    rowLimit: 25
  });

  // 10. Search Appearance
  let searchAppearance28 = { rows: [] };
  try {
    searchAppearance28 = await queryGSC({
      startDate: startDate28,
      endDate: endDate,
      dimensions: ['searchAppearance']
    });
  } catch (e) {
    console.log('Search Appearance dimension not supported or empty');
  }

  const result = {
    meta: {
      siteUrl,
      auditedAt: new Date().toISOString(),
      current28d: { start: startDate28, end: endDate },
      prev28d: { start: prevStartDate, end: prevEndDate },
      long90d: { start: startDate90, end: endDate }
    },
    currTotals: currTotals.rows ? currTotals.rows[0] : null,
    prevTotals: prevTotals.rows ? prevTotals.rows[0] : null,
    totals90: totals90.rows ? totals90.rows[0] : null,
    daily90: daily90.rows || [],
    queries28: queries28.rows || [],
    pages28: pages28.rows || [],
    queryPages28: queryPages28.rows || [],
    devices28: devices28.rows || [],
    countries28: countries28.rows || [],
    searchAppearance28: searchAppearance28.rows || []
  };

  const outputPath = path.resolve(process.cwd(), 'gsc-audit-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`Saved GSC audit data to ${outputPath}`);
}

main().catch(console.error);
