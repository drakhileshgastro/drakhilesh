import type { Metadata } from "next";
import AdminUsers from "@/components/admin/admin-users";

export const metadata: Metadata = {
  title: "User Management | Admin — Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminUsersPage() {
  return <AdminUsers />;
}
