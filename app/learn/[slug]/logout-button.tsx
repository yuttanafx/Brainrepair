"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "../../providers/language-provider";
import { uiText } from "@/lib/i18n";

export default function LogoutButton() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = uiText[lang];

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
      {t.logout}
    </button>
  );
}
