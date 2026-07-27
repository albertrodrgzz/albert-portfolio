"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const skillPhrases = [
  "Especialista en desarrollo web...",
  "Arquitectura de Base de Datos...",
  "Automatización de Negocios...",
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const codeSnippet = `interface Engineer {
  name: string;
  focus: string[];
  status: "building";
}

const albert: Engineer = {
  name: "Albert",
  focus: ["SQL", "APIs", "Auto"],
  status: "building",
};`;

export default function HeroSection() {
  const typedSkill = useTypingEffect(skillPhrases);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-3xl overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50 shadow-2xl shadow-emerald-500/5"
        >
          <motion.div
            variants={item}
            className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3"
          >
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-neutral-500">
              albert@portfolio — zsh
            </span>
          </motion.div>

          <div className="flex flex-col gap-4 px-4 py-8 sm:px-10 sm:py-10">
            <motion.p variants={item} className="text-sm text-neutral-500">
              <span className="text-emerald-400">visitor@portfolio</span>
              <span className="text-neutral-600">:~$</span> whoami
            </motion.p>

            <motion.h1
              variants={item}
              className="text-3xl font-bold tracking-tight text-neutral-100 md:text-5xl lg:text-7xl"
            >
              Albert
            </motion.h1>

            <motion.p
              variants={item}
              className="min-h-7 text-lg text-neutral-300 sm:text-xl"
            >
              <span className="text-emerald-400">&gt;</span> {typedSkill}
              <span
                className="ml-1 inline-block h-5 w-[2px] translate-y-0.5 bg-emerald-400 animate-blink"
                aria-hidden="true"
              />
            </motion.p>

            <motion.p
              variants={item}
              className="max-w-xl text-base text-neutral-400 sm:text-lg"
            >
              Enfocado en{" "}
              <span className="text-emerald-400">
                arquitectura de bases de datos
              </span>{" "}
              y{" "}
              <span className="text-emerald-400">
                desarrollo de aplicaciones
              </span>
              .
            </motion.p>

            <motion.div variants={item} className="mt-2 flex flex-wrap gap-4">
              <MagneticButton href="#proyectos" variant="primary">
                ./ver-proyectos
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton href="#contacto" variant="secondary">
                ./contacto
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="hidden shrink-0 lg:block"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-10, 10, -10] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div
            style={{ transform: "rotateY(12deg)" }}
            className="w-72 rounded-lg border border-neutral-800 bg-neutral-900/60 p-6 opacity-60 shadow-2xl blur-[1px]"
          >
            <pre className="text-xs leading-relaxed text-neutral-500">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
