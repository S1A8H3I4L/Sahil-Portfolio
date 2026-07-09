// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProfile, getProjects, getProjectBySlug } from "@/lib/data";
import { fallbackProfile, fallbackProjects } from "@/lib/fallback-data";

import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/sections/ProjectDetail";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const revalidate = 3600;

interface Props { params: { slug: string }; }

// Pre-render all known project pages at build time
export async function generateStaticParams() {
  const projects = await getProjects();
  const list = projects.length ? projects : fallbackProjects;
  return list.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project =
    (await getProjectBySlug(params.slug)) ??
    fallbackProjects.find((p) => p.slug === params.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Sahil Panchal`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const [profile, fetchedProject] = await Promise.all([
    getProfile(),
    getProjectBySlug(params.slug),
  ]);

  const project = fetchedProject ?? fallbackProjects.find((p) => p.slug === params.slug);
  const p = profile ?? fallbackProfile;

  if (!project) notFound();

  // Get prev/next for navigation
  const allProjects = await getProjects();
  const list = allProjects.length ? allProjects : fallbackProjects;
  const idx = list.findIndex((pr) => pr.slug === project.slug);
  const prevProject = idx > 0 ? list[idx - 1] : null;
  const nextProject = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
      </main>
      <Footer profile={p} />
      <BackToTop />
    </>
  );
}
