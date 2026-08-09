import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSequence } from "@/components/sections/HeroSequence";
import { TrustBar } from "@/components/sections/TrustBar";
import { Pillars } from "@/components/sections/Pillars";
import { AboutPortal } from "@/components/sections/AboutPortal";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Enquiry } from "@/components/sections/Enquiry";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSequence />
        <TrustBar />
        <Pillars />
        <AboutPortal />
        <CaseStudies />
        {/* The stats band sat here (Scale.tsx, PLAN.md Phase 7). It is
            gone, files and all - not commented out. It rendered four
            em-dashes because the client publishes no figures and none
            may be invented, so what a visitor actually saw was four
            empty pedestals labelled Events delivered, Cities, Years in
            business and Brands served. That reads as broken, and it
            drew the eye to exactly the numbers we cannot give. If real
            figures ever arrive, this is a new section, not a revert. */}
        <Testimonials />
        <FAQ />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
