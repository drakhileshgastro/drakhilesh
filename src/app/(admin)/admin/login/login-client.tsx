"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) { setError("Invalid credentials."); setLoading(false); return; }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={28} className="text-teal" />
          </div>
          <h1 className="text-white font-bold text-xl">Admin Login</h1>
          <p className="text-gray-muted text-sm mt-1">Doctor Control Panel</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-gray-muted text-xs font-semibold block mb-1.5">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@email.com" required
                className="w-full px-4 py-3 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-teal text-white placeholder-gray-muted"
              />
            </div>
            <div>
              <label className="text-gray-muted text-xs font-semibold block mb-1.5">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" required
                  className="w-full px-4 py-3 pr-10 text-sm border border-white/10 bg-white/5 rounded-xl focus:outline-none focus:border-teal text-white placeholder-gray-muted"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-white">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60 min-h-[48px]">
              {loading ? "Logging in..." : "Login to Admin Panel"}
            </button>
          </form>
        </div>
        <p className="text-center text-gray-muted text-xs mt-6">Doctor access only · Scalify Labs</p>
      </div>
    </div>
  );
}
