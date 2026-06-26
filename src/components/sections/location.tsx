import Link from "next/link";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const DIRECTIONS = [
  { from: "Hazaribagh", time: "~1.5 hrs", via: "NH-33" },
  { from: "Dhanbad", time: "~2.5 hrs", via: "NH-2" },
  { from: "Giridih", time: "~2 hrs", via: "NH-2" },
  { from: "Palamu (Daltonganj)", time: "~3 hrs", via: "NH-75" },
  { from: "Bokaro", time: "~2 hrs", via: "NH-23" },
  { from: "Jamshedpur", time: "~3 hrs", via: "NH-33" },
];

export default function Location() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Location</p>
          <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-2">
            Find Us at Orchid Medical Centre
          </h2>
          <p className="text-slate text-sm font-hindi">
            HB Road, Ranchi — Jharkhand के सभी जिलों से आसानी से पहुंचें
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map embed placeholder */}
          <div className="rounded-2xl overflow-hidden border border-gray-light shadow-sm aspect-video lg:aspect-auto lg:h-80 bg-offwhite flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin size={32} className="text-teal mx-auto mb-3" />
              <p className="text-navy font-semibold text-sm">Orchid Medical Centre</p>
              <p className="text-slate text-xs mt-1">{DOCTOR.address}</p>
              <a
                href={DOCTOR.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-teal text-white text-xs font-semibold rounded-lg"
              >
                <Navigation size={13} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-5">
            {/* Clinic details */}
            <div className="bg-navy text-white rounded-2xl p-5">
              <h3 className="font-bold text-base mb-4 text-teal">Clinic Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{DOCTOR.hospital}</p>
                    <p className="text-gray-muted text-xs mt-0.5">{DOCTOR.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={15} className="text-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">OPD Timings</p>
                    <p className="text-gray-muted text-xs mt-0.5">Mon – Sat: 10:00 AM – 2:00 PM</p>
                    <p className="text-gray-muted text-xs">Mon – Sat: 5:00 PM – 8:00 PM</p>
                    <p className="text-gray-muted text-xs">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-teal flex-shrink-0" />
                  <a href={`tel:${DOCTOR.phone}`} className="text-sm font-medium hover:text-teal transition-colors">
                    {DOCTOR.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Directions from districts */}
            <div>
              <h3 className="text-navy font-bold text-sm mb-3">
                Directions from Major Districts
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DIRECTIONS.map((d) => (
                  <div
                    key={d.from}
                    className="bg-offwhite rounded-xl px-3 py-3 border border-gray-light"
                  >
                    <p className="text-navy font-semibold text-xs">{d.from}</p>
                    <p className="text-teal text-xs font-semibold mt-0.5">{d.time}</p>
                    <p className="text-gray-muted text-[11px]">via {d.via}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <a
                href={DOCTOR.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-teal text-teal font-semibold text-sm rounded-xl hover:bg-teal hover:text-white transition-colors"
              >
                <Navigation size={15} />
                Get Directions
              </a>
              <Link
                href="/book"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-teal text-white font-semibold text-sm rounded-xl hover:bg-teal-dark transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
