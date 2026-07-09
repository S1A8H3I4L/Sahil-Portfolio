"use client";
// components/sections/AboutSection.tsx
import { motion } from "framer-motion";
import type { Profile } from "@/types";

interface Props { profile: Profile; }

const CARDS = [
  { icon: "🎓", title: "Education",     sub: "MCA • Computer Science" },
  { icon: "💡", title: "Focus",         sub: "Building scalable software that solves real-world problems" },
  { icon: "⚙️", title: "Specialization",sub: "Full-Stack Development • AI Engineering" },
  { icon: "🚀", title: "Mission",       sub: "Creating products that deliver measurable impact" },
];

export default function AboutSection({ profile }: Props) {
  const paragraphs = [
    "I'm a Software Engineer passionate about designing and developing scalable web applications, intelligent AI-powered systems, and user-centric digital products. I enjoy transforming complex ideas into reliable, high-performance solutions that combine clean architecture with exceptional user experience.",
    "My experience spans full-stack development, backend engineering, AI/ML integration, authentication systems, payment workflows, REST APIs, and modern responsive interfaces. Through self-driven projects, I've built complete production-style applications — from secure authentication and admin dashboards to AI-based solutions and automation tools.",
    "I continuously explore new technologies, strengthen my problem-solving skills, and focus on writing clean, maintainable, and scalable code. My goal is to contribute to engineering teams that build innovative products used by millions while continuously learning and growing as a software engineer.",
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-heading mb-4">Passionate<br />Builder.</h2>
          <div className="w-14 h-[5px] bg-brutal-yellow border-[2.5px] border-brutal-black mb-6" />
          <div className="grid grid-cols-2 gap-3">
            {CARDS.map(({ icon, title, sub }) => (
              <div key={title} className="brutal-card p-4">
                <div className="text-2xl mb-2">{icon}</div>
                <strong className="text-sm block mb-1">{title}</strong>
                <span className="text-xs text-gray-500">{sub}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[0.95rem] leading-relaxed text-gray-700 space-y-4"
        >
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/projects" className="btn-brutal bg-brutal-yellow px-5 py-2.5 text-sm">
              See My Work →
            </a>
            <a href={profile.resume_url} download className="btn-brutal bg-brutal-white px-5 py-2.5 text-sm">
              Download CV
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
