'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring if available
    console.error('Application Error caught by boundary:', error);
  }, [error]);

  return (
    <div className="py-20 sm:py-28 flex items-center justify-center">
      <Container size="narrow" className="text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-red-50 text-red-600 border border-red-200 mb-6">
          <AlertTriangle className="h-10 w-10 text-red-600" aria-hidden="true" />
        </div>

        <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
          An Unexpected Error Occurred
        </p>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#061B35] tracking-tight">
          We Encountered a Problem
        </h1>

        <p className="mt-4 text-base text-[#5A6A85] max-w-lg mx-auto leading-relaxed">
          Our application encountered an unexpected state while loading this page. You can attempt to refresh the view or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            leadingIcon={<RefreshCw className="h-4 w-4" />}
          >
            Try Again
          </Button>
          <Button
            href="/"
            variant="outline"
            size="md"
            leadingIcon={<Home className="h-4 w-4" />}
          >
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
