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
        className={`font-bold text-[#182A9A] hover:text-[#101F70] underline underline-offset-2 transition-colors cursor-pointer inline-flex items-center gap-1 ${className}`}
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
        className={`px-4 py-2.5 rounded-xl border border-[#DCE3FF] hover:border-[#182A9A] text-xs font-bold text-[#101F70] hover:bg-[#F3F5FF] transition-colors cursor-pointer inline-flex items-center gap-2 ${className}`}
      >
        <Sliders className="w-4 h-4 text-[#182A9A]" />
        <span>Open Cookie Preferences</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#182A9A] to-[#101F70] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer ${className}`}
    >
      <Sliders className="w-4 h-4 text-white" />
      <span>Open Cookie Preferences Dialog</span>
    </button>
  );
};
