"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Clock, MessageCircle, Navigation, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/cn";
import { DOCTOR } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  message: z.string().min(5, "Please enter your message"),
});

type FormData = z.infer<typeof schema>;

const DIRECTIONS = [
  { from: "Hazaribagh", time: "~1.5 hrs", via: "NH-33", dist: "~95 km" },
  { from: "Dhanbad", time: "~2.5 hrs", via: "NH-2", dist: "~160 km" },
  { from: "Giridih", time: "~2 hrs", via: "NH-2", dist: "~130 km" },
  { from: "Palamu", time: "~3 hrs", via: "NH-75", dist: "~185 km" },
  { from: "Bokaro", time: "~2 hrs", via: "NH-23", dist: "~130 km" },
  { from: "Jamshedpur", time: "~3 hrs", via: "NH-33", dist: "~175 km" },
  { from: "Deoghar", time: "~2.5 hrs", via: "NH-114A", dist: "~160 km" },
  { from: "Chaibasa", time: "~3 hrs", via: "NH-75", dist: "~180 km" },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name: data.name,
          patient_phone: data.phone,
          patient_city: "Enquiry",
          condition: data.message.substring(0, 100),
          source: "Website Form",
        }),
      });
      const result = await res.json();
      if (result.success) setSubmitted(true);
      else toast.error("Something went wrong. Please call us directly.");
    } catch {
      toast.error("Network error. Please call us or WhatsApp.");
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy pt-24 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10 text-center">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-muted text-sm font-hindi">कोई भी सवाल हो — call करें, WhatsApp करें, या नीचे form भरें</p>
        </div>
        <div className="h-8 bg-navy">
          <svg viewBox="0 0 1440 32" className="w-full" preserveAspectRatio="none" style={{ height: 32 }}>
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Clinic info + Map */}
            <div className="space-y-5">
              <div className="bg-navy text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">✚</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{DOCTOR.name}</p>
                    <p className="text-gray-muted text-xs">Gastroenterologist · Ranchi</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{DOCTOR.hospital}</p>
                      <p className="text-gray-muted text-xs mt-0.5">HB Road, Ranchi, Jharkhand — 834001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">OPD Timings</p>
                      <p className="text-gray-muted text-xs">Mon–Sat: 10am–2pm & 5pm–8pm</p>
                      <p className="text-gray-muted text-xs">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={15} className="text-teal flex-shrink-0" />
                    <a href={`tel:${DOCTOR.phone}`} className="text-sm font-medium hover:text-teal transition-colors">{DOCTOR.phone}</a>
                  </div>
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={`tel:${DOCTOR.phone}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-navy font-bold text-sm rounded-xl">
                    <Phone size={14} /> Call Now
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-whatsapp text-white font-bold text-sm rounded-xl">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl border border-gray-light bg-offwhite h-56 flex flex-col items-center justify-center gap-3">
                <MapPin size={28} className="text-teal" />
                <div className="text-center">
                  <p className="text-navy font-semibold text-sm">{DOCTOR.hospital}</p>
                  <p className="text-slate text-xs mt-0.5">HB Road, Ranchi, Jharkhand</p>
                </div>
                <a href={DOCTOR.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-teal text-white text-xs font-semibold rounded-lg">
                  <Navigation size={13} /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right — Contact form */}
            <div className="space-y-5">
              <div>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Send a Message</p>
                <h2 className="text-navy text-2xl font-bold mb-1">Write to Us</h2>
                <p className="text-slate text-sm font-hindi">हम 2 घंटे के अंदर reply करेंगे</p>
              </div>
              {!submitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input {...register("name")} type="text" placeholder="Your Name *"
                      className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
                        errors.name ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("phone")} type="tel" placeholder="Mobile Number *" maxLength={10}
                      className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
                        errors.phone ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <textarea {...register("message")} rows={4} placeholder="Your question or message *"
                      className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted resize-none",
                        errors.message ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60">
                    <Send size={15} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-gray-muted text-xs text-center">Our team responds within 2 hours during clinic hours</p>
                </form>
              ) : (
                <div className="bg-teal-50 border border-teal-light rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-teal" />
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-1">Message Received!</h3>
                  <p className="text-slate text-sm font-hindi">हमारी team 2 घंटे में आपसे contact करेगी।</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECTIONS ── */}
      <section className="section-pad bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">How to Reach</p>
            <h2 className="text-navy text-2xl font-bold mb-2">Directions from Major Districts</h2>
            <p className="text-slate text-sm font-hindi">झारखंड के सभी जिलों से रांची आसानी से पहुँच सकते हैं</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {DIRECTIONS.map((d) => (
              <div key={d.from} className="bg-white border border-gray-light rounded-xl px-3 py-3.5 text-center">
                <p className="text-navy font-bold text-sm leading-tight">{d.from}</p>
                <p className="text-teal text-xs font-semibold mt-1">{d.time}</p>
                <p className="text-slate text-[11px] mt-0.5">{d.via}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={DOCTOR.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold text-sm rounded-xl hover:bg-navy-dark transition-colors">
              <Navigation size={15} />
              Get Directions to Orchid Medical Centre
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
