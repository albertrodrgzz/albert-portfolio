"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const variantClasses: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
  primary: "text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20",
  secondary: "text-neutral-300 hover:text-neutral-100",
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group relative inline-block shrink-0 overflow-hidden rounded-md p-px"
    >
      <span
        aria-hidden="true"
        className="animate-border-spin absolute inset-[-60%] block bg-[conic-gradient(from_0deg,transparent_0%,rgba(16,185,129,0.9)_10%,transparent_22%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`relative inline-flex items-center gap-1.5 overflow-hidden rounded-[5px] border border-neutral-800 bg-neutral-950 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${variantClasses[variant]} ${className}`}
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <span className="relative inline-flex items-center gap-1.5">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
