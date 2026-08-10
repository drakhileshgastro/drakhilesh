import type { Metadata } from "next";
import VisitorsAnalytics from "@/components/admin/visitors-analytics";

export const metadata: Metadata = {
  title: "Visitors Analytics | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminVisitorsPage() {
  return <VisitorsAnalytics />;
}
