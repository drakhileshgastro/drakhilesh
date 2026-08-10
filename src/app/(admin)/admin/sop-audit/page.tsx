import type { Metadata } from "next";
import SopAudit from "@/components/admin/sop-audit";

export const metadata: Metadata = {
  title: "SOP Compliance Audit | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminSopAuditPage() {
  return <SopAudit />;
}
