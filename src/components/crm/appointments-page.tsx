"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Phone, MessageCircle, CheckCircle, Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead } from "@/lib/supabase";
import { toast } from "sonner";

const supabase = createSupabaseBrowser();

type AppointmentView = "upcoming" | "today" | "all" | "past";

function getIST() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

function isToday(dateStr: string) {
  const today = getIST();
  const d = new Date(dateStr);
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  );
}

function isTomorrow(dateStr: string) {
  const tomorrow = getIST();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const d = new Date(dateStr);
  return (
    d.getFullYear() === tomorrow.getFullYear() &&
    d.getMonth() === tomorrow.getMonth() &&
    d.getDate() === tomorrow.getDate()
  );
}

function isPast(dateStr: string) {
  return new Date(dateStr) < getIST();
}

function groupAppointments(leads: Lead[]) {
  const today: Lead[] = [];
  const tomorrow: Lead[] = [];
  const upcoming: Lead[] = [];
  const past: Lead[] = [];

  leads.forEach((l) => {
    if (!l.confirmed_datetime) return;
    if (isPast(l.confirmed_datetime)) {
      past.push(l);
    } else if (isToday(l.confirmed_datetime)) {
      today.push(l);
    } else if (isTomorrow(l.confirmed_datetime)) {
      tomorrow.push(l);
    } else {
      upcoming.push(l);
    }
  });

  return { today, tomorrow, upcoming, past };
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<AppointmentView>("upcoming");
  const [markingVisited, setMarkingVisited] = useState<string | null>(null);

  const fetchAppointments = useCallback(async () => {
    const { data } = await supabase
      .from("gastro_leads")
      .select("*")
      .in("status", ["Confirmed", "Visited"])
      .order("confirmed_datetime", { ascending: true });
    setAppointments((data as Lead[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAppointments();
    const channel = supabase
      .channel("appointments-page")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, fetchAppointments)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [fetchAppointments]);

  async function markVisited(leadId: string) {
    setMarkingVisited(leadId);
    await supabase.from("gastro_leads").update({ status: "Visited", visit_count: 1 }).eq("lead_id", leadId);
    setAppointments((prev) => prev.map((a) => a.lead_id === leadId ? { ...a, status: "Visited" } : a));
    toast.success("Marked as visited.");
    setMarkingVisited(null);
  }

  const grouped = groupAppointments(appointments);

  // Stats
  const todayCount = grouped.today.length;
  const upcomingCount = grouped.upcoming.length + grouped.tomorrow.length;
  const totalConfirmed = appointments.filter((a) => a.status === "Confirmed").length;
  const totalVisited = appointments.filter((a) => a.status === "Visited").length;

  // Filter view
  let visibleGroups: { label: string; labelClass: string; items: Lead[] }[] = [];
  if (view === "today") {
    visibleGroups = [{ label: "Today", labelClass: "text-green-700 bg-green-50 border-green-200", items: grouped.today }];
  } else if (view === "upcoming") {
    visibleGroups = [
      { label: "Today", labelClass: "text-green-700 bg-green-50 border-green-200", items: grouped.today },
      { label: "Tomorrow", labelClass: "text-blue-700 bg-blue-50 border-blue-200", items: grouped.tomorrow },
      { label: "Upcoming", labelClass: "text-purple-700 bg-purple-50 border-purple-200", items: grouped.upcoming },
    ].filter((g) => g.items.length > 0);
  } else if (view === "past") {
    visibleGroups = [{ label: "Past Appointments", labelClass: "text-gray-600 bg-gray-100 border-gray-200", items: [...grouped.past].reverse() }];
  } else {
    visibleGroups = [
      { label: "Today", labelClass: "text-green-700 bg-green-50 border-green-200", items: grouped.today },
      { label: "Tomorrow", labelClass: "text-blue-700 bg-blue-50 border-blue-200", items: grouped.tomorrow },
      { label: "Upcoming", labelClass: "text-purple-700 bg-purple-50 border-purple-200", items: grouped.upcoming },
      { label: "Past", labelClass: "text-gray-600 bg-gray-100 border-gray-200", items: [...grouped.past].reverse() },
    ].filter((g) => g.items.length > 0);
  }

  return (
    <div className="space-y-5">

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Today", value: todayCount, color: "text-green-700", bg: "bg-green-50" },
          { label: "Upcoming", value: upcomingCount, color: "text-blue-700", bg: "bg-blue-50" },
          { label: "Confirmed", value: totalConfirmed, color: "text-teal-700", bg: "bg-teal-50" },
          { label: "Visited", value: totalVisited, color: "text-purple-700", bg: "bg-purple-50" },
        ].map((stat) => (
          <div key={stat.label} className={cn("rounded-2xl p-4 border border-gray-200", stat.bg)}>
            <p className={cn("text-2xl font-bold font-display", stat.color)}>{stat.value}</p>
            <p className="text-xs text-gray-500 font-sans mt-0.5 uppercase tracking-wider font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* View filter */}
      <div className="flex gap-2 flex-wrap">
        {(["upcoming", "today", "all", "past"] as AppointmentView[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-semibold capitalize border transition-colors",
              view === v
                ? "bg-navy text-white border-navy"
                : "bg-white text-gray-600 border-gray-200 hover:border-navy"
            )}
          >
            {v === "upcoming" ? "Upcoming" : v === "today" ? "Today" : v === "past" ? "Past" : "All"}
          </button>
        ))}
      </div>

      {/* Appointment groups */}
      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-400 text-sm">
          Loading appointments...
        </div>
      ) : visibleGroups.every((g) => g.items.length === 0) ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <Calendar size={32} className="text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm font-medium">No appointments in this view</p>
          <p className="text-gray-400 text-xs mt-1">Confirm leads from the Leads page to see them here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {visibleGroups.map((group) => (
            <div key={group.label}>
              <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold uppercase tracking-wider mb-3", group.labelClass)}>
                <Calendar size={12} />
                {group.label} — {group.items.length} appointment{group.items.length !== 1 ? "s" : ""}
              </div>

              <div className="space-y-3">
                {group.items.map((appt) => (
                  <div
                    key={appt.lead_id}
                    className={cn(
                      "bg-white rounded-2xl border p-4 sm:p-5",
                      appt.status === "Visited" ? "border-purple-200 opacity-75" : "border-gray-200"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Patient info */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-teal-700" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-navy font-bold text-sm">{appt.patient_name}</p>
                            {appt.status === "Visited" && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                                Visited ✓
                              </span>
                            )}
                          </div>
                          <p className="text-gray-500 text-xs mt-0.5">{appt.condition}</p>
                          <p className="text-gray-400 text-xs">{appt.patient_city}</p>
                        </div>
                      </div>

                      {/* Appointment time */}
                      {appt.confirmed_datetime && (
                        <div className="flex items-center gap-2 text-xs text-navy bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200">
                          <Clock size={13} className="text-teal-600 flex-shrink-0" />
                          <div>
                            <p className="font-bold">
                              {new Date(appt.confirmed_datetime).toLocaleDateString("en-IN", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })}
                            </p>
                            <p className="text-gray-500 text-[11px]">
                              {new Date(appt.confirmed_datetime).getHours() < 14
                                ? "Morning OPD (10am–2pm)"
                                : "Evening OPD (5pm–8pm)"}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2 flex-wrap">
                        <a
                          href={`tel:${appt.patient_phone}`}
                          className="flex items-center gap-1.5 px-3 py-2.5 bg-navy text-white text-xs font-semibold rounded-xl min-h-[40px]"
                        >
                          <Phone size={13} /> Call
                        </a>
                        <a
                          href={`https://wa.me/91${appt.patient_phone}?text=${encodeURIComponent(`Namaskar ${appt.patient_name} ji, kal aapka appointment hai Dr. Akhilesh Yadav ke saath. Koi sawaal ho toh batayein.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2.5 bg-green-500 text-white text-xs font-semibold rounded-xl min-h-[40px]"
                        >
                          <MessageCircle size={13} /> WA
                        </a>
                        {appt.status !== "Visited" && (
                          <button
                            onClick={() => markVisited(appt.lead_id)}
                            disabled={markingVisited === appt.lead_id}
                            className="flex items-center gap-1.5 px-3 py-2.5 bg-purple-600 text-white text-xs font-semibold rounded-xl min-h-[40px] disabled:opacity-50"
                          >
                            <CheckCircle size={13} />
                            {markingVisited === appt.lead_id ? "..." : "Visited"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
