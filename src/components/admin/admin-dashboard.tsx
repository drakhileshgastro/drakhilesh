"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
const supabase = createSupabaseBrowser();
import {
  Users, CalendarCheck, IndianRupee, Activity,
  PhoneCall, ArrowRight, TrendingUp, FileText,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";
import { STATUS_BADGE } from "@/components/admin/admin-leads";

const BRAND      = "#111827";
const BRAND_LIGHT = "#F3F4F6";

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
    { label: "Total Leads",    value: leads.length,     sub: `+${todayLeads.length} today`,   icon: Users,         color: "#3B82F6", bg: "#EFF6FF" },
    { label: "Confirmed",      value: confirmed.length, sub: "Upcoming",                       icon: CalendarCheck, color: "#059669", bg: "#ECFDF5" },
    { label: "Visited",        value: visited.length,   sub: "Treated",                        icon: Activity,      color: "#7C3AED", bg: "#F5F3FF" },
    { label: "Revenue (Month)",
      value: `₹${monthRevenue.toLocaleString("en-IN")}`,
      sub: `${conversion}% conv.`,
      icon: IndianRupee,
      color: "#D97706",
      bg: "#FFFBEB",
    },
  ];

  const pipeline = ["New","Called","Confirmed","Visited","Follow-up","No-answer","Cancelled"]
    .map((s) => ({ status: s, count: leads.filter((l) => l.status === s).length }))
    .filter((p) => p.count > 0);

  const QUICK_LINKS = [
    { href: "/admin/leads",     label: "All Leads",     icon: Users,       color: "#3B82F6", bg: "#EFF6FF" },
    { href: "/admin/revenue",   label: "Revenue Log",   icon: IndianRupee, color: "#D97706", bg: "#FFFBEB" },
    { href: "/admin/blog",      label: "Blog CMS",      icon: FileText,    color: "#7C3AED", bg: "#F5F3FF" },
    { href: "/admin/analytics", label: "Analytics",     icon: TrendingUp,  color: "#059669", bg: "#ECFDF5" },
  ];

  return (
    <div className="space-y-5 max-w-5xl mx-auto">

      {/* ── Stat cards ── */}
      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
              style={{ background: s.bg }}
            >
              <s.icon size={17} style={{ color: s.color }} />
            </div>
            <p className="text-2xl font-bold text-gray-900 leading-none tabular-nums">
              {loading ? <span className="text-gray-300">—</span> : s.value}
            </p>
            <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
            <p className="text-[10px] font-medium mt-0.5" style={{ color: s.color }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* ── Quick nav links ── */}
      <div className="grid grid-cols-2 gap-3">
        {QUICK_LINKS.map((q) => (
          <Link
            key={q.href}
            href={q.href}
            className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-gray-100 shadow-xs hover:border-gray-200 transition-colors group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: q.bg }}
            >
              <q.icon size={16} style={{ color: q.color }} />
            </div>
            <span className="text-gray-700 text-sm font-semibold flex-1 leading-tight">{q.label}</span>
            <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
          </Link>
        ))}
      </div>

      {/* ── Live feed + pipeline ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Live lead feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
          <div className="px-4 py-3.5 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-gray-800 font-semibold text-sm">Recent Leads</p>
            </div>
            <Link
              href="/admin/leads"
              className="flex items-center gap-1 text-xs font-medium hover:underline"
              style={{ color: BRAND }}
            >
              See all <ArrowRight size={11} />
            </Link>
          </div>

          <div className="divide-y divide-gray-50">
            {loading ? (
              <div className="px-4 py-10 text-center text-gray-400 text-sm">Loading...</div>
            ) : leads.length === 0 ? (
              <div className="px-4 py-10 text-center text-gray-400 text-sm">No leads yet</div>
            ) : leads.slice(0, 6).map((lead) => (
              <Link
                key={lead.lead_id}
                href="/admin/leads"
                className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: BRAND }}
                >
                  {lead.patient_name[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-gray-800 font-semibold text-sm truncate">{lead.patient_name}</p>
                    <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 border", STATUS_BADGE[lead.status])}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs truncate">{lead.condition} · {lead.patient_city}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <a
                    href={`tel:${lead.patient_phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-semibold mb-1 transition-colors"
                    style={{ background: BRAND_LIGHT, color: BRAND }}
                  >
                    <PhoneCall size={10} /> Call
                  </a>
                  <p className="text-gray-400 text-[10px]">
                    {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-4">
          <p className="text-gray-800 font-semibold text-sm mb-4">Lead Pipeline</p>
          {pipeline.length === 0 ? (
            <p className="text-gray-400 text-xs text-center py-4">No leads yet</p>
          ) : (
            <div className="space-y-3">
              {pipeline.map((p) => (
                <div key={p.status} className="flex items-center gap-3">
                  <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-semibold w-[76px] text-center flex-shrink-0 border", STATUS_BADGE[p.status])}>
                    {p.status}
                  </span>
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: leads.length ? `${(p.count / leads.length) * 100}%` : "0%",
                        background: BRAND,
                      }}
                    />
                  </div>
                  <span className="text-gray-700 font-bold text-xs w-5 text-right tabular-nums">{p.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
