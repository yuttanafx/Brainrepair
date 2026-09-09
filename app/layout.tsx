import type { Metadata } from "next";
import { Noto_Serif_Thai, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

const sans = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "เรียนรู้ — คอร์สออนไลน์",
  description: "คอร์สเรียนออนไลน์ส่วนตัว เข้าเรียนได้เฉพาะผู้ที่ได้รับรหัสผ่าน",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
