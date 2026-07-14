"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, Stethoscope, AlertCircle } from "lucide-react";

export default function AdminLoginClient() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

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
          <h1 className="text-white font-semibold text-lg">Admin Panel</h1>
          <p className="text-slate-500 text-sm mt-1">drakhileshgastro.com</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm">
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
              <label className="text-slate-400 text-xs font-medium block">Password</label>
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
