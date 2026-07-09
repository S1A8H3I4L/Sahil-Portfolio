"use client";
// components/ui/PageHero.tsx — compact hero banner used on /about, /projects, /contact
import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className="pt-32 pb-12 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-label">{label}</span>
        <h1 className="section-heading mb-3">{title}</h1>
        {subtitle && (
          <p className="text-base text-gray-600 max-w-xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-14 h-[5px] bg-brutal-yellow border-[2.5px] border-brutal-black mt-5" />
      </motion.div>
    </section>
  );
}
