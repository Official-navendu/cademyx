import type { Metadata } from 'next';
import { BRAND } from './constants';

export function constructMetadata({
  title,
  description = BRAND.description,
  noIndex = false,
  canonical,
  type = 'website',
}: {
  title?: string;
  description?: string;
  image?: string; // Kept as optional for backward compatibility, but website strictly enforces /assets/og.png
  noIndex?: boolean;
  canonical?: string;
  type?: 'website' | 'article';
} = {}): Metadata {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://cademyx.com').replace(/\/+$/, '');
  const fullTitle = title
    ? title.includes(BRAND.name)
      ? title
      : `${title} | ${BRAND.name}`
    : `${BRAND.name} — ${BRAND.tagline}`;

  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`
    : undefined;

  // Single common official OG image across the entire website
  const ogImageUrl = `${siteUrl}/assets/og.png`;
  const ogImageAlt = `${BRAND.name} — Academic Guidance & Advisory Platform`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || siteUrl,
      siteName: BRAND.name,
      locale: 'en_US',
      type,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    icons: {
      icon: BRAND.assets.favicon,
      apple: BRAND.assets.monogram,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
