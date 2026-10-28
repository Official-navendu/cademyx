'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { MobileMenu } from './MobileMenu';

export const MobileNavigation: React.FC = () => {
  const { isOpen, openMenu, closeMenu } = useMobileMenu();

  return (
    <div className="lg:hidden flex items-center">
      <button
        type="button"
        onClick={openMenu}
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-[#061B35] hover:bg-[#F1F5F9] transition-colors focus-visible:outline-2 focus-visible:outline-[#F4B72F] flex items-center justify-center cursor-pointer active:scale-95"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </div>
  );
};
