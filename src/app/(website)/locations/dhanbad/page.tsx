import type { Metadata } from "next";
import DhanbadClient from "./dhanbad-client";

export const metadata: Metadata = {
  title: "Best Gastroenterologist in Dhanbad | Dr. Akhilesh Yadav Ranchi",
  description: "Specialist stomach, liver & digestive care for Dhanbad patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. 2.5 hrs travel via NH-2 to Ranchi. Book priority OPD slot.",
  alternates: { canonical: "https://drakhileshgastro.com/locations/dhanbad" },
};

export default function DhanbadLocationPage() {
  return <DhanbadClient />;
}
