"use client";

import { useEffect, useState } from "react";
import { Users, MousePointerClick, Timer, RefreshCw, TrendingUp, Smartphone, Monitor, ExternalLink } from "lucide-react";

/**
 * Visitors Analytics — GA4 data
 * GA4 Measurement ID: G-ZYE92TKM0W (already wired in layout.tsx)
 *
 * This screen reads from the GA4 Data API (REST) using a service account.
 * Requires env vars: GOOGLE_SERVICE_ACCOUNT_KEY (same key as GSC if GA4 is in same project)
 *
 * Until the API endpoint is built, it reads available client-side GA4 data
 * and shows a setup guide if no data is present.
 */

interface GA4Summary {
  sessions: number;
  users: number;
  newUsers: number;
  pageviews: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: { page: string; views: number; avgTime: number }[];
  deviceBreakdown: { device: string; sessions: number; pct: number }[];
  topCities: { city: string; sessions: number }[];
  channelBreakdown: { channel: string; sessions: number; pct: number }[];
}

function StatCard({ label, value, sub, icon, color }: { label: string; value: string; sub?: string; icon: React.ReactNode; color: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "18px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>{label}</p>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", color }}>{icon}</div>
      </div>
      <p style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", margin: 0 }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>{sub}</p>}
    </div>
  );
}

function MiniBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 12, color: "#374151", width: 120, flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ flex: 1, height: 8, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 600ms ease" }} />
      </div>
      <span style={{ fontSize: 12, color: "#374151", fontWeight: 700, width: 48, textAlign: "right" }}>{value.toLocaleString()}</span>
    </div>
  );
}

function fmtDuration(secs: number) {
  if (!secs) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.round(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Mock data shown until GA4 API endpoint is built — clearly labeled "Demo"
const DEMO: GA4Summary = {
  sessions: 4821,
  users: 3290,
  newUsers: 2140,
  pageviews: 11480,
  bounceRate: 42.3,
  avgSessionDuration: 187,
  topPages: [
    { page: "/blog/pet-me-gas-kaise-bane", views: 1240, avgTime: 215 },
    { page: "/conditions/fatty-liver", views: 980, avgTime: 198 },
    { page: "/blog/liver-cirrhosis-symptoms", views: 870, avgTime: 234 },
    { page: "/blog/jaundice-kya-hota-hai", views: 760, avgTime: 189 },
    { page: "/", views: 680, avgTime: 92 },
  ],
  deviceBreakdown: [
    { device: "Mobile", sessions: 3377, pct: 70 },
    { device: "Desktop", sessions: 963, pct: 20 },
    { device: "Tablet", sessions: 481, pct: 10 },
  ],
  topCities: [
    { city: "Ranchi", sessions: 1690 },
    { city: "Jamshedpur", sessions: 723 },
    { city: "Bokaro", sessions: 481 },
    { city: "Dhanbad", sessions: 337 },
    { city: "Patna", sessions: 289 },
    { city: "Delhi", sessions: 241 },
  ],
  channelBreakdown: [
    { channel: "Organic Search", sessions: 2893, pct: 60 },
    { channel: "Direct", sessions: 964, pct: 20 },
    { channel: "Social", sessions: 482, pct: 10 },
    { channel: "Referral", sessions: 241, pct: 5 },
    { channel: "Paid", sessions: 241, pct: 5 },
  ],
};

export default function VisitorsAnalytics() {
  const [data] = useState<GA4Summary>(DEMO);
  const [isDemo] = useState(true);
  const [days, setDays] = useState(28);

  // Placeholder: in production, fetch from /api/admin/ga4?days=N
  useEffect(() => {
    // TODO: fetch(`/api/admin/ga4?days=${days}`) once GA4 Data API is wired
  }, [days]);

  const maxPage    = Math.max(...data.topPages.map(p => p.views));
  const maxCity    = Math.max(...data.topCities.map(c => c.sessions));
  const maxChannel = Math.max(...data.channelBreakdown.map(c => c.sessions));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Visitors Analytics</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>GA4 — G-ZYE92TKM0W · drakhileshgastro.com</p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <select value={days} onChange={e => setDays(Number(e.target.value))}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
            <option value={7}>Last 7 days</option>
            <option value={28}>Last 28 days</option>
            <option value={90}>Last 90 days</option>
          </select>
          <a href="https://analytics.google.com" target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, color: "#64748b", textDecoration: "none" }}>
            <ExternalLink size={12} /> Open GA4
          </a>
        </div>
      </div>

      {/* Demo banner */}
      {isDemo && (
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 12, padding: "12px 16px" }}>
          <p style={{ margin: 0, fontSize: 12, color: "#1d4ed8", fontWeight: 600 }}>
            📊 Demo data shown — connect GA4 Data API to see live numbers.
            Add <code style={{ background: "#dbeafe", padding: "1px 4px", borderRadius: 4, fontSize: 11 }}>GA4_PROPERTY_ID</code> env var and build <code style={{ background: "#dbeafe", padding: "1px 4px", borderRadius: 4, fontSize: 11 }}>/api/admin/ga4</code> endpoint (Phase 4).
          </p>
        </div>
      )}

      {/* Summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
        <StatCard label="Sessions" value={data.sessions.toLocaleString()} sub={`Last ${days} days`} icon={<TrendingUp size={15} />} color="#27AE60" />
        <StatCard label="Users" value={data.users.toLocaleString()} sub={`${data.newUsers.toLocaleString()} new`} icon={<Users size={15} />} color="#3b82f6" />
        <StatCard label="Pageviews" value={data.pageviews.toLocaleString()} sub={`${(data.pageviews / data.sessions).toFixed(1)} pages/session`} icon={<MousePointerClick size={15} />} color="#8b5cf6" />
        <StatCard label="Avg Session" value={fmtDuration(data.avgSessionDuration)} sub={`${data.bounceRate}% bounce rate`} icon={<Timer size={15} />} color="#f59e0b" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

        {/* Top Pages */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "18px 20px" }}>
          <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", marginBottom: 16, margin: "0 0 14px" }}>Top Pages</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.topPages.map(p => (
              <div key={p.page}>
                <MiniBar label={p.page} value={p.views} max={maxPage} color="#27AE60" />
                <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 2, marginLeft: 130 }}>avg {fmtDuration(p.avgTime)} on page</p>
              </div>
            ))}
          </div>
        </div>

        {/* Devices */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "18px 20px" }}>
          <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: "0 0 14px" }}>Devices</h3>
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            {data.deviceBreakdown.map(d => (
              <div key={d.device} style={{ flex: 1, textAlign: "center", background: "#f8fafc", borderRadius: 12, padding: "12px 8px" }}>
                {d.device === "Mobile" ? <Smartphone size={20} style={{ color: "#27AE60", margin: "0 auto 4px" }} /> : <Monitor size={20} style={{ color: "#3b82f6", margin: "0 auto 4px" }} />}
                <p style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", margin: "4px 0 2px" }}>{d.pct}%</p>
                <p style={{ fontSize: 10, color: "#94a3b8" }}>{d.device}</p>
              </div>
            ))}
          </div>
          <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: "0 0 10px" }}>Traffic Channels</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.channelBreakdown.map(c => (
              <MiniBar key={c.channel} label={c.channel} value={c.sessions} max={maxChannel} color="#3b82f6" />
            ))}
          </div>
        </div>

      </div>

      {/* Top Cities */}
      <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "18px 20px" }}>
        <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: "0 0 14px" }}>Top Cities — Jharkhand + Neighbouring States</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
          {data.topCities.map((city, i) => (
            <div key={city.city} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: i < 3 ? "#f0fdf4" : "#f8fafc", borderRadius: 10, border: `1px solid ${i < 3 ? "#bbf7d0" : "#f1f5f9"}` }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: i < 3 ? "#27AE60" : "#94a3b8", width: 28, textAlign: "center" }}>#{i + 1}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#0f172a", margin: 0 }}>{city.city}</p>
                <p style={{ fontSize: 11, color: "#94a3b8", margin: 0 }}>{city.sessions.toLocaleString()} sessions</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
