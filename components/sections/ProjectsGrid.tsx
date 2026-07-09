"use client";
// components/sections/ProjectsGrid.tsx — full projects grid, each card links to /projects/[slug]
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface Props { projects: Project[]; }

const ACCENT_MAP: Record<string, string> = {
  yellow: "bg-brutal-yellow",
  teal:   "bg-brutal-teal",
  pink:   "bg-brutal-pink",
  blue:   "bg-brutal-blue",
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="brutal-card p-7 relative overflow-hidden"
          >
            <span className="absolute top-0 right-5 font-mono text-[5rem] font-bold text-brutal-black opacity-[0.05] leading-none select-none">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className={`h-[6px] border-[2.5px] border-brutal-black mb-5 ${ACCENT_MAP[project.accent]}`} />

            <h3 className="font-grotesk font-bold text-xl mb-1">{project.name}</h3>
            <p className="font-mono text-xs text-gray-500 mb-3">{project.subtitle}</p>
            <p className="text-sm leading-relaxed text-gray-600 mb-4">{project.description}</p>

            <ul className="mb-4 space-y-1">
              {project.features.slice(0, 3).map((f) => (
                <li key={f} className="text-[0.82rem] text-gray-600">
                  <span className="font-bold mr-1">→</span>{f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech_stack.map((t) => (
                <span key={t} className="font-mono text-[0.62rem] font-bold border-2 border-brutal-black px-2 py-0.5 bg-brutal-white">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href={`/projects/${project.slug}`} className="btn-brutal bg-brutal-yellow px-4 py-2 text-xs">
                View Details →
              </Link>
              {project.live_url && (
                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-brutal-white px-4 py-2 text-xs">
                  Live Demo ↗
                </a>
              )}
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-brutal-white px-4 py-2 text-xs">
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
