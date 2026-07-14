"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";

const supabase = createSupabaseBrowser();
import { Search, Download, Phone, MessageCircle, CheckCircle, X, Calendar, Send, ArrowLeft, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead, LeadStatus } from "@/lib/supabase";
import { calculateLeadScore, getScoreLabel } from "@/lib/lead-score";
import { toast } from "sonner";

// Unified status badge — works on both white and light-gray backgrounds
export const STATUS_BADGE: Record<string, string> = {
  New:          "bg-blue-50   text-blue-700   border-blue-200",
  Called:       "bg-sky-50    text-sky-700    border-sky-200",
  Confirmed:    "bg-emerald-50 text-emerald-700 border-emerald-200",
  Visited:      "bg-purple-50 text-purple-700 border-purple-200",
  "No-answer":  "bg-amber-50  text-amber-700  border-amber-200",
  Cancelled:    "bg-red-50    text-red-700    border-red-200",
  "Follow-up":  "bg-orange-50 text-orange-700 border-orange-200",
};

// Keep old name exported for any remaining references
export const STATUS_COLORS_DARK = STATUS_BADGE;

const STATUS_COLORS = STATUS_BADGE;

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
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col" style={{ height: "calc(100vh - 120px)" }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-800 font-semibold text-sm">
            All Leads <span className="text-slate-400 font-normal">({filtered.length})</span>
          </h2>
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Download size={12} /> Export CSV
          </button>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, city, condition..."
              className="w-full pl-8 pr-4 py-2 text-xs border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 text-slate-800 placeholder-slate-400 transition-all"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs border border-slate-200 bg-slate-50 rounded-xl text-slate-700 focus:outline-none focus:border-blue-400 transition-colors"
          >
            <option value="All">All Status</option>
            {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Table — hidden on mobile when detail is open */}
        <div className={cn("flex-1 overflow-auto", selectedLead && "hidden lg:block lg:w-1/2")}>
          <table className="w-full text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 sticky top-0">
              <tr>
                {["Patient", "Phone", "Condition", "City", "Source", "Status", "Score", "Date"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-slate-400 font-semibold uppercase tracking-wider text-[10px]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr><td colSpan={8} className="px-4 py-10 text-center text-slate-400">Loading leads...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={8} className="px-4 py-10 text-center text-slate-400">No leads found.</td></tr>
              ) : filtered.map((lead) => (
                <tr
                  key={lead.lead_id}
                  onClick={() => selectLead(lead)}
                  className={cn(
                    "hover:bg-slate-50 cursor-pointer transition-colors",
                    selectedLead?.lead_id === lead.lead_id && "bg-blue-50 border-l-2 border-l-blue-400"
                  )}
                >
                  <td className="px-4 py-3 font-semibold text-slate-800">{lead.patient_name}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`tel:${lead.patient_phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-blue-500 hover:text-blue-700 font-medium"
                    >
                      <Phone size={10} /> {lead.patient_phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-slate-500 max-w-[140px] truncate">{lead.condition}</td>
                  <td className="px-4 py-3 text-slate-500">{lead.patient_city}</td>
                  <td className="px-4 py-3">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-medium">{lead.source}</span>
                  </td>
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
                  <td className="px-4 py-3 text-slate-400">{new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail panel */}
        {selectedLead && (
          <div className="w-full lg:w-80 xl:w-96 border-l border-slate-100 bg-slate-50 overflow-y-auto flex-shrink-0">
            {/* Panel header */}
            <div className="px-4 py-3.5 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10">
              <div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="lg:hidden flex items-center gap-1 text-blue-500 text-xs font-medium mb-1.5"
                >
                  <ArrowLeft size={13} /> Back to Leads
                </button>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-slate-800 font-semibold text-sm">{selectedLead.patient_name}</h3>
                  <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", STATUS_COLORS[selectedLead.status])}>
                    {selectedLead.status}
                  </span>
                </div>
                <p className="text-slate-400 text-xs">{selectedLead.patient_city} · {selectedLead.source}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="hidden lg:flex text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Quick actions */}
              <div className="flex gap-2">
                <a
                  href={`tel:${selectedLead.patient_phone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl min-h-[40px] transition-colors"
                >
                  <Phone size={13} /> Call
                </a>
                <a
                  href={`https://wa.me/91${selectedLead.patient_phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl min-h-[40px] transition-colors"
                >
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>

              {/* Patient details */}
              <div className="bg-white rounded-xl border border-slate-100 p-3 space-y-2 text-xs">
                {[
                  ["Condition", selectedLead.condition],
                  ["Phone", selectedLead.patient_phone],
                  ["City", selectedLead.patient_city],
                  ["Preferred Date", selectedLead.preferred_date ?? "—"],
                  ["Preferred Time", selectedLead.preferred_time ?? "—"],
                  ["Submitted", new Date(selectedLead.created_at).toLocaleString("en-IN")],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <span className="text-slate-400 flex-shrink-0">{k}</span>
                    <span className="text-slate-700 font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>

              {/* Confirm Appointment */}
              <div className="rounded-xl border border-emerald-200 bg-white overflow-hidden">
                <div className="bg-emerald-50 px-3 py-2.5 flex items-center gap-2 border-b border-emerald-100">
                  <Calendar size={13} className="text-emerald-600" />
                  <h4 className="text-emerald-800 font-semibold text-xs">Confirm Appointment</h4>
                </div>
                <div className="p-3">
                  {selectedLead.status === "Confirmed" && selectedLead.confirmed_datetime ? (
                    <div className="text-center py-2">
                      <CheckCircle size={18} className="text-emerald-500 mx-auto mb-1.5" />
                      <p className="text-emerald-700 text-xs font-semibold">Appointment Confirmed</p>
                      <p className="text-slate-500 text-[11px] mt-1">
                        {new Date(selectedLead.confirmed_datetime).toLocaleString("en-IN", {
                          weekday: "short", day: "numeric", month: "short",
                          year: "numeric", hour: "2-digit", minute: "2-digit",
                        })}
                      </p>
                      <p className="text-slate-400 text-[11px] mt-1">WhatsApp sent to patient ✓</p>
                      <button
                        onClick={() => setSelectedLead((p) => p ? { ...p, confirmed_datetime: undefined, status: "Called" } : null)}
                        className="mt-2 text-[11px] text-slate-400 hover:text-slate-700 underline"
                      >
                        Reschedule
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {selectedLead.preferred_time && (
                        <p className="text-[11px] text-blue-700 flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1.5">
                          <AlertCircle size={11} />
                          Patient prefers: {selectedLead.preferred_time}
                        </p>
                      )}
                      <div>
                        <label className="text-[11px] text-slate-500 font-semibold block mb-1">Confirmed Date</label>
                        <input
                          type="date"
                          value={confirmDate}
                          onChange={(e) => setConfirmDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-3 py-2 text-xs border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:border-blue-400 transition-colors text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 font-semibold block mb-1">OPD Time Slot</label>
                        <select
                          value={confirmTime}
                          onChange={(e) => setConfirmTime(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:border-blue-400 transition-colors text-slate-800"
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
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl disabled:opacity-40 transition-colors min-h-[40px]"
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
                <p className="text-slate-600 font-semibold text-xs mb-2.5 uppercase tracking-wider">Update Status</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {STATUS_OPTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selectedLead.lead_id, s)}
                      className={cn(
                        "py-2 text-xs font-semibold rounded-xl border transition-colors",
                        selectedLead.status === s
                          ? STATUS_COLORS[s]
                          : "border-slate-200 text-slate-500 hover:border-slate-400 bg-white"
                      )}
                    >
                      {selectedLead.status === s && <CheckCircle size={10} className="inline mr-1" />}{s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedLead.notes && (
                <div className="bg-white border border-slate-100 rounded-xl p-3 max-h-28 overflow-y-auto">
                  {selectedLead.notes.split("\n").map((l, i) => (
                    <p key={i} className="text-slate-500 text-xs leading-relaxed">{l}</p>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add a note..."
                  rows={2}
                  className="flex-1 px-3 py-2 text-xs border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-blue-400 text-slate-800 resize-none placeholder-slate-400"
                />
                <button
                  onClick={addNote}
                  disabled={!note.trim()}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl disabled:opacity-40 self-end transition-colors"
                >
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
