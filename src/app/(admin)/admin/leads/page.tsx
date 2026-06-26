import type { Metadata } from "next";
import AdminLeads from "@/components/admin/admin-leads";

export const metadata: Metadata = {
  title: "All Leads | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return <AdminLeads />;
}
