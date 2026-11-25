import { INQUIRY_TYPES, CONTACT_INFO } from '@/lib/constants';

export const contactPageData = {
  hero: {
    eyebrow: 'ACADEMIC ADVISORY & SUPPORT',
    heading: 'Speak with an Academic Advisor Regarding Your Educational Pathway',
    subheading:
      'Connect directly with our advisory specialists to evaluate institutional prerequisites, clarify curriculum frameworks, and plan your academic progression without sales pressure.',
  },
  contactChannels: [
    {
      id: 'channel-email',
      title: 'Email Advisory',
      value: CONTACT_INFO.primaryEmail,
      href: `mailto:${CONTACT_INFO.primaryEmail}`,
      description: 'Ideal for general inquiries, syllabus details, and program questions.',
      note: 'Response within 1 business day',
      iconName: 'Mail',
    },
    {
      id: 'channel-office',
      title: 'Advisory Office',
      value: CONTACT_INFO.address,
      description: 'Dedicated academic advisory center for scheduled student evaluations.',
      note: 'Monday to Saturday, 9:00 AM to 8:00 PM',
      iconName: 'MapPin',
    },
  ],
  inquiryTypes: INQUIRY_TYPES,
  mockSubmissionDelayMs: 1200,
};
