export const BRAND = {
  name: 'CademyX',
  tagline: 'We Setup the Academic Matrix of Your True Aim.',
  subheading: 'Academic Guidance & Excellence',
  description: 'CademyX is an academic guidance and advisory platform that helps students and prospective candidates understand academic programmes, evaluate their options, and make informed educational decisions.',
  foundingYear: 2026,
  colors: {
    royalDeepBlue: '#182A9A',
    deepNavyBlue: '#101F70',
    pureWhite: '#FFFFFF',
    softBlueWhite: '#F3F5FF',
    lightPeriwinkle: '#DCE3FF',
    slateBlue: '#26345C',
    mutedBlue: '#6573A8',
    // Backward compatibility aliases
    midnightNavy: '#101F70',
    royalBlue: '#182A9A',
    premiumGold: '#182A9A',
    deepGold: '#101F70',
    slateNavy: '#26345C',
    pureWhiteHex: '#FFFFFF',
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
  address: '408, 3rd Floor, Niti Khand 1, Indirapuram, Ghaziabad',
  office: '408, 3rd Floor, Niti Khand 1',
  city: 'Indirapuram, Ghaziabad',
  state: 'Uttar Pradesh',
  country: 'India',
  businessHours: 'Monday to Saturday, 9:00 AM to 8:00 PM',
  responseTime: 'Inquiries are reviewed by academic mentors within 1 business day.',
} as const;
