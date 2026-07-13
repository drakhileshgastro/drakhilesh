"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Star, CheckCircle, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR, CONDITIONS, TRUST_STATS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Hero grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left Block — Headline + Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase">
              Ranchi's Trusted Gastroenterologist
            </div>

            <h1 className="font-hindi text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] font-bold text-forest leading-[1.15]">
              पेट, लीवर या पाचन की<br />
              <span className="text-primary">समस्या से परेशान हैं?</span>
            </h1>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Expert super-specialist care for stomach, liver, and digestive conditions by Dr. Akhilesh Yadav, DM Gastroenterology, at Orchid Medical Centre, Ranchi.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="bg-white border border-border rounded-2xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-[11px] sm:text-xs text-muted font-hindi mt-1 leading-normal uppercase font-semibold">{stat.labelHindi}</div>
                </div>
              ))}
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="text-muted text-sm font-sans">
                <strong>{DOCTOR.googleRating}</strong> rating from {DOCTOR.totalReviews} patients
              </span>
            </div>
          </div>

          {/* Right Block — Large Doctor Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-sm mx-auto">
              <img
                src="/dr-akhilesh-improved.png"
                alt="Dr. Akhilesh Yadav"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Qualification badge */}
            <div className="absolute -bottom-4 -left-2 bg-white border border-border rounded-2xl px-5 py-3 shadow-xs hidden sm:block">
              <div className="text-[10px] text-muted uppercase tracking-wider font-bold font-sans">Qualification</div>
              <div className="text-primary font-display font-bold text-sm mt-0.5">DM Gastroenterology</div>
              <div className="text-muted text-[10px] font-sans mt-0.5 uppercase font-medium">MBBS · MD · DM</div>
            </div>

            {/* Availability badge */}
            <div className="absolute -top-3 -right-2 bg-primary text-white border border-primary rounded-2xl px-4 py-2 shadow-xs">
              <div className="text-[9px] text-accent font-bold uppercase tracking-wider font-sans">Status</div>
              <div className="text-xs font-semibold font-sans">Available Mon – Sat</div>
            </div>
          </div>

        </div>

        {/* Horizontal Inline Booking Bar */}
        <HeroHorizontalBookingBar />

      </div>
    </section>
  );
}

const TIME_SLOTS = [
  { value: "Morning (10am–2pm)", label: "Morning (10am–2pm)" },
  { value: "Evening (5pm–8pm)", label: "Evening (5pm–8pm)" },
];

function HeroHorizontalBookingBar() {
  const [form, setForm] = useState({
    patient_name: "",
    patient_phone: "",
    patient_city: "",
    condition: "",
    preferred_time: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.patient_name || !form.patient_phone || !form.patient_city || !form.condition) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Homepage Hero Horizontal Form" }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError("Error. Please call directly.");
      }
    } catch {
      setError("Error. Please call directly.");
    }
    setLoading(false);
  };

  const checklistItems = [
    "No OTP needed",
    "Free consultation call",
    "Team calls within 2 hours",
    "Hindi speaking · हिंदी में बात करें",
  ];

  return (
    <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">

      {/* Header bar */}
      <div className="bg-primary px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-border/10">
        <h2 className="text-white font-display font-bold text-lg">Book an Appointment</h2>
        <span className="text-accent font-hindi text-sm font-semibold">हमारी team 2 घंटे में call करेगी</span>
      </div>

      {/* Form Content */}
      <div className="p-6 lg:p-8 space-y-6">
        {success ? (
          <div className="py-4 text-center space-y-3">
            <CheckCircle size={44} className="text-primary mx-auto" />
            <h3 className="text-forest font-bold text-lg font-hindi">अपॉइंटमेंट अनुरोध भेजा गया!</h3>
            <p className="text-muted text-sm font-sans">Our team will call you within 30 minutes to confirm.</p>
            <p className="text-muted text-sm font-hindi">हमारी टीम 30 मिनट में आपसे संपर्क करेगी।</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Full Name / पूरा नाम *
              </label>
              <input
                type="text"
                placeholder="Ramesh Kumar"
                required
                value={form.patient_name}
                onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
                className="w-full px-4 h-11 border border-border rounded-xl text-forest text-sm bg-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Mobile / मोबाइल *
              </label>
              <input
                type="tel"
                placeholder="98765 43210"
                required
                value={form.patient_phone}
                onChange={(e) => setForm({ ...form, patient_phone: e.target.value })}
                className="w-full px-4 h-11 border border-border rounded-xl text-forest text-sm bg-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* City */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                City / शहर *
              </label>
              <input
                type="text"
                placeholder="Hazaribagh"
                required
                value={form.patient_city}
                onChange={(e) => setForm({ ...form, patient_city: e.target.value })}
                className="w-full px-4 h-11 border border-border rounded-xl text-forest text-sm bg-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Condition Dropdown */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Condition / समस्या *
              </label>
              <div className="relative">
                <select
                  required
                  value={form.condition}
                  onChange={(e) => setForm({ ...form, condition: e.target.value })}
                  className={cn(
                    "w-full px-4 h-11 border border-border rounded-xl text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer transition-colors",
                    form.condition ? "text-forest" : "text-muted"
                  )}
                >
                  <option value="">Select Condition</option>
                  {CONDITIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Time Slot */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Time Slot / समय
              </label>
              <div className="relative">
                <select
                  value={form.preferred_time}
                  onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}
                  className={cn(
                    "w-full px-4 h-11 border border-border rounded-xl text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer transition-colors",
                    form.preferred_time ? "text-forest" : "text-muted"
                  )}
                >
                  <option value="">Any Time</option>
                  {TIME_SLOTS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-primary text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-xs"
              >
                {loading ? "Please wait..." : "Book Appointment"}
              </button>
            </div>

          </form>
        )}

        {/* Error message */}
        {error && <p className="text-red-600 text-xs font-sans mt-2">{error}</p>}

        {/* Bottom checklist row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-border/45">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-muted font-sans font-medium">
              <Check className="text-green-600 flex-shrink-0" size={14} />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
