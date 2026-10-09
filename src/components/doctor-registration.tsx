import { DOCTOR_REGISTRATION } from "@/lib/constants";
export default function DoctorRegistration() {
  if (!DOCTOR_REGISTRATION) return null;
  return <p className="text-sm leading-relaxed">Medical registration: {DOCTOR_REGISTRATION.number} · {DOCTOR_REGISTRATION.council} · {DOCTOR_REGISTRATION.status}</p>;
}
