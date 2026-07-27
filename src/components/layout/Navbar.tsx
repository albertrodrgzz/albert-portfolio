"use client";

import { useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "~/sobre-mi", href: "#sobre-mi" },
  { label: "~/stack", href: "#skills" },
  { label: "~/proyectos", href: "#proyectos" },
  { label: "~/contacto", href: "#contacto" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const element = document.getElementById(href.slice(1));
    setIsOpen(false);
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

        <ul className="hidden items-center gap-6 md:flex">
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

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 items-center justify-center rounded border border-neutral-800 text-neutral-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-neutral-800 bg-neutral-950/95 px-6 py-4 text-sm md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="block rounded px-2 py-2.5 text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-emerald-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
