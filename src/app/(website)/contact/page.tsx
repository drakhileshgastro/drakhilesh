import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Dr Akhilesh Yadav | Gastroenterologist Ranchi",
  description: "Get in touch to contact Dr Akhilesh Yadav at Orchid Medical Centre, Ranchi. Find phone numbers, WhatsApp, clinic timings, and maps.",
  alternates: { canonical: "https://drakhileshgastro.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
