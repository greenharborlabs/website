import { TagList } from "@/components/TagList";
import type { Product } from "@/data/products";
import { isPresentUrl } from "@/lib/links";

type ProjectSectionProps = {
  product: Product;
};

export function ProjectSection({ product }: ProjectSectionProps) {
  const featuredExample = product.examples?.[0];
  const projectLinks = [
    { label: `View ${product.name}`, href: `/products/${product.slug}` },
    { label: "Open live project", href: product.links?.live },
    { label: `View ${product.name} on GitHub`, href: product.links?.github },
    { label: `Read ${product.name} docs`, href: product.links?.docs },
  ].filter((link): link is { label: string; href: string } => isPresentUrl(link.href));

  return (
    <section className="page-section project-section" id="project" aria-labelledby="project-heading">
      <div className="site-shell">
        <div className="section-heading project-heading">
          <p className="section-eyebrow">Featured Project</p>
          <h2 id="project-heading">{product.name}</h2>
          <p>{product.subtitle}</p>
        </div>

        <div className="project-layout">
          <article className="surface-card project-summary">
            <span className="status-badge">{product.status}</span>
            <p className="project-category">{product.category}</p>
            <h3>{product.summary}</h3>
            <p>{product.description}</p>
            <TagList items={product.techStack} />
            {featuredExample ? (
              <div className="project-example">
                <span>First service using {product.name}</span>
                <h4>{featuredExample.name}</h4>
                <p>{featuredExample.description}</p>
              </div>
            ) : null}
            {projectLinks.length > 0 ? (
              <div className="inline-actions">
                {projectLinks.map((link) => (
                  <a className="button button-secondary" href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>

          <div className="project-proof" aria-label={`${product.name} details`}>
            {product.problem ? (
              <article>
                <span>Problem</span>
                <p>{product.problem}</p>
              </article>
            ) : null}
            {product.solution ? (
              <article>
                <span>Solution</span>
                <p>{product.solution}</p>
              </article>
            ) : null}
            {product.whyItMatters ? (
              <article>
                <span>Why it matters</span>
                <p>{product.whyItMatters}</p>
              </article>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
