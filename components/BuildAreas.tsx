import { SectionHeading } from "@/components/SectionHeading";
import { buildAreas } from "@/data/site";

export function BuildAreas() {
  return (
    <section className="page-section" aria-labelledby="builds-heading">
      <div className="site-shell">
        <SectionHeading
          id="builds-heading"
          title="What Green Harbor Labs Builds"
          body="Practical software products and experiments using modern engineering practices, AI-assisted workflows, and a bias toward shipping."
        />
        <div className="build-grid">
          {buildAreas.map((area) => (
            <article className="surface-card build-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
