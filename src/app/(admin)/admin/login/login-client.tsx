"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, ShieldCheck, AlertCircle } from "lucide-react";

export default function AdminLoginClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-teal/20 border border-teal/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={28} className="text-teal" />
          </div>
          <h1 className="text-white font-bold text-xl">Doctor Admin Panel</h1>
          <p className="text-gray-muted text-sm mt-1">drakhileshgastro.com · Restricted Access</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-gray-muted text-xs font-semibold block mb-1.5 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@drakhileshgastro.com"
                required
                autoComplete="email"
                className="w-full px-4 py-3 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 text-white placeholder-gray-muted transition-all"
              />
            </div>
            <div>
              <label className="text-gray-muted text-xs font-semibold block mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-10 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-teal text-white placeholder-gray-muted transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-white p-1 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2.5 rounded-xl">
                <AlertCircle size={14} className="flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60 min-h-[52px]"
            >
              {loading ? "Signing in..." : "Login to Admin Panel"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-muted text-xs mt-6">
          Doctor access only · <a href="/crm/login" className="text-teal hover:underline">Telecaller CRM →</a>
        </p>
      </div>
    </div>
  );
}
