"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, Lock, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";

export default function ResetPasswordClient() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [sessionActive, setSessionActive] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createSupabaseBrowser();

    // Check if recovery session is active
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessionActive(Boolean(session));
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || session) {
        setSessionActive(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handlePasswordReset(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createSupabaseBrowser();
      const { error: updateError } = await supabase.auth.updateUser({ password });

      if (updateError) {
        setError(updateError.message || "Failed to update password. Link may have expired.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        router.push("/admin/login");
      }, 3000);
    } catch {
      setError("An unexpected error occurred. Please request a new reset link.");
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
            <Lock size={22} className="text-blue-400" />
          </div>
          <h1 className="text-white font-semibold text-lg">Reset Password</h1>
          <p className="text-slate-500 text-sm mt-1">drakhileshgastro.com</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm">
          {success ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-green-500/15 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto text-green-400">
                <CheckCircle size={24} />
              </div>
              <h2 className="text-white font-semibold text-base">Password Updated!</h2>
              <p className="text-slate-400 text-xs">
                Your new password is now active. Redirecting you to login in 3 seconds...
              </p>
              <button
                onClick={() => router.push("/admin/login")}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                Go to Sign In Now
              </button>
            </div>
          ) : sessionActive === false ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-red-500/15 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto text-red-400">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-white font-semibold text-base">Invalid or Expired Link</h2>
              <p className="text-slate-400 text-xs">
                This password reset link is invalid or has expired. Please request a new link from the login page.
              </p>
              <button
                onClick={() => router.push("/admin/login")}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                <ArrowLeft size={14} /> Back to Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-medium block">New Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 8 characters"
                    required
                    minLength={8}
                    autoComplete="new-password"
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

              <div className="space-y-1.5">
                <label className="text-slate-400 text-xs font-medium block">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="w-full px-4 py-3 pr-11 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 text-white placeholder-slate-600 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1 transition-colors"
                  >
                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
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
                {loading ? "Updating Password..." : "Set New Password"}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => router.push("/admin/login")}
                  className="text-slate-500 hover:text-slate-300 text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft size={12} /> Back to Sign In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

