"use client";
// components/sections/ProjectDetail.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface Props {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

const ACCENT_MAP: Record<string, string> = {
  yellow: "bg-brutal-yellow",
  teal:   "bg-brutal-teal",
  pink:   "bg-brutal-pink",
  blue:   "bg-brutal-blue",
};

export default function ProjectDetail({ project, prevProject, nextProject }: Props) {
  return (
    <article className="pt-28 pb-20 px-6 max-w-5xl mx-auto">

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6"
      >
        <Link href="/projects" className="font-mono text-xs font-bold underline">
          ← Back to all projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className={`h-[8px] border-[2.5px] border-brutal-black mb-6 ${ACCENT_MAP[project.accent]}`} />
        <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
          <div>
            <span className="text-4xl mb-3 block">{project.cover_emoji}</span>
            <h1 className="font-grotesk font-bold tracking-tighter leading-none" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              {project.name}
            </h1>
            <p className="font-mono text-sm text-gray-500 mt-2">{project.subtitle}</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-brutal-yellow px-5 py-2.5 text-sm">
                Live Demo ↗
              </a>
            )}
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-brutal-white px-5 py-2.5 text-sm">
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Meta strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
      >
        {[
          { label: "Role",     value: project.role ?? "Solo Developer" },
          { label: "Duration", value: project.duration ?? "—" },
          { label: "Stack",    value: `${project.tech_stack.length} tools` },
          { label: "Status",   value: "Shipped" },
        ].map(({ label, value }) => (
          <div key={label} className="brutal-card p-4">
            <p className="font-mono text-[0.65rem] font-bold text-gray-400 uppercase tracking-wide mb-1">{label}</p>
            <p className="font-bold text-sm">{value}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

        {/* Main content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <span className="section-label">Overview</span>
            <p className="text-base leading-relaxed text-gray-700">
              {project.long_description ?? project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-10"
          >
            <span className="section-label">Key Features</span>
            <ul className="space-y-2 mt-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="font-bold mt-0.5">→</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="section-label">Challenges &amp; Solutions</span>
              <ul className="space-y-2 mt-2">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold mt-0.5">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="brutal-card p-6 h-fit lg:sticky lg:top-24"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-wide text-gray-400 mb-3 block">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-brutal-yellow px-4 py-2.5 text-sm text-center">
                Live Demo ↗
              </a>
            )}
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn-brutal bg-brutal-white px-4 py-2.5 text-sm text-center">
                Source Code
              </a>
            )}
          </div>
        </motion.aside>
      </div>

      {/* Prev / Next nav */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16 pt-10 border-t-[2.5px] border-brutal-black">
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`} className="brutal-card p-5">
            <p className="font-mono text-xs text-gray-400 mb-1">← Previous</p>
            <p className="font-bold">{prevProject.name}</p>
          </Link>
        ) : <div />}
        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="brutal-card p-5 text-right">
            <p className="font-mono text-xs text-gray-400 mb-1">Next →</p>
            <p className="font-bold">{nextProject.name}</p>
          </Link>
        ) : <div />}
      </div>
    </article>
  );
}
