import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface SymptomAppointmentCTAProps {
  title: string;
}

export default function SymptomAppointmentCTA({ title }: SymptomAppointmentCTAProps) {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke baare me jankari chahiye.`
  )}`;

  return (
    <section className="bg-bg-sand py-16 lg:py-24 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column — Clinical Facility Photo */}
          <div className="md:col-span-5 w-full">
            <div className="aspect-[4/5] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs max-w-xs mx-auto border border-border/20">
              <img
                src="/dr-akhilesh-improved.png"
                alt="Dr. Akhilesh Yadav - Leading Stomach and Liver Specialist in Ranchi, Jharkhand"
                title="Dr. Akhilesh Yadav - Gastroenterology Consultation"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column — Conversion CTAs */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-primary-light border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
              Clinical Assessment
            </div>
            
            <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
              लगातार {title} रहने पर डॉ. अखिलेश यादव से परामर्श लें
            </h2>
            
            <p className="font-sans text-muted text-base leading-relaxed">
              If your symptom persists or causes daily discomfort, schedule a physical consultation at Orchid Medical Centre, Ranchi, for an accurate diagnosis and treatment plan.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
              >
                <Calendar size={15} /> Book Appointment
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
  );
}
