import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { programs, getProgramBySlug } from '@/data/programs';
import { ProgramDetails } from '@/components/sections/programs/ProgramDetails';
import { constructMetadata } from '@/lib/metadata';
import { BRAND } from '@/lib/constants';

interface ProgramDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const cleanDescription =
    program.description.length > 155
      ? `${program.description.slice(0, 152)}...`
      : program.description;

  return constructMetadata({
    title: `${program.title} (${program.category}) — Curriculum, Eligibility & Advisory`,
    description: cleanDescription,
    image: program.image || BRAND.assets.ogImage,
    canonical: `/programs/${program.slug}`,
    type: 'article',
  });
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://cademyx.com').replace(/\/+$/, '');

  // Program-specific JSON-LD structured data
  const programJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: program.title,
    description: program.description,
    educationalProgramMode: program.format || 'Full-Time Degree Track',
    timeToComplete: program.duration || undefined,
    occupationalCategory: program.discipline || undefined,
    programPrerequisites: program.eligibility || undefined,
    url: `${siteUrl}/programs/${program.slug}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: BRAND.name,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd) }}
      />
      <ProgramDetails program={program} />
    </>
  );
}
