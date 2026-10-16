"use client";

import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Boxes,
  Check,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileCheck2,
  FileSpreadsheet,
  KeyRound,
  Layers,
  Lock,
  QrCode,
  ScanLine,
  Server,
  ShieldCheck,
  Terminal,
  UserCheck,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/icons/SocialIcons";

const RENDER_DEMO_URL = "https://kredentia.onrender.com/";
const GITHUB_REPO_URL = "https://github.com/albertrodrgzz/docencia_qr";

const DEMO_USER = "user@ispeb.gob.ve";
const DEMO_PASS = "user123";

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

const kpis = [
  {
    metric: "QR Dinámico",
    label: "Por Funcionario",
    subtext: "Tokens únicos criptográficos",
    icon: QrCode,
  },
  {
    metric: "Validación",
    label: "Perfil en Tiempo Real",
    subtext: "Escaneo móvil sin login",
    icon: UserCheck,
  },
  {
    metric: "PDF & ETL",
    label: "Generación en Servidor",
    subtext: "FPDF/FPDI + PhpSpreadsheet",
    icon: FileSpreadsheet,
  },
  {
    metric: "Docker + SSL",
    label: "Infraestructura Cloud",
    subtext: "Render + Aiven.io (MySQL)",
    icon: Boxes,
  },
];

const technicalChallenges = [
  {
    title: "Generación de Códigos QR para Funcionarios y Trabajadores",
    icon: QrCode,
    description:
      "Sistema de generación de códigos QR para funcionarios y trabajadores mediante Endroid/QR-Code vinculados a tokens criptográficos en base de datos. Cada trabajador cuenta con un código QR único e intransferible enlazado a su expediente y acreditación institucional.",
    tags: ["Endroid QR", "Tokens Criptográficos", "QR por Funcionario", "Antifraude"],
  },
  {
    title: "Escaneo Posterior con Certificación y Validación de Perfil",
    icon: ScanLine,
    description:
      "Al escanear el código QR desde cualquier smartphone, el sistema ejecuta una consulta en tiempo real que arroja la certificación y validación de perfil del funcionario o trabajador: datos de identidad, cargo, validez institucional y autenticidad del documento sin requerir login.",
    tags: ["Escaneo Móvil", "Validación de Perfil", "Certificación Oficial", "Inspección Pública"],
  },
  {
    title: "Renderizado de Certificaciones PDF (FPDF + FPDI)",
    icon: FileCheck2,
    description:
      "Ensamblado dinámico en servidor de acreditaciones y diplomas institucionales en alta resolución. Superposición milimétrica de folios, firmas oficiales, sellos y el código QR generado directamente en el documento.",
    tags: ["FPDF", "FPDI", "Generación Dinámica", "Zero-Memory Leak"],
  },
  {
    title: "Ingesta Masiva de Nóminas con PhpSpreadsheet",
    icon: FileSpreadsheet,
    description:
      "Pipeline de importación por lotes para el registro de funcionarios y cohortes desde libros Excel (.xlsx). Validación estricta de esquemas y transacciones MySQL ACID para inserciones masivas íntegras.",
    tags: ["PhpSpreadsheet", "ETL Batch", "Transacciones ACID", "Sanitización"],
  },
];

const techStack = [
  "PHP 8.3 (Nativo)",
  "MySQL (Aiven Cloud)",
  "Docker Container",
  "Render Deployment",
  "FPDF & FPDI",
  "Endroid QR-Code",
  "PhpSpreadsheet",
  "Conexiones TLS/SSL",
  "Apache Rewrite & Deflate",
];

export default function ProjectsSection() {
  const [copiedUser, setCopiedUser] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  async function copyText(text: string, isUser: boolean) {
    try {
      await navigator.clipboard.writeText(text);
      if (isUser) {
        setCopiedUser(true);
        setTimeout(() => setCopiedUser(false), 2000);
      } else {
        setCopiedPass(true);
        setTimeout(() => setCopiedPass(false), 2000);
      }
    } catch {
      // Fallback
    }
  }

  return (
    <section id="proyectos" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          command="cat ./case-studies/sistema-certificaciones-ispeb.md"
          title="Proyecto Destacado (Flagship)"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 flex flex-col gap-8"
        >
          {/* Card Principal: Flagship Case Study */}
          <motion.article
            variants={item}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
          >
            {/* Gradiente sutil ambiental */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 opacity-40 transition-opacity duration-500 group-hover:opacity-75"
            />

            {/* Cabecera estilo Terminal Window */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 bg-neutral-900/90 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                <span className="ml-2 font-mono text-xs text-neutral-300">
                  case-study://ispeb-certificaciones-qr.php
                </span>
              </div>

              {/* Badges del sistema */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  FLAGSHIP CASE STUDY
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  STATUS: LIVE PRODUCTION
                </span>
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-sky-400">
                  ISPEB INSTITUCIONAL
                </span>
              </div>
            </div>

            {/* Cuerpo del Case Study */}
            <div className="relative z-10 flex flex-col gap-8 p-6 sm:p-8 md:p-10">
              {/* Título y descripción */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Kredentia Platform
                  </span>
                  <h3 className="font-mono text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl md:text-4xl">
                    Sistema Institucional de Certificación y Validación con Código QR para el ISPEB
                  </h3>
                </div>
                <p className="max-w-4xl font-sans text-base leading-relaxed text-neutral-300 sm:text-lg">
                  Sistema de generación de códigos QR para <span className="font-medium text-neutral-100">funcionarios y trabajadores</span>, los cuales posteriormente se escanean y arrojan una <span className="font-medium text-emerald-400">certificación y validación de perfil</span> en tiempo real, garantizando autenticidad institucional, trazabilidad inmediata y prevención de falsificaciones con acceso público sin requerir credenciales para el escaneo.
                </p>
              </div>

              {/* Grid de KPIs Técnicos */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <div
                      key={kpi.metric}
                      className="flex flex-col gap-1 rounded-lg border border-neutral-800 bg-neutral-900/60 p-4 transition-colors hover:border-emerald-500/30 hover:bg-neutral-900/80"
                    >
                      <div className="flex items-center justify-between text-emerald-400">
                        <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                          {kpi.label}
                        </span>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xl font-bold text-neutral-100 sm:text-2xl">
                        {kpi.metric}
                      </span>
                      <span className="font-sans text-xs text-neutral-400">
                        {kpi.subtext}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Desafíos Técnicos & Solución de Ingeniería */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                  <Terminal className="h-4 w-4 text-emerald-400" />
                  <h4 className="font-mono text-sm font-semibold tracking-wider text-neutral-200 uppercase">
                    Módulos Centrales & Arquitectura de Software
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {technicalChallenges.map((challenge) => {
                    const Icon = challenge.icon;
                    return (
                      <div
                        key={challenge.title}
                        className="flex flex-col gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-5 transition-all hover:border-emerald-500/30 hover:bg-neutral-900/60"
                      >
                        <div className="flex items-center gap-2 text-emerald-400">
                          <span className="flex h-7 w-7 items-center justify-center rounded border border-neutral-800 bg-neutral-950">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-mono text-sm font-semibold text-neutral-100">
                            {challenge.title}
                          </span>
                        </div>
                        <p className="font-sans text-xs leading-relaxed text-neutral-300">
                          {challenge.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                          {challenge.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 font-mono text-[10px] text-emerald-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stack Tecnológico */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Tech Stack Consolidado:
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-800 bg-neutral-900/70 px-3 py-1 font-mono text-xs text-neutral-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Banner de Credenciales Demo / Acceso de Prueba */}
              <div className="flex flex-col gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-amber-400">
                  <KeyRound className="h-4 w-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Credenciales de Acceso para Pruebas del Panel Administrativo:
                  </span>
                </div>
                <p className="font-sans text-xs leading-relaxed text-neutral-300">
                  Puedes ingresar al panel administrativo con las credenciales de evaluación, o probar la verificación pública escaneando un código QR generado.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="flex items-center gap-2 rounded border border-neutral-800 bg-neutral-950 px-3 py-1.5 font-mono text-xs text-neutral-300">
                    <span className="text-neutral-500">CORREO:</span>
                    <span className="text-emerald-400">{DEMO_USER}</span>
                    <button
                      type="button"
                      onClick={() => copyText(DEMO_USER, true)}
                      aria-label="Copiar correo demo"
                      className="ml-1 text-neutral-400 hover:text-emerald-400"
                    >
                      {copiedUser ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 rounded border border-neutral-800 bg-neutral-950 px-3 py-1.5 font-mono text-xs text-neutral-300">
                    <span className="text-neutral-500">PASS:</span>
                    <span className="text-emerald-400">{DEMO_PASS}</span>
                    <button
                      type="button"
                      onClick={() => copyText(DEMO_PASS, false)}
                      aria-label="Copiar contraseña demo"
                      className="ml-1 text-neutral-400 hover:text-emerald-400"
                    >
                      {copiedPass ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-wrap items-center gap-4 border-t border-neutral-800/80 pt-6">
                <a
                  href={RENDER_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-5 py-3 font-mono text-sm font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>./probar-demo (Kredentia en Render)</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/80 px-5 py-3 font-mono text-sm font-semibold text-neutral-200 transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-800 hover:text-emerald-400"
                >
                  <GithubIcon className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>./ver-codigo-fuente (GitHub)</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
