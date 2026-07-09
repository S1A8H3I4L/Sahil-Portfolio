"use client";
// components/sections/ContactSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import type { Profile } from "@/types";

interface Props { profile: Profile; }

export default function ContactSection({ profile }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message ?? "Message sent! 🎉");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error ?? "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const LINKS = [
    { icon: "📧", label: profile.email,    href: `mailto:${profile.email}` },
    { icon: "📞", label: profile.phone ?? "+91 95586 47711", href: `tel:${profile.phone ?? "+919558647711"}` },
    { icon: "💼", label: "LinkedIn",       href: profile.linkedin },
    { icon: "🐙", label: "GitHub",         href: profile.github },
    { icon: "🌐", label: "sahil-panchal.vercel.app", href: profile.portfolio_url },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <span className="section-label">Get In Touch</span>
      <h2 className="section-heading mb-8">Let's Build<br />Something. 🤝</h2>

      <div className="border-[2.5px] border-brutal-black shadow-brutal-lg grid grid-cols-1 lg:grid-cols-2 gap-0 bg-brutal-white">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-10 border-b-[2.5px] lg:border-b-0 lg:border-r-[2.5px] border-brutal-black"
        >
          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
          </p>
          <ul className="space-y-3">
            {LINKS.map(({ icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="btn-brutal flex items-center gap-3 px-4 py-2.5 text-sm bg-brutal-white"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="p-10 flex flex-col gap-4"
        >
          {(["name", "email"] as const).map((field) => (
            <div key={field} className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold uppercase tracking-wide">
                {field === "name" ? "Your Name" : "Email Address"}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field === "name" ? "Sahil Panchal" : "sahil@gmail.com"}
                className="border-[2.5px] border-brutal-black px-3 py-2.5 text-sm font-grotesk bg-brutal-white outline-none focus:shadow-brutal-sm transition-shadow"
              />
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs font-bold uppercase tracking-wide">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={4}
              className="border-[2.5px] border-brutal-black px-3 py-2.5 text-sm font-grotesk bg-brutal-white outline-none focus:shadow-brutal-sm transition-shadow resize-y"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="btn-brutal bg-brutal-yellow px-6 py-3 text-sm self-start disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
