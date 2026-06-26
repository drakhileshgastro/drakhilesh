import { TRUST_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-gray-light">
          {TRUST_STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center px-4 py-1">
              <span className="text-2xl md:text-3xl font-bold text-teal leading-tight">{stat.value}</span>
              <span className="text-slate text-xs md:text-sm font-medium mt-0.5">{stat.label}</span>
              <span className="text-gray-muted text-[11px] font-hindi mt-0.5">{stat.labelHindi}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
