import { contactLinks, siteMetadata } from "@/data/site";
import { emailHref, isPresentUrl } from "@/lib/links";

export function ContactSection() {
  const links = [
    {
      label: "Email",
      eyebrow: "Project inquiries",
      detail: contactLinks.email,
      href: emailHref(contactLinks.email),
    },
    {
      label: "X",
      eyebrow: "Follow the lab",
      detail: "@greenharborlabs",
      href: contactLinks.x,
      external: true,
    },
    { label: "GitHub", eyebrow: "Code", detail: "Green Harbor Labs", href: contactLinks.github, external: true },
    { label: "LinkedIn", eyebrow: "Network", detail: "Green Harbor Labs", href: contactLinks.linkedin, external: true },
  ].filter(
    (link): link is {
      label: string;
      eyebrow: string;
      detail: string;
      href: string;
      external?: boolean;
    } => isPresentUrl(link.href),
  );

  return (
    <footer className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="site-shell contact-inner">
        <div className="contact-copy">
          <p className="section-eyebrow">Contact</p>
          <h2 id="contact-heading">Let&apos;s Build</h2>
          <p>Interested in a build, collaboration, or one of the projects? Reach the lab directly.</p>
        </div>

        {links.length > 0 ? (
          <div className="contact-options" aria-label="Contact links">
            {links.map((link) => (
              <a
                aria-label={`${link.label}: ${link.detail}`}
                className="contact-option"
                href={link.href}
                key={link.href}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                <span className="contact-option-eyebrow">{link.eyebrow}</span>
                <span className="contact-option-label">{link.label}</span>
                <span className="contact-option-detail">{link.detail}</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="contact-fallback">Contact links coming soon.</p>
        )}

        <p className="footer-note">Green Harbor Labs / {siteMetadata.domain}</p>
      </div>
    </footer>
  );
}
