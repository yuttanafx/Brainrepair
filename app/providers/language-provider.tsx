"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "th" | "en" | "zh";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function applyHtmlLang(lang: Lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Thai is the site's default/original language.
  const [lang, setLangState] = useState<Lang>("th");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem("lang");
    } catch {
      // localStorage unavailable — fall back to default
    }
    const initial: Lang = saved === "en" || saved === "zh" || saved === "th" ? saved : "th";
    setLangState(initial);
    applyHtmlLang(initial);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    applyHtmlLang(next);
    try {
      window.localStorage.setItem("lang", next);
    } catch {
      // ignore write failures
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
