"use client";
// components/sections/CertificationsSection.tsx
import { motion } from "framer-motion";
import type { Certification } from "@/types";

interface Props { certifications: Certification[]; }

export default function CertificationsSection({ certifications }: Props) {
  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      <span className="section-label">Certifications &amp; Achievements</span>
      <h2 className="section-heading mb-8">What I've<br />Earned. 🏆</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <a
              href={cert.url ?? "#"}
              target={cert.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="brutal-card block p-5 h-full"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
              <p className="font-mono text-xs text-gray-500 mb-3">{cert.issuer}</p>
              <span className="font-mono text-[0.65rem] font-bold bg-brutal-yellow border-2 border-brutal-black px-2 py-0.5 inline-block">
                {cert.year}
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
