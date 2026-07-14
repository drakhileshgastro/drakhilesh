import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { getUserRole, isAdminRole, isCrmRole } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  // ── 1. Generate CSP nonce ──────────────────────────────────────
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    // nonce + strict-dynamic: modern browsers trust nonce-tagged scripts and what they load.
    // URL allowlists are kept as fallback for older browsers without strict-dynamic support.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://graph.facebook.com",
    "frame-src 'self' https://www.google.com",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  // Build augmented request headers — includes x-nonce so server components can read it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  // ── 2. Supabase SSR session refresh ────────────────────────────
  // Required by @supabase/ssr: without this, auth cookies aren't refreshed on the server
  // and server-side getUser() calls fail even for valid sessions.
  let response = NextResponse.next({ request: { headers: requestHeaders } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Mutate request cookies (makes them available to route handlers)
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          // Rebuild response preserving x-nonce and applying refreshed cookies
          const updatedHeaders = new Headers(request.headers);
          updatedHeaders.set("x-nonce", nonce);
          response = NextResponse.next({ request: { headers: updatedHeaders } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Validates and refreshes the session — MUST be called on every navigation
  const { data: { user } } = await supabase.auth.getUser();

  // ── 3. CRM / Admin Role Authentication and Authorization ────────
  const { pathname } = request.nextUrl;
  const isCRM = pathname.startsWith("/crm") && pathname !== "/crm/login";
  const isAdmin = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (isCRM || isAdmin) {
    if (!user) {
      const loginUrl = isAdmin ? "/admin/login" : "/crm/login";
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }

    const role = getUserRole(user);

    if (isAdmin && !isAdminRole(role)) {
      return NextResponse.redirect(new URL("/crm", request.url));
    }

    if (isCRM && !isCrmRole(role)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // ── 4. Apply CSP to response ───────────────────────────────────
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Run on all page routes — skip API routes, Next.js internals, and static assets
    "/((?!api|_next/static|_next/image|favicon\\.ico|icons|images|manifest\\.json|sw\\.js).*)",
  ],
};
