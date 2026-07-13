"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { TrendingUp, Users, MousePointer, Globe, RefreshCw, Facebook, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";

const supabase = createSupabaseBrowser();

interface PageVisit {
  id: string;
  page: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at: string;
}

interface DayCount { date: string; count: number }

function getDayLabel(dateStr: string) {
  const d = new Date(dateStr);
  const today = new Date();
  const diff = Math.floor((today.getTime() - d.getTime()) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export default function AnalyticsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [visits, setVisits] = useState<PageVisit[]>([]);
  const [visitTableReady, setVisitTableReady] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const [leadsRes, visitsRes] = await Promise.all([
      supabase.from("gastro_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("page_visits").select("*").order("created_at", { ascending: false }).limit(500),
    ]);

    if (leadsRes.data) setLeads(leadsRes.data as Lead[]);

    if (visitsRes.error) {
      if (visitsRes.error.message?.includes("relation") || visitsRes.error.code === "42P01") {
        setVisitTableReady(false);
      }
    } else {
      setVisits((visitsRes.data as PageVisit[]) ?? []);
    }

    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Lead analytics from gastro_leads
  const totalLeads = leads.length;
  const today = new Date().toDateString();
  const todayLeads = leads.filter((l) => new Date(l.created_at).toDateString() === today).length;

  const sourceBreakdown = leads.reduce<Record<string, number>>((acc, l) => {
    const src = l.source ?? "Unknown";
    acc[src] = (acc[src] ?? 0) + 1;
    return acc;
  }, {});

  const statusBreakdown = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.status] = (acc[l.status] ?? 0) + 1;
    return acc;
  }, {});

  // Leads per day (last 7 days)
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toDateString();
  });

  const leadsPerDay: DayCount[] = last7.map((dateStr) => ({
    date: dateStr,
    count: leads.filter((l) => new Date(l.created_at).toDateString() === dateStr).length,
  }));

  const maxLeadsDay = Math.max(...leadsPerDay.map((d) => d.count), 1);

  // Visit analytics
  const totalVisits = visits.length;
  const todayVisits = visits.filter((v) => new Date(v.created_at).toDateString() === today).length;

  const topPages = Object.entries(
    visits.reduce<Record<string, number>>((acc, v) => {
      acc[v.page] = (acc[v.page] ?? 0) + 1;
      return acc;
    }, {})
  ).sort(([, a], [, b]) => b - a).slice(0, 8);

  const utmSources = Object.entries(
    visits.filter((v) => v.utm_source).reduce<Record<string, number>>((acc, v) => {
      const src = v.utm_source!;
      acc[src] = (acc[src] ?? 0) + 1;
      return acc;
    }, {})
  ).sort(([, a], [, b]) => b - a);

  const SOURCE_ICONS: Record<string, React.ReactNode> = {
    "Facebook": <Facebook size={12} className="text-blue-600" />,
    "Google Ads": <Globe size={12} className="text-red-500" />,
    "WhatsApp": <MessageCircle size={12} className="text-green-600" />,
    "Walk-in": <Users size={12} className="text-purple-600" />,
    "Referral": <Phone size={12} className="text-orange-600" />,
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-400 text-sm">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Top stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Leads", value: totalLeads, sub: `${todayLeads} today`, color: "text-navy", bg: "bg-gray-50" },
          { label: "Confirmed", value: statusBreakdown["Confirmed"] ?? 0, sub: `${statusBreakdown["Visited"] ?? 0} visited`, color: "text-green-700", bg: "bg-green-50" },
          { label: "Page Visits", value: visitTableReady ? totalVisits : "—", sub: visitTableReady ? `${todayVisits} today` : "Migration needed", color: "text-blue-700", bg: "bg-blue-50" },
          { label: "Conversion %", value: totalLeads > 0 ? `${Math.round(((statusBreakdown["Confirmed"] ?? 0) + (statusBreakdown["Visited"] ?? 0)) / totalLeads * 100)}%` : "—", sub: "Leads to confirmed", color: "text-teal-700", bg: "bg-teal-50" },
        ].map((stat) => (
          <div key={stat.label} className={cn("rounded-2xl p-4 border border-gray-200", stat.bg)}>
            <p className={cn("text-2xl font-bold font-display", stat.color)}>{stat.value}</p>
            <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider font-semibold">{stat.label}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">

        {/* Leads per day chart */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-navy text-sm flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" /> Leads — Last 7 Days
            </h3>
            <button onClick={fetchData} className="p-1.5 text-gray-400 hover:text-navy rounded-lg">
              <RefreshCw size={12} />
            </button>
          </div>
          <div className="flex items-end gap-2 h-28">
            {leadsPerDay.map(({ date, count }, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-gray-600 font-semibold">{count || ""}</span>
                <div
                  className="w-full bg-primary rounded-t-lg transition-all"
                  style={{ height: count === 0 ? "4px" : `${(count / maxLeadsDay) * 88}px`, opacity: count === 0 ? 0.2 : 1 }}
                />
                <span className="text-[9px] text-gray-400 text-center leading-none">
                  {getDayLabel(date).replace("Yesterday", "Yest.").replace("Today", "Today")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead sources */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 className="font-bold text-navy text-sm flex items-center gap-2 mb-4">
            <Globe size={16} className="text-primary" /> Lead Sources
          </h3>
          <div className="space-y-2.5">
            {Object.entries(sourceBreakdown).sort(([, a], [, b]) => b - a).map(([src, count]) => (
              <div key={src} className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 w-28 flex-shrink-0">
                  {SOURCE_ICONS[src] ?? <MousePointer size={12} className="text-gray-400" />}
                  <span className="text-xs text-gray-700 font-medium truncate">{src}</span>
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${(count / totalLeads) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-navy w-6 text-right">{count}</span>
              </div>
            ))}
            {Object.keys(sourceBreakdown).length === 0 && (
              <p className="text-gray-400 text-xs text-center py-4">No leads yet</p>
            )}
          </div>
        </div>

        {/* Lead status breakdown */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 className="font-bold text-navy text-sm flex items-center gap-2 mb-4">
            <Users size={16} className="text-primary" /> Lead Status Breakdown
          </h3>
          <div className="space-y-2">
            {[
              { key: "New", color: "bg-gray-400" },
              { key: "Called", color: "bg-blue-400" },
              { key: "Confirmed", color: "bg-teal-500" },
              { key: "Visited", color: "bg-green-500" },
              { key: "No-answer", color: "bg-red-400" },
              { key: "Follow-up", color: "bg-orange-400" },
              { key: "Cancelled", color: "bg-gray-300" },
            ].map(({ key, color }) => {
              const count = statusBreakdown[key] ?? 0;
              if (count === 0) return null;
              return (
                <div key={key} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 w-20 flex-shrink-0">{key}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div className={cn("h-full rounded-full", color)} style={{ width: `${(count / totalLeads) * 100}%` }} />
                  </div>
                  <span className="text-xs font-bold text-navy w-6 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top pages (if tracking enabled) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 className="font-bold text-navy text-sm flex items-center gap-2 mb-4">
            <MousePointer size={16} className="text-primary" /> Top Pages
            {!visitTableReady && (
              <span className="text-[10px] font-normal text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                Run migration to enable
              </span>
            )}
          </h3>
          {!visitTableReady ? (
            <p className="text-gray-400 text-xs">Add the <strong>page_visits</strong> table via supabase-migration-002.sql to track page views.</p>
          ) : topPages.length === 0 ? (
            <p className="text-gray-400 text-xs">No page visits tracked yet. Visits are recorded after the migration runs and the website is live.</p>
          ) : (
            <div className="space-y-2">
              {topPages.map(([page, count]) => (
                <div key={page} className="flex items-center gap-3">
                  <span className="text-[11px] text-gray-600 flex-1 truncate font-mono">{page}</span>
                  <div className="w-16 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: `${(count / (topPages[0][1])) * 100}%` }} />
                  </div>
                  <span className="text-xs font-bold text-navy w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          )}
          {visitTableReady && utmSources.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">UTM Sources</p>
              <div className="flex flex-wrap gap-2">
                {utmSources.map(([src, count]) => (
                  <span key={src} className="text-[11px] px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {src} ({count})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
