export interface TeamMember {
  name: string;
  role: string;
  email: string;
  bio: string;
  avatar: string | null;
}

export interface BusinessTier {
  tier: string;
  price: string;
  features: string;
}

export interface TractionMetric {
  metric: string;
  value: string;
  status: string;
}

export interface Competitor {
  name: string;
  strength: string;
  gap: string;
  isUs?: boolean;
}

export interface Feature {
  name: string;
  status: 'live' | 'beta' | 'upcoming' | 'planned';
  category: string;
  desc: string;
}

export interface ApiEndpoint {
  name: string;
  auth: string;
  desc: string;
}

export interface RoadmapPhase {
  phase: string;
  label: string;
  items: string[];
  done: boolean;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  notes: string;
}

export interface NavSection {
  id: string;
  label: string;
}

export interface StackLayer {
  layer: string;
  techs: string[];
}
