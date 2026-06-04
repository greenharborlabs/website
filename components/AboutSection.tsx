import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section className="page-section about-section" id="about" aria-labelledby="about-heading">
      <div className="site-shell about-layout">
        <SectionHeading id="about-heading" eyebrow="About" title="About Green Harbor Labs" />
        <div className="about-copy">
          <p>
            Green Harbor Labs is a place for building, testing, and shipping
            AI-assisted software products, experiments, and tools.
          </p>
          <p>
            The lab focuses on practical software: useful products, clean systems,
            thoughtful architecture, and fast iteration powered by modern AI workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
