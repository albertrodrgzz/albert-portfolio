import type { LucideIcon } from "lucide-react";
import { Database, LayoutPanelLeft, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Arquitectura Frontend",
    description:
      "Interfaces modulares y escalables con Next.js, TypeScript y Tailwind, pensadas para rendimiento y mantenibilidad a largo plazo.",
    icon: LayoutPanelLeft,
  },
  {
    title: "Bases de Datos",
    description:
      "Diseño de esquemas relacionales, optimización de consultas e integridad de datos para sistemas que no pueden fallar.",
    icon: Database,
  },
  {
    title: "Automatización",
    description:
      "Scripts, pipelines y jobs programados que eliminan tareas manuales repetitivas y reducen el margen de error humano.",
    icon: Workflow,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          command="cat ./servicios.json"
          title="Servicios"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded border border-neutral-800 bg-neutral-950">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>

              <h3 className="text-base font-semibold text-neutral-100">
                {title}
              </h3>

              <p className="font-sans text-sm leading-relaxed text-neutral-300">
                {description}
              </p>

              <div className="mt-auto flex gap-1 pt-2" aria-hidden="true">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-3 w-1 rounded-sm bg-neutral-800"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
