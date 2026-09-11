"use client";

import { useState } from "react";

const BANK_ACCOUNT_NUMBER = "093-2-58242-9";
const BANK_NAME = "ธนาคารไทยพาณิชย์ (SCB)";
const ACCOUNT_HOLDER = "บริษัท บราเธอร์ อินโนเวชั่น จำกัด";
const PRICE = "250.-";
const STOCK_COUNT = "100 เล่ม เท่านั้น!!";

export default function PurchaseNotice() {
  const [form, setForm] = useState({ name: "", email: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("กรุณากรอกชื่อและอีเมลให้ครบถ้วน");
      return;
    }
    setError("");
    // No backend endpoint exists yet to persist/notify this submission.
    // For now this just confirms locally on-screen; wire this up to an
    // API route / email service if you want real notifications.
    setSubmitted(true);
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
          <p style={{ marginTop: 10 }}>สามารถชำระเงินเพื่อรับรหัสเข้าหนังสือพูดได้แจ้งโอนเงิน pichai.6022@gmail.com</p>
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
          <p style={{ marginTop: 8, color: "var(--ink-soft)" }}>โอนแล้วแจ้งสลิปขอบคุณครับ 🙏</p>
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

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              แจ้งโอน
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
