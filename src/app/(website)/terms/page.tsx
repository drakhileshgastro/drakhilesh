import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | Dr. Akhilesh Yadav — Gastroenterologist Ranchi`,
  description: `Terms and conditions for consulting Dr. Akhilesh Yadav. Booking disclaimers, procedure guidelines, and general medical website terms.`,
  alternates: { canonical: "https://drakhileshgastro.com/terms" },
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-bg-sand/20 py-16 sm:py-24 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline mb-8 uppercase tracking-wider"
        >
          <ArrowLeft size={14} /> Back to Homepage
        </Link>

        {/* Content Card */}
        <div className="bg-white border border-border rounded-3xl p-8 sm:p-12 shadow-xs space-y-8">
          
          <div className="flex items-center gap-3 pb-6 border-b border-border/60">
            <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary">
              <FileText size={22} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-forest">Terms &amp; Conditions</h1>
              <p className="text-muted text-xs mt-1">Last Updated: July 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              Welcome to the official website of <strong>{DOCTOR.name}</strong> (drakhileshgastro.com). By accessing and utilizing this website or requesting clinical appointments through our online forms, you agree to comply with and be bound by the following terms of use.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">1. Medical Content Disclaimer</h2>
            <p>
              The information, including text, graphics, Hindi translations, and general medical advice on this website is for **informational and educational purposes only**. It does not constitute professional medical diagnosis, clinical treatment, or a physician-patient relationship.
            </p>
            <p>
              Always consult directly with <strong>Dr. Akhilesh Yadav</strong> or another qualified healthcare specialist in a physical clinic setting regarding specific symptoms, diagnostic reports, or medical concerns. Never ignore professional medical advice or delay seeking care because of something you read here.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">2. Appointment & Callback Requests</h2>
            <p>
              By submitting your name, phone number, and location details on our consultation request forms, you authorize our administrative support team to contact you via phone calls, SMS, or WhatsApp to schedule a physical consultation or answer basic operational inquiries.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Online callback requests do not guarantee immediate appointment confirmations. Final slots depend on clinic OPD queues at Orchid Medical Centre.</li>
              <li>Outstation patients (traveling from Dhanbad, Hazaribagh, etc.) are highly encouraged to contact our team in advance to ensure slot priority.</li>
            </ul>

            <h2 className="text-lg font-display font-bold text-forest pt-4">3. Fasting (NPO) & Daycare Procedure Guidelines</h2>
            <p>
              If you are scheduling diagnostic tests (such as Upper GI Endoscopy, Colonoscopy, or ERCP), you must strictly follow the clinical preparation guidelines provided by our medical team.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Endoscopy Preparation:</strong> Requires strict fasting (Nil Per Os / NPO) for 6 to 8 hours prior. Consuming any solid or liquid (including water) during fasting increases anesthetic risk and will result in rescheduling.</li>
              <li><strong>Post-Procedure Companion:</strong> Because conscious sedation is administered, you will be sleepy after procedures. A relative or companion must be present to escort you home safely.</li>
            </ul>

            <h2 className="text-lg font-display font-bold text-forest pt-4">4. No Emergency Services</h2>
            <p>
              This website is **not** monitored 24/7 for acute medical emergencies. If you are experiencing sudden severe chest pain, extreme abdominal pain, persistent vomiting of blood, or high-grade fever, please proceed immediately to the nearest hospital emergency ward or contact Orchid Medical Centre emergency lines directly.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Jharkhand, India. Any disputes arising in connection with website services shall be subject to the exclusive jurisdiction of the courts in Ranchi.
            </p>

          </div>

        </div>

      </div>
    </article>
  );
}
