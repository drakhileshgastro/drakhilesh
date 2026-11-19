import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAdmin();
    if (!auth.ok) return auth.response;

    const { email, userId, newPassword } = await req.json();
    if (!email && !userId) {
      return NextResponse.json({ success: false, error: "Email or UserId required" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drakhileshgastro.com";
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // If admin is directly setting a new password for a user
    if (newPassword && userId && serviceKey && serviceKey !== "your_supabase_service_role_key_here") {
      if (newPassword.length < 8) {
        return NextResponse.json({ success: false, error: "Password must be at least 8 characters" }, { status: 400 });
      }

      const adminClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });

      const { error } = await adminClient.auth.admin.updateUserById(userId, { password: newPassword });
      if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });
      return NextResponse.json({ success: true, direct: true, message: "Password updated successfully" });
    }

    // Otherwise send self-service reset email via Supabase
    if (!email) {
      return NextResponse.json({ success: false, error: "Email required to send reset link" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl}/admin/reset-password`,
    });

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    return NextResponse.json({ success: true, message: `Reset link dispatched to ${email}` });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
