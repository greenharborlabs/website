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
          body="A practical mix of frontend, backend, AI workflow, cloud, and product engineering experience."
        />
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
