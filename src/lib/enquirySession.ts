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
    const url = new URL(window.location.href);
    if (url.searchParams.get('form') !== 'submitted') {
      url.searchParams.set('form', 'submitted');
      window.history.replaceState(window.history.state, '', url.toString());
    }
  } catch (e) {
    console.warn('[CademyX URL Update Error]:', e);
  }

  try {
    window.dispatchEvent(new CustomEvent('cademyx:form-submitted'));
  } catch {
    // Ignore event error in legacy environments
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
