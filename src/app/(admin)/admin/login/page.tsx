import type { Metadata } from "next";
import AdminLoginClient from "./login-client";

export const metadata: Metadata = {
  title: "Admin Login | Dr. Akhilesh Gastro",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}
