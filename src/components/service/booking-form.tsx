"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/cn";
import { CONDITIONS, DOCTOR } from "@/lib/constants";

const schema = z.object({
  patient_name: z.string().min(2, "Please enter your name"),
  patient_phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit number"),
  patient_city: z.string().min(2, "Please enter your city"),
  condition: z.string().min(1, "Please select a condition"),
  preferred_date: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface BookingFormProps {
  defaultCondition?: string;
  compact?: boolean;
}

export default function BookingForm({ defaultCondition, compact = false }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { condition: defaultCondition ?? "" },
  });

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "Website Form" }),
      });
      const result = await res.json();
      if (result.success) {
        setLeadId(result.lead_id || "REQ-" + Date.now().toString(36).toUpperCase());
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please call us directly.");
      }
    } catch {
      toast.error("Network error. Please call us or WhatsApp.");
    }
  }

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-light p-6 text-center shadow-sm">
        <div className="w-14 h-14 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-teal" />
        </div>
        <h3 className="text-navy font-bold text-lg mb-1">Request Received!</h3>
        <p className="text-slate text-sm mb-3 font-hindi">हमारी team 2 घंटे में call करेगी।</p>
        <div className="bg-offwhite rounded-xl px-4 py-3 mb-4">
          <p className="text-xs text-gray-muted mb-1">Request ID</p>
          <p className="text-navy font-bold text-sm font-mono">{leadId}</p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-white text-sm font-semibold rounded-xl"
        >
          <MessageCircle size={16} />
          Also WhatsApp us
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-light shadow-sm overflow-hidden">
      <div className="bg-teal px-5 py-4">
        <p className="text-white font-bold text-base">Book an Appointment</p>
        <p className="text-teal-light text-xs font-hindi mt-1 leading-relaxed">हमारी team 2 घंटे में call करेगी</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-3", compact ? "p-4" : "p-5")}>
        <div>
          <input
            {...register("patient_name")}
            type="text"
            placeholder="Full Name / पूरा नाम *"
            className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
              errors.patient_name ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")}
          />
          {errors.patient_name && <p className="text-red-500 text-xs mt-1">{errors.patient_name.message}</p>}
        </div>

        <div>
          <input
            {...register("patient_phone")}
            type="tel"
            placeholder="Mobile Number / मोबाइल *"
            maxLength={10}
            className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
              errors.patient_phone ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")}
          />
          {errors.patient_phone && <p className="text-red-500 text-xs mt-1">{errors.patient_phone.message}</p>}
        </div>

        <div>
          <input
            {...register("patient_city")}
            type="text"
            placeholder="City / District / शहर *"
            className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy placeholder-gray-muted",
              errors.patient_city ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")}
          />
          {errors.patient_city && <p className="text-red-500 text-xs mt-1">{errors.patient_city.message}</p>}
        </div>

        <div>
          <select
            {...register("condition")}
            className={cn("w-full px-4 py-3 text-sm border rounded-xl focus:outline-none focus:border-teal transition-colors text-navy appearance-none",
              errors.condition ? "border-red-400 bg-red-50" : "border-gray-light bg-offwhite")}
          >
            <option value="">Select Condition *</option>
            {CONDITIONS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition.message}</p>}
        </div>

        {!compact && (
          <input
            {...register("preferred_date")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal transition-colors text-navy"
          />
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors disabled:opacity-60 shadow-sm"
        >
          {isSubmitting ? "Submitting..." : "Request Appointment →"}
        </button>
        <p className="text-gray-muted text-xs text-center">No OTP · Free consultation call · 2-hour callback</p>
      </form>
    </div>
  );
}
