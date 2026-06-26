import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Admin client with service role key — never expose to browser
function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!serviceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY not set");
  return createClient(url, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
}

export async function GET() {
  try {
    const admin = createAdminClient();
    const { data, error } = await admin.auth.admin.listUsers();
    if (error) return NextResponse.json({ users: [] });

    const users = data.users.map((u) => ({
      id: u.id,
      email: u.email,
      role: (u.user_metadata?.role as string) ?? "telecaller",
      created_at: u.created_at,
      last_sign_in_at: u.last_sign_in_at ?? null,
    }));

    return NextResponse.json({ users });
  } catch {
    return NextResponse.json({ users: [], error: "Service role key not configured" });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ success: false, error: "Password must be at least 8 characters" }, { status: 400 });
    }

    const admin = createAdminClient();
    const { data, error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role, name: role === "doctor" ? "Dr. Akhilesh Yadav" : "Telecaller" },
    });

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 400 });

    return NextResponse.json({ success: true, userId: data.user.id });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Service role key not configured. Add SUPABASE_SERVICE_ROLE_KEY to Vercel env vars." }, { status: 500 });
  }
}
