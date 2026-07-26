"use client";

import type { FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/MagneticButton";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const WHATSAPP_MESSAGE = "Hola Albert, vi tu portafolio y me gustaría contactarte.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
const MAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Contacto desde el portafolio"
)}`;

export default function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("POST /api/contacto", Object.fromEntries(formData.entries()));
  }

  return (
    <section id="contacto" className="scroll-mt-24 px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          index="05"
          command="./contacto --nuevo-registro"
          title="Contacto"
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <MagneticButton
            href={WHATSAPP_HREF}
            variant="primary"
            target="_blank"
            className="w-full justify-center sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </MagneticButton>

          <MagneticButton
            href={MAIL_HREF}
            variant="secondary"
            className="w-full justify-center sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </MagneticButton>
        </div>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-800/50" />
          <span className="text-xs text-neutral-600">o completa el formulario</span>
          <div className="h-px flex-1 bg-neutral-800/50" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="text-sm text-neutral-400">
              <span className="text-emerald-400">&gt;</span> nombre:
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Ada Lovelace"
              className="rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-emerald-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-neutral-400">
              <span className="text-emerald-400">&gt;</span> email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-emerald-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje" className="text-sm text-neutral-400">
              <span className="text-emerald-400">&gt;</span> mensaje:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              placeholder="Cuéntame en qué estás trabajando..."
              className="resize-none rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none placeholder:text-neutral-600 focus:border-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-400/20"
          >
            POST /api/contacto
          </button>
        </form>
      </div>
    </section>
  );
}
