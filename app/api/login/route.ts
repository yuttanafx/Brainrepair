import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, getExpectedToken } from "@/lib/auth";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { password, next } = await req.json();
  const correctPassword = process.env.COURSE_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json(
      { error: "server_not_configured" },
      { status: 500 }
    );
  }

  if (password !== correctPassword) {
    return NextResponse.json({ error: "invalid_password" }, { status: 401 });
  }

  const token = await getExpectedToken();
  const res = NextResponse.json({ ok: true, redirect: next || "/learn" });

  res.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return res;
}
