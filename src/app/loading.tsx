import React from 'react';
import { LoadingState } from '@/components/ui/LoadingState';

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <LoadingState message="Loading CademyX academic portal..." />
    </div>
  );
}
