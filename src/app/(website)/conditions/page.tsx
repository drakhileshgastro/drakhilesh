import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Clock, MessageCircle, ShieldCheck, HeartHandshake } from "lucide-react";
import { ALL_SERVICES } from "@/data/services-data";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

export const metadata: Metadata = {
  title: "Gastroenterology Conditions Treated in Ranchi | Dr. Akhilesh",
  description: "Complete guide to gastroenterology conditions treated in Ranchi by Dr. Akhilesh Yadav. Treatment for fatty liver, liver cirrhosis, IBS, GERD, and gallstones.",
  alternates: { canonical: "https://drakhileshgastro.com/conditions" },
};

export default function ServicesPage() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe liver/stomach diseases ke baare me Dr. Akhilesh Yadav se consult karna hai."
  )}`;

  return (
    <>
      <article className="min-h-screen pb-16 sm:pb-0 bg-white">
        
        {/* Hero Section */}
        <section className="bg-bg-sand/30 py-16 lg:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
              Clinical Specializations
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight font-hindi">
              पेट, लिवर और पाचन की बीमारियों का इलाज — Conditions Treated
            </h1>
            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Super-specialist diagnosis and clinical care plans for liver cirrhosis, hepatitis, biliary stones, ulcers, and chronic digestive disorders in Ranchi.
            </p>
          </div>
        </section>

        {/* Conditions Index Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_SERVICES.map((service) => (
                <div 
                  key={service.slug} 
                  className="bg-white border border-border/80 rounded-3xl p-6 shadow-2xs hover:border-primary-light transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-3xs">
                        {service.emoji}
                      </div>
                      <div>
                        <h3 className="text-forest font-sans font-bold text-base leading-tight">
                          {service.title}
                        </h3>
                        <span className="font-hindi text-muted text-xs block mt-0.5">
                          {service.titleHindi}
                        </span>
                      </div>
                    </div>

                    {/* Brief Intro */}
                    <p className="font-hindi text-muted text-xs leading-relaxed mb-6">
                      {service.introHi.length > 120 ? `${service.introHi.substring(0, 120)}...` : service.introHi}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="pt-4 border-t border-border/40">
                    <Link
                      href={`/conditions/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                    >
                      Read treatment details <ArrowRight size={13} />
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Reassurance Block */}
        <section className="bg-bg-sand/35 py-16 border-t border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-2">Why Choose Dr. Akhilesh</span>
              <h2 className="text-2xl font-display font-bold text-forest leading-tight font-hindi">पेट और लिवर रोगों का सटीक निदान — Clinical Trust</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="flex gap-3.5 items-start bg-white p-5 rounded-2xl border border-border/60">
                <ShieldCheck className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-forest font-sans font-bold text-sm">Evidence-Based Treatment Plans</h4>
                  <p className="text-muted text-xs mt-1 leading-relaxed">
                    Custom healthcare pathways mapped to international gastroenterology guidelines (ISG/INASL), preventing experimental medication and unnecessary operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start bg-white p-5 rounded-2xl border border-border/60">
                <HeartHandshake className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-forest font-sans font-bold text-sm">Comprehensive Liver &amp; Biliary Care</h4>
                  <p className="text-muted text-xs mt-1 leading-relaxed">
                    Advanced management for high-risk liver cirrhosis, hepatitis viral suppression, gallstone obstruction, and same-day therapeutic scopes.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-5 w-full">
                <div className="aspect-[4/5] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs max-w-xs mx-auto">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
                  Consult Ranchi's Specialist
                </div>
                
                <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                  स्वस्थ पाचन और लिवर के लिए आज ही परामर्श लें
                </h2>
                
                <p className="font-sans text-muted text-base leading-relaxed">
                  Join thousands of patients who successfully recovered under Dr. Akhilesh's clinical care at Orchid Medical Centre, Ranchi.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    <Clock size={15} /> Book Appointment
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>

                <p className="text-xs text-muted font-sans font-medium uppercase tracking-wider mt-2 block">
                  ORCHID MEDICAL CENTRE, RANCHI · OPD DAILY (SUN CLOSED)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Floating conversion bar */}
        <StickyCTA title="Conditions Guide & Consultations" />

      </article>
    </>
  );
}
