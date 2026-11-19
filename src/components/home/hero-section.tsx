"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, ChevronDown, Check, Calendar, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR, CONDITIONS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="bg-bg-sand/20 pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Hero grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left Block — Headline + Subtitle + Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Review Trust Pill & Super-Specialty Label */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={DOCTOR.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/25 rounded-full text-amber-800 hover:bg-amber-500/15 transition-colors text-xs font-bold font-sans"
              >
                <span className="flex text-amber-500 tracking-tighter">★★★★★</span>
                <span>4.9 Rating</span>
                <span className="text-amber-400">•</span>
                <span className="text-amber-700 font-medium">500+ Verified Consultations</span>
              </a>
              <span className="text-muted text-xs hidden sm:inline">•</span>
              <div className="text-primary font-display text-xs font-bold tracking-wider uppercase">
                Ranchi · DM Gastroenterologist
              </div>
            </div>

            <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold text-forest leading-[1.15] tracking-tight">
              Dr. Akhilesh Yadav<br />
              <span className="text-primary">— Gastroenterologist in Ranchi</span>
            </h1>
            <p className="font-hindi text-2xl sm:text-3xl text-forest/80 font-semibold leading-snug -mt-2">
              पेट, लीवर और पाचन रोग विशेषज्ञ
            </p>

            {/* Doctor Info Subtitle Grid */}
            <div className="flex flex-col gap-2 border-l-3 border-primary/30 pl-4 py-1">
              <span className="text-forest font-display font-extrabold text-xl">{DOCTOR.name}</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted font-sans font-semibold">
                <span>DM Gastroenterologist</span>
                <span className="text-primary/35">•</span>
                <span>Orchid Medical Centre</span>
                <span className="text-primary/35">•</span>
                <span>Hindi Consultation</span>
                <span className="text-primary/35">•</span>
                <span>Evidence-Based Treatment</span>
              </div>
            </div>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Consult Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi — DM Gastroenterologist & Hepatologist specialising in liver disease, fatty liver, endoscopy, and all digestive conditions.
            </p>

            {/* Stats row redesigned with Google Reviews and DM credentials */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {/* Card 1: Google Reviews */}
              <a
                href={DOCTOR.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center hover:border-amber-300 transition-colors"
              >
                <div className="text-amber-500 font-bold text-xs tracking-tight flex gap-0.5">★★★★★ 4.9</div>
                <div className="text-base font-display font-bold text-forest mt-1.5 leading-none">Google Reviews</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-1.5">Verified Patients</div>
              </a>
              {/* Card 2: Qualification */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-2xl font-display font-bold text-primary">DM</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-1.5">Gastroenterology</div>
              </div>
              {/* Card 3: Consultation */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-2xl font-display font-bold text-primary">Hindi</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-1.5">Consultation</div>
              </div>
              {/* Card 4: Daily OPD */}
              <div className="bg-white border border-border/50 rounded-2xl p-4 shadow-xs text-center flex flex-col justify-center items-center">
                <div className="text-base font-display font-bold text-forest leading-none">Mon – Sat</div>
                <div className="text-[10px] text-muted font-sans font-semibold uppercase tracking-wider mt-2">Daily OPD Clinic</div>
              </div>
            </div>
          </div>

          {/* Right Block — Custom Consultation Reassuring Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-md mx-auto">
              <Image
                src="/dr-akhilesh-improved.png"
                alt="Dr. Akhilesh Yadav — DM Gastroenterology"
                title="Dr. Akhilesh Yadav - Gastroenterology Consultation Ranchi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 448px"
                className="object-cover object-center"
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

        {/* Horizontal Inline Booking Bar (Desktop) & Streamlined Drawer (Mobile) */}
        <HeroHorizontalBookingBar />

      </div>
    </section>
  );
}

const MORNING_SLOTS = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];
const EVENING_SLOTS = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"];

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
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

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
    "Privacy and Contact Preferences",
    "WhatsApp Confirmation",
    "Hindi Support (हिंदी सहायता)",
  ];

  return (
    <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">

      {/* Header bar */}
      <div className="bg-primary px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-border/10">
        <h2 className="text-white font-display font-bold text-base sm:text-lg">
          Appointment Confirmation within 30 minutes
        </h2>
        <span className="text-white/90 font-hindi text-sm font-bold">
          तुरंत पुष्टि (WhatsApp & Call)
        </span>
      </div>

      {/* ─── MOBILE VIEW (< 768px): Streamlined 2-CTA Quick Booking Card ─── */}
      <div className="block md:hidden p-5 space-y-4">
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => { setMobileSheetOpen(true); setSuccess(false); setError(""); }}
            className="flex items-center justify-center gap-2 py-3 px-3 bg-primary text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs active:bg-primary-dark transition-colors min-h-[48px]"
          >
            <Calendar size={15} /> Book OPD Slot
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs active:bg-[#20ba5a] transition-colors min-h-[48px]"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>

        {/* Quick Trust Highlights on Mobile */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40 text-[11px] text-muted font-sans font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="text-green-600 flex-shrink-0" size={13} />
            <span>30-Min Call Confirmation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="text-green-600 flex-shrink-0" size={13} />
            <span>हिंदी परामर्श सहायता</span>
          </div>
        </div>
      </div>

      {/* ─── DESKTOP VIEW (>= 768px): Full 6-Column Horizontal Inline Bar ─── */}
      <div className="hidden md:block p-6 lg:p-8 space-y-6">
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
                placeholder="Hazaribagh / Ranchi"
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
                  <optgroup label="Morning OPD (10am–2pm)">
                    {MORNING_SLOTS.map((s) => (
                      <option key={s} value={`Morning – ${s}`}>{s}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Evening OPD (5pm–8pm)">
                    {EVENING_SLOTS.map((s) => (
                      <option key={s} value={`Evening – ${s}`}>{s}</option>
                    ))}
                  </optgroup>
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

      {/* ─── MOBILE MODAL / BOTTOM SHEET FOR APPOINTMENT ─── */}
      {mobileSheetOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl border border-border shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white px-5 py-4 border-b border-border flex items-center justify-between z-10">
              <div>
                <h3 className="text-forest font-display font-bold text-base">Book OPD Appointment</h3>
                <p className="text-muted text-xs font-sans">Dr. Akhilesh Yadav · Orchid Medical Centre</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5">
              {success ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle size={44} className="text-primary mx-auto" />
                  <h3 className="text-forest font-bold text-lg font-hindi">अपॉइंटमेंट अनुरोध भेजा गया!</h3>
                  <p className="text-muted text-sm font-sans">Our team will call you within 30 minutes to confirm.</p>
                  <p className="text-muted text-sm font-hindi">हमारी टीम 30 मिनट में आपसे संपर्क करेगी।</p>
                  <button
                    type="button"
                    onClick={() => { setMobileSheetOpen(false); setSuccess(false); }}
                    className="w-full py-3 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl mt-4"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-forest font-bold uppercase tracking-wider block">
                      Full Name / पूरा नाम *
                    </label>
                    <input
                      type="text"
                      placeholder="Ramesh Kumar"
                      required
                      value={form.patient_name}
                      onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
                      className="w-full px-3.5 h-10 border border-border rounded-xl text-forest text-sm bg-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-forest font-bold uppercase tracking-wider block">
                      Mobile / मोबाइल *
                    </label>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      required
                      value={form.patient_phone}
                      onChange={(e) => setForm({ ...form, patient_phone: e.target.value })}
                      className="w-full px-3.5 h-10 border border-border rounded-xl text-forest text-sm bg-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-forest font-bold uppercase tracking-wider block">
                      City / शहर *
                    </label>
                    <input
                      type="text"
                      placeholder="Ranchi / Dhanbad / Bokaro"
                      required
                      value={form.patient_city}
                      onChange={(e) => setForm({ ...form, patient_city: e.target.value })}
                      className="w-full px-3.5 h-10 border border-border rounded-xl text-forest text-sm bg-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Condition Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-forest font-bold uppercase tracking-wider block">
                      Condition / समस्या *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.condition}
                        onChange={(e) => setForm({ ...form, condition: e.target.value })}
                        className="w-full px-3.5 h-10 border border-border rounded-xl text-sm bg-white text-forest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                      >
                        <option value="">Select Condition</option>
                        {CONDITIONS.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-1">
                    <label className="text-[11px] text-forest font-bold uppercase tracking-wider block">
                      Preferred Time Slot / समय
                    </label>
                    <div className="relative">
                      <select
                        value={form.preferred_time}
                        onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}
                        className="w-full px-3.5 h-10 border border-border rounded-xl text-sm bg-white text-forest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
                      >
                        <option value="">Any Time</option>
                        <optgroup label="Morning OPD (10am–2pm)">
                          {MORNING_SLOTS.map((s) => (
                            <option key={s} value={`Morning – ${s}`}>{s}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Evening OPD (5pm–8pm)">
                          {EVENING_SLOTS.map((s) => (
                            <option key={s} value={`Evening – ${s}`}>{s}</option>
                          ))}
                        </optgroup>
                      </select>
                      <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                    </div>
                  </div>

                  {error && <p className="text-red-600 text-xs font-sans">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-primary text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 cursor-pointer shadow-xs mt-2"
                  >
                    {loading ? "Submitting..." : "Confirm Appointment Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
