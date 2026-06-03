import { contactLinks, siteMetadata } from "@/data/site";
import { emailHref, isPresentUrl } from "@/lib/links";

export function ContactSection() {
  const links = [
    { label: "Email", href: emailHref(contactLinks.email) },
    { label: "GitHub", href: contactLinks.github },
    { label: "LinkedIn", href: contactLinks.linkedin },
  ].filter((link): link is { label: string; href: string } => isPresentUrl(link.href));

  return (
    <footer className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="site-shell contact-inner">
        <p className="section-eyebrow">Contact</p>
        <h2 id="contact-heading">Let&apos;s Build</h2>
        <p>Interested in a build, collaboration, or one of the projects? Let&apos;s talk.</p>

        {links.length > 0 ? (
          <div className="contact-links" aria-label="Contact links">
            {links.map((link) => (
              <a className="button button-primary" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="contact-fallback">Contact links coming soon.</p>
        )}

        <p className="footer-note">{siteMetadata.domain}</p>
      </div>
    </footer>
  );
}
