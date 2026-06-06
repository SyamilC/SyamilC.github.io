import { timeline } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function TimelineSection() {
  return (
    <section className="page-section timeline-section" id="timeline">
      <SectionHeading
        eyebrow="Resume signals"
        title="Education, events, and leadership threads."
        summary="A compact timeline built from your resume, with the public-facing details that matter most for a portfolio audience."
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
