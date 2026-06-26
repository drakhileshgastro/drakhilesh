"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Search, Filter, Phone, MessageCircle, ChevronDown,
  X, CheckCircle, Clock, Save, Plus
} from "lucide-react";
import { cn } from "@/lib/cn";
import { CONDITIONS } from "@/lib/constants";
import type { Lead, LeadStatus } from "@/lib/supabase";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const STATUS_OPTIONS: LeadStatus[] = ["New", "Called", "Confirmed", "Visited", "No-answer", "Cancelled", "Follow-up"];

const STATUS_COLORS: Record<string, string> = {
  New: "bg-teal-light text-teal border-teal/20",
  Called: "bg-blue-100 text-blue-700 border-blue-200",
  Confirmed: "bg-green-100 text-green-700 border-green-200",
  Visited: "bg-purple-100 text-purple-700 border-purple-200",
  "No-answer": "bg-gold-light text-amber-700 border-amber-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
  "Follow-up": "bg-orange-100 text-orange-700 border-orange-200",
};

const SOURCE_COLORS: Record<string, string> = {
  "Website Form": "bg-navy text-white",
  Chatbot: "bg-teal-light text-teal",
  WhatsApp: "bg-green-100 text-green-700",
  "Google Ads": "bg-blue-100 text-blue-700",
  Facebook: "bg-indigo-100 text-indigo-700",
  "Walk-in": "bg-purple-100 text-purple-700",
  Referral: "bg-orange-100 text-orange-700",
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteText, setNoteText] = useState("");
  const [saving, setSaving] = useState(false);
  const [followUpDate, setFollowUpDate] = useState("");

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
    const matchSearch = search === "" || l.patient_name.toLowerCase().includes(search.toLowerCase()) ||
      l.patient_phone.includes(search) || l.patient_city.toLowerCase().includes(search.toLowerCase());
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
    await supabase.from("gastro_leads")
      .update({ follow_up_date: followUpDate, status: "Follow-up" })
      .eq("lead_id", selectedLead.lead_id);
    setLeads((prev) => prev.map((l) => l.lead_id === selectedLead.lead_id ? { ...l, follow_up_date: followUpDate, status: "Follow-up" } : l));
    setSelectedLead((prev) => prev ? { ...prev, follow_up_date: followUpDate, status: "Follow-up" } : null);
    setFollowUpDate("");
  }

  return (
    <div className="flex gap-4 h-full min-h-0">
      {/* Leads list */}
      <div className={cn("flex flex-col bg-white rounded-2xl border border-gray-light overflow-hidden transition-all", selectedLead ? "hidden lg:flex lg:w-2/5" : "w-full")}>
        {/* Header */}
        <div className="px-4 py-3.5 border-b border-gray-light space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-navy font-bold text-sm">All Leads <span className="text-gray-muted font-normal">({filtered.length})</span></h2>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded-lg">
              <Plus size={12} /> Add Lead
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-muted" />
            <input
              type="text"
              placeholder="Search name, phone, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-4 py-2.5 text-xs border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal transition-colors text-navy"
            />
          </div>

          {/* Status filter */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            {["All", ...STATUS_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn("px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap flex-shrink-0 transition-colors",
                  statusFilter === s ? "bg-navy text-white" : "bg-offwhite text-slate border border-gray-light"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Lead rows */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-light">
          {loading ? (
            <div className="p-8 text-center text-gray-muted text-sm">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-gray-muted text-sm">No leads found.</div>
          ) : (
            filtered.map((lead) => (
              <button
                key={lead.lead_id}
                onClick={() => { setSelectedLead(lead); setNoteText(""); setFollowUpDate(""); }}
                className={cn("w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-offwhite transition-colors",
                  selectedLead?.lead_id === lead.lead_id && "bg-offwhite border-l-2 border-teal"
                )}
              >
                <div className="w-9 h-9 bg-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-teal font-bold text-sm">{lead.patient_name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-navy font-semibold text-sm truncate">{lead.patient_name}</p>
                    <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0", STATUS_COLORS[lead.status])}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-gray-muted text-xs truncate">{lead.condition}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate text-[11px]">{lead.patient_city}</span>
                    <span className="text-gray-muted text-[11px]">·</span>
                    <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-medium", SOURCE_COLORS[lead.source] ?? "bg-offwhite text-slate")}>
                      {lead.source}
                    </span>
                  </div>
                </div>
                <p className="text-gray-muted text-[10px] flex-shrink-0 mt-0.5">
                  {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                </p>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Lead detail panel */}
      {selectedLead && (
        <div className="flex-1 lg:w-3/5 bg-white rounded-2xl border border-gray-light overflow-hidden flex flex-col">
          {/* Panel header */}
          <div className="px-5 py-4 border-b border-gray-light flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-navy font-bold text-base">{selectedLead.patient_name}</h3>
                <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full border", STATUS_COLORS[selectedLead.status])}>
                  {selectedLead.status}
                </span>
              </div>
              <p className="text-gray-muted text-xs">{selectedLead.patient_city} · {selectedLead.source}</p>
            </div>
            <button onClick={() => setSelectedLead(null)} className="text-gray-muted hover:text-navy p-1 rounded-lg hover:bg-offwhite">
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
                href={`https://wa.me/91${selectedLead.patient_phone}?text=${encodeURIComponent(`Namaskar ${selectedLead.patient_name} ji, Dr. Akhilesh Yadav clinic se call kar rahe hain.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-whatsapp text-white text-sm font-semibold rounded-xl min-h-[44px]"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>

            {/* Patient details */}
            <div className="bg-offwhite rounded-2xl p-4 space-y-2.5">
              <h4 className="text-navy font-bold text-xs uppercase tracking-wider mb-3">Patient Details</h4>
              {[
                { label: "Condition", value: selectedLead.condition },
                { label: "Phone", value: selectedLead.patient_phone },
                { label: "City", value: selectedLead.patient_city },
                { label: "Preferred Date", value: selectedLead.preferred_date ?? "Not specified" },
                { label: "Lead Created", value: new Date(selectedLead.created_at).toLocaleString("en-IN") },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-3">
                  <p className="text-gray-muted text-xs w-28 flex-shrink-0">{item.label}</p>
                  <p className="text-navy text-xs font-medium text-right">{item.value}</p>
                </div>
              ))}
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
                        : "bg-white border-gray-light text-slate hover:border-navy"
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
                  className="flex-1 px-3 py-2.5 text-xs border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal transition-colors text-navy"
                />
                <button
                  onClick={saveFollowUp}
                  disabled={!followUpDate}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-teal text-white text-xs font-semibold rounded-xl disabled:opacity-40 min-h-[44px]"
                >
                  <Clock size={13} /> Set
                </button>
              </div>
              {selectedLead.follow_up_date && (
                <p className="text-gray-muted text-xs mt-1.5">
                  Current: {new Date(selectedLead.follow_up_date).toLocaleString("en-IN")}
                </p>
              )}
            </div>

            {/* Notes */}
            <div>
              <h4 className="text-navy font-bold text-xs uppercase tracking-wider mb-2.5">Call Notes</h4>
              {selectedLead.notes && (
                <div className="bg-offwhite rounded-xl p-3 mb-3 max-h-32 overflow-y-auto">
                  {selectedLead.notes.split("\n").map((line, i) => (
                    <p key={i} className="text-slate text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add call note..."
                  rows={2}
                  className="flex-1 px-3 py-2.5 text-xs border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal transition-colors text-navy resize-none"
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
  );
}
