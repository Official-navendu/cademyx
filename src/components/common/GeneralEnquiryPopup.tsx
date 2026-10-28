'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { EnquiryModal } from './EnquiryModal';
import {
  isFormSubmittedInSession,
  isGeneralPopupDismissed,
  dismissGeneralPopup,
  isAnyModalActive,
} from '@/lib/enquirySession';

export const GeneralEnquiryPopup: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    dismissGeneralPopup();
  }, []);

  useEffect(() => {
    // 1. Immediately suppress if on a dedicated program detail route (/programs/[slug])
    // The program detail page runs its own prioritized 20-second program-specific popup.
    const isProgramDetailRoute =
      pathname.startsWith('/programs/') &&
      pathname !== '/programs' &&
      pathname !== '/programs/';

    if (isProgramDetailRoute) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    // 2. Check session suppression states
    if (isFormSubmittedInSession() || isGeneralPopupDismissed()) {
      return;
    }

    // 3. Listen for form submissions anywhere on the website to immediately cancel timer
    const handleFormSubmitted = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsOpen(false);
    };

    window.addEventListener('cademyx:form-submitted', handleFormSubmitted);

    // 4. Start 10-second timer
    timerRef.current = setTimeout(() => {
      // Re-verify conditions when timer fires
      if (isFormSubmittedInSession() || isGeneralPopupDismissed()) {
        return;
      }

      // Do not open on top of another open modal, cookie preferences, or active form flow
      if (isAnyModalActive()) {
        return;
      }

      setIsOpen(true);
    }, 10000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener('cademyx:form-submitted', handleFormSubmitted);
    };
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <EnquiryModal
      isOpen={isOpen}
      onClose={handleClose}
      title="Need Help Choosing the Right Program?"
      subtitle="Tell us what you're looking for, and our academic guidance team will help you explore the next steps."
      eyebrow="Academic Guidance Desk"
      source="Smart General Enquiry Popup (10s)"
    />
  );
};
