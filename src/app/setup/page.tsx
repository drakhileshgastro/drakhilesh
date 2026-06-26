"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { ShieldCheck, CheckCircle, AlertCircle, Eye, EyeOff } from "lucide-react";

const SETUP_KEY = "scalify2026";

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "At least 8 characters", pass: password.length >= 8 },
    { label: "Uppercase letter", pass: /[A-Z]/.test(password) },
    { label: "Number", pass: /\d/.test(password) },
    { label: "Special character (!@#$...)", pass: /[!@#$%^&*]/.test(password) },
  ];
  const score = checks.filter((c) => c.pass).length;
  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-500", "bg-green-600"];

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < score ? colors[score] : "bg-gray-light"}`} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1">
        {checks.map((c) => (
          <div key={c.label} className={`flex items-center gap-1 text-[10px] ${c.pass ? "text-green-600" : "text-gray-muted"}`}>
            <CheckCircle size={10} className={c.pass ? "text-green-600" : "text-gray-light"} />
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SetupPage() {
  const router = useRouter();
  const [setupKey, setSetupKey] = useState("");
  const [keyVerified, setKeyVerified] = useState(false);
  const [doctor, setDoctor] = useState({ email: "doctor@drakhileshgastro.com", password: "", confirm: "" });
  const [telecaller, setTelecaller] = useState({ email: "telecaller@drakhileshgastro.com", password: "", confirm: "" });
  const [showPass, setShowPass] = useState({ doctor: false, telecaller: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [results, setResults] = useState<{ doctor: string; telecaller: string }>({ doctor: "", telecaller: "" });

  function verifyKey() {
    if (setupKey.trim() === SETUP_KEY) {
      setKeyVerified(true);
      setError("");
    } else {
      setError("Invalid setup key. Contact Scalify Labs.");
    }
  }

  function isPasswordStrong(password: string) {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password);
  }

  async function createAccounts() {
    setError("");

    if (doctor.password !== doctor.confirm) { setError("Doctor passwords don't match."); return; }
    if (telecaller.password !== telecaller.confirm) { setError("Telecaller passwords don't match."); return; }
    if (!isPasswordStrong(doctor.password)) { setError("Doctor password is too weak. Follow the requirements."); return; }
    if (!isPasswordStrong(telecaller.password)) { setError("Telecaller password is too weak. Follow the requirements."); return; }

    setLoading(true);
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const results = { doctor: "", telecaller: "" };

    // Create doctor account
    const { error: docError } = await supabase.auth.signUp({
      email: doctor.email,
      password: doctor.password,
      options: { data: { role: "doctor", name: "Dr. Akhilesh Yadav" } },
    });
    results.doctor = docError ? `Failed: ${docError.message}` : "Created ✓";

    // Create telecaller account
    const { error: tcError } = await supabase.auth.signUp({
      email: telecaller.email,
      password: telecaller.password,
      options: { data: { role: "telecaller", name: "Telecaller" } },
    });
    results.telecaller = tcError ? `Failed: ${tcError.message}` : "Created ✓";

    setResults(results);
    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-light shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="text-navy font-bold text-xl mb-2">Setup Complete!</h2>
          <p className="text-slate text-sm mb-6">Your accounts have been created. Check your email to confirm if required by Supabase settings.</p>
          <div className="bg-offwhite rounded-xl p-4 text-left mb-5 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-muted">Doctor account</span>
              <span className={results.doctor.includes("✓") ? "text-green-600 font-semibold" : "text-red-500"}>{results.doctor}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-muted">Telecaller account</span>
              <span className={results.telecaller.includes("✓") ? "text-green-600 font-semibold" : "text-red-500"}>{results.telecaller}</span>
            </div>
          </div>
          <p className="text-xs text-gray-muted mb-4">⚠️ Important: Go to Supabase Dashboard → Authentication → Email → Disable "Confirm email" if users can't login after this.</p>
          <div className="flex gap-3">
            <button onClick={() => router.push("/admin/login")}
              className="flex-1 py-3 bg-navy text-white font-bold text-sm rounded-xl hover:bg-navy-dark transition-colors">
              Doctor Login →
            </button>
            <button onClick={() => router.push("/crm/login")}
              className="flex-1 py-3 border border-gray-light text-slate font-semibold text-sm rounded-xl hover:border-navy transition-colors">
              Staff Login →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-teal/20 border border-teal/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={28} className="text-teal" />
          </div>
          <h1 className="text-white font-bold text-2xl">First-Time Setup</h1>
          <p className="text-gray-muted text-sm mt-1">Create admin and telecaller accounts for drakhileshgastro.com</p>
        </div>

        {!keyVerified ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-bold text-base mb-4">Enter Setup Key</h2>
            <p className="text-gray-muted text-xs mb-4">This key protects the setup page from unauthorized access. Get it from Scalify Labs.</p>
            <input value={setupKey} onChange={(e) => setSetupKey(e.target.value)}
              type="password" placeholder="Enter setup key..."
              className="w-full px-4 py-3 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal mb-3"
            />
            {error && <p className="text-red-400 text-xs mb-3 flex items-center gap-1"><AlertCircle size={12} />{error}</p>}
            <button onClick={verifyKey}
              className="w-full py-3 bg-teal text-white font-bold text-sm rounded-xl hover:bg-teal-dark transition-colors">
              Verify Key →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Doctor account */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-teal/20 rounded-lg flex items-center justify-center">
                  <ShieldCheck size={14} className="text-teal" />
                </div>
                <h3 className="text-white font-bold text-sm">Doctor Account (Admin Panel)</h3>
              </div>
              <div className="space-y-3">
                <input value={doctor.email} onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
                  type="email" placeholder="Doctor email"
                  className="w-full px-3 py-2.5 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal" />
                <div className="relative">
                  <input value={doctor.password} onChange={(e) => setDoctor({ ...doctor, password: e.target.value })}
                    type={showPass.doctor ? "text" : "password"} placeholder="Strong password (min 8 chars)"
                    className="w-full px-3 py-2.5 pr-10 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal" />
                  <button type="button" onClick={() => setShowPass({ ...showPass, doctor: !showPass.doctor })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-white p-1">
                    {showPass.doctor ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {doctor.password && <PasswordStrength password={doctor.password} />}
                <input value={doctor.confirm} onChange={(e) => setDoctor({ ...doctor, confirm: e.target.value })}
                  type="password" placeholder="Confirm password"
                  className="w-full px-3 py-2.5 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal" />
              </div>
            </div>

            {/* Telecaller account */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gold-light/20 rounded-lg flex items-center justify-center">
                  <CheckCircle size={14} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-sm">Telecaller Account (CRM)</h3>
              </div>
              <div className="space-y-3">
                <input value={telecaller.email} onChange={(e) => setTelecaller({ ...telecaller, email: e.target.value })}
                  type="email" placeholder="Telecaller email"
                  className="w-full px-3 py-2.5 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal" />
                <div className="relative">
                  <input value={telecaller.password} onChange={(e) => setTelecaller({ ...telecaller, password: e.target.value })}
                    type={showPass.telecaller ? "text" : "password"} placeholder="Strong password"
                    className="w-full px-3 py-2.5 pr-10 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal" />
                  <button type="button" onClick={() => setShowPass({ ...showPass, telecaller: !showPass.telecaller })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-white p-1">
                    {showPass.telecaller ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {telecaller.password && <PasswordStrength password={telecaller.password} />}
                <input value={telecaller.confirm} onChange={(e) => setTelecaller({ ...telecaller, confirm: e.target.value })}
                  type="password" placeholder="Confirm password"
                  className="w-full px-3 py-2.5 text-sm border border-white/10 bg-white/5 rounded-xl text-white placeholder-gray-muted focus:outline-none focus:border-teal" />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2.5 rounded-xl">
                <AlertCircle size={14} className="flex-shrink-0" />{error}
              </div>
            )}

            <button onClick={createAccounts} disabled={loading}
              className="w-full py-4 bg-teal hover:bg-teal-dark text-white font-bold text-base rounded-xl transition-colors disabled:opacity-60">
              {loading ? "Creating accounts..." : "Create Both Accounts →"}
            </button>
            <p className="text-center text-gray-muted text-xs">
              This page should be deleted or disabled after first use.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
