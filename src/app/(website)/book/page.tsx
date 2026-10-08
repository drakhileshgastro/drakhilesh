import type { Metadata } from "next";
import BookClient from "./book-client";

export const metadata: Metadata = {
  title: "Book Appointment – Gastroenterologist Ranchi | Confirm in 30 Min",
  description: "Book OPD with Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre Ranchi. Same-day appointment confirmation. Stomach, liver & digestive care. Mon–Sat, 10am–8pm.",
  alternates: { canonical: "https://drakhileshgastro.com/book" },
  keywords: ["book appointment gastroenterologist ranchi", "dr akhilesh yadav appointment", "orchid medical centre opd ranchi", "liver doctor appointment ranchi"],
  openGraph: {
    type: "website",
    url: "https://drakhileshgastro.com/book",
    title: "Book Appointment – Gastroenterologist Ranchi | Dr. Akhilesh Yadav",
    description: "Book OPD slot with Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Fast callback & confirmed slot.",
    images: [{ url: "https://drakhileshgastro.com/dr-akhilesh-improved.png", width: 1200, height: 630, alt: "Book Appointment with Dr. Akhilesh Yadav" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment – Gastroenterologist Ranchi | Dr. Akhilesh Yadav",
    description: "Consult Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Expert liver & stomach care.",
    images: ["https://drakhileshgastro.com/dr-akhilesh-improved.png"],
  },
};

export default function BookPage() {
  return <BookClient />;
}
