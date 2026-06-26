"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowser } from "@/lib/supabase-browser";

const supabase = createSupabaseBrowser();
import { Users, PhoneCall, CalendarCheck, AlertCircle, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";



const STATUS_COLORS: Record<string, string> = {
  New: "bg-teal-light text-teal",
  Called: "bg-blue-100 text-blue-700",
  Confirmed: "bg-green-100 text-green-700",
  Visited: "bg-purple-100 text-purple-700",
  "No-answer": "bg-gold-light text-amber-700",
  Cancelled: "bg-red-100 text-red-700",
  "Follow-up": "bg-orange-100 text-orange-700",
};

export default function CrmDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();

    // Realtime subscription
    const channel = supabase
      .channel("crm-leads")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, () => {
        fetchLeads();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  async function fetchLeads() {
    const { data } = await supabase
      .from("gastro_leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) ?? []);
    setLoading(false);
  }

  const today = new Date().toDateString();
  const todayLeads = leads.filter((l) => new Date(l.created_at).toDateString() === today);
  const newLeads = leads.filter((l) => l.status === "New");
  const confirmed = leads.filter((l) => l.status === "Confirmed");
  const overdue = leads.filter((l) => {
    if (!l.follow_up_date) return false;
    return new Date(l.follow_up_date) < new Date() && l.status === "Follow-up";
  });

  const STATS = [
    { label: "Total Leads", value: leads.length, icon: Users, color: "bg-navy text-white", sub: "All time" },
    { label: "New Today", value: todayLeads.length, icon: TrendingUp, color: "bg-teal-light text-teal", sub: "Requires call" },
    { label: "New (Unactioned)", value: newLeads.length, icon: PhoneCall, color: "bg-gold-light text-amber-700", sub: "Call immediately" },
    { label: "Confirmed Appts", value: confirmed.length, icon: CalendarCheck, color: "bg-green-100 text-green-700", sub: "Upcoming" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <div key={s.label} className={`rounded-2xl p-4 ${s.color}`}>
            <div className="flex items-start justify-between mb-3">
              <s.icon size={20} className="opacity-80" />
            </div>
            <p className="text-3xl font-bold leading-none">{loading ? "â€”" : s.value}</p>
            <p className="text-sm font-semibold mt-1 opacity-90">{s.label}</p>
            <p className="text-xs opacity-70 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Leads */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-light">
          <div className="px-5 py-4 border-b border-gray-light flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <h2 className="text-navy font-bold text-sm">New Leads â€” Call Now</h2>
            </div>
            <Link href="/crm/leads" className="text-teal text-xs font-semibold hover:underline flex items-center gap-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-muted text-sm">Loading leads...</div>
          ) : newLeads.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate text-sm">No new leads right now.</p>
              <p className="text-gray-muted text-xs mt-1">New leads appear here in real-time.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-light">
              {newLeads.slice(0, 8).map((lead) => (
                <Link
                  key={lead.lead_id}
                  href={`/crm/leads?id=${lead.lead_id}`}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-offwhite transition-colors"
                >
                  <div className="w-9 h-9 bg-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-teal font-bold text-sm">{lead.patient_name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-navy font-semibold text-sm truncate">{lead.patient_name}</p>
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0", STATUS_COLORS[lead.status])}>
                        {lead.status}
                      </span>
                    </div>
                    <p className="text-gray-muted text-xs mt-0.5 truncate">{lead.condition} Â· {lead.patient_city}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <a
                      href={`tel:${lead.patient_phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-teal text-white text-xs font-semibold rounded-lg"
                    >
                      <PhoneCall size={11} /> Call
                    </a>
                    <p className="text-gray-muted text-[10px] mt-1">
                      {new Date(lead.created_at).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right panel */}
        <div className="space-y-4">
          {/* Overdue follow-ups */}
          <div className="bg-white rounded-2xl border border-gray-light">
            <div className="px-4 py-3.5 border-b border-gray-light flex items-center gap-2">
              <AlertCircle size={15} className="text-red-500" />
              <h3 className="text-navy font-bold text-sm">Overdue Follow-ups</h3>
              {overdue.length > 0 && (
                <span className="ml-auto text-xs bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">{overdue.length}</span>
              )}
            </div>
            {overdue.length === 0 ? (
              <p className="px-4 py-4 text-gray-muted text-xs text-center">No overdue follow-ups âœ“</p>
            ) : (
              <div className="divide-y divide-gray-light">
                {overdue.slice(0, 5).map((lead) => (
                  <div key={lead.lead_id} className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-navy font-semibold text-xs">{lead.patient_name}</p>
                      <p className="text-red-500 text-[10px] flex items-center gap-1 mt-0.5">
                        <Clock size={9} />
                        {lead.follow_up_date ? new Date(lead.follow_up_date).toLocaleDateString("en-IN") : "â€”"}
                      </p>
                    </div>
                    <a href={`tel:${lead.patient_phone}`}
                      className="px-2.5 py-1.5 bg-red-50 text-red-600 border border-red-200 text-xs font-semibold rounded-lg">
                      Call Now
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Today's stats */}
          <div className="bg-navy text-white rounded-2xl p-4">
            <h3 className="font-bold text-sm mb-4 text-teal">Today&apos;s Summary</h3>
            <div className="space-y-3">
              {[
                { label: "Leads received", value: todayLeads.length },
                { label: "New (uncalled)", value: newLeads.length },
                { label: "Confirmed today", value: confirmed.filter(l => new Date(l.created_at).toDateString() === today).length },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <p className="text-gray-muted text-xs">{s.label}</p>
                  <p className="text-white font-bold text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


