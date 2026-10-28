import React from 'react';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { BrandStory } from '@/components/sections/about/BrandStory';
import { MissionVision } from '@/components/sections/about/MissionVision';
import { CoreValues } from '@/components/sections/about/CoreValues';
import { EducationalApproach } from '@/components/sections/about/EducationalApproach';
import { WhoWeServe } from '@/components/sections/about/WhoWeServe';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'About CademyX — Academic Mission & Values',
  description:
    'Learn about CademyX’s educational philosophy, commitment to scholarly integrity, and personalized academic advisory methodology.',
  canonical: '/about',
  image: '/assets/og.png',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <MissionVision />
      <CoreValues />
      <EducationalApproach />
      <WhoWeServe />
    </>
  );
}
