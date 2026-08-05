import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSequence } from "@/components/sections/HeroSequence";
import { TrustBar } from "@/components/sections/TrustBar";
import { Pillars } from "@/components/sections/Pillars";
import { AboutPortal } from "@/components/sections/AboutPortal";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Scale } from "@/components/sections/Scale";
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
        <SelectedWork />
        <Scale />
        <Testimonials />
        <FAQ />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
