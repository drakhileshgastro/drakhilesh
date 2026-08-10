import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Dr Akhilesh Yadav | Gastroenterologist Ranchi",
  description: "Get in touch to contact Dr Akhilesh Yadav at Orchid Medical Centre, Ranchi. Find phone numbers, WhatsApp, clinic timings, and maps.",
  alternates: { canonical: "https://drakhileshgastro.com/contact" },
  openGraph: {
    type: "website",
    url: "https://drakhileshgastro.com/contact",
    title: "Contact Dr. Akhilesh Yadav | Gastroenterologist Ranchi",
    description: "Contact Dr. Akhilesh Yadav at Orchid Medical Centre, HB Road, Ranchi. Book an appointment via phone, WhatsApp, or online form.",
    images: [{ url: "https://drakhileshgastro.com/dr-akhilesh-improved.png", width: 1200, height: 630, alt: "Contact Dr. Akhilesh Yadav — Gastroenterologist Ranchi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Akhilesh Yadav | Gastroenterologist Ranchi",
    description: "Book an appointment with Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi.",
    images: ["https://drakhileshgastro.com/dr-akhilesh-improved.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
