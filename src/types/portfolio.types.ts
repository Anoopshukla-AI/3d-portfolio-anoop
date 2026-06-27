export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  locationShort: string;
  email: string;
  github: string;
  linkedin: string;
  podcast: string;
  availability: string;
  yearsAI: string;
  yearsTotal: string;
}

export interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  badgeLeft: string;
  badgeRight: string;
  ctaPrimary: Cta;
  ctaSecondary: Cta;
  ctaTertiary: Cta;
  scrollCueLabel: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  paragraphs: string[];
  stats: AboutStat[];
  certifications: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  outcome: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string | null;
  featured: boolean;
}

export type StackCategory = {
  [category: string]: Array<{ name: string; icon: string }>;
};

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company: string;
  companyNote: string;
  location: string;
  type: 'foundation' | 'progression' | 'milestone' | 'current';
  highlights: string[];
}

export interface ContactLinks {
  headline: string;
  subtext: string;
  availabilityBadge: string;
  locationLine: string;
  linkedin: string;
  github: string;
  email: string;
  closingLine: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  heroContent: HeroContent;
  about: AboutContent;
  services: Service[];
  projects: Project[];
  stackItems: StackCategory;
  timelineItems: TimelineItem[];
  contactLinks: ContactLinks;
}
