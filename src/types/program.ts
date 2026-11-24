export type SubjectCategory =
  | 'Management & Business'
  | 'Computer Science & IT'
  | 'Artificial Intelligence'
  | 'Data Science & Analytics'
  | 'Commerce & Finance'
  | 'Business Analytics'
  | 'Economics'
  | 'Psychology'
  | 'Digital Marketing'
  | 'Cybersecurity'
  | 'Engineering & Technology'
  | 'Law'
  | 'Media & Communication'
  | 'Design & Creative Technology'
  | 'Hospitality & Tourism';

export type ProgramCategory =
  | SubjectCategory
  | 'Doctorate'
  | 'Certifications'
  | string;

export type ProgramFormat =
  | 'Executive Track'
  | 'Research Mentorship'
  | 'Cohort-Based'
  | 'Hybrid Studio'
  | 'Self-Paced / Mentor-Led'
  | 'Weekend Intensive'
  | 'Full-Time Degree Track'
  | 'Integrated Degree Pathway'
  | 'Professional Licensure Track';

export type ProgramBadge =
  | 'PRESTIGIOUS'
  | 'POPULAR'
  | 'EXECUTIVE'
  | 'HIGHLIGHTED'
  | 'IN DEMAND'
  | 'HANDS-ON'
  | 'CLOUD-READY'
  | 'PRACTICAL'
  | 'FAST-TRACK'
  | 'ACCREDITED'
  | 'FOUNDATIONAL'
  | 'STEM CERTIFIED'
  | 'HEALTHCARE'
  | string;

export interface Program {
  id: string;
  slug: string;
  title: string;
  category: ProgramCategory;
  categorySlug?: string;
  discipline?: string;
  shortDescription: string;
  description: string;
  badge?: ProgramBadge;
  image: string;
  featured?: boolean;
  featuredDescription?: string;
  highlights?: string[];
  duration?: string;
  format?: ProgramFormat | string;
  eligibility?: string;
  learningOutcomes?: string[];
  curriculumHighlights?: string[];
  advisoryScope?: string[];
  intendedAudience?: string;
  keyLearningAreas?: string[];
  academicPathway?: string;
}

export interface ProgramFilterState {
  searchQuery: string;
  category: string;
  format: string;
}
