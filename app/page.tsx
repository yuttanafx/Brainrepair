import Link from "next/link";
import Image from "next/image";
import { courseTitle, instructor, lessons } from "@/lib/lessons";
import MatrixRain from "./components/MatrixRain";

export default function HomePage() {
  const totalMinutes = lessons.reduce((sum, l) => {
    const [m, s] = l.duration.split(":").map(Number);
    return sum + m + s / 60;
  }, 0);

  return (
    <main style={{ minHeight: "100vh" }}>
      <header
        className="glass-panel"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
        }}
      >
        <nav
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 24px",
          }}
        >
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.25rem", letterSpacing: 0.3 }}>
            เรียน<span style={{ color: "var(--gold)" }}>รู้</span>
          </span>
          <Link href="/learn" className="btn-primary">
            เข้าเรียน
          </Link>
        </nav>
      </header>

      <section className="wrap" style={{ padding: "80px 0 64px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 380px", minWidth: 280 }}>
            <p
              style={{
                color: "var(--gold)",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 20,
                background: "var(--gold-soft)",
                border: "1px solid rgba(53,231,195,0.3)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }} />
              ซ่อมสมอง · เดินสู่ความสุข
            </p>
            <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 2.9rem)", marginTop: 18, maxWidth: "22ch", lineHeight: 1.35 }}>
              {courseTitle}
            </h1>
            <p style={{ marginTop: 20, color: "var(--ink-soft)", maxWidth: "56ch", fontSize: "1.05rem" }}>
              คอร์สนี้เปิดให้เฉพาะผู้ที่ได้รับรหัสผ่านเข้าเรียนเท่านั้น สอนโดย {instructor} รวม {lessons.length} บทเรียน
              ความยาวรวมประมาณ {Math.round(totalMinutes)} นาที
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/learn" className="btn-primary">
                เข้าเรียนตอนนี้
              </Link>
              <span className="btn-outline" style={{ cursor: "default" }}>
                {lessons.length} บทเรียน
              </span>
            </div>
          </div>

          <div style={{ flex: "0 1 320px", display: "flex", justifyContent: "center" }}>
            <div
              className="tech-frame"
              style={{
                width: "100%",
                maxWidth: 300,
                position: "relative",
                aspectRatio: "1536 / 2744",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 30px 70px rgba(0,0,0,0.55), var(--glow)",
                border: "1px solid var(--line)",
              }}
            >
              <span className="corner-tl" />
              <span className="corner-br" />

              {/* Matrix digital-rain animation layer */}
              <MatrixRain color="#35e7c3" />

              {/* Book cover image, filling the frame edge-to-edge at its native aspect ratio */}
              <Image
                src="/book-cover.jpg"
                alt="17 สัญลักษณ์ เปลี่ยนชีวิต — 17 Symbols to Guide You to Happiness"
                fill
                priority
                style={{
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
                sizes="(max-width: 768px) 90vw, 300px"
              />

              {/* subtle top/bottom vignette so the frame edges feel intentional */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  pointerEvents: "none",
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.35)",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 4, height: 20, background: "var(--gold)", borderRadius: 2, boxShadow: "0 0 8px var(--gold)" }} />
            เนื้อหาในคอร์ส
          </h2>
          <div className="glass-panel" style={{ borderRadius: 10, overflow: "hidden" }}>
            {lessons.map((lesson, i) => (
              <div
                key={lesson.slug}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  padding: "14px 20px",
                  borderBottom: i < lessons.length - 1 ? "1px solid var(--line)" : "none",
                  fontSize: "0.95rem",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 6,
                      background: "rgba(53,231,195,0.1)",
                      border: "1px solid rgba(53,231,195,0.25)",
                      color: "var(--gold)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  {lesson.title}
                </span>
                <span style={{ color: "var(--ink-soft)", flexShrink: 0 }}>{lesson.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
