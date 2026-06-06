import { profile, stats } from "../data/portfolio";

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Hi! I am</p>
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
            View project categories
          </a>
          <a className="button button-secondary" href={`mailto:${profile.email}`}>
            Contact me
          </a>
        </div>
      </div>

      <aside className="hero-brief" aria-label="Portfolio direction">
        <p className="card-kicker">Portfolio focus</p>
        <h2>Practical builds first. Creative range second.</h2>
        <p>{profile.summary}</p>
        <div className="brief-grid" aria-label="Portfolio signals">
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
