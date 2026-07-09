"use client";
// components/ui/BackToTop.tsx
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-7 right-7 z-50 btn-brutal bg-brutal-yellow w-11 h-11 flex items-center justify-center text-lg font-bold"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
