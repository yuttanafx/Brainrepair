"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "none",
        border: "none",
        color: "var(--ink-soft)",
        fontSize: "0.9rem",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
      }}
    >
      ออกจากระบบ
    </button>
  );
}
