import { FeatureItem, StepItem, StatItem } from '@/types/common';
import { ProgramCategory } from '@/types/program';

export const homeHeroData = {
  eyebrow: 'ACADEMIC EXCELLENCE • YOUR NEXT CHAPTER',
  headline: 'Shape Your Academic Future With Clarity and Confidence.',
  subheading:
    'Explore academic pathways, discover programs aligned with your ambitions, and take your next step with a clearer direction.',
  trustStatement: 'Structured mentorship backed by ethical guidance and transparent academic roadmaps.',
  primaryCta: {
    label: 'Explore Programs',
    href: '/programs',
  },
  secondaryCta: {
    label: 'Talk to Our Team',
    href: '/contact',
  },
};

export const trustHighlights: FeatureItem[] = [
  {
    id: 'th-1',
    title: 'Student-Centered Guidance',
    description: 'Advisory tailored to your genuine passions, intellectual strengths, and personal academic aspirations.',
    iconName: 'UserCheck',
  },
  {
    id: 'th-2',
    title: 'Structured Learning',
    description: 'Clear, milestone-driven frameworks that eliminate guesswork and instill productive scholarly habits.',
    iconName: 'Compass',
  },
  {
    id: 'th-3',
    title: 'Clear Academic Direction',
    description: 'Strategic clarity across curriculum selections, standardized milestones, and institutional fit.',
    iconName: 'Target',
  },
  {
    id: 'th-4',
    title: 'Supportive Mentorship',
    description: 'Dedicated academic advisors providing constructive, patient, and ethical counsel at every junction.',
    iconName: 'GraduationCap',
  },
];

export interface AcademicCategoryTile {
  id: string;
  category: ProgramCategory;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  trackCount: string;
  image: string;
}

export const academicCategoriesData: AcademicCategoryTile[] = [
  {
    id: 'cat-0',
    category: 'Bachelor',
    slug: 'bachelor-programs',
    title: 'Bachelor Programs',
    description: 'Foundational undergraduate degree pathways spanning 15 disciplines from Engineering and Management to Healthcare, Law, and Sciences.',
    iconName: 'BookOpen',
    trackCount: '64 Programs',
    image: '/assets/images/categories/category-bachelor.jpg',
  },
  {
    id: 'cat-1',
    category: 'Masters',
    slug: 'masters-programs',
    title: 'Postgraduate & Masters',
    description: 'Advanced postgraduate degrees in Management, Computing, Engineering, Commerce, Science, and Humanities.',
    iconName: 'Sparkles',
    trackCount: '27 Programs',
    image: '/assets/images/categories/category-masters.jpg',
  },
  {
    id: 'cat-2',
    category: 'Doctorate',
    slug: 'doctorate-programs',
    title: 'Doctorate Programs',
    description: 'Terminal research degrees, honorary recognitions, and executive doctoral pathways designed for senior leaders and academic scholars.',
    iconName: 'GraduationCap',
    trackCount: '3 Programs',
    image: '/assets/images/categories/category-doctorate.jpg',
  },
  {
    id: 'cat-3',
    category: 'Certifications',
    slug: 'certification-programs',
    title: 'Professional Certifications',
    description: 'Hands-on practical credentials in full stack engineering, cloud DevOps, Kali Linux security, and Power BI data analytics.',
    iconName: 'Award',
    trackCount: '4 Programs',
    image: '/assets/images/categories/category-certifications.jpg',
  },
];

export const homeIntroductionData = {
  eyebrow: 'ABOUT CADEMYX',
  heading: 'Designed for Students Seeking Purpose, Clarity, and Intellectual Growth',
  description:
    'CademyX was established on a single principle: every student’s academic trajectory should be guided by clarity rather than anxiety. In an increasingly complex global educational landscape, we serve as dedicated mentors who help learners uncover their unique voice, map strategic milestones, and achieve their educational ambitions with integrity.',
  benefits: [
    {
      title: 'Ethical, Objective Mentorship',
      text: 'We do not sell quick fixes or unverified shortcuts. Every recommendation is grounded in authentic student fit and long-term scholastic value.',
    },
    {
      title: 'Multi-Disciplinary Academic Scope',
      text: 'From competitive STEM research to foundational humanities seminars and university admissions, our tracks span the breadth of modern scholarship.',
    },
    {
      title: 'Actionable, Measured Milestones',
      text: 'Complex multi-year academic timelines are broken down into achievable, manageable monthly goals that build lasting confidence.',
    },
  ],
  cta: {
    label: 'Discover Our Story',
    href: '/about',
  },
};

export const guidanceServicesData = [
  {
    id: 'serv-1',
    title: 'Academic Profile Audit & Diagnostic',
    description:
      'A thorough evaluation of academic transcripts, standardized assessments, and extracurricular pursuits to identify genuine intellectual strengths.',
    deliverables: ['Scholastic Diagnostic Summary', 'Institutional Fit & Tier List', 'Curricular Optimization Blueprint'],
    iconName: 'Target',
  },
  {
    id: 'serv-2',
    title: 'Pre-Collegiate Research Mentorship',
    description:
      'Individualized guidance under active researchers covering formal literature reviews, data collection, and preparation for student colloquiums.',
    deliverables: ['Research Hypothesis Formulation', 'Formal LaTeX & Citation Standards', 'Colloquium Defense Presentation'],
    iconName: 'Microscope',
  },
  {
    id: 'serv-3',
    title: 'Admissions Narrative & Editorial Guidance',
    description:
      'Rigorous multi-round critique helping scholars articulate their authentic voice and intellectual curiosity without formulaic tropes.',
    deliverables: ['Personal Statement Architecture', 'Supplemental Essay Reviews', 'Activity Resume Refinement'],
    iconName: 'BookOpen',
  },
  {
    id: 'serv-4',
    title: 'Postgraduate & Thesis Advisory',
    description:
      'Strategic counsel for master’s and doctoral aspirants targeting selective laboratories, graduate funding packages, and academic departments.',
    deliverables: ['Statement of Purpose Polish', 'Advisor & Faculty Outreach Strategy', 'Funding & Fellowship Alignment'],
    iconName: 'GraduationCap',
  },
];

export const whyCademyXFeatures: FeatureItem[] = [
  {
    id: 'why-1',
    title: 'Personalized Direction',
    description:
      'We conduct detailed diagnostic audits to understand learning styles, curricular strengths, and authentic intellectual interests.',
    iconName: 'Compass',
    badge: 'Diagnostic Approach',
  },
  {
    id: 'why-2',
    title: 'Clear Learning Pathways',
    description:
      'Structured modules and research frameworks turn broad ambitions into realistic, step-by-step progress with zero ambiguity.',
    iconName: 'Milestone',
    badge: 'Modular Roadmaps',
  },
  {
    id: 'why-3',
    title: 'Practical Academic Planning',
    description:
      'We bridge high-level strategy with weekly execution, including writing feedback, application timelines, and project reviews.',
    iconName: 'CalendarCheck',
    badge: 'Execution Support',
  },
  {
    id: 'why-4',
    title: 'Support Throughout the Journey',
    description:
      'From your initial consultation through final milestone evaluations, our advisors provide continuous, empathetic guidance.',
    iconName: 'ShieldCheck',
    badge: 'Dedicated Guidance',
  },
];

export const learningJourneySteps: StepItem[] = [
  {
    step: 1,
    title: 'Discover Your Goals',
    description: 'Begin with an in-depth advisory consultation to evaluate your interests, current standing, and academic targets.',
    actionText: 'Diagnostic Consultation',
  },
  {
    step: 2,
    title: 'Explore Relevant Programs',
    description: 'Identify the ideal pathway—whether university advisory, scientific research fellowship, or honors acceleration.',
    actionText: 'Curated Roadmapping',
  },
  {
    step: 3,
    title: 'Understand Your Next Steps',
    description: 'Receive a personalized, milestone-based timeline outlining required coursework, writing drafts, and review dates.',
    actionText: 'Milestone Planning',
  },
  {
    step: 4,
    title: 'Move Forward With Confidence',
    description: 'Execute your plan under the attentive mentorship of seasoned academic advisors and celebrate each milestone.',
    actionText: 'Scholarly Realization',
  },
];

export const impactStatements: StatItem[] = [
  {
    id: 'stat-1',
    label: 'Ethical Foundation',
    statement: '100% Commitment to Transparent, Student-First Guidance',
    highlightText: 'High-Integrity',
  },
  {
    id: 'stat-2',
    label: 'Mentorship Focus',
    statement: 'Tailored 1-on-1 & Cohort Learning Frameworks',
    highlightText: 'Personalized',
  },
  {
    id: 'stat-3',
    label: 'Roadmap Execution',
    statement: 'Structured Milestone Checkpoints From Day One',
    highlightText: 'End-to-End',
  },
  {
    id: 'stat-4',
    label: 'Scholarly Standards',
    statement: 'Rigorous Curriculum Aligned with Global Educational Benchmarks',
    highlightText: 'Rigor & Depth',
  },
];

export const homeFinalCTA = {
  heading: 'Ready to Clarify Your Academic Future?',
  description:
    'Whether you are preparing for university admissions, pursuing independent research, or seeking structured academic mentorship, CademyX is here to guide your steps.',
  primaryCta: {
    label: 'Explore Programs',
    href: '/programs',
  },
  secondaryCta: {
    label: 'Speak With an Advisor',
    href: '/contact',
  },
};
