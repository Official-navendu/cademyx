import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FloatingHelpWidget } from '@/components/common/FloatingHelpWidget';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { GeneralEnquiryPopup } from '@/components/common/GeneralEnquiryPopup';
import { CookieConsentBanner } from '@/components/cookies/CookieConsentBanner';
import { MotionProvider } from '@/components/providers/MotionProvider';
import { BRAND, CONTACT_INFO } from '@/lib/constants';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#061B35',
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://cademyx.com').replace(/\/+$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | ${BRAND.name}`,
    default: `${BRAND.name} — ${BRAND.tagline}`,
  },
  description: BRAND.description,
  icons: {
    icon: [{ url: '/assets/favicon.png', type: 'image/png' }],
    apple: [{ url: '/assets/favicon.png', type: 'image/png' }],
    shortcut: '/assets/favicon.png',
  },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    url: siteUrl,
    siteName: BRAND.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/assets/og.png`,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    images: [`${siteUrl}/assets/og.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'CademyX',
    legalName: 'CademyX.',
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    description: BRAND.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '408, 3rd Floor, Niti Khand 1',
      addressLocality: 'Indirapuram',
      addressRegion: 'Ghaziabad, Uttar Pradesh',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      contactType: 'Admissions & Academic Advisory',
      email: CONTACT_INFO.primaryEmail,
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
      'https://linkedin.com',
      'https://x.com',
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#152C45] antialiased selection:bg-[#F4B72F]/20 selection:text-[#061B35]">
        <MotionProvider>
          <ScrollToTop />
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <FloatingHelpWidget />
          <GeneralEnquiryPopup />
          <CookieConsentBanner />
        </MotionProvider>
      </body>
    </html>
  );
}
