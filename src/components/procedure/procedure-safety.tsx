import { ShieldCheck, Heart } from "lucide-react";

interface ProcedureSafetyProps {
  title: string;
  safetySedation: string;
}

export default function ProcedureSafety({ title, safetySedation }: ProcedureSafetyProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Safety &amp; Comfort
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            सुरक्षा और बेहोशी (Sedation) की जानकारी
          </h2>
          <p className="font-sans text-muted text-base mt-3">
            Ensuring patient safety, pain-free delivery, and sterile clinical standards.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start bg-white border border-border rounded-3xl p-8 lg:p-10 shadow-sm">
          {/* Left Icon Area */}
          <div className="md:col-span-3 flex md:flex-col items-center justify-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-primary" size={32} />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-forest uppercase tracking-wider">100% Sterile</p>
              <p className="text-[10px] text-muted font-sans uppercase font-semibold mt-0.5">International Protocols</p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="md:col-span-9 space-y-4">
            <h3 className="text-forest font-sans font-bold text-lg leading-snug">
              Is {title} Safe and Painless?
            </h3>
            <p className="font-sans text-muted text-base leading-relaxed">
              {safetySedation}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-primary font-bold font-sans uppercase tracking-wider">
              <Heart size={14} className="fill-primary text-primary" /> Patient Comfort is Our Highest Priority
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
