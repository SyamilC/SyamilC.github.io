import { siteCopy, skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="page-section skills-section" id="skills">
      <SectionHeading
        eyebrow={siteCopy.sections.skills.eyebrow}
        title={siteCopy.sections.skills.title}
        summary={siteCopy.sections.skills.summary}
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
