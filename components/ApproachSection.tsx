import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/site";

export function ApproachSection() {
  return (
    <section className="page-section approach-section" id="approach" aria-labelledby="approach-heading">
      <div className="site-shell">
        <SectionHeading
          id="approach-heading"
          eyebrow="Approach"
          title="AI as an Engineering Multiplier"
          body="Green Harbor Labs uses AI across the software delivery lifecycle to move faster while keeping architecture, security, and maintainability in focus."
        />
        <ol className="process-strip">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
