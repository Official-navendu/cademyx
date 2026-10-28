import { useSyncExternalStore } from 'react';
import {
  CookieCategories,
  StoredCookieConsent,
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_CURRENT_VERSION,
  COOKIE_CONSENT_EVENT,
  OPEN_COOKIE_PREFERENCES_EVENT,
} from '@/types/cookie';

/**
 * Returns currently stored consent or null if visitor has not recorded preferences yet.
 */
export function getStoredConsent(): StoredCookieConsent | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (parsed && parsed.version === COOKIE_CONSENT_CURRENT_VERSION) {
      return parsed;
    }
    return null;
  } catch (err) {
    console.error('[CademyX Cookie Consent Read Error]:', err);
    return null;
  }
}

/**
 * Persists user cookie consent preferences to localStorage and broadcasts update event.
 */
export function saveConsentPreferences(
  categories: Partial<CookieCategories>
): StoredCookieConsent {
  const consent: StoredCookieConsent = {
    version: COOKIE_CONSENT_CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    // Essential cookies are always required and cannot be disabled
    essential: true,
    analytics: Boolean(categories.analytics),
    functional: Boolean(categories.functional),
    marketing: Boolean(categories.marketing),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
      window.dispatchEvent(
        new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent })
      );
    } catch (err) {
      console.error('[CademyX Cookie Consent Save Error]:', err);
    }
  }

  return consent;
}

/**
 * Checks whether user has accepted a specific cookie category.
 * Essential is always true.
 */
export function hasConsentCategory(
  category: keyof CookieCategories
): boolean {
  if (category === 'essential') return true;
  const consent = getStoredConsent();
  return Boolean(consent && consent[category]);
}

/**
 * Dispatches an event to open the detailed cookie preferences modal.
 */
export function openCookiePreferencesDialog(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT));
  }
}

function subscribeToConsentUpdates(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

/**
 * React hook for components to observe cookie consent changes in real-time.
 */
export function useCookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsentUpdates,
    getStoredConsent,
    () => null
  );

  return {
    consent,
    hasConsent: (cat: keyof CookieCategories) => {
      if (cat === 'essential') return true;
      return Boolean(consent && consent[cat]);
    },
    openPreferences: openCookiePreferencesDialog,
    saveConsent: saveConsentPreferences,
  };
}
