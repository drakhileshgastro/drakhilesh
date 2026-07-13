import Link from "next/link";
import { MapPin, Clock, Phone, Car, Accessibility, MessageCircle, ShieldCheck, Search, Building2, Activity } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const timings = [
  { day: "Monday – Saturday", morning: "10:00 AM – 2:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Sunday", morning: "By Appointment", evening: "Emergency Only" },
];

const facilities = [
  { icon: ShieldCheck, label: "Advanced Endoscopy Suite" },
  { icon: Search, label: "EUS Ultrasound" },
  { icon: Building2, label: "Consultation Rooms" },
  { icon: Activity, label: "In-house Lab" },
  { icon: Car, label: "Free Parking" },
  { icon: Accessibility, label: "Wheelchair Accessible" },
];

export default function ClinicInfo() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent("Namaskar, mujhe clinic directions chahiye")}`;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Visit Us
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-2 leading-tight">
            क्लीनिक की जानकारी
          </h2>
          <p className="font-sans text-muted text-base leading-relaxed">
            Orchid Medical Centre — HB Road, Ranchi, Jharkhand
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Map placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] border border-border bg-bg-sand rounded-3xl overflow-hidden shadow-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border bg-white mb-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <p className="text-forest font-display font-bold text-lg leading-snug">{DOCTOR.hospital}</p>
                <p className="text-muted text-sm mt-1.5 font-sans leading-relaxed">HB Road, Ranchi, Jharkhand — 834001</p>
                <p className="text-muted text-xs font-sans mt-1">Opposite Plaza Cinema</p>
              </div>
            </div>
            <a
              href={DOCTOR.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-semibold text-sm rounded-xl shadow-md hover:bg-primary-dark transition-colors min-h-[44px]"
            >
              <MapPin size={14} /> Open in Google Maps
            </a>
          </div>

          {/* Info column */}
          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-2">Address</p>
                <p className="text-muted text-sm leading-relaxed">
                  {DOCTOR.hospital}<br />
                  HB Road, Ranchi, Jharkhand — 834001
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

            {/* Facilities */}
            <div>
              <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-3">Available Facilities</p>
              <div className="grid grid-cols-2 gap-3">
                {facilities.map((f, idx) => {
                  const Icon = f.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-border rounded-xl text-xs text-forest font-medium shadow-sm">
                      <Icon className="text-primary" size={14} />
                      <span className="font-sans">{f.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
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
