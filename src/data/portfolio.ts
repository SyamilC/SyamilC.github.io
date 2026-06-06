import focusAreasContent from "../content/focusAreas.json";
import profileContent from "../content/profile.json";
import projectsContent from "../content/projects.json";
import siteCopyContent from "../content/siteCopy.json";
import skillsContent from "../content/skills.json";
import timelineContent from "../content/timeline.json";

export type LinkItem = {
  label: string;
  href?: string;
  downloadKey?: "holowedApk" | "resume";
};

export type ProjectCategory = string;

export type ProjectPriority = "primary" | "secondary";

export type ProjectCategoryInfo = {
  title: ProjectCategory;
  description: string;
};

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
  primaryLink?: LinkItem;
  priority?: ProjectPriority;
  tags?: string[];
  imageGroup?: string;
  galleryKey?: "photography";
  galleryNote?: string;
};

export type FocusArea = {
  title: string;
  kicker: string;
  summary: string;
  capabilities: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const profile = profileContent.profile;
export const stats = profileContent.stats;
export const focusAreas = focusAreasContent as FocusArea[];
export const projectCategories = projectsContent.categories as ProjectCategoryInfo[];
export const projects = projectsContent.projects as Project[];
export const skillGroups = skillsContent as SkillGroup[];
export const timeline = timelineContent as TimelineItem[];
export const siteCopy = siteCopyContent;
