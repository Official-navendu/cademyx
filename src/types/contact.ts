export type InquiryType = 
  | 'Program Inquiry'
  | 'Academic Guidance'
  | 'General Question'
  | 'Partnership'
  | 'Other';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  programSlug?: string;
  subject?: string;
  message: string;
  consent: boolean;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
