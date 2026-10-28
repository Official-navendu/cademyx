import { ValueCardItem, StepItem } from '@/types/common';

export const aboutHeroData = {
  eyebrow: 'PURPOSE & PHILOSOPHY',
  heading: 'An Academic Journey Built Around Your Ambitions.',
  subheading:
    'Discover the purpose, principles, and educational approach behind CademyX — dedicated to helping students and professionals navigate higher education with absolute clarity.',
  image: '/assets/images/hero/about-hero.jpg',
};

export const brandStoryData = {
  eyebrow: 'THE CADEMYX PHILOSOPHY',
  heading: 'Transforming Academic Ambition Into Purposeful Direction',
  paragraphs: [
    'Academic journeys are often shadowed by information overload, conflicting advice, and undue anxiety. In our observations across modern secondary and higher education environments, we noticed that talented learners frequently spend more time guessing what institutions want rather than discovering what kind of scholars they genuinely wish to become.',
    'CademyX was founded to restore equilibrium to this process. Our approach centers on deep diagnostic inquiry, rigorous scholastic standards, and honest mentorship. We do not endorse generic templates or superficial resume-padding. Instead, we help each student cultivate genuine intellectual voice, rigorous study methodologies, and authentic educational pathways.',
    'By blending personalized one-on-one advisory with cohort-based scholarly colloquiums, CademyX provides the architecture students need to aim true and reach their highest potential.',
  ],
  quote:
    '“True academic guidance does not dictate a student’s destination; it equips them with the navigational compass to discover and reach their own summit.”',
  quoteAuthor: 'CademyX Academic Steering Group',
};

export const missionVisionData = {
  mission: {
    title: 'Our Mission',
    subtitle: 'Dedicated to Scholarly Integrity',
    description:
      'To provide transformative academic advisory and rigorous educational programs that empower learners from all backgrounds to make informed, purposeful, and ethical decisions throughout their academic lives.',
    keyPoints: [
      'Prioritize long-term intellectual growth over short-term expediency',
      'Foster independent critical thinking and research methodologies',
      'Maintain total transparency in student assessments and institutional recommendations',
    ],
  },
  vision: {
    title: 'Our Vision',
    subtitle: 'The Standard for Academic Mentorship',
    description:
      'To be the most trusted academic advisory brand globally—recognized for fostering scholars who lead with curiosity, integrity, and disciplined intellect in every sphere of higher education.',
    keyPoints: [
      'Set the standard for ethical pre-collegiate and collegiate mentorship',
      'Bridge secondary education with top-tier research methodologies',
      'Build an inclusive global community of purposeful, high-aiming scholars',
    ],
  },
};

export const coreValuesData: ValueCardItem[] = [
  {
    id: 'val-1',
    title: 'Clarity',
    description:
      'We strip away ambiguity and educational jargon, providing students and families with transparent, milestone-driven paths to success.',
    iconName: 'Sparkles',
  },
  {
    id: 'val-2',
    title: 'Integrity',
    description:
      'Unwavering ethical commitment. We champion authentic student accomplishments, honest self-appraisals, and genuine scholarship.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'val-3',
    title: 'Intellectual Growth',
    description:
      'We view every application, research paper, and examination as an opportunity to stretch curiosity and deepen analytical capabilities.',
    iconName: 'TrendingUp',
  },
  {
    id: 'val-4',
    title: 'Student-Centered Thinking',
    description:
      'No two learners are identical. Our frameworks respect individual learning temperaments, creative interests, and life goals.',
    iconName: 'UserCheck',
  },
];

export const educationalApproachSteps: StepItem[] = [
  {
    step: 1,
    title: 'Understand Individual Goals',
    description:
      'We begin with comprehensive diagnostic dialogues to understand scholastic interests, learning preferences, and long-range aspirations.',
  },
  {
    step: 2,
    title: 'Explore Suitable Opportunities',
    description:
      'We review accredited curricula, specialized research fellowships, and institutional programs that harmonize with the student’s profile.',
  },
  {
    step: 3,
    title: 'Clarify Requirements & Pathways',
    description:
      'We deconstruct complex admissions standards, test schedules, and prerequisite coursework into understandable, manageable components.',
  },
  {
    step: 4,
    title: 'Plan Practical Next Steps',
    description:
      'We construct a personalized, reviewable milestone calendar that balances rigorous academic targets with well-being and consistent progress.',
  },
];

export const whoWeServeAudiences = [
  {
    title: 'Secondary School Scholars',
    focus: 'Grades 9 – 12',
    description:
      'High school students seeking honors curriculum optimization, standardized test strategy, and university application readiness.',
    iconName: 'BookOpen',
  },
  {
    title: 'Aspiring Pre-Collegiate Researchers',
    focus: 'STEM & Humanities',
    description:
      'Scholars seeking formal mentorship in academic research, scientific literature review, and presentation at youth colloquiums.',
    iconName: 'Microscope',
  },
  {
    title: 'International University Applicants',
    focus: 'Global Pathways',
    description:
      'Students navigating cross-border educational standards, credential equivalencies, language milestones, and international campus transitions.',
    iconName: 'Globe',
  },
  {
    title: 'Postgraduate & Fellow Candidates',
    focus: 'Master’s & Doctoral',
    description:
      'Undergraduate seniors and early scholars drafting competitive statements of purpose and identifying faculty research advisors.',
    iconName: 'GraduationCap',
  },
];

export const aboutFinalCTA = {
  heading: 'Partner With CademyX on Your Academic Path',
  description:
    'Experience the difference of disciplined, thoughtful guidance. Schedule an initial consultation to discuss your academic objectives.',
  primaryCta: {
    label: 'Explore Programs',
    href: '/programs',
  },
  secondaryCta: {
    label: 'Connect With Our Advisory Team',
    href: '/contact',
  },
};
