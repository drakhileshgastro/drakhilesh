import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, Award, Building2, Phone, CheckCircle,
  Stethoscope, Users, Clock, Star
} from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dr. Akhilesh Yadav | DM Gastroenterologist Ranchi",
  description: "Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology, Orchid Medical Centre, Ranchi. 10+ years experience, 4000+ patients. Specialist in liver disease, endoscopy, IBS & all GI conditions.",
  alternates: { canonical: "https://drakhileshgastro.com/about" },
};

const EDUCATION = [
  { degree: "DM — Gastroenterology & Hepatology", institution: "Prestigious Medical University", year: "2014", icon: "🎓", highlight: true },
  { degree: "MD — Internal Medicine", institution: "Medical College, India", year: "2011", icon: "📋", highlight: false },
  { degree: "MBBS", institution: "Medical College, India", year: "2008", icon: "🏥", highlight: false },
];

const SPECIALIZATIONS = [
  "Upper GI Endoscopy (OGD Scopy)",
  "Colonoscopy & Polypectomy",
  "ERCP — Bile Duct Stone Removal",
  "Liver Disease (Hepatitis, Cirrhosis, NAFLD)",
  "Inflammatory Bowel Disease (Crohn's, UC)",
  "Irritable Bowel Syndrome (IBS)",
  "Pancreatitis Management",
  "Liver Cancer Surveillance",
  "GERD & Peptic Ulcer Disease",
  "Gallstone Management & ERCP",
  "Variceal Band Ligation",
  "Liver Transplant Evaluation",
];

const MEMBERSHIPS = [
  { name: "Indian Medical Association (IMA)", short: "IMA" },
  { name: "Indian Society of Gastroenterology (ISGEI)", short: "ISGEI" },
  { name: "Society of Gastrointestinal Endoscopy of India (SGEI)", short: "SGEI" },
  { name: "Indian Association for the Study of the Liver (INASL)", short: "INASL" },
];

const STATS = [
  { value: "4,000+", label: "Patients Treated", icon: Users },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "15+", label: "Specializations", icon: Stethoscope },
  { value: "4.9 ★", label: "Google Rating", icon: Star },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR.name,
    description: "DM Gastroenterologist & Hepatologist at Orchid Medical Centre, Ranchi",
    medicalSpecialty: "Gastroenterology",
    affiliation: { "@type": "Hospital", name: DOCTOR.hospital, address: { "@type": "PostalAddress", addressLocality: "Ranchi", addressRegion: "Jharkhand" } },
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "Medical University of India" }],
    memberOf: MEMBERSHIPS.map(m => ({ "@type": "MedicalOrganization", name: m.name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-navy pt-24 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-3 py-1.5 rounded-full mb-5">
                <span className="text-teal text-xs font-semibold uppercase tracking-wider">About the Doctor</span>
              </div>
              <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {DOCTOR.name}
              </h1>
              <p className="text-teal text-sm font-medium mb-2">{DOCTOR.qualification}</p>
              <p className="text-gray-muted text-sm mb-5">{DOCTOR.hospital}, HB Road, Ranchi, Jharkhand</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-lg">
                Dr. Akhilesh Yadav is one of Jharkhand's leading Gastroenterologists and Hepatologists, with over 10 years of specialist experience. He has treated 4,000+ patients from across Jharkhand, Bihar, and Chhattisgarh at Orchid Medical Centre, Ranchi.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book" className="px-6 py-3 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors">
                  Book Appointment
                </Link>
                <a href={`tel:${DOCTOR.phone}`} className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded-xl hover:border-teal transition-colors">
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-80 bg-white/5 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-6xl mb-3">👨‍⚕️</span>
                <p className="text-gray-muted text-sm font-medium">Doctor Photo</p>
                <p className="text-gray-muted text-xs mt-1">Professional portrait</p>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-teal text-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold leading-none">DM</p>
                <p className="text-teal-light text-xs mt-0.5">Gastroenterology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-navy border-t border-white/10 mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-white/10">
              {STATS.map((stat) => (
                <div key={stat.value} className="flex flex-col items-center text-center px-4">
                  <stat.icon size={18} className="text-teal mb-1.5" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-gray-muted text-xs mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 1440 32" className="w-full" preserveAspectRatio="none" style={{ height: 32 }}>
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT BIO ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Biography</p>
              <h2 className="text-navy text-2xl font-bold mb-5">About Dr. Akhilesh Yadav</h2>
              <div className="space-y-4 text-slate text-sm leading-relaxed">
                <p>
                  Dr. Akhilesh Yadav completed his DM in Gastroenterology — the highest postgraduate qualification in this specialty — and has since dedicated his career to making specialist digestive and liver care accessible to patients across Jharkhand and neighbouring states.
                </p>
                <p>
                  Practising at <strong className="text-navy">Orchid Medical Centre, HB Road, Ranchi</strong>, Dr. Akhilesh offers expert diagnosis and treatment for all conditions of the stomach, liver, intestines, pancreas, and bile duct. He is one of the very few gastroenterologists in Jharkhand trained in advanced procedures like <strong className="text-navy">ERCP</strong> (Endoscopic Retrograde Cholangiopancreatography) and <strong className="text-navy">Variceal Band Ligation</strong>.
                </p>
                <p className="font-hindi text-base">
                  डॉ. अखिलेश यादव का विश्वास है कि हर मरीज़ को — चाहे वो रांची से हो या झारखंड के किसी दूर के जिले से — specialist care मिलनी चाहिए। वे हिंदी में बात करते हैं, समय देते हैं और ईमानदारी से diagnosis बताते हैं।
                </p>
                <p>
                  Over 4,000 patients from Hazaribagh, Palamu, Giridih, Dhanbad, Bokaro, and beyond have trusted Dr. Akhilesh for their digestive and liver health. His approach: accurate diagnosis, evidence-based treatment, and clear communication in Hindi.
                </p>
              </div>

              {/* Photo gallery placeholder */}
              <div className="mt-8">
                <h3 className="text-navy font-bold text-sm mb-4">At Orchid Medical Centre</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["Consulting Room", "Endoscopy Suite", "Reception"].map((label) => (
                    <div key={label} className="aspect-square bg-offwhite rounded-xl border-2 border-dashed border-gray-light flex flex-col items-center justify-center">
                      <span className="text-2xl mb-1">📷</span>
                      <p className="text-gray-muted text-xs text-center">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-muted text-xs mt-2">Clinic photos to be added</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick info */}
              <div className="bg-navy text-white rounded-2xl p-5">
                <h3 className="text-teal font-bold text-sm mb-4 uppercase tracking-wider">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <GraduationCap size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Qualification</p>
                      <p className="text-gray-muted text-xs">{DOCTOR.qualification}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hospital</p>
                      <p className="text-gray-muted text-xs">{DOCTOR.hospital}, HB Road, Ranchi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">OPD Timings</p>
                      <p className="text-gray-muted text-xs">Mon–Sat: 10am–2pm & 5pm–8pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${DOCTOR.phone}`} className="text-gray-muted text-xs hover:text-teal transition-colors">{DOCTOR.phone}</a>
                    </div>
                  </div>
                </div>
                <Link href="/book" className="mt-5 w-full flex items-center justify-center py-3 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors">
                  Book Appointment
                </Link>
              </div>

              {/* Memberships */}
              <div className="bg-offwhite border border-gray-light rounded-2xl p-5">
                <h3 className="text-navy font-bold text-sm mb-4 flex items-center gap-2">
                  <Award size={15} className="text-gold" /> Memberships
                </h3>
                <div className="space-y-2">
                  {MEMBERSHIPS.map((m) => (
                    <div key={m.short} className="flex items-center gap-2">
                      <span className="w-8 h-6 bg-teal-light text-teal text-[10px] font-bold rounded flex items-center justify-center flex-shrink-0">{m.short}</span>
                      <p className="text-slate text-xs leading-tight">{m.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION TIMELINE ── */}
      <section className="section-pad bg-offwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Qualifications</p>
            <h2 className="text-navy text-2xl font-bold">Education & Training</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-light" />
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="relative flex items-start gap-6 pl-4">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0 z-10 ${edu.highlight ? "bg-teal text-white shadow-lg" : "bg-white border-2 border-gray-light"}`}>
                    {edu.icon}
                  </div>
                  <div className={`flex-1 rounded-2xl p-4 border ${edu.highlight ? "bg-white border-teal shadow-sm" : "bg-white border-gray-light"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`font-bold text-sm ${edu.highlight ? "text-teal" : "text-navy"}`}>{edu.degree}</p>
                        <p className="text-slate text-xs mt-0.5">{edu.institution}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${edu.highlight ? "bg-teal-light text-teal" : "bg-offwhite text-gray-muted"}`}>
                        {edu.year}
                      </span>
                    </div>
                    {edu.highlight && (
                      <p className="text-slate text-xs mt-2 font-hindi">सर्वोच्च विशेषज्ञ डिग्री — DM Gastroenterology</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATIONS ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Expertise</p>
            <h2 className="text-navy text-2xl font-bold mb-2">Specializations & Procedures</h2>
            <p className="text-slate text-sm font-hindi">डॉ. अखिलेश यादव इन सभी conditions और procedures में expert हैं</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SPECIALIZATIONS.map((spec) => (
              <div key={spec} className="flex items-center gap-3 bg-offwhite border border-gray-light rounded-xl px-4 py-3">
                <CheckCircle size={15} className="text-teal flex-shrink-0" />
                <span className="text-navy text-sm font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy section-pad">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-3">Book a Consultation</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Consult Dr. Akhilesh Today
          </h2>
          <p className="text-gray-muted text-sm font-hindi mb-7">
            Orchid Medical Centre, HB Road, Ranchi · Mon–Sat · 10am–8pm
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors shadow-lg">
              Book Appointment Online
            </Link>
            <a href={`tel:${DOCTOR.phone}`} className="flex items-center gap-2 px-6 py-4 border-2 border-white/20 text-white font-semibold text-sm rounded-xl hover:border-teal transition-colors">
              <Phone size={15} /> {DOCTOR.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
