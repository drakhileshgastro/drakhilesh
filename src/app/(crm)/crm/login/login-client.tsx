"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";

export default function CrmLoginClient() {
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
      setError(authError.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/crm");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-teal font-bold text-2xl">✚</span>
          </div>
          <h1 className="text-navy font-bold text-xl">Telecaller Portal</h1>
          <p className="text-slate text-sm mt-1">Dr. Akhilesh Gastro — CRM Login</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-light shadow-sm p-6">
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
              <label className="text-navy text-sm font-semibold block mb-1.5">Password</label>
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
        </div>

        <p className="text-center text-gray-muted text-xs mt-6">
          Staff access only · <a href="/admin/login" className="text-teal hover:underline">Doctor Admin →</a>
        </p>
      </div>
    </div>
  );
}
