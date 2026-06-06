import { focusAreas, siteCopy } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function FocusSection() {
  return (
    <section className="page-section about-section" id="about">
      <SectionHeading
        eyebrow={siteCopy.sections.about.eyebrow}
        title={siteCopy.sections.about.title}
        summary={siteCopy.sections.about.summary}
      />

      <div className="focus-grid">
        {focusAreas.map((area, index) => (
          <article className={index === 0 ? "focus-card focus-card-primary" : "focus-card"} key={area.title}>
            <div className="focus-card-head">
              <span className="circle-dot" aria-hidden="true" />
              <p className="card-kicker">{area.kicker}</p>
            </div>
            <h3>{area.title}</h3>
            <p>{area.summary}</p>
            <ul className="chip-list" aria-label={`${area.title} capabilities`}>
              {area.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
