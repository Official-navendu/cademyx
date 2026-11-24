'use client';

/**
 * CademyX Session & Popup Management Utility
 * 
 * Coordinates smart enquiry popups, session persistence, and URL updates:
 * - General Enquiry Popup (10s delay on general pages)
 * - Program-Specific Enquiry Popup (20s delay on /programs/[slug])
 * - Session-wide suppression after any form submission or dismissal
 * - URL state indicator (?form=submitted) via History API
 */

const FORM_SUBMITTED_KEY = 'cademyx_form_submitted';
const GENERAL_POPUP_DISMISSED_KEY = 'cademyx_general_enquiry_dismissed';
const PROGRAM_POPUP_PREFIX = 'cademyx_program_dismissed_';

// In-memory flag for active modal to prevent simultaneous popups
let activeModalCount = 0;
const modalListeners = new Set<(hasActiveModal: boolean) => void>();

export function isFormSubmittedInSession(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(FORM_SUBMITTED_KEY) === 'true';
  } catch {
    return false;
  }
}

export function isGeneralPopupDismissed(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(GENERAL_POPUP_DISMISSED_KEY) === 'true';
  } catch {
    return false;
  }
}

export function dismissGeneralPopup(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(GENERAL_POPUP_DISMISSED_KEY, 'true');
  } catch (e) {
    console.warn('[CademyX Session Error]:', e);
  }
}

export function isProgramPopupDismissed(programSlug: string): boolean {
  if (typeof window === 'undefined' || !programSlug) return false;
  try {
    return sessionStorage.getItem(`${PROGRAM_POPUP_PREFIX}${programSlug}`) === 'true';
  } catch {
    return false;
  }
}

export function dismissProgramPopup(programSlug: string): void {
  if (typeof window === 'undefined' || !programSlug) return;
  try {
    sessionStorage.setItem(`${PROGRAM_POPUP_PREFIX}${programSlug}`, 'true');
  } catch (e) {
    console.warn('[CademyX Session Error]:', e);
  }
}

/**
 * Called on confirmed successful submission of any enquiry or contact form:
 * 1. Suppresses all future automatic popups in this session.
 * 2. Updates the URL with ?form=submitted without reloading or losing existing params.
 * 3. Dispatches custom window event for instant synchronization across open components.
 */
export function markSubmissionSuccess(): void {
  if (typeof window === 'undefined') return;

  try {
    sessionStorage.setItem(FORM_SUBMITTED_KEY, 'true');
  } catch (e) {
    console.warn('[CademyX Session Error]:', e);
  }

  try {
    window.dispatchEvent(new CustomEvent('cademyx:form-submitted'));
  } catch {
    // Ignore event error in legacy environments
  }
}

/**
 * Captures the current browser URL (pathname, search params, and hash) safely.
 * Returns '/' if unavailable or if already on /thank-you.
 */
export function getSafeCurrentUrl(): string {
  if (typeof window === 'undefined') return '/';
  try {
    const { pathname, search, hash } = window.location;
    if (pathname === '/thank-you' || pathname === '/thank-you/') {
      return '/';
    }
    return pathname + search + hash;
  } catch {
    return '/';
  }
}

/**
 * Sanitizes a return URL to prevent open redirects to external hosts or schemes.
 * Only allows internal relative paths starting with '/'.
 * Rejects '//', '/\', external protocols, and self-referencing '/thank-you'.
 */
export function sanitizeReturnUrl(rawUrl: string | null | undefined): string {
  if (!rawUrl || typeof rawUrl !== 'string') {
    return '/';
  }

  const trimmed = rawUrl.trim();

  // Must begin with a single '/' and NOT '//' or '/\' (prevents protocol-relative open redirect)
  if (!trimmed.startsWith('/') || trimmed.startsWith('//') || trimmed.startsWith('/\\')) {
    return '/';
  }

  try {
    // Parse against internal dummy base to safely inspect parsed host/protocol
    const parsed = new URL(trimmed, 'https://cademyx.internal');
    if (parsed.origin !== 'https://cademyx.internal') {
      return '/';
    }

    // Prevent infinite redirect loops to /thank-you
    if (parsed.pathname === '/thank-you' || parsed.pathname === '/thank-you/') {
      return '/';
    }

    return parsed.pathname + parsed.search + parsed.hash;
  } catch {
    return '/';
  }
}

/**
 * Navigates to the /thank-you page with the sanitized originating URL.
 * Also marks the session as submitted and unfreezes any body scroll lock.
 */
export function navigateToThankYou(
  returnUrl?: string,
  router?: { push: (url: string) => void }
): void {
  if (typeof window === 'undefined') return;

  // 1. Capture safe return URL BEFORE changing session or history
  const safeReturn = sanitizeReturnUrl(returnUrl || getSafeCurrentUrl());

  // 2. Mark submission in sessionStorage and notify all components
  markSubmissionSuccess();

  // 3. Ensure document scroll lock is cleaned up
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }

  const destination = `/thank-you?returnUrl=${encodeURIComponent(safeReturn)}`;

  // 4. Client navigate if router provided, otherwise fallback to window navigation
  if (router && typeof router.push === 'function') {
    router.push(destination);
  } else {
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(destination);
  }
}

export function registerModalOpen(): () => void {
  activeModalCount += 1;
  notifyModalListeners();

  return () => {
    activeModalCount = Math.max(0, activeModalCount - 1);
    notifyModalListeners();
  };
}

export function isAnyModalActive(): boolean {
  return activeModalCount > 0;
}

function notifyModalListeners(): void {
  const hasModal = activeModalCount > 0;
  modalListeners.forEach((listener) => {
    try {
      listener(hasModal);
    } catch {
      // Ignore listener error
    }
  });
}

