"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_HREF =
  "https://api.whatsapp.com/send?phone=584249399005&text=Hola%20Albert,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.";
const MAIL_HREF = "mailto:contacto.albertr@gmail.com";
const CONTACT_EMAIL = "contacto.albertr@gmail.com";

const cardClass =
  "group relative flex flex-col items-center gap-3 overflow-hidden rounded-lg border border-neutral-800 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]";

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

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="05"
          command="./contacto --centro-de-enlaces"
          title="Contacto"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <motion.a
            variants={item}
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
              <MessageCircle className="h-7 w-7" />
            </span>
            <span className="text-base font-semibold text-neutral-100">
              WhatsApp
            </span>
            <span className="text-sm text-neutral-500">Respuesta rápida</span>
          </motion.a>

          <motion.a
            variants={item}
            href={MAIL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
              <Mail className="h-7 w-7" />
            </span>
            <span className="text-base font-semibold text-neutral-100">
              Email
            </span>
            <span className="max-w-full truncate text-sm text-neutral-500">
              {CONTACT_EMAIL}
            </span>
          </motion.a>

          <motion.button
            variants={item}
            type="button"
            onClick={handleCopyEmail}
            className={cardClass}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
              {copied ? (
                <Check className="h-7 w-7" />
              ) : (
                <Copy className="h-7 w-7" />
              )}
            </span>
            <span className="text-base font-semibold text-neutral-100">
              {copied ? "¡Copiado!" : "Copiar correo"}
            </span>
            <span className="text-sm text-neutral-500">Al portapapeles</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
