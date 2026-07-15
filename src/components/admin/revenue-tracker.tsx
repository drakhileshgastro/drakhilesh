"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";

const supabase = createSupabaseBrowser();
import { IndianRupee, Plus, TrendingUp, Calendar } from "lucide-react";



interface RevenueEntry {
  revenue_id: string;
  patient_name: string;
  consultation_fee: number;
  condition_tag: string;
  visit_date: string;
  notes: string;
  created_at: string;
}

const CONDITIONS = ["Liver", "Endoscopy", "Colonoscopy", "ERCP", "IBS", "Jaundice", "Gallstone", "Other"];

export default function RevenueTracker() {
  const [entries, setEntries] = useState<RevenueEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ patient_name: "", consultation_fee: "", condition_tag: "Other", visit_date: new Date().toISOString().split("T")[0], notes: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchEntries(); }, []);

  async function fetchEntries() {
    const { data } = await supabase.from("gastro_revenue").select("*").order("visit_date", { ascending: false });
    setEntries(data ?? []);
    setLoading(false);
  }

  async function addEntry() {
    if (!form.patient_name || !form.consultation_fee) return;
    setSaving(true);
    await supabase.from("gastro_revenue").insert([{
      patient_name: form.patient_name,
      consultation_fee: parseFloat(form.consultation_fee),
      condition_tag: form.condition_tag,
      visit_date: form.visit_date,
      notes: form.notes,
    }]);
    setForm({ patient_name: "", consultation_fee: "", condition_tag: "Other", visit_date: new Date().toISOString().split("T")[0], notes: "" });
    setShowForm(false);
    setSaving(false);
    fetchEntries();
  }

  const thisMonth = new Date().toISOString().slice(0, 7);
  const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().slice(0, 7);

  const thisMonthTotal = entries.filter((e) => e.visit_date.startsWith(thisMonth)).reduce((s, e) => s + Number(e.consultation_fee), 0);
  const lastMonthTotal = entries.filter((e) => e.visit_date.startsWith(lastMonth)).reduce((s, e) => s + Number(e.consultation_fee), 0);
  const totalPatients = entries.length;
  const avgFee = totalPatients ? Math.round(entries.reduce((s, e) => s + Number(e.consultation_fee), 0) / totalPatients) : 0;

  const byCondition = CONDITIONS.map((c) => ({
    condition: c,
    count: entries.filter((e) => e.condition_tag === c).length,
    total: entries.filter((e) => e.condition_tag === c).reduce((s, e) => s + Number(e.consultation_fee), 0),
  })).filter((c) => c.count > 0);

  return (
    <div className="space-y-5">
            {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "This Month", value: `₹${thisMonthTotal.toLocaleString("en-IN")}`, sub: new Date().toLocaleString("en-IN", { month: "long" }), color: "bg-amber-50 border-amber-200 text-amber-800" },
          { label: "Last Month", value: `₹${lastMonthTotal.toLocaleString("en-IN")}`, sub: new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString("en-IN", { month: "long" }), color: "bg-gray-50 border-gray-200 text-gray-900" },
          { label: "Total Patients", value: totalPatients, sub: "All time visits", color: "bg-gray-50 border-gray-200 text-gray-800" },
          { label: "Avg Fee", value: `₹${avgFee.toLocaleString("en-IN")}`, sub: "Per consultation", color: "bg-purple-50 border-purple-200 text-purple-800" },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-4 border ${s.color}`}>
            <IndianRupee size={16} className="opacity-60 mb-2" />
            <p className="text-2xl font-bold leading-none">{loading ? "—" : s.value}</p>
            <p className="text-xs font-medium mt-1 opacity-80">{s.label}</p>
            <p className="text-[10px] opacity-60 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue log */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-gray-900 font-bold text-sm">Revenue Log</h2>
            <button onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg">
              <Plus size={12} /> Add Entry
            </button>
          </div>

          {/* Add form */}
          {showForm && (
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input value={form.patient_name} onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
                  placeholder="Patient name *" className="px-3 py-2.5 text-xs border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-gray-400 text-gray-900 col-span-2 sm:col-span-1" />
                <input value={form.consultation_fee} onChange={(e) => setForm({ ...form, consultation_fee: e.target.value })}
                  type="number" placeholder="Fee (₹) *" className="px-3 py-2.5 text-xs border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-gray-400 text-gray-900 col-span-2 sm:col-span-1" />
                <select value={form.condition_tag} onChange={(e) => setForm({ ...form, condition_tag: e.target.value })}
                  className="px-3 py-2.5 text-xs border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-gray-400 text-gray-900">
                  {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <input value={form.visit_date} onChange={(e) => setForm({ ...form, visit_date: e.target.value })}
                  type="date" className="px-3 py-2.5 text-xs border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-gray-400 text-gray-900" />
              </div>
              <input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Notes (optional)" className="w-full px-3 py-2.5 text-xs border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-gray-400 text-gray-900 mb-3" />
              <div className="flex gap-2">
                <button onClick={addEntry} disabled={!form.patient_name || !form.consultation_fee || saving}
                  className="px-4 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl disabled:opacity-40">
                  {saving ? "Saving..." : "Save Entry"}
                </button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2.5 border border-gray-200 text-gray-500 text-xs rounded-xl">
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="overflow-auto">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {["Date", "Patient", "Condition", "Fee", "Notes"].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-left text-gray-400 font-semibold uppercase tracking-wider text-[10px]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr><td colSpan={5} className="px-4 py-6 text-center text-gray-400">Loading...</td></tr>
                ) : entries.length === 0 ? (
                  <tr><td colSpan={5} className="px-4 py-6 text-center text-gray-400">No entries yet. Add your first revenue entry.</td></tr>
                ) : entries.map((e) => (
                  <tr key={e.revenue_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-500">{new Date(e.visit_date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{e.patient_name}</td>
                    <td className="px-4 py-3"><span className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded-full font-medium">{e.condition_tag}</span></td>
                    <td className="px-4 py-3 font-bold text-gray-900">₹{Number(e.consultation_fee).toLocaleString("en-IN")}</td>
                    <td className="px-4 py-3 text-gray-400 truncate max-w-[120px]">{e.notes || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* By condition */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
              <TrendingUp size={15} className="text-gray-500" /> By Condition
            </h3>
            {byCondition.length === 0 ? (
              <p className="text-gray-400 text-xs text-center py-4">No data yet.</p>
            ) : byCondition.sort((a, b) => b.total - a.total).map((c) => (
              <div key={c.condition} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-900 text-xs font-medium">{c.condition}</span>
                  <span className="text-gray-900 text-xs font-bold">₹{c.total.toLocaleString("en-IN")}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-1.5">
                  <div className="bg-gray-700 h-1.5 rounded-full" style={{ width: `${(c.total / entries.reduce((s, e) => s + Number(e.consultation_fee), 0)) * 100}%` }} />
                </div>
                <p className="text-gray-400 text-[10px] mt-0.5">{c.count} patients</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="text-gray-900 font-bold text-sm mb-3 flex items-center gap-2">
              <Calendar size={15} className="text-gray-500" /> Growth
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">This month</span>
                <span className="text-gray-900 font-bold">₹{thisMonthTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last month</span>
                <span className="text-gray-900 font-bold">₹{lastMonthTotal.toLocaleString("en-IN")}</span>
              </div>
              {lastMonthTotal > 0 && (
                <div className={`flex justify-between font-bold ${thisMonthTotal >= lastMonthTotal ? "text-green-600" : "text-red-500"}`}>
                  <span>Change</span>
                  <span>{thisMonthTotal >= lastMonthTotal ? "+" : ""}{Math.round(((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100)}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
