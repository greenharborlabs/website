import { SectionHeading } from "@/components/SectionHeading";

const processFlow = [
  {
    step: "01",
    title: "Frame",
    body: "Define the product bet, user workflow, constraints, and the smallest useful proof point.",
  },
  {
    step: "02",
    title: "Design the system",
    body: "Turn the product shape into architecture, data flow, interfaces, and failure modes before code expands.",
  },
  {
    step: "03",
    title: "Build with agents",
    body: "Use AI to accelerate implementation while engineers keep ownership of boundaries, tradeoffs, and review.",
  },
  {
    step: "04",
    title: "Verify",
    body: "Exercise the product through tests, browser QA, security checks, and production-minded edge cases.",
  },
  {
    step: "05",
    title: "Ship and learn",
    body: "Release the working slice, study what changed, and feed the next cycle with sharper evidence.",
  },
] as const;

const feedbackLoops = [
  "Product discoveries reshape the PRD before implementation gets expensive.",
  "Architecture questions become tests, probes, and acceptance criteria.",
  "Shipping creates evidence that starts the next focused iteration.",
] as const;

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
        <div className="approach-flow" aria-label="Green Harbor Labs delivery process">
          <ol className="process-strip">
            {processFlow.map((step) => (
              <li key={step.title}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <aside className="surface-card process-feedback" aria-label="Feedback loops">
            <p className="process-feedback-label">Continuous loop</p>
            <h3>Each pass tightens the next one.</h3>
            <ul>
              {feedbackLoops.map((loop) => (
                <li key={loop}>{loop}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
