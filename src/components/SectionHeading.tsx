"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  command: string;
  title: string;
}

export default function SectionHeading({
  index,
  command,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-mono text-sm text-neutral-300"
      >
        <span className="text-emerald-400">~/albert/portfolio</span>
        <span className="text-neutral-400">$</span> {command}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mt-2 font-mono text-3xl font-bold tracking-tight text-neutral-200 sm:text-4xl"
      >
        <span className="text-emerald-500/70">{index}.</span> {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="mt-6 origin-left border-b border-neutral-800/50"
      />
    </div>
  );
}
