import Link from "next/link";
export default function ProcedureReviews({ title }: { title: string; procedureSlug: string }) {
  return <section className="bg-bg-sand/30 py-16 border-t border-border/40">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="font-hindi text-3xl font-bold text-forest mb-4">Questions to ask about {title}</h2>
      <ul className="list-disc pl-5 space-y-3 text-muted">
        <li>Why is this procedure being considered, and what are the alternatives?</li>
        <li>What preparation, medicine instructions, sedation options and risks apply to me?</li>
        <li>What does the estimate include, and when will reports and follow-up be available?</li>
      </ul>
      <Link href="/contact" className="inline-block mt-6 text-primary font-semibold">Clinic contact information</Link>
    </div>
  </section>;
}
