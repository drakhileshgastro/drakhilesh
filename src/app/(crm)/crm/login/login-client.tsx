"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, LogIn, AlertCircle, CheckCircle, ArrowLeft, Mail } from "lucide-react";

export default function CrmLoginClient() {
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
      setError(authError.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    // Hard redirect so middleware sees the Supabase auth cookie on the server
    window.location.href = "/crm";
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
    <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-teal font-bold text-2xl">✚</span>
          </div>
          <h1 className="text-navy font-bold text-xl">
            {mode === "login" ? "Telecaller Portal" : "Reset Password"}
          </h1>
          <p className="text-slate text-sm mt-1">Dr. Akhilesh Gastro — CRM</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-light shadow-sm p-6">
          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-navy text-sm font-semibold block mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all text-navy"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-navy text-sm font-semibold block">Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("forgot");
                      setError("");
                      setResetSuccess(false);
                    }}
                    className="text-xs text-teal hover:underline font-medium"
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
                    className="w-full px-4 py-3 pr-10 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all text-navy"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-navy transition-colors p-1"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2.5 rounded-xl">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy hover:bg-navy-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60 min-h-[52px]"
              >
                <LogIn size={16} />
                {loading ? "Signing in..." : "Login to CRM"}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              {resetSuccess ? (
                <div className="space-y-4 text-center py-2">
                  <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <h2 className="text-navy font-bold text-sm">Check Your Inbox</h2>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We sent a password reset link to <strong className="text-navy">{email}</strong>. Please check your inbox and click the link to set a new password.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setResetSuccess(false);
                      setError("");
                    }}
                    className="w-full py-2.5 border border-gray-200 text-navy font-semibold text-xs rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={14} /> Back to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Enter your staff email address and we will dispatch a secure link to reset your password.
                  </p>

                  <div>
                    <label className="text-navy text-sm font-semibold block mb-1.5">Registered Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all text-navy"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2.5 rounded-xl">
                      <AlertCircle size={14} className="flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy hover:bg-navy-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60 min-h-[52px]"
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
                      className="text-gray-500 hover:text-navy text-xs inline-flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft size={12} /> Back to Sign In
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-gray-muted text-xs mt-6">
          Staff access only · <a href="/admin/login" className="text-teal hover:underline">Doctor Admin →</a>
        </p>
      </div>
    </div>
  );
}
