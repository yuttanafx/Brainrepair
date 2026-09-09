import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Serif_Thai, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import { LanguageProvider } from "./providers/language-provider";
import MatrixBackground from "./components/MatrixBackground";

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

// Runs before hydration so a returning visitor's saved light/dark theme
// applies immediately, with no flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${serif.variable} ${sans.variable}`} data-theme="dark">
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <MatrixBackground />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
