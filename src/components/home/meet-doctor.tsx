import Link from "next/link";
import { GraduationCap, Award, Users, Heart, Building2 } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const qualifications = [
  { degree: "MBBS", institution: "Medical College", year: "2008" },
  { degree: "MD — Internal Medicine", institution: "AIIMS / PGI", year: "2013" },
  { degree: "DM — Gastroenterology", institution: "Super-specialty Training", year: "2016" },
];

const highlights = [
  { icon: Users, value: "4,000+", label: "मरीज़ ठीक हुए", sub: "Patients Successfully Treated" },
  { icon: Award, value: "10+", label: "वर्षों का अनुभव", sub: "Years of Specialist Experience" },
  { icon: GraduationCap, value: "DM", label: "Gastroenterology", sub: "Super-specialty Qualification" },
  { icon: Heart, value: "हिंदी", label: "में सलाह", sub: "Consult in Hindi — Rural-friendly" },
];

export default function MeetDoctorSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Doctor Photo */}
          <div className="relative">
            {/* Main photo */}
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm">
              <img
                src="/dr-akhilesh-improved.png"
                alt="Dr. Akhilesh Yadav"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {highlights.slice(0, 2).map((h) => (
                <div key={h.label} className="bg-white border border-border rounded-2xl p-5 shadow-sm text-center">
                  <div className="text-3xl font-display font-bold text-primary">{h.value}</div>
                  <div className="text-forest text-sm font-hindi font-semibold mt-1">{h.label}</div>
                  <div className="text-muted text-xs font-sans mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
              Meet Your Doctor
            </div>

            <h2 className="text-4xl font-display font-bold text-forest mb-2">
              Dr. Akhilesh Yadav
            </h2>
            <p className="text-primary font-hindi text-xl font-semibold mb-6">
              पेट, लीवर और पाचन रोग विशेषज्ञ
            </p>

            {/* Personal message */}
            <div className="bg-bg-sand border-l-4 border-primary rounded-r-2xl p-6 mb-8 shadow-sm">
              <p className="font-hindi text-forest text-base leading-relaxed italic">
                "मेरा उद्देश्य केवल बीमारी का इलाज करना नहीं है। मैं चाहता हूँ कि हर मरीज अपनी बीमारी को समझे,
                सही सलाह पाए, और बिना किसी डर के — अपनी भाषा में — इलाज कराए।"
              </p>
              <p className="text-muted text-xs uppercase tracking-wider font-semibold font-display mt-4">
                — Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre Ranchi
              </p>
            </div>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="text-forest font-display font-bold text-xs uppercase tracking-wider mb-4">Academic Credentials</h3>
              <div className="space-y-3">
                {qualifications.map((q) => (
                  <div key={q.degree} className="flex items-start gap-3 py-2.5 border-b border-border-light last:border-0 pb-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-forest font-sans font-semibold text-sm block">{q.degree}</span>
                      <span className="text-muted text-xs block mt-0.5">{q.institution} · {q.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.slice(2).map((h) => (
                <div key={h.label} className="flex items-start gap-3 border border-border rounded-xl p-4 bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-light">
                    <h.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-forest font-sans font-bold text-sm">{h.value} {h.label}</div>
                    <div className="text-muted text-xs font-sans mt-0.5">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hospital affiliation */}
            <div className="border border-border rounded-2xl p-4 mb-8 flex items-center gap-4 bg-white shadow-sm">
              <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-forest font-sans font-bold text-sm">{DOCTOR.hospital}</div>
                <div className="text-muted text-xs font-sans mt-0.5">{DOCTOR.address}</div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm"
            >
              डॉक्टर के बारे में और जानें
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
