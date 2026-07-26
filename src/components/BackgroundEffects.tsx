"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      glowRef.current?.style.setProperty("--x", `${event.clientX}px`);
      glowRef.current?.style.setProperty("--y", `${event.clientY}px`);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-neutral-950"
    >
      {/* Slowly rotating field of connection nodes */}
      <div
        className="animate-spin-slow absolute inset-0 origin-center opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(38,38,38,0.9) 1px, transparent 1.5px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Secondary drifting layer for a parallax / connected-particle feel */}
      <div
        className="animate-drift absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16,185,129,0.25) 1px, transparent 1.5px)",
          backgroundSize: "58px 58px",
        }}
      />

      {/* Technical grid lines, masked toward the top */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 30%, white, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, white, transparent 75%)",
        }}
      />

      {/* Mouse-reactive glow */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(16, 185, 129, 0.10), transparent 80%)",
        }}
      />

      {/* Vignette to keep focus toward the center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(10,10,10,0.9) 100%)",
        }}
      />
    </div>
  );
}
