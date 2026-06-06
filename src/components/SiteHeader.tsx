import { profile } from "../data/portfolio";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Design", href: "#design" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Go to homepage top">
        <span className="brand-mark">S</span>
        <span>{profile.name}</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={`mailto:${profile.email}`}>
        Email
      </a>
    </header>
  );
}
