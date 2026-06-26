import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function createUser(email: string, password: string, role: string) {
  // Try admin API first (requires service role key)
  if (SERVICE_KEY) {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
      },
      body: JSON.stringify({
        email,
        password,
        email_confirm: true,
        user_metadata: { role, name: role === "doctor" ? "Dr. Akhilesh Yadav" : "Telecaller" },
      }),
    });
    const data = await res.json();
    if (res.ok) return { success: true };
    return { success: false, error: data.message || data.error_description || "Failed" };
  }

  // Fallback: use signUp with anon key
  const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      email,
      password,
      data: { role, name: role === "doctor" ? "Dr. Akhilesh Yadav" : "Telecaller" },
    }),
  });
  const data = await res.json();
  if (data.error) return { success: false, error: data.error_description || data.error };
  if (data.id || data.user?.id) return { success: true };
  return { success: false, error: "Unexpected response" };
}

export async function POST(req: NextRequest) {
  try {
    const { doctorEmail, doctorPassword, telecallerEmail, telecallerPassword } = await req.json();

    if (!doctorEmail || !doctorPassword || !telecallerEmail || !telecallerPassword) {
      return NextResponse.json({ success: false, error: "All fields required" }, { status: 400 });
    }

    if (doctorPassword.length < 8 || telecallerPassword.length < 8) {
      return NextResponse.json({ success: false, error: "Passwords must be at least 8 characters" }, { status: 400 });
    }

    const [doctorResult, telecallerResult] = await Promise.all([
      createUser(doctorEmail, doctorPassword, "doctor"),
      createUser(telecallerEmail, telecallerPassword, "telecaller"),
    ]);

    return NextResponse.json({
      doctor: doctorResult.success ? "Created ✓" : `Failed: ${doctorResult.error}`,
      telecaller: telecallerResult.success ? "Created ✓" : `Failed: ${telecallerResult.error}`,
      success: doctorResult.success && telecallerResult.success,
    });
  } catch (err) {
    console.error("Setup error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
