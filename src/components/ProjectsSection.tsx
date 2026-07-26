"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface Project {
  title: string;
  fileName: string;
  description: string;
  tags: string[];
  status: "PRODUCCION" | "DESARROLLO" | "COMPLETADO";
  link: string;
}

const statusConfig: Record<
  Project["status"],
  { label: string; className: string }
> = {
  PRODUCCION: { label: "production", className: "text-emerald-400" },
  DESARROLLO: { label: "development", className: "text-yellow-400" },
  COMPLETADO: { label: "archived", className: "text-neutral-400" },
};

const projects: Project[] = [
  {
    title: "Motor de Conciliación B2B",
    fileName: "conciliacion-b2b.ts",
    description:
      "Automatiza la conciliación de facturas y pagos entre las plataformas de distintos partners, detectando discrepancias y generando reportes sin intervención manual.",
    tags: ["Python", "PostgreSQL", "Docker", "Cron"],
    status: "PRODUCCION",
    link: "#",
  },
  {
    title: "Gestor de Reservas Anti-Colisión",
    fileName: "reservas-anticolision.ts",
    description:
      "Plataforma de reservas con control de concurrencia a nivel de base de datos para evitar solapamientos de horarios en tiempo real.",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    status: "DESARROLLO",
    link: "#",
  },
  {
    title: "Pipeline de Sincronización de Inventario",
    fileName: "sync-inventario.ts",
    description:
      "Servicio ETL que sincroniza stock entre almacenes y canales de venta, eliminando discrepancias mediante colas de eventos y reintentos automáticos.",
    tags: ["Node.js", "Redis", "PostgreSQL", "GitHub Actions"],
    status: "COMPLETADO",
    link: "#",
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

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="scroll-mt-24 px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" command="ls ./proyectos" title="Proyectos" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => {
            const status = statusConfig[project.status];

            return (
              <motion.article
                key={project.title}
                variants={item}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10 flex items-center gap-1.5 border-b border-neutral-800 bg-neutral-900 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs text-neutral-500">
                    {project.fileName}
                  </span>
                </div>

                <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-neutral-100">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 text-xs ${status.className}`}>
                      STATUS=
                      <span className="font-semibold">{status.label}</span>
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-neutral-800 bg-neutral-950/60 px-2 py-1 text-xs text-emerald-400"
                      >
                        TAG=&quot;{tag}&quot;
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="mt-auto inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-emerald-400"
                  >
                    ./repo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
