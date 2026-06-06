import { siteCopy, timeline } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function TimelineSection() {
  return (
    <section className="page-section timeline-section" id="timeline">
      <SectionHeading
        eyebrow={siteCopy.sections.timeline.eyebrow}
        title={siteCopy.sections.timeline.title}
        summary={siteCopy.sections.timeline.summary}
      />

      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.title}`}>
            <p className="timeline-period">{item.period}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
