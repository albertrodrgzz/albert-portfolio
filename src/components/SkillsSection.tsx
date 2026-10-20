"use client";

import type { MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Bot,
  Boxes,
  Brain,
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
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Table2,
  TerminalSquare,
  Wand2,
  Workflow,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface Skill {
  name: string;
  icon: LucideIcon;
  highlight: string;
}

interface SkillModule {
  category: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

const modules: SkillModule[] = [
  {
    category: "Frontend & Interfaces Modernas",
    icon: LayoutPanelLeft,
    description: "Construcción de interfaces reactivas, rápidas y modulares con tipado estricto.",
    skills: [
      {
        name: "Next.js (App Router)",
        icon: AppWindow,
        highlight: "Server & Client Components • SSR / SSG • Turbopack",
      },
      {
        name: "TypeScript",
        icon: FileCode2,
        highlight: "Tipado estricto • Generics • DTOs y validación de tipos",
      },
      {
        name: "React 19",
        icon: Component,
        highlight: "Hooks avanzados • Custom Hooks desacoplados • Context API",
      },
      {
        name: "Tailwind CSS v4",
        icon: Paintbrush,
        highlight: "Design systems modulares • Dark mode estricto • UI responsiva",
      },
      {
        name: "Framer Motion",
        icon: Sparkles,
        highlight: "Micro-interacciones • Animaciones declarativas de alto impacto",
      },
    ],
  },
  {
    category: "Backend & Bases de Datos Relacionales",
    icon: Server,
    description: "Lógica de servidor estructurada con integridad transaccional y seguridad estricta.",
    skills: [
      {
        name: "PHP 8+ (Arquitectura MVC)",
        icon: Server,
        highlight: "POO pura sin dependencias mágicas • Router custom • PDO seguro",
      },
      {
        name: "MySQL / MariaDB (ACID)",
        icon: Database,
        highlight: "Normalización 3NF • Claves foráneas • Índices compuestos y optimización",
      },
      {
        name: "PostgreSQL",
        icon: Table2,
        highlight: "Modelado relacional • Integración con Supabase • Consultas complejas",
      },
      {
        name: "Arquitectura RESTful & APIs",
        icon: Network,
        highlight: "Diseño de endpoints • Middlewares • Respuestas JSON estandarizadas",
      },
      {
        name: "Node.js",
        icon: Cpu,
        highlight: "Servicios asíncronos • Scripts de soporte • Tooling moderno",
      },
    ],
  },
  {
    category: "DevOps, Cloud & Entornos",
    icon: Boxes,
    description: "Despliegue automatizado, contenerización reproducible y persistencia en la nube.",
    skills: [
      {
        name: "Docker & Multi-Stage Builds",
        icon: Boxes,
        highlight: "Imágenes de producción ligeras • Docker Compose • Contenerización PHP/Nginx",
      },
      {
        name: "Render & Vercel (CI/CD)",
        icon: Cloud,
        highlight: "Pipelines de despliegue continuo • Webhooks • Entornos cloud en producción",
      },
      {
        name: "Aiven.io (Managed Cloud DB)",
        icon: Database,
        highlight: "Clústeres MySQL administrados • Conexiones TLS/SSL cifradas de alta seguridad",
      },
      {
        name: "Git & GitHub Workflows",
        icon: GitBranch,
        highlight: "Estrategias de ramificación • Commits semánticos • GitHub Actions",
      },
      {
        name: "Gestión Segura de Entornos",
        icon: SlidersHorizontal,
        highlight: "Aislamiento estricto de secretos (.env) • Separación staging y producción",
      },
    ],
  },
  {
    category: "Automatización & IA Asistida",
    icon: Brain,
    description: "Ingeniería aumentada con IA y automatización de procesos para máxima productividad.",
    skills: [
      {
        name: "Desarrollo Asistido por IA (AI-Pair)",
        icon: Bot,
        highlight: "Multiplicador 5x en refactorización, debugging, scaffolding y code reviews",
      },
      {
        name: "Ingeniería de Prompts Técnica",
        icon: TerminalSquare,
        highlight: "Diseño de prompts estructurados, chain-of-thought y especificaciones precisas para LLMs",
      },
      {
        name: "Automatización de Negocios & ETLs",
        icon: Workflow,
        highlight: "Jobs programados (Cron), pipelines de datos y eliminación de tareas manuales",
      },
      {
        name: "Seguridad Sanitaria & Aplicada",
        icon: ShieldCheck,
        highlight: "Defensa anti-XSS/CSRF • Hashing criptográfico Argon2id • Roles clínicos RBAC",
      },
      {
        name: "Optimización de Flujos de Trabajo",
        icon: Wand2,
        highlight: "Aceleración del ciclo de vida del software mediante tooling asistido por IA",
      },
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
          command="systemctl status technical-capabilities.service"
          title="Stack & Competencias Técnicas"
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
                className="flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              >
                <div className="flex flex-col border-b border-neutral-800 bg-neutral-900/90 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-sm font-semibold text-neutral-100">
                      {mod.category}
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-xs text-neutral-400">
                    {mod.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 p-4 sm:p-5">
                  {mod.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        onMouseMove={handleSkillMouseMove}
                        className="group relative flex items-center gap-3.5 overflow-hidden rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-3 sm:p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-900/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.15), transparent 70%)",
                          }}
                        />

                        {/* Logo destacado */}
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/10 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400/60 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                          <SkillIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        {/* Nombre y detalles técnicos */}
                        <div className="relative flex min-w-0 flex-1 flex-col">
                          <span className="font-mono text-sm font-semibold text-neutral-100 transition-colors group-hover:text-emerald-300">
                            {skill.name}
                          </span>
                          <p className="mt-0.5 font-sans text-xs leading-relaxed text-neutral-400 transition-colors group-hover:text-neutral-300">
                            {skill.highlight}
                          </p>
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
