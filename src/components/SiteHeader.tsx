import { profile, siteCopy } from "../data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Go to homepage top">
        <span className="brand-mark">S</span>
        <span>{profile.name}</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {siteCopy.nav.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={`mailto:${profile.email}`}>
        {siteCopy.contact.emailPrefix}
      </a>
    </header>
  );
}
