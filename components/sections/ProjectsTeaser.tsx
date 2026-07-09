"use client";
// components/sections/ProjectsTeaser.tsx — shows 3 projects on Home, links to /projects
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

export default function ProjectsTeaser({ projects }: Props) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <span className="section-label">Featured Work</span>
          <h2 className="section-heading">Selected<br />Projects...</h2>
        </div>
        <Link href="/projects" className="btn-brutal bg-brutal-white px-5 py-2.5 text-sm">
          View All Projects →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Link href={`/projects/${project.slug}`} className="brutal-card p-6 block h-full">
              <div className={`h-[6px] border-[2.5px] border-brutal-black mb-4 ${ACCENT_MAP[project.accent]}`} />
              <div className="text-2xl mb-2">{project.cover_emoji}</div>
              <h3 className="font-grotesk font-bold text-lg mb-1">{project.name}</h3>
              <p className="font-mono text-xs text-gray-500 mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
              <span className="font-mono text-xs font-bold underline">View Project →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
