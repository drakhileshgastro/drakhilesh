import type { Metadata } from "next";
import LeadsPage from "@/components/crm/leads-page";

export const metadata: Metadata = {
  title: "Leads | Dr. Akhilesh CRM",
  robots: { index: false, follow: false },
};

export default function CrmLeadsPage() {
  return <LeadsPage />;
}
