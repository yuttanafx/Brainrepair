export const AUTH_COOKIE = "course_auth";

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Signed token so people can't just guess a cookie value in devtools.
// It's still a shared-password gate, not per-user accounts.
export async function getExpectedToken(): Promise<string> {
  const secret = process.env.COURSE_SESSION_SECRET || "dev-secret-change-me";
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode("authenticated"));
  return toHex(signature);
}
