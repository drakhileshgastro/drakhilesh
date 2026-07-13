import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | Dr. Akhilesh Yadav — Gastroenterologist Ranchi`,
  description: `Privacy policy for Dr. Akhilesh Yadav's official clinical website. Learn how we handle and protect patient information and consultation requests.`,
  alternates: { canonical: "https://drakhileshgastro.com/privacy" },
};

export default function PrivacyPolicyPage() {
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
              <Shield size={22} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-forest">Privacy Policy</h1>
              <p className="text-muted text-xs mt-1">Last Updated: July 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              At <strong>{DOCTOR.name}</strong> clinic, accessible from drakhileshgastro.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our website and how we use it.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">1. Information We Collect</h2>
            <p>
              When you submit an appointment booking or consultation request form on our website, we collect personal information you provide voluntarily, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your full name</li>
              <li>Your contact mobile number</li>
              <li>Your district or city of residence</li>
              <li>Your described medical symptom or query</li>
            </ul>

            <h2 className="text-lg font-display font-bold text-forest pt-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to facilitate medical consultations and patient care. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Calling or messaging you via phone or WhatsApp to coordinate appointment scheduling.</li>
              <li>Connecting you with our administrative and medical assistance team at {DOCTOR.hospital}.</li>
              <li>Understanding your symptoms beforehand to ensure you receive the appropriate clinic priority.</li>
            </ul>
            <p>
              We have a strict <strong>No Spam Guarantee</strong>. We never sell, rent, share, or disclose patient contact details to third-party marketing companies.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard technical measures to secure and safeguard all data received. Information is stored in password-protected CRM databases accessible only by authorized administrative personnel at Orchid Medical Centre.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">4. Cookies & Web Logs</h2>
            <p>
              Like most professional platforms, this site uses Google Analytics to capture anonymous website performance data (such as page views, visitor transit routes, and device types). Cookies help us understand how users navigate the site to improve content relevance and speed. No personally identifiable medical data is captured via cookies.
            </p>

            <h2 className="text-lg font-display font-bold text-forest pt-4">5. Contact Us</h2>
            <p>
              If you have any questions or require more information about our Privacy Policy, please contact us directly:
            </p>
            <div className="bg-bg-sand/35 border border-border/80 rounded-2xl p-5 space-y-1.5 text-xs sm:text-sm text-forest font-semibold">
              <p>📍 Address: {DOCTOR.address}</p>
              <p>📞 Phone: {DOCTOR.phone}</p>
              <p>🏥 Facility: {DOCTOR.hospital}, Ranchi</p>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
}
