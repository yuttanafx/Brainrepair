"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-based "Matrix" style falling-character rain.
 * Renders as an absolutely-positioned background layer —
 * place it inside a `position: relative` container.
 */
export default function MatrixRain({
  className,
  fontSize = 16,
  color = "#3dd97a",
}: {
  className?: string;
  fontSize?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars =
      "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let animationId: number;
    let resizeObserver: ResizeObserver;

    function setup() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
    }

    function draw() {
      // translucent black to create fading trail
      ctx!.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx!.fillRect(0, 0, width, height);

      ctx!.fillStyle = color;
      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx!.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }

    setup();
    // paint an initial opaque black frame so the fade-trail effect starts clean
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    draw();

    resizeObserver = new ResizeObserver(() => setup());
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
    };
  }, [fontSize, color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
