"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, Stethoscope, AlertCircle, CheckCircle, ArrowLeft, Mail, KeyRound, ShieldCheck } from "lucide-react";

export default function AdminLoginClient() {
  const router = useRouter();
  const [mode, setMode]                         = useState<"login" | "forgot">("login");
  const [resetTab, setResetTab]                 = useState<"direct" | "email">("direct"); // Default to direct set!
  const [email, setEmail]                       = useState("");
  const [password, setPassword]                 = useState("");
  const [newDirectPassword, setNewDirectPassword] = useState("");
  const [adminSecurityCode, setAdminSecurityCode] = useState("");
  const [serviceRoleKey, setServiceRoleKey]     = useState("");
  const [needsKeyPrompt, setNeedsKeyPrompt]     = useState(false);
  const [showPass, setShowPass]                 = useState(false);
  const [showDirectPass, setShowDirectPass]     = useState(false);
  const [loading, setLoading]                   = useState(false);
  const [error, setError]                       = useState("");
  const [resetSuccess, setResetSuccess]         = useState(false);
  const [directSuccessMessage, setDirectSuccessMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createSupabaseBrowser();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message || "Invalid credentials.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  // Option 1: Send Reset Link via Email
  async function handleSendEmailReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResetSuccess(false);

    try {
      const supabase = createSupabaseBrowser();
      const redirectUrl = `${window.location.origin}/admin/reset-password`;

      const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (resetErr) {
        setError(resetErr.message || "Failed to send password reset email.");
        setLoading(false);
        return;
      }

      setResetSuccess(true);
      setLoading(false);
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  // Option 2: Set Password Directly (No Email Verification)
  async function handleDirectPasswordReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setDirectSuccessMessage("");

    if (newDirectPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/auth/direct-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          newPassword: newDirectPassword,
          adminSecurityCode,
          serviceRoleKey: serviceRoleKey || undefined,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        if (data.needsKey) {
          setNeedsKeyPrompt(true);
        }
        setError(data.error || "Failed to update password directly.");
        setLoading(false);
        return;
      }

      setDirectSuccessMessage(data.message || "Password updated successfully! You can now sign in.");
      setPassword(newDirectPassword); // Pre-fill login password
      setLoading(false);

      // Auto switch back to login with prefilled password after 2.5 seconds
      setTimeout(() => {
        setMode("login");
        setError("");
      }, 2500);
    } catch {
      setError("Failed to connect to direct reset endpoint.");
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "#0B1120" }}
    >
      <div className="w-full max-w-sm">

        {/* Logo mark */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-500/15 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Stethoscope size={22} className="text-blue-400" />
          </div>
          <h1 className="text-white font-semibold text-lg">
            {mode === "login" ? "Admin Panel" : "Reset Password"}
          </h1>
          <p className="text-slate-500 text-sm mt-1">drakhileshgastro.com</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm">
          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-medium block">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@drakhileshgastro.com"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-white placeholder-slate-600 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-slate-400 text-xs font-medium block">Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("forgot");
                      setError("");
                      setResetSuccess(false);
                      setDirectSuccessMessage("");
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                    className="w-full px-4 py-3 pr-11 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-white placeholder-slate-600 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1 transition-colors"
                  >
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {directSuccessMessage && (
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-3 py-2.5 rounded-xl">
                  <CheckCircle size={14} className="flex-shrink-0" />
                  {directSuccessMessage}
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2.5 rounded-xl">
                  <AlertCircle size={13} className="flex-shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-colors disabled:opacity-60 mt-1"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

            </form>
          ) : (
            <div className="space-y-4">

              {/* Tabs for Reset Method */}
              <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => { setResetTab("direct"); setError(""); }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    resetTab === "direct"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <KeyRound size={13} /> Option 2: Set Directly
                </button>
                <button
                  type="button"
                  onClick={() => { setResetTab("email"); setError(""); }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    resetTab === "email"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Mail size={13} /> Option 1: Email Link
                </button>
              </div>

              {/* Direct Success Message */}
              {directSuccessMessage ? (
                <div className="space-y-4 text-center py-2">
                  <div className="w-12 h-12 bg-green-500/15 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle size={24} />
                  </div>
                  <h2 className="text-white font-semibold text-sm">Password Updated!</h2>
                  <p className="text-slate-400 text-xs">{directSuccessMessage}</p>
                  <button
                    type="button"
                    onClick={() => { setMode("login"); setError(""); }}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition-colors"
                  >
                    Click to Sign In Now
                  </button>
                </div>
              ) : resetTab === "direct" ? (
                /* OPTION 2: Set Password Directly */
                <form onSubmit={handleDirectPasswordReset} className="space-y-3.5">
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Set a new password immediately without waiting for an email verification link.
                  </p>

                  <div className="space-y-1">
                    <label className="text-slate-400 text-[11px] font-medium block">Admin Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@drakhileshgastro.com"
                      required
                      autoComplete="email"
                      className="w-full px-3.5 py-2.5 text-xs border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 text-[11px] font-medium block">Admin Security Code</label>
                    <input
                      type="text"
                      value={adminSecurityCode}
                      onChange={(e) => setAdminSecurityCode(e.target.value)}
                      placeholder="e.g. drakhilesh_cron_secret_2026"
                      required
                      className="w-full px-3.5 py-2.5 text-xs border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400 text-[11px] font-medium block">New Password</label>
                    <div className="relative">
                      <input
                        type={showDirectPass ? "text" : "password"}
                        value={newDirectPassword}
                        onChange={(e) => setNewDirectPassword(e.target.value)}
                        placeholder="Min 8 characters"
                        required
                        minLength={8}
                        className="w-full px-3.5 py-2.5 pr-10 text-xs border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowDirectPass(!showDirectPass)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                      >
                        {showDirectPass ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </div>

                  {needsKeyPrompt && (
                    <div className="space-y-1 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <label className="text-amber-300 text-[11px] font-medium block">
                        Supabase Service Role Key
                      </label>
                      <input
                        type="password"
                        value={serviceRoleKey}
                        onChange={(e) => setServiceRoleKey(e.target.value)}
                        placeholder="Paste service_role key from Supabase Dashboard"
                        className="w-full px-3 py-2 text-xs border border-amber-500/30 bg-black/40 rounded-lg text-white placeholder-slate-500 focus:outline-none"
                      />
                      <span className="text-[10px] text-amber-400/80 block mt-0.5">
                        Found in Supabase Dashboard → Settings → API → service_role secret.
                      </span>
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2.5 rounded-xl">
                      <AlertCircle size={13} className="flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !email || !newDirectPassword || !adminSecurityCode}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5 mt-2"
                  >
                    <ShieldCheck size={15} />
                    {loading ? "Updating directly..." : "Set Password Directly"}
                  </button>
                </form>
              ) : (
                /* OPTION 1: Email Reset Link */
                <div>
                  {resetSuccess ? (
                    <div className="space-y-4 text-center py-2">
                      <div className="w-12 h-12 bg-green-500/15 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto text-green-400">
                        <CheckCircle size={24} />
                      </div>
                      <h2 className="text-white font-semibold text-sm">Check Your Inbox</h2>
                      <p className="text-slate-400 text-xs">
                        We dispatched a reset link to <strong className="text-white">{email}</strong>.
                      </p>
                      <button
                        type="button"
                        onClick={() => { setMode("login"); setError(""); }}
                        className="w-full py-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl transition-colors"
                      >
                        Back to Sign In
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSendEmailReset} className="space-y-3.5">
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Sends a recovery link to your email address. Requires access to your inbox.
                      </p>

                      <div className="space-y-1">
                        <label className="text-slate-400 text-[11px] font-medium block">Registered Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="admin@drakhileshgastro.com"
                          required
                          autoComplete="email"
                          className="w-full px-3.5 py-2.5 text-xs border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-slate-600 transition-all"
                        />
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2.5 rounded-xl">
                          <AlertCircle size={13} className="flex-shrink-0" />
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading || !email}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5 mt-2"
                      >
                        <Mail size={15} />
                        {loading ? "Sending..." : "Send Reset Link via Email"}
                      </button>
                    </form>
                  )}
                </div>
              )}

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setError("");
                    setDirectSuccessMessage("");
                  }}
                  className="text-slate-500 hover:text-slate-300 text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft size={12} /> Back to Sign In
                </button>
              </div>

            </div>
          )}
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          Doctor access only ·{" "}
          <a href="/crm/login" className="text-blue-400 hover:text-blue-300 transition-colors">
            Telecaller CRM →
          </a>
        </p>

      </div>
    </div>
  );
}
