import type { MetadataRoute } from 'next';
import { programs } from '@/data/programs';
import { blogPosts } from '@/data/blog';
import { CATEGORY_SLUGS } from '@/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://cademyx.com').replace(/\/+$/, '');
  const now = new Date();

  // Primary static conversion and marketing routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule-a-consultation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Program category taxonomy routes (all 15 approved subject disciplines)
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${baseUrl}/program-categories/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Individual academic program tracks (all 3 Doctorate tracks, 4 Certification tracks, and subject courses)
  const programRoutes: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Editorial guides and blog posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...categoryRoutes, ...programRoutes, ...blogRoutes];
}
