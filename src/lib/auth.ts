import { NextRequest, NextResponse } from "next/server";
import { User } from "@supabase/supabase-js";
import { createSupabaseServer } from "@/lib/supabase-server";

export type AppRole = "admin" | "doctor" | "telecaller" | "editor" | "reviewer" | string;

export function getUserRole(user: User | null): AppRole | null {
  if (!user) return null;
  // Prefer app_metadata (service-role-only, user cannot self-modify).
  // Fall back to user_metadata only for legacy accounts created before this fix.
  const role = user.app_metadata?.role ?? user.user_metadata?.role;
  return typeof role === "string" ? role : null;
}

export function isAdminRole(role: AppRole | null): boolean {
  return role === "admin" || role === "doctor";
}

export function isCrmRole(role: AppRole | null): boolean {
  return isAdminRole(role) || role === "telecaller";
}

export async function requireAdmin() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      ok: false as const,
      response: NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 }),
    };
  }

  if (!isAdminRole(getUserRole(user))) {
    return {
      ok: false as const,
      response: NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 }),
    };
  }

  return { ok: true as const, user, supabase };
}

export async function requireCrmUser() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      ok: false as const,
      response: NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 }),
    };
  }

  if (!isCrmRole(getUserRole(user))) {
    return {
      ok: false as const,
      response: NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 }),
    };
  }

  return { ok: true as const, user, supabase };
}

export function getInternalApiSecret(): string | undefined {
  return process.env.INTERNAL_API_SECRET ?? process.env.CRON_SECRET;
}

export function requireInternalRequest(req: NextRequest): NextResponse | null {
  const secret = getInternalApiSecret();
  if (!secret) {
    return NextResponse.json({ success: false, error: "Internal API secret is not configured" }, { status: 500 });
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  return null;
}

export function requireCronRequest(req: NextRequest): NextResponse | null {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ success: false, error: "CRON_SECRET is not configured" }, { status: 500 });
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  return null;
}

export function internalAuthHeaders(): Record<string, string> {
  const secret = getInternalApiSecret();
  return secret ? { Authorization: `Bearer ${secret}` } : {};
}
