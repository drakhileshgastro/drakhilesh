"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
const supabase = createSupabaseBrowser();
import {
  Search, Download, Phone, MessageCircle, CheckCircle,
  X, Calendar, Send, ArrowLeft, AlertCircle, Filter,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead, LeadStatus } from "@/lib/supabase";
import { calculateLeadScore, getScoreLabel } from "@/lib/lead-score";
import { toast } from "sonner";

const BRAND       = "#111827";
const BRAND_LIGHT = "#F3F4F6";

export const STATUS_BADGE: Record<string, string> = {
  New:          "bg-blue-50   text-blue-700   border-blue-200",
  Called:       "bg-sky-50    text-sky-700    border-sky-200",
  Confirmed:    "bg-emerald-50 text-emerald-700 border-emerald-200",
  Visited:      "bg-purple-50 text-purple-700 border-purple-200",
  "No-answer":  "bg-amber-50  text-amber-700  border-amber-200",
  Cancelled:    "bg-red-50    text-red-700    border-red-200",
  "Follow-up":  "bg-orange-50 text-orange-700 border-orange-200",
};

export const STATUS_COLORS_DARK = STATUS_BADGE;

const STATUS_OPTIONS: LeadStatus[] = ["New","Called","Confirmed","Visited","No-answer","Cancelled","Follow-up"];

const TIME_SLOT_OPTIONS = [
  { value: "Morning (10am–2pm)", label: "Morning OPD (10am – 2pm)" },
  { value: "Evening (5pm–8pm)",  label: "Evening OPD (5pm – 8pm)" },
];

export default function AdminLeads() {
  const [leads,        setLeads]        = useState<Lead[]>([]);
  const [loading,      setLoading]      = useState(true);
  const [search,       setSearch]       = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [note,         setNote]         = useState("");
  const [confirmDate,  setConfirmDate]  = useState("");
  const [confirmTime,  setConfirmTime]  = useState("");
  const [confirming,   setConfirming]   = useState(false);
  const [showFilter,   setShowFilter]   = useState(false);

  const fetchLeads = useCallback(async () => {
    const { data } = await supabase.from("gastro_leads").select("*").order("created_at", { ascending: false });
    setLeads((data as Lead[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(fetchLeads, 0);
    const ch = supabase.channel("admin-leads")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, fetchLeads)
      .subscribe();
    return () => { window.clearTimeout(t); supabase.removeChannel(ch); };
  }, [fetchLeads]);

  const filtered = leads.filter((l) => {
    const s = search.toLowerCase();
    const m = !search
      || l.patient_name.toLowerCase().includes(s)
      || l.patient_phone.includes(s)
      || l.patient_city.toLowerCase().includes(s)
      || l.condition.toLowerCase().includes(s);
    return m && (statusFilter === "All" || l.status === statusFilter);
  });

  async function updateStatus(id: string, status: LeadStatus) {
    await supabase.from("gastro_leads").update({ status }).eq("lead_id", id);
    setLeads((p) => p.map((l) => l.lead_id === id ? { ...l, status } : l));
    if (selectedLead?.lead_id === id) setSelectedLead((p) => p ? { ...p, status } : null);
  }

  async function addNote() {
    if (!note.trim() || !selectedLead) return;
    const ts      = new Date().toLocaleString("en-IN");
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
        body: JSON.stringify({ lead_id: selectedLead.lead_id, confirmed_date: confirmDate, confirmed_time: confirmTime }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success(`Confirmed — WhatsApp sent to ${result.patient_name}`);
        const patch: Partial<Lead> = { status: "Confirmed", confirmed_datetime: result.confirmed_datetime };
        setLeads((p) => p.map((l) => l.lead_id === selectedLead.lead_id ? { ...l, ...patch } : l));
        setSelectedLead((p) => p ? { ...p, ...patch } : null);
        setConfirmDate(""); setConfirmTime("");
      } else {
        toast.error(result.error || "Failed to confirm.");
      }
    } catch { toast.error("Network error. Try again."); }
    setConfirming(false);
  }

  function exportCSV() {
    const rows = [
      ["Name","Phone","City","Condition","Source","Status","Created"],
      ...filtered.map((l) => [l.patient_name,l.patient_phone,l.patient_city,l.condition,l.source,l.status,new Date(l.created_at).toLocaleDateString("en-IN")]),
    ].map((r) => r.join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([rows], { type: "text/csv" }));
    a.download = "gastro-leads.csv"; a.click();
  }

  function openLead(lead: Lead) {
    setSelectedLead(lead);
    setNote(""); setConfirmDate(""); setConfirmTime("");
  }

  // ── Detail panel ──────────────────────────────────────────────────────────
  const DetailPanel = selectedLead ? (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-100 flex items-start gap-3 sticky top-0 bg-white z-10">
        <button
          onClick={() => setSelectedLead(null)}
          className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-gray-900 font-bold text-base">{selectedLead.patient_name}</h3>
            <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", STATUS_BADGE[selectedLead.status])}>
              {selectedLead.status}
            </span>
          </div>
          <p className="text-gray-400 text-xs mt-0.5">{selectedLead.patient_city} · {selectedLead.source}</p>
        </div>
        <button onClick={() => setSelectedLead(null)} className="hidden lg:flex w-8 h-8 items-center justify-center rounded-xl text-gray-400 hover:bg-gray-100 transition-colors">
          <X size={15} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${selectedLead.patient_phone}`}
            className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white transition-colors"
            style={{ background: BRAND }}
          >
            <Phone size={15} /> Call Now
          </a>
          <a
            href={`https://wa.me/91${selectedLead.patient_phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-2xl text-sm font-semibold"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>

        {/* Patient info */}
        <div className="bg-gray-50 rounded-2xl p-4 space-y-2.5 text-sm">
          {[
            ["Condition",      selectedLead.condition],
            ["Phone",          selectedLead.patient_phone],
            ["City",           selectedLead.patient_city],
            ["Preferred Date", selectedLead.preferred_date ?? "—"],
            ["Preferred Time", selectedLead.preferred_time ?? "—"],
            ["Submitted",      new Date(selectedLead.created_at).toLocaleString("en-IN")],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3">
              <span className="text-gray-400 flex-shrink-0 text-xs">{k}</span>
              <span className="text-gray-800 font-medium text-xs text-right">{v}</span>
            </div>
          ))}
        </div>

        {/* Confirm appointment */}
        <div className="border border-emerald-200 rounded-2xl overflow-hidden">
          <div className="bg-emerald-50 px-4 py-3 flex items-center gap-2 border-b border-emerald-100">
            <Calendar size={14} className="text-emerald-600" />
            <span className="text-emerald-800 font-semibold text-sm">Confirm Appointment</span>
          </div>
          <div className="p-4">
            {selectedLead.status === "Confirmed" && selectedLead.confirmed_datetime ? (
              <div className="text-center py-2">
                <CheckCircle size={22} className="text-emerald-500 mx-auto mb-2" />
                <p className="text-emerald-700 text-sm font-semibold">Appointment Confirmed</p>
                <p className="text-gray-500 text-xs mt-1">
                  {new Date(selectedLead.confirmed_datetime).toLocaleString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                </p>
                <p className="text-gray-400 text-xs mt-1">WhatsApp sent ✓</p>
                <button
                  onClick={() => setSelectedLead((p) => p ? { ...p, confirmed_datetime: undefined, status: "Called" } : null)}
                  className="mt-2 text-xs text-gray-400 hover:text-gray-700 underline"
                >
                  Reschedule
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedLead.preferred_time && (
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs px-3 py-2 rounded-xl">
                    <AlertCircle size={12} />
                    Patient prefers: {selectedLead.preferred_time}
                  </div>
                )}
                <div>
                  <label className="text-xs text-gray-500 font-semibold block mb-1.5">Confirmed Date</label>
                  <input
                    type="date"
                    value={confirmDate}
                    onChange={(e) => setConfirmDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors text-gray-800"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-semibold block mb-1.5">OPD Time Slot</label>
                  <select
                    value={confirmTime}
                    onChange={(e) => setConfirmTime(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors text-gray-800"
                  >
                    <option value="">Select time slot...</option>
                    {TIME_SLOT_OPTIONS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <button
                  onClick={confirmAppointment}
                  disabled={confirming || !confirmDate || !confirmTime}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl disabled:opacity-40 transition-colors"
                >
                  <Send size={14} />
                  {confirming ? "Confirming..." : "Confirm & Send WhatsApp"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Update status */}
        <div>
          <p className="text-gray-600 font-semibold text-xs mb-3 uppercase tracking-wider">Update Status</p>
          <div className="grid grid-cols-2 gap-2">
            {STATUS_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => updateStatus(selectedLead.lead_id, s)}
                className={cn(
                  "py-2.5 text-xs font-semibold rounded-xl border transition-colors",
                  selectedLead.status === s
                    ? STATUS_BADGE[s]
                    : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
                )}
              >
                {selectedLead.status === s && <CheckCircle size={10} className="inline mr-1" />}
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        {selectedLead.notes && (
          <div className="bg-gray-50 rounded-xl p-3 max-h-32 overflow-y-auto">
            {selectedLead.notes.split("\n").map((l, i) => (
              <p key={i} className="text-gray-500 text-xs leading-relaxed">{l}</p>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note..."
            rows={2}
            className="flex-1 px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-gray-800 resize-none bg-gray-50 placeholder-gray-400"
          />
          <button
            onClick={addNote}
            disabled={!note.trim()}
            className="px-4 py-2 text-white text-xs font-semibold rounded-xl disabled:opacity-40 self-end transition-colors"
            style={{ background: BRAND }}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  ) : null;

  // ── Mobile: full-screen detail ────────────────────────────────────────────
  if (selectedLead && typeof window !== "undefined" && window.innerWidth < 1024) {
    // We still render everything but the panel is shown as an overlay on mobile
  }

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 120px)", minHeight: 500 }}>

      {/* ── Toolbar ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-xs mb-3 overflow-hidden">
        <div className="px-4 py-3.5 flex items-center gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, condition..."
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-gray-400 text-gray-800 placeholder-gray-400 transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-sm font-medium transition-colors flex-shrink-0",
              statusFilter !== "All"
                ? "border-transparent text-white"
                : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
            )}
            style={statusFilter !== "All" ? { background: BRAND } : {}}
          >
            <Filter size={14} />
            <span className="hidden sm:inline">{statusFilter === "All" ? "Filter" : statusFilter}</span>
          </button>
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>

        {/* Status filter pills */}
        {showFilter && (
          <div className="px-4 pb-3 flex flex-wrap gap-1.5">
            {["All", ...STATUS_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => { setStatusFilter(s); setShowFilter(false); }}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors",
                  statusFilter === s
                    ? "text-white border-transparent"
                    : "border-gray-200 text-gray-500 bg-white hover:bg-gray-50"
                )}
                style={statusFilter === s ? { background: BRAND } : {}}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lead count */}
      <p className="text-xs text-gray-400 font-medium mb-3 px-0.5">
        {filtered.length} {filtered.length === 1 ? "lead" : "leads"}{statusFilter !== "All" ? ` · ${statusFilter}` : ""}
      </p>

      <div className="flex flex-1 gap-4 overflow-hidden">

        {/* ── Mobile card list / Desktop table ── */}
        <div className={cn("flex-1 overflow-y-auto", selectedLead && "hidden lg:block")}>

          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-400 text-sm">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center py-20 text-gray-400 text-sm">No leads found.</div>
          ) : (
            <>
              {/* ── Mobile cards (hidden md+) ── */}
              <div className="md:hidden space-y-2.5">
                {filtered.map((lead) => {
                  const score = getScoreLabel(calculateLeadScore(lead));
                  return (
                    <button
                      key={lead.lead_id}
                      onClick={() => openLead(lead)}
                      className="w-full bg-white rounded-2xl border border-gray-100 shadow-xs p-4 text-left hover:border-gray-200 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                          style={{ background: BRAND }}
                        >
                          {lead.patient_name[0].toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <p className="text-gray-900 font-semibold text-sm truncate">{lead.patient_name}</p>
                            <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-semibold border flex-shrink-0", STATUS_BADGE[lead.status])}>
                              {lead.status}
                            </span>
                          </div>
                          <p className="text-gray-500 text-xs truncate mb-2">{lead.condition} · {lead.patient_city}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <a
                                href={`tel:${lead.patient_phone}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-colors"
                                style={{ background: BRAND_LIGHT, color: BRAND }}
                              >
                                <Phone size={11} /> Call
                              </a>
                              <a
                                href={`https://wa.me/91${lead.patient_phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1 px-2.5 py-1.5 bg-green-50 text-green-700 rounded-xl text-xs font-semibold"
                              >
                                <MessageCircle size={11} /> WA
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded border", score.color, score.bg, score.border)}>
                                {score.label}
                              </span>
                              <span className="text-gray-400 text-[10px]">
                                {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* ── Desktop table (hidden on mobile) ── */}
              <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-gray-50 border-b border-gray-100 sticky top-0">
                    <tr>
                      {["Patient","Phone","Condition","City","Source","Status","Score","Date"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-gray-400 font-semibold uppercase tracking-wider text-[10px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filtered.map((lead) => (
                      <tr
                        key={lead.lead_id}
                        onClick={() => openLead(lead)}
                        className={cn(
                          "hover:bg-gray-50 cursor-pointer transition-colors",
                          selectedLead?.lead_id === lead.lead_id && "bg-gray-50 border-l-2 border-l-gray-900"
                        )}
                      >
                        <td className="px-4 py-3 font-semibold text-gray-800">{lead.patient_name}</td>
                        <td className="px-4 py-3">
                          <a
                            href={`tel:${lead.patient_phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 font-medium hover:underline"
                            style={{ color: BRAND }}
                          >
                            <Phone size={10} /> {lead.patient_phone}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-gray-500 max-w-[140px] truncate">{lead.condition}</td>
                        <td className="px-4 py-3 text-gray-500">{lead.patient_city}</td>
                        <td className="px-4 py-3">
                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-medium">{lead.source}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold border", STATUS_BADGE[lead.status])}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {(() => { const s = getScoreLabel(calculateLeadScore(lead)); return (
                            <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded border", s.color, s.bg, s.border)}>{s.label}</span>
                          ); })()}
                        </td>
                        <td className="px-4 py-3 text-gray-400">
                          {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* ── Desktop detail panel (sidebar) ── */}
        {selectedLead && (
          <div className="hidden lg:flex flex-col w-80 xl:w-96 bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex-shrink-0">
            {DetailPanel}
          </div>
        )}
      </div>

      {/* ── Mobile detail panel (full-screen sheet) ── */}
      {selectedLead && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          {DetailPanel}
        </div>
      )}

    </div>
  );
}
