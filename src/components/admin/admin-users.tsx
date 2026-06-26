"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { UserPlus, Shield, User, Mail, Eye, EyeOff, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

interface StaffUser {
  id: string;
  email: string;
  role: string;
  created_at: string;
  last_sign_in_at: string | null;
}

function PasswordStrength({ password }: { password: string }) {
  const score = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*]/.test(password),
  ].filter(Boolean).length;
  const colors = ["", "bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-500"];
  return (
    <div className="flex gap-1 mt-1.5">
      {[0,1,2,3].map((i) => (
        <div key={i} className={`h-1 flex-1 rounded-full ${i < score ? colors[score] : "bg-gray-light"}`} />
      ))}
    </div>
  );
}

export default function AdminUsers() {
  const [users, setUsers] = useState<StaffUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", role: "telecaller" });
  const [showPass, setShowPass] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => { fetchUsers(); }, []);

  async function fetchUsers() {
    setLoading(true);
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(data.users ?? []);
    setLoading(false);
  }

  async function createUser() {
    if (!form.email || !form.password) return;
    if (form.password.length < 8) { setMessage({ type: "error", text: "Password must be at least 8 characters." }); return; }

    setSaving(true);
    setMessage({ type: "", text: "" });

    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (data.success) {
      setMessage({ type: "success", text: `${form.role === "doctor" ? "Doctor" : "Telecaller"} account created successfully.` });
      setForm({ email: "", password: "", role: "telecaller" });
      setShowForm(false);
      fetchUsers();
    } else {
      setMessage({ type: "error", text: data.error ?? "Failed to create user." });
    }
    setSaving(false);
  }

  async function resetPassword(userId: string, email: string) {
    const res = await fetch("/api/admin/users/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email }),
    });
    const data = await res.json();
    setMessage({ type: data.success ? "success" : "error", text: data.success ? `Password reset email sent to ${email}` : "Failed to send reset email." });
  }

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-navy font-bold text-lg">User Management</h2>
          <p className="text-slate text-xs mt-0.5">Manage doctor and telecaller login accounts</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-dark transition-colors min-h-[44px]">
          <UserPlus size={15} /> Add User
        </button>
      </div>

      {message.text && (
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm border ${message.type === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`}>
          {message.type === "success" ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
          {message.text}
        </div>
      )}

      {/* Add user form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-light p-5">
          <h3 className="text-navy font-bold text-sm mb-4">Create New Account</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 sm:col-span-1">
                <label className="text-navy text-xs font-semibold block mb-1">Email Address</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email" placeholder="email@example.com"
                  className="w-full px-3 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-navy text-xs font-semibold block mb-1">Role</label>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy">
                  <option value="telecaller">Telecaller (CRM access)</option>
                  <option value="doctor">Doctor (Admin access)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-navy text-xs font-semibold block mb-1">Password</label>
              <div className="relative">
                <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                  type={showPass ? "text" : "password"} placeholder="Min 8 characters"
                  className="w-full px-3 py-2.5 pr-10 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-navy p-1">
                  {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
              {form.password && <PasswordStrength password={form.password} />}
            </div>
            <div className="flex gap-2">
              <button onClick={createUser} disabled={saving || !form.email || !form.password}
                className="px-4 py-2.5 bg-teal text-white text-sm font-bold rounded-xl disabled:opacity-40 min-h-[44px]">
                {saving ? "Creating..." : "Create Account"}
              </button>
              <button onClick={() => setShowForm(false)}
                className="px-4 py-2.5 border border-gray-light text-slate text-sm rounded-xl hover:border-navy transition-colors min-h-[44px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users list */}
      <div className="bg-white rounded-2xl border border-gray-light overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-light flex items-center justify-between">
          <h3 className="text-navy font-bold text-sm">Current Users ({users.length})</h3>
          <button onClick={fetchUsers} className="text-gray-muted hover:text-navy transition-colors p-1">
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
        {loading ? (
          <p className="px-5 py-8 text-center text-gray-muted text-sm">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="px-5 py-8 text-center text-gray-muted text-sm">No users yet. Create your first account above.</p>
        ) : (
          <div className="divide-y divide-gray-light">
            {users.map((user) => (
              <div key={user.id} className="flex items-center gap-4 px-5 py-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${user.role === "doctor" ? "bg-teal/10" : "bg-offwhite border border-gray-light"}`}>
                  {user.role === "doctor" ? <Shield size={18} className="text-teal" /> : <User size={18} className="text-slate" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-navy font-semibold text-sm truncate">{user.email}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${user.role === "doctor" ? "bg-teal-50 text-teal" : "bg-offwhite text-slate border border-gray-light"}`}>
                      {user.role === "doctor" ? "Doctor" : "Telecaller"}
                    </span>
                  </div>
                  <p className="text-gray-muted text-xs mt-0.5">
                    Created {new Date(user.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                    {user.last_sign_in_at && ` · Last login ${new Date(user.last_sign_in_at).toLocaleDateString("en-IN")}`}
                  </p>
                </div>
                <button onClick={() => resetPassword(user.id, user.email)}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-light text-slate text-xs rounded-lg hover:border-navy hover:text-navy transition-colors flex-shrink-0">
                  <Mail size={12} /> Reset Password
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-offwhite rounded-2xl border border-gray-light p-4">
        <h3 className="text-navy font-bold text-xs mb-2">Access Guide</h3>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate">
          <div><span className="font-semibold text-navy">Doctor</span> → /admin/login — Full access: leads, revenue, blog, analytics, settings, user management</div>
          <div><span className="font-semibold text-navy">Telecaller</span> → /crm/login — Lead management, call notes, status updates, appointments only</div>
        </div>
      </div>
    </div>
  );
}
