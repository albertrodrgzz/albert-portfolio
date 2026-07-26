"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";

const links = [
  { label: "~/sobre-mi", href: "#sobre-mi" },
  { label: "~/stack", href: "#skills" },
  { label: "~/proyectos", href: "#proyectos" },
  { label: "~/contacto", href: "#contacto" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const element = document.getElementById(href.slice(1));
    if (!element) return;

    event.preventDefault();
    const offset = headerRef.current?.offsetHeight ?? 0;
    window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm sm:px-12">
        <Link href="#" className="shrink-0">
          <span className="text-emerald-400">~/albert/portfolio</span>
          <span className="text-neutral-600">$</span>
        </Link>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="text-neutral-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
