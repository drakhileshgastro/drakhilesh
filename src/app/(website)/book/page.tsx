import type { Metadata } from "next";
import BookClient from "./book-client";

export const metadata: Metadata = {
  title: "Book Appointment with Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
  description: "Book OPD appointment with Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, Ranchi. Free callback within 2 hours. No online payment required.",
  alternates: { canonical: "https://drakhileshgastro.com/book" },
  keywords: ["book appointment gastroenterologist ranchi", "dr akhilesh yadav appointment", "orchid medical centre opd ranchi", "liver doctor appointment ranchi"],
};

export default function BookPage() {
  return <BookClient />;
}
