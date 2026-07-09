"use client";
// components/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About" },
  { href: "/projects",  label: "Work" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-brutal-white border-b-[2.5px] border-brutal-black transition-shadow ${
        scrolled ? "shadow-brutal" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono font-bold text-sm tracking-tight">
          Sahil.dev
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-semibold text-sm transition-colors ${
                  isActive(href)
                    ? "border-b-[2.5px] border-brutal-black"
                    : "text-gray-500 hover:text-brutal-black"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block btn-brutal bg-brutal-yellow px-5 py-2 text-sm"
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono font-bold text-xl border-[2.5px] border-brutal-black w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-[2.5px] border-brutal-black bg-brutal-white px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-bold text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-brutal bg-brutal-yellow px-5 py-2 text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
