import Link from "next/link";
import { GraduationCap, Building2, FileText, Languages } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const details = [
  { icon: GraduationCap, title: "DM Gastroenterology", text: "Consultations for stomach, intestinal and liver conditions." },
  { icon: Building2, title: "Orchid Medical Centre", text: "HB Road, Ranchi. Confirm visit details with the clinic." },
  { icon: Languages, title: "Hindi Consultation", text: "Discuss symptoms, reports and treatment questions in Hindi." },
  { icon: FileText, title: "Preparation & Follow-up", text: "Bring previous reports and a medicine list; ask about your individual care plan." },
];
export default function TrustSection() {
  return <section className="bg-white py-20 lg:py-24 border-t border-border/40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="font-hindi text-3xl font-bold text-forest mb-4">परामर्श की जानकारी</h2>
        <p className="font-sans text-muted">{DOCTOR.name} · {DOCTOR.qualification}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {details.map(({icon: Icon, title, text}) => <div key={title} className="border border-border rounded-2xl p-6">
          <Icon size={24} className="text-primary mb-3" />
          <h3 className="font-bold text-forest mb-2">{title}</h3><p className="text-muted text-sm leading-relaxed">{text}</p>
        </div>)}
      </div>
      <div className="text-center mt-8"><Link href="/contact" className="text-primary font-semibold">Clinic location and contact details</Link></div>
    </div>
  </section>;
}
