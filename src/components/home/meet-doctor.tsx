import Link from "next/link";
import { GraduationCap, Award, Users, Heart, Building2, Calendar } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const credentialsTimeline = [
  { label: "MBBS", detail: "Undergraduate" },
  { label: "MD", detail: "Internal Medicine" },
  { label: "DM Gastro", detail: "Super-specialty" },
  { label: "10+ Years", detail: "Experience" },
  { label: "4,000+", detail: "Patients Served" },
];

export default function MeetDoctorSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Doctor Photo & Quick Affiliations */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-md mx-auto lg:mx-0">
              <img
                src="/dr-akhilesh-improved.png"
                alt="Dr. Akhilesh Yadav - DM Gastroenterology, Liver Doctor in Ranchi"
                title="Dr. Akhilesh Yadav - Hepatologist & Gastroenterologist"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Hospital affiliation info card */}
            <div className="border border-border rounded-2xl p-5 flex items-center gap-4 bg-white shadow-xs max-w-md mx-auto lg:mx-0">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-forest font-sans font-bold text-sm leading-snug">{DOCTOR.hospital}</div>
                <div className="text-muted text-xs font-sans mt-0.5 leading-normal">{DOCTOR.address}</div>
              </div>
            </div>
          </div>

          {/* Right — Biography, Story & Credentials Timeline */}
          <div>
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
              Meet Your Doctor
            </div>

            <h2 className="text-4xl font-display font-bold text-forest mb-2">
              Dr. Akhilesh Yadav
            </h2>
            <p className="text-primary font-hindi text-xl font-semibold mb-6">
              पेट, लीवर और पाचन रोग विशेषज्ञ (DM Gastroenterology)
            </p>

            {/* Empathy-focused Doctor Story */}
            <div className="prose text-muted font-sans text-base leading-relaxed mb-6 space-y-4">
              <p>
                Many patients come to see me after months of ignoring persistent digestive symptoms, often due to anxiety or confusion. 
                I believe that patients deserve clear explanations, ample consultation time, and treatments they fully understand. 
                My focus is always on delivering empathetic care that respects your comfort.
              </p>
              <p className="font-hindi text-forest font-semibold leading-relaxed">
                "मेरा उद्देश्य केवल बीमारी का इलाज करना नहीं है। मैं चाहता हूँ कि हर मरीज अपनी बीमारी को समझे, सही सलाह पाए, और बिना किसी संकोच के — अपनी भाषा में — इलाज कराए।"
              </p>
            </div>

            {/* Credentials timeline */}
            <div className="mt-8 mb-10">
              <h3 className="text-forest font-sans font-bold text-xs uppercase tracking-wider mb-5">
                Academic & Professional Milestones
              </h3>
              
              <div className="relative">
                {/* Connecting Line */}
                <div className="hidden sm:block absolute top-5 left-10 right-10 h-0.5 bg-border z-0" />
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-2 relative z-10">
                  {credentialsTimeline.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center font-display font-bold text-xs text-primary shadow-xs mb-3">
                        {idx + 1}
                      </div>
                      <span className="text-forest font-display font-bold text-xs sm:text-sm block leading-tight">
                        {item.label}
                      </span>
                      <span className="text-muted text-[10px] font-sans block mt-1 uppercase font-semibold tracking-wider">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timings & CTA */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
              >
                Full Biography
              </Link>
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Calendar size={15} /> Book Appointment
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
