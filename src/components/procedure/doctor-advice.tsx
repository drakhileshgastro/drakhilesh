export default function DoctorAdvice({ advice }: { advice: string }) {
  return <section className="bg-bg-sand py-16 border-t border-border/40"><div className="max-w-4xl mx-auto px-4 sm:px-6">
    <div className="bg-white border border-border rounded-3xl p-8 space-y-4">
      <h3 className="text-forest font-semibold">Questions and follow-up considerations</h3>
      <p className="font-hindi text-forest/90 leading-relaxed">{advice}</p>
      <p className="text-muted text-xs">General educational information; discuss your individual plan with the procedure team.</p>
    </div>
  </div></section>;
}
