import Link from "next/link";
import { Calendar, Building2, HeartPulse, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Calendar,
    titleHindi: "अपॉइंटमेंट बुक करें",
    title: "Book Consultation",
    desc: "ऑनलाइन फॉर्म भरें, कॉल या व्हाट्सएप द्वारा तुरंत अपॉइंटमेंट निश्चित करें।",
    descEn: "Book online, call, or WhatsApp to secure your appointment slot.",
  },
  {
    step: "02",
    icon: Building2,
    titleHindi: "परामर्श और विजिट",
    title: "Consultation & Visit",
    desc: "HB Road स्थित Orchid Medical Centre में डॉ. अखिलेश से व्यक्तिगत परामर्श लें।",
    descEn: "Meet Dr. Akhilesh at Orchid Medical Centre, Ranchi for your consultation.",
  },
  {
    step: "03",
    icon: HeartPulse,
    titleHindi: "सटीक जांच और इलाज",
    title: "Diagnosis & Treatment",
    desc: "सटीक परीक्षणों द्वारा बीमारी की पहचान कर अनुकूलित उपचार शुरू करें।",
    descEn: "Determine root cause with advanced diagnostics and start custom treatment.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    titleHindi: "स्वस्थ होइए और फॉलो-अप",
    title: "Recovery & Follow-Up",
    desc: "फॉलो-अप और निरंतर परामर्श द्वारा पूर्ण पेट व लिवर स्वास्थ्य प्राप्त करें।",
    descEn: "Achieve complete gut and liver health with continuous follow-up care.",
  },
];

export default function PatientJourney() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Your Journey to Recovery
          </span>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest mb-4 leading-tight">
            अपॉइंटमेंट से लेकर ठीक होने तक का सफर
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            We make your treatment journey simple, transparent, and worry-free — from the first call to full recovery.
          </p>
        </div>

        {/* Timeline — Desktop horizontal, Mobile vertical */}
        <div className="hidden lg:flex items-start gap-8 relative max-w-5xl mx-auto">
          {/* Connector line (stronger, primary color) */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[3px] bg-primary/20" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex-1 relative flex flex-col items-center text-center px-4">
                {/* Step circle (+20% size and larger icons) */}
                <div className="relative z-10 w-20 h-20 bg-white border-2 border-primary/20 rounded-full flex flex-col items-center justify-center mb-6 shadow-xs group hover:border-primary transition-colors">
                  <Icon className="text-primary" size={26} />
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-hindi text-forest font-bold text-lg mb-1">{step.titleHindi}</h3>
                <p className="font-sans text-muted text-xs uppercase tracking-wider font-semibold mb-2">{step.title}</p>
                <p className="font-hindi text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical timeline (cardless, spacious) */}
        <div className="lg:hidden space-y-8 relative max-w-md mx-auto">
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-border/60" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex gap-6 relative">
                <div className="w-16 h-16 bg-white border-2 border-primary/25 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-xs relative">
                  <Icon className="text-primary" size={22} />
                  <span className="absolute -bottom-1 -right-1 w-5.5 h-5.5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-hindi font-bold text-forest text-base mb-0.5">{step.titleHindi}</h3>
                  <p className="font-sans text-muted text-[11px] uppercase tracking-wider font-bold mb-1.5">{step.title}</p>
                  <p className="font-hindi text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px] cursor-pointer"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
