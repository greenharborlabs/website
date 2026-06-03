import { ctas } from "@/data/site";
import { TechnicalVisual } from "@/components/TechnicalVisual";

export function Hero() {
  return (
    <section className="hero-section site-shell" id="top" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">AI-assisted engineering studio</p>
        <h1 id="hero-heading">Building software at the edge of AI and engineering craft.</h1>
        <p className="hero-lede">
          Green Harbor Labs creates developer tools, backend systems, prototypes, and web
          products with production-grade thinking.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href={ctas.primary.href}>
            {ctas.primary.label}
          </a>
          <a className="button button-secondary" href={ctas.secondary.href}>
            {ctas.secondary.label}
          </a>
        </div>
      </div>
      <TechnicalVisual />
    </section>
  );
}
