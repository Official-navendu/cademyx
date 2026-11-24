import { FeatureItem, StepItem, StatItem } from '@/types/common';
import { ProgramCategory } from '@/types/program';

export const homeHeroData = {
  eyebrow: 'YOUR PARTNER IN A BRIGHTER TOMORROW',
  headline: 'Shape Your Academic Future With Clarity and Confidence.',
  subheading:
    'CademyX helps you discover the right academic programs, make informed decisions, and move forward with confidence through personalized academic guidance and expert support.',
  trustStatement: 'Structured advisory grounded in clear information, transparent requirements, and student-first guidance.',
  primaryCta: {
    label: 'Explore Programs',
    href: '/programs',
  },
  secondaryCta: {
    label: 'Schedule a Consultation',
    href: '/schedule-a-consultation',
  },
};

export const trustHighlights: FeatureItem[] = [
  {
    id: 'th-1',
    title: 'Personalised Guidance',
    description: 'Explore options based on your academic background, professional experience, and future ambitions.',
    iconName: 'UserCheck',
  },
  {
    id: 'th-2',
    title: 'Clear Information',
    description: 'Understand programme structures, eligibility criteria, and application requirements before making a decision.',
    iconName: 'Compass',
  },
  {
    id: 'th-3',
    title: 'Informed Choices',
    description: 'Compare available academic pathways and evaluate whether they align with your personal and professional goals.',
    iconName: 'Target',
  },
  {
    id: 'th-4',
    title: 'Application Support',
    description: 'Understand the documentation, key deadlines, and procedural steps involved in applying to relevant programmes.',
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
    id: 'cat-mgmt',
    category: 'Management & Business',
    slug: 'management-business',
    title: 'Management & Business',
    description: 'Undergraduate and postgraduate degree pathways in business administration, organizational management, finance, and operations.',
    iconName: 'BookOpen',
    trackCount: '5+ Programs',
    image: '/assets/images/programs/program-mba.jpg',
  },
  {
    id: 'cat-cs',
    category: 'Computer Science & IT',
    slug: 'computer-science-it',
    title: 'Computer Science & IT',
    description: 'Degree pathways covering software development, systems analysis, network administration, and computational principles.',
    iconName: 'Sparkles',
    trackCount: '4+ Programs',
    image: '/assets/images/programs/program-m-sc-computer-science.jpg',
  },
  {
    id: 'cat-ai',
    category: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Curricula exploring machine learning fundamentals, automated systems, neural computation, and applied intelligent systems.',
    iconName: 'Sparkles',
    trackCount: '2 Programs',
    image: '/assets/images/programs/program-m-sc-ai.jpg',
  },
  {
    id: 'cat-ds',
    category: 'Data Science & Analytics',
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    description: 'Programs focused on quantitative analysis, statistical methods, business intelligence, and database management.',
    iconName: 'Sparkles',
    trackCount: '2 Programs',
    image: '/assets/images/programs/program-m-sc-data-science.jpg',
  },
  {
    id: 'cat-doc',
    category: 'Doctorate',
    slug: 'doctorate',
    title: 'Doctorate & Research',
    description: 'Distinguished doctoral pathways, honorary academic recognitions, and executive DBA tracks for senior scholars and professionals.',
    iconName: 'GraduationCap',
    trackCount: '3 Tracks',
    image: '/assets/images/hero/programs/honorary-doctorate.jpg',
  },
  {
    id: 'cat-cert',
    category: 'Certifications',
    slug: 'certifications',
    title: 'Professional Certifications',
    description: 'Structured, skill-focused technical certifications in Full Stack Development, Cloud DevOps, Cybersecurity, and Data Science.',
    iconName: 'Award',
    trackCount: '4 Tracks',
    image: '/assets/images/hero/programs/full-stack-development.jpg',
  },
];

export const homeIntroductionData = {
  eyebrow: 'ABOUT CADEMYX',
  heading: 'Helping Candidates Make Informed Academic Decisions With Clarity',
  description:
    'Choosing an academic programme is one of the most consequential decisions you will make. With numerous disciplines, delivery formats, and application requirements to consider, finding the right pathway can feel overwhelming. CademyX provides objective, student-centered academic advisory to help you evaluate your options, understand prerequisite requirements, and plan your educational journey with confidence.',
  benefits: [
    {
      title: 'Objective, Student-First Guidance',
      text: 'Our advisors take time to understand your academic background, experience, and goals to provide clear, realistic recommendations.',
    },
    {
      title: 'Broad Academic Disciplines',
      text: 'From business administration and computer science to advanced doctorate pathways and technical certifications, explore diverse curricula in one place.',
    },
    {
      title: 'Clear Application Milestones',
      text: 'We break down complex admissions requirements, eligibility criteria, and documentation deadlines into manageable, straightforward steps.',
    },
  ],
  cta: {
    label: 'Learn More About Us',
    href: '/about',
  },
};

export const guidanceServicesData = [
  {
    id: 'serv-1',
    title: 'Academic Profile Evaluation',
    description:
      'A thorough review of your educational credentials, coursework history, and professional background to identify suitable academic disciplines.',
    deliverables: ['Credential Assessment', 'Discipline Alignment Review', 'Curricular Pathway Recommendations'],
    iconName: 'Target',
  },
  {
    id: 'serv-2',
    title: 'Degree & Program Comparison',
    description:
      'Detailed comparison of programme structures, curriculum depth, delivery modes, and duration to help you make an informed choice.',
    deliverables: ['Curriculum Comparison', 'Study Mode Evaluation', 'Prerequisite Analysis'],
    iconName: 'Compass',
  },
  {
    id: 'serv-3',
    title: 'Application & Documentation Support',
    description:
      'Clear guidance on assembling required application documents, statements of purpose, transcripts, and submission timelines.',
    deliverables: ['Documentation Checklist', 'Statement of Purpose Review', 'Application Timeline Planning'],
    iconName: 'BookOpen',
  },
  {
    id: 'serv-4',
    title: 'Doctoral & Advanced Research Advisory',
    description:
      'Dedicated support for prospective doctoral candidates navigating research proposal formulation, faculty alignment, and fellowship pathways.',
    deliverables: ['Research Area Exploration', 'Advisor Alignment Guidance', 'Dossier Preparation Advice'],
    iconName: 'GraduationCap',
  },
];

export const whyCademyXFeatures: FeatureItem[] = [
  {
    id: 'why-1',
    title: 'Personalized Direction',
    description:
      'We evaluate your background, academic achievements, and future ambitions to recommend programmes that align with your individual profile.',
    iconName: 'Compass',
    badge: 'Individual Focus',
  },
  {
    id: 'why-2',
    title: 'Clear Information',
    description:
      'Understand programme structures, eligibility criteria, and application requirements before making an academic commitment.',
    iconName: 'Milestone',
    badge: 'Transparent Details',
  },
  {
    id: 'why-3',
    title: 'Informed Choices',
    description:
      'Compare available academic pathways side by side to evaluate how well each option supports your long-term goals.',
    iconName: 'CalendarCheck',
    badge: 'Balanced Comparison',
  },
  {
    id: 'why-4',
    title: 'Application Support',
    description:
      'Receive structured guidance through documentation preparation, admission requirements, and procedural steps.',
    iconName: 'ShieldCheck',
    badge: 'Step-by-Step Support',
  },
];

export const learningJourneySteps: StepItem[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Begin with an advisory conversation to discuss your academic background, subject interests, and educational goals.',
    actionText: 'Step 1: Discussion',
  },
  {
    step: 2,
    title: 'Explore Program Options',
    description: 'Review curated programme options across undergraduate, postgraduate, doctorate, or professional certification tracks.',
    actionText: 'Step 2: Exploration',
  },
  {
    step: 3,
    title: 'Understand Requirements',
    description: 'Receive a clear breakdown of prerequisite requirements, required documentation, and application deadlines.',
    actionText: 'Step 3: Verification',
  },
  {
    step: 4,
    title: 'Submit With Confidence',
    description: 'Complete your application with clear documentation support and an organized timeline for your chosen programme.',
    actionText: 'Step 4: Application',
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
  heading: 'Ready to Plan Your Academic Future?',
  description:
    'Whether you are evaluating undergraduate options, advancing with a postgraduate degree, pursuing a doctoral pathway, or upgrading technical skills, CademyX is here to guide you.',
  primaryCta: {
    label: 'Explore Programs',
    href: '/programs',
  },
  secondaryCta: {
    label: 'Schedule a Consultation',
    href: '/schedule-a-consultation',
  },
};
