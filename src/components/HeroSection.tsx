import { profile, siteCopy, stats } from "../data/portfolio";

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{siteCopy.hero.eyebrow}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.primaryRole}</p>
        <p className="hero-lede">{profile.headline}</p>

        <div className="role-row" aria-label="Secondary interests">
          {profile.secondaryRoles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            {siteCopy.hero.primaryAction}
          </a>
          <a className="button button-secondary" href={`mailto:${profile.email}`}>
            {siteCopy.hero.secondaryAction}
          </a>
        </div>
      </div>

      <aside className="hero-brief" aria-label={siteCopy.hero.briefAriaLabel}>
        <p className="card-kicker">{siteCopy.hero.briefKicker}</p>
        <h2>{siteCopy.hero.briefTitle}</h2>
        <p>{profile.summary}</p>
        <div className="brief-grid" aria-label={siteCopy.hero.statsAriaLabel}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
