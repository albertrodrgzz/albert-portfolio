"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { motion, type Variants } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const GITHUB_URL = "https://github.com/albertrodrgzz";

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
            <span className="ml-3 font-mono text-xs text-neutral-400">
              albert@portfolio — zsh
            </span>
          </motion.div>

          <div className="flex flex-col gap-4 px-4 py-8 sm:px-10 sm:py-10">
            <motion.p variants={item} className="font-mono text-sm text-neutral-300">
              <span className="text-emerald-400">visitor@portfolio</span>
              <span className="text-neutral-400">:~$</span> whoami
            </motion.p>

            <motion.h1
              variants={item}
              className="font-mono text-3xl font-bold tracking-tight text-neutral-100 md:text-5xl lg:text-7xl"
            >
              Albert
            </motion.h1>

            <motion.p
              variants={item}
              className="min-h-7 font-mono text-lg text-neutral-200 sm:text-xl"
            >
              <span className="text-emerald-400">&gt;</span> {typedSkill}
              <span
                className="ml-1 inline-block h-5 w-[2px] translate-y-0.5 bg-emerald-400 animate-blink"
                aria-hidden="true"
              />
            </motion.p>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            >
              Enfocado en{" "}
              <span className="font-medium text-emerald-400">
                arquitectura de bases de datos
              </span>{" "}
              y{" "}
              <span className="font-medium text-emerald-400">
                desarrollo de aplicaciones
              </span>
              .
            </motion.p>

            <motion.div variants={item} className="mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <MagneticButton href="#proyectos" variant="primary">
                ./ver-proyectos
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton href="#contacto" variant="secondary">
                ./contacto
              </MagneticButton>

              <div className="flex items-center gap-2 pl-0 sm:pl-1">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Albert Rodríguez"
                  className="group flex h-[42px] items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/80 px-3.5 text-xs font-semibold text-neutral-300 transition-all hover:border-emerald-500/50 hover:bg-neutral-800 hover:text-emerald-400"
                >
                  <GithubIcon className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>GitHub</span>
                </a>
              </div>
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
            <pre className="font-mono text-xs leading-relaxed text-neutral-300">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
