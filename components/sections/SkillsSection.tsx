"use client";
// components/sections/SkillsSection.tsx
import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface Props { skills: Skill[]; }

const COLOR_MAP: Record<string, string> = {
  yellow: "bg-brutal-yellow",
  teal:   "bg-brutal-teal",
  pink:   "bg-brutal-pink",
  blue:   "bg-brutal-blue",
  white:  "bg-brutal-white",
  black:  "bg-brutal-black",
};

const TAG_MAP: Record<string, string> = {
  black:  "border-gray-600 bg-[#222] text-white",
  white:  "border-brutal-black bg-brutal-white",
  yellow: "border-brutal-black bg-brutal-white",
  teal:   "border-brutal-black bg-brutal-white",
  pink:   "border-brutal-black bg-brutal-white",
  blue:   "border-brutal-black bg-brutal-white",
};

const LABEL_MAP: Record<string, string> = {
  black: "bg-brutal-yellow text-brutal-black",
  white: "bg-brutal-black text-brutal-white",
  yellow: "bg-brutal-black text-brutal-white",
  teal:  "bg-brutal-black text-brutal-white",
  pink:  "bg-brutal-black text-brutal-white",
  blue:  "bg-brutal-black text-brutal-white",
};

export default function SkillsSection({ skills }: Props) {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <span className="section-label">Technical Skills</span>
      <h2 className="section-heading mb-8">What I<br />Work With.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`border-[2.5px] border-brutal-black shadow-brutal p-6 ${COLOR_MAP[skill.color] ?? "bg-brutal-white"}`}
          >
            <span className={`inline-block font-mono text-[0.6rem] font-bold tracking-[2px] uppercase px-2 py-1 mb-4 ${LABEL_MAP[skill.color] ?? "bg-brutal-black text-brutal-white"}`}>
              {skill.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className={`font-mono text-[0.68rem] font-bold border-2 px-2 py-1 rounded-sm ${TAG_MAP[skill.color] ?? "border-brutal-black bg-brutal-white"}`}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
