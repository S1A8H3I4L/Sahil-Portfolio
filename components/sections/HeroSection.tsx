"use client";
// components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import type { Profile } from "@/types";

interface Props { profile: Profile; }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

export default function HeroSection({ profile }: Props) {
  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 px-6 max-w-6xl mx-auto flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">

        {/* LEFT */}
        <div>
          <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-5">
            <span className="w-8 h-[2.5px] bg-brutal-black inline-block" />
            <span className="font-mono text-xs font-bold tracking-[3px] uppercase text-green-600">
              ● Available for hire
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-grotesk font-bold leading-none tracking-tighter mb-4"
            style={{ fontSize: "clamp(3rem, 7vw, 5.8rem)" }}
          >
            Sahil
            <br />
            <em className="not-italic" style={{ WebkitTextStroke: "2px #111", color: "#FFD60A" }}>
              Panchal.
            </em>
          </motion.h1>

          <motion.div {...fadeUp(0.2)} className="mb-5">
            <span className="font-mono text-sm font-bold bg-brutal-teal border-[2.5px] border-brutal-black px-3 py-1.5 inline-block shadow-brutal-sm">
              Software Engineer | Full-Stack &amp; AI 🤖
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.3)}
            className="text-base leading-relaxed text-gray-600 max-w-md mb-3"
          >
            Building scalable software, AI-powered applications, and secure backend systems with clean architecture, modern technologies, and real-world impact.
          </motion.p>

          <motion.p {...fadeUp(0.35)} className="font-mono text-xs text-gray-500 mb-7">
            📍 {profile.location}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
            <a href="/projects" className="btn-brutal bg-brutal-yellow px-5 py-3 text-sm">
              View Projects
            </a>
            <a href="/contact" className="btn-brutal bg-brutal-white px-5 py-3 text-sm">
              Contact Me
            </a>
            <a href={profile.resume_url} download className="btn-brutal bg-brutal-teal px-5 py-3 text-sm">
              ↓ Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="brutal-card p-8 w-full max-w-sm">
            <div className="grid grid-cols-2 gap-5 mb-6">
              {[
                { num: `${profile.years_learning}+`, label: "Years Building Software" },
                { num: `${profile.projects_count}+`, label: "Production-Ready Projects" },
                { num: "2",                           label: "Industry Internships" },
                { num: "9.47",                        label: "MCA CGPA" },
              ].map(({ num, label }) => (
                <div key={label} className="font-mono">
                  <div className="text-4xl font-bold leading-none">{num}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python","Django","React","Node.js","AI/ML","PostgreSQL"].map((t, i) => {
                const colors = ["bg-brutal-yellow","bg-brutal-teal","bg-brutal-white","bg-brutal-pink"];
                return (
                  <span key={t} className={`skill-tag ${colors[i % colors.length]}`}>{t}</span>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
