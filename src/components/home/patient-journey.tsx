import Link from "next/link";
import { Calendar, PhoneCall, Building2, HeartPulse, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Calendar,
    titleHindi: "अपॉइंटमेंट बुक करें",
    title: "Book Appointment",
    desc: "ऑनलाइन फॉर्म भरें या सीधे कॉल करें। हमारी टीम 30 मिनट में संपर्क करेगी।",
    descEn: "Fill the form or call directly. Our team confirms within 30 minutes.",
  },
  {
    step: "02",
    icon: PhoneCall,
    titleHindi: "कॉल आएगी",
    title: "Receive Callback",
    desc: "हमारी टीम आपकी समस्या सुनेगी और सही समय तय करेगी।",
    descEn: "Our team listens to your concern and schedules the right time.",
  },
  {
    step: "03",
    icon: Building2,
    titleHindi: "क्लीनिक विजिट",
    title: "Visit the Clinic",
    desc: "Orchid Medical Centre, HB Road, Ranchi — साफ और आधुनिक सुविधाएं।",
    descEn: "Visit our clean, modern clinic in Ranchi — parking available.",
  },
  {
    step: "04",
    icon: HeartPulse,
    titleHindi: "जांच और निदान",
    title: "Diagnosis",
    desc: "डॉ. अखिलेश आपकी बात सुनेंगे, जांच करेंगे और सटीक निदान देंगे।",
    descEn: "Dr. Akhilesh listens, examines, and delivers accurate diagnosis.",
  },
  {
    step: "05",
    icon: FileText,
    titleHindi: "उपचार योजना",
    title: "Treatment Plan",
    desc: "आपकी बीमारी को आसान भाषा में समझाकर व्यक्तिगत इलाज योजना बनाई जाएगी।",
    descEn: "Personalized treatment plan explained clearly in Hindi.",
  },
  {
    step: "06",
    icon: CheckCircle2,
    titleHindi: "ठीक होइए",
    title: "Recovery & Follow-up",
    desc: "लंबे समय तक फॉलोअप — आपकी रिकवरी हमारी ज़िम्मेदारी है।",
    descEn: "Long-term follow-up — your recovery is our responsibility.",
  },
];

export default function PatientJourney() {
  return (
    <section className="bg-bg-sand py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Your Journey to Recovery
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-4 leading-tight">
            अपॉइंटमेंट से लेकर ठीक होने तक का सफर
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            We make your treatment journey simple, transparent, and worry-free — from the first call to full recovery.
          </p>
        </div>

        {/* Timeline — Desktop horizontal, Mobile vertical */}
        <div className="hidden lg:flex items-start gap-4 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-border mx-16" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex-1 relative flex flex-col items-center text-center px-2">
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 bg-white border border-border rounded-full flex flex-col items-center justify-center mb-5 shadow-sm">
                  <Icon className="text-primary" size={20} />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-hindi text-forest font-bold text-base mb-1">{step.titleHindi}</h3>
                <p className="font-sans text-muted text-xs uppercase tracking-wider font-semibold mb-2">{step.title}</p>
                <p className="font-hindi text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-border" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex gap-5 relative">
                <div className="w-14 h-14 bg-white border border-border rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-sm relative">
                  <Icon className="text-primary" size={20} />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <h3 className="font-hindi font-bold text-forest text-base mb-0.5">{step.titleHindi}</h3>
                  <p className="font-sans text-muted text-xs uppercase tracking-wider font-semibold mb-2">{step.title}</p>
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
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
