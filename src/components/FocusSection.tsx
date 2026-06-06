import { focusAreas } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function FocusSection() {
  return (
    <section className="page-section about-section" id="about">
      <SectionHeading
        eyebrow="About me"
        title="Software engineering is the main track. Creative work sharpens the edges."
        summary="The structure below makes the hierarchy clear: software engineering first, then the smaller creative lanes that support how I think, prototype, communicate, and ship."
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
