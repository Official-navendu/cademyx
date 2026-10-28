import { ProgramCategory } from '@/types/program';

export interface CategoryDetailData {
  slug: string;
  category: ProgramCategory;
  title: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  targetAudience: string;
  prerequisites: string;
  scholasticOutcomes: string;
  disciplines: {
    name: string;
    description: string;
    sampleTracks: string[];
  }[];
  advisoryHighlights: string[];
}

export const CATEGORIES_DETAIL_DATA: Record<string, CategoryDetailData> = {
  'bachelor-programs': {
    slug: 'bachelor-programs',
    category: 'Bachelor',
    title: 'Bachelor Degree Programs',
    eyebrow: 'UNDERGRADUATE SCHOLARSHIP',
    tagline: 'Foundational Undergraduate Excellence Across 15 Modern Disciplines',
    overview:
      'CademyX undergraduate degree pathways provide structured curriculum mapping, institutional admissions counsel, and academic mentoring across 64 specialized bachelor tracks. From cutting-edge Computer Science and Artificial Intelligence to Aerospace Engineering, International Business, Biotechnology, Architecture, and Legal Jurisprudence, our undergraduate frameworks cultivate foundational rigor, analytical maturity, and distinct competitive advantage.',
    targetAudience:
      'Secondary school graduates, high school seniors, diploma holders, and transfer students seeking world-class undergraduate credentials with clear, high-trajectory career and postgraduate pathways.',
    prerequisites:
      'Recognized secondary school diploma or equivalent (CBSE, ICSE, Cambridge A-Levels, IB Diploma, or State Board), meeting prerequisite discipline criteria (e.g. Physics & Mathematics for Engineering; Science/Biology for Healthcare).',
    scholasticOutcomes:
      'Conferral of accredited Bachelor of Technology (B.Tech), Bachelor of Science (B.Sc), Bachelor of Business Administration (BBA), Bachelor of Arts (BA), or specialized professional degrees, equipped with project portfolios, research internships, and strong global graduate school readiness.',
    disciplines: [
      {
        name: 'Computing & Advanced Technology',
        description:
          'Deep foundations in computational theory, software design, cybersecurity defenses, robotics, and applied machine learning.',
        sampleTracks: ['B.Tech Computer Science', 'B.Tech AI & ML', 'B.Tech Cyber Security', 'BCA'],
      },
      {
        name: 'Core Engineering & Infrastructure',
        description:
          'Rigorous applied mathematics and physical sciences powering aerospace, mechanical systems, civil infrastructure, and electrical networks.',
        sampleTracks: ['B.Tech Aerospace', 'B.Tech Mechanical', 'B.Tech Civil', 'B.Tech Electrical'],
      },
      {
        name: 'Business, Management & Analytics',
        description:
          'Modern corporate finance, digital marketing ecosystems, supply chain logistics, and business intelligence.',
        sampleTracks: ['BBA General', 'BBA Business Analytics', 'BBA FinTech', 'B.Com Honours'],
      },
      {
        name: 'Sciences, Healthcare & Allied Fields',
        description:
          'Laboratory-intensive curricula in biotechnology, molecular biology, clinical pharmacology, and physiotherapy.',
        sampleTracks: ['B.Sc Biotechnology', 'B.Pharmacy', 'B.Sc Nursing', 'B.Sc Microbiology'],
      },
      {
        name: 'Law, Humanities, Media & Design',
        description:
          'Critical inquiry, constitutional law, visual design communication, and public relations journalism.',
        sampleTracks: ['BA LLB', 'BBA LLB', 'BA Journalism & Mass Comm', 'B.Des Fashion / UI-UX'],
      },
    ],
    advisoryHighlights: [
      'Comprehensive 4-year curriculum pacing & credit strategy',
      'Undergraduate research colloquium and lab placement guidance',
      'Honors thesis and academic publication support',
      'Graduate school (Master’s / PhD) pipeline roadmapping',
    ],
  },
  'masters-programs': {
    slug: 'masters-programs',
    category: 'Masters',
    title: 'Postgraduate & Masters Programs',
    eyebrow: 'ADVANCED POSTGRADUATE SCHOLARSHIP',
    tagline: 'Applied Specialization, Executive Leadership & Strategic Masteries',
    overview:
      'CademyX master’s and postgraduate tracks are engineered for ambitious graduates and corporate practitioners seeking domain authority in high-impact disciplines. Featuring 27 specialized tracks—from AI-driven Executive MBAs and FinTech management to advanced Master of Technology pathways and research Master of Science programs—our guidance balances academic rigor with real-world executive decision-making.',
    targetAudience:
      'Graduating bachelor’s degree holders, mid-career professionals, team leads, and domain specialists seeking career acceleration, executive pivot, or advanced academic credentials.',
    prerequisites:
      'Accredited undergraduate bachelor’s degree in a relevant discipline with competitive cumulative GPA or grade percentage; relevant work experience is recommended for executive and specialized MBA tracks.',
    scholasticOutcomes:
      'Mastery of advanced empirical models, organizational leadership acumen, applied research publications, and eligibility for terminal doctoral admissions or senior executive appointments.',
    disciplines: [
      {
        name: 'Executive & Specialized MBA',
        description:
          'High-stakes strategic leadership covering AI automation, financial engineering, enterprise analytics, and global operations.',
        sampleTracks: [
          'MBA in AI & Automation',
          'MBA in Business Analytics',
          'MBA in FinTech',
          'Executive MBA',
        ],
      },
      {
        name: 'Advanced Computing & Data Science',
        description:
          'Theoretical and applied computer science, distributed algorithms, neural architectures, and enterprise cyber resilience.',
        sampleTracks: [
          'Master in Data Science',
          'Master in Cyber Security',
          'M.Tech Computer Science',
          'MCA',
        ],
      },
      {
        name: 'Applied Sciences & Engineering M.Tech',
        description:
          'Specialized postgraduate research in structural engineering, embedded systems, thermal engineering, and biotechnology.',
        sampleTracks: ['M.Tech VLSI', 'M.Tech Mechanical', 'M.Sc Biotechnology', 'M.Sc Physics'],
      },
      {
        name: 'Postgraduate Commerce & Humanities',
        description:
          'Advanced macroeconomic policy, clinical psychology, public administration, and corporate governance.',
        sampleTracks: ['M.Com Corporate Accounting', 'MA Psychology', 'MA International Relations'],
      },
    ],
    advisoryHighlights: [
      'Admissions narrative and Statement of Purpose (SOP) refinement',
      'Faculty alignment and laboratory selection strategy',
      'Fellowship and teaching assistantship advisory',
      'Executive career trajectory alignment',
    ],
  },
  'doctorate-programs': {
    slug: 'doctorate-programs',
    category: 'Doctorate',
    title: 'Doctorate & Terminal Degree Programs',
    eyebrow: 'TERMINAL ACADEMIC CREDENTIALS',
    tagline: 'Pioneering Scholarly Research, Defensible Dissertations & Distinguished Honors',
    overview:
      'The doctoral pathways at CademyX represent the pinnacle of academic distinction. We provide bespoke research advisory, dissertation proposal architecture, institutional supervisor alignment, and admissions guidance across competitive Doctor of Philosophy (PhD) programs, executive Doctor of Business Administration (DBA) tracks, and prestigious Honorary Doctorate nominations recognizing lifetime industry or societal contributions.',
    targetAudience:
      'Experienced academic researchers, university lecturers, corporate executives, scientists, and senior leaders dedicated to generating original intellectual contributions to their fields.',
    prerequisites:
      'Recognized Master’s degree with high scholastic standing, a viable preliminary research inquiry or proposal hypothesis, and evidence of scholarly or professional leadership.',
    scholasticOutcomes:
      'Conferral of terminal doctoral degrees (PhD / DBA), formal defense of peer-reviewed doctoral dissertations, publications in leading indexed journals (Scopus / Web of Science), and appointment to senior faculty or c-suite advisory positions.',
    disciplines: [
      {
        name: 'Doctor of Philosophy (PhD)',
        description:
          'Original empirical or theoretical inquiry across STEM, Management, Humanities, and Social Sciences culminating in an accredited doctoral dissertation.',
        sampleTracks: ['PhD Admission Program (Research Fellowship)', 'PhD in Computer Science', 'PhD in Management'],
      },
      {
        name: 'Doctor of Business Administration (DBA)',
        description:
          'Applied executive research addressing complex corporate, operational, and organizational dilemmas for seasoned industry executives.',
        sampleTracks: ['DBA in Executive Leadership', 'DBA in Global Strategy & Corporate Innovation'],
      },
      {
        name: 'Honorary Doctorate Advisory',
        description:
          'Nomination curation, dossier synthesis, and committee representation recognizing profound societal, scientific, or philanthropic lifetime achievements.',
        sampleTracks: ['Honorary Doctorate Nomination Advisory & Dossier Architecture'],
      },
    ],
    advisoryHighlights: [
      'Rigorous research proposal and hypothesis formulation',
      'Literature review methodology & LaTeX dissertation formatting',
      'Journal peer-review submission and rebuttal strategies',
      'Defense colloquium rehearsal and committee alignment',
    ],
  },
  'certification-programs': {
    slug: 'certification-programs',
    category: 'Certifications',
    title: 'Professional Certification Programs',
    eyebrow: 'INDUSTRY TECHNICAL MASTERY',
    tagline: 'Accelerated, High-Impact Hands-On Technical Credentials',
    overview:
      'Designed to bridge the gap between academic theory and industry engineering demands, CademyX Professional Certifications deliver intensive, capstone-driven training in high-growth technology disciplines. Spanning modern Full Stack Engineering, Cloud DevOps pipelines, Kali Linux security operations, and Power BI enterprise business intelligence, every program is built around production-grade projects.',
    targetAudience:
      'Undergraduate students, career switchers, working software developers, and data practitioners seeking rapid, verifiable technical mastery and high-impact portfolio pieces.',
    prerequisites:
      'General computer literacy, basic logical aptitude, and a dedicated commitment to hands-on coding and lab exercises; no prior CS degree required for foundational tracks.',
    scholasticOutcomes:
      'Verified CademyX and industry credential certifications, a portfolio of live-deployed cloud projects and automated pipelines, and comprehensive technical interview preparation.',
    disciplines: [
      {
        name: 'Full Stack Software Engineering',
        description:
          'End-to-end web architecture with React, Next.js, Node.js, TypeScript, PostgreSQL, and modern cloud deployment pipelines.',
        sampleTracks: ['Full Stack Development Master Track', 'MERN & Next.js Professional Certification'],
      },
      {
        name: 'Cloud Computing & DevOps',
        description:
          'Infrastructure as Code, Docker containers, Kubernetes orchestration, CI/CD pipelines, and AWS/Azure cloud architecture.',
        sampleTracks: ['Cloud Computing & DevOps Certification'],
      },
      {
        name: 'Cybersecurity & Offensive Defense',
        description:
          'Kali Linux toolchains, penetration testing, network packet analysis, vulnerability management, and threat mitigation.',
        sampleTracks: ['Kali Linux & Cyber Defense Specialization'],
      },
      {
        name: 'Business Intelligence & Data Analytics',
        description:
          'Data modeling with DAX, interactive Power BI dashboards, ETL data pipelines, and executive storytelling.',
        sampleTracks: ['Power BI & Enterprise Analytics Certification'],
      },
    ],
    advisoryHighlights: [
      '1-on-1 code reviews and architectural critiques',
      'Production-grade GitHub portfolio curation',
      'Technical interview simulations and whiteboarding prep',
      'Direct employer capstone showcase alignment',
    ],
  },
};
