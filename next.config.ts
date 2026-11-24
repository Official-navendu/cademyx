import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Legacy degree categories redirected to main programs portfolio
      {
        source: '/program-categories/bachelor-programs',
        destination: '/programs',
        permanent: true,
      },
      {
        source: '/program-categories/masters-programs',
        destination: '/programs',
        permanent: true,
      },
      {
        source: '/program-categories/doctorate-programs',
        destination: '/programs#doctorate',
        permanent: true,
      },
      {
        source: '/program-categories/certification-programs',
        destination: '/programs#certifications',
        permanent: true,
      },
      // Category aliases from /programs/:catSlug to /program-categories/:catSlug
      {
        source: '/programs/management-business',
        destination: '/program-categories/management-business',
        permanent: true,
      },
      {
        source: '/programs/computer-science-it',
        destination: '/program-categories/computer-science-it',
        permanent: true,
      },
      {
        source: '/programs/artificial-intelligence',
        destination: '/program-categories/artificial-intelligence',
        permanent: true,
      },
      {
        source: '/programs/data-science-analytics',
        destination: '/program-categories/data-science-analytics',
        permanent: true,
      },
      {
        source: '/programs/commerce-finance',
        destination: '/program-categories/commerce-finance',
        permanent: true,
      },
      {
        source: '/programs/business-analytics',
        destination: '/program-categories/business-analytics',
        permanent: true,
      },
      {
        source: '/programs/economics',
        destination: '/program-categories/economics',
        permanent: true,
      },
      {
        source: '/programs/psychology',
        destination: '/program-categories/psychology',
        permanent: true,
      },
      {
        source: '/programs/digital-marketing',
        destination: '/program-categories/digital-marketing',
        permanent: true,
      },
      {
        source: '/programs/cybersecurity',
        destination: '/program-categories/cybersecurity',
        permanent: true,
      },
      {
        source: '/programs/engineering-technology',
        destination: '/program-categories/engineering-technology',
        permanent: true,
      },
      {
        source: '/programs/law',
        destination: '/program-categories/law',
        permanent: true,
      },
      {
        source: '/programs/media-communication',
        destination: '/program-categories/media-communication',
        permanent: true,
      },
      {
        source: '/programs/design-creative-technology',
        destination: '/program-categories/design-creative-technology',
        permanent: true,
      },
      {
        source: '/programs/hospitality-tourism',
        destination: '/program-categories/hospitality-tourism',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
