"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
const supabase = createSupabaseBrowser();
import {
  Users, CalendarCheck, IndianRupee, TrendingUp,
  PhoneCall, ArrowRight, Activity, Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";
import { STATUS_BADGE } from "@/components/admin/admin-leads";

const SOURCE_DOT: Record<string, string> = {
  "Website Form":  "#3B82F6",
  Chatbot:         "#8B5CF6",
  WhatsApp:        "#25D366",
  "Google Ads":    "#F59E0B",
  Facebook:        "#1877F2",
  "Walk-in":       "#EC4899",
  Referral:        "#14B8A6",
};

export default function AdminDashboard() {
  const [leads, setLeads]     = useState<Lead[]>([]);
  const [revenue, setRevenue] = useState<{ consultation_fee: number; visit_date: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      supabase.from("gastro_leads").select("*").order("created_at", { ascending: false }),
      supabase.from("gastro_revenue").select("consultation_fee, visit_date").order("visit_date", { ascending: false }),
    ]).then(([leadsRes, revenueRes]) => {
      setLeads((leadsRes.data as Lead[]) ?? []);
      setRevenue(revenueRes.data ?? []);
      setLoading(false);
    });

    const ch = supabase
      .channel("admin-dashboard")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, () => {
        supabase.from("gastro_leads").select("*").order("created_at", { ascending: false })
          .then(({ data }) => setLeads((data as Lead[]) ?? []));
      })
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, []);

  const today      = new Date().toDateString();
  const thisMonth  = new Date().toISOString().slice(0, 7);
  const todayLeads = leads.filter((l) => new Date(l.created_at).toDateString() === today);
  const confirmed  = leads.filter((l) => l.status === "Confirmed");
  const visited    = leads.filter((l) => l.status === "Visited");
  const monthRevenue = revenue
    .filter((r) => r.visit_date.startsWith(thisMonth))
    .reduce((s, r) => s + Number(r.consultation_fee), 0);
  const conversion = leads.length
    ? Math.round(((visited.length + confirmed.length) / leads.length) * 100)
    : 0;

  const STATS = [
    {
      label: "Total Leads",
      value: leads.length,
      sub: `+${todayLeads.length} today`,
      icon: Users,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      valueBorder: "border-l-blue-400",
    },
    {
      label: "Confirmed",
      value: confirmed.length,
      sub: "Upcoming appts",
      icon: CalendarCheck,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
      valueBorder: "border-l-emerald-400",
    },
    {
      label: "Patients Visited",
      value: visited.length,
      sub: "Successfully treated",
      icon: Activity,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      valueBorder: "border-l-purple-400",
    },
    {
      label: `${new Date().toLocaleString("en-IN", { month: "long" })} Revenue`,
      value: `₹${monthRevenue.toLocaleString("en-IN")}`,
      sub: `${conversion}% conversion`,
      icon: IndianRupee,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      valueBorder: "border-l-amber-400",
    },
  ];

  const pipeline = [
    "New", "Called", "Confirmed", "Visited", "Follow-up", "No-answer", "Cancelled",
  ].map((s) => ({ status: s, count: leads.filter((l) => l.status === s).length }));

  const sourceCounts = leads.reduce((acc, l) => {
    acc[l.source] = (acc[l.source] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className={cn(
              "bg-white rounded-2xl p-4 border border-slate-100 shadow-xs border-l-4",
              s.valueBorder
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", s.iconBg)}>
                <s.icon size={16} className={s.iconColor} />
              </div>
              <span className="text-[10px] text-slate-400 font-medium">{s.sub}</span>
            </div>
            <p className="text-2xl font-bold text-slate-900 leading-none tabular-nums">
              {loading ? "—" : s.value}
            </p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Live lead feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <h2 className="text-slate-800 font-semibold text-sm">Live Lead Feed</h2>
            </div>
            <Link
              href="/admin/leads"
              className="flex items-center gap-1 text-blue-500 text-xs font-medium hover:text-blue-600"
            >
              All leads <ArrowRight size={11} />
            </Link>
          </div>

          <div className="divide-y divide-slate-50">
            {loading ? (
              <div className="px-5 py-10 text-center text-slate-400 text-sm">Loading leads...</div>
            ) : leads.slice(0, 8).map((lead) => (
              <div
                key={lead.lead_id}
                className="flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-600 font-bold text-xs">
                    {lead.patient_name[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-slate-800 font-semibold text-sm truncate">{lead.patient_name}</p>
                    <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0 border", STATUS_BADGE[lead.status])}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs truncate">{lead.condition} · {lead.patient_city}</p>
                </div>
                <div className="text-right flex-shrink-0 space-y-0.5">
                  <a
                    href={`tel:${lead.patient_phone}`}
                    className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <PhoneCall size={9} /> Call
                  </a>
                  <p className="text-slate-400 text-[10px]">
                    {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">

          {/* Pipeline */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-4">
            <h3 className="text-slate-800 font-semibold text-sm mb-4">Pipeline</h3>
            <div className="space-y-3">
              {pipeline.filter((p) => p.count > 0).map((p) => (
                <div key={p.status} className="flex items-center gap-3">
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-semibold w-20 text-center flex-shrink-0 border",
                    STATUS_BADGE[p.status]
                  )}>
                    {p.status}
                  </span>
                  <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                    <div
                      className="bg-blue-400 h-1.5 rounded-full transition-all"
                      style={{ width: leads.length ? `${(p.count / leads.length) * 100}%` : "0%" }}
                    />
                  </div>
                  <span className="text-slate-700 font-bold text-xs w-5 text-right tabular-nums">{p.count}</span>
                </div>
              ))}
              {pipeline.every((p) => p.count === 0) && (
                <p className="text-slate-400 text-xs text-center py-2">No leads yet</p>
              )}
            </div>
          </div>

          {/* Source breakdown */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-4">
            <h3 className="text-slate-800 font-semibold text-sm mb-4">Lead Sources</h3>
            <div className="space-y-2.5">
              {Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]).map(([source, count]) => (
                <div key={source} className="flex items-center gap-2.5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: SOURCE_DOT[source] ?? "#CBD5E1" }}
                  />
                  <p className="text-slate-500 text-xs flex-1 truncate">{source}</p>
                  <div className="w-16 bg-slate-100 rounded-full h-1.5 flex-shrink-0">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: leads.length ? `${(count / leads.length) * 100}%` : "0%",
                        background: SOURCE_DOT[source] ?? "#CBD5E1",
                      }}
                    />
                  </div>
                  <span className="text-slate-700 text-xs font-bold w-4 text-right tabular-nums">{count}</span>
                </div>
              ))}
              {Object.keys(sourceCounts).length === 0 && (
                <p className="text-slate-400 text-xs text-center py-2">No data yet</p>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/admin/revenue"
              className="bg-white border border-slate-100 shadow-xs rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-amber-200 hover:bg-amber-50 transition-colors group"
            >
              <div className="w-9 h-9 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center transition-colors">
                <IndianRupee size={16} className="text-amber-500" />
              </div>
              <p className="text-xs font-semibold text-slate-600 group-hover:text-amber-700">Revenue</p>
            </Link>
            <Link
              href="/admin/blog"
              className="bg-white border border-slate-100 shadow-xs rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-purple-200 hover:bg-purple-50 transition-colors group"
            >
              <div className="w-9 h-9 bg-purple-50 group-hover:bg-purple-100 rounded-xl flex items-center justify-center transition-colors">
                <TrendingUp size={16} className="text-purple-500" />
              </div>
              <p className="text-xs font-semibold text-slate-600 group-hover:text-purple-700">Blog CMS</p>
            </Link>
            <Link
              href="/admin/users"
              className="bg-white border border-slate-100 shadow-xs rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-blue-200 hover:bg-blue-50 transition-colors group col-span-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                  <Stethoscope size={13} className="text-blue-500" />
                </div>
                <p className="text-xs font-semibold text-slate-600 group-hover:text-blue-700">Manage Staff & Users</p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
