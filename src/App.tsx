import "./App.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Taskomon",
    description:
      "A productivity web app with floating task bubbles and an AI pet assistant.",
    tags: ["React", "TypeScript", "AI", "Productivity"],
  },
  {
    title: "Creature Simulator",
    description:
      "A cellular ecosystem simulation with emergent behavior and creature interactions.",
    tags: ["C++", "Simulation", "Game Dev"],
  },
  {
    title: "Drone4Dengue Testing",
    description:
      "A software testing project involving test design, automation, and test reporting.",
    tags: ["Testing", "Selenium", "Documentation"],
  },
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Hi, I&apos;m Syamil Asyraf.</h1>
        <p className="intro">
          I build web apps, games, simulations, and creative software projects.
        </p>

        <div className="heroActions">
          <a href="#projects" className="primaryButton">
            View Projects
          </a>
          <a href="mailto:syamilasyrafmaj@gmail.com" className="secondaryButton">
            Contact Me
          </a>
        </div>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          I am interested in software development, game systems, simulations,
          testing, and creative interactive projects. This portfolio collects my
          selected work and experiments.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tagList">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;