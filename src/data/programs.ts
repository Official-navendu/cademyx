import { Program, ProgramCategory } from '@/types/program';

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  'Bachelor',
  'Masters',
  'Doctorate',
  'Certifications',
];

export const CATEGORY_META: Record<
  ProgramCategory,
  {
    name: ProgramCategory;
    accent: string;
    hex: string;
    lightBg: string;
    badgeClass: string;
    dotClass: string;
    borderHoverClass: string;
    description: string;
  }
> = {
  Bachelor: {
    name: 'Bachelor',
    accent: 'amber',
    hex: '#F4B72F',
    lightBg: '#FEF8E9',
    badgeClass: 'bg-amber-50 text-[#D99519] border-amber-200',
    dotClass: 'bg-[#F4B72F]',
    borderHoverClass: 'hover:border-[#F4B72F]',
    description: 'Foundational undergraduate degree pathways spanning 15 disciplines from Engineering and Management to Healthcare and Arts.',
  },
  Masters: {
    name: 'Masters',
    accent: 'blue',
    hex: '#075AC8',
    lightBg: '#EFF6FF',
    badgeClass: 'bg-blue-50 text-[#075AC8] border-blue-200',
    dotClass: 'bg-[#075AC8]',
    borderHoverClass: 'hover:border-[#075AC8]',
    description: 'Postgraduate management, engineering, computing, and humanities master degrees specializing in advanced leadership and research.',
  },
  Doctorate: {
    name: 'Doctorate',
    accent: 'purple',
    hex: '#7C3AED',
    lightBg: '#F5F3FF',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    dotClass: 'bg-purple-500',
    borderHoverClass: 'hover:border-purple-400',
    description: 'Premier academic pathways and research-driven terminal degrees for scholars and senior executives.',
  },
  Certifications: {
    name: 'Certifications',
    accent: 'green',
    hex: '#059669',
    lightBg: '#ECFDF5',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotClass: 'bg-emerald-500',
    borderHoverClass: 'hover:border-emerald-400',
    description: 'Hands-on practical credentials focused on full stack development, cloud computing, and offensive cybersecurity.',
  },
};

export const PROGRAM_FORMATS: string[] = [
  'All Formats',
  'Full-Time Degree Track',
  'Integrated Degree Pathway',
  'Professional Licensure Track',
  'Executive Track',
  'Research Mentorship',
  'Cohort-Based',
  'Hybrid Studio',
  'Self-Paced / Mentor-Led',
];

export const programs: Program[] = [
  {
    "id": "bach-01",
    "slug": "bba",
    "title": "BBA",
    "category": "Bachelor",
    "discipline": "Management",
    "shortDescription": "Bachelor of Business Administration building fundamental corporate leadership.",
    "description": "Bachelor of Business Administration building fundamental corporate leadership. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/hero/programs/mba-ai-automation.jpg",
    "highlights": [
      "Management",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 (Higher Secondary) in any stream with minimum 50% aggregate marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Management theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Management",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": true
  },
  {
    "id": "bach-02",
    "slug": "bms",
    "title": "BMS",
    "category": "Bachelor",
    "discipline": "Management",
    "shortDescription": "Bachelor of Management Studies with emphasis on analytical organizational decision-making.",
    "description": "Bachelor of Management Studies with emphasis on analytical organizational decision-making. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/hero/programs/mba-ai-automation.jpg",
    "highlights": [
      "Management",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 from a recognized educational board in Commerce, Science, or Arts",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Management theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Management",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-03",
    "slug": "bbm",
    "title": "BBM",
    "category": "Bachelor",
    "discipline": "Management",
    "shortDescription": "Bachelor of Business Management covering operations, human resources, and marketing.",
    "description": "Bachelor of Business Management covering operations, human resources, and marketing. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/hero/programs/mba-ai-automation.jpg",
    "highlights": [
      "Management",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 or equivalent examination from a recognized central or state board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Management theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Management",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-04",
    "slug": "integrated-bba-mba",
    "title": "Integrated BBA + MBA",
    "category": "Bachelor",
    "discipline": "Management",
    "shortDescription": "Comprehensive 5-year dual-degree pathway seamlessly bridging undergrad and executive management.",
    "description": "Comprehensive 5-year dual-degree pathway seamlessly bridging undergrad and executive management. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/hero/programs/mba-ai-automation.jpg",
    "highlights": [
      "Management",
      "5 Years",
      "Integrated Degree Pathway"
    ],
    "duration": "5 Years",
    "format": "Integrated Degree Pathway",
    "eligibility": "10+2 passed with minimum 60% aggregate and valid national/university entrance score",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Management theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Management",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-05",
    "slug": "b-com",
    "title": "B.Com",
    "category": "Bachelor",
    "discipline": "Commerce & Finance",
    "shortDescription": "Bachelor of Commerce providing fundamental financial accounting and mercantile law knowledge.",
    "description": "Bachelor of Commerce providing fundamental financial accounting and mercantile law knowledge. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Commerce & Finance",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in Commerce or allied streams with Mathematics/Economics/Accountancy",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Commerce & Finance theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Commerce & Finance",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-06",
    "slug": "b-com-hons",
    "title": "B.Com (Hons.)",
    "category": "Bachelor",
    "discipline": "Commerce & Finance",
    "shortDescription": "Honours-level commerce degree with intensive training in auditing, corporate finance, and taxation.",
    "description": "Honours-level commerce degree with intensive training in auditing, corporate finance, and taxation. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Commerce & Finance",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics/Accountancy and high academic cutoff",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Commerce & Finance theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Commerce & Finance",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-07",
    "slug": "b-com-accounting-finance",
    "title": "B.Com Accounting & Finance",
    "category": "Bachelor",
    "discipline": "Commerce & Finance",
    "shortDescription": "Specialized commerce curriculum centered on forensic accounting, cost auditing, and corporate finance.",
    "description": "Specialized commerce curriculum centered on forensic accounting, cost auditing, and corporate finance. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Commerce & Finance",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Accountancy and Commerce subjects with minimum 50% aggregate",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Commerce & Finance theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Commerce & Finance",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-08",
    "slug": "b-com-banking-insurance",
    "title": "B.Com Banking & Insurance",
    "category": "Bachelor",
    "discipline": "Commerce & Finance",
    "shortDescription": "Targeted undergraduate track for retail banking, credit underwriting, and actuarial insurance.",
    "description": "Targeted undergraduate track for retail banking, credit underwriting, and actuarial insurance. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Commerce & Finance",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 or equivalent with Economics/Commerce/Mathematics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Commerce & Finance theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Commerce & Finance",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-09",
    "slug": "bca",
    "title": "BCA",
    "category": "Bachelor",
    "discipline": "Computer & IT",
    "shortDescription": "Bachelor of Computer Applications focusing on software programming, web stacks, and databases.",
    "description": "Bachelor of Computer Applications focusing on software programming, web stacks, and databases. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/hero/programs/cloud-computing-devops.webp",
    "highlights": [
      "Computer & IT",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream (preferably with Mathematics/Computer Science) with 50% marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Computer & IT theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Computer & IT",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": true
  },
  {
    "id": "bach-10",
    "slug": "b-sc-computer-science",
    "title": "B.Sc. Computer Science",
    "category": "Bachelor",
    "discipline": "Computer & IT",
    "shortDescription": "Foundations of computing theory, data structures, algorithms, and systems architecture.",
    "description": "Foundations of computing theory, data structures, algorithms, and systems architecture. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/hero/programs/cloud-computing-devops.webp",
    "highlights": [
      "Computer & IT",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics, Chemistry, and Mathematics (PCM)",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Computer & IT theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Computer & IT",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-11",
    "slug": "b-sc-it",
    "title": "B.Sc. IT",
    "category": "Bachelor",
    "discipline": "Computer & IT",
    "shortDescription": "Information technology systems, cloud networks, database administration, and security.",
    "description": "Information technology systems, cloud networks, database administration, and security. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/hero/programs/cloud-computing-devops.webp",
    "highlights": [
      "Computer & IT",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Computer & IT theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Computer & IT",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-12",
    "slug": "b-sc-data-science",
    "title": "B.Sc. Data Science",
    "category": "Bachelor",
    "discipline": "Computer & IT",
    "shortDescription": "Undergraduate data science covering Python, predictive statistics, and machine learning pipelines.",
    "description": "Undergraduate data science covering Python, predictive statistics, and machine learning pipelines. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/hero/programs/cloud-computing-devops.webp",
    "highlights": [
      "Computer & IT",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics/Statistics with minimum 50% aggregate",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Computer & IT theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Computer & IT",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-13",
    "slug": "b-sc-ai-ml",
    "title": "B.Sc. AI & ML",
    "category": "Bachelor",
    "discipline": "Computer & IT",
    "shortDescription": "Specialized artificial intelligence track covering neural nets, computer vision, and cognitive computing.",
    "description": "Specialized artificial intelligence track covering neural nets, computer vision, and cognitive computing. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/hero/programs/cloud-computing-devops.webp",
    "highlights": [
      "Computer & IT",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics and Science stream",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Computer & IT theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Computer & IT",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-14",
    "slug": "b-tech",
    "title": "B.Tech",
    "category": "Bachelor",
    "discipline": "Engineering",
    "shortDescription": "Bachelor of Technology offering world-class engineering fundamentals and laboratory design.",
    "description": "Bachelor of Technology offering world-class engineering fundamentals and laboratory design. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Engineering",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics, Chemistry, and Mathematics (PCM) and qualifying engineering entrance exam",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Engineering theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Engineering",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-15",
    "slug": "be",
    "title": "BE",
    "category": "Bachelor",
    "discipline": "Engineering",
    "shortDescription": "Bachelor of Engineering focusing on core scientific principles, thermodynamics, and circuit design.",
    "description": "Bachelor of Engineering focusing on core scientific principles, thermodynamics, and circuit design. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Engineering",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with PCM from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Engineering theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Engineering",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-16",
    "slug": "b-tech-cse",
    "title": "B.Tech CSE",
    "category": "Bachelor",
    "discipline": "Engineering",
    "shortDescription": "B.Tech in Computer Science & Engineering covering full stack software, operating systems, and clouds.",
    "description": "B.Tech in Computer Science & Engineering covering full stack software, operating systems, and clouds. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Engineering",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics, Mathematics, and Chemistry/Computer Science",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Engineering theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Engineering",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": true
  },
  {
    "id": "bach-17",
    "slug": "b-tech-ai-ml",
    "title": "B.Tech AI & ML",
    "category": "Bachelor",
    "discipline": "Engineering",
    "shortDescription": "Four-year engineering degree engineered for applied machine intelligence, deep learning, and robotics.",
    "description": "Four-year engineering degree engineered for applied machine intelligence, deep learning, and robotics. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Engineering",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with PCM and high national entrance percentile",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Engineering theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Engineering",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-18",
    "slug": "b-tech-data-science",
    "title": "B.Tech Data Science",
    "category": "Bachelor",
    "discipline": "Engineering",
    "shortDescription": "Big data engineering, distributed computing architectures, and quantitative algorithms.",
    "description": "Big data engineering, distributed computing architectures, and quantitative algorithms. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Engineering",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with PCM and strong mathematics aptitude",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Engineering theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Engineering",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-19",
    "slug": "b-sc-mathematics",
    "title": "B.Sc. Mathematics",
    "category": "Bachelor",
    "discipline": "Science",
    "shortDescription": "Pure mathematics, calculus, linear algebra, discrete math, and probability models.",
    "description": "Pure mathematics, calculus, linear algebra, discrete math, and probability models. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Science",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics as a mandatory core subject",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Science theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Science",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-20",
    "slug": "b-sc-physics",
    "title": "B.Sc. Physics",
    "category": "Bachelor",
    "discipline": "Science",
    "shortDescription": "Classical mechanics, quantum basics, electromagnetism, and optics laboratory experiments.",
    "description": "Classical mechanics, quantum basics, electromagnetism, and optics laboratory experiments. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Science",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics and Mathematics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Science theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Science",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-21",
    "slug": "b-sc-chemistry",
    "title": "B.Sc. Chemistry",
    "category": "Bachelor",
    "discipline": "Science",
    "shortDescription": "Organic synthesis, inorganic compounds, physical chemistry, and qualitative laboratory testing.",
    "description": "Organic synthesis, inorganic compounds, physical chemistry, and qualitative laboratory testing. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Science",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Chemistry and Science stream",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Science theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Science",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-22",
    "slug": "b-sc-biotechnology",
    "title": "B.Sc. Biotechnology",
    "category": "Bachelor",
    "discipline": "Science",
    "shortDescription": "Cell biology, microbiology, genetics, and biotechnology laboratory practices.",
    "description": "Cell biology, microbiology, genetics, and biotechnology laboratory practices. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Science",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Biology, Chemistry, and Physics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Science theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Science",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-23",
    "slug": "b-sc-microbiology",
    "title": "B.Sc. Microbiology",
    "category": "Bachelor",
    "discipline": "Science",
    "shortDescription": "Bacteriology, virology, immunology, and clinical microbiology diagnostics.",
    "description": "Bacteriology, virology, immunology, and clinical microbiology diagnostics. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Science",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Biology/Biotechnology and Chemistry",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Science theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Science",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-24",
    "slug": "ba",
    "title": "BA",
    "category": "Bachelor",
    "discipline": "Arts & Humanities",
    "shortDescription": "Bachelor of Arts offering broad interdisciplinary foundations across liberal arts and social sciences.",
    "description": "Bachelor of Arts offering broad interdisciplinary foundations across liberal arts and social sciences. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/programs/leadership-humanities-colloquium.png",
    "highlights": [
      "Arts & Humanities",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream (Arts, Commerce, or Science) from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Arts & Humanities theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Arts & Humanities",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-25",
    "slug": "ba-english",
    "title": "BA English",
    "category": "Bachelor",
    "discipline": "Arts & Humanities",
    "shortDescription": "English literature, critical writing, rhetoric, and cultural textual analysis.",
    "description": "English literature, critical writing, rhetoric, and cultural textual analysis. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/leadership-humanities-colloquium.png",
    "highlights": [
      "Arts & Humanities",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with English as a compulsory subject",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Arts & Humanities theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Arts & Humanities",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-26",
    "slug": "ba-psychology",
    "title": "BA Psychology",
    "category": "Bachelor",
    "discipline": "Arts & Humanities",
    "shortDescription": "Human cognition, developmental psychology, social behavior, and introductory counseling.",
    "description": "Human cognition, developmental psychology, social behavior, and introductory counseling. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/leadership-humanities-colloquium.png",
    "highlights": [
      "Arts & Humanities",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with minimum 50% aggregate",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Arts & Humanities theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Arts & Humanities",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-27",
    "slug": "ba-economics",
    "title": "BA Economics",
    "category": "Bachelor",
    "discipline": "Arts & Humanities",
    "shortDescription": "Micro and macro economics, quantitative methods, banking, and public finance.",
    "description": "Micro and macro economics, quantitative methods, banking, and public finance. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/leadership-humanities-colloquium.png",
    "highlights": [
      "Arts & Humanities",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics/Economics preferred",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Arts & Humanities theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Arts & Humanities",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-28",
    "slug": "ba-political-science",
    "title": "BA Political Science",
    "category": "Bachelor",
    "discipline": "Arts & Humanities",
    "shortDescription": "Political theory, constitutional frameworks, international relations, and public governance.",
    "description": "Political theory, constitutional frameworks, international relations, and public governance. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/leadership-humanities-colloquium.png",
    "highlights": [
      "Arts & Humanities",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Arts & Humanities theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Arts & Humanities",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-29",
    "slug": "ba-sociology",
    "title": "BA Sociology",
    "category": "Bachelor",
    "discipline": "Arts & Humanities",
    "shortDescription": "Social institutions, cultural anthropology, stratification, and social research methods.",
    "description": "Social institutions, cultural anthropology, stratification, and social research methods. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/programs/leadership-humanities-colloquium.png",
    "highlights": [
      "Arts & Humanities",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream from an accredited educational board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Arts & Humanities theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Arts & Humanities",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-30",
    "slug": "mbbs",
    "title": "MBBS",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Bachelor of Medicine and Bachelor of Surgery providing comprehensive medical training and clinical rotations.",
    "description": "Bachelor of Medicine and Bachelor of Surgery providing comprehensive medical training and clinical rotations. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "5.5 Years",
      "Professional Licensure Track"
    ],
    "duration": "5.5 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with Physics, Chemistry, Biology (PCB) with qualifying national medical entrance (NEET)",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-31",
    "slug": "bds",
    "title": "BDS",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Bachelor of Dental Surgery preparing students for dental clinical practice and oral surgery.",
    "description": "Bachelor of Dental Surgery preparing students for dental clinical practice and oral surgery. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "HEALTHCARE",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "5 Years",
      "Professional Licensure Track"
    ],
    "duration": "5 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with PCB and qualifying national dental entrance score",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-32",
    "slug": "b-sc-nursing",
    "title": "B.Sc. Nursing",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Professional clinical nursing, patient care management, pharmacology, and hospital protocols.",
    "description": "Professional clinical nursing, patient care management, pharmacology, and hospital protocols. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "HEALTHCARE",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "4 Years",
      "Professional Licensure Track"
    ],
    "duration": "4 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with PCB and English with minimum 45-50% marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-33",
    "slug": "b-pharm",
    "title": "B.Pharm",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Bachelor of Pharmacy covering pharmaceutical chemistry, medicinal pharmacology, and drug formulation.",
    "description": "Bachelor of Pharmacy covering pharmaceutical chemistry, medicinal pharmacology, and drug formulation. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics, Chemistry, and Biology/Mathematics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-34",
    "slug": "bpt",
    "title": "BPT",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Bachelor of Physiotherapy covering rehabilitation, kinesiology, and musculoskeletal therapy.",
    "description": "Bachelor of Physiotherapy covering rehabilitation, kinesiology, and musculoskeletal therapy. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "HEALTHCARE",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "4.5 Years",
      "Professional Licensure Track"
    ],
    "duration": "4.5 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with PCB and minimum 50% aggregate",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-35",
    "slug": "bmlt",
    "title": "BMLT",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Bachelor in Medical Laboratory Technology for diagnostic pathology, hematology, and biochemistry.",
    "description": "Bachelor in Medical Laboratory Technology for diagnostic pathology, hematology, and biochemistry. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "HEALTHCARE",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with PCB/PCM from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-36",
    "slug": "bachelor-of-optometry",
    "title": "Bachelor of Optometry",
    "category": "Bachelor",
    "discipline": "Healthcare",
    "shortDescription": "Ophthalmic optics, vision therapy, ocular diagnostics, and refractive correction.",
    "description": "Ophthalmic optics, vision therapy, ocular diagnostics, and refractive correction. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "HEALTHCARE",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Healthcare",
      "4 Years",
      "Professional Licensure Track"
    ],
    "duration": "4 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with Physics, Chemistry, and Biology/Mathematics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Healthcare theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Healthcare",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-37",
    "slug": "ba-llb",
    "title": "BA LLB",
    "category": "Bachelor",
    "discipline": "Law",
    "shortDescription": "Integrated 5-year undergraduate law degree blending humanities, sociology, and criminal/civil jurisprudence.",
    "description": "Integrated 5-year undergraduate law degree blending humanities, sociology, and criminal/civil jurisprudence. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/programs/higher-education-advisory.png",
    "highlights": [
      "Law",
      "5 Years",
      "Integrated Degree Pathway"
    ],
    "duration": "5 Years",
    "format": "Integrated Degree Pathway",
    "eligibility": "10+2 in any stream with minimum 45% marks (CLAT / LSAT / AILET / CET score)",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Law theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Law",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-38",
    "slug": "bba-llb",
    "title": "BBA LLB",
    "category": "Bachelor",
    "discipline": "Law",
    "shortDescription": "Integrated law curriculum combining corporate management, finance, and enterprise legal frameworks.",
    "description": "Integrated law curriculum combining corporate management, finance, and enterprise legal frameworks. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/higher-education-advisory.png",
    "highlights": [
      "Law",
      "5 Years",
      "Integrated Degree Pathway"
    ],
    "duration": "5 Years",
    "format": "Integrated Degree Pathway",
    "eligibility": "10+2 in any stream with valid law entrance examination scorecard",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Law theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Law",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-39",
    "slug": "b-com-llb",
    "title": "B.Com LLB",
    "category": "Bachelor",
    "discipline": "Law",
    "shortDescription": "Integrated law degree emphasizing corporate taxation, mercantile law, auditing, and financial litigation.",
    "description": "Integrated law degree emphasizing corporate taxation, mercantile law, auditing, and financial litigation. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/higher-education-advisory.png",
    "highlights": [
      "Law",
      "5 Years",
      "Integrated Degree Pathway"
    ],
    "duration": "5 Years",
    "format": "Integrated Degree Pathway",
    "eligibility": "10+2 with Commerce/Mathematics background",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Law theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Law",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-40",
    "slug": "integrated-law-programs",
    "title": "5-Year Integrated Law Programs",
    "category": "Bachelor",
    "discipline": "Law",
    "shortDescription": "Holistic bar council-approved 5-year integrated law curriculum with moot court and judicial internship.",
    "description": "Holistic bar council-approved 5-year integrated law curriculum with moot court and judicial internship. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/programs/higher-education-advisory.png",
    "highlights": [
      "Law",
      "5 Years",
      "Integrated Degree Pathway"
    ],
    "duration": "5 Years",
    "format": "Integrated Degree Pathway",
    "eligibility": "10+2 or equivalent with minimum 45% aggregate and qualifying law entrance",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Law theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Law",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-41",
    "slug": "b-el-ed",
    "title": "B.El.Ed.",
    "category": "Bachelor",
    "discipline": "Education",
    "shortDescription": "Bachelor of Elementary Education preparing educators for foundational primary and elementary schooling.",
    "description": "Bachelor of Elementary Education preparing educators for foundational primary and elementary schooling. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Education",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with minimum 50% aggregate marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Education theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Education",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-42",
    "slug": "d-el-ed",
    "title": "D.El.Ed.",
    "category": "Bachelor",
    "discipline": "Education",
    "shortDescription": "Diploma in Elementary Education focusing on classroom psychology, pedagogical teaching, and child development.",
    "description": "Diploma in Elementary Education focusing on classroom psychology, pedagogical teaching, and child development. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Education",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with minimum 50% aggregate",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Education theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Education",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-43",
    "slug": "b-ed",
    "title": "B.Ed. (where eligible under applicable rules)",
    "category": "Bachelor",
    "discipline": "Education",
    "shortDescription": "Bachelor of Education preparing graduate candidates for professional secondary and senior secondary teaching.",
    "description": "Bachelor of Education preparing graduate candidates for professional secondary and senior secondary teaching. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Education",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Graduation / Post Graduation degree with minimum 50% marks (subject to applicable NCTE/state rules)",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Education theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Education",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-44",
    "slug": "bjmc",
    "title": "BJMC",
    "category": "Bachelor",
    "discipline": "Media & Design",
    "shortDescription": "Bachelor of Journalism and Mass Communication covering reporting, print media, television, and radio.",
    "description": "Bachelor of Journalism and Mass Communication covering reporting, print media, television, and radio. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Media & Design",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any discipline with minimum 50% marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Media & Design theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Media & Design",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-45",
    "slug": "ba-journalism-mass-communication",
    "title": "BA Journalism & Mass Communication",
    "category": "Bachelor",
    "discipline": "Media & Design",
    "shortDescription": "Comprehensive degree covering news reporting, digital public relations, advertising, and film studies.",
    "description": "Comprehensive degree covering news reporting, digital public relations, advertising, and film studies. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Media & Design",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Media & Design theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Media & Design",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-46",
    "slug": "b-des",
    "title": "B.Des",
    "category": "Bachelor",
    "discipline": "Media & Design",
    "shortDescription": "Bachelor of Design covering industrial product design, visual branding, and interactive experience design.",
    "description": "Bachelor of Design covering industrial product design, visual branding, and interactive experience design. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Media & Design",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with design entrance score (UCEED / NID / NIFT / DAT)",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Media & Design theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Media & Design",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-47",
    "slug": "bfa",
    "title": "BFA",
    "category": "Bachelor",
    "discipline": "Media & Design",
    "shortDescription": "Bachelor of Fine Arts specializing in painting, sculpture, visual arts, and digital illustration.",
    "description": "Bachelor of Fine Arts specializing in painting, sculpture, visual arts, and digital illustration. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Media & Design",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with artistic aptitude and portfolio review",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Media & Design theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Media & Design",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-48",
    "slug": "b-sc-animation",
    "title": "B.Sc. Animation",
    "category": "Bachelor",
    "discipline": "Media & Design",
    "shortDescription": "3D animation, VFX visual effects, CGI compositing, and video game character modeling.",
    "description": "3D animation, VFX visual effects, CGI compositing, and video game character modeling. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/academic-honors-accelerator.png",
    "highlights": [
      "Media & Design",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream from a recognized board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Media & Design theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Media & Design",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-49",
    "slug": "bhm",
    "title": "BHM",
    "category": "Bachelor",
    "discipline": "Hospitality & Tourism",
    "shortDescription": "Bachelor of Hotel Management covering front office operations, culinary arts, and housekeeping.",
    "description": "Bachelor of Hotel Management covering front office operations, culinary arts, and housekeeping. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Hospitality & Tourism",
      "3-4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3-4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with English as a compulsory subject",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Hospitality & Tourism theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Hospitality & Tourism",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-50",
    "slug": "b-sc-hospitality-hotel-administration",
    "title": "B.Sc. Hospitality & Hotel Administration",
    "category": "Bachelor",
    "discipline": "Hospitality & Tourism",
    "shortDescription": "Rigorous hotel administration covering revenue management, hospitality law, and resort operations.",
    "description": "Rigorous hotel administration covering revenue management, hospitality law, and resort operations. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Hospitality & Tourism",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with English and qualifying NCHMCT JEE score",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Hospitality & Tourism theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Hospitality & Tourism",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-51",
    "slug": "bachelor-of-tourism-management",
    "title": "Bachelor of Tourism Management",
    "category": "Bachelor",
    "discipline": "Hospitality & Tourism",
    "shortDescription": "Global travel marketing, ticketing systems, tour logistics, and destination heritage development.",
    "description": "Global travel marketing, ticketing systems, tour logistics, and destination heritage development. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Hospitality & Tourism",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 from a recognized educational board",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Hospitality & Tourism theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Hospitality & Tourism",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-52",
    "slug": "b-arch",
    "title": "B.Arch",
    "category": "Bachelor",
    "discipline": "Architecture & Planning",
    "shortDescription": "Council of Architecture approved 5-year degree covering architectural drafting, urban design, and structures.",
    "description": "Council of Architecture approved 5-year degree covering architectural drafting, urban design, and structures. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/hero/programs-hero.jpg",
    "highlights": [
      "Architecture & Planning",
      "5 Years",
      "Professional Licensure Track"
    ],
    "duration": "5 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with Physics, Chemistry & Mathematics and qualifying NATA / JEE Main Paper 2 score",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Architecture & Planning theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Architecture & Planning",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-53",
    "slug": "b-plan",
    "title": "B.Plan",
    "category": "Bachelor",
    "discipline": "Architecture & Planning",
    "shortDescription": "Bachelor of Planning focusing on urban infrastructure, smart city planning, and environmental design.",
    "description": "Bachelor of Planning focusing on urban infrastructure, smart city planning, and environmental design. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/hero/programs-hero.jpg",
    "highlights": [
      "Architecture & Planning",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Mathematics as a mandatory subject",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Architecture & Planning theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Architecture & Planning",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-54",
    "slug": "bachelor-of-interior-design",
    "title": "Bachelor of Interior Design",
    "category": "Bachelor",
    "discipline": "Architecture & Planning",
    "shortDescription": "Interior architectural space planning, furniture design, lighting ergonomics, and 3D CAD visualization.",
    "description": "Interior architectural space planning, furniture design, lighting ergonomics, and 3D CAD visualization. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "CREATIVE",
    "image": "/assets/images/hero/programs-hero.jpg",
    "highlights": [
      "Architecture & Planning",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with minimum 50% marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Architecture & Planning theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Architecture & Planning",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-55",
    "slug": "b-sc-agriculture",
    "title": "B.Sc. Agriculture",
    "category": "Bachelor",
    "discipline": "Agriculture",
    "shortDescription": "Agronomy, soil science, agricultural entomology, plant pathology, and precision farming techniques.",
    "description": "Agronomy, soil science, agricultural entomology, plant pathology, and precision farming techniques. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Agriculture",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics, Chemistry, Biology/Mathematics or Agriculture",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Agriculture theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Agriculture",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-56",
    "slug": "b-sc-horticulture",
    "title": "B.Sc. Horticulture",
    "category": "Bachelor",
    "discipline": "Agriculture",
    "shortDescription": "Cultivation of medicinal plants, floriculture, pomology, post-harvest technology, and greenhouse design.",
    "description": "Cultivation of medicinal plants, floriculture, pomology, post-harvest technology, and greenhouse design. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Agriculture",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with PCB/PCM or Agriculture",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Agriculture theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Agriculture",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-57",
    "slug": "b-sc-forestry",
    "title": "B.Sc. Forestry",
    "category": "Bachelor",
    "discipline": "Agriculture",
    "shortDescription": "Forest ecology, silviculture, wildlife conservation, wood science, and environmental management.",
    "description": "Forest ecology, silviculture, wildlife conservation, wood science, and environmental management. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Agriculture",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Science stream (PCB/PCM)",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Agriculture theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Agriculture",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-58",
    "slug": "b-f-sc-fisheries-science",
    "title": "B.F.Sc. Fisheries Science",
    "category": "Bachelor",
    "discipline": "Agriculture",
    "shortDescription": "Aquaculture engineering, fish pathology, marine biology, and aquatic resource conservation.",
    "description": "Aquaculture engineering, fish pathology, marine biology, and aquatic resource conservation. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/stem-research-fellowship.png",
    "highlights": [
      "Agriculture",
      "4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Biology, Chemistry, and Physics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Agriculture theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Agriculture",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-59",
    "slug": "bba-aviation-management",
    "title": "BBA Aviation Management",
    "category": "Bachelor",
    "discipline": "Aviation",
    "shortDescription": "Airport ground handling, airline logistics, passenger traffic management, and civil aviation law.",
    "description": "Airport ground handling, airline logistics, passenger traffic management, and civil aviation law. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Aviation",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with minimum 50% marks",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Aviation theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Aviation",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-60",
    "slug": "b-sc-aviation",
    "title": "B.Sc. Aviation",
    "category": "Bachelor",
    "discipline": "Aviation",
    "shortDescription": "Aviation aerodynamics, air navigation, meteorological analysis, and aircraft systems technology.",
    "description": "Aviation aerodynamics, air navigation, meteorological analysis, and aircraft systems technology. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Aviation",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Physics and Mathematics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Aviation theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Aviation",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-61",
    "slug": "commercial-pilot-training-programs",
    "title": "Commercial Pilot Training programs",
    "category": "Bachelor",
    "discipline": "Aviation",
    "shortDescription": "DGCA-aligned commercial flight training, instrument rating, multi-engine certification, and simulator hours.",
    "description": "DGCA-aligned commercial flight training, instrument rating, multi-engine certification, and simulator hours. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/programs/global-admissions-mastery.png",
    "highlights": [
      "Aviation",
      "1.5-2 Years",
      "Professional Licensure Track"
    ],
    "duration": "1.5-2 Years",
    "format": "Professional Licensure Track",
    "eligibility": "10+2 with Physics and Mathematics with Class 1 & 2 Medical Fitness clearance",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Aviation theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Aviation",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-62",
    "slug": "bachelor-of-physical-education",
    "title": "Bachelor of Physical Education",
    "category": "Bachelor",
    "discipline": "Sports & Fitness",
    "shortDescription": "Exercise physiology, sports coaching, athletic training, and physical fitness pedagogy.",
    "description": "Exercise physiology, sports coaching, athletic training, and physical fitness pedagogy. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "FOUNDATIONAL",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Sports & Fitness",
      "3-4 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3-4 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 in any stream with physical fitness assessment",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Sports & Fitness theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Sports & Fitness",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-63",
    "slug": "b-sc-sports-science",
    "title": "B.Sc. Sports Science",
    "category": "Bachelor",
    "discipline": "Sports & Fitness",
    "shortDescription": "Biomechanics, sports nutrition, performance analytics, athletic rehabilitation, and sports psychology.",
    "description": "Biomechanics, sports nutrition, performance analytics, athletic rehabilitation, and sports psychology. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "IN DEMAND",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Sports & Fitness",
      "3 Years",
      "Full-Time Degree Track"
    ],
    "duration": "3 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "10+2 with Science stream (PCB/PCM) with interest in athletics",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Sports & Fitness theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Sports & Fitness",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "bach-64",
    "slug": "b-p-ed",
    "title": "B.P.Ed. (subject to eligibility)",
    "category": "Bachelor",
    "discipline": "Sports & Fitness",
    "shortDescription": "Professional physical education teacher training covering curriculum delivery, officiating, and sports administration.",
    "description": "Professional physical education teacher training covering curriculum delivery, officiating, and sports administration. CademyX delivers comprehensive undergraduate counseling, entrance milestone structuring, university selection advisory, and scholarly development for this program.",
    "badge": "ACCREDITED",
    "image": "/assets/images/hero/about-hero.jpg",
    "highlights": [
      "Sports & Fitness",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Graduation in any discipline with participation in recognized sports competitions",
    "learningOutcomes": [
      "Rigorous conceptual mastery of foundational Sports & Fitness theories",
      "Hands-on laboratory, case-study, and analytical problem-solving competencies",
      "Academic writing, institutional project defense, and ethical industry standards"
    ],
    "curriculumHighlights": [
      "Core principles and methodologies in Sports & Fitness",
      "Applied semester practicum, industrial case studies, and field projects",
      "Advanced capstone project and undergraduate academic seminar"
    ],
    "featured": false
  },
  {
    "id": "mast-01",
    "slug": "mba",
    "title": "MBA",
    "category": "Masters",
    "discipline": "Management",
    "shortDescription": "Master of Business Administration with global management specialization.",
    "description": "Master of Business Administration with global management specialization. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/program-mba.jpg",
    "highlights": [
      "Management",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in any discipline with minimum 50% marks from a recognized university",
    "learningOutcomes": [
      "Strategic decision-making and cross-functional enterprise leadership",
      "Financial modeling, corporate valuation, and investment appraisal",
      "Global market expansion and agile operational management"
    ],
    "curriculumHighlights": [
      "Strategic Management & Organizational Behavior",
      "Corporate Finance, Accounting & Managerial Economics",
      "Marketing Strategy, Digital Transformation & Operations"
    ],
    "featured": true
  },
  {
    "id": "mast-02",
    "slug": "pgdm",
    "title": "PGDM",
    "category": "Masters",
    "discipline": "Management",
    "shortDescription": "Post Graduate Diploma in Management with industry-focused curriculum.",
    "description": "Post Graduate Diploma in Management with industry-focused curriculum. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "EXECUTIVE",
    "image": "/assets/images/programs/program-pgdm.jpg",
    "highlights": [
      "Management",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Graduate in any discipline with entrance exam scorecard (CAT / MAT / XAT / CMAT / GMAT)",
    "learningOutcomes": [
      "Contemporary corporate governance and case-study analysis",
      "Data-informed market intelligence and business strategy",
      "Practical leadership immersion and corporate capstone projects"
    ],
    "curriculumHighlights": [
      "Managerial Effectiveness & Business Analytics",
      "Supply Chain Management & Strategic Operations",
      "Applied Business Ethics & Global Corporate Strategy"
    ],
    "featured": false
  },
  {
    "id": "mast-03",
    "slug": "executive-mba",
    "title": "Executive MBA",
    "category": "Masters",
    "discipline": "Management",
    "shortDescription": "Accelerated master’s program for mid-career and senior executive leaders.",
    "description": "Accelerated master’s program for mid-career and senior executive leaders. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "EXECUTIVE",
    "image": "/assets/images/programs/program-executive-mba.jpg",
    "highlights": [
      "Management",
      "1 Year",
      "Executive Track"
    ],
    "duration": "1 Year",
    "format": "Executive Track",
    "eligibility": "Bachelor’s degree with minimum 3-5 years of verified managerial or professional work experience",
    "learningOutcomes": [
      "C-suite strategic navigation and corporate governance",
      "Digital disruption, generative technologies, and change management",
      "Global macroeconomic forecasting and strategic capital allocation"
    ],
    "curriculumHighlights": [
      "Executive Decision Analytics & Enterprise Strategy",
      "Transformational Leadership in Disruptive Environments",
      "Global Mergers, Acquisitions & Venture Capital"
    ],
    "featured": false
  },
  {
    "id": "mast-04",
    "slug": "m-com",
    "title": "M.Com",
    "category": "Masters",
    "discipline": "Commerce & Finance",
    "shortDescription": "Master of Commerce emphasizing advanced financial management and taxation.",
    "description": "Master of Commerce emphasizing advanced financial management and taxation. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-m-com.jpg",
    "highlights": [
      "Commerce & Finance",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Com / BBA / allied commerce undergraduate degree from a recognized institution",
    "learningOutcomes": [
      "Advanced financial accounting frameworks and IFRS compliance",
      "Direct and indirect corporate tax structuring and fiscal policy",
      "Statistical auditing, forensic accounting, and compliance control"
    ],
    "curriculumHighlights": [
      "Advanced Corporate Financial Accounting & Auditing",
      "Direct Tax Laws, GST & International Taxation",
      "Financial Markets, Institutions & Regulatory Frameworks"
    ],
    "featured": false
  },
  {
    "id": "mast-05",
    "slug": "m-sc-finance",
    "title": "M.Sc. Finance",
    "category": "Masters",
    "discipline": "Commerce & Finance",
    "shortDescription": "Quantitative financial modeling, risk analysis, and capital market analytics.",
    "description": "Quantitative financial modeling, risk analysis, and capital market analytics. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/program-m-sc-finance.jpg",
    "highlights": [
      "Commerce & Finance",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in Commerce, Economics, Mathematics, Statistics, or Engineering",
    "learningOutcomes": [
      "Quantitative portfolio optimization and algorithmic asset allocation",
      "Derivatives valuation, credit risk modeling, and Value at Risk (VaR)",
      "Fintech applications, quantitative trading, and econometric estimation"
    ],
    "curriculumHighlights": [
      "Mathematical & Quantitative Methods in Modern Finance",
      "Derivatives, Fixed Income Securities & Risk Engineering",
      "Computational Finance with Python & Algorithmic Trading"
    ],
    "featured": false
  },
  {
    "id": "mast-06",
    "slug": "masters-in-economics",
    "title": "Master's in Economics",
    "category": "Masters",
    "discipline": "Commerce & Finance",
    "shortDescription": "Advanced microeconomics, macroeconomic theory, and empirical econometrics.",
    "description": "Advanced microeconomics, macroeconomic theory, and empirical econometrics. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-masters-in-economics.jpg",
    "highlights": [
      "Commerce & Finance",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Undergraduate degree with Economics, Mathematics, or Statistics as a core subject",
    "learningOutcomes": [
      "Advanced macroeconomic modeling and monetary policy evaluation",
      "Microeconomic contract theory, game theory, and market design",
      "Empirical causal inference and econometric analysis with R and Stata"
    ],
    "curriculumHighlights": [
      "Advanced Microeconomic Theory & Game Theoretic Analysis",
      "Macroeconomic Dynamics, Growth Models & Fiscal Systems",
      "Applied Econometrics, Time-Series Modeling & Policy Impact"
    ],
    "featured": false
  },
  {
    "id": "mast-07",
    "slug": "mca",
    "title": "MCA",
    "category": "Masters",
    "discipline": "Computer & IT",
    "shortDescription": "Master of Computer Applications with comprehensive enterprise software engineering.",
    "description": "Master of Computer Applications with comprehensive enterprise software engineering. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/program-mca.jpg",
    "highlights": [
      "Computer & IT",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "BCA / B.Sc. CS / B.Sc. IT or graduate with Mathematics at 10+2 or degree level",
    "learningOutcomes": [
      "Enterprise software architecture and microservices design",
      "Cloud database design, distributed caching, and backend engineering",
      "Full-cycle application lifecycle management and security best practices"
    ],
    "curriculumHighlights": [
      "Advanced Data Structures, Algorithms & Design Patterns",
      "Cloud-Native Web Architecture & Distributed Database Systems",
      "DevOps Pipelines, Software Testing & Cyber Security Standards"
    ],
    "featured": false
  },
  {
    "id": "mast-08",
    "slug": "m-sc-computer-science",
    "title": "M.Sc. Computer Science",
    "category": "Masters",
    "discipline": "Computer & IT",
    "shortDescription": "Theoretical computing, distributed systems, and algorithm complexity.",
    "description": "Theoretical computing, distributed systems, and algorithm complexity. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/program-m-sc-computer-science.jpg",
    "highlights": [
      "Computer & IT",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Sc. Computer Science / IT / Mathematics / B.Tech or equivalent degree",
    "learningOutcomes": [
      "Rigorous computational complexity and asymptotic algorithmic analysis",
      "Concurrent and distributed systems engineering",
      "Advanced compiler construction, formal methods, and operating systems"
    ],
    "curriculumHighlights": [
      "Advanced Theory of Computation & Computational Complexity",
      "Distributed Systems, Consensus Protocols & Cloud Virtualization",
      "Network Architecture, Cryptography & Advanced Operating Systems"
    ],
    "featured": false
  },
  {
    "id": "mast-09",
    "slug": "m-sc-data-science",
    "title": "M.Sc. Data Science",
    "category": "Masters",
    "discipline": "Computer & IT",
    "shortDescription": "Big data pipelines, statistical learning, and predictive machine intelligence.",
    "description": "Big data pipelines, statistical learning, and predictive machine intelligence. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/program-m-sc-data-science.jpg",
    "highlights": [
      "Computer & IT",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in Computer Science, Mathematics, Statistics, Engineering or allied STEM",
    "learningOutcomes": [
      "Large-scale distributed data pipelines with Apache Spark and Hadoop",
      "Statistical inference, Bayesian statistics, and machine learning models",
      "High-dimensional data visualization and executive decision storytelling"
    ],
    "curriculumHighlights": [
      "Statistical Foundations of Data Science & Linear Algebra",
      "Big Data Processing Architectures & Distributed Computing",
      "Deep Learning, Natural Language Processing & Model Deployment"
    ],
    "featured": false
  },
  {
    "id": "mast-10",
    "slug": "m-sc-ai",
    "title": "M.Sc. AI",
    "category": "Masters",
    "discipline": "Computer & IT",
    "shortDescription": "Artificial intelligence, deep learning architectures, and neural computation.",
    "description": "Artificial intelligence, deep learning architectures, and neural computation. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/program-m-sc-ai.jpg",
    "highlights": [
      "Computer & IT",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Tech / B.E. in CS/IT/EC or B.Sc. in Computer Science/Mathematics/Statistics",
    "learningOutcomes": [
      "Deep convolutional, recurrent, and transformer neural architectures",
      "Reinforcement learning, computer vision, and autonomous agents",
      "Responsible AI governance, alignment, and ethical deployment"
    ],
    "curriculumHighlights": [
      "Foundations of Deep Learning & Neural Network Optimization",
      "Computer Vision, Multimodal Models & Generative AI Systems",
      "Reinforcement Learning, Robotics & Ethical AI Frameworks"
    ],
    "featured": true
  },
  {
    "id": "mast-11",
    "slug": "m-tech",
    "title": "M.Tech",
    "category": "Masters",
    "discipline": "Engineering",
    "shortDescription": "Master of Technology offering deep specialization and technological research.",
    "description": "Master of Technology offering deep specialization and technological research. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/program-m-tech.jpg",
    "highlights": [
      "Engineering",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Tech / B.E. in relevant engineering discipline with valid GATE / institutional merit score",
    "learningOutcomes": [
      "Advanced technological problem solving and specialized engineering design",
      "Methodological scientific experimentation and simulation modeling",
      "Industry research publication and intellectual property documentation"
    ],
    "curriculumHighlights": [
      "Advanced Computational Mathematics & Numerical Simulation",
      "Discipline-Specific Advanced Engineering Systems & Lab Research",
      "Master’s Thesis, Experimental Validation & Industry Collaboration"
    ],
    "featured": false
  },
  {
    "id": "mast-12",
    "slug": "me",
    "title": "ME",
    "category": "Masters",
    "discipline": "Engineering",
    "shortDescription": "Master of Engineering emphasizing core engineering mechanics and applied systems.",
    "description": "Master of Engineering emphasizing core engineering mechanics and applied systems. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-me.jpg",
    "highlights": [
      "Engineering",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor of Engineering (BE) / B.Tech from recognized university in allied engineering stream",
    "learningOutcomes": [
      "Core theoretical engineering synthesis and precision system analysis",
      "Finite element analysis, continuum mechanics, and thermal modeling",
      "Rigorous dissertation development under faculty research mentorship"
    ],
    "curriculumHighlights": [
      "Advanced Continuum Mechanics & System Dynamics",
      "Applied Optimization & Control Systems Engineering",
      "Research Methodology, Technical Paper Writing & Thesis Dissertation"
    ],
    "featured": false
  },
  {
    "id": "mast-13",
    "slug": "m-sc-mathematics",
    "title": "M.Sc. Mathematics",
    "category": "Masters",
    "discipline": "Science",
    "shortDescription": "Pure and applied mathematics, topology, differential geometry, and numerical methods.",
    "description": "Pure and applied mathematics, topology, differential geometry, and numerical methods. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/program-m-sc-mathematics.jpg",
    "highlights": [
      "Science",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Sc. Mathematics (Hons.) or undergraduate degree with Mathematics as major subject",
    "learningOutcomes": [
      "Abstract algebra, measure theory, functional analysis, and complex variables",
      "Partial differential equations and numerical approximation algorithms",
      "Rigorous mathematical proof formulation and theoretical research"
    ],
    "curriculumHighlights": [
      "Abstract Algebra, Linear Operators & Functional Analysis",
      "Topology, Differential Geometry & Real/Complex Analysis",
      "Partial Differential Equations & Advanced Numerical Techniques"
    ],
    "featured": false
  },
  {
    "id": "mast-14",
    "slug": "m-sc-physics",
    "title": "M.Sc. Physics",
    "category": "Masters",
    "discipline": "Science",
    "shortDescription": "Quantum mechanics, condensed matter physics, thermodynamics, and electrodynamics.",
    "description": "Quantum mechanics, condensed matter physics, thermodynamics, and electrodynamics. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/program-m-sc-physics.jpg",
    "highlights": [
      "Science",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Sc. with Physics as major subject and Mathematics as allied subsidiary",
    "learningOutcomes": [
      "Quantum mechanical operators, perturbation theory, and relativistic physics",
      "Solid-state physics, crystallography, and condensed matter phenomena",
      "Advanced experimental instrumentation and laboratory research protocols"
    ],
    "curriculumHighlights": [
      "Advanced Quantum Mechanics & Statistical Thermodynamics",
      "Electrodynamics, Plasma Physics & Nuclear Particle Physics",
      "Condensed Matter Physics & Experimental Spectroscopy Laboratory"
    ],
    "featured": false
  },
  {
    "id": "mast-15",
    "slug": "m-sc-chemistry",
    "title": "M.Sc. Chemistry",
    "category": "Masters",
    "discipline": "Science",
    "shortDescription": "Organic synthesis, physical chemistry kinetics, and analytical spectroscopic methods.",
    "description": "Organic synthesis, physical chemistry kinetics, and analytical spectroscopic methods. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "STEM CERTIFIED",
    "image": "/assets/images/programs/program-m-sc-chemistry.jpg",
    "highlights": [
      "Science",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Sc. with Chemistry as major subject from an accredited college or university",
    "learningOutcomes": [
      "Multi-step organic synthesis mechanisms and retrosynthetic analysis",
      "Quantum chemistry, chemical kinetics, and molecular thermodynamics",
      "Spectroscopic structure elucidation (NMR, FTIR, UV-Vis, Mass Spectrometry)"
    ],
    "curriculumHighlights": [
      "Advanced Organic Reaction Mechanisms & Stereochemistry",
      "Quantum Chemistry, Chemical Kinetics & Molecular Spectroscopy",
      "Analytical Chemistry, Instrumental Analysis & Advanced Lab Synthesis"
    ],
    "featured": false
  },
  {
    "id": "mast-16",
    "slug": "m-sc-biotechnology",
    "title": "M.Sc. Biotechnology",
    "category": "Masters",
    "discipline": "Science",
    "shortDescription": "Recombinant DNA technology, bioprocess engineering, genomics, and bioinformatics.",
    "description": "Recombinant DNA technology, bioprocess engineering, genomics, and bioinformatics. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/program-m-sc-biotechnology.jpg",
    "highlights": [
      "Science",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Sc. in Biotechnology, Microbiology, Biochemistry, Zoology, Botany, or allied life sciences",
    "learningOutcomes": [
      "Molecular cloning, gene editing (CRISPR/Cas9), and recombinant expression",
      "Upstream and downstream bioprocess fermentation and enzyme kinetics",
      "Next-generation sequencing analysis and bioinformatics data processing"
    ],
    "curriculumHighlights": [
      "Recombinant DNA Technology & Molecular Genetics",
      "Bioprocess Engineering, Fermentation & Downstream Processing",
      "Genomics, Proteomics & Computational Bioinformatics"
    ],
    "featured": false
  },
  {
    "id": "mast-17",
    "slug": "ma-english",
    "title": "MA English",
    "category": "Masters",
    "discipline": "Arts & Humanities",
    "shortDescription": "Literary criticism, world literatures, cultural studies, and advanced textual theory.",
    "description": "Literary criticism, world literatures, cultural studies, and advanced textual theory. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-ma-english.jpg",
    "highlights": [
      "Arts & Humanities",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in English or any undergraduate degree with strong English proficiency",
    "learningOutcomes": [
      "Critical analysis of canonical, post-colonial, and contemporary literature",
      "Advanced textual deconstruction, literary theory, and cultural semiotics",
      "Scholarly writing, pedagogical methods, and humanities research"
    ],
    "curriculumHighlights": [
      "Critical Theory, Structuralism & Post-Modern Literary Criticism",
      "British, American, Post-Colonial & World Literatures",
      "Rhetoric, Stylistics, Cultural Studies & Academic Thesis"
    ],
    "featured": false
  },
  {
    "id": "mast-18",
    "slug": "ma-psychology",
    "title": "MA Psychology",
    "category": "Masters",
    "discipline": "Arts & Humanities",
    "shortDescription": "Cognitive psychology, clinical psychopathology, counseling, and empirical research.",
    "description": "Cognitive psychology, clinical psychopathology, counseling, and empirical research. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/program-ma-psychology.jpg",
    "highlights": [
      "Arts & Humanities",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in Psychology or any undergraduate discipline with psychology coursework",
    "learningOutcomes": [
      "Advanced psychological diagnostic assessment and psychometric testing",
      "Cognitive neuroscience, emotional regulation, and behavioral therapy",
      "Empirical research methodology, SPSS statistical modeling, and counseling practice"
    ],
    "curriculumHighlights": [
      "Advanced Cognitive Psychology & Neuropsychology",
      "Psychopathology, Diagnostic Formulations & Clinical Assessment",
      "Counseling Theories, Psychotherapy Models & Supervised Practicum"
    ],
    "featured": false
  },
  {
    "id": "mast-19",
    "slug": "ma-economics",
    "title": "MA Economics",
    "category": "Masters",
    "discipline": "Arts & Humanities",
    "shortDescription": "Applied development economics, international trade, public policy, and finance.",
    "description": "Applied development economics, international trade, public policy, and finance. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-ma-economics.jpg",
    "highlights": [
      "Arts & Humanities",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree with Economics, Mathematics, or Commerce background",
    "learningOutcomes": [
      "Policy evaluation, development indicators, and poverty reduction models",
      "International monetary economics, trade agreements, and exchange rate dynamics",
      "Quantitative econometrics and policy research formulation"
    ],
    "curriculumHighlights": [
      "Microeconomic Foundations & Applied Welfare Economics",
      "Macroeconomics of Open Economies & Public Finance",
      "Applied Econometric Research & Policy Impact Assessment"
    ],
    "featured": false
  },
  {
    "id": "mast-20",
    "slug": "ma-political-science",
    "title": "MA Political Science",
    "category": "Masters",
    "discipline": "Arts & Humanities",
    "shortDescription": "Comparative politics, political philosophy, international relations, and governance.",
    "description": "Comparative politics, political philosophy, international relations, and governance. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-ma-political-science.jpg",
    "highlights": [
      "Arts & Humanities",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in any discipline from a recognized university",
    "learningOutcomes": [
      "In-depth comparative analysis of global political structures and constitutions",
      "Classical and modern political theory and democratic institutional frameworks",
      "International relations diplomacy, conflict resolution, and geopolitical analysis"
    ],
    "curriculumHighlights": [
      "Classical & Modern Political Philosophy",
      "Comparative Politics & International Strategic Relations",
      "Public Administration, Policy Design & Global Geopolitics"
    ],
    "featured": false
  },
  {
    "id": "mast-21",
    "slug": "llm",
    "title": "LLM",
    "category": "Masters",
    "discipline": "Law",
    "shortDescription": "Master of Laws specializing in corporate jurisprudence, constitutional law, and IPR.",
    "description": "Master of Laws specializing in corporate jurisprudence, constitutional law, and IPR. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/programs/program-llm.jpg",
    "highlights": [
      "Law",
      "1-2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "1-2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "LLB (3 Years or 5 Years Integrated) degree with minimum 50% marks from a recognized law school",
    "learningOutcomes": [
      "High-level legal research, statutory interpretation, and appellate jurisprudence",
      "Corporate mergers, cross-border dispute resolution, and international commercial law",
      "Constitutional governance, human rights, and intellectual property litigation"
    ],
    "curriculumHighlights": [
      "Comparative Constitutional Law & Legal Research Methodology",
      "Corporate & Commercial Law, Cross-Border Mergers & Dispute Arbitration",
      "Intellectual Property Rights, Cyber Law & Master’s Legal Dissertation"
    ],
    "featured": false
  },
  {
    "id": "mast-22",
    "slug": "m-ed",
    "title": "M.Ed.",
    "category": "Masters",
    "discipline": "Education",
    "shortDescription": "Master of Education for pedagogical leadership, curriculum design, and policy.",
    "description": "Master of Education for pedagogical leadership, curriculum design, and policy. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-m-ed.jpg",
    "highlights": [
      "Education",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Ed. / B.El.Ed. / D.El.Ed. with undergraduate degree and minimum 50% aggregate",
    "learningOutcomes": [
      "Educational philosophy, sociological foundations, and curriculum development",
      "Advanced teacher education pedagogical frameworks and evaluation metrics",
      "Educational administration, institutional accreditation, and policy research"
    ],
    "curriculumHighlights": [
      "Philosophical & Sociological Perspectives in Contemporary Education",
      "Curriculum Development, Instructional Design & Assessment Systems",
      "Educational Research Methodology, Statistics & Leadership Practicum"
    ],
    "featured": false
  },
  {
    "id": "mast-23",
    "slug": "ma-education",
    "title": "MA Education",
    "category": "Masters",
    "discipline": "Education",
    "shortDescription": "Educational theory, policy analysis, child development, and institutional guidance.",
    "description": "Educational theory, policy analysis, child development, and institutional guidance. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-ma-education.jpg",
    "highlights": [
      "Education",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in any discipline from a recognized university",
    "learningOutcomes": [
      "Critical analysis of national and international educational policies",
      "Psychology of human learning, cognitive development, and inclusive education",
      "Educational technology integration and pedagogical research leadership"
    ],
    "curriculumHighlights": [
      "Foundations of Educational Thought & Comparative Education Systems",
      "Child Development, Learning Theories & Special Education",
      "Educational Planning, Institutional Management & Field Research"
    ],
    "featured": false
  },
  {
    "id": "mast-24",
    "slug": "ma-journalism",
    "title": "MA Journalism",
    "category": "Masters",
    "discipline": "Media & Design",
    "shortDescription": "Investigative reporting, digital multimedia storytelling, broadcasting, and ethics.",
    "description": "Investigative reporting, digital multimedia storytelling, broadcasting, and ethics. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/program-ma-journalism.jpg",
    "highlights": [
      "Media & Design",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in any discipline with strong communication and analytical skills",
    "learningOutcomes": [
      "Investigative journalism ethics, fact-checking, and digital media reporting",
      "Television, podcast, and radio broadcasting studio production",
      "Data journalism, content management systems, and media law"
    ],
    "curriculumHighlights": [
      "Print, Broadcast & Digital Journalism Practices",
      "Media Ethics, Press Freedom Laws & Investigative Methodologies",
      "Multimedia Storytelling, Podcast Production & Digital Capstone"
    ],
    "featured": false
  },
  {
    "id": "mast-25",
    "slug": "masters-in-design",
    "title": "Master's in Design",
    "category": "Masters",
    "discipline": "Media & Design",
    "shortDescription": "Human-centered design, UI/UX systems, industrial design, and creative direction.",
    "description": "Human-centered design, UI/UX systems, industrial design, and creative direction. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "IN DEMAND",
    "image": "/assets/images/programs/program-masters-in-design.jpg",
    "highlights": [
      "Media & Design",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "B.Des / B.Arch / B.Tech / BFA or undergraduate degree with design portfolio review",
    "learningOutcomes": [
      "Design thinking methodologies, ethnographic user research, and empathy mapping",
      "Complex digital design systems, prototyping, and interaction design",
      "Design management, strategic brand identity, and innovation consulting"
    ],
    "curriculumHighlights": [
      "Design Research, Cognitive Psychology & Human-Centered Methodologies",
      "Advanced UI/UX Architecture, Interaction Design & Prototyping",
      "Strategic Design Management, Sustainable Systems & Master’s Studio Project"
    ],
    "featured": false
  },
  {
    "id": "mast-26",
    "slug": "masters-in-hotel-management",
    "title": "Master's in Hotel Management",
    "category": "Masters",
    "discipline": "Hospitality",
    "shortDescription": "Luxury hotel operations, revenue management, global food & beverage strategy.",
    "description": "Luxury hotel operations, revenue management, global food & beverage strategy. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-masters-in-hotel-management.jpg",
    "highlights": [
      "Hospitality",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "BHM / B.Sc. Hospitality or bachelor’s degree in any discipline from a recognized institution",
    "learningOutcomes": [
      "Luxury resort and international hotel operations management",
      "Dynamic hospitality revenue management, pricing algorithms, and asset appraisal",
      "Sustainable tourism initiatives, food safety compliance, and guest experience design"
    ],
    "curriculumHighlights": [
      "Strategic Hospitality Management & Real Estate Asset Operations",
      "Hotel Financial Management, Yield Optimization & Digital Distribution",
      "Food & Beverage Concept Development, Quality Standards & Field Immersion"
    ],
    "featured": false
  },
  {
    "id": "mast-27",
    "slug": "masters-in-tourism-management",
    "title": "Tourism Management",
    "category": "Masters",
    "discipline": "Hospitality",
    "shortDescription": "Sustainable tourism planning, destination marketing, and international travel logistics.",
    "description": "Sustainable tourism planning, destination marketing, and international travel logistics. CademyX provides complete academic advisory, university curriculum guidance, faculty mentorship, and career pathway coaching for scholars pursuing this prestigious degree.",
    "badge": "ACCREDITED",
    "image": "/assets/images/programs/program-masters-in-tourism-management.jpg",
    "highlights": [
      "Hospitality",
      "2 Years",
      "Full-Time Degree Track"
    ],
    "duration": "2 Years",
    "format": "Full-Time Degree Track",
    "eligibility": "Bachelor’s degree in any discipline from a recognized university",
    "learningOutcomes": [
      "Global destination marketing, branding, and eco-tourism strategy",
      "Aviation partnerships, tour operations, and international itinerary planning",
      "Heritage tourism conservation, sustainable travel policies, and crisis management"
    ],
    "curriculumHighlights": [
      "Global Tourism Trends, Policy Frameworks & Destination Planning",
      "Airline & Travel Logistics, Global Distribution Systems (GDS)",
      "Sustainable Tourism Development, Heritage Management & Field Research"
    ],
    "featured": false
  },
  {
    "id": "prog-01",
    "slug": "honorary-doctorate",
    "title": "Honorary Doctorate",
    "category": "Doctorate",
    "discipline": "Leadership & Humanities",
    "shortDescription": "For established professionals.",
    "description": "Distinguished academic and professional recognition honoring exceptional lifetime achievement, public service, and pioneering leadership across industry, science, and the humanities. Candidates undergo rigorous dossier evaluation by senior academic steering committees.",
    "badge": "PRESTIGIOUS",
    "image": "/assets/images/programs/program-honorary-doctorate.jpg",
    "highlights": [
      "Distinguished Laureate",
      "Dossier Committee Review",
      "Global Academic Convocation"
    ],
    "duration": "Executive Nomination",
    "format": "Executive Track",
    "eligibility": "Established senior leaders, distinguished scholars, industry pioneers, and philanthropists with 15+ years of verified contribution",
    "learningOutcomes": [
      "Comprehensive scholastic dossier compilation and peer review validation",
      "Formal credential conferral and induction into the international CademyX Laureate Fellowship",
      "Keynote representation at academic colloquiums and steering roundtables"
    ],
    "curriculumHighlights": [
      "Candidate achievement dossier audit",
      "Institutional credentials validation and verification",
      "Conferral ceremony and laureate register publication"
    ],
    "featured": false
  },
  {
    "id": "prog-02",
    "slug": "phd-admission-program",
    "title": "PhD Admission Program",
    "category": "Doctorate",
    "discipline": "Academic Research",
    "shortDescription": "Research excellence pathway.",
    "description": "Comprehensive advisory engineered for aspiring doctoral researchers. From formulating rigorous research proposals to securing senior faculty supervision and competitive institutional funding at globally ranked research universities.",
    "badge": "POPULAR",
    "image": "/assets/images/programs/program-phd-admission-program.jpg",
    "highlights": [
      "Proposal Formulation",
      "Advisor Alignment",
      "Scholastic Publishing Guidance"
    ],
    "duration": "6–12 Months Advisory",
    "format": "Research Mentorship",
    "eligibility": "Master’s degree or exceptional bachelor’s graduate with demonstrated academic excellence and preliminary research intent",
    "learningOutcomes": [
      "Publication-grade doctoral dissertation proposal design and defense preparation",
      "Strategic alignment with prospective tenured research advisors and laboratory directors",
      "Securing graduate assistantships, institutional fellowships, and competitive research grants"
    ],
    "curriculumHighlights": [
      "Research question formulation and methodological literature reviews",
      "Faculty alignment and strategic outreach protocol",
      "Funding, institutional fellowship applications, and interview coaching"
    ],
    "featured": true,
    "featuredDescription": "A structured advisory track designed for scholars aiming to gain acceptance into selective doctoral programs globally. Led by senior academic mentors."
  },
  {
    "id": "prog-03",
    "slug": "dba-program",
    "title": "DBA Program",
    "category": "Doctorate",
    "discipline": "Executive Management",
    "shortDescription": "Doctor of Business Administration.",
    "description": "A prestigious terminal degree tailored for seasoned corporate executives and management consultants. Bridges empirical academic research with executive business leadership, culminating in an applied executive dissertation.",
    "badge": "EXECUTIVE",
    "image": "/assets/images/programs/program-dba-program.jpg",
    "highlights": [
      "Executive Research Seminar",
      "Applied Field Dissertation",
      "Global Cohort Defense"
    ],
    "duration": "3 Years",
    "format": "Cohort-Based",
    "eligibility": "Master’s degree (MBA, MS, or equivalent) plus minimum 8 years of progressive corporate management experience",
    "learningOutcomes": [
      "Application of rigorous empirical research methods to complex organizational challenges",
      "Contribution of original executive frameworks to international management literature",
      "Preparation for advisory board memberships, university adjunct professorships, and C-suite strategy"
    ],
    "curriculumHighlights": [
      "Foundations of applied quantitative and qualitative organizational research",
      "Theoretical foundations of strategic management and digital enterprise transformation",
      "Executive dissertation synthesis, peer review, and doctoral defense"
    ],
    "featured": false
  },
  {
    "id": "prog-09",
    "slug": "full-stack-development",
    "title": "Full Stack Development",
    "category": "Certifications",
    "discipline": "Software Engineering",
    "shortDescription": "Modern web architectures.",
    "description": "An intensive engineering pathway mastering production-grade full-stack web applications. Covers modern frontend frameworks, distributed backend microservices, resilient relational databases, and enterprise cloud deployments.",
    "badge": "HANDS-ON",
    "image": "/assets/images/hero/programs/full-stack-development.jpg",
    "highlights": [
      "Next.js & TypeScript",
      "PostgreSQL & Prisma",
      "Containerized Deployment"
    ],
    "duration": "6 Months",
    "format": "Cohort-Based",
    "eligibility": "Foundational programming literacy or STEM undergraduate background with commitment to intensive hands-on coding",
    "learningOutcomes": [
      "Architecting responsive, accessible full-stack applications with Next.js, React, and TypeScript",
      "Designing performant REST and GraphQL APIs with Node.js and PostgreSQL relational modeling",
      "Automated CI/CD deployment using Docker containers, GitHub Actions, and cloud hosting"
    ],
    "curriculumHighlights": [
      "Modern frontend architecture with React, Next.js App Router, and Tailwind CSS",
      "Backend engineering with Node.js, Express, PostgreSQL, and Prisma ORM",
      "Containerization with Docker, automated testing, and production deployment"
    ],
    "featured": true,
    "featuredDescription": "Master modern web architectures from TypeScript and Next.js to distributed databases and automated cloud deployments."
  },
  {
    "id": "prog-10",
    "slug": "cloud-computing-devops",
    "title": "Cloud Computing & DevOps",
    "category": "Certifications",
    "discipline": "Cloud Architecture",
    "shortDescription": "Enterprise cloud infrastructure.",
    "description": "Deep technical mastery in enterprise cloud engineering, Infrastructure as Code, container orchestration with Kubernetes, and automated continuous delivery pipelines across leading public cloud ecosystems.",
    "badge": "CLOUD-READY",
    "image": "/assets/images/hero/programs/cloud-computing-devops.webp",
    "highlights": [
      "AWS & GCP Cloud Architecture",
      "Kubernetes Orchestration",
      "Terraform & CI/CD"
    ],
    "duration": "5 Months",
    "format": "Cohort-Based",
    "eligibility": "Basic Linux shell knowledge and fundamental understanding of computer networking and software lifecycles",
    "learningOutcomes": [
      "Provisioning immutable cloud infrastructure declaratively using Terraform and Ansible",
      "Managing production Kubernetes clusters with automated scaling, ingress, and service meshes",
      "Designing zero-downtime CI/CD continuous deployment pipelines with robust monitoring"
    ],
    "curriculumHighlights": [
      "Core cloud architecture across AWS and Google Cloud Platform",
      "Infrastructure as Code (IaC) with Terraform and GitOps practices",
      "Container orchestration using Docker, Kubernetes, Prometheus, and Grafana"
    ],
    "featured": false
  },
  {
    "id": "prog-11",
    "slug": "cyber-security-certification",
    "title": "Cyber Security Certification",
    "category": "Certifications",
    "discipline": "Information Security",
    "shortDescription": "Defense & penetration testing.",
    "description": "Rigorous offensive and defensive cybersecurity training covering ethical hacking, vulnerability assessment, network penetration testing, and enterprise incident response protocols in sandboxed lab environments.",
    "badge": "PRACTICAL",
    "image": "/assets/images/hero/programs/cyber-security-certification.webp",
    "highlights": [
      "Ethical Hacking Labs",
      "Vulnerability Assessment",
      "Incident Response Playbooks"
    ],
    "duration": "6 Months",
    "format": "Cohort-Based",
    "eligibility": "Networking fundamentals (TCP/IP, OSI) and basic understanding of operating systems concepts",
    "learningOutcomes": [
      "Conducting systematic penetration tests and vulnerability audits in line with NIST standards",
      "Analyzing packet captures, threat signatures, and implementing firewall IDS/IPS policies",
      "Executing ethical red-team and blue-team attack-defense simulation engagements"
    ],
    "curriculumHighlights": [
      "Offensive security and penetration testing methodology using Kali Linux",
      "Network defense, cryptography, perimeter security, and SIEM monitoring",
      "Cloud security hardening, application security testing (OWASP Top 10), and forensics"
    ],
    "featured": false
  },
  {
    "id": "prog-12",
    "slug": "data-science-certification",
    "title": "Data Science Certification",
    "category": "Certifications",
    "discipline": "Data & Analytics",
    "shortDescription": "Applied analytics & ML.",
    "description": "A practical credential in applied data science, statistical machine learning, and business intelligence. Learn Python data analysis, predictive modeling with Scikit-Learn, and executive storytelling with Power BI.",
    "badge": "FAST-TRACK",
    "image": "/assets/images/hero/programs/data-science-certification.webp",
    "highlights": [
      "Python Data Stack",
      "Scikit-Learn Machine Learning",
      "Power BI Dashboards"
    ],
    "duration": "4 Months",
    "format": "Self-Paced / Mentor-Led",
    "eligibility": "Business analysts, quantitative researchers, and professionals seeking an applied data science edge",
    "learningOutcomes": [
      "Data wrangling and exploratory data analysis using Python, NumPy, and Pandas",
      "Interactive executive dashboard creation and data modeling in Microsoft Power BI",
      "Predictive classification and regression model implementation with Scikit-Learn"
    ],
    "curriculumHighlights": [
      "Python programming for exploratory data analysis",
      "Business intelligence storytelling with Microsoft Power BI",
      "Supervised and unsupervised machine learning algorithms with Scikit-Learn"
    ],
    "featured": false
  }
];

export function getFeaturedPrograms(): Program[] {
  return programs.filter((p) => p.featured);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramsByCategory(category: ProgramCategory): Program[] {
  return programs.filter((p) => p.category === category);
}

export function getCategoryCounts(): Record<ProgramCategory, number> {
  return {
    Bachelor: programs.filter((p) => p.category === 'Bachelor').length,
    Masters: programs.filter((p) => p.category === 'Masters').length,
    Doctorate: programs.filter((p) => p.category === 'Doctorate').length,
    Certifications: programs.filter((p) => p.category === 'Certifications').length,
  };
}

export function getRelatedPrograms(currentSlug: string, limit = 3): Program[] {
  const current = getProgramBySlug(currentSlug);
  if (!current) return programs.slice(0, limit);

  const sameCategory = programs.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const remaining = programs.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );
  return [...sameCategory, ...remaining].slice(0, limit);
}
