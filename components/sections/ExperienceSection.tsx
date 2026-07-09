"use client";
// components/sections/ExperienceSection.tsx
import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface Props { experience: Experience[]; }

const BADGE_COLOR: Record<string, string> = {
  yellow: "bg-brutal-yellow",
  teal:   "bg-brutal-teal",
  pink:   "bg-brutal-pink",
};

export default function ExperienceSection({ experience }: Props) {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <span className="section-label">Experience</span>
      <h2 className="section-heading mb-8">Where I've<br />Worked.</h2>

      <div className="space-y-5">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="brutal-card grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6 p-7"
          >
            <div>
              <p className="font-mono text-xs font-bold text-gray-500 mb-1">{exp.period}</p>
              <p className="font-bold text-sm mb-2">{exp.company}</p>
              <span className={`font-mono text-[0.6rem] font-bold border-2 border-brutal-black px-2 py-0.5 inline-block ${BADGE_COLOR[exp.badge_color]}`}>
                {exp.type}
              </span>
            </div>
            <div>
              <h3 className="font-grotesk font-bold text-lg mb-3">{exp.title}</h3>
              <ul className="space-y-1.5">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-gray-600">
                    <span className="font-bold mr-1.5">▸</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
