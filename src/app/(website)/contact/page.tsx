import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
  description: "Contact Dr. Akhilesh Yadav at Orchid Medical Centre, HB Road, Ranchi. Call, WhatsApp or fill our form. Serving patients from all Jharkhand districts.",
  alternates: { canonical: "https://drakhileshgastro.com/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
