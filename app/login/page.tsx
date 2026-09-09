"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ControlsBar from "../components/ControlsBar";
import { useLanguage } from "../providers/language-provider";
import { uiText } from "@/lib/i18n";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/learn";
  const { lang } = useLanguage();
  const t = uiText[lang];

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const errorMessages: Record<string, string> = {
    invalid_password: t.invalidPassword,
    server_not_configured: t.serverNotConfigured,
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(errorMessages[data.error] || data.error || t.loginGenericError);
        setLoading(false);
        return;
      }
      router.push(data.redirect);
      router.refresh();
    } catch {
      setError(t.loginConnError);
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <ControlsBar />
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass-panel"
        style={{
          borderRadius: 10,
          padding: "40px 36px",
          width: "100%",
          maxWidth: 380,
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontSize: "1.4rem" }}>{t.loginHeading}</h1>
        <p style={{ marginTop: 8, color: "var(--ink-soft)", fontSize: "0.92rem" }}>{t.loginSubtitle}</p>

        <label style={{ display: "block", marginTop: 24, fontSize: "0.88rem", color: "var(--ink-soft)" }}>
          {t.passwordLabel}
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          style={{
            width: "100%",
            marginTop: 8,
            padding: "12px 14px",
            border: "1px solid var(--line)",
            borderRadius: 6,
            fontSize: "1rem",
            fontFamily: "var(--font-sans)",
            background: "rgba(255,255,255,0.04)",
            color: "var(--text)",
          }}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", marginTop: 22 }}>
          {loading ? t.loginButtonLoading : t.loginButton}
        </button>
      </form>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
