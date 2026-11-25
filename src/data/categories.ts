export interface CategoryDetailData {
  name: string;
  slug: string;
  image: string;
  tagline: string;
  overview: string;
  description: string;
  targetAudience: string;
  prerequisites: string;
  scholasticOutcomes: string;
  popularCourses: Array<{ title: string; slug: string; badge?: string }>;
  disciplines: Array<{ name: string; description: string; sampleTracks: string[] }>;
  advisoryHighlights: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const SUBJECT_CATEGORIES: CategoryDetailData[] = [
  {
    "name": "Management & Business",
    "slug": "management-business",
    "image": "/assets/images/programs/program-mba.jpg",
    "tagline": "Strategic Leadership, Corporate Innovation & Global Enterprise Governance",
    "overview": "CademyX’s Management & Business academic discipline provides comprehensive advisory and admissions pathways for foundational undergraduate programs, specialized postgraduate degrees, and executive leadership tracks. Our framework focuses on data-driven management, enterprise finance, agile organizational leadership, and global cross-border strategy.",
    "description": "Executive leadership, corporate strategy, agile governance, and global enterprise operations.",
    "targetAudience": "Aspiring managers, entrepreneurial founders, corporate team leads, and career switchers seeking strategic organizational and operational authority.",
    "prerequisites": "For undergraduate tracks: 10+2 with minimum 50% aggregate. For postgraduate tracks: Recognized bachelor’s degree in any discipline with competitive academic standing.",
    "scholasticOutcomes": "Empirical decision modeling, cross-functional organizational management, investor-grade venture synthesis, and executive capstone delivery.",
    "popularCourses": [
      {
        "title": "BBA",
        "slug": "bba",
        "badge": "POPULAR"
      },
      {
        "title": "MBA",
        "slug": "mba",
        "badge": "POPULAR"
      },
      {
        "title": "Executive MBA",
        "slug": "executive-mba",
        "badge": "EXECUTIVE"
      },
      {
        "title": "PGDM",
        "slug": "pgdm",
        "badge": "IN DEMAND"
      },
      {
        "title": "BMS",
        "slug": "bms",
        "badge": "FOUNDATIONAL"
      }
    ],
    "disciplines": [
      {
        "name": "Corporate Strategy & Governance",
        "description": "Enterprise risk, boardroom governance, and competitive market positioning.",
        "sampleTracks": [
          "Strategic Management",
          "Global Business Operations"
        ]
      },
      {
        "name": "Organizational Leadership",
        "description": "Talent architecture, executive decision frameworks, and change leadership.",
        "sampleTracks": [
          "Human Resource Management",
          "Organizational Behaviour"
        ]
      }
    ],
    "advisoryHighlights": [
      "Comprehensive entrance test milestone tracking (CAT, GMAT, XAT)",
      "Leadership portfolio and statement of purpose architectural review",
      "Accredited corporate mentorship network alignment"
    ],
    "faqs": [
      {
        "question": "What is the distinction between MBA and Executive MBA tracks?",
        "answer": "Traditional MBA programs provide foundational to advanced management training suited for early-to-mid career professionals, whereas Executive MBA tracks feature intensive, weekend or cohort-based models tailored specifically for working professionals with 3+ years of managerial experience."
      },
      {
        "question": "How can I verify whether a Management degree is recognized internationally?",
        "answer": "CademyX advises candidates on programmes offered by recognized universities and colleges. We help candidates verify institutional approvals, accreditation status, and international credential evaluation standards (such as WES) before applying."
      }
    ]
  },
  {
    "name": "Computer Science & IT",
    "slug": "computer-science-it",
    "image": "/assets/images/programs/program-m-sc-computer-science.jpg",
    "tagline": "Algorithmic Foundations, Enterprise Systems Architecture & Distributed Computing",
    "overview": "The Computer Science & Information Technology discipline encompasses rigorous computer science theory, enterprise software engineering, distributed systems, and cloud infrastructure. We advise students on accredited BCA, MCA, and B.Sc./M.Sc. Computer Science tracks designed to meet modern software engineering demands.",
    "description": "Software engineering, distributed computing, database systems, and enterprise cloud architecture.",
    "targetAudience": "Aspiring software engineers, system architects, and technical analysts seeking foundational and advanced computational mastery.",
    "prerequisites": "Undergraduate: 10+2 with Mathematics/Computer Science background. Postgraduate: BCA, B.Sc. IT/CS or bachelor’s degree with mathematics at the 10+2 or graduation level.",
    "scholasticOutcomes": "Proficiency in data structures, algorithmic complexity, microservices architecture, and production code deployment.",
    "popularCourses": [
      {
        "title": "BCA",
        "slug": "bca",
        "badge": "POPULAR"
      },
      {
        "title": "MCA",
        "slug": "mca",
        "badge": "POPULAR"
      },
      {
        "title": "B.Sc. Computer Science",
        "slug": "b-sc-computer-science",
        "badge": "STEM CERTIFIED"
      },
      {
        "title": "M.Sc. Computer Science",
        "slug": "m-sc-computer-science",
        "badge": "STEM CERTIFIED"
      }
    ],
    "disciplines": [
      {
        "name": "Software Engineering & Cloud Architecture",
        "description": "Full stack development, microservices, and enterprise distributed computing.",
        "sampleTracks": [
          "Advanced Systems Architecture",
          "Cloud Infrastructure Design"
        ]
      },
      {
        "name": "Theoretical Computer Science",
        "description": "Automata theory, graph algorithms, and formal language semantics.",
        "sampleTracks": [
          "Algorithm Optimization",
          "Database Internals"
        ]
      }
    ],
    "advisoryHighlights": [
      "Technical project portfolio curation and GitHub documentation reviews",
      "Algorithmic problem-solving roadmap and mock technical interviews",
      "Accredited institutional alignment with industry-aligned curricula"
    ],
    "faqs": [
      {
        "question": "Is an MCA equivalent to a B.Tech in Computer Science for corporate hiring?",
        "answer": "Yes, in enterprise IT, MNCs, and technology startups, an accredited MCA degree is evaluated on par with engineering degrees for software engineering and systems roles."
      },
      {
        "question": "Can non-CS students enroll in Master’s computing programs?",
        "answer": "Many universities offer bridge courses or MCA tracks for graduates from non-CS backgrounds with mathematics at the 10+2 level."
      }
    ]
  },
  {
    "name": "Artificial Intelligence",
    "slug": "artificial-intelligence",
    "image": "/assets/images/programs/program-m-sc-ai.jpg",
    "tagline": "Deep Neural Networks, Generative AI, Computer Vision & Natural Language Processing",
    "overview": "Artificial Intelligence represents the frontier of modern technological advancement. CademyX provides specialized academic advisory for undergraduate and postgraduate degrees concentrating on applied machine learning, neural architectures, generative models, transformer pipelines, and reinforcement learning.",
    "description": "Machine learning algorithms, deep neural networks, computer vision, and generative foundation models.",
    "targetAudience": "Mathematical thinkers, data scientists, and engineers determined to engineer autonomous systems, LLMs, and cognitive applications.",
    "prerequisites": "Undergraduate: 10+2 with Physics, Mathematics, and Chemistry/CS. Postgraduate: B.Tech, BCA, or B.Sc. in STEM disciplines with strong calculus and linear algebra background.",
    "scholasticOutcomes": "Mastery of deep learning frameworks (PyTorch, TensorFlow), foundation model fine-tuning, retrieval-augmented generation (RAG), and model alignment.",
    "popularCourses": [
      {
        "title": "B.Tech AI & ML",
        "slug": "b-tech-ai-ml",
        "badge": "IN DEMAND"
      },
      {
        "title": "M.Sc. AI & ML",
        "slug": "m-sc-ai-ml",
        "badge": "STEM CERTIFIED"
      }
    ],
    "disciplines": [
      {
        "name": "Generative AI & Natural Language Processing",
        "description": "Large language models, attention mechanisms, fine-tuning, and multimodal generation.",
        "sampleTracks": [
          "Transformer Engineering",
          "NLP Pipeline Architecture"
        ]
      },
      {
        "name": "Computer Vision & Autonomous Systems",
        "description": "Convolutional neural networks, object detection, and edge inference.",
        "sampleTracks": [
          "Visual Perception Models",
          "Real-time Edge AI"
        ]
      }
    ],
    "advisoryHighlights": [
      "GPU lab access and research publication guidance",
      "Hands-on PyTorch model repository and HuggingFace deployment review",
      "AI ethics and responsible AI governance frameworks"
    ],
    "faqs": [
      {
        "question": "What background is needed to succeed in AI & ML degrees?",
        "answer": "Strong fundamentals in linear algebra, multivariable calculus, probability, and proficiency in Python programming are essential for applied machine learning success."
      },
      {
        "question": "Are AI degrees recognized for international doctoral and research fellowships?",
        "answer": "We help candidates identify programmes designed to meet recognized STEM curricular guidelines, supporting educational mobility and subsequent academic research pathways."
      }
    ]
  },
  {
    "name": "Data Science & Analytics",
    "slug": "data-science-analytics",
    "image": "/assets/images/programs/program-m-sc-data-science.jpg",
    "tagline": "Statistical Inference, Predictive Modeling, Big Data Systems & Quantitative Insights",
    "overview": "Data Science & Analytics bridges quantitative statistics, computational algorithms, and commercial domain knowledge. CademyX guides scholars into premier B.Sc. and M.Sc. Data Science tracks covering Bayesian inference, high-throughput distributed data pipelines (Spark, Hadoop), and executive data storytelling.",
    "description": "Statistical inference, big data architectures, predictive algorithms, and quantitative visualization.",
    "targetAudience": "Analysts, mathematics graduates, and engineers looking to transform petabyte-scale data into defensible organizational insights.",
    "prerequisites": "Undergraduate: 10+2 with Mathematics/Statistics. Postgraduate: Bachelor’s degree in Science, Computing, Engineering, Economics, or Mathematics.",
    "scholasticOutcomes": "Deployment of predictive machine learning pipelines, relational and NoSQL database modeling, and interactive visualization architecture.",
    "popularCourses": [
      {
        "title": "B.Sc. Data Science",
        "slug": "b-sc-data-science",
        "badge": "STEM CERTIFIED"
      },
      {
        "title": "M.Sc. Data Science",
        "slug": "m-sc-data-science",
        "badge": "IN DEMAND"
      }
    ],
    "disciplines": [
      {
        "name": "Predictive Modeling & Statistical Computing",
        "description": "Regression modeling, clustering, hypothesis testing, and statistical simulation.",
        "sampleTracks": [
          "Applied Econometrics",
          "Advanced Bayesian Models"
        ]
      },
      {
        "name": "Big Data Engineering & Infrastructure",
        "description": "ETL pipelines, data warehousing, Apache Spark, and cloud lakehouses.",
        "sampleTracks": [
          "Distributed Data Pipelines",
          "Cloud Data Warehouses"
        ]
      }
    ],
    "advisoryHighlights": [
      "End-to-end data pipeline portfolio reviews with live deployed dashboards",
      "Statistical thesis framing and empirical data validation support",
      "Direct linkage to enterprise quantitative analytics roles"
    ],
    "faqs": [
      {
        "question": "How does Data Science differ from Business Analytics?",
        "answer": "Data Science has a heavier emphasis on mathematics, computer programming, algorithm construction, and data engineering pipelines, whereas Business Analytics focuses primarily on operational decision-making, KPIs, and corporate performance optimization."
      }
    ]
  },
  {
    "name": "Commerce & Finance",
    "slug": "commerce-finance",
    "image": "/assets/images/programs/program-m-sc-finance.jpg",
    "tagline": "Corporate Financial Engineering, International Accounting Standards & Wealth Management",
    "overview": "The Commerce & Finance discipline prepares scholars for strategic roles across multinational banking, corporate finance, financial accounting, and auditing. Our advisory spans accredited B.Com, M.Com, and M.Sc. Finance degree tracks integrating modern FinTech with traditional statutory compliance.",
    "description": "Financial engineering, forensic accounting, capital markets, and corporate valuation.",
    "targetAudience": "Students and accounting professionals aiming for leadership in investment banking, corporate auditing, treasury, and statutory financial governance.",
    "prerequisites": "Undergraduate: 10+2 in Commerce or allied stream with minimum 50% aggregate. Postgraduate: B.Com, BBA, or relevant undergraduate degree with accounting/finance coursework.",
    "scholasticOutcomes": "Comprehensive mastery of IFRS/GAAP accounting standards, financial statement analysis, portfolio risk optimization, and corporate taxation.",
    "popularCourses": [
      {
        "title": "B.Com",
        "slug": "b-com",
        "badge": "POPULAR"
      },
      {
        "title": "M.Com",
        "slug": "m-com",
        "badge": "POPULAR"
      },
      {
        "title": "M.Sc. Finance",
        "slug": "m-sc-finance",
        "badge": "IN DEMAND"
      }
    ],
    "disciplines": [
      {
        "name": "Investment Banking & Capital Markets",
        "description": "Securities valuation, mergers & acquisitions, and portfolio risk management.",
        "sampleTracks": [
          "Financial Modeling",
          "Corporate Treasury"
        ]
      },
      {
        "name": "Audit & Forensic Accounting",
        "description": "Statutory compliance, internal audit architecture, and tax governance.",
        "sampleTracks": [
          "Forensic Audit",
          "International Taxation"
        ]
      }
    ],
    "advisoryHighlights": [
      "Integration with professional credentials (CA, ACCA, CFA, CMA) roadmaps",
      "Financial modeling lab orientation and corporate case competitions",
      "Academic compliance advisory for credit transfer and global recognition"
    ],
    "faqs": [
      {
        "question": "Can an M.Sc. Finance graduate pursue doctoral studies in Economics or Finance?",
        "answer": "Yes, an accredited Master of Science in Finance confers the full postgraduate status required for PhD/DBA admissions worldwide."
      }
    ]
  },
  {
    "name": "Business Analytics",
    "slug": "business-analytics",
    "image": "/assets/images/programs/program-business-analytics.jpg",
    "tagline": "Commercial Intelligence, Data-Driven Strategy & Enterprise Decision Science",
    "overview": "Business Analytics blends core business management with analytical decision science. CademyX advises students on specialized BBA and MBA in Business Analytics tracks, focusing on SQL, Power BI, Python for business metrics, forecasting, and data-informed corporate strategy.",
    "description": "Commercial metrics, descriptive & predictive analytics, executive dashboards, and decision science.",
    "targetAudience": "Business graduates and working analysts looking to bridge business problem spaces with actionable data pipelines.",
    "prerequisites": "Undergraduate: 10+2 in any stream with basic numerical aptitude. Postgraduate: Bachelor’s degree in any discipline with minimum 50% aggregate.",
    "scholasticOutcomes": "Capability to architect KPI reporting architectures, derive predictive demand forecasts, and present executive business intelligence.",
    "popularCourses": [
      {
        "title": "BBA Business Analytics",
        "slug": "bba-business-analytics",
        "badge": "IN DEMAND"
      },
      {
        "title": "MBA Business Analytics",
        "slug": "mba-business-analytics",
        "badge": "POPULAR"
      }
    ],
    "disciplines": [
      {
        "name": "Enterprise Business Intelligence",
        "description": "DAX modeling, executive KPI design, and automated reporting systems.",
        "sampleTracks": [
          "Executive BI Architecture",
          "Supply Chain Analytics"
        ]
      },
      {
        "name": "Commercial Predictive Modeling",
        "description": "Customer lifetime value modeling, churn analytics, and marketing mix modeling.",
        "sampleTracks": [
          "Marketing Analytics",
          "Risk Scoring Models"
        ]
      }
    ],
    "advisoryHighlights": [
      "Hands-on business case analysis with live corporate datasets",
      "Interactive executive dashboard portfolio creation",
      "Bridging strategy consulting and quantitative data skills"
    ],
    "faqs": [
      {
        "question": "What tools are mastered during Business Analytics degrees?",
        "answer": "Students work extensively with SQL, Python, Excel Advanced Modeling, Power BI, Tableau, and cloud data warehouses."
      }
    ]
  },
  {
    "name": "Economics",
    "slug": "economics",
    "image": "/assets/images/programs/program-ma-economics.jpg",
    "tagline": "Macroeconomic Policy, Econometric Modeling, Game Theory & Development Economics",
    "overview": "Economics provides the empirical and theoretical toolkit to analyze markets, fiscal policy, monetary interventions, and international trade. CademyX provides academic guidance for prestigious BA and MA Economics degrees with strong quantitative and econometric foundations.",
    "description": "Econometrics, public policy, microeconomic theory, and macroeconomic monetary systems.",
    "targetAudience": "Scholars aspiring to careers in economic research institutes, public policy consulting, central banking, and international development agencies.",
    "prerequisites": "Undergraduate: 10+2 with Mathematics/Economics preferred. Postgraduate: Bachelor’s degree in Economics or allied disciplines with quantitative coursework.",
    "scholasticOutcomes": "Empirical econometric regression analysis, theoretical micro-macro modeling, policy impact evaluations, and scholastic journal publishing.",
    "popularCourses": [
      {
        "title": "BA Economics",
        "slug": "ba-economics",
        "badge": "POPULAR"
      },
      {
        "title": "MA Economics",
        "slug": "ma-economics",
        "badge": "PRESTIGIOUS"
      }
    ],
    "disciplines": [
      {
        "name": "Quantitative Econometrics & Data",
        "description": "Time series analysis, panel data models, and causal inference.",
        "sampleTracks": [
          "Applied Econometrics",
          "Financial Economics"
        ]
      },
      {
        "name": "Public Policy & Development",
        "description": "Institutional economics, fiscal reforms, and welfare evaluation.",
        "sampleTracks": [
          "Development Policy",
          "International Trade Policy"
        ]
      }
    ],
    "advisoryHighlights": [
      "Econometric research paper structuring and thesis defense rehearsal",
      "Statistical software guidance in Stata, R, and Python",
      "Advisory for policy think-tanks and competitive economic civil services"
    ],
    "faqs": [
      {
        "question": "Is mathematical training necessary for an MA in Economics?",
        "answer": "Yes, modern economics curricula rely heavily on calculus, linear algebra, and econometrics to conduct rigorous research."
      }
    ]
  },
  {
    "name": "Psychology",
    "slug": "psychology",
    "image": "/assets/images/programs/program-ma-psychology.jpg",
    "tagline": "Cognitive Science, Behavioral Analysis, Clinical Research & Counseling Frameworks",
    "overview": "The Psychology discipline examines human cognition, behavioral dynamics, psychometrics, and mental health interventions. CademyX guides prospective candidates into accredited BA and MA Psychology degree tracks balancing laboratory experimental psychology with clinical and organizational applications.",
    "description": "Cognitive psychology, clinical counseling, psychometrics, and organizational behavior.",
    "targetAudience": "Scholars, counselors, and HR strategists dedicated to mental health research, clinical practice, and behavioral science.",
    "prerequisites": "Undergraduate: 10+2 in any discipline. Postgraduate: BA/B.Sc. in Psychology or recognized undergraduate degree with minimum 50% aggregate.",
    "scholasticOutcomes": "Competence in psychological testing, psychometric assessment design, experimental behavioral research, and counseling modalities.",
    "popularCourses": [
      {
        "title": "BA Psychology",
        "slug": "ba-psychology",
        "badge": "POPULAR"
      },
      {
        "title": "MA Psychology",
        "slug": "ma-psychology",
        "badge": "POPULAR"
      }
    ],
    "disciplines": [
      {
        "name": "Clinical & Counseling Psychology",
        "description": "Psychopathology, therapeutic frameworks, and psychodiagnostic evaluations.",
        "sampleTracks": [
          "Clinical Assessment",
          "Counseling Interventions"
        ]
      },
      {
        "name": "Organizational & Social Psychology",
        "description": "Workplace psychology, leadership dynamics, and group behavioral analysis.",
        "sampleTracks": [
          "Industrial Psychology",
          "Behavioral Economics"
        ]
      }
    ],
    "advisoryHighlights": [
      "Research dissertation support covering ethical compliance and sample design",
      "Clinical practicum documentation and clinical internship guidance",
      "Preparation for licensing frameworks and terminal PhD research"
    ],
    "faqs": [
      {
        "question": "What career paths open up after an MA in Psychology?",
        "answer": "Graduates pursue careers as counseling psychologists, clinical associates, organizational HR specialists, behavioral researchers, and academic lecturers."
      }
    ]
  },
  {
    "name": "Digital Marketing",
    "slug": "digital-marketing",
    "image": "/assets/images/programs/program-digital-marketing.jpg",
    "tagline": "Omnichannel Growth, Performance Marketing, Brand Architecture & MarTech Stacks",
    "overview": "Digital Marketing has evolved from creative advertising into an empirical, data-driven revenue engine. CademyX provides specialized academic advisory for accredited BBA and MBA tracks in Digital Marketing, integrating SEO, paid media analytics, attribution modeling, and automated marketing stacks.",
    "description": "Performance advertising, marketing attribution, conversion rate optimization, and brand equity.",
    "targetAudience": "Creative strategists, growth marketers, and business professionals seeking mastery of modern customer acquisition and brand architecture.",
    "prerequisites": "Undergraduate: 10+2 in any stream. Postgraduate: Recognized bachelor’s degree in any discipline.",
    "scholasticOutcomes": "Formulation of omnichannel marketing strategies, ROI-driven media budget allocation, and full-funnel customer lifetime value optimization.",
    "popularCourses": [
      {
        "title": "BBA Digital Marketing",
        "slug": "bba-digital-marketing",
        "badge": "IN DEMAND"
      },
      {
        "title": "MBA Digital Marketing",
        "slug": "mba-digital-marketing",
        "badge": "POPULAR"
      }
    ],
    "disciplines": [
      {
        "name": "Performance Marketing & Media Strategy",
        "description": "Programmatic advertising, search marketing, and conversion optimization.",
        "sampleTracks": [
          "Paid Media Architecture",
          "Search Engine Strategy"
        ]
      },
      {
        "name": "MarTech & Marketing Automation",
        "description": "CRM automation, customer data platforms (CDP), and attribution science.",
        "sampleTracks": [
          "Growth Engineering",
          "Omnichannel Customer Journey"
        ]
      }
    ],
    "advisoryHighlights": [
      "Live campaign case reviews and ROI audit portfolios",
      "Integration with Google, Meta, and HubSpot industry certifications",
      "Academic thesis advisory in consumer digital behavior"
    ],
    "faqs": [
      {
        "question": "Is an MBA in Digital Marketing recognized across corporate brands?",
        "answer": "Yes, major corporations and tech startups value a formal MBA in Digital Marketing for senior brand management and growth marketing leadership roles."
      }
    ]
  },
  {
    "name": "Cybersecurity",
    "slug": "cybersecurity",
    "image": "/assets/images/hero/programs/master-cyber-security.jpg",
    "tagline": "Defensive Architecture, Incident Response, Cryptography & Threat Intelligence",
    "overview": "As enterprise digital transformation expands attack surfaces, Cybersecurity represents an urgent national and corporate priority. CademyX offers educational guidance for B.Sc. and M.Sc. Cybersecurity degrees covering cryptographic protocols, threat modeling, security operations (SOC), and cloud compliance frameworks.",
    "description": "Network defense, threat intelligence, security architecture, and incident response.",
    "targetAudience": "Systems engineers, network analysts, and IT professionals seeking specialization in enterprise information defense and vulnerability governance.",
    "prerequisites": "Undergraduate: 10+2 with STEM/Computer Science background. Postgraduate: B.Tech, BCA, or B.Sc. in Computer Science/IT/Electronics.",
    "scholasticOutcomes": "Mastery of secure system architecture, network packet forensics, penetration methodologies, and regulatory compliance (ISO 27001, NIST).",
    "popularCourses": [
      {
        "title": "B.Sc. Cybersecurity",
        "slug": "b-sc-cybersecurity",
        "badge": "IN DEMAND"
      },
      {
        "title": "M.Sc. Cybersecurity",
        "slug": "m-sc-cybersecurity",
        "badge": "STEM CERTIFIED"
      }
    ],
    "disciplines": [
      {
        "name": "Defensive Security & Threat Hunting",
        "description": "SIEM architecture, intrusion detection, packet analysis, and malware dissection.",
        "sampleTracks": [
          "SOC Operations",
          "Forensic Incident Response"
        ]
      },
      {
        "name": "Offensive Security & Pen-Testing",
        "description": "Red-teaming methodologies, web application exploits, and vulnerability triage.",
        "sampleTracks": [
          "Ethical Hacking",
          "Application Security"
        ]
      }
    ],
    "advisoryHighlights": [
      "Virtual cyber range lab setup and CTF competition mentoring",
      "Mapping academic curricula to industry standards (CEH, CompTIA Security+, CISSP)",
      "Advisory for corporate cyber defense and statutory intelligence careers"
    ],
    "faqs": [
      {
        "question": "What distinguishes an M.Sc. in Cybersecurity from short certifications?",
        "answer": "A full Master of Science degree provides theoretical foundations in cryptography, operating system internals, and research methodology alongside hands-on lab training, unlocking university faculty roles and senior CISO trajectories."
      }
    ]
  },
  {
    "name": "Engineering & Technology",
    "slug": "engineering-technology",
    "image": "/assets/images/programs/program-m-tech.jpg",
    "tagline": "Computational Engineering, Embedded Systems, Hardware-Software Co-Design & Advanced R&D",
    "overview": "The Engineering & Technology discipline embodies technical problem-solving at scale. CademyX advises engineering aspirants into accredited B.Tech and M.Tech Computer Science and allied engineering programs emphasizing rigorous laboratory work, capstone design, and applied research.",
    "description": "Hardware-software co-design, advanced algorithms, telecommunications, and industrial automation.",
    "targetAudience": "Aspirants aiming to architect complex computational hardware, infrastructure, and mission-critical engineering solutions.",
    "prerequisites": "Undergraduate: 10+2 with Physics, Mathematics, and Chemistry with competitive entrance score. Postgraduate: B.Tech/BE in relevant engineering branch with competitive GPA or GATE score.",
    "scholasticOutcomes": "Design of scalable systems, embedded computational architecture, patentable technical innovations, and peer-reviewed research publications.",
    "popularCourses": [
      {
        "title": "B.Tech CSE",
        "slug": "b-tech-cse",
        "badge": "POPULAR"
      },
      {
        "title": "M.Tech CSE",
        "slug": "m-tech-cse",
        "badge": "PRESTIGIOUS"
      }
    ],
    "disciplines": [
      {
        "name": "Computer Systems Engineering",
        "description": "VLSI architecture, distributed networks, and compiler design.",
        "sampleTracks": [
          "Advanced Systems Engineering",
          "High-Performance Computing"
        ]
      },
      {
        "name": "Robotics & Industrial Automation",
        "description": "Sensor networks, control systems, and automated mechanical design.",
        "sampleTracks": [
          "Mechatronics",
          "Embedded Edge Systems"
        ]
      }
    ],
    "advisoryHighlights": [
      "Accredited engineering university selection and specialization counseling",
      "Thesis proposal review and conference publication guidance",
      "Applied capstone project alignment with real-world engineering case studies"
    ],
    "faqs": [
      {
        "question": "Can working engineers pursue an M.Tech while continuing employment?",
        "answer": "Yes, we advise on accredited weekend and executive M.Tech tracks designed specifically for working engineers with employer sponsorship or flexible schedules."
      }
    ]
  },
  {
    "name": "Law",
    "slug": "law",
    "image": "/assets/images/programs/program-llm.jpg",
    "tagline": "Constitutional Jurisprudence, Corporate Law, International Arbitration & Intellectual Property",
    "overview": "The Law discipline trains legal scholars and practitioners in statutory interpretation, dispute resolution, corporate governance, and judicial defense. CademyX provides admissions counseling across integrated BA LLB, BBA LLB, and postgraduate Master of Laws (LLM) degrees.",
    "description": "Corporate law, constitutional jurisprudence, intellectual property, and international arbitration.",
    "targetAudience": "Law graduates, legal associates, and corporate counsel dedicated to judicial excellence, statutory compliance, and international legal advocacy.",
    "prerequisites": "Undergraduate (Integrated 5-Year): 10+2 in any stream with minimum 50% aggregate. Postgraduate (LLM): Recognized LLB degree from a Bar Council accredited university.",
    "scholasticOutcomes": "Drafting of defensible legal pleadings, statutory arbitration, comparative constitutional analysis, and corporate compliance architecture.",
    "popularCourses": [
      {
        "title": "BA LLB",
        "slug": "ba-llb",
        "badge": "POPULAR"
      },
      {
        "title": "BBA LLB",
        "slug": "bba-llb",
        "badge": "IN DEMAND"
      },
      {
        "title": "LLM",
        "slug": "llm",
        "badge": "PRESTIGIOUS"
      }
    ],
    "disciplines": [
      {
        "name": "Corporate & Commercial Jurisprudence",
        "description": "Mergers & acquisitions law, securities regulation, and bankruptcy frameworks.",
        "sampleTracks": [
          "Corporate Governance Law",
          "Financial Sector Law"
        ]
      },
      {
        "name": "Intellectual Property & Cyber Law",
        "description": "Patent litigation, copyright frameworks, data privacy, and digital rights.",
        "sampleTracks": [
          "IPR Enforcement",
          "Global Cyber Jurisprudence"
        ]
      }
    ],
    "advisoryHighlights": [
      "Moot court brief structuring and legal research methodology reviews",
      "Admissions guidance for premier National Law Universities and accredited global faculties",
      "Specialized LLM dissertation guidance for academic and judicial careers"
    ],
    "faqs": [
      {
        "question": "Is an LLM necessary for legal practice?",
        "answer": "While an LLB is the statutory qualification to practice before courts, an LLM provides essential domain specialization for corporate law firms, international arbitration, and university professorships."
      }
    ]
  },
  {
    "name": "Media & Communication",
    "slug": "media-communication",
    "image": "/assets/images/programs/program-ma-journalism.jpg",
    "tagline": "Investigative Journalism, Digital Media Production, Public Relations & Strategic Narrative",
    "overview": "Media & Communication shapes public discourse, corporate storytelling, and digital broadcast. CademyX offers admissions advisory for accredited BA and MA programs in Journalism & Mass Communication focusing on multimedia newsrooms, strategic PR, media ethics, and digital broadcasting.",
    "description": "Broadcast journalism, investigative reporting, digital media production, and corporate communication.",
    "targetAudience": "Aspiring investigative journalists, media producers, and corporate communications strategists.",
    "prerequisites": "Undergraduate: 10+2 in any stream. Postgraduate: Bachelor’s degree in any discipline with strong written and verbal communication skills.",
    "scholasticOutcomes": "Production of investigative video journalism, multimedia storytelling, corporate crisis communication plans, and media ethics research.",
    "popularCourses": [
      {
        "title": "BA Journalism",
        "slug": "ba-journalism",
        "badge": "POPULAR"
      },
      {
        "title": "MA Journalism",
        "slug": "ma-journalism",
        "badge": "POPULAR"
      }
    ],
    "disciplines": [
      {
        "name": "Multimedia Journalism & Newsroom Broadcast",
        "description": "Investigative reporting, video production, audio podcasts, and digital editing.",
        "sampleTracks": [
          "Digital Newsroom Production",
          "Investigative Feature Writing"
        ]
      },
      {
        "name": "Strategic PR & Corporate Communications",
        "description": "Brand storytelling, crisis communications, and stakeholder narrative management.",
        "sampleTracks": [
          "Corporate PR Architecture",
          "Media Ethics & Policy"
        ]
      }
    ],
    "advisoryHighlights": [
      "Broadcast portfolio and written op-ed critique by veteran media mentors",
      "Guidance for prestigious national media universities and accredited faculties",
      "Internship structuring with leading broadcast networks and digital publications"
    ],
    "faqs": [
      {
        "question": "How do digital media trends influence Journalism curricula?",
        "answer": "Modern programs integrate podcasting, data journalism, digital content management, and SEO alongside classical investigative reporting and media law."
      }
    ]
  },
  {
    "name": "Design & Creative Technology",
    "slug": "design-creative-technology",
    "image": "/assets/images/programs/program-masters-in-design.jpg",
    "tagline": "Human-Centered Design, UX/UI Architecture, Interactive Systems & Visual Communication",
    "overview": "Design & Creative Technology unites human-centered empathy with cutting-edge visual and computational technology. CademyX advises prospective designers across accredited Bachelor of Design (B.Des) and Master of Design (M.Des) tracks covering product design, UX/UI, animation, and interaction architecture.",
    "description": "User experience design, industrial product design, visual branding, and interactive media.",
    "targetAudience": "Creative problem-solvers, graphic artists, and product strategists dedicated to crafting delightful, accessible user experiences.",
    "prerequisites": "Undergraduate: 10+2 in any discipline with creative portfolio assessment. Postgraduate: B.Des, B.Arch, B.Tech, or bachelor’s degree with demonstrable design portfolio.",
    "scholasticOutcomes": "Creation of comprehensive design system specifications, user research studies, interactive high-fidelity prototypes, and design defense dossiers.",
    "popularCourses": [
      {
        "title": "B.Des",
        "slug": "b-des",
        "badge": "POPULAR"
      },
      {
        "title": "M.Des",
        "slug": "m-des",
        "badge": "PRESTIGIOUS"
      }
    ],
    "disciplines": [
      {
        "name": "User Experience & Interaction Architecture",
        "description": "Information architecture, user research, wireframing, and usability testing.",
        "sampleTracks": [
          "UX/UI Design Systems",
          "Interaction Design"
        ]
      },
      {
        "name": "Industrial & Product Design",
        "description": "3D modeling, sustainable material design, and physical product ergonomics.",
        "sampleTracks": [
          "Product Styling",
          "Design for Manufacturing"
        ]
      }
    ],
    "advisoryHighlights": [
      "Comprehensive design portfolio review and case study synthesis",
      "Studio critique sessions with leading design directors and UX leads",
      "Preparation for competitive design entrance evaluations (UCEED, CEED, NID, NIFT)"
    ],
    "faqs": [
      {
        "question": "What is the role of portfolio evaluation in design admissions?",
        "answer": "The creative portfolio is the primary criteria evaluated during design admissions, showcasing user empathy, problem-solving iterations, and visual craftsmanship."
      }
    ]
  },
  {
    "name": "Hospitality & Tourism",
    "slug": "hospitality-tourism",
    "image": "/assets/images/programs/program-masters-in-hotel-management.jpg",
    "tagline": "Luxury Hotel Operations, Global Tourism Governance, Culinary Arts & Event Management",
    "overview": "The Hospitality & Tourism sector is one of the world’s largest global employers. CademyX provides academic guidance for accredited BHM, Bachelor of Tourism Management, and Master of Tourism Management programs focused on hotel operations, luxury hospitality management, and sustainable international tourism.",
    "description": "Hotel administration, international travel management, event planning, and luxury resort operations.",
    "targetAudience": "Aspiring hoteliers, resort general managers, and travel executives aiming for leadership in the global hospitality and travel sector.",
    "prerequisites": "Undergraduate: 10+2 in any discipline with minimum 50% aggregate. Postgraduate: Bachelor’s degree in Hospitality, Tourism, Management, or allied disciplines.",
    "scholasticOutcomes": "Mastery of property management systems (PMS), culinary cost controls, customer experience architecture, and international tourism logistics.",
    "popularCourses": [
      {
        "title": "BHM",
        "slug": "bhm",
        "badge": "POPULAR"
      },
      {
        "title": "Bachelor of Tourism Management",
        "slug": "bachelor-of-tourism-management",
        "badge": "POPULAR"
      },
      {
        "title": "Master of Tourism Management",
        "slug": "master-of-tourism-management",
        "badge": "EXECUTIVE"
      }
    ],
    "disciplines": [
      {
        "name": "Luxury Hotel Operations & Administration",
        "description": "Front office operations, revenue management, culinary administration, and guest relations.",
        "sampleTracks": [
          "Hospitality Operations",
          "Resort Management"
        ]
      },
      {
        "name": "International Tourism Management",
        "description": "Travel economics, eco-tourism development, and international airline operations.",
        "sampleTracks": [
          "Tourism Logistics",
          "Destination Marketing"
        ]
      }
    ],
    "advisoryHighlights": [
      "International hotel chain internship and placement alignment",
      "Curricular evaluation against global luxury service benchmarks",
      "Academic guidance for executive management trainee (MT) selections"
    ],
    "faqs": [
      {
        "question": "Are hospitality management degrees recognized for overseas careers?",
        "answer": "Yes, accredited degrees in hotel and tourism management are recognized by international hotel chains and immigration bodies worldwide for specialized hospitality visas."
      }
    ]
  }
];

export const CATEGORY_SLUGS: string[] = SUBJECT_CATEGORIES.map(c => c.slug);

export const CATEGORIES_DETAIL_DATA: Record<string, CategoryDetailData> = SUBJECT_CATEGORIES.reduce((acc, cat) => {
  acc[cat.slug] = cat;
  return acc;
}, {} as Record<string, CategoryDetailData>);

export const DOCTORATE_TRACKS_META = [
  {
    "title": "Honorary Doctorate",
    "slug": "honorary-doctorate",
    "badge": "PRESTIGIOUS",
    "category": "Doctorate",
    "image": "/assets/images/hero/programs/honorary-doctorate.jpg",
    "shortDescription": "Distinguished honorary doctorate dossier architecture, nomination curation, and academic committee advisory recognizing lifetime achievements.",
    "format": "Academic Honors / Dossier Advisory",
    "duration": "6 – 12 Months",
    "eligibility": "Distinguished professionals with 10+ years of verified societal, business, or scientific contributions"
  },
  {
    "title": "PhD Admission Program",
    "slug": "phd-admission-program",
    "badge": "POPULAR",
    "category": "Doctorate",
    "image": "/assets/images/hero/programs/phd-admission.jpg",
    "shortDescription": "Comprehensive doctoral research guidance spanning thesis hypothesis formulation, faculty alignment, and peer-reviewed journal publications.",
    "format": "Research Mentorship",
    "duration": "3 – 5 Years",
    "eligibility": "Master’s degree in relevant discipline with minimum 55% aggregate marks"
  },
  {
    "title": "DBA Program",
    "slug": "dba-program",
    "badge": "EXECUTIVE",
    "category": "Doctorate",
    "image": "/assets/images/hero/programs/dba-program.jpg",
    "shortDescription": "Applied Doctor of Business Administration track designed for senior executives addressing complex organizational and corporate challenges.",
    "format": "Executive Research Track",
    "duration": "3 Years",
    "eligibility": "Master’s degree / MBA with minimum 5 years of senior corporate or managerial experience"
  }
];

export const CERTIFICATION_TRACKS_META = [
  {
    "title": "Full Stack Development",
    "slug": "full-stack-development",
    "badge": "HANDS-ON",
    "category": "Certifications",
    "image": "/assets/images/hero/programs/full-stack-development.jpg",
    "shortDescription": "End-to-end web architecture with React, Next.js, TypeScript, Node.js, and cloud database deployments.",
    "format": "Hands-On Capstone Track",
    "duration": "6 Months",
    "eligibility": "Basic logical aptitude and computer literacy; open to all academic backgrounds"
  },
  {
    "title": "Cloud Computing & DevOps",
    "slug": "cloud-computing-devops",
    "badge": "CLOUD-READY",
    "category": "Certifications",
    "image": "/assets/images/programs/cloud-computing-devops.webp",
    "shortDescription": "Containerization with Docker, Kubernetes orchestration, CI/CD automated pipelines, and cloud architecture.",
    "format": "Cloud Architecture Track",
    "duration": "6 Months",
    "eligibility": "Basic understanding of operating systems, networking, or programming fundamentals"
  },
  {
    "title": "Cyber Security Certification",
    "slug": "cyber-security-certification",
    "badge": "PRACTICAL",
    "category": "Certifications",
    "image": "/assets/images/programs/cyber-security-certification.webp",
    "shortDescription": "Penetration testing, network security architecture, vulnerability remediation, and practical defensive tooling.",
    "format": "Practical Security Lab",
    "duration": "6 Months",
    "eligibility": "Familiarity with networking concepts and basic command-line operations"
  },
  {
    "title": "Data Science Certification",
    "slug": "data-science-certification",
    "badge": "FAST-TRACK",
    "category": "Certifications",
    "image": "/assets/images/hero/programs/data-science-certification.webp",
    "shortDescription": "Predictive modeling, machine learning pipelines, Python data analytics, and enterprise data visualization.",
    "format": "Fast-Track Industry Track",
    "duration": "6 Months",
    "eligibility": "Basic mathematical comprehension and interest in data analytics"
  }
];

export function getCategoryBySlug(slug: string): CategoryDetailData | undefined {
  return CATEGORIES_DETAIL_DATA[slug];
}
