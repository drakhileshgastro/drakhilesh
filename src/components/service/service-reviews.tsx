import Link from "next/link";
export default function ServiceReviews({ title }: { title: string; conditionSlug: string }) {
  return <section className="bg-bg-sand/30 py-16 border-t border-border/40">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="font-hindi text-3xl font-bold text-forest mb-4">Consultation for {title}</h2>
      <ul className="list-disc pl-5 space-y-3 text-muted">
        <li>Bring previous reports, prescriptions and a list of current medicines.</li>
        <li>Ask what the assessment suggests, whether tests are needed, and what alternatives are available.</li>
        <li>Discuss expected benefits, possible side effects and the follow-up plan. Outcomes differ between patients.</li>
      </ul>
      <Link href="/patient-guide" className="inline-block mt-6 text-primary font-semibold">Read the patient visit guide</Link>
    </div>
  </section>;
}
