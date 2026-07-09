// app/about/page.tsx
import type { Metadata } from "next";
import { getProfile, getSkills, getExperience, getEducation } from "@/lib/data";
import { fallbackProfile, fallbackSkills, fallbackExperience, fallbackEducation } from "@/lib/fallback-data";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About — Sahil Panchal",
  description: "Background, skills, experience and education of Sahil Panchal — MCA from GLS University, Software Engineer.",
};

export default async function AboutPage() {
  const [profile, skills, experience, education] = await Promise.all([
    getProfile(), getSkills(), getExperience(), getEducation(),
  ]);

  const p  = profile ?? fallbackProfile;
  const sk = skills.length ? skills : fallbackSkills;
  const ex = experience.length ? experience : fallbackExperience;
  const ed = education.length ? education : fallbackEducation;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About"
          title="The Story So Far."
          subtitle="Software Engineer. MCA @ GLS University. Building scalable software and AI-powered applications with real-world impact."
        />
        <AboutSection profile={p} />
        <SkillsSection skills={sk} />
        <ExperienceSection experience={ex} />
        <EducationSection education={ed} />
      </main>
      <Footer profile={p} />
      <BackToTop />
    </>
  );
}
