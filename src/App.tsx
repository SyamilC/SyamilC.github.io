import { useEffect, useMemo, useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { FocusSection } from "./components/FocusSection";
import { GraphicDesignGallery } from "./components/GraphicDesignGallery";
import { HeroSection } from "./components/HeroSection";
import { ProjectShowcasePage } from "./components/ProjectShowcasePage";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteHeader } from "./components/SiteHeader";
import { SkillsSection } from "./components/SkillsSection";
import { TimelineSection } from "./components/TimelineSection";
import { profile } from "./data/portfolio";
import "./styles/app.css";

function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const projectSlug = useMemo(() => getProjectSlug(hash), [hash]);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (projectSlug) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = hash.replace("#", "");
    if (!targetId) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [hash, projectSlug]);

  return (
    <div className="app-shell">
      <SiteHeader />
      {projectSlug ? <ProjectShowcasePage slug={projectSlug} /> : <HomePage />}
      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>{profile.primaryRole}</span>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <GraphicDesignGallery />
      <SkillsSection />
      <FocusSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}

function getProjectSlug(hash: string) {
  const match = hash.match(/^#\/projects\/([a-z0-9-]+)$/);
  return match?.[1];
}

export default App;
