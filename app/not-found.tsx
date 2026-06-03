import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found-page">
        <section className="site-shell not-found-inner" aria-labelledby="not-found-heading">
          <p className="section-eyebrow">404</p>
          <h1 id="not-found-heading">This page is out of harbor.</h1>
          <p>
            The route you requested is not available. Use one of these paths to get back to the main site.
          </p>
          <div className="inline-actions">
            <Link className="button button-primary" href="/">
              Back home
            </Link>
            <Link className="button button-secondary" href="/products/paygate">
              View Paygate
            </Link>
            <Link className="button button-secondary" href="/#contact">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
