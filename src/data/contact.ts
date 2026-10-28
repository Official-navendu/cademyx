import { INQUIRY_TYPES, CONTACT_INFO } from '@/lib/constants';

export const contactPageData = {
  hero: {
    eyebrow: 'ACADEMIC ADVISORY • DIRECT INQUIRIES',
    heading: "Let's Talk About Your Next Academic Step.",
    subheading:
      "Share what you're looking for, and send us an inquiry about the programs or academic pathways that interest you.",
  },
  contactChannels: [
    {
      id: 'channel-email',
      title: 'Email Advisory',
      value: CONTACT_INFO.primaryEmail,
      secondaryValue: CONTACT_INFO.secondaryEmail,
      href: `mailto:${CONTACT_INFO.primaryEmail}`,
      description: 'Ideal for general inquiries, syllabus details, and program questions.',
      note: 'Response within 1 business day',
      iconName: 'Mail',
    },
    {
      id: 'channel-phone',
      title: 'Telephone Consultation',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phoneRaw}`,
      description: 'Speak directly with our admissions and academic advisory team.',
      note: CONTACT_INFO.businessHours,
      iconName: 'Phone',
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
