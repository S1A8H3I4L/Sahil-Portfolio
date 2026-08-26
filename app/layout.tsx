// app/layout.tsx
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Sahil Panchal — Software Engineer | Full-Stack & AI",
  description:
    "Portfolio of Sahil Panchal — Software Engineer specializing in Full-Stack Development (Django, React, Node.js, .NET) and AI/ML. MCA from GLS University, Ahmedabad. Open to internships and full-time roles.",
  keywords: ["Sahil Panchal", "full stack developer", "AI engineer", "Django", "React", "Node.js", "MCA GLS University", "Ahmedabad", "portfolio"],
  authors: [{ name: "Sahil Panchal" }],
  openGraph: {
    title: "Sahil Panchal — Software Engineer | Full-Stack & AI",
    description: "Building scalable software, AI-powered applications, and secure backend systems.",
    url: "https://sahil-panchal.vercel.app/",
    siteName: "Sahil Panchal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Panchal — Software Engineer | Full-Stack & AI",
    description: "Building scalable software, AI-powered applications, and secure backend systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brutal-white text-brutal-black font-grotesk antialiased">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              border: "2.5px solid #111",
              boxShadow: "4px 4px 0 #111",
              background: "#F5F0E8",
              color: "#111",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "600",
            },
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
