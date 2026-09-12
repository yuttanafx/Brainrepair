import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECEIVER_EMAIL = "pichai.6022@gmail.com";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "server_not_configured" },
      { status: 500 }
    );
  }

  const { name, email, note } = await req.json();

  if (!name || typeof name !== "string" || !email || typeof email !== "string") {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      // While using the shared Resend test sender, this "from" address must
      // stay as onboarding@resend.dev until a verified domain is set up.
      from: "แจ้งโอนหนังสือ <onboarding@resend.dev>",
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `แจ้งโอนเงินใหม่ จาก ${name}`,
      text: [
        `ชื่อ-นามสกุล: ${name}`,
        `อีเมล: ${email}`,
        `รายละเอียดการโอน: ${note || "-"}`,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
