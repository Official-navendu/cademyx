export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ValueCardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  actionText?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution?: string;
  cohortYear?: string;
  verified?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  statement: string;
  highlightText?: string;
}
