"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Star, CheckCircle, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR, CONDITIONS, TRUST_STATS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="bg-bg-sand/20 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Hero grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left Block — Headline + Subtitle + Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase">
              Ranchi's Trusted Gastroenterologist
            </div>

            <h1 className="font-hindi text-[2.75rem] sm:text-[3.25rem] lg:text-[3.75rem] font-bold text-forest leading-[1.1] tracking-tight">
              पेट, लीवर या पाचन की<br />
              <span className="text-primary">समस्या से परेशान हैं?</span>
            </h1>

            {/* Doctor Info Subtitle Grid */}
            <div className="flex flex-col gap-2 border-l-3 border-primary/30 pl-4 py-1">
              <span className="text-forest font-display font-extrabold text-xl">{DOCTOR.name}</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted font-sans font-semibold">
                <span>DM Gastroenterologist</span>
                <span className="text-primary/35">•</span>
                <span>10+ Years</span>
                <span className="text-primary/35">•</span>
                <span>4000+ Patients</span>
                <span className="text-primary/35">•</span>
                <span>Evidence-Based Treatment</span>
              </div>
            </div>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Consult Dr. Akhilesh Yadav, Ranchi's trusted stomach doctor, liver specialist, and gastrologist (DM Gastroenterology) at Orchid Medical Centre for complete digestive care.
            </p>

            {/* Stats row redesigned (No dashboard cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {/* Card 1: Google Reviews (Stars first) */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-amber-500 font-bold text-xs tracking-tight flex gap-0.5">⭐⭐⭐⭐⭐</div>
                <div className="text-base font-display font-bold text-forest mt-1.5 leading-none">4.9 Rating</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-1.5">200+ Reviews</div>
              </div>
              {/* Card 2: Years Experience */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-2xl font-display font-bold text-primary">10+ Years</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-1.5">Experience</div>
              </div>
              {/* Card 3: Patients Served */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-2xl font-display font-bold text-primary">4000+</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-1.5">Patients Treated</div>
              </div>
              {/* Card 4: Availability */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-base font-display font-bold text-forest leading-none">Mon – Sat</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-2">Daily OPD Clinic</div>
              </div>
            </div>
          </div>

          {/* Right Block — Custom Consultation Reassuring Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-md mx-auto">
              <img
                src="/images/hero-consultation.jpg"
                alt="Dr. Akhilesh Yadav consulting a patient in a warm and bright clinic room"
                title="Dr. Akhilesh Yadav - Gastroenterology Consultation Ranchi"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Qualification badge */}
            <div className="absolute -bottom-4 -left-2 bg-white border border-border rounded-2xl px-5 py-3 shadow-xs hidden sm:block">
              <div className="text-[10px] text-muted uppercase tracking-wider font-bold font-sans">Qualification</div>
              <div className="text-primary font-display font-bold text-sm mt-0.5">DM Gastroenterology</div>
              <div className="text-muted text-[10px] font-sans mt-0.5 uppercase font-medium">MBBS · MD · DM</div>
            </div>

            {/* Availability badge */}
            <div className="absolute -top-3 -right-2 bg-white border border-border rounded-2xl px-4 py-2.5 shadow-xs">
              <div className="text-[9px] text-muted font-bold uppercase tracking-wider font-sans leading-none">Status</div>
              <div className="text-primary font-display font-bold text-xs mt-1">Available Mon – Sat</div>
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
    "Appointment Confirmation within 30 minutes",
    "No Spam Guaranteed",
    "WhatsApp Confirmation",
    "Hindi Support (हिंदी सहायता)",
  ];

  return (
    <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">

      {/* Header bar */}
      <div className="bg-primary px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-border/10">
        <h2 className="text-white font-display font-bold text-lg">Appointment Confirmation within 30 minutes</h2>
        <span className="text-white/90 font-hindi text-sm font-bold">तुरंत पुष्टि (WhatsApp & Call)</span>
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
              <label htmlFor="hero-patient-name" className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Full Name / पूरा नाम *
              </label>
              <input
                id="hero-patient-name"
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
              <label htmlFor="hero-patient-phone" className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Mobile / मोबाइल *
              </label>
              <input
                id="hero-patient-phone"
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
              <label htmlFor="hero-patient-city" className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                City / शहर *
              </label>
              <input
                id="hero-patient-city"
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
              <label htmlFor="hero-condition" className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Condition / समस्या *
              </label>
              <div className="relative">
                <select
                  id="hero-condition"
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
              <label htmlFor="hero-preferred-time" className="text-[11px] text-forest font-sans font-bold uppercase tracking-wider block">
                Time Slot / समय
              </label>
              <div className="relative">
                <select
                  id="hero-preferred-time"
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
