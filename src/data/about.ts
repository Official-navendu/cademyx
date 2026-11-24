import { ValueCardItem, StepItem } from '@/types/common';

export const aboutHeroData = {
  eyebrow: 'PURPOSE & PRINCIPLES',
  heading: 'Helping Candidates Make Informed Academic Decisions.',
  subheading:
    'Choosing an academic programme is an important decision. CademyX provides objective advisory, clear information, and structured guidance to help you understand your options with clarity.',
  image: '/assets/images/hero/about-hero.jpg',
};

export const brandStoryData = {
  eyebrow: 'OUR ADVISORY APPROACH',
  heading: 'Clarity, Transparency, and Student-First Academic Guidance',
  paragraphs: [
    'Choosing the right academic programme can feel complex. With diverse disciplines, evolving institutional prerequisites, and varying application procedures, prospective candidates often face conflicting information when deciding their next educational step.',
    'CademyX was established to bring clarity and structure to this process. As an academic guidance and advisory platform, we help students and candidates evaluate academic programmes, understand eligibility criteria, and choose pathways that genuinely fit their background and career goals.',
    'By providing personalized advisory consultations and practical documentation assistance, our advisors ensure you have the accurate information needed to move forward with confidence.',
  ],
  quote:
    '“Our approach focuses on helping you understand your options so you can make informed academic decisions that align with your long-term ambitions.”',
  quoteAuthor: 'CademyX Academic Advisory Desk',
};

export const missionVisionData = {
  mission: {
    title: 'Our Mission',
    subtitle: 'Clear, Objective Educational Guidance',
    description:
      'To provide accessible, ethical, and structured academic advisory that helps candidates from all backgrounds understand their educational options, meet requirements, and make informed choices.',
    keyPoints: [
      'Prioritize candidate needs, educational interests, and long-term career fit',
      'Provide accurate and transparent information on eligibility and curriculum structures',
      'Maintain clear and supportive communication throughout the application journey',
    ],
  },
  vision: {
    title: 'Our Vision',
    subtitle: 'A Trusted Educational Advisory Resource',
    description:
      'To serve as a dependable, highly respected academic guidance platform known for integrity, practical guidance, and student-focused clarity.',
    keyPoints: [
      'Set the standard for honest, transparent educational advisory',
      'Help candidates bridge the gap between their current qualifications and future study',
      'Foster a supportive environment where every candidate receives personalized attention',
    ],
  },
};

export const coreValuesData: ValueCardItem[] = [
  {
    id: 'val-1',
    title: 'Clear Information',
    description:
      'We explain programme structures, credit requirements, and prerequisites without unnecessary jargon or ambiguous claims.',
    iconName: 'Sparkles',
  },
  {
    id: 'val-2',
    title: 'Ethical Integrity',
    description:
      'We uphold objective guidance. Every recommendation is based on verified eligibility, institutional requirements, and candidate fit.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'val-3',
    title: 'Informed Choices',
    description:
      'We help you compare academic pathways side by side so you can evaluate how well each option supports your goals.',
    iconName: 'TrendingUp',
  },
  {
    id: 'val-4',
    title: 'Personalized Focus',
    description:
      'No two academic journeys are identical. Our advisory respects individual background, prior education, and professional aspirations.',
    iconName: 'UserCheck',
  },
];

export const educationalApproachSteps: StepItem[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description:
      'We discuss your educational background, subject interests, and professional experience to understand what you want to achieve.',
  },
  {
    step: 2,
    title: 'Explore Relevant Options',
    description:
      'We introduce suitable academic disciplines, degree tracks, and delivery formats that match your profile.',
  },
  {
    step: 3,
    title: 'Review Requirements & Eligibility',
    description:
      'We break down admissions standards, prerequisite coursework, documentation needs, and key submission deadlines.',
  },
  {
    step: 4,
    title: 'Plan Your Application',
    description:
      'We assist you with an organized checklist and clear milestone calendar to help you complete your application smoothly.',
  },
];

export const whoWeServeAudiences = [
  {
    title: 'Undergraduate Candidates',
    focus: 'Bachelor’s Programs',
    description:
      'Students completing secondary education who seek clear guidance on selecting undergraduate majors, prerequisites, and university options.',
    iconName: 'BookOpen',
  },
  {
    title: 'Postgraduate Aspirants',
    focus: 'Master’s Degrees',
    description:
      'Graduates and early-career professionals evaluating specialized Master’s tracks to advance their subject expertise or transition careers.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Doctoral Candidates & Scholars',
    focus: 'PhD & DBA Tracks',
    description:
      'Experienced professionals and researchers seeking structured advisory on terminal research doctorates, executive DBAs, or honorary distinctions.',
    iconName: 'Microscope',
  },
  {
    title: 'Professional Upskillers',
    focus: 'Technical Certifications',
    description:
      'Working professionals seeking practical, industry-aligned technical credentials in Full Stack Development, Cloud DevOps, Cybersecurity, or Data Science.',
    iconName: 'Globe',
  },
];

export const aboutFinalCTA = {
  heading: 'Have Questions About Your Academic Next Steps?',
  description:
    'Schedule a consultation with our advisory team to discuss programme options, review eligibility criteria, and plan your educational journey.',
  primaryCta: {
    label: 'Explore Programs',
    href: '/programs',
  },
  secondaryCta: {
    label: 'Schedule a Consultation',
    href: '/schedule-a-consultation',
  },
};
