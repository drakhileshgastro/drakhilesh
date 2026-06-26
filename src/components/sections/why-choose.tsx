import Link from "next/link";
import { Languages, Microscope, MapPin, Clock, Users, Shield } from "lucide-react";

const REASONS = [
  {
    icon: Languages,
    title: "Hindi Speaking Team",
    titleHindi: "हिंदी में बात करें",
    desc: "Doctor and staff both speak Hindi fluently. No language barrier — explain your problem in your own words.",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    titleHindi: "आधुनिक उपकरण",
    desc: "Latest endoscopy, colonoscopy and diagnostic technology at Orchid Medical Centre.",
  },
  {
    icon: MapPin,
    title: "Serving Rural Jharkhand",
    titleHindi: "दूर के मरीज़ों का स्वागत",
    desc: "Patients from Hazaribagh, Palamu, Giridih, Dhanbad and all districts are welcome. We understand travel challenges.",
  },
  {
    icon: Clock,
    title: "Mon–Sat, Twice Daily",
    titleHindi: "सुबह और शाम उपलब्ध",
    desc: "OPD runs 10am–2pm and 5pm–8pm, Monday to Saturday. Evening slots for working patients.",
  },
  {
    icon: Users,
    title: "4,000+ Treated",
    titleHindi: "हज़ारों मरीज़ों का भरोसा",
    desc: "Over 4,000 patients successfully treated. Real Google reviews from real patients across Jharkhand.",
  },
  {
    icon: Shield,
    title: "Ethical & Transparent",
    titleHindi: "ईमानदार सलाह",
    desc: "Clear diagnosis, honest treatment plan, no unnecessary tests. Your health is the priority.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Why Patients Trust Dr. Akhilesh
          </h2>
          <p className="text-gray-muted text-sm max-w-xl mx-auto font-hindi">
            झारखंड के हज़ारों मरीज़ उनपर भरोसा क्यों करते हैं?
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-teal/40 hover:bg-white/8 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                <r.icon size={20} className="text-teal" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{r.title}</h3>
              <p className="text-gray-muted text-xs font-hindi mb-2">{r.titleHindi}</p>
              <p className="text-slate-300 text-xs leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors shadow-lg"
          >
            Book Appointment Now
          </Link>
          <p className="text-gray-muted text-xs mt-3 font-hindi">
            हमारी team 2 घंटे में call करेगी
          </p>
        </div>
      </div>
    </section>
  );
}
