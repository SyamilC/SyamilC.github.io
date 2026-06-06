import { downloads } from "../data/assetManifest";
import { profile, siteCopy } from "../data/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">{siteCopy.contact.eyebrow}</p>
        <h2>{siteCopy.contact.title}</h2>
        <p>{siteCopy.contact.body}</p>
      </div>

      <div className="contact-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          {siteCopy.contact.emailPrefix} {profile.shortName}
        </a>
        <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
          {siteCopy.contact.githubLabel}
        </a>
        <a className="button button-secondary" href={downloads.resume} download>
          {siteCopy.contact.resumeLabel}
        </a>
      </div>
    </section>
  );
}
