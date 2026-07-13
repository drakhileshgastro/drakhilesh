import Link from "next/link";
import { GraduationCap, Award, Users, Heart } from "lucide-react";
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
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Doctor Photo */}
          <div className="relative">
            {/* Main photo */}
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="text-center text-primary">
                <div className="text-8xl mb-4">👨‍⚕️</div>
                <p className="text-base font-semibold font-hindi">डॉ. अखिलेश यादव</p>
                <p className="text-sm text-primary/60 mt-1">DM Gastroenterology</p>
              </div>
            </div>

            {/* Floating stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {highlights.slice(0, 2).map((h) => (
                <div key={h.label} className="bg-bg-sand rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{h.value}</div>
                  <div className="text-forest text-xs font-hindi font-semibold mt-0.5">{h.label}</div>
                  <div className="text-muted text-[11px] mt-0.5">{h.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              Meet Your Doctor
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-forest mb-2">
              Dr. Akhilesh Yadav
            </h2>
            <p className="text-primary font-semibold text-lg mb-6 font-hindi">
              पेट, लीवर और पाचन रोग विशेषज्ञ
            </p>

            {/* Personal message */}
            <div className="bg-primary-50 border-l-4 border-primary rounded-r-2xl p-5 mb-8">
              <p className="font-hindi text-forest text-base leading-relaxed italic">
                "मेरा उद्देश्य केवल बीमारी का इलाज करना नहीं है। मैं चाहता हूँ कि हर मरीज अपनी बीमारी को समझे,
                सही सलाह पाए, और बिना किसी डर के — अपनी भाषा में — इलाज कराए।"
              </p>
              <p className="text-muted text-sm mt-3 not-italic">
                — Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre Ranchi
              </p>
            </div>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="text-forest font-bold text-sm uppercase tracking-wider mb-3">Qualifications</h3>
              <div className="space-y-2">
                {qualifications.map((q) => (
                  <div key={q.degree} className="flex items-center gap-3 py-2.5 border-b border-border-light last:border-0">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-forest font-semibold text-sm">{q.degree}</span>
                    <span className="text-muted text-sm">·  {q.institution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.slice(2).map((h) => (
                <div key={h.label} className="flex items-start gap-3 bg-bg rounded-xl p-3">
                  <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <h.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-forest font-bold text-sm">{h.value} {h.label}</div>
                    <div className="text-muted text-xs">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hospital affiliation */}
            <div className="bg-bg-sand rounded-2xl p-4 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏥</span>
              </div>
              <div>
                <div className="text-forest font-bold text-sm">{DOCTOR.hospital}</div>
                <div className="text-muted text-xs">{DOCTOR.address}</div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors"
            >
              डॉक्टर के बारे में और जानें →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
