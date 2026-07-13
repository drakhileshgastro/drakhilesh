"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import {
  Search, Phone, MessageCircle, X, CheckCircle, Clock, Save, Plus,
  Calendar, Send, AlertCircle, ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/cn";
import { CONDITIONS } from "@/lib/constants";
import type { Lead, LeadStatus } from "@/lib/supabase";
import { calculateLeadScore, getScoreLabel } from "@/lib/lead-score";
import { toast } from "sonner";

const supabase = createSupabaseBrowser();

const STATUS_OPTIONS: LeadStatus[] = ["New", "Called", "Confirmed", "Visited", "No-answer", "Cancelled", "Follow-up"];

const STATUS_COLORS: Record<string, string> = {
  New: "bg-teal-50 text-teal-700 border-teal-200",
  Called: "bg-blue-100 text-blue-700 border-blue-200",
  Confirmed: "bg-green-100 text-green-700 border-green-200",
  Visited: "bg-purple-100 text-purple-700 border-purple-200",
  "No-answer": "bg-amber-100 text-amber-700 border-amber-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
  "Follow-up": "bg-orange-100 text-orange-700 border-orange-200",
};

const SOURCE_COLORS: Record<string, string> = {
  "Website Form": "bg-navy text-white",
  Chatbot: "bg-teal-50 text-teal-700",
  WhatsApp: "bg-green-100 text-green-700",
  "Google Ads": "bg-blue-100 text-blue-700",
  Facebook: "bg-indigo-100 text-indigo-700",
  "Walk-in": "bg-purple-100 text-purple-700",
  Referral: "bg-orange-100 text-orange-700",
};

const TIME_SLOT_OPTIONS = [
  { value: "Morning (10am–2pm)", label: "Morning OPD (10am – 2pm)" },
  { value: "Evening (5pm–8pm)", label: "Evening OPD (5pm – 8pm)" },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteText, setNoteText] = useState("");
  const [saving, setSaving] = useState(false);
  const [followUpDate, setFollowUpDate] = useState("");
  const [confirmDate, setConfirmDate] = useState("");
  const [confirmTime, setConfirmTime] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [showAddLead, setShowAddLead] = useState(false);
  const [addForm, setAddForm] = useState({ patient_name: "", patient_phone: "", patient_city: "", condition: "", preferred_time: "" });
  const [addingLead, setAddingLead] = useState(false);

  const fetchLeads = useCallback(async () => {
    const { data } = await supabase
      .from("gastro_leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchLeads();
    const channel = supabase
      .channel("leads-page")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, fetchLeads)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [fetchLeads]);

  const filtered = leads.filter((l) => {
    const matchSearch =
      search === "" ||
      l.patient_name.toLowerCase().includes(search.toLowerCase()) ||
      l.patient_phone.includes(search) ||
      l.patient_city.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  async function updateStatus(leadId: string, status: LeadStatus) {
    await supabase.from("gastro_leads").update({ status }).eq("lead_id", leadId);
    setLeads((prev) => prev.map((l) => l.lead_id === leadId ? { ...l, status } : l));
    if (selectedLead?.lead_id === leadId) setSelectedLead((prev) => prev ? { ...prev, status } : null);
  }

  async function addNote() {
    if (!noteText.trim() || !selectedLead) return;
    setSaving(true);
    const timestamp = new Date().toLocaleString("en-IN");
    const newNote = `[${timestamp}] ${noteText}`;
    const updatedNotes = selectedLead.notes ? `${selectedLead.notes}\n${newNote}` : newNote;
    await supabase.from("gastro_leads").update({ notes: updatedNotes }).eq("lead_id", selectedLead.lead_id);
    setLeads((prev) => prev.map((l) => l.lead_id === selectedLead.lead_id ? { ...l, notes: updatedNotes } : l));
    setSelectedLead((prev) => prev ? { ...prev, notes: updatedNotes } : null);
    setNoteText("");
    setSaving(false);
  }

  async function saveFollowUp() {
    if (!followUpDate || !selectedLead) return;
    await supabase
      .from("gastro_leads")
      .update({ follow_up_date: followUpDate, status: "Follow-up" })
      .eq("lead_id", selectedLead.lead_id);
    setLeads((prev) => prev.map((l) =>
      l.lead_id === selectedLead.lead_id ? { ...l, follow_up_date: followUpDate, status: "Follow-up" } : l
    ));
    setSelectedLead((prev) => prev ? { ...prev, follow_up_date: followUpDate, status: "Follow-up" } : null);
    setFollowUpDate("");
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
        toast.success(`Appointment confirmed! WhatsApp sent to ${result.patient_name}.`);
        const updated: Partial<Lead> = {
          status: "Confirmed",
          confirmed_datetime: result.confirmed_datetime,
        };
        setLeads((prev) => prev.map((l) =>
          l.lead_id === selectedLead.lead_id ? { ...l, ...updated } : l
        ));
        setSelectedLead((prev) => prev ? { ...prev, ...updated } : null);
        setConfirmDate("");
        setConfirmTime("");
      } else {
        toast.error(result.error || "Failed to confirm appointment. Try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
    setConfirming(false);
  }

  async function addLead(e: React.FormEvent) {
    e.preventDefault();
    if (!addForm.patient_name || !addForm.patient_phone || !addForm.patient_city || !addForm.condition) return;
    setAddingLead(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...addForm, source: "Walk-in" }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Lead added successfully!");
        setShowAddLead(false);
        setAddForm({ patient_name: "", patient_phone: "", patient_city: "", condition: "", preferred_time: "" });
        fetchLeads();
      } else {
        toast.error(data.error || "Failed to add lead.");
      }
    } catch {
      toast.error("Network error. Try again.");
    }
    setAddingLead(false);
  }

  // Count leads per status for filter badges
  const statusCounts = STATUS_OPTIONS.reduce((acc, s) => {
    acc[s] = leads.filter((l) => l.status === s).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
    {/* Add Lead Modal */}
    {showAddLead && (
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40">
        <div className="bg-white rounded-2xl border border-gray-200 w-full max-w-sm shadow-2xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h3 className="text-navy font-bold text-sm">Add New Lead</h3>
            <button onClick={() => setShowAddLead(false)} className="text-gray-400 hover:text-navy p-1 rounded-lg hover:bg-gray-50"><X size={16} /></button>
          </div>
          <form onSubmit={addLead} className="p-5 space-y-3">
            {[
              { key: "patient_name", label: "Patient Name", type: "text", placeholder: "Full name" },
              { key: "patient_phone", label: "Phone Number", type: "tel", placeholder: "10-digit mobile" },
              { key: "patient_city", label: "City", type: "text", placeholder: "City or area" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="text-[11px] text-gray-500 font-semibold block mb-1">{label}</label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={addForm[key as keyof typeof addForm]}
                  onChange={(e) => setAddForm((p) => ({ ...p, [key]: e.target.value }))}
                  className="w-full px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 text-navy"
                />
              </div>
            ))}
            <div>
              <label className="text-[11px] text-gray-500 font-semibold block mb-1">Condition</label>
              <select
                required
                value={addForm.condition}
                onChange={(e) => setAddForm((p) => ({ ...p, condition: e.target.value }))}
                className="w-full px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 text-navy"
              >
                <option value="">Select condition...</option>
                {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[11px] text-gray-500 font-semibold block mb-1">Preferred Time (optional)</label>
              <select
                value={addForm.preferred_time}
                onChange={(e) => setAddForm((p) => ({ ...p, preferred_time: e.target.value }))}
                className="w-full px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 text-navy"
              >
                <option value="">Not specified</option>
                {TIME_SLOT_OPTIONS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <button
              type="submit"
              disabled={addingLead}
              className="w-full py-3 bg-navy text-white text-xs font-bold rounded-xl disabled:opacity-50 mt-2 min-h-[44px]"
            >
              {addingLead ? "Adding..." : "Add Lead"}
            </button>
          </form>
        </div>
      </div>
    )}

    <div className="flex gap-4 h-full min-h-0">
      {/* Leads list */}
      <div className={cn(
        "flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all",
        selectedLead ? "hidden lg:flex lg:w-2/5" : "w-full"
      )}>
        {/* Header */}
        <div className="px-4 py-3.5 border-b border-gray-200 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-navy font-bold text-sm">
              All Leads <span className="text-gray-400 font-normal">({filtered.length})</span>
            </h2>
            <button
              onClick={() => setShowAddLead(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded-lg"
            >
              <Plus size={12} /> Add Lead
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search name, phone, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-4 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-navy"
            />
          </div>

          {/* Status filter */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            {["All", ...STATUS_OPTIONS].map((s) => {
              const count = s === "All" ? leads.length : (statusCounts[s] ?? 0);
              return (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={cn(
                    "flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap flex-shrink-0 transition-colors",
                    statusFilter === s ? "bg-navy text-white" : "bg-gray-100 text-gray-600 border border-gray-200"
                  )}
                >
                  {s}
                  {count > 0 && (
                    <span className={cn("text-[9px] font-bold px-1 py-0.5 rounded-full leading-none",
                      statusFilter === s ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"
                    )}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead rows */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {loading ? (
            <div className="p-8 text-center text-gray-400 text-sm">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-sm">No leads found.</div>
          ) : (
            filtered.map((lead) => (
              <button
                key={lead.lead_id}
                onClick={() => { setSelectedLead(lead); setNoteText(""); setFollowUpDate(""); setConfirmDate(""); setConfirmTime(""); }}
                className={cn(
                  "w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors",
                  selectedLead?.lead_id === lead.lead_id && "bg-gray-50 border-l-2 border-teal-500"
                )}
              >
                <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-700 font-bold text-sm">{lead.patient_name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-navy font-semibold text-sm truncate">{lead.patient_name}</p>
                    <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0", STATUS_COLORS[lead.status])}>
                      {lead.status}
                    </span>
                    {(() => { const s = getScoreLabel(calculateLeadScore(lead)); return (
                      <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded border flex-shrink-0", s.color, s.bg, s.border)}>
                        {s.label}
                      </span>
                    ); })()}
                  </div>
                  <p className="text-gray-400 text-xs truncate">{lead.condition}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-600 text-[11px]">{lead.patient_city}</span>
                    {lead.preferred_time && (
                      <span className="text-[10px] text-teal-600 font-medium">· {lead.preferred_time === "Morning (10am–2pm)" ? "🌅 Morning" : "🌆 Evening"}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] flex-shrink-0 mt-0.5">
                  {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                </p>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Lead detail panel */}
      {selectedLead && (
        <div className="flex-1 lg:w-3/5 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Panel header */}
          <div className="px-5 py-4 border-b border-gray-200 flex items-start justify-between">
            <div>
              {/* Mobile back button */}
              <button
                onClick={() => setSelectedLead(null)}
                className="lg:hidden flex items-center gap-1 text-teal-600 text-xs font-semibold mb-2"
              >
                <ArrowLeft size={13} /> Back to Leads
              </button>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-navy font-bold text-base">{selectedLead.patient_name}</h3>
                <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full border", STATUS_COLORS[selectedLead.status])}>
                  {selectedLead.status}
                </span>
              </div>
              <p className="text-gray-400 text-xs">{selectedLead.patient_city} &middot; {selectedLead.source}</p>
            </div>
            <button onClick={() => setSelectedLead(null)} className="hidden lg:flex text-gray-400 hover:text-navy p-1 rounded-lg hover:bg-gray-50">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5">

            {/* Quick actions */}
            <div className="flex flex-wrap gap-2">
              <a
                href={`tel:${selectedLead.patient_phone}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl min-h-[44px]"
              >
                <Phone size={15} /> {selectedLead.patient_phone}
              </a>
              <a
                href={`https://wa.me/91${selectedLead.patient_phone}?text=${encodeURIComponent(`Namaskar ${selectedLead.patient_name} ji, Dr. Akhilesh Yadav clinic se baat kar rahe hain aapke appointment ke baare mein.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl min-h-[44px]"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>

            {/* Patient details */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2.5">
              <h4 className="text-navy font-bold text-xs uppercase tracking-wider mb-3">Patient Details</h4>
              {[
                { label: "Condition", value: selectedLead.condition },
                { label: "Phone", value: selectedLead.patient_phone },
                { label: "City", value: selectedLead.patient_city },
                { label: "Preferred Date", value: selectedLead.preferred_date ?? "Not specified" },
                { label: "Preferred Time", value: selectedLead.preferred_time ?? "Not specified" },
                { label: "Lead Created", value: new Date(selectedLead.created_at).toLocaleString("en-IN") },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-3">
                  <p className="text-gray-400 text-xs w-28 flex-shrink-0">{item.label}</p>
                  <p className="text-navy text-xs font-medium text-right">{item.value}</p>
                </div>
              ))}
            </div>

            {/* ── CONFIRM APPOINTMENT ── */}
            <div className="rounded-2xl border border-green-200 overflow-hidden">
              <div className="bg-green-50 px-4 py-3 flex items-center gap-2">
                <Calendar size={14} className="text-green-700" />
                <h4 className="text-green-800 font-bold text-xs uppercase tracking-wider">Confirm Appointment</h4>
              </div>
              <div className="p-4">
                {selectedLead.status === "Confirmed" && selectedLead.confirmed_datetime ? (
                  <div className="text-center py-2">
                    <CheckCircle size={20} className="text-green-600 mx-auto mb-2" />
                    <p className="text-green-700 text-xs font-bold">Appointment Confirmed</p>
                    <p className="text-gray-500 text-[11px] mt-1">
                      {new Date(selectedLead.confirmed_datetime).toLocaleString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="text-gray-400 text-[11px] mt-2">WhatsApp sent to patient ✓</p>
                    <button
                      onClick={() => setSelectedLead((prev) => prev ? { ...prev, confirmed_datetime: undefined, status: "Called" } : null)}
                      className="mt-3 text-[11px] text-gray-400 hover:text-navy underline"
                    >
                      Reschedule
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] text-gray-500 font-semibold block mb-1.5">Confirmed Date</label>
                      <input
                        type="date"
                        value={confirmDate}
                        onChange={(e) => setConfirmDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-navy"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-500 font-semibold block mb-1.5">OPD Time Slot</label>
                      <select
                        value={confirmTime}
                        onChange={(e) => setConfirmTime(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-navy appearance-none"
                      >
                        <option value="">Select time slot...</option>
                        {TIME_SLOT_OPTIONS.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                    {selectedLead.preferred_time && (
                      <p className="text-[11px] text-teal-600 flex items-center gap-1">
                        <AlertCircle size={11} />
                        Patient prefers: {selectedLead.preferred_time}
                      </p>
                    )}
                    <button
                      onClick={confirmAppointment}
                      disabled={confirming || !confirmDate || !confirmTime}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl disabled:opacity-40 transition-colors min-h-[44px]"
                    >
                      <Send size={13} />
                      {confirming ? "Confirming..." : "Confirm & Send WhatsApp"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Status update */}
            <div>
              <h4 className="text-navy font-bold text-xs uppercase tracking-wider mb-2.5">Update Status</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {STATUS_OPTIONS.map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(selectedLead.lead_id, status)}
                    className={cn(
                      "py-2.5 px-3 rounded-xl text-xs font-semibold border transition-colors min-h-[40px]",
                      selectedLead.status === status
                        ? `${STATUS_COLORS[status]} font-bold`
                        : "bg-white border-gray-200 text-gray-600 hover:border-navy"
                    )}
                  >
                    {selectedLead.status === status && <CheckCircle size={11} className="inline mr-1" />}
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Follow-up date */}
            <div>
              <h4 className="text-navy font-bold text-xs uppercase tracking-wider mb-2.5">Schedule Follow-up</h4>
              <div className="flex gap-2">
                <input
                  type="datetime-local"
                  value={followUpDate}
                  onChange={(e) => setFollowUpDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className="flex-1 px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-navy"
                />
                <button
                  onClick={saveFollowUp}
                  disabled={!followUpDate}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-teal-600 text-white text-xs font-semibold rounded-xl disabled:opacity-40 min-h-[44px]"
                >
                  <Clock size={13} /> Set
                </button>
              </div>
              {selectedLead.follow_up_date && (
                <p className="text-gray-400 text-xs mt-1.5">
                  Current: {new Date(selectedLead.follow_up_date).toLocaleString("en-IN")}
                </p>
              )}
            </div>

            {/* Notes */}
            <div>
              <h4 className="text-navy font-bold text-xs uppercase tracking-wider mb-2.5">Call Notes</h4>
              {selectedLead.notes && (
                <div className="bg-gray-50 rounded-xl p-3 mb-3 max-h-32 overflow-y-auto">
                  {selectedLead.notes.split("\n").map((line, i) => (
                    <p key={i} className="text-gray-600 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add call note..."
                  rows={2}
                  className="flex-1 px-3 py-2.5 text-xs border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-teal-500 transition-colors text-navy resize-none"
                />
                <button
                  onClick={addNote}
                  disabled={!noteText.trim() || saving}
                  className="flex items-center gap-1 px-3 py-2.5 bg-navy text-white text-xs font-semibold rounded-xl disabled:opacity-40 self-end"
                >
                  <Save size={13} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
    </>
  );
}
