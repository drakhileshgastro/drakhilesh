import Link from "next/link";
import { GraduationCap, Award, Building2, ArrowRight } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const HIGHLIGHTS = [
  { icon: GraduationCap, text: "DM Gastroenterology (Highest Qualification)", sub: "सर्वोच्च गैस्ट्रोएंट्रोलॉजी डिग्री" },
  { icon: Building2, text: "Orchid Medical Centre, HB Road, Ranchi", sub: "ऑर्किड मेडिकल सेंटर, रांची" },
  { icon: Award, text: "Member — IMA & ISGEI (Indian Society of Gastroenterology)", sub: "राष्ट्रीय चिकित्सा संगठनों के सदस्य" },
];

export default function About() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Photo placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main photo area */}
              <div className="w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 bg-offwhite rounded-2xl border-2 border-dashed border-gray-light flex flex-col items-center justify-center overflow-hidden">
                <div className="w-20 h-20 bg-teal-light rounded-full flex items-center justify-center mb-3">
                  <span className="text-4xl">👨‍⚕️</span>
                </div>
                <p className="text-slate text-sm font-medium">Doctor Photo</p>
                <p className="text-gray-muted text-xs mt-1">To be added</p>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-6 bg-navy text-white rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-3xl font-bold text-teal leading-none">{DOCTOR.experience}</p>
                <p className="text-xs text-gray-muted leading-tight mt-0.5">Years<br />Experience</p>
              </div>

              {/* Floating badge — patients */}
              <div className="absolute -top-4 -right-4 bg-white border border-gray-light rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-2xl font-bold text-teal leading-none">{DOCTOR.patientsServed}</p>
                <p className="text-xs text-gray-muted leading-tight mt-0.5">Patients<br />Treated</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">About the Doctor</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-4">
              {DOCTOR.name}
            </h2>
            <p className="text-slate text-sm leading-relaxed mb-3">
              Dr. Akhilesh Yadav is a highly qualified Gastroenterologist and Hepatologist with a DM (Doctorate of Medicine) in Gastroenterology — the highest specialist qualification in this field. He practices at{" "}
              <strong className="text-navy">Orchid Medical Centre, HB Road, Ranchi</strong>.
            </p>
            <p className="text-slate text-sm leading-relaxed mb-3 font-hindi">
              डॉ. अखिलेश यादव झारखंड, बिहार और छत्तीसगढ़ के हज़ारों मरीज़ों का विश्वास जीत चुके हैं। वे हिंदी में बात करते हैं और हर मरीज़ को समय देते हैं।
            </p>
            <p className="text-slate text-sm leading-relaxed mb-6">
              With over {DOCTOR.experience} years of specialist experience, he is the preferred choice for complex liver disease, endoscopy, and advanced GI procedures in Jharkhand.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-7">
              {HIGHLIGHTS.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <h.icon size={17} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-navy text-sm font-medium leading-tight">{h.text}</p>
                    <p className="text-gray-muted text-xs font-hindi mt-0.5">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold text-sm rounded-xl hover:bg-navy-dark transition-colors"
            >
              Meet Dr. Akhilesh
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
