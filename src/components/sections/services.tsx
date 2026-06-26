import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-3">
            Conditions We Treat
          </h2>
          <p className="text-slate text-sm max-w-xl mx-auto leading-relaxed font-hindi">
            पेट, लिवर और पाचन तंत्र की सभी बीमारियों का विशेषज्ञ उपचार
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl p-5 border border-gray-light hover:border-teal hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-teal-light transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-navy font-bold text-base mb-0.5 leading-tight">{service.title}</h3>
                  <p className="text-gray-muted text-xs font-hindi mb-2">{service.hindiTitle}</p>
                  <p className="text-slate text-xs leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-teal text-xs font-semibold group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold text-sm rounded-xl hover:bg-navy hover:text-white transition-colors"
          >
            View All 15 Conditions
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
