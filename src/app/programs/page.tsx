import React, { Suspense } from 'react';
import { ProgramCatalogExplorer } from '@/components/sections/programs/ProgramCatalogExplorer';
import { LoadingState } from '@/components/ui/LoadingState';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Academic Programs, Disciplines & Professional Pathways | CademyX',
  description:
    'Explore CademyX’s approved academic portfolio structured across 15 subject disciplines, terminal research doctorates (3 tracks), and professional certifications (4 tracks).',
  canonical: '/programs',
});

export default function ProgramsPage() {
  return (
    <Suspense fallback={<LoadingState message="Loading academic programs catalogue..." />}>
      <ProgramCatalogExplorer />
    </Suspense>
  );
}
