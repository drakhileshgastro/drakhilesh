"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, Stethoscope, AlertCircle, CheckCircle, ArrowLeft, Mail } from "lucide-react";

export default function AdminLoginClient() {
  const router = useRouter();
  const [mode, setMode]                 = useState<"login" | "forgot">("login");
  const [email, setEmail]               = useState("");
  const [password, setPassword]         = useState("");
  const [showPass, setShowPass]         = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

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

  async function handleForgotPassword(e: React.FormEvent) {
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
              {resetSuccess ? (
                <div className="space-y-4 text-center py-2">
                  <div className="w-12 h-12 bg-green-500/15 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle size={24} />
                  </div>
                  <h2 className="text-white font-semibold text-sm">Check Your Inbox</h2>
                  <p className="text-slate-400 text-xs">
                    We sent a password reset link to <strong className="text-white">{email}</strong>. Click the link in the email to set your new password.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setResetSuccess(false);
                      setError("");
                    }}
                    className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={14} /> Back to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Enter your registered email address and we will send you a secure link to reset your password.
                  </p>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-medium block">Registered Email</label>
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

                  {error && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2.5 rounded-xl">
                      <AlertCircle size={13} className="flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-1"
                  >
                    <Mail size={16} />
                    {loading ? "Sending link..." : "Send Reset Link"}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMode("login");
                        setError("");
                      }}
                      className="text-slate-500 hover:text-slate-300 text-xs inline-flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft size={12} /> Back to Sign In
                    </button>
                  </div>
                </form>
              )}
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
