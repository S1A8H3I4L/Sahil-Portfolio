"use client";
// components/sections/EducationSection.tsx
import { motion } from "framer-motion";
import type { Education } from "@/types";

interface Props { education: Education[]; }

const STATUS_COLOR: Record<string, string> = {
  CURRENT:   "bg-brutal-yellow",
  COMPLETED: "bg-brutal-teal",
};

export default function EducationSection({ education }: Props) {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <span className="section-label">Education</span>
      <h2 className="section-heading mb-8">Academic<br />Journey.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="brutal-card p-7"
          >
            <span className={`font-mono text-[0.65rem] font-bold border-2 border-brutal-black px-3 py-1 inline-block mb-4 ${STATUS_COLOR[edu.status]}`}>
              {edu.status}
            </span>
            <h3 className="font-grotesk font-bold text-lg mb-1">{edu.degree}</h3>
            <p className="text-sm text-gray-500 mb-2">{edu.college} · {edu.location}</p>
            <p className="font-mono text-xs text-gray-400 mb-3">{edu.period}</p>
            <span className="font-bold text-sm bg-brutal-teal border-2 border-brutal-black px-3 py-1 inline-block">
              {edu.gpa_or_percent}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
