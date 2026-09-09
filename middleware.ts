import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, getExpectedToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;
  const expected = await getExpectedToken();

  if (cookie === expected) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("next", req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/learn/:path*"],
};
