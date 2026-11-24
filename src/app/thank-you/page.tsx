import React, { Suspense } from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ThankYouContent } from './ThankYouContent';
import { Container } from '@/components/ui/Container';

export const metadata = constructMetadata({
  title: 'Thank You for Your Enquiry',
  description:
    'Your information has been submitted successfully. Thank you for contacting CademyX.',
  canonical: '/thank-you',
  noIndex: true,
});

function ThankYouFallback() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9]/60 min-h-[75vh] flex items-center">
      <Container size="default">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#CBD5E1]/80 shadow-2xl p-8 sm:p-12 text-center animate-pulse">
            <div className="w-20 h-20 rounded-full bg-slate-100 mx-auto mb-6" />
            <div className="h-6 w-3/4 bg-slate-100 rounded-lg mx-auto mb-3" />
            <div className="h-4 w-1/2 bg-slate-100 rounded-lg mx-auto mb-6" />
            <div className="h-16 w-full bg-slate-50 rounded-2xl border border-slate-100" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <ThankYouContent />
    </Suspense>
  );
}
