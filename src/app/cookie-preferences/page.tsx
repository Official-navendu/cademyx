import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { CookiePreferencesClient } from './CookiePreferencesClient';

export const metadata = constructMetadata({
  title: 'Cookie Preferences — Manage Your Privacy Settings | CademyX',
  description:
    'Manage and customize your cookie consent preferences on CademyX. Control strictly necessary, functional, analytics, and marketing cookies at any time.',
  canonical: '/cookie-preferences',
});

export default function CookiePreferencesPage() {
  return <CookiePreferencesClient />;
}
