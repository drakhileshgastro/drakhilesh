"use client";

import { MapPin, Clock, Phone, Car, Accessibility, MessageCircle, Building2, ShieldAlert } from "lucide-react";
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

export default function ClinicInfo() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent("Namaskar, mujhe clinic directions chahiye")}`;

  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Visit Our Clinic
          </span>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest mb-4 leading-tight">
            क्लीनिक और अस्पताल की जानकारी
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Find OPD timings, clinic address, landmarks, and parking instructions for Orchid Medical Centre, Ranchi.
          </p>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column — Google Map (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/3] border border-border/80 bg-white rounded-3xl overflow-hidden shadow-xs relative">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-semibold text-sm rounded-xl shadow-xs hover:bg-primary-dark transition-colors min-h-[48px] cursor-pointer"
              >
                <MapPin size={14} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right Column — Information (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Unified Clinic Details Card */}
            <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-xs space-y-6">
              
              {/* Address Section */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary-50/80 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/10">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div className="space-y-1">
                                    <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans block">Address &amp; Landmark</span>
                  <h3 className="text-forest font-sans font-bold text-base leading-snug">{DOCTOR.hospital}</h3>
                  <p className="text-muted text-xs leading-relaxed font-sans">
                    HB Road, Opposite Plaza Cinema, Plaza Chowk, Ranchi, Jharkhand — 834001
                  </p>
                  <a
                    href={DOCTOR.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-bold uppercase tracking-wider mt-2 inline-block hover:underline font-sans"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Timings Section */}
              <div className="flex gap-4 items-start border-t border-border/40 pt-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50/80 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/10">
                  <Clock className="text-primary" size={18} />
                </div>
                <div className="flex-1 space-y-3">
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans block">OPD Timings</span>
                  <div className="space-y-3">
                    {timings.map((t) => (
                      <div key={t.day} className="flex justify-between items-start border-b border-border/30 last:border-0 pb-2 last:pb-0 text-xs">
                        <span className="text-forest font-sans font-semibold">{t.day}</span>
                        <div className="text-right space-y-0.5 font-sans">
                          <span className="text-forest font-bold block">{t.morning}</span>
                          <span className={t.evening === "Emergency Only" ? "text-accent font-bold block" : "text-muted block"}>
                            {t.evening}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact/Phone Section */}
              <div className="flex gap-4 items-start border-t border-border/40 pt-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50/80 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/10">
                  <Phone className="text-primary" size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans block">Phone / Book Consultation</span>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="text-forest hover:text-primary font-display font-bold text-lg block transition-colors"
                  >
                    {DOCTOR.phone}
                  </a>
                  <p className="text-muted text-[10px] font-sans">Available daily for bookings: 10:00 AM – 8:00 PM</p>
                </div>
              </div>

              {/* Accessibility & Facilities Block (Embedded for prominence) */}
              <div className="border-t border-border/40 pt-6 space-y-3">
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans block">Accessibility &amp; Facilities</span>
                <div className="grid grid-cols-2 gap-3">
                  {accessibilityDetails.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5 px-3 py-2 bg-bg-sand/30 border border-border/30 rounded-xl text-xs text-forest font-semibold">
                        <Icon className="text-primary" size={13} />
                        <span className="font-sans text-[11px]">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Timings Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
              >
                <MessageCircle size={14} /> WhatsApp Directions
              </a>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Phone size={14} /> Call Clinic
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
