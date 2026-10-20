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
  const headerRef = useRef<HTMLElement>(null);

  function closeMobileMenu() {
    setIsOpen(false);
  }

  function toggleMobileMenu() {
    setIsOpen((prev) => !prev);
  }

  // Cierra el menú al hacer click/touch fuera o presionar Escape
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Si el evento ocurrió dentro del header (barra, botón o menú desplegable), ignorar
      if (headerRef.current?.contains(target) || target.closest("header")) {
        return;
      }

      setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    // Pequeño retardo para evitar capturar el mismo evento que abrió el menú
    const timer = setTimeout(() => {
      window.addEventListener("pointerdown", handlePointerDown);
    }, 50);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur"
      >
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
            type="button"
            onClick={toggleMobileMenu}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
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

      {/* Backdrop interactivo para cerrar al hacer clic/tap fuera */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 top-[65px] z-40 bg-black/60 backdrop-blur-xs md:hidden cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
