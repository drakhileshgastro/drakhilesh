import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { getUserRole, isAdminRole, isCrmRole } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isCRM = pathname.startsWith("/crm") && pathname !== "/crm/login";
  const isAdmin = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (!isCRM && !isAdmin) return NextResponse.next();

  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

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

  return response;
}

export const config = {
  matcher: ["/crm/:path*", "/admin/:path*"],
};
