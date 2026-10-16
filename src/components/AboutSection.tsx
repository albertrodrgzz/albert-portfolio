"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

type ProfileField = {
  key: string;
  value: string | number | boolean;
  type: "string" | "number" | "boolean";
};

const profile: ProfileField[] = [
  {
    key: "nombre",
    value: "Albert Nazareth Rodríguez Sifontes",
    type: "string",
  },
  { key: "experiencia", value: "+2 años en desarrollo de software", type: "string" },
  { key: "especialidad", value: "Full-Stack & Arquitectura MVC", type: "string" },
  { key: "ubicacion", value: "Ciudad Bolívar, Venezuela", type: "string" },
  { key: "titulo", value: "TSU en Informática", type: "string" },
  { key: "disponible", value: true, type: "boolean" },
];

const valueColor: Record<ProfileField["type"], string> = {
  string: "text-emerald-400",
  number: "text-amber-400",
  boolean: "text-amber-400",
};

function formatValue(field: ProfileField) {
  return field.type === "string" ? `"${field.value}"` : String(field.value);
}

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

export default function AboutSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="sobre-mi" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={item}>
          <SectionHeading
            index="01"
            command="cat ./profile.json"
            title="Sobre Mí"
          />
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          <motion.div
            variants={item}
            className="relative shrink-0"
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse rounded-full bg-emerald-500/20 blur-3xl"
            />
            <button
              type="button"
              onClick={() => setIsRevealed((prev) => !prev)}
              aria-pressed={isRevealed}
              aria-label="Alternar color de la foto de perfil"
              className="relative block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Image
                alt="Albert Rodríguez - Full-Stack Developer"
                src="/albert-rodriguez-fullstack.webp"
                width={400}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`h-56 w-56 rounded-full border border-neutral-800 object-cover contrast-125 brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-110 sm:h-72 sm:w-72 ${
                  isRevealed ? "grayscale-0 brightness-110" : "grayscale"
                }`}
              />
            </button>
          </motion.div>

          <div className="w-full flex-1">
            <motion.div
              variants={item}
              className="overflow-hidden rounded-lg border border-neutral-800 bg-black/40 backdrop-blur-md"
            >
              <div className="flex items-center gap-1.5 border-b border-neutral-800 bg-neutral-900 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 font-mono text-xs text-neutral-400">
                  profile.json
                </span>
              </div>

              <pre className="font-mono overflow-x-auto p-6 text-sm leading-relaxed sm:text-base">
                <code>
                  <span className="text-neutral-400">{"{"}</span>
                  {profile.map((field, index) => (
                    <span key={field.key} className="block pl-4">
                      <span className="text-sky-400">
                        &quot;{field.key}&quot;
                      </span>
                      <span className="text-neutral-400">: </span>
                      <span className={valueColor[field.type]}>
                        {formatValue(field)}
                      </span>
                      {index < profile.length - 1 && (
                        <span className="text-neutral-400">,</span>
                      )}
                    </span>
                  ))}
                  <span className="text-neutral-400">{"}"}</span>
                </code>
              </pre>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-6 font-sans text-sm leading-relaxed text-neutral-300 sm:text-base"
            >
              <p>
                <span className="mb-1 block font-mono text-xs tracking-wider text-emerald-400/90">// trayectoria</span>
                Mi trayectoria técnica combina experiencia en soporte institucional (ISPEB) y atención al cliente especializado, lo que me otorgó un entendimiento profundo sobre cómo los usuarios finales operan sistemas en entornos reales y bajo presión operativa.
              </p>

              <p>
                <span className="mb-1 block font-mono text-xs tracking-wider text-emerald-400/90">
                  // enfoque e ingeniería
                </span>
                He evolucionado este perfil hacia la{" "}
                <span className="font-medium text-emerald-400">
                  Arquitectura de Software
                </span>
                , el diseño de{" "}
                <span className="font-medium text-emerald-400">
                  Bases de Datos Relacionales (ACID)
                </span>{" "}
                y la{" "}
                <span className="font-medium text-emerald-400">
                  Automatización de Procesos de Negocio
                </span>
                , construyendo sistemas escalables como plataformas de gestión de expedientes clínicos y vigilancia epidemiológica desplegadas en la nube.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
