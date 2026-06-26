"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import { Search, Download, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Lead, LeadStatus } from "@/lib/supabase";

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

const STATUS_OPTIONS: LeadStatus[] = ["New", "Called", "Confirmed", "Visited", "No-answer", "Cancelled", "Follow-up"];

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [note, setNote] = useState("");

  const fetch = useCallback(async () => {
    const { data } = await supabase.from("gastro_leads").select("*").order("created_at", { ascending: false });
    setLeads((data as Lead[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
    const ch = supabase.channel("admin-leads")
      .on("postgres_changes", { event: "*", schema: "public", table: "gastro_leads" }, fetch)
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [fetch]);

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
        {/* Table */}
        <div className={cn("flex-1 overflow-auto", selectedLead && "hidden lg:block lg:w-1/2")}>
          <table className="w-full text-xs">
            <thead className="bg-offwhite border-b border-gray-light sticky top-0">
              <tr>
                {["Patient", "Phone", "Condition", "City", "Source", "Status", "Date"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-gray-muted font-semibold uppercase tracking-wider text-[10px]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-light">
              {loading ? (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-muted">Loading...</td></tr>
              ) : filtered.map((lead) => (
                <tr key={lead.lead_id} onClick={() => setSelectedLead(lead)}
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
                    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", STATUS_COLORS[lead.status])}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-muted">{new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail panel */}
        {selectedLead && (
          <div className="w-full lg:w-80 xl:w-96 border-l border-gray-light overflow-y-auto p-4 flex-shrink-0 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-navy font-bold text-base">{selectedLead.patient_name}</h3>
                <p className="text-gray-muted text-xs">{selectedLead.patient_city} · {selectedLead.source}</p>
              </div>
              <button onClick={() => setSelectedLead(null)} className="text-gray-muted hover:text-navy text-xs">✕</button>
            </div>

            <div className="flex gap-2">
              <a href={`tel:${selectedLead.patient_phone}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-navy text-white text-xs font-bold rounded-xl">
                <Phone size={13} /> Call
              </a>
              <a href={`https://wa.me/91${selectedLead.patient_phone}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-whatsapp text-white text-xs font-bold rounded-xl">
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>

            <div className="bg-offwhite rounded-xl p-3 space-y-2 text-xs">
              {[["Condition", selectedLead.condition], ["Phone", selectedLead.patient_phone], ["City", selectedLead.patient_city], ["Preferred Date", selectedLead.preferred_date ?? "—"], ["Created", new Date(selectedLead.created_at).toLocaleString("en-IN")]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2">
                  <span className="text-gray-muted">{k}</span>
                  <span className="text-navy font-medium text-right">{v}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-navy font-bold text-xs mb-2 uppercase tracking-wider">Update Status</p>
              <div className="grid grid-cols-2 gap-1.5">
                {STATUS_OPTIONS.map((s) => (
                  <button key={s} onClick={() => updateStatus(selectedLead.lead_id, s)}
                    className={cn("py-2 text-xs font-semibold rounded-xl border transition-colors",
                      selectedLead.status === s ? `${STATUS_COLORS[s]} font-bold` : "border-gray-light text-slate hover:border-navy bg-white")}>
                    {selectedLead.status === s && <CheckCircle size={10} className="inline mr-1" />}{s}
                  </button>
                ))}
              </div>
            </div>

            {selectedLead.notes && (
              <div className="bg-offwhite rounded-xl p-3 max-h-28 overflow-y-auto">
                {selectedLead.notes.split("\n").map((l, i) => <p key={i} className="text-slate text-xs">{l}</p>)}
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
        )}
      </div>
    </div>
  );
}
