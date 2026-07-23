"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
const supabase = createSupabaseBrowser();
import {
  Users, CalendarCheck, IndianRupee, Activity,
  PhoneCall, ArrowRight, TrendingUp, FileText,
  ChevronRight, Wifi, AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";
import { STATUS_BADGE } from "@/components/admin/admin-leads";

function StatCard({
  label, value, sub, subColor, icon: Icon, iconColor, iconBg, loading,
}: {
  label: string; value: string | number; sub: string; subColor: string;
  icon: React.ElementType; iconColor: string; iconBg: string; loading?: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconBg }}>
          <Icon size={18} style={{ color: iconColor }} />
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: subColor, background: subColor + "18" }}>
          {sub}
        </span>
      </div>
      <p className="text-2xl font-extrabold text-slate-900 leading-none tabular-nums">
        {loading ? <span className="text-slate-200 animate-pulse">—</span> : value}
      </p>
      <p className="text-xs text-slate-500 mt-1.5 font-medium">{label}</p>
    </div>
  );
}

export default function AdminDashboard() {
  const [leads,   setLeads]   = useState<Lead[]>([]);
  const [revenue, setRevenue] = useState<{ consultation_fee: number; visit_date: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      supabase.from("gastro_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("gastro_revenue").select("consultation_fee, visit_date").order("visit_date", { ascending: false }),
    ]).then(([lr, rr]) => {
      setLeads((lr.data as Lead[]) ?? []);
      setRevenue(rr.data ?? []);
      setLoading(false);
    });

    const ch = supabase
      .channel("admin-dash")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, () => {
        supabase.from("gastro_leads").select("*").order("created_at", { ascending: false })
          .then(({ data }) => setLeads((data as Lead[]) ?? []));
      })
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, []);

  const today     = new Date().toDateString();
  const thisMonth = new Date().toISOString().slice(0, 7);
  const todayLeads   = leads.filter((l) => new Date(l.created_at).toDateString() === today);
  const confirmed    = leads.filter((l) => l.status === "Confirmed");
  const visited      = leads.filter((l) => l.status === "Visited");
  const monthRevenue = revenue
    .filter((r) => r.visit_date.startsWith(thisMonth))
    .reduce((s, r) => s + Number(r.consultation_fee), 0);
  const conversion = leads.length
    ? Math.round(((visited.length + confirmed.length) / leads.length) * 100)
    : 0;

  const STATS = [
    { label: "Total Leads",    value: leads.length,     sub: `+${todayLeads.length} today`,   icon: Users,         iconColor: "#3B82F6", iconBg: "#EFF6FF",  subColor: "#3B82F6" },
    { label: "Confirmed",      value: confirmed.length, sub: "Upcoming",                       icon: CalendarCheck, iconColor: "#059669", iconBg: "#ECFDF5",  subColor: "#059669" },
    { label: "Visited",        value: visited.length,   sub: "Treated OK",                     icon: Activity,      iconColor: "#7C3AED", iconBg: "#F5F3FF",  subColor: "#7C3AED" },
    { label: "Revenue / Month",
      value: `₹${monthRevenue.toLocaleString("en-IN")}`,
      sub: `${conversion}% conv.`,
      icon: IndianRupee,
      iconColor: "#D97706", iconBg: "#FFFBEB", subColor: "#D97706",
    },
  ];

  const pipeline = ["New","Called","Confirmed","Visited","Follow-up","No-answer","Cancelled"]
    .map((s) => ({ status: s, count: leads.filter((l) => l.status === s).length }))
    .filter((p) => p.count > 0);

  const SOURCES = leads.reduce<Record<string, number>>((acc, l) => {
    const src = (l as Lead & { lead_source?: string }).lead_source ?? "Website Form";
    acc[src] = (acc[src] ?? 0) + 1;
    return acc;
  }, {});

  const QUICK = [
    { href: "/admin/leads",     label: "All Leads",     desc: "View & call patients",  icon: Users,       color: "#3B82F6", bg: "#EFF6FF" },
    { href: "/admin/revenue",   label: "Revenue Log",   desc: "Track consultation fees", icon: IndianRupee, color: "#D97706", bg: "#FFFBEB" },
    { href: "/admin/blog",      label: "Blog CMS",      desc: "Publish health articles", icon: FileText,    color: "#7C3AED", bg: "#F5F3FF" },
    { href: "/admin/analytics", label: "Analytics",     desc: "Traffic & conversions",  icon: TrendingUp,  color: "#059669", bg: "#ECFDF5" },
  ];

  return (
    <div className="space-y-5 max-w-5xl mx-auto">

      {/* ── Live indicator banner ── */}
      <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-100 shadow-sm w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-slate-600">Live · Real-time updates</span>
        <Wifi size={12} className="text-emerald-500" />
      </div>

      {/* ── Stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {STATS.map((s) => (
          <StatCard key={s.label} loading={loading} {...s} />
        ))}
      </div>

      {/* ── Quick nav ── */}
      <div className="grid grid-cols-2 gap-3">
        {QUICK.map((q) => (
          <Link
            key={q.href}
            href={q.href}
            className="group flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md transition-all"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: q.bg }}>
              <q.icon size={16} style={{ color: q.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-800 text-sm font-bold leading-tight">{q.label}</p>
              <p className="text-slate-400 text-[10px] leading-tight mt-0.5 hidden sm:block">{q.desc}</p>
            </div>
            <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
          </Link>
        ))}
      </div>

      {/* ── Lead feed + pipeline ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Live lead feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-4 py-3.5 border-b border-slate-50 flex items-center justify-between">
            <p className="text-slate-800 font-bold text-sm">Recent Leads</p>
            <Link href="/admin/leads" className="flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              See all <ArrowRight size={11} />
            </Link>
          </div>

          <div className="divide-y divide-slate-50">
            {loading ? (
              [1,2,3].map((i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3.5 animate-pulse">
                  <div className="w-9 h-9 rounded-full bg-slate-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-slate-100 rounded w-32" />
                    <div className="h-2 bg-slate-100 rounded w-24" />
                  </div>
                </div>
              ))
            ) : leads.length === 0 ? (
              <div className="px-4 py-12 flex flex-col items-center gap-2">
                <AlertCircle size={24} className="text-slate-300" />
                <p className="text-slate-400 text-sm">No leads yet — share your booking link!</p>
              </div>
            ) : leads.slice(0, 6).map((lead) => (
              <Link
                key={lead.lead_id}
                href="/admin/leads"
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {lead.patient_name[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-slate-800 font-semibold text-sm truncate">{lead.patient_name}</p>
                    <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 border", STATUS_BADGE[lead.status])}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs truncate">{lead.condition} · {lead.patient_city}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <a
                    href={`tel:${lead.patient_phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-semibold mb-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <PhoneCall size={10} /> Call
                  </a>
                  <p className="text-slate-400 text-[10px]">
                    {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right column: pipeline + sources */}
        <div className="space-y-4">

          {/* Pipeline */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <p className="text-slate-800 font-bold text-sm mb-4">Lead Pipeline</p>
            {pipeline.length === 0 ? (
              <p className="text-slate-400 text-xs text-center py-4">No leads yet</p>
            ) : (
              <div className="space-y-3">
                {pipeline.map((p) => (
                  <div key={p.status} className="flex items-center gap-3">
                    <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-semibold w-[70px] text-center flex-shrink-0 border", STATUS_BADGE[p.status])}>
                      {p.status}
                    </span>
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-1.5 rounded-full bg-emerald-500 transition-all"
                        style={{ width: leads.length ? `${(p.count / leads.length) * 100}%` : "0%" }}
                      />
                    </div>
                    <span className="text-slate-700 font-bold text-xs w-4 text-right tabular-nums">{p.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Lead sources */}
          {Object.keys(SOURCES).length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
              <p className="text-slate-800 font-bold text-sm mb-3">Lead Sources</p>
              <div className="space-y-2">
                {Object.entries(SOURCES).map(([src, count]) => (
                  <div key={src} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-slate-500 text-xs truncate flex-1">{src}</span>
                    <span className="text-slate-700 font-bold text-xs tabular-nums">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
