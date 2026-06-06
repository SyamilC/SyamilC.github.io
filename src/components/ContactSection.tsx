import { profile } from "../data/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Available for software engineering projects, collaborations, and portfolio reviews.</h2>
        <p>
          I am strongest when the work combines practical software, clear user flows, and
          enough creative space to make the final experience memorable.
        </p>
      </div>

      <div className="contact-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          Email {profile.shortName}
        </a>
        <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
