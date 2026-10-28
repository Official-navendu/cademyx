'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { cn } from '@/lib/utils';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Hysteresis window (32px to enter, 15px to exit) prevents flickering near threshold
          setIsScrolled((prev) => (prev ? y > 15 : y > 32));
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isScrolled
          ? 'bg-transparent border-transparent pt-2.5 sm:pt-3 pb-1 px-3 sm:px-6 pointer-events-none'
          : 'bg-white/95 backdrop-blur-md border-b border-[#F1F5F9] pt-0 pb-0 px-0'
      )}
    >
      <div
        className={cn(
          'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative',
          isScrolled
            ? 'pointer-events-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-[#E2E8F0]/90 shadow-[0_12px_36px_-6px_rgba(11,27,60,0.12)] rounded-full px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5'
            : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5'
        )}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Official CademyX Header Logo (/assets/logo.png) */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#EAA71C] rounded-md transition-transform duration-300 hover:scale-[1.02] shrink-0"
            aria-label="CademyX — We Setup the Academic Matrix of Your True Aim."
          >
            <Image
              src="/assets/logo.png"
              alt="CademyX — We Setup the Academic Matrix of Your True Aim."
              width={200}
              height={65}
              priority
              className={cn(
                'w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                isScrolled
                  ? 'h-8 sm:h-9 md:h-9.5 lg:h-10'
                  : 'h-9.5 sm:h-11 md:h-12 lg:h-12.5'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile Navigation Toggle */}
          <MobileNavigation />
        </div>

        {/* Subtle Bottom Gold Accent Line: Smoothly fades out in capsule mode */}
        <div
          className={cn(
            'gold-accent-line absolute bottom-0 left-0 right-0 transition-opacity duration-300 pointer-events-none',
            isScrolled ? 'opacity-0' : 'opacity-60'
          )}
          aria-hidden="true"
        />
      </div>
    </header>
  );
};
