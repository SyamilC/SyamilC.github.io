export type LinkItem = {
  label: string;
  href: string;
};

export type ProjectCategory = "Software Engineering" | "Game Development" | "Simulation & Other";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  status: string;
  role: string;
  summary: string;
  practicalFocus: string;
  proofPoints: string[];
  stack: string[];
  features: string[];
  process: string[];
  nextSteps: string[];
  primaryLink: LinkItem;
};

export type FocusArea = {
  title: string;
  kicker: string;
  summary: string;
  capabilities: string[];
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const profile = {
  name: "Syamil Asyraf Bin Mohd Ali Jaafar",
  shortName: "Syamil Asyraf",
  primaryRole: "Software Engineer",
  secondaryRoles: ["Game Development", "Graphic Design", "Creative Systems"],
  email: "syamilasyrafmaj@gmail.com",
  github: "https://github.com/SyamilC",
  location: "Universiti Malaya, Malaysia",
  headline:
    "Software engineering student at Universiti Malaya building practical apps, browser games, simulations, and clear digital interfaces.",
  summary:
    "My portfolio starts with software engineering: structured products, maintainable code, user flows, and testing. Around that core, I explore games, simulations, visuals, and multimedia work as supporting strengths.",
};

export const stats = [
  {
    value: "Software Engineering",
    label: "Bachelor of Computer Science, Universiti Malaya",
  },
  {
    value: "7",
    label: "Primary projects linked to GitHub and itch.io",
  },
  {
    value: "GD",
    label: "Graphic design gallery sourced from local work",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Software Engineering",
    kicker: "Primary direction",
    summary:
      "Build interfaces, app logic, project structures, and delivery flows that can keep growing after the first version works.",
    capabilities: ["React", "TypeScript", "Java", "Python", "Firebase", "Supabase"],
  },
  {
    title: "Game Development",
    kicker: "Playable systems",
    summary:
      "Prototype browser games, game-jam ideas, simulation rules, feedback loops, and lightweight web-playable releases.",
    capabilities: ["Godot", "Unity", "GDScript", "C++", "C#", "Itch.io"],
  },
  {
    title: "Graphic Design",
    kicker: "Visual clarity",
    summary:
      "Shape event publicity, presentation visuals, layouts, posters, and brand systems that support the message.",
    capabilities: ["Figma", "Canva", "Illustrator", "CapCut", "Layouts", "Brand systems"],
  },
  {
    title: "Delivery & Leadership",
    kicker: "Team output",
    summary:
      "Coordinate multimedia work, document decisions, and help creative teams turn rough plans into shipped artifacts.",
    capabilities: ["Planning", "Documentation", "Publicity", "Communication"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Software Engineering",
  "Game Development",
  "Simulation & Other",
];

export const projects: Project[] = [
  {
    slug: "taskomon",
    title: "Taskomon",
    category: "Software Engineering",
    year: "2026",
    status: "Repository showcase",
    role: "Frontend engineering, product UI, interaction systems",
    summary:
      "A productivity web app built around task bubbles, a companion assistant, and playful task-management feedback.",
    practicalFocus:
      "Shows how a practical productivity app can become more engaging through visible task states, fast scanning, and lightweight personality.",
    proofPoints: [
      "Local screenshots are included for the project page.",
      "The main project link points directly to the GitHub repository.",
      "The interface is designed around quick action instead of long checklist management.",
    ],
    stack: ["React", "TypeScript", "Productivity UX", "AI assistant concept"],
    features: [
      "Task bubble interface for quick visual scanning",
      "Assistant-focused motivation layer",
      "Project structure ready for screenshots and future case-study notes",
      "Repository-first showcase link",
    ],
    process: [
      "Designed the page around the user loop: capture, focus, complete, receive feedback.",
      "Used playful UI language while preserving practical task organization.",
      "Prepared portfolio screenshots so visitors can judge the interface directly.",
    ],
    nextSteps: [
      "Add a live deployment link when available.",
      "Document component structure and data flow.",
      "Add a short case study around the productivity loop.",
    ],
    primaryLink: {
      label: "Open GitHub repository",
      href: "https://github.com/SyamilC/Taskomon",
    },
  },
  {
    slug: "red-flagger",
    title: "Red Flagger",
    category: "Software Engineering",
    year: "2026",
    status: "Repository showcase",
    role: "Software engineering, applied ML concept, interface planning",
    summary:
      "A software engineering project focused on detecting and surfacing red-flag patterns through a practical application workflow.",
    practicalFocus:
      "Shows applied software thinking: input, analysis, interpretation, and a result that can guide a user's next decision.",
    proofPoints: [
      "The main project link points directly to the GitHub repository.",
      "The showcase is structured for future screenshots, model notes, and evaluation details.",
      "The project supports the software-engineering side of the portfolio.",
    ],
    stack: ["Python", "Machine learning", "Software engineering", "Interface planning"],
    features: [
      "Detection-oriented workflow",
      "Result-focused user experience",
      "Repository-first project page",
      "Prepared space for evaluation examples",
    ],
    process: [
      "Framed the project around a clear user decision point.",
      "Prepared the portfolio page to connect implementation, analysis, and interface outcomes.",
      "Kept the project positioned as software engineering first, with ML as the supporting technique.",
    ],
    nextSteps: [
      "Add result examples and screenshots.",
      "Document the analysis approach and limitations.",
      "Attach a demo or walkthrough when available.",
    ],
    primaryLink: {
      label: "Open GitHub repository",
      href: "https://github.com/SyamilC/Red-Flagger",
    },
  },
  {
    slug: "while-play-tower-defense",
    title: "While Play Tower Defense",
    category: "Game Development",
    year: "2026",
    status: "Playable itch.io build",
    role: "Game design, gameplay systems, web build",
    summary:
      "A playable tower-defense game released on itch.io with local screenshots available for the showcase page.",
    practicalFocus:
      "Shows playable game output: rules, waves, placement decisions, feedback, and a published web build.",
    proofPoints: [
      "Local screenshots are included for the project page.",
      "The main project link points directly to the itch.io release.",
      "The project demonstrates game-loop design rather than only a concept screen.",
    ],
    stack: ["Game design", "Tower defense", "Web build", "Itch.io"],
    features: [
      "Tower-defense loop",
      "Wave and placement decision space",
      "Browser-playable release link",
      "Screenshot-backed showcase section",
    ],
    process: [
      "Built around a recognizable tower-defense structure.",
      "Focused on making the project playable enough to publish.",
      "Prepared screenshots so visitors can inspect the game before opening itch.io.",
    ],
    nextSteps: [
      "Add a short gameplay video.",
      "Document the wave, tower, and enemy systems.",
      "Add balancing notes and post-release improvements.",
    ],
    primaryLink: {
      label: "Play on itch.io",
      href: "https://chubbymeel.itch.io/while-play-tower-defense",
    },
  },
  {
    slug: "kingdom-of-gluttony-alpha",
    title: "Kingdom of Gluttony Alpha",
    category: "Game Development",
    year: "2026",
    status: "Playable alpha",
    role: "Game design, prototype direction, web release",
    summary:
      "An alpha web game released on itch.io with local screenshots prepared for the portfolio showcase.",
    practicalFocus:
      "Shows a game project moving beyond ideation into an alpha release that visitors can open and test.",
    proofPoints: [
      "Local screenshots are included for the project page.",
      "The main project link points directly to the itch.io alpha.",
      "The project page is prepared for future mechanics and level-design notes.",
    ],
    stack: ["Game prototype", "Web game", "Itch.io", "Alpha build"],
    features: [
      "Playable alpha build",
      "Web-accessible project page",
      "Screenshot-backed showcase",
      "Prepared structure for mechanics documentation",
    ],
    process: [
      "Prioritized an alpha release that can be opened by visitors.",
      "Prepared local screenshots for a more immediate portfolio impression.",
      "Kept the showcase ready for future gameplay, art, and design notes.",
    ],
    nextSteps: [
      "Add gameplay systems documentation.",
      "Add a short trailer or GIF.",
      "Track alpha feedback and improvements.",
    ],
    primaryLink: {
      label: "Play alpha on itch.io",
      href: "https://chubbymeel.itch.io/kingdom-of-gluttony-alpha-web",
    },
  },
  {
    slug: "jumpy-beaw",
    title: "Jumpy Beaw",
    category: "Game Development",
    year: "2026",
    status: "Playable itch.io build",
    role: "Game design, prototype build, web release",
    summary:
      "A web-playable game released on itch.io with local images included for the project showcase.",
    practicalFocus:
      "Shows the ability to finish and publish a small playable game with a clear interaction loop.",
    proofPoints: [
      "Local screenshots are included for the project page.",
      "The main project link points directly to the itch.io release.",
      "The project supports the game-development side of the portfolio.",
    ],
    stack: ["Game prototype", "Platformer", "Web build", "Itch.io"],
    features: [
      "Small playable game loop",
      "Browser-accessible release",
      "Local screenshot gallery",
      "Prepared structure for gameplay notes",
    ],
    process: [
      "Focused the project around a compact interaction loop.",
      "Published a playable build to itch.io.",
      "Prepared the portfolio page to connect visuals, link, and future technical notes.",
    ],
    nextSteps: [
      "Add controls and gameplay explanation.",
      "Document the core movement logic.",
      "Add a short gameplay clip.",
    ],
    primaryLink: {
      label: "Play on itch.io",
      href: "https://chubbymeel.itch.io/jumpy-bear",
    },
  },
  {
    slug: "pixel-particle",
    title: "Pixel Particle",
    category: "Simulation & Other",
    year: "2026",
    status: "Playable itch.io build",
    role: "Simulation design, interaction experiment",
    summary:
      "A particle simulation / interaction experiment published on itch.io.",
    practicalFocus:
      "Shows experimentation with visual systems, motion, particles, and lightweight interactive simulation.",
    proofPoints: [
      "The main project link points directly to the itch.io page.",
      "The portfolio omits screenshots until local images are added.",
      "The project broadens the portfolio beyond standard app screens.",
    ],
    stack: ["Simulation", "Particles", "Interactive systems", "Itch.io"],
    features: [
      "Particle-focused interaction",
      "Published itch.io page",
      "Simulation/other category placement",
      "Prepared project page for future captures",
    ],
    process: [
      "Explored motion and visual feedback as the core interaction.",
      "Published the project externally so visitors can try it directly.",
      "Kept the page lightweight until screenshots or a recording are added.",
    ],
    nextSteps: [
      "Add local screenshots or a short recording.",
      "Document the rules controlling particles.",
      "Add notes on performance and visual tuning.",
    ],
    primaryLink: {
      label: "Open on itch.io",
      href: "https://chubbymeel.itch.io/pixel-particle",
    },
  },
  {
    slug: "score-catalogue",
    title: "Score Catalogue",
    category: "Simulation & Other",
    year: "2026",
    status: "Itch.io project",
    role: "Tool/concept build, catalogue interface",
    summary:
      "A catalogue-style project published on itch.io under ChubbyMeel.",
    practicalFocus:
      "Shows an interest in organizing creative/game-adjacent material into a usable browsable format.",
    proofPoints: [
      "The main project link points directly to the itch.io page.",
      "The portfolio omits screenshots until local images are added.",
      "The project rounds out the other/tools side of the work section.",
    ],
    stack: ["Catalogue UI", "Creative tooling", "Itch.io", "Documentation"],
    features: [
      "Catalogue-oriented presentation",
      "External project link",
      "Prepared showcase page for future visuals",
      "Other/tools category placement",
    ],
    process: [
      "Organized the project around discoverability and reference.",
      "Published the work to itch.io for direct access.",
      "Prepared the portfolio page to expand when more assets are available.",
    ],
    nextSteps: [
      "Add screenshots from the catalogue.",
      "Document the intended users and browsing flow.",
      "Add notes about content structure and updates.",
    ],
    primaryLink: {
      label: "Open on itch.io",
      href: "https://chubbymeel.itch.io/chubbymeels-score-catalogue",
    },
  },
];

export const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "C++", "C#", "C", "Python", "GDScript", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Web & Software",
    skills: ["React", "TypeScript", "GitHub", "Firebase", "Supabase", "Testing"],
  },
  {
    title: "Game & Creative Tools",
    skills: ["Godot", "Unity", "Itch.io", "Figma", "Canva", "Adobe Illustrator", "CapCut"],
  },
  {
    title: "Languages",
    skills: ["Malay - native", "English - C2", "French - A2"],
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2024 - Current",
    title: "Bachelor of Computer Science, Software Engineering",
    organization: "Universiti Malaya",
    description:
      "Focused on software engineering foundations, application development, project delivery, and technical collaboration.",
  },
  {
    period: "2024 / 2025",
    title: "UM Hackathon and Datathon",
    organization: "Faculty of Computer Science and Information Technology, Universiti Malaya",
    description:
      "Joined competitive build environments and contributed to multimedia/publicity efforts around faculty events.",
  },
  {
    period: "2024 / 2025 - 2025 / 2026",
    title: "UM Game Jam Participant",
    organization: "Faculty of Computer Science and Information Technology, Universiti Malaya",
    description:
      "Practiced rapid ideation, mechanics, prototyping, and creative problem solving under time constraints.",
  },
  {
    period: "2024 / 2025",
    title: "Vice Director",
    organization: "X-Talent, Tun Ahmad Zaidi Residential College",
    description:
      "Helped direct a student creative program with coordination across performance, multimedia, and publicity needs.",
  },
  {
    period: "2023 - 2024",
    title: "Foundation in Physical Sciences",
    organization: "Universiti Malaya",
    description:
      "Completed the foundation program with a 3.63 CGPA and achieved MUET Band 4.0.",
  },
];
