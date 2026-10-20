"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileCheck2,
  FileSpreadsheet,
  KeyRound,
  Lock,
  QrCode,
  ScanLine,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Métricas de ingeniería de alto impacto para reclutadores y clientes
const engineeringMetrics = [
  {
    value: "< 200ms",
    label: "Tiempo de Respuesta",
    detail: "Validación instantánea en calle",
    icon: Zap,
    color: "text-emerald-400",
  },
  {
    value: "100%",
    label: "Antifraude",
    detail: "Tokens únicos por funcionario",
    icon: ShieldCheck,
    color: "text-sky-400",
  },
  {
    value: "0 Login",
    label: "Acceso Público",
    detail: "Inspección móvil sin fricción",
    icon: ScanLine,
    color: "text-amber-400",
  },
  {
    value: "ACID",
    label: "Integridad MySQL",
    detail: "Ingesta masiva por lotes (.xlsx)",
    icon: Database,
    color: "text-purple-400",
  },
];

// Flujo de verificación institucional interactivo/visual
const verificationWorkflow = [
  {
    step: "01",
    title: "Emisión Criptográfica",
    description: "Generación de QR único vinculado al expediente del funcionario",
    icon: QrCode,
  },
  {
    step: "02",
    title: "Escaneo en Campo",
    description: "Resolución pública desde cualquier smartphone sin app ni login",
    icon: ScanLine,
  },
  {
    step: "03",
    title: "Validación en Cloud",
    description: "Cotejo en tiempo real contra base de datos encriptada (Aiven MySQL)",
    icon: Server,
  },
  {
    step: "04",
    title: "Certificado Dinámico",
    description: "Emisión de credencial y diploma PDF con firmas y folios oficiales",
    icon: FileCheck2,
  },
];

// 4 Capacidades técnicas clave
const keyCapabilities = [
  {
    title: "Identidad QR Criptográfica",
    description:
      "Tokens únicos con Endroid QR enlazados al expediente institucional para certificar funcionarios con validez oficial.",
    icon: QrCode,
    badge: "Criptografía & Antifraude",
  },
  {
    title: "Verificación Pública en Tiempo Real",
    description:
      "Permite a inspectores o ciudadanos escanear la credencial y constatar cargo, estatus activo y autenticidad en segundos.",
    icon: ScanLine,
    badge: "Móvil & Zero-Login",
  },
  {
    title: "Motor PDF Oficial en Servidor",
    description:
      "Renderizado dinámico de acreditaciones mediante FPDF y FPDI con folios correlativos, firmas y sellos milimétricos.",
    icon: FileCheck2,
    badge: "Generación Automatizada",
  },
  {
    title: "Pipeline ETL Masivo con Excel",
    description:
      "Importación por lotes de nóminas mediante PhpSpreadsheet con sanitización y transacciones ACID seguras.",
    icon: FileSpreadsheet,
    badge: "Procesamiento por Lotes",
  },
];

const techStack = [
  "PHP 8.3 Nativo",
  "MySQL (Aiven Cloud)",
  "Docker Container",
  "Render Deployment",
  "FPDF & FPDI",
  "Endroid QR",
  "PhpSpreadsheet",
  "Apache Deflate & TLS",
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
          command="cat ./case-studies/kredentia-ispeb.md"
          title="Proyecto Destacado"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10"
        >
          {/* Card Principal: Flagship Case Study */}
          <motion.article
            variants={item}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]"
          >
            {/* Gradiente ambiental */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
            />

            {/* Cabecera estilo Terminal Window */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 bg-neutral-900/90 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-neutral-300">
                  kredentia.onrender.com
                </span>
              </div>

              {/* Badges de estado del sistema */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  EN PRODUCCIÓN
                </span>
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-sky-400">
                  CASO REAL INSTITUCIONAL (ISPEB)
                </span>
              </div>
            </div>

            {/* Cuerpo del Case Study */}
            <div className="relative z-10 flex flex-col gap-8 p-5 sm:p-8 md:p-10">
              {/* Título & Resumen de Alto Impacto para Reclutadores */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-emerald-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    Kredentia Platform
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="font-mono text-xs text-neutral-400">
                    Full-Stack & Arquitectura MVC Nativa
                  </span>
                </div>

                <h3 className="font-mono text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl md:text-4xl">
                  Sistema de Certificación y Validación QR para Funcionarios y Personal
                </h3>

                <p className="max-w-3xl font-sans text-sm leading-relaxed text-neutral-300 sm:text-base">
                  Plataforma para emisión y verificación pública de credenciales oficiales con{" "}
                  <strong className="font-semibold text-emerald-400">código QR criptográfico</strong>.
                  Permite comprobar la autenticidad institucional en tiempo real desde cualquier
                  smartphone sin requerir credenciales para el escaneo, automatizando la entrega de
                  certificados en PDF y blindando la identidad contra falsificaciones.
                </p>
              </div>

              {/* Métricas Visuales de Ingeniería */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {engineeringMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="group/metric relative flex flex-col gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-neutral-900/90"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                          {metric.label}
                        </span>
                        <Icon className={`h-4 w-4 ${metric.color}`} />
                      </div>
                      <span className="font-mono text-2xl font-bold text-neutral-100 sm:text-3xl">
                        {metric.value}
                      </span>
                      <span className="font-sans text-xs text-neutral-400">
                        {metric.detail}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Elemento Visual: Flujo de Verificación en 4 Pasos */}
              <div className="flex flex-col gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-200">
                      Pipeline de Verificación Institucional
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400">
                    Live System Flow
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-2">
                  {verificationWorkflow.map((flow, index) => {
                    const Icon = flow.icon;
                    return (
                      <div
                        key={flow.step}
                        className="relative flex flex-col gap-2 rounded-lg border border-neutral-800/70 bg-neutral-950/60 p-3.5 transition-all hover:border-emerald-500/30"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400">
                            {flow.step}
                          </span>
                          <Icon className="h-4 w-4 text-neutral-400" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-neutral-200">
                          {flow.title}
                        </span>
                        <p className="font-sans text-[11px] leading-relaxed text-neutral-400">
                          {flow.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4 Capacidades Técnicas Centrales */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {keyCapabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="group/card flex flex-col gap-2 rounded-xl border border-neutral-800/90 bg-neutral-900/40 p-4 transition-all duration-200 hover:border-emerald-500/30 hover:bg-neutral-900/70"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 text-emerald-400 transition-colors group-hover/card:border-emerald-500/40">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-mono text-sm font-semibold text-neutral-200">
                            {cap.title}
                          </span>
                        </div>
                        <span className="rounded border border-neutral-800 bg-neutral-950/60 px-2 py-0.5 font-mono text-[10px] text-emerald-400/90">
                          {cap.badge}
                        </span>
                      </div>
                      <p className="font-sans text-xs leading-relaxed text-neutral-400">
                        {cap.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Stack Tecnológico Directo */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Stack Consolidado:
                </span>
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 font-mono text-xs text-neutral-300 transition-colors hover:border-emerald-500/30 hover:text-emerald-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Credenciales Rápidas para Evaluación del Panel */}
              <div className="flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5 sm:items-center">
                  <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-amber-400 sm:mt-0" />
                  <div>
                    <span className="block font-mono text-xs font-semibold text-neutral-200">
                      Credenciales para Probar el Panel Administrativo
                    </span>
                    <span className="block font-sans text-xs text-neutral-400">
                      Acceso evaluativo listo para iniciar sesión en la demo en vivo.
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-1 font-mono text-xs text-neutral-300">
                    <span className="text-neutral-500">User:</span>
                    <span className="text-emerald-400">{DEMO_USER}</span>
                    <button
                      type="button"
                      onClick={() => copyText(DEMO_USER, true)}
                      aria-label="Copiar usuario demo"
                      className="ml-1 text-neutral-400 transition-colors hover:text-emerald-300"
                    >
                      {copiedUser ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-1 font-mono text-xs text-neutral-300">
                    <span className="text-neutral-500">Pass:</span>
                    <span className="text-emerald-400">{DEMO_PASS}</span>
                    <button
                      type="button"
                      onClick={() => copyText(DEMO_PASS, false)}
                      aria-label="Copiar contraseña demo"
                      className="ml-1 text-neutral-400 transition-colors hover:text-emerald-300"
                    >
                      {copiedPass ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={RENDER_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-500/15 px-5 py-3 font-mono text-sm font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/25 hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]"
                >
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>Probar Demo en Vivo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/80 px-5 py-3 font-mono text-sm font-semibold text-neutral-200 transition-all duration-300 hover:border-emerald-500/40 hover:bg-neutral-800 hover:text-emerald-300"
                >
                  <GithubIcon className="h-4 w-4 text-neutral-300 transition-transform group-hover:scale-110 group-hover:text-emerald-400" />
                  <span>Ver Código en GitHub</span>
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
