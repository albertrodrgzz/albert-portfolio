"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/SocialIcons";

const links = [
  { label: "~/sobre-mi", href: "#sobre-mi" },
  { label: "~/stack", href: "#skills" },
  { label: "~/proyectos", href: "#proyectos" },
  { label: "~/contacto", href: "#contacto" },
];

const GITHUB_URL = "https://github.com/albertrodrgzz";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  function closeMobileMenu() {
    setIsOpen(false);
  }

  // Cierra el menú al hacer scroll, presionar Escape o interactuar fuera
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        menuRef.current?.contains(target) ||
        toggleBtnRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm sm:px-12">
          <Link href="#" onClick={closeMobileMenu} className="shrink-0 font-mono">
            <span className="text-emerald-400">~/albert/portfolio</span>
            <span className="text-neutral-400">$</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-neutral-300 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-neutral-800" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Albert"
                className="flex h-8 w-8 items-center justify-center rounded border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all hover:border-emerald-500/50 hover:bg-neutral-800 hover:text-emerald-400"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <button
            ref={toggleBtnRef}
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-neutral-800 bg-neutral-950/95 px-6 py-4 text-sm md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded px-2 py-2.5 font-mono text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-emerald-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t border-neutral-800 pt-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center gap-2 rounded border border-neutral-800 bg-neutral-900 px-3 py-2 font-mono text-xs font-semibold text-neutral-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop interactivo para vista móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
            onTouchStart={closeMobileMenu}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
