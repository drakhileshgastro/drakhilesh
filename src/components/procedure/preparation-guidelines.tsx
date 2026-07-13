import { CheckCircle2, Info } from "lucide-react";

interface PreparationGuidelinesProps {
  title: string;
  fasting: string;
  diet: string;
  medicines: string;
  documents: string;
  companion: string;
}

export default function PreparationGuidelines({
  title,
  fasting,
  diet,
  medicines,
  documents,
  companion,
}: PreparationGuidelinesProps) {
  const blocks = [
    { label: "1. Fasting (व्रत/खाली पेट)", val: fasting },
    { label: "2. Diet Guidelines (खान-पान)", val: diet },
    { label: "3. Regular Medicines (दवाइयाँ)", val: medicines },
    { label: "4. Documents (आवश्यक कागजात)", val: documents },
    { label: "5. Family Member (साथी/अभिभावक)", val: companion },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Patient Guidelines
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} से पहले क्या तैयारी करें?
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Important checklist parameters before your scheduled procedure.
          </p>
        </div>

        {/* Preparation Checklists Grid */}
        <div className="space-y-6">
          {blocks.map((block, idx) => (
            <div key={idx} className="bg-bg-sand/30 border border-border rounded-2xl p-6 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="text-primary" size={16} />
              </div>
              <div>
                <h3 className="text-forest font-sans font-bold text-base leading-snug">
                  {block.label}
                </h3>
                <p className="font-hindi text-muted text-sm sm:text-base leading-relaxed mt-1">
                  {block.val}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Note Disclaimer */}
        <div className="mt-12 bg-primary-light/50 border border-primary-light rounded-2xl p-6 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
            <Info className="text-primary" size={20} />
          </div>
          <div>
            <p className="font-hindi text-forest font-bold text-sm mb-1">
              अस्पताल पहुंचने से पहले सुनिश्चित करें
            </p>
            <p className="font-sans text-muted text-xs leading-relaxed">
              If preparation instructions are not fully followed, the imaging quality might be compromised, which could require rescheduling. Please call Orchid Medical Centre for clarifications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
