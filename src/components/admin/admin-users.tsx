"use client";

import { useEffect, useState } from "react";
import { UserPlus, Shield, User, Mail, Eye, EyeOff, CheckCircle, AlertCircle, RefreshCw, KeyRound, X } from "lucide-react";

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
        <div key={i} className={`h-1 flex-1 rounded-full ${i < score ? colors[score] : "bg-gray-200"}`} />
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

  // Reset password states
  const [resetModalUser, setResetModalUser] = useState<StaffUser | null>(null);
  const [directPassword, setDirectPassword] = useState("");
  const [showDirectPass, setShowDirectPass] = useState(false);
  const [resetting, setResetting] = useState(false);

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

  async function sendResetEmail(userId: string, email: string) {
    setResetting(true);
    const res = await fetch("/api/admin/users/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email }),
    });
    const data = await res.json();
    setMessage({
      type: data.success ? "success" : "error",
      text: data.success ? `Password reset link sent to ${email}` : (data.error ?? "Failed to send reset email.")
    });
    setResetting(false);
    setResetModalUser(null);
  }

  async function setPasswordDirectly(userId: string, email: string) {
    if (!directPassword || directPassword.length < 8) {
      setMessage({ type: "error", text: "New password must be at least 8 characters." });
      return;
    }

    setResetting(true);
    const res = await fetch("/api/admin/users/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email, newPassword: directPassword }),
    });
    const data = await res.json();

    if (data.success) {
      setMessage({ type: "success", text: `Password for ${email} has been updated successfully.` });
      setDirectPassword("");
      setResetModalUser(null);
    } else {
      setMessage({ type: "error", text: data.error ?? "Failed to update password directly." });
    }
    setResetting(false);
  }

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 font-bold text-lg">User Management</h2>
          <p className="text-gray-500 text-xs mt-0.5">Manage doctor and telecaller login accounts</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors min-h-[44px]">
          <UserPlus size={15} /> Add User
        </button>
      </div>

      {message.text && (
        <div className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm border ${message.type === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`}>
          {message.type === "success" ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
          {message.text}
        </div>
      )}

      {/* Reset Password Modal / Card */}
      {resetModalUser && (
        <div className="bg-blue-50/50 rounded-2xl border border-blue-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <KeyRound size={16} />
              Reset Password for {resetModalUser.email}
            </div>
            <button
              onClick={() => { setResetModalUser(null); setDirectPassword(""); }}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Option A: Send reset email */}
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-gray-900 font-semibold text-xs flex items-center gap-1.5">
                  <Mail size={13} className="text-blue-600" /> Option 1: Send Reset Link
                </h4>
                <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">
                  Sends an automated Supabase password reset email with a secure link to {resetModalUser.email}.
                </p>
              </div>
              <button
                onClick={() => sendResetEmail(resetModalUser.id, resetModalUser.email)}
                disabled={resetting}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {resetting ? "Dispatching..." : "Send Reset Email"}
              </button>
            </div>

            {/* Option B: Set password directly */}
            <div className="bg-white p-4 rounded-xl border border-blue-100 space-y-3">
              <div>
                <h4 className="text-gray-900 font-semibold text-xs flex items-center gap-1.5">
                  <KeyRound size={13} className="text-green-600" /> Option 2: Set Password Directly
                </h4>
                <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">
                  Directly sets a new password in Supabase without requiring email verification.
                </p>
              </div>
              <div className="relative">
                <input
                  type={showDirectPass ? "text" : "password"}
                  value={directPassword}
                  onChange={(e) => setDirectPassword(e.target.value)}
                  placeholder="New password (min 8 chars)"
                  className="w-full px-3 py-1.5 pr-8 text-xs border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowDirectPass(!showDirectPass)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showDirectPass ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              </div>
              <button
                onClick={() => setPasswordDirectly(resetModalUser.id, resetModalUser.email)}
                disabled={resetting || directPassword.length < 8}
                className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {resetting ? "Updating..." : "Update Password Directly"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add user form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 className="text-gray-900 font-bold text-sm mb-4">Create New Account</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 sm:col-span-1">
                <label className="text-gray-900 text-xs font-semibold block mb-1">Email Address</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email" placeholder="email@example.com"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-gray-400 text-gray-900" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="text-gray-900 text-xs font-semibold block mb-1">Role</label>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-gray-400 text-gray-900">
                  <option value="telecaller">Telecaller (CRM access)</option>
                  <option value="doctor">Doctor (Admin access)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-gray-900 text-xs font-semibold block mb-1">Password</label>
              <div className="relative">
                <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                  type={showPass ? "text" : "password"} placeholder="Min 8 characters"
                  className="w-full px-3 py-2.5 pr-10 text-sm border border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:border-gray-400 text-gray-900" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 p-1">
                  {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
              {form.password && <PasswordStrength password={form.password} />}
            </div>
            <div className="flex gap-2">
              <button onClick={createUser} disabled={saving || !form.email || !form.password}
                className="px-4 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl disabled:opacity-40 hover:bg-gray-800 transition-colors min-h-[44px]">
                {saving ? "Creating..." : "Create Account"}
              </button>
              <button onClick={() => setShowForm(false)}
                className="px-4 py-2.5 border border-gray-200 text-gray-500 text-sm rounded-xl hover:border-gray-700 transition-colors min-h-[44px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users list */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-gray-900 font-bold text-sm">Current Users ({users.length})</h3>
          <button onClick={fetchUsers} className="text-gray-400 hover:text-gray-900 transition-colors p-1">
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
        {loading ? (
          <p className="px-5 py-8 text-center text-gray-400 text-sm">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="px-5 py-8 text-center text-gray-400 text-sm">No users yet. Create your first account above.</p>
        ) : (
          <div className="divide-y divide-gray-100">
            {users.map((user) => (
              <div key={user.id} className="flex items-center gap-4 px-5 py-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${user.role === "doctor" ? "bg-gray-100" : "bg-gray-50 border border-gray-200"}`}>
                  {user.role === "doctor" ? <Shield size={18} className="text-gray-700" /> : <User size={18} className="text-gray-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 font-semibold text-sm truncate">{user.email}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${user.role === "doctor" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500 border border-gray-200"}`}>
                      {user.role === "doctor" ? "Doctor" : "Telecaller"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Created {new Date(user.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                    {user.last_sign_in_at && ` · Last login ${new Date(user.last_sign_in_at).toLocaleDateString("en-IN")}`}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setResetModalUser(user);
                    setDirectPassword("");
                    setMessage({ type: "", text: "" });
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-600 text-xs font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors flex-shrink-0"
                >
                  <KeyRound size={12} /> Reset Password
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4">
        <h3 className="text-gray-900 font-bold text-xs mb-2">Access Guide</h3>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
          <div><span className="font-semibold text-gray-900">Doctor</span> → /admin/login — Full access: leads, revenue, blog, analytics, settings, user management</div>
          <div><span className="font-semibold text-gray-900">Telecaller</span> → /crm/login — Lead management, call notes, status updates, appointments only</div>
        </div>
      </div>
    </div>
  );
}
