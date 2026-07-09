"use client";
// components/sections/SkillsTeaser.tsx — compact skills strip on Home, links to /about
import Link from "next/link";
import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface Props { skills: Skill[]; }

const COLOR_MAP: Record<string, string> = {
  yellow: "bg-brutal-yellow",
  teal:   "bg-brutal-teal",
  pink:   "bg-brutal-pink",
  blue:   "bg-brutal-blue",
  white:  "bg-brutal-white",
  black:  "bg-brutal-black text-brutal-white",
};

export default function SkillsTeaser({ skills }: Props) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <span className="section-label">What I Work With</span>
          <h2 className="section-heading">Tech<br />Stack.</h2>
        </div>
        <Link href="/about" className="btn-brutal bg-brutal-white px-5 py-2.5 text-sm">
          About Me &amp; Full Skills →
        </Link>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.flatMap((s) => s.items).map((item, i) => (
          <motion.span
            key={item + i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.02 }}
            className={`font-mono text-sm font-bold border-[2.5px] border-brutal-black px-4 py-2 shadow-brutal-sm ${COLOR_MAP[skills.find(s => s.items.includes(item))?.color ?? "white"]}`}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
