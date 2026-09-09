"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/lessons";
import { instructor } from "@/lib/lessons";
import { getLocalizedLesson, getLocalizedSection, courseTitleTranslations } from "@/lib/lessons-i18n";
import { useLanguage } from "../../providers/language-provider";
import { uiText } from "@/lib/i18n";
import ControlsBar from "../../components/ControlsBar";
import LogoutButton from "./logout-button";

export default function LessonClient({
  lesson,
  lessons,
  index,
  next,
  doneCount,
  progressPct,
  sections,
}: {
  lesson: Lesson;
  lessons: Lesson[];
  index: number;
  next?: Lesson;
  doneCount: number;
  progressPct: number;
  sections: string[];
}) {
  const { lang } = useLanguage();
  const t = uiText[lang];
  const courseTitle = courseTitleTranslations[lang];
  const localizedLesson = getLocalizedLesson(lesson, lang);

  return (
    <div style={{ minHeight: "100vh" }}>
      <header className="glass-panel" style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}>
        <nav
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.15rem" }}>
            {lang === "th" ? (
              <>
                เรียน<span style={{ color: "var(--gold)" }}>รู้</span>
              </>
            ) : (
              <span style={{ color: "var(--gold)" }}>{t.brand}</span>
            )}
          </span>
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <ControlsBar />
            <Link href="/" style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
              {t.backToCourse}
            </Link>
            <LogoutButton />
          </div>
        </nav>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
        className="learn-layout"
      >
        <main style={{ borderRight: "1px solid var(--line)" }}>
          <div style={{ aspectRatio: "16/9", background: "#0e1626", width: "100%" }}>
            <iframe
              src={lesson.videoUrl}
              title={localizedLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0, display: "block" }}
            />
          </div>

          <div style={{ padding: "32px 40px 48px" }}>
            <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.85rem" }}>{courseTitle}</p>
            <h1 style={{ fontSize: "1.6rem", marginTop: 10 }}>{localizedLesson.title}</h1>
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 16,
                fontSize: "0.88rem",
                color: "var(--ink-soft)",
                flexWrap: "wrap",
              }}
            >
              <span>
                {t.taughtBy} {instructor}
              </span>
              <span>·</span>
              <span>
                {t.duration} {lesson.duration}
              </span>
              <span>·</span>
              <span>{t.chapterOf(index + 1, lessons.length)}</span>
            </div>

            <div style={{ display: "flex", gap: 14, marginTop: 26, flexWrap: "wrap" }}>
              {next ? (
                <Link href={`/learn/${next.slug}`} className="btn-primary">
                  {t.nextLesson}
                </Link>
              ) : (
                <span className="btn-primary" style={{ opacity: 0.6, cursor: "default" }}>
                  {t.courseComplete}
                </span>
              )}
              <a
                href={`/api/lessons/${lesson.slug}/handout?lang=${lang}`}
                download
                className="btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <span aria-hidden="true">⬇</span>
                {t.downloadHandout}
              </a>
            </div>

            <div style={{ marginTop: 32, maxWidth: "70ch", color: "var(--ink-soft)", fontSize: "0.95rem" }}>
              <p>{localizedLesson.description}</p>
              <p style={{ marginTop: 14, color: "var(--text)" }}>{t.takeaways}</p>
              <ul style={{ marginTop: 8, paddingRight: 0, listStylePosition: "inside" }}>
                {localizedLesson.points.map((p) => (
                  <li key={p} style={{ marginBottom: 6 }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <aside style={{ padding: "28px 24px 40px" }}>
          <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{courseTitle}</div>
          <div style={{ marginTop: 12, height: 6, background: "var(--line)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progressPct}%`, background: "var(--gold)" }} />
          </div>
          <div style={{ marginTop: 8, fontSize: "0.8rem", color: "var(--ink-soft)" }}>
            {t.progressLabel(doneCount, lessons.length, progressPct)}
          </div>

          {sections.map((section) => (
            <div key={section} style={{ marginTop: 26 }}>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-soft)", fontWeight: 600, marginBottom: 10 }}>
                {getLocalizedSection(section, lang)}
              </div>
              {lessons
                .filter((l) => l.section === section)
                .map((l) => {
                  const lIndex = lessons.findIndex((x) => x.slug === l.slug);
                  const isCurrent = l.slug === lesson.slug;
                  const isDone = lIndex < index;
                  const localizedSidebarLesson = getLocalizedLesson(l, lang);
                  return (
                    <Link
                      key={l.slug}
                      href={`/learn/${l.slug}`}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        padding: "11px 10px",
                        borderRadius: 3,
                        background: isCurrent ? "rgba(53,231,195,0.12)" : "transparent",
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          border: `1.5px solid ${isCurrent ? "var(--gold)" : "var(--ink-soft)"}`,
                          background: isDone ? "var(--teal)" : "transparent",
                          borderColor: isDone ? "var(--teal)" : undefined,
                          flexShrink: 0,
                          marginTop: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.65rem",
                          color: "#fff",
                        }}
                      >
                        {isDone ? "✓" : ""}
                      </span>
                      <span>
                        <div style={{ fontSize: "0.9rem", fontWeight: isCurrent ? 600 : 500, color: "var(--ink)" }}>
                          {localizedSidebarLesson.title}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--ink-soft)" }}>{l.duration}</div>
                      </span>
                    </Link>
                  );
                })}
            </div>
          ))}
        </aside>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .learn-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
