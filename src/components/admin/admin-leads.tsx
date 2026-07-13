"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";

const supabase = createSupabaseBrowser();
import { Search, Download, Phone, MessageCircle, CheckCircle, X, Calendar, Send, ArrowLeft, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead, LeadStatus } from "@/lib/supabase";
import { calculateLeadScore, getScoreLabel } from "@/lib/lead-score";
import { toast } from "sonner";

// These colors work on the white-surface detail panel and table rows
const STATUS_COLORS: Record<string, string> = {
  New: "bg-teal-50 text-teal-700 border-teal-200",
  Called: "bg-blue-50 text-blue-700 border-blue-200",
  Confirmed: "bg-green-50 text-green-700 border-green-200",
  Visited: "bg-purple-50 text-purple-700 border-purple-200",
  "No-answer": "bg-amber-50 text-amber-700 border-amber-200",
  Cancelled: "bg-red-50 text-red-700 border-red-200",
  "Follow-up": "bg-orange-50 text-orange-700 border-orange-200",
};

// Opacity-based variants for dark admin dashboard backgrounds
export const STATUS_COLORS_DARK: Record<string, string> = {
  New: "bg-teal/15 text-teal",
  Called: "bg-blue-400/15 text-blue-300",
  Confirmed: "bg-green-400/15 text-green-300",
  Visited: "bg-purple-400/15 text-purple-300",
  "No-answer": "bg-amber-400/15 text-amber-300",
  Cancelled: "bg-red-400/15 text-red-300",
  "Follow-up": "bg-orange-400/15 text-orange-300",
};

const STATUS_OPTIONS: LeadStatus[] = ["New", "Called", "Confirmed", "Visited", "No-answer", "Cancelled", "Follow-up"];

const TIME_SLOT_OPTIONS = [
  { value: "Morning (10am–2pm)", label: "Morning OPD (10am – 2pm)" },
  { value: "Evening (5pm–8pm)", label: "Evening OPD (5pm – 8pm)" },
];

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [note, setNote] = useState("");
  const [confirmDate, setConfirmDate] = useState("");
  const [confirmTime, setConfirmTime] = useState("");
  const [confirming, setConfirming] = useState(false);

  const fetchLeads = useCallback(async () => {
    const { data } = await supabase.from("gastro_leads").select("*").order("created_at", { ascending: false });
    setLeads((data as Lead[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    const initialFetch = window.setTimeout(() => {
      fetchLeads();
    }, 0);
    const ch = supabase.channel("admin-leads")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, fetchLeads)
      .subscribe();
    return () => {
      window.clearTimeout(initialFetch);
      supabase.removeChannel(ch);
    };
  }, [fetchLeads]);

  const filtered = leads.filter((l) => {
    const s = search.toLowerCase();
    const matchSearch = !search || l.patient_name.toLowerCase().includes(s) || l.patient_phone.includes(s) || l.patient_city.toLowerCase().includes(s) || l.condition.toLowerCase().includes(s);
    const matchStatus = statusFilter === "All" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  async function updateStatus(id: string, status: LeadStatus) {
    await supabase.from("gastro_leads").update({ status }).eq("lead_id", id);
    setLeads((p) => p.map((l) => l.lead_id === id ? { ...l, status } : l));
    if (selectedLead?.lead_id === id) setSelectedLead((p) => p ? { ...p, status } : null);
  }

  async function addNote() {
    if (!note.trim() || !selectedLead) return;
    const ts = new Date().toLocaleString("en-IN");
    const updated = selectedLead.notes ? `${selectedLead.notes}\n[${ts}] ${note}` : `[${ts}] ${note}`;
    await supabase.from("gastro_leads").update({ notes: updated }).eq("lead_id", selectedLead.lead_id);
    setLeads((p) => p.map((l) => l.lead_id === selectedLead.lead_id ? { ...l, notes: updated } : l));
    setSelectedLead((p) => p ? { ...p, notes: updated } : null);
    setNote("");
  }

  async function confirmAppointment() {
    if (!confirmDate || !confirmTime || !selectedLead) return;
    setConfirming(true);
    try {
      const res = await fetch("/api/appointments/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_id: selectedLead.lead_id,
          confirmed_date: confirmDate,
          confirmed_time: confirmTime,
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success(`Appointment confirmed — WhatsApp sent to ${result.patient_name}.`);
        const updated: Partial<Lead> = { status: "Confirmed", confirmed_datetime: result.confirmed_datetime };
        setLeads((p) => p.map((l) => l.lead_id === selectedLead.lead_id ? { ...l, ...updated } : l));
        setSelectedLead((p) => p ? { ...p, ...updated } : null);
        setConfirmDate("");
        setConfirmTime("");
      } else {
        toast.error(result.error || "Failed to confirm. Try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
    setConfirming(false);
  }

  function exportCSV() {
    const headers = ["Name", "Phone", "City", "Condition", "Source", "Status", "Created"];
    const rows = filtered.map((l) => [
      l.patient_name, l.patient_phone, l.patient_city, l.condition,
      l.source, l.status, new Date(l.created_at).toLocaleDateString("en-IN")
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "gastro-leads.csv"; a.click();
  }

  function selectLead(lead: Lead) {
    setSelectedLead(lead);
    setNote("");
    setConfirmDate("");
    setConfirmTime("");
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-light overflow-hidden flex flex-col" style={{ height: "calc(100vh - 120px)" }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-light space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-navy font-bold text-sm">All Leads <span className="text-gray-muted font-normal">({filtered.length})</span></h2>
          <button onClick={exportCSV} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-light text-slate text-xs rounded-lg hover:border-navy transition-colors">
            <Download size={12} /> Export CSV
          </button>
        </div>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-muted" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, city, condition..."
              className="w-full pl-8 pr-4 py-2 text-xs border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs border border-gray-light bg-offwhite rounded-xl text-navy focus:outline-none focus:border-teal">
            <option value="All">All Status</option>
            {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Table — hidden on mobile when detail is open */}
        <div className={cn("flex-1 overflow-auto", selectedLead && "hidden lg:block lg:w-1/2")}>
          <table className="w-full text-xs">
            <thead className="bg-offwhite border-b border-gray-light sticky top-0">
              <tr>
                {["Patient", "Phone", "Condition", "City", "Source", "Status", "Score", "Date"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-gray-muted font-semibold uppercase tracking-wider text-[10px]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light">
              {loading ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-muted">Loading...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-muted">No leads found.</td></tr>
              ) : filtered.map((lead) => (
                <tr key={lead.lead_id} onClick={() => selectLead(lead)}
                  className={cn("hover:bg-offwhite cursor-pointer transition-colors", selectedLead?.lead_id === lead.lead_id && "bg-teal-50 border-l-2 border-teal")}>
                  <td className="px-4 py-3 font-semibold text-navy">{lead.patient_name}</td>
                  <td className="px-4 py-3">
                    <a href={`tel:${lead.patient_phone}`} onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-teal hover:underline">
                      <Phone size={10} /> {lead.patient_phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate max-w-[140px] truncate">{lead.condition}</td>
                  <td className="px-4 py-3 text-slate">{lead.patient_city}</td>
                  <td className="px-4 py-3"><span className="bg-offwhite text-slate px-2 py-0.5 rounded text-[10px]">{lead.source}</span></td>
                  <td className="px-4 py-3">
                    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold border", STATUS_COLORS[lead.status])}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {(() => { const s = getScoreLabel(calculateLeadScore(lead)); return (
                      <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded border", s.color, s.bg, s.border)}>{s.label}</span>
                    ); })()}
                  </td>
                  <td className="px-4 py-3 text-gray-muted">{new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail panel */}
        {selectedLead && (
          <div className="w-full lg:w-80 xl:w-96 border-l border-gray-light overflow-y-auto flex-shrink-0">
            {/* Panel header */}
            <div className="px-4 py-3.5 border-b border-gray-light flex items-start justify-between sticky top-0 bg-white z-10">
              <div>
                {/* Mobile back */}
                <button
                  onClick={() => setSelectedLead(null)}
                  className="lg:hidden flex items-center gap-1 text-teal text-xs font-semibold mb-1.5"
                >
                  <ArrowLeft size={13} /> Back to Leads
                </button>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-navy font-bold text-sm">{selectedLead.patient_name}</h3>
                  <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", STATUS_COLORS[selectedLead.status])}>
                    {selectedLead.status}
                  </span>
                </div>
                <p className="text-gray-muted text-xs">{selectedLead.patient_city} &middot; {selectedLead.source}</p>
              </div>
              <button onClick={() => setSelectedLead(null)} className="hidden lg:flex text-gray-muted hover:text-navy p-1 rounded-lg hover:bg-offwhite transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Quick actions */}
              <div className="flex gap-2">
                <a href={`tel:${selectedLead.patient_phone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-navy text-white text-xs font-bold rounded-xl min-h-[40px]">
                  <Phone size={13} /> Call
                </a>
                <a href={`https://wa.me/91${selectedLead.patient_phone}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-500 text-white text-xs font-bold rounded-xl min-h-[40px]">
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>

              {/* Patient details */}
              <div className="bg-offwhite rounded-xl p-3 space-y-2 text-xs">
                {[
                  ["Condition", selectedLead.condition],
                  ["Phone", selectedLead.patient_phone],
                  ["City", selectedLead.patient_city],
                  ["Preferred Date", selectedLead.preferred_date ?? "—"],
                  ["Preferred Time", selectedLead.preferred_time ?? "—"],
                  ["Created", new Date(selectedLead.created_at).toLocaleString("en-IN")],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <span className="text-gray-muted flex-shrink-0">{k}</span>
                    <span className="text-navy font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>

              {/* ── CONFIRM APPOINTMENT ── */}
              <div className="rounded-xl border border-green-200 overflow-hidden">
                <div className="bg-green-50 px-3 py-2.5 flex items-center gap-2">
                  <Calendar size={13} className="text-green-700" />
                  <h4 className="text-green-800 font-bold text-xs uppercase tracking-wider">Confirm Appointment</h4>
                </div>
                <div className="p-3">
                  {selectedLead.status === "Confirmed" && selectedLead.confirmed_datetime ? (
                    <div className="text-center py-1">
                      <CheckCircle size={18} className="text-green-600 mx-auto mb-1.5" />
                      <p className="text-green-700 text-xs font-bold">Appointment Confirmed</p>
                      <p className="text-gray-500 text-[11px] mt-1">
                        {new Date(selectedLead.confirmed_datetime).toLocaleString("en-IN", {
                          weekday: "short", day: "numeric", month: "short",
                          year: "numeric", hour: "2-digit", minute: "2-digit",
                        })}
                      </p>
                      <p className="text-gray-400 text-[11px] mt-1.5">WhatsApp sent to patient ✓</p>
                      <button
                        onClick={() => setSelectedLead((p) => p ? { ...p, confirmed_datetime: undefined, status: "Called" } : null)}
                        className="mt-2 text-[11px] text-gray-400 hover:text-navy underline"
                      >
                        Reschedule
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {selectedLead.preferred_time && (
                        <p className="text-[11px] text-teal-700 flex items-center gap-1 bg-teal-50 rounded-lg px-2 py-1.5">
                          <AlertCircle size={11} />
                          Patient prefers: {selectedLead.preferred_time}
                        </p>
                      )}
                      <div>
                        <label className="text-[11px] text-gray-500 font-semibold block mb-1">Confirmed Date</label>
                        <input
                          type="date"
                          value={confirmDate}
                          onChange={(e) => setConfirmDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-3 py-2 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal transition-colors text-navy"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-500 font-semibold block mb-1">OPD Time Slot</label>
                        <select
                          value={confirmTime}
                          onChange={(e) => setConfirmTime(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal transition-colors text-navy"
                        >
                          <option value="">Select time slot...</option>
                          {TIME_SLOT_OPTIONS.map((t) => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={confirmAppointment}
                        disabled={confirming || !confirmDate || !confirmTime}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl disabled:opacity-40 transition-colors min-h-[40px]"
                      >
                        <Send size={12} />
                        {confirming ? "Confirming..." : "Confirm & Send WhatsApp"}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Update Status */}
              <div>
                <p className="text-navy font-bold text-xs mb-2 uppercase tracking-wider">Update Status</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {STATUS_OPTIONS.map((s) => (
                    <button key={s} onClick={() => updateStatus(selectedLead.lead_id, s)}
                      className={cn("py-2 text-xs font-semibold rounded-xl border transition-colors",
                        selectedLead.status === s
                          ? cn(STATUS_COLORS[s])
                          : "border-gray-light text-slate hover:border-navy bg-white")}>
                      {selectedLead.status === s && <CheckCircle size={10} className="inline mr-1" />}{s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedLead.notes && (
                <div className="bg-offwhite rounded-xl p-3 max-h-28 overflow-y-auto">
                  {selectedLead.notes.split("\n").map((l, i) => <p key={i} className="text-slate text-xs leading-relaxed">{l}</p>)}
                </div>
              )}

              <div className="flex gap-2">
                <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add note..." rows={2}
                  className="flex-1 px-3 py-2 text-xs border border-gray-light rounded-xl focus:outline-none focus:border-teal text-navy resize-none bg-offwhite" />
                <button onClick={addNote} disabled={!note.trim()}
                  className="px-3 py-2 bg-navy text-white text-xs font-semibold rounded-xl disabled:opacity-40 self-end">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
