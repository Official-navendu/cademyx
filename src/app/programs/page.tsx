import React, { Suspense } from 'react';
import { ProgramCatalogExplorer } from '@/components/sections/programs/ProgramCatalogExplorer';
import { LoadingState } from '@/components/ui/LoadingState';
import { programs } from '@/data/programs';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Explore Academic Programs & Advisory Tracks',
  description:
    'Discover CademyX’s specialized academic programs across Bachelor’s, Master’s, Doctorate, and Professional Certification tracks.',
  canonical: '/programs',
  image: '/assets/og.png',
});

export default function ProgramsPage() {
  return (
    <Suspense fallback={<LoadingState message="Loading academic programs catalogue..." />}>
      <ProgramCatalogExplorer initialPrograms={programs} />
    </Suspense>
  );
}
