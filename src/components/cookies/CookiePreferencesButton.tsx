'use client';

import React from 'react';
import { Sliders } from 'lucide-react';
import { openCookiePreferencesDialog } from '@/lib/cookieConsent';

export interface CookiePreferencesButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'inline';
}

export const CookiePreferencesButton: React.FC<CookiePreferencesButtonProps> = ({
  className = '',
  variant = 'primary',
}) => {
  const handleClick = () => {
    openCookiePreferencesDialog();
  };

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`font-bold text-[#075AC8] hover:text-[#061B35] underline underline-offset-2 transition-colors cursor-pointer inline-flex items-center gap-1 ${className}`}
      >
        <Sliders className="w-3.5 h-3.5" />
        <span>Manage Cookie Preferences</span>
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`px-4 py-2.5 rounded-xl border border-[#CBD5E1] hover:border-[#075AC8] text-xs font-bold text-[#061B35] hover:bg-[#F8FAFC] transition-colors cursor-pointer inline-flex items-center gap-2 ${className}`}
      >
        <Sliders className="w-4 h-4 text-[#075AC8]" />
        <span>Open Cookie Preferences</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F4B72F] to-[#D99519] hover:from-[#E5A00F] hover:to-[#C68000] text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer ${className}`}
    >
      <Sliders className="w-4 h-4 text-white" />
      <span>Open Cookie Preferences Dialog</span>
    </button>
  );
};
