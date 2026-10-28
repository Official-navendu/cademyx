export const BRAND = {
  name: 'CademyX',
  tagline: 'We Setup the Academic Matrix of Your True Aim.',
  subheading: 'Academic Guidance & Excellence',
  description: 'CademyX provides high-integrity educational advisory, personalized learning roadmaps, and structured academic preparation for ambitious learners.',
  foundingYear: 2026,
  colors: {
    midnightNavy: '#061B35',
    royalBlue: '#075AC8',
    premiumGold: '#F4B72F',
    deepGold: '#D99519',
    pureWhite: '#FFFFFF',
    slateNavy: '#152C45',
  },
  assets: {
    logo: '/assets/logo.png',
    logoWhite: '/assets/logo-white.png',
    monogram: '/assets/favicon.png',
    favicon: '/assets/favicon.png',
    ogImage: '/assets/og.png',
  },
} as const;

export const INQUIRY_TYPES = [
  'Program Inquiry',
  'Academic Guidance',
  'General Question',
  'Partnership',
  'Other',
] as const;

export const CONTACT_INFO = {
  primaryEmail: 'info@cademyx.com',
  secondaryEmail: 'hello@cademyx.com',
  email: 'info@cademyx.com',
  phone: '+91 8375897148',
  phoneRaw: '+918375897148',
  whatsappNumber: '918375897148',
  address: '408, 3rd Floor, Niti Khand 1, Indirapuram, Ghaziabad',
  office: '408, 3rd Floor, Niti Khand 1',
  city: 'Indirapuram, Ghaziabad',
  state: 'Uttar Pradesh',
  country: 'India',
  businessHours: 'Monday to Saturday, 9:00 AM to 8:00 PM',
  responseTime: 'Inquiries are reviewed by academic mentors within 1 business day.',
} as const;
