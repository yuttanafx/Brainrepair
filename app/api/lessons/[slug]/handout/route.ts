import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, getExpectedToken } from "@/lib/auth";
import { getLessonBySlug } from "@/lib/lessons";
import { buildHandoutText } from "@/lib/handout";
import type { Lang } from "@/app/providers/language-provider";

export const runtime = "edge";

function isLang(value: string | null): value is Lang {
  return value === "th" || value === "en" || value === "zh";
}

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  // Gate downloads behind the same course password used for /learn/*.
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;
  const expected = await getExpectedToken();
  if (cookie !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const lesson = getLessonBySlug(params.slug);
  if (!lesson) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const langParam = req.nextUrl.searchParams.get("lang");
  const lang: Lang = isLang(langParam) ? langParam : "th";

  const content = buildHandoutText(lesson, lang);
  const filename = `${lesson.slug}-${lang}.txt`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
