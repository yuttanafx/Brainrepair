"use client";

import { useTheme } from "../providers/theme-provider";
import { useLanguage, type Lang } from "../providers/language-provider";
import { uiText } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "th", label: "ไทย" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function ControlsBar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const t = uiText[lang];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        role="group"
        aria-label="Language"
        style={{
          display: "flex",
          border: "1px solid var(--line)",
          borderRadius: 20,
          overflow: "hidden",
          background: "var(--card-bg)",
        }}
      >
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            style={{
              padding: "6px 12px",
              fontSize: "0.78rem",
              fontWeight: 600,
              fontFamily: "var(--font-sans)",
              background: lang === l.code ? "var(--gold)" : "transparent",
              color: lang === l.code ? "#04151b" : "var(--ink-soft)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t.themeToLight : t.themeToDark}
        title={theme === "dark" ? t.themeToLight : t.themeToDark}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid var(--line)",
          background: "var(--card-bg)",
          color: "var(--ink)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          flexShrink: 0,
          transition: "background 0.2s ease, transform 0.15s ease",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
