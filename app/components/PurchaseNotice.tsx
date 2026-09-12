"use client";

import { useState } from "react";

const BANK_ACCOUNT_NUMBER = "032-8-13579-5";
const BANK_NAME = "ธนาคารกสิกรไทย";
const ACCOUNT_HOLDER = "นส. ศศิรัตน์ พวงเพกา";
const RECEIVER_EMAIL = "winyoo.a999@gmail.com";
const LINE_ID = "ซ่อมสมอง";
const PRICE = "250.-";
const STOCK_COUNT = "100 เล่ม เท่านั้น!!";

export default function PurchaseNotice() {
  const [form, setForm] = useState({ name: "", email: "", note: "" });
  const [pdpaConsent, setPdpaConsent] = useState(false);
  const [pdpaOpen, setPdpaOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("กรุณากรอกชื่อและอีเมลให้ครบถ้วน");
      return;
    }
    if (!pdpaConsent) {
      setError("กรุณายินยอมให้เก็บรวบรวม/ใช้ข้อมูลส่วนบุคคลตาม PDPA ก่อนส่งข้อมูล");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/notify-transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("send_failed");
      }
      setSubmitted(true);
    } catch {
      setError("ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือแจ้งโอนผ่านอีเมล/Line ด้านบนแทน");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ marginTop: 64 }}>
      <h2 style={{ fontSize: "1.3rem", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 4, height: 20, background: "var(--gold)", borderRadius: 2, boxShadow: "0 0 8px var(--gold)" }} />
        สั่งซื้อหนังสือ
      </h2>

      <div className="glass-panel" style={{ borderRadius: 10, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.05rem" }}>{STOCK_COUNT}</p>
          <p style={{ marginTop: 6, fontSize: "1.1rem" }}>
            หนังสือเล่มละ <strong style={{ color: "var(--gold)" }}>{PRICE}</strong> ส่งฟรี!!
          </p>
          <p style={{ marginTop: 4, color: "var(--ink-soft)" }}>หนังสือพร้อมส่ง!!! ⭐️⭐️⭐️⭐️⭐️</p>
          <p style={{ marginTop: 10 }}>มี E-book (ให้อ่านก่อน)</p>
          <p style={{ marginTop: 2, color: "var(--ink-soft)" }}>รับ E-book กรุณาส่ง E-mail (ไม่มีปลายทาง) 😊</p>
          <p style={{ marginTop: 10 }}>สามารถชำระเงินเพื่อรับรหัสเข้าหนังสือพูดได้</p>
        </div>

        <div
          style={{
            borderRadius: 8,
            border: "1px solid var(--line)",
            background: "var(--gold-soft)",
            padding: "18px 20px",
          }}
        >
          <p style={{ fontWeight: 700, marginBottom: 8 }}>โอนชำระที่ 👇</p>
          <p>เลขที่บัญชี: <strong>{BANK_ACCOUNT_NUMBER}</strong></p>
          <p>ธนาคาร: {BANK_NAME}</p>
          <p>ชื่อบัญชี: {ACCOUNT_HOLDER}</p>
          <p style={{ marginTop: 10 }}>
            แจ้งโอนเงินทาง อีเมล: <strong>{RECEIVER_EMAIL}</strong>
          </p>
          <p>Line: <strong>{LINE_ID}</strong></p>
          <p style={{ marginTop: 8, color: "var(--ink-soft)" }}>โอนแล้วแจ้งสลิปขอบคุณครับ 🙏</p>
        </div>

        <div
          style={{
            borderRadius: 8,
            border: "1px solid var(--line)",
            padding: "14px 18px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <button
            type="button"
            onClick={() => setPdpaOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "var(--gold)",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "0.92rem",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {pdpaOpen ? "▾" : "▸"} นโยบายความเป็นส่วนตัว (PDPA)
          </button>

          {pdpaOpen && (
            <div style={{ marginTop: 12, fontSize: "0.86rem", color: "var(--ink-soft)", lineHeight: 1.7 }}>
              <p>
                ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) เราจะเก็บรวบรวม ใช้
                และเปิดเผยข้อมูลส่วนบุคคลของท่าน (ชื่อ-นามสกุล, อีเมล, รายละเอียดการโอนเงิน)
                เพื่อวัตถุประสงค์ในการยืนยันการชำระเงิน จัดส่ง E-book และรหัสเข้าหนังสือพูดเท่านั้น
              </p>
              <p style={{ marginTop: 8 }}>
                เราจะเก็บข้อมูลของท่านไว้เท่าที่จำเป็นตามระยะเวลาที่กฎหมายกำหนด
                และจะไม่เปิดเผยข้อมูลของท่านต่อบุคคลภายนอก เว้นแต่ได้รับความยินยอมจากท่าน
                หรือเป็นไปตามที่กฎหมายกำหนด
              </p>
              <p style={{ marginTop: 8 }}>
                ท่านมีสิทธิขอเข้าถึง แก้ไข ลบ หรือถอนความยินยอมการใช้ข้อมูลส่วนบุคคลของท่านได้ทุกเมื่อ
                โดยติดต่อผู้ควบคุมข้อมูลผ่านอีเมล <strong>{RECEIVER_EMAIL}</strong> หรือ Line: <strong>{LINE_ID}</strong>
              </p>
            </div>
          )}
        </div>

        {submitted ? (
          <div
            style={{
              borderRadius: 8,
              border: "1px solid var(--line)",
              padding: "18px 20px",
              background: "rgba(53,231,195,0.08)",
            }}
          >
            <p style={{ fontWeight: 700, color: "var(--gold)" }}>รับการแจ้งโอนแล้ว ขอบคุณครับ 🙏</p>
            <p style={{ marginTop: 6, color: "var(--ink-soft)", fontSize: "0.92rem" }}>
              ทีมงานจะตรวจสอบสลิปและส่งรหัส/อีเมลยืนยันให้เร็วที่สุด
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontWeight: 700 }}>แจ้งโอนเงิน</p>

            <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.92rem" }}>
              ชื่อ-นามสกุล
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="ชื่อผู้โอน"
                style={inputStyle}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.92rem" }}>
              อีเมล (สำหรับรับ E-book / รหัสเข้าหนังสือพูด)
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={inputStyle}
              />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.92rem" }}>
              รายละเอียดการโอน (จำนวนเงิน / วันเวลาที่โอน)
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="เช่น โอน 250 บาท วันที่ 11 ก.ย. เวลา 14:30 น."
                rows={3}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
              />
            </label>

            <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.86rem", color: "var(--ink-soft)" }}>
              <input
                type="checkbox"
                checked={pdpaConsent}
                onChange={(e) => setPdpaConsent(e.target.checked)}
                style={{ marginTop: 3 }}
              />
              <span>
                ข้าพเจ้ายินยอมให้เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าตามที่ระบุใน
                นโยบายความเป็นส่วนตัว (PDPA) ข้างต้น เพื่อวัตถุประสงค์ในการยืนยันการชำระเงินและจัดส่ง E-book/รหัสเข้าหนังสือพูด
              </span>
            </label>

            {error && <p className="error-text">{error}</p>}

            <button
              type="submit"
              className="btn-primary"
              disabled={submitting}
              style={{ alignSelf: "flex-start", opacity: submitting ? 0.6 : 1, cursor: submitting ? "default" : "pointer" }}
            >
              {submitting ? "กำลังส่ง..." : "แจ้งโอน"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid var(--line)",
  background: "rgba(255,255,255,0.03)",
  color: "var(--text)",
  fontSize: "0.95rem",
};
