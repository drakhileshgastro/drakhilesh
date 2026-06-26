"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Users, CalendarCheck, IndianRupee, TrendingUp, PhoneCall, ArrowRight, Activity } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const STATUS_COLORS: Record<string, string> = {
  New: "bg-teal-light text-teal",
  Called: "bg-blue-100 text-blue-700",
  Confirmed: "bg-green-100 text-green-700",
  Visited: "bg-purple-100 text-purple-700",
  "No-answer": "bg-amber-100 text-amber-700",
  Cancelled: "bg-red-100 text-red-700",
  "Follow-up": "bg-orange-100 text-orange-700",
};

const SOURCE_COLORS: Record<string, string> = {
  "Website Form": "#14B8A6",
  Chatbot: "#0D9488",
  WhatsApp: "#25D366",
  "Google Ads": "#4285F4",
  Facebook: "#1877F2",
  "Walk-in": "#8B5CF6",
  Referral: "#F59E0B",
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
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

    const channel = supabase.channel("admin-dashboard")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, () => {
        supabase.from("gastro_leads").select("*").order("created_at", { ascending: false })
          .then(({ data }) => setLeads((data as Lead[]) ?? []));
      }).subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const today = new Date().toDateString();
  const thisMonth = new Date().toISOString().slice(0, 7);

  const todayLeads = leads.filter((l) => new Date(l.created_at).toDateString() === today);
  const confirmed = leads.filter((l) => l.status === "Confirmed");
  const visited = leads.filter((l) => l.status === "Visited");
  const thisMonthRevenue = revenue
    .filter((r) => r.visit_date.startsWith(thisMonth))
    .reduce((sum, r) => sum + Number(r.consultation_fee), 0);
  const conversionRate = leads.length ? Math.round(((visited.length + confirmed.length) / leads.length) * 100) : 0;

  // Source breakdown
  const sourceCounts = leads.reduce((acc, l) => {
    acc[l.source] = (acc[l.source] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Pipeline counts
  const pipeline = ["New", "Called", "Confirmed", "Visited", "Follow-up", "No-answer", "Cancelled"].map((s) => ({
    status: s,
    count: leads.filter((l) => l.status === s).length,
  }));

  const STATS = [
    { label: "Total Leads", value: leads.length, icon: Users, color: "bg-teal/10 text-teal border-teal/20", trend: `+${todayLeads.length} today` },
    { label: "Confirmed", value: confirmed.length, icon: CalendarCheck, color: "bg-green-500/10 text-green-400 border-green-500/20", trend: "Upcoming appointments" },
    { label: "Patients Visited", value: visited.length, icon: Activity, color: "bg-purple-500/10 text-purple-400 border-purple-500/20", trend: "Successfully treated" },
    { label: `Revenue (${new Date().toLocaleString("en-IN", { month: "short" })})`, value: `₹${thisMonthRevenue.toLocaleString("en-IN")}`, icon: IndianRupee, color: "bg-amber-500/10 text-amber-400 border-amber-500/20", trend: `${conversionRate}% conversion` },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className={`rounded-2xl p-4 border bg-white/5 ${s.color}`}>
            <div className="flex items-center justify-between mb-3">
              <s.icon size={18} className="opacity-80" />
              <span className="text-[10px] opacity-60">{s.trend}</span>
            </div>
            <p className="text-2xl font-bold text-white leading-none">{loading ? "—" : s.value}</p>
            <p className="text-xs mt-1 opacity-70">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest leads */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <h2 className="text-white font-bold text-sm">Live Lead Feed</h2>
            </div>
            <Link href="/admin/leads" className="text-teal text-xs font-semibold flex items-center gap-1 hover:underline">
              All leads <ArrowRight size={11} />
            </Link>
          </div>
          <div className="divide-y divide-white/5">
            {loading ? (
              <p className="px-5 py-8 text-gray-muted text-sm text-center">Loading...</p>
            ) : leads.slice(0, 8).map((lead) => (
              <div key={lead.lead_id} className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-teal font-bold text-xs">{lead.patient_name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-medium text-sm truncate">{lead.patient_name}</p>
                    <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-semibold flex-shrink-0", STATUS_COLORS[lead.status])}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-gray-muted text-xs truncate">{lead.condition} · {lead.patient_city}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <a href={`tel:${lead.patient_phone}`}
                    className="flex items-center gap-1 px-2 py-1 bg-teal/10 text-teal text-[10px] font-semibold rounded">
                    <PhoneCall size={9} /> Call
                  </a>
                  <p className="text-gray-muted text-[10px] mt-0.5">
                    {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panels */}
        <div className="space-y-4">
          {/* Pipeline */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h3 className="text-white font-bold text-sm mb-4">Lead Pipeline</h3>
            <div className="space-y-2.5">
              {pipeline.filter((p) => p.count > 0).map((p) => (
                <div key={p.status} className="flex items-center gap-3">
                  <span className={cn("text-[10px] px-2 py-0.5 rounded font-semibold w-20 text-center flex-shrink-0", STATUS_COLORS[p.status])}>
                    {p.status}
                  </span>
                  <div className="flex-1 bg-white/5 rounded-full h-1.5">
                    <div
                      className="bg-teal h-1.5 rounded-full transition-all"
                      style={{ width: leads.length ? `${(p.count / leads.length) * 100}%` : "0%" }}
                    />
                  </div>
                  <span className="text-white font-bold text-xs w-6 text-right">{p.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Source breakdown */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h3 className="text-white font-bold text-sm mb-4">Lead Sources</h3>
            <div className="space-y-2">
              {Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]).map(([source, count]) => (
                <div key={source} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: SOURCE_COLORS[source] ?? "#94A3B8" }} />
                    <p className="text-gray-muted text-xs">{source}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-white/5 rounded-full h-1">
                      <div className="h-1 rounded-full" style={{
                        width: leads.length ? `${(count / leads.length) * 100}%` : "0%",
                        background: SOURCE_COLORS[source] ?? "#94A3B8"
                      }} />
                    </div>
                    <span className="text-white text-xs font-bold w-5 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-2">
            <Link href="/admin/revenue" className="bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl p-3 text-center hover:bg-amber-500/20 transition-colors">
              <IndianRupee size={18} className="mx-auto mb-1" />
              <p className="text-xs font-semibold">Revenue</p>
            </Link>
            <Link href="/admin/blog" className="bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl p-3 text-center hover:bg-purple-500/20 transition-colors">
              <TrendingUp size={18} className="mx-auto mb-1" />
              <p className="text-xs font-semibold">Blog CMS</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
