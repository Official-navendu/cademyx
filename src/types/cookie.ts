export interface CookieCategories {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export interface StoredCookieConsent extends CookieCategories {
  version: number;
  timestamp: string;
}

export const COOKIE_CONSENT_STORAGE_KEY = 'cademyx_cookie_consent_v1';
export const COOKIE_CONSENT_CURRENT_VERSION = 1;
export const COOKIE_CONSENT_EVENT = 'cademyx:cookie-consent-updated';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'cademyx:open-cookie-preferences';
