// app/page.tsx — HOME
import { getProfile, getProjects, getSkills } from "@/lib/data";
import { fallbackProfile, fallbackProjects, fallbackSkills } from "@/lib/fallback-data";
import Navbar         from "@/components/Navbar";
import HeroSection    from "@/components/sections/HeroSection";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import SkillsTeaser   from "@/components/sections/SkillsTeaser";
import LearningTicker from "@/components/ui/LearningTicker";
import Footer         from "@/components/Footer";
import BackToTop      from "@/components/ui/BackToTop";

export const revalidate = 3600;

export default async function Home() {
  const [profile, projects, skills] = await Promise.all([
    getProfile(), getProjects(true), getSkills(),
  ]);

  const p  = profile ?? fallbackProfile;
  // Show 4 featured projects on Home
  const pr = projects.length ? projects.slice(0, 4) : fallbackProjects.filter(p => p.featured).slice(0, 4);
  const sk = skills.length ? skills : fallbackSkills;

  return (
    <>
      <Navbar />
      <main>
        <HeroSection profile={p} />
        <ProjectsTeaser projects={pr} />
        <SkillsTeaser skills={sk} />
        <LearningTicker items={p.currently_learning} />
      </main>
      <Footer profile={p} />
      <BackToTop />
    </>
  );
}
