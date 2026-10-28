import { HeaderNavigation, FooterNavigation } from '@/types/navigation';
import { CONTACT_INFO } from '@/lib/constants';
import { programs } from '@/data/programs';

export const headerNavigation: HeaderNavigation = {
  brandName: 'CademyX',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaButton: {
    label: 'Schedule a Consultation',
    href: '/schedule-a-consultation',
  },
};

export const footerNavigation: FooterNavigation = {
  brandDescription:
    'CademyX empowers students, researchers, and executives with structured pathways, personalized guidance, and academic rigor designed to achieve true intellectual clarity.',
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Our Mission', href: '/about' },
    { label: 'Academic Programs', href: '/programs' },
    { label: 'Advisory Contact', href: '/contact' },
  ],
  programLinks: programs.map((p) => ({
    label: p.title,
    href: `/programs/${p.slug}`,
  })),
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
  contactInfo: {
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.phone,
    office: `${CONTACT_INFO.office}, ${CONTACT_INFO.city}`,
    officeNote: CONTACT_INFO.businessHours,
  },
};

