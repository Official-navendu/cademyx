import type { Metadata } from 'next';
import { BRAND } from './constants';

export function constructMetadata({
  title,
  description = BRAND.description,
  image = BRAND.assets.ogImage,
  noIndex = false,
  canonical,
  type = 'website',
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  type?: 'website' | 'article';
} = {}): Metadata {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://cademyx.com').replace(/\/+$/, '');
  const fullTitle = title ? `${title} | ${BRAND.name}` : `${BRAND.name} — ${BRAND.tagline}`;
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`
    : undefined;

  const rawImage = image || BRAND.assets.ogImage || '/assets/og.png';
  const fullImageUrl = rawImage.startsWith('http')
    ? rawImage
    : `${siteUrl}${rawImage.startsWith('/') ? '' : '/'}${rawImage}`;

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
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — ${fullTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
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
