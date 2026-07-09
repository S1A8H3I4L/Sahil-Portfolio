// app/contact/page.tsx
import type { Metadata } from "next";
import { getProfile, getCertifications } from "@/lib/data";
import { fallbackProfile, fallbackCertifications } from "@/lib/fallback-data";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact — Sahil Panchal",
  description: "Get in touch with Sahil Panchal for full-time roles, internships, freelance work, or collaboration.",
};

export default async function ContactPage() {
  const [profile, certifications] = await Promise.all([getProfile(), getCertifications()]);
  const p  = profile ?? fallbackProfile;
  const ce = certifications.length ? certifications : fallbackCertifications;

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Get In Touch"
          title="Let's Build Something. 🤝"
          subtitle="Have a project in mind, or just want to say hi? My inbox is always open."
        />
        <ContactSection profile={p} />
        <CertificationsSection certifications={ce} />
      </main>
      <Footer profile={p} />
      <BackToTop />
    </>
  );
}
