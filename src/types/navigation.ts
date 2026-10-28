import { NavLink } from './common';

export interface HeaderNavigation {
  brandName: string;
  links: NavLink[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface FooterNavigation {
  brandDescription: string;
  quickLinks: NavLink[];
  programLinks: NavLink[];
  legalLinks: NavLink[];
  contactInfo: {
    email: string;
    phone: string;
    office: string;
    officeNote?: string;
  };
}
