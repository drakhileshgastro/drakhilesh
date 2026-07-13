import Link from "next/link";
import { MapPin, Clock, Phone, Car, Accessibility, MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const timings = [
  { day: "Monday – Saturday", morning: "10:00 AM – 2:00 PM", evening: "5:00 PM – 8:00 PM" },
  { day: "Sunday", morning: "By Appointment", evening: "Emergency Only" },
];

const facilities = [
  { icon: "🔬", label: "Advanced Endoscopy Suite" },
  { icon: "📡", label: "EUS Ultrasound" },
  { icon: "🩺", label: "Consultation Rooms" },
  { icon: "🧪", label: "In-house Lab" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "♿", label: "Wheelchair Accessible" },
];

export default function ClinicInfo() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent("Directions chahiye clinic tak")}`;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-2">
            क्लीनिक की जानकारी
          </h2>
          <p className="text-muted text-base">Orchid Medical Centre — HB Road, Ranchi, Jharkhand</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-primary-light rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🗺️</div>
                <p className="text-primary font-bold font-hindi text-base">Orchid Medical Centre</p>
                <p className="text-primary/70 text-sm mt-1">HB Road, Ranchi, Jharkhand</p>
              </div>
            </div>
            <a
              href={DOCTOR.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-sm rounded-xl shadow-lg hover:bg-primary-dark transition-colors"
            >
              <MapPin size={14} /> Google Maps पर देखें
            </a>
          </div>

          {/* Info column */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-4 bg-bg rounded-2xl border border-border">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-forest font-bold text-sm mb-1">Address</p>
                <p className="text-muted text-sm leading-relaxed">
                  {DOCTOR.hospital}<br />
                  HB Road, Ranchi, Jharkhand — 834001
                </p>
                <a
                  href={DOCTOR.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold mt-2 inline-block hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 p-4 bg-bg rounded-2xl border border-border">
              <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-forest font-bold text-sm mb-2">Clinic Timings</p>
                {timings.map((t) => (
                  <div key={t.day} className="flex justify-between py-1.5 border-b border-border-light last:border-0 text-sm">
                    <span className="text-muted">{t.day}</span>
                    <div className="text-right">
                      <span className="text-forest font-medium">{t.morning}</span>
                      {t.evening !== "Emergency Only" && (
                        <span className="text-forest font-medium block">{t.evening}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 bg-bg rounded-2xl border border-border">
              <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-forest font-bold text-sm mb-1">Phone / Appointment</p>
                <a href={`tel:${DOCTOR.phone}`} className="text-primary font-bold text-lg hover:underline">
                  {DOCTOR.phone}
                </a>
                <p className="text-muted text-xs mt-1">Mon–Sat · 10am–8pm</p>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <p className="text-forest font-bold text-sm mb-3">Facilities Available</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {facilities.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 px-3 py-2 bg-primary-50 rounded-xl text-xs text-forest font-medium">
                    <span>{f.icon}</span> {f.label}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors min-h-[52px]"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-whatsapp text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity min-h-[52px]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
