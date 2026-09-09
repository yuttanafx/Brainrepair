import Link from "next/link";
import { courseTitle, instructor, lessons } from "@/lib/lessons";

export default function HomePage() {
  const totalMinutes = lessons.reduce((sum, l) => {
    const [m, s] = l.duration.split(":").map(Number);
    return sum + m + s / 60;
  }, 0);

  return (
    <main style={{ minHeight: "100vh" }}>
      <header
        style={{
          borderBottom: "1px solid var(--line)",
          background: "rgba(246,243,236,0.95)",
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
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.25rem" }}>
            เรียน<span style={{ color: "var(--gold)" }}>รู้</span>
          </span>
          <Link href="/learn" className="btn-primary">
            เข้าเรียน
          </Link>
        </nav>
      </header>

      <section className="wrap" style={{ padding: "72px 0" }}>
        <p style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.9rem" }}>ศิลปะดิจิทัลด้วย AI</p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginTop: 12, maxWidth: "22ch", lineHeight: 1.3 }}>
          {courseTitle}
        </h1>
        <p style={{ marginTop: 20, color: "var(--ink-soft)", maxWidth: "56ch", fontSize: "1.05rem" }}>
          คอร์สนี้เปิดให้เฉพาะผู้ที่ได้รับรหัสผ่านเข้าเรียนเท่านั้น สอนโดย {instructor} รวม {lessons.length} บทเรียน
          ความยาวรวมประมาณ {Math.round(totalMinutes)} นาที
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
          <Link href="/learn" className="btn-primary">
            เข้าเรียนตอนนี้
          </Link>
        </div>

        <div style={{ marginTop: 56, borderTop: "1px solid var(--line)", paddingTop: 32 }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: 20 }}>เนื้อหาในคอร์ส</h2>
          <div style={{ border: "1px solid var(--line)", borderRadius: 4, overflow: "hidden", background: "#fff" }}>
            {lessons.map((lesson, i) => (
              <div
                key={lesson.slug}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "14px 20px",
                  borderBottom: i < lessons.length - 1 ? "1px solid var(--line)" : "none",
                  fontSize: "0.95rem",
                }}
              >
                <span>
                  {i + 1}. {lesson.title}
                </span>
                <span style={{ color: "var(--ink-soft)" }}>{lesson.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
