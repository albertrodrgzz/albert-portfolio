"use client";

import type { MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Boxes,
  Cloud,
  Component,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  LayoutPanelLeft,
  Network,
  Paintbrush,
  Server,
  SlidersHorizontal,
  Sparkles,
  Table2,
  TerminalSquare,
  Triangle,
  Workflow,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

interface SkillModule {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

const modules: SkillModule[] = [
  {
    category: "Frontend",
    icon: LayoutPanelLeft,
    skills: [
      { name: "Next.js", icon: AppWindow, level: 92 },
      { name: "React", icon: Component, level: 90 },
      { name: "TypeScript", icon: FileCode2, level: 88 },
      { name: "Tailwind CSS", icon: Paintbrush, level: 90 },
      { name: "Framer Motion", icon: Sparkles, level: 80 },
    ],
  },
  {
    category: "Backend & Cloud",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server, level: 85 },
      { name: "PostgreSQL (Supabase)", icon: Database, level: 87 },
      { name: "Arquitectura RESTful", icon: Network, level: 85 },
    ],
  },
  {
    category: "Infraestructura",
    icon: Boxes,
    skills: [
      { name: "CI/CD (GitHub Actions)", icon: GitBranch, level: 80 },
      { name: "Render", icon: Cloud, level: 82 },
      { name: "Vercel", icon: Triangle, level: 85 },
      { name: "Gestión de Entornos", icon: SlidersHorizontal, level: 83 },
    ],
  },
  {
    category: "Core",
    icon: Cpu,
    skills: [
      { name: "Automatización de Negocios", icon: Workflow, level: 90 },
      { name: "Prompt Engineering", icon: TerminalSquare, level: 88 },
      { name: "Bases de Datos Relacionales", icon: Table2, level: 90 },
    ],
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function handleSkillMouseMove(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          command="systemctl status modules"
          title="Stack y Habilidades"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {modules.map((mod) => {
            const CategoryIcon = mod.icon;

            return (
              <motion.div
                key={mod.category}
                variants={item}
                className="flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
                  <CategoryIcon className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-neutral-200">
                    {mod.category}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  {mod.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        onMouseMove={handleSkillMouseMove}
                        className="group relative flex flex-col gap-2 overflow-hidden rounded-lg border-r border-b border-t-2 border-l-2 border-white/5 border-t-emerald-500/30 border-l-emerald-500/30 bg-white/5 p-3 backdrop-blur-xl transition-colors duration-300 hover:border-t-emerald-400/70 hover:border-l-emerald-400/70"
                      >
                        <span
                          aria-hidden="true"
                          className="animate-led-blink absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400"
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.20), transparent 70%)",
                          }}
                        />
                        <div className="relative flex items-center justify-between gap-2 text-sm">
                          <span className="flex items-center gap-2 text-neutral-200">
                            <SkillIcon className="h-3.5 w-3.5 text-emerald-400" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-amber-400">
                            loaded=true
                          </span>
                        </div>
                        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-neutral-800/80">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-emerald-400"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
