import type { Metadata } from "next";
import BookClient from "./book-client";

export const metadata: Metadata = {
  title: "Book Appointment – Gastroenterologist Ranchi | Confirm in 30 Min",
  description: "Book OPD with Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre Ranchi. Same-day appointment confirmation. Stomach, liver & digestive care. Mon–Sat, 10am–8pm.",
  alternates: { canonical: "https://drakhileshgastro.com/book" },
  keywords: ["book appointment gastroenterologist ranchi", "dr akhilesh yadav appointment", "orchid medical centre opd ranchi", "liver doctor appointment ranchi"],
};

export default function BookPage() {
  return <BookClient />;
}
