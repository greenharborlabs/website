import { AboutSection } from "@/components/AboutSection";
import { ApproachSection } from "@/components/ApproachSection";
import { BuildAreas } from "@/components/BuildAreas";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { Reveal } from "@/components/Reveal";
import { featuredProduct } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Reveal>
          <BuildAreas />
        </Reveal>
        <Reveal>
          <ProjectSection product={featuredProduct} />
        </Reveal>
        <Reveal>
          <ApproachSection />
        </Reveal>
        <Reveal>
          <CapabilitiesSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
    </>
  );
}
