'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop ensures that whenever a visitor navigates to a new route,
 * the page starts reliably at top: 0, while safely preserving hash links
 * and avoiding repeated scroll triggers or layout flickering.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // If the URL contains an intentional in-page hash anchor (e.g. #curriculum), let the browser scroll to that target
      if (window.location.hash) {
        return;
      }

      // Reset scroll position to top instantly on new page load
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [pathname]);

  return null;
}
