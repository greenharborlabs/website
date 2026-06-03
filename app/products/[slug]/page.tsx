import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { TagList } from "@/components/TagList";
import { getProductBySlug, products } from "@/data/products";
import { siteMetadata } from "@/data/site";
import { isPresentUrl } from "@/lib/links";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const title = `${product.name} | ${siteMetadata.name}`;
  const description = product.summary;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/products/${product.slug}`,
      siteName: siteMetadata.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productLinks = [
    { label: "Open live project", href: product.links?.live },
    { label: "View on GitHub", href: product.links?.github },
    { label: "Read docs", href: product.links?.docs },
    { label: "Read case study", href: product.links?.caseStudy },
  ].filter((link): link is { label: string; href: string } => isPresentUrl(link.href));

  const examples = product.examples ?? [];

  return (
    <>
      <Header />
      <main id="main-content" className="product-page">
        <section className="product-hero">
          <div className="site-shell product-hero-inner">
            <div className="product-hero-copy">
              <p className="section-eyebrow">Product</p>
              <span className="status-badge">{product.status}</span>
              <h1>{product.name}</h1>
              {product.subtitle ? <p className="product-subtitle">{product.subtitle}</p> : null}
              <p className="product-description">{product.description}</p>
              <div className="inline-actions">
                <Link className="button button-primary" href="/#contact">
                  Discuss this project
                </Link>
                {productLinks.map((link) => (
                  <a className="button button-secondary" href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="surface-card product-fact-card" aria-label={`${product.name} facts`}>
              <p className="project-category">{product.category}</p>
              <h2>{product.summary}</h2>
              <TagList items={product.techStack} />
            </aside>
          </div>
        </section>

        <section className="page-section product-detail-section">
          <div className="site-shell product-detail-grid">
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
        </section>

        {examples.length ? (
          <section className="page-section product-examples-section" aria-labelledby="product-examples-heading">
            <div className="site-shell">
              <div className="section-heading">
                <p className="section-eyebrow">Built with {product.name}</p>
                <h2 id="product-examples-heading">Real services using the starter</h2>
              </div>

              <div className="product-examples">
                {examples.map((example) => {
                  const exampleLinks = [
                    { label: "View on GitHub", href: example.links?.github },
                    { label: "Read docs", href: example.links?.docs },
                  ].filter((link): link is { label: string; href: string } => isPresentUrl(link.href));

                  return (
                    <article className="product-example-card" key={example.name}>
                      <div className="product-example-meta">
                        <p className="project-category">{example.category}</p>
                        <span className="status-badge">{example.status}</span>
                      </div>
                      <div className="product-example-body">
                        <h3>{example.name}</h3>
                        <p>{example.summary}</p>
                        <p>{example.description}</p>
                        <TagList items={example.techStack} />
                        {exampleLinks.length ? (
                          <div className="inline-actions">
                            {exampleLinks.map((link) => (
                              <a className="button button-secondary" href={link.href} key={link.href}>
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                        </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="page-section product-lists-section">
          <div className="site-shell product-lists">
            {product.targetUsers?.length ? (
              <article className="surface-card product-list-card">
                <h2>Who it is for</h2>
                <ul>
                  {product.targetUsers.map((user) => (
                    <li key={user}>{user}</li>
                  ))}
                </ul>
              </article>
            ) : null}

            {product.useCases?.length ? (
              <article className="surface-card product-list-card">
                <h2>Use cases</h2>
                <ul>
                  {product.useCases.map((useCase) => (
                    <li key={useCase}>{useCase}</li>
                  ))}
                </ul>
              </article>
            ) : null}

            <article className="surface-card product-list-card">
              <h2>Features</h2>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
