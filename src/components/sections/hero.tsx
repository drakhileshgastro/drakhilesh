"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, CheckCircle, Star, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/cn";
import { DOCTOR, CONDITIONS } from "@/lib/constants";

const schema = z.object({
  patient_name: z.string().min(2, "Please enter your name"),
  patient_phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  patient_city: z.string().min(2, "Please enter your city or district"),
  condition: z.string().min(1, "Please select a condition"),
  preferred_date: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "Website Form" }),
      });
      const result = await res.json();
      if (result.success) {
        setLeadId(result.lead_id || "REQ-" + Date.now().toString(36).toUpperCase());
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please call us directly.");
      }
    } catch {
      toast.error("Network error. Please call us or WhatsApp.");
    }
  }

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <section className="relative bg-navy overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal/5 rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-teal text-xs font-semibold tracking-wider uppercase">
                Gastroenterologist · Ranchi
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Best{" "}
              <span className="text-teal">Gastroenterologist</span>
              <br className="hidden sm:block" /> in Ranchi
            </h1>

            {/* Hindi subtitle */}
            <p className="text-gray-muted text-base font-hindi leading-relaxed mb-2">
              लिवर, पेट और पाचन की हर बीमारी का विशेषज्ञ उपचार
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md">
              {DOCTOR.name} — {DOCTOR.qualification} at {DOCTOR.hospital}. Trusted by
              patients across Jharkhand, Bihar & Chhattisgarh.
            </p>

            {/* Star rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4.9</span>
              <span className="text-gray-muted text-sm">· 200+ Google reviews</span>
            </div>

            {/* Mobile CTAs */}
            <div className="flex flex-wrap gap-3 lg:hidden mb-6">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-2 px-5 py-3 bg-white text-navy font-bold text-sm rounded-xl"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-whatsapp text-white font-bold text-sm rounded-xl"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-2">
              {["DM Gastroenterology", "Orchid Medical Centre", "10+ Years", "Hindi Speaking"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1 bg-white/10 text-gray-muted text-xs px-3 py-1.5 rounded-full border border-white/10"
                >
                  <CheckCircle size={11} className="text-teal" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Booking Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Form header */}
              <div className="bg-teal px-5 py-4">
                <p className="text-white font-bold text-base">Book an Appointment</p>
                <p className="text-teal-light text-xs font-hindi mt-0.5">
                  हमारी team 2 घंटे में call करेगी
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-3">
                  {/* Name */}
                  <div>
                    <input
                      {...register("patient_name")}
                      type="text"
                      placeholder="Full Name / पूरा नाम *"
                      className={cn(
                        "w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
                        errors.patient_name ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite"
                      )}
                    />
                    {errors.patient_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.patient_name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      {...register("patient_phone")}
                      type="tel"
                      placeholder="Mobile Number / मोबाइल नंबर *"
                      maxLength={10}
                      className={cn(
                        "w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
                        errors.patient_phone ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite"
                      )}
                    />
                    {errors.patient_phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.patient_phone.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <input
                      {...register("patient_city")}
                      type="text"
                      placeholder="City / District / शहर *"
                      className={cn(
                        "w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
                        errors.patient_city ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite"
                      )}
                    />
                    {errors.patient_city && (
                      <p className="text-red-500 text-xs mt-1">{errors.patient_city.message}</p>
                    )}
                  </div>

                  {/* Condition */}
                  <div>
                    <select
                      {...register("condition")}
                      className={cn(
                        "w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy appearance-none bg-no-repeat",
                        errors.condition ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite",
                      )}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundPosition: 'right 12px center' }}
                    >
                      <option value="">Select Condition / समस्या चुनें *</option>
                      {CONDITIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.condition && (
                      <p className="text-red-500 text-xs mt-1">{errors.condition.message}</p>
                    )}
                  </div>

                  {/* Preferred Date (optional) */}
                  <div>
                    <input
                      {...register("preferred_date")}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal transition-colors text-navy"
                    />
                    <p className="text-gray-muted text-xs mt-1">Preferred date (optional / वैकल्पिक)</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60 shadow-sm"
                  >
                    {isSubmitting ? "Submitting..." : "Request Appointment →"}
                  </button>

                  <p className="text-gray-muted text-xs text-center">
                    No OTP · No waiting · Our team calls within 2 hours
                  </p>
                </form>
              ) : (
                /* Success state */
                <div className="p-6 text-center">
                  <div className="w-14 h-14 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-teal" />
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-1">Request Received!</h3>
                  <p className="text-slate text-sm mb-3 font-hindi">
                    हमारी team 2 घंटे में आपको call करेगी।
                  </p>
                  <div className="bg-offwhite rounded-xl px-4 py-3 mb-4">
                    <p className="text-xs text-gray-muted mb-1">Your Request ID</p>
                    <p className="text-navy font-bold text-sm font-mono">{leadId}</p>
                  </div>
                  <p className="text-slate text-xs mb-4">
                    Save this ID — our team will reference it during your call.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-white text-sm font-semibold rounded-xl"
                  >
                    <MessageCircle size={16} />
                    Also WhatsApp us
                  </a>
                </div>
              )}
            </div>

            {/* Below form — clinic info */}
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-muted">
              <span className="flex items-center gap-1">
                <span className="text-teal">✓</span> Free consultation call
              </span>
              <span className="flex items-center gap-1">
                <span className="text-teal">✓</span> Mon–Sat available
              </span>
              <span className="flex items-center gap-1">
                <span className="text-teal">✓</span> Hindi speaking
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-10 bg-navy">
        <svg viewBox="0 0 1440 40" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 L1440,40 L1440,0 Q720,40 0,0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
