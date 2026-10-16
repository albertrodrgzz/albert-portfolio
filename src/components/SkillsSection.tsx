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

type SkillLevel = "PRODUCCION" | "AVANZADO" | "FAMILIARIZADO";

interface Skill {
  name: string;
  icon: LucideIcon;
  level: SkillLevel;
  highlight: string;
}

interface SkillModule {
  category: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

const levelConfig: Record<
  SkillLevel,
  { label: string; badgeClass: string; dotClass: string }
> = {
  PRODUCCION: {
    label: "Producción Diaria",
    badgeClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    dotClass: "bg-emerald-400 animate-pulse",
  },
  AVANZADO: {
    label: "Avanzado",
    badgeClass: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    dotClass: "bg-sky-400",
  },
  FAMILIARIZADO: {
    label: "Familiarizado",
    badgeClass: "border-neutral-700 bg-neutral-900/60 text-neutral-300",
    dotClass: "bg-neutral-400",
  },
};

const modules: SkillModule[] = [
  {
    category: "Frontend & Interfaces Modernas",
    icon: LayoutPanelLeft,
    description: "Construcción de interfaces reactivas, rápidas y modulares con tipado estricto.",
    skills: [
      {
        name: "Next.js (App Router)",
        icon: AppWindow,
        level: "PRODUCCION",
        highlight: "Server & Client Components • SSR / SSG • Turbopack",
      },
      {
        name: "TypeScript",
        icon: FileCode2,
        level: "PRODUCCION",
        highlight: "Tipado estricto • Generics • DTOs y validación de tipos",
      },
      {
        name: "React 19",
        icon: Component,
        level: "AVANZADO",
        highlight: "Hooks avanzados • Custom Hooks desacoplados • Context API",
      },
      {
        name: "Tailwind CSS v4",
        icon: Paintbrush,
        level: "PRODUCCION",
        highlight: "Design systems modulares • Dark mode estricto • UI responsiva",
      },
      {
        name: "Framer Motion",
        icon: Sparkles,
        level: "AVANZADO",
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
        level: "PRODUCCION",
        highlight: "POO pura sin dependencias mágicas • Router custom • PDO seguro",
      },
      {
        name: "MySQL / MariaDB (ACID)",
        icon: Database,
        level: "PRODUCCION",
        highlight: "Normalización 3NF • Claves foráneas • Índices compuestos y optimización",
      },
      {
        name: "PostgreSQL",
        icon: Table2,
        level: "AVANZADO",
        highlight: "Modelado relacional • Integración con Supabase • Consultas complejas",
      },
      {
        name: "Arquitectura RESTful & APIs",
        icon: Network,
        level: "PRODUCCION",
        highlight: "Diseño de endpoints • Middlewares • Respuestas JSON estandarizadas",
      },
      {
        name: "Node.js",
        icon: Cpu,
        level: "AVANZADO",
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
        level: "PRODUCCION",
        highlight: "Imágenes de producción ligeras • Docker Compose • Contenerización PHP/Nginx",
      },
      {
        name: "Render & Vercel (CI/CD)",
        icon: Cloud,
        level: "PRODUCCION",
        highlight: "Pipelines de despliegue continuo • Webhooks • Entornos cloud en producción",
      },
      {
        name: "Aiven.io (Managed Cloud DB)",
        icon: Database,
        level: "PRODUCCION",
        highlight: "Clústeres MySQL administrados • Conexiones TLS/SSL cifradas de alta seguridad",
      },
      {
        name: "Git & GitHub Workflows",
        icon: GitBranch,
        level: "PRODUCCION",
        highlight: "Estrategias de ramificación • Commits semánticos • GitHub Actions",
      },
      {
        name: "Gestión Segura de Entornos",
        icon: SlidersHorizontal,
        level: "PRODUCCION",
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
        level: "PRODUCCION",
        highlight: "Multiplicador 5x en refactorización, debugging, scaffolding y code reviews",
      },
      {
        name: "Ingeniería de Prompts Técnica",
        icon: TerminalSquare,
        level: "PRODUCCION",
        highlight: "Diseño de prompts estructurados, chain-of-thought y especificaciones precisas para LLMs",
      },
      {
        name: "Automatización de Negocios & ETLs",
        icon: Workflow,
        level: "PRODUCCION",
        highlight: "Jobs programados (Cron), pipelines de datos y eliminación de tareas manuales",
      },
      {
        name: "Seguridad Sanitaria & Aplicada",
        icon: ShieldCheck,
        level: "AVANZADO",
        highlight: "Defensa anti-XSS/CSRF • Hashing criptográfico Argon2id • Roles clínicos RBAC",
      },
      {
        name: "Optimización de Flujos de Trabajo",
        icon: Wand2,
        level: "PRODUCCION",
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
                    const config = levelConfig[skill.level];

                    return (
                      <div
                        key={skill.name}
                        onMouseMove={handleSkillMouseMove}
                        className="group relative flex flex-col gap-1.5 overflow-hidden rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-3 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-neutral-900/60"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.15), transparent 70%)",
                          }}
                        />

                        <div className="relative flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded border border-neutral-800 bg-neutral-900 text-emerald-400">
                              <SkillIcon className="h-4 w-4" />
                            </span>
                            <span className="font-mono text-sm font-medium text-neutral-100">
                              {skill.name}
                            </span>
                          </div>

                          <div className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${config.badgeClass}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
                            {config.label}
                          </div>
                        </div>

                        <p className="relative pl-9 font-sans text-xs leading-relaxed text-neutral-300">
                          {skill.highlight}
                        </p>
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
