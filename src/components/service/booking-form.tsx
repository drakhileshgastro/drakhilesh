"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle, Send, Sun, Moon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/cn";
import { CONDITIONS, DOCTOR } from "@/lib/constants";
import { trackBookingConversion } from "@/lib/analytics";

const TIME_SLOTS = [
  { value: "Morning (10am–2pm)", label: "Morning OPD", time: "10am – 2pm", icon: Sun },
  { value: "Evening (5pm–8pm)", label: "Evening OPD", time: "5pm – 8pm", icon: Moon },
] as const;

const schema = z.object({
  patient_name: z.string().min(2, "Please enter your name"),
  patient_phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit number"),
  patient_city: z.string().min(2, "Please enter your city"),
  condition: z.string().min(1, "Please select a condition"),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface BookingFormProps {
  defaultCondition?: string;
  compact?: boolean;
}

export default function BookingForm({ defaultCondition, compact = false }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { condition: defaultCondition ?? "", preferred_time: "" },
  });

  const selectedTime = watch("preferred_time");

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "Website Form" }),
      });
      const result = await res.json();
      if (result.success) {
        trackBookingConversion(data.condition);
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
      <div className="bg-bg-sand/20 border border-primary/40 rounded-2xl p-6 text-center space-y-4 shadow-3xs">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <h3 className="text-forest font-sans font-bold text-base leading-tight">Request Successfully Filed</h3>
          <p className="text-muted text-xs font-hindi mt-1">हमारी टीम जल्द आपसे संपर्क करेगी।</p>
        </div>
        <div className="bg-white border border-border/60 rounded-xl p-3">
          <span className="text-[9px] text-muted uppercase font-bold tracking-wider block font-sans">Request ID</span>
          <span className="text-forest font-mono font-bold text-xs">{leadId}</span>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-1.5 h-11 bg-whatsapp text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl shadow-xs"
        >
          <MessageCircle size={14} /> Send WhatsApp Text
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {/* Patient Name */}
      <div className="space-y-1">
        <input
          {...register("patient_name")}
          type="text"
          placeholder="Full Name / पूरा नाम *"
          className={cn(
            "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/60 font-sans",
            errors.patient_name ? "border-red-400 bg-red-50/10" : "border-border/80"
          )}
        />
        {errors.patient_name && <p className="text-red-500 text-xs font-sans">{errors.patient_name.message}</p>}
      </div>

      {/* Patient Phone */}
      <div className="space-y-1">
        <input
          {...register("patient_phone")}
          type="tel"
          placeholder="Mobile Number / मोबाइल *"
          maxLength={10}
          className={cn(
            "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/60 font-sans",
            errors.patient_phone ? "border-red-400 bg-red-50/10" : "border-border/80"
          )}
        />
        {errors.patient_phone && <p className="text-red-500 text-xs font-sans">{errors.patient_phone.message}</p>}
      </div>

      {/* Patient City */}
      <div className="space-y-1">
        <input
          {...register("patient_city")}
          type="text"
          placeholder="City / District / शहर *"
          className={cn(
            "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/60 font-sans",
            errors.patient_city ? "border-red-400 bg-red-50/10" : "border-border/80"
          )}
        />
        {errors.patient_city && <p className="text-red-500 text-xs font-sans">{errors.patient_city.message}</p>}
      </div>

      {/* Condition Selection */}
      <div className="space-y-1">
        <div className="relative">
          <select
            {...register("condition")}
            className={cn(
              "w-full px-4 h-11 border rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors appearance-none font-sans",
              errors.condition ? "border-red-400 bg-red-50/10" : "border-border/80"
            )}
          >
            <option value="">Select Condition / बीमारी चुनें *</option>
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted/60 text-xs">▼</div>
        </div>
        {errors.condition && <p className="text-red-500 text-xs font-sans">{errors.condition.message}</p>}
      </div>

      {/* Date + Time Preference (only if not compact) */}
      {!compact && (
        <>
          <div className="space-y-1">
            <input
              {...register("preferred_date")}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 h-11 border border-border/80 rounded-xl text-forest text-sm bg-white focus:outline-none focus:border-primary transition-colors font-sans"
            />
            <p className="text-muted/70 text-[11px] font-sans pl-1">Preferred date (optional)</p>
          </div>

          {/* Time slot picker */}
          <div className="space-y-2">
            <p className="text-forest text-xs font-sans font-semibold">Preferred Time Slot <span className="text-muted/60 font-normal">(optional)</span></p>
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((slot) => {
                const Icon = slot.icon;
                const isSelected = selectedTime === slot.value;
                return (
                  <button
                    key={slot.value}
                    type="button"
                    onClick={() => setValue("preferred_time", isSelected ? "" : slot.value)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-3 rounded-xl border text-left transition-all",
                      isSelected
                        ? "border-primary bg-primary-light text-primary"
                        : "border-border/80 bg-white text-muted hover:border-primary/50"
                    )}
                  >
                    <Icon size={15} className={isSelected ? "text-primary" : "text-muted/60"} />
                    <div>
                      <p className="text-[11px] font-bold font-sans leading-none">{slot.label}</p>
                      <p className="text-[10px] font-sans mt-0.5 opacity-75">{slot.time}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
      >
        <Send size={12} />
        {isSubmitting ? "Submitting Request..." : "Request Appointment"}
      </button>

    </form>
  );
}
