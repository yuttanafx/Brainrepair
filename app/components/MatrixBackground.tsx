"use client";

import MatrixRain from "./MatrixRain";
import { useTheme } from "../providers/theme-provider";

/**
 * Full-viewport, fixed-position Matrix digital-rain animation that sits
 * behind all page content on every screen of the site. Sits below the
 * grid/glow pseudo-elements defined in globals.css (z-index -3).
 */
export default function MatrixBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -3,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: isDark ? 0.32 : 0.1,
        transition: "opacity 0.4s ease",
      }}
    >
      <MatrixRain
        fontSize={16}
        color={isDark ? "#35e7c3" : "#0e9f7d"}
        bgColor={isDark ? "rgba(5, 8, 16, 0.08)" : "rgba(244, 247, 251, 0.12)"}
        initialFill={isDark ? "#050810" : "#f4f7fb"}
      />
    </div>
  );
}
