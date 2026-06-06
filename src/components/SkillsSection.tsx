import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="page-section skills-section" id="skills">
      <SectionHeading
        eyebrow="Technical inventory"
        title="Tools I can connect to visible work."
        summary="The skill list is grouped by how the portfolio is meant to grow: source code, app platforms, game systems, and visual production."
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
