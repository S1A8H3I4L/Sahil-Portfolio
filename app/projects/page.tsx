// app/projects/page.tsx
import type { Metadata } from "next";
import { getProfile, getProjects } from "@/lib/data";
import { fallbackProfile, fallbackProjects } from "@/lib/fallback-data";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/ui/PageHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects — Sahil Panchal",
  description: "16 projects by Sahil Panchal — Full-Stack, AI/ML, Hackathons, and University projects.",
};

export default async function ProjectsPage() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);
  const p  = profile ?? fallbackProfile;
  const pr = projects.length ? projects : fallbackProjects;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Featured Work"
          title="Projects That Matter. 🔥"
          subtitle="16 projects built across full-stack, AI/ML, hackathons, and university work — real code, real problems solved."
        />
        <ProjectsGrid projects={pr} />
      </main>
      <Footer profile={p} />
      <BackToTop />
    </>
  );
}
