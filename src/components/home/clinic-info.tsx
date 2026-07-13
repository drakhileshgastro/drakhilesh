"use client";

import Link from "next/link";
import { MapPin, Clock, Phone, Car, Accessibility, MessageCircle, ShieldCheck, Search, Building2, Activity } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const timings = [
  { day: "Monday – Saturday", morning: "10:00 AM – 2:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Sunday", morning: "By Appointment Only", evening: "Emergency Only" },
];

const accessibilityDetails = [
  { icon: Car, label: "Dedicated Patient Parking" },
  { icon: Accessibility, label: "Wheelchair Accessible Entrance" },
  { icon: Building2, label: "Modern Lift / Elevator Available" },
  { icon: MapPin, label: "Landmark: Near Plaza Chowk" },
];

const facilities = [
  { icon: ShieldCheck, label: "Advanced Endoscopy Suite" },
  { icon: Search, label: "EUS Ultrasound" },
  { icon: Building2, label: "Consultation Rooms" },
  { icon: Activity, label: "In-house Lab & Diagnostics" },
];

export default function ClinicInfo() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent("Namaskar, mujhe clinic directions chahiye")}`;

  return (
    <section className="bg-bg-sand py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Visit Our Clinic
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-2 leading-tight">
            क्लीनिक और अस्पताल की जानकारी
          </h2>
          <p className="font-sans text-muted text-base leading-relaxed">
            Orchid Medical Centre — HB Road, Ranchi, Jharkhand — 834001
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Real Google Map Embed */}
          <div className="space-y-4">
            <div className="aspect-[4/3] border border-border bg-white rounded-3xl overflow-hidden shadow-sm relative">
              <iframe
                title="Orchid Medical Centre Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.3384218844837!2d85.33405787602334!3d23.376008602758197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e13dc7381be7%3A0xc3cf02130ff2c918!2sOrchid%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex justify-center">
              <a
                href={DOCTOR.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-semibold text-sm rounded-xl shadow-sm hover:bg-primary-dark transition-colors min-h-[44px]"
              >
                <MapPin size={14} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Info column */}
          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-2">Address &amp; Landmark</p>
                <p className="text-muted text-sm leading-relaxed">
                  <strong>{DOCTOR.hospital}</strong><br />
                  HB Road, Opposite Plaza Cinema, Plaza Chowk,<br />
                  Ranchi, Jharkhand — 834001
                </p>
                <a
                  href={DOCTOR.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs font-bold uppercase tracking-wider mt-3 inline-block hover:text-primary-dark font-sans"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-3">OPD Timings</p>
                {timings.map((t) => (
                  <div key={t.day} className="flex justify-between py-2 border-b border-border-light last:border-0 text-sm">
                    <span className="text-muted font-sans">{t.day}</span>
                    <div className="text-right font-sans">
                      <span className="text-forest font-semibold">{t.morning}</span>
                      {t.evening !== "Emergency Only" && (
                        <span className="text-forest font-semibold block mt-0.5">{t.evening}</span>
                      )}
                      {t.evening === "Emergency Only" && (
                        <span className="text-accent font-semibold block mt-0.5">{t.evening}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-2">Phone / Book Consultation</p>
                <a href={`tel:${DOCTOR.phone}`} className="text-primary font-display font-bold text-xl hover:text-primary-dark">
                  {DOCTOR.phone}
                </a>
                <p className="text-muted text-xs mt-1 font-sans">Available daily for booking: 10:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Accessibility Badges */}
            <div>
              <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-3">Accessibility &amp; Facilities</p>
              <div className="grid grid-cols-2 gap-3">
                {accessibilityDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-border rounded-xl text-xs text-forest font-semibold shadow-xs">
                      <Icon className="text-primary" size={14} />
                      <span className="font-sans">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timings CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[50px]"
              >
                <MessageCircle size={16} /> WhatsApp Directions
              </a>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 text-primary hover:text-primary-dark font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[50px]"
              >
                <Phone size={16} /> Call Clinic
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
