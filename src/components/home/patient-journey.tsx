import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: "📅",
    titleHindi: "अपॉइंटमेंट बुक करें",
    title: "Book Appointment",
    desc: "ऑनलाइन फॉर्म भरें या सीधे कॉल करें। हमारी टीम 30 मिनट में संपर्क करेगी।",
    descEn: "Fill the form or call directly. Our team confirms within 30 minutes.",
  },
  {
    step: "02",
    icon: "📞",
    titleHindi: "कॉल आएगी",
    title: "Receive Callback",
    desc: "हमारी टीम आपकी समस्या सुनेगी और सही समय तय करेगी।",
    descEn: "Our team listens to your concern and schedules the right time.",
  },
  {
    step: "03",
    icon: "🏥",
    titleHindi: "क्लीनिक विजिट",
    title: "Visit the Clinic",
    desc: "Orchid Medical Centre, HB Road, Ranchi — साफ और आधुनिक सुविधाएं।",
    descEn: "Visit our clean, modern clinic in Ranchi — parking available.",
  },
  {
    step: "04",
    icon: "🔬",
    titleHindi: "जांच और निदान",
    title: "Diagnosis",
    desc: "डॉ. अखिलेश आपकी बात सुनेंगे, जांच करेंगे और सटीक निदान देंगे।",
    descEn: "Dr. Akhilesh listens, examines, and delivers accurate diagnosis.",
  },
  {
    step: "05",
    icon: "📋",
    titleHindi: "उपचार योजना",
    title: "Treatment Plan",
    desc: "आपकी बीमारी को आसान भाषा में समझाकर व्यक्तिगत इलाज योजना बनाई जाएगी।",
    descEn: "Personalized treatment plan explained clearly in Hindi.",
  },
  {
    step: "06",
    icon: "🌿",
    titleHindi: "ठीक होइए",
    title: "Recovery & Follow-up",
    desc: "लंबे समय तक फॉलोअप — आपकी रिकवरी हमारी ज़िम्मेदारी है।",
    descEn: "Long-term follow-up — your recovery is our responsibility.",
  },
];

export default function PatientJourney() {
  return (
    <section className="bg-bg-sand py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider border border-primary-light">
            Patient Journey
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-3">
            अपॉइंटमेंट से लेकर ठीक होने तक का सफर
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            We make your treatment journey simple, transparent, and worry-free — from first call to full recovery.
          </p>
        </div>

        {/* Timeline — Desktop horizontal, Mobile vertical */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-primary-light mx-16" />

          {steps.map((step, i) => (
            <div key={step.step} className="flex-1 relative flex flex-col items-center text-center px-2">
              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 bg-white border-2 border-primary-light rounded-full flex flex-col items-center justify-center mb-5 shadow-sm">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-[10px] font-bold text-primary">{step.step}</span>
              </div>
              <h3 className="font-hindi text-forest font-bold text-sm mb-1">{step.titleHindi}</h3>
              <p className="text-muted text-[11px] font-medium mb-2">{step.title}</p>
              <p className="text-muted text-xs leading-relaxed font-hindi">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-4 relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary-light" />
          {steps.map((step) => (
            <div key={step.step} className="flex gap-5 relative">
              <div className="w-14 h-14 bg-white border-2 border-primary-light rounded-full flex flex-col items-center justify-center flex-shrink-0 z-10 shadow-sm">
                <span className="text-xl">{step.icon}</span>
                <span className="text-[9px] font-bold text-primary">{step.step}</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-4 border border-border">
                <h3 className="font-hindi font-bold text-forest text-sm mb-0.5">{step.titleHindi}</h3>
                <p className="text-muted text-xs font-medium mb-1">{step.title}</p>
                <p className="text-muted text-xs leading-relaxed font-hindi">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-colors shadow-sm"
          >
            📅 अपना सफर शुरू करें — Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
