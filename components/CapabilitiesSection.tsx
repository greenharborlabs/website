import { SectionHeading } from "@/components/SectionHeading";
import { capabilities } from "@/data/site";

export function CapabilitiesSection() {
  return (
    <section className="page-section" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="site-shell">
        <SectionHeading
          id="capabilities-heading"
          eyebrow="Capabilities"
          title="Engineering Capabilities"
          body="Deep Java and Spring Boot experience, extended by AI-assisted workflows into the right tools, stacks, and protocols for each product."
        />
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.title}>
              <h3>{capability.title}</h3>
              <ul className="tag-list capability-tags" aria-label={`${capability.title} capabilities`}>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
