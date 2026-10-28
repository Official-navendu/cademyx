import React from 'react';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { ProgramSearchStrip } from '@/components/sections/home/ProgramSearchStrip';
import { TrustHighlights } from '@/components/sections/home/TrustHighlights';
import { ProgramCategories } from '@/components/sections/home/ProgramCategories';
import { FeaturedPrograms } from '@/components/sections/home/FeaturedPrograms';
import { HomeIntroduction } from '@/components/sections/home/HomeIntroduction';
import { GuidanceApproach } from '@/components/sections/home/GuidanceApproach';
import { WhyCademyX } from '@/components/sections/home/WhyCademyX';
import { LearningJourney } from '@/components/sections/home/LearningJourney';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { HomeFAQ } from '@/components/sections/home/HomeFAQ';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'CademyX — Academic Guidance & Excellence',
  description:
    'Discover the right learning opportunities, gain clarity in your academic journey, and take your next step with confidence with CademyX educational advisory.',
  canonical: '/',
  image: '/assets/og.png',
});

export default function HomePage() {
  return (
    <>
      {/* 3. Hero section with academic value proposition and clear CTAs */}
      <HomeHero />

      {/* Program Search Discovery Strip */}
      <ProgramSearchStrip />

      {/* 4. Key value propositions and credibility indicators */}
      <TrustHighlights />

      {/* 5. Academic program categories */}
      <ProgramCategories />

      {/* 6. Featured programs */}
      <FeaturedPrograms />

      {/* 7. About CademyX introduction */}
      <HomeIntroduction />

      {/* 8. Academic guidance and learning approach */}
      <GuidanceApproach />

      {/* 9. Why choose CademyX */}
      <WhyCademyX />

      {/* 10. How the academic journey works */}
      <LearningJourney />

      {/* 11. Scholar reflections and educational outcomes */}
      <Testimonials />

      {/* 12. Relevant FAQs */}
      <HomeFAQ />
    </>
  );
}

