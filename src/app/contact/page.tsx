import React, { Suspense } from 'react';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactInformation } from '@/components/sections/contact/ContactInformation';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactFAQ } from '@/components/sections/contact/ContactFAQ';
import { Container } from '@/components/ui/Container';
import { LoadingState } from '@/components/ui/LoadingState';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Contact Academic Advisory — CademyX',
  description:
    'Connect with CademyX educational mentors. Schedule a diagnostic consultation to discuss university admissions, research tracks, or academic planning.',
  canonical: '/contact',
  image: '/assets/og.png',
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section id="consultation-form" className="py-14 sm:py-20 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Column: Contact Channels & Advisory Standard */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ContactInformation />
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Suspense
                fallback={
                  <div className="p-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                    <LoadingState message="Initializing consultation form..." />
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>

      <ContactFAQ />
    </>
  );
}
