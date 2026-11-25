'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Sliders, 
  Info, 
  ArrowLeft, 
  Check, 
  ExternalLink
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CookieCategories } from '@/types/cookie';
import { useCookieConsent, saveConsentPreferences } from '@/lib/cookieConsent';

export function CookiePreferencesClient() {
  const { consent } = useCookieConsent();
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [overrides, setOverrides] = useState<Partial<CookieCategories> | null>(null);

  const categories: CookieCategories = {
    essential: true,
    analytics: overrides?.analytics ?? consent?.analytics ?? false,
    functional: overrides?.functional ?? consent?.functional ?? false,
    marketing: overrides?.marketing ?? consent?.marketing ?? false,
  };

  const toggleCategory = (cat: keyof CookieCategories) => {
    if (cat === 'essential') return;
    setOverrides((prev) => ({
      analytics: prev?.analytics ?? consent?.analytics ?? false,
      functional: prev?.functional ?? consent?.functional ?? false,
      marketing: prev?.marketing ?? consent?.marketing ?? false,
      [cat]: !categories[cat],
    }));
    setSaveSuccess(false);
  };

  const handleSave = () => {
    saveConsentPreferences(categories);
    setOverrides(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookieCategories = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    saveConsentPreferences(allAccepted);
    setOverrides(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  const handleRejectAll = () => {
    const essentialOnly: CookieCategories = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    saveConsentPreferences(essentialOnly);
    setOverrides(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 lg:py-20">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#182A9A] hover:text-[#101F70] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/cookie-policy"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6573A8] hover:text-[#101F70] transition-colors"
          >
            <span>Read Complete Cookie Policy</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>

        {/* Page Header */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101F70] via-[#0D1959] to-[#101F70] text-white overflow-hidden mb-10 shadow-xl border border-[#DCE3FF]/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#182A9A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182A9A]/30 border border-[#DCE3FF]/30 text-[#DCE3FF] text-xs font-bold uppercase tracking-wider mb-4">
              <Sliders className="h-3.5 w-3.5" />
              <span>Consent Management</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Cookie Preferences
            </h1>
            <p className="text-sm sm:text-base text-[#DCE3FF]/90 leading-relaxed">
              Customize how CademyX utilizes cookies and browser data during your academic guidance sessions. You can review each cookie classification below and update your consent settings at any time.
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mb-8 p-5 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#101F70] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#6573A8]">
                Current Consent Status
              </p>
              <p className="text-sm font-bold text-[#101F70]">
                {consent ? (
                  `Preferences Recorded (${new Date(consent.timestamp).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })})`
                ) : (
                  'Default Privacy Baseline (Essential Cookies Only)'
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#101F70] text-white hover:bg-[#182A9A] transition-colors shadow-sm"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleRejectAll}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#26345C] border border-[#DCE3FF] hover:bg-slate-50 transition-colors"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {saveSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Preferences saved successfully!</strong> Your updated cookie permissions have taken immediate effect.
            </span>
          </div>
        )}

        {/* Categories Stack */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* 1. Strictly Necessary */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#DCE3FF] bg-slate-50/70 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-[#101F70]/10 text-[#101F70]">
                    <Lock className="w-4 h-4" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#101F70]">
                    Strictly Necessary Cookies
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#101F70] text-white">
                    Always Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                  These cookies are mandatory for core website security, authenticating consultation inquiries, preserving navigation integrity, and maintaining your privacy selections. Without them, the platform cannot function safely.
                </p>
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-[#6573A8] uppercase tracking-wider mb-1">
                    Examples &amp; Purpose:
                  </p>
                  <ul className="text-xs text-[#6573A8] space-y-1 list-disc pl-4">
                    <li><code className="text-[#101F70] bg-white px-1.5 py-0.5 rounded border border-[#DCE3FF]">cademyx_cookie_consent_v1</code>: Records your consent preferences (Retention: 1 year).</li>
                    <li><code className="text-[#101F70] bg-white px-1.5 py-0.5 rounded border border-[#DCE3FF]">cademyx_welcome_popup_dismissed_v1</code>: Prevents repetitive greeting dialogues (Retention: 180 days).</li>
                    <li>Session tokens &amp; CSRF protection headers for secure consultation requests.</li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <div
                  className="w-12 h-6 rounded-full bg-[#101F70] opacity-80 cursor-not-allowed flex items-center px-1"
                  aria-label="Strictly necessary cookies cannot be disabled"
                >
                  <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Functional */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#DCE3FF] bg-white hover:border-[#182A9A]/40 transition-all shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-[#182A9A]/10 text-[#182A9A]">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#101F70]">
                    Functional Cookies
                  </h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${categories.functional ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                    {categories.functional ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                  Functional cookies remember your regional preferences, timezone settings, and enable seamless integration with our interactive 30-minute consultation scheduler (Calendly).
                </p>
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-[#6573A8] uppercase tracking-wider mb-1">
                    Examples &amp; Purpose:
                  </p>
                  <ul className="text-xs text-[#6573A8] space-y-1 list-disc pl-4">
                    <li>Calendly scheduling cache to avoid re-entering details across multiple consultation windows.</li>
                    <li>Timezone detection for real-time calendar synchronization.</li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <button
                  type="button"
                  onClick={() => toggleCategory('functional')}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#182A9A] ${
                    categories.functional ? 'bg-[#101F70]' : 'bg-slate-300'
                  }`}
                  aria-pressed={categories.functional}
                  aria-label="Toggle functional cookies"
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      categories.functional ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Analytics */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#DCE3FF] bg-white hover:border-[#182A9A]/40 transition-all shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-[#182A9A]/10 text-[#182A9A]">
                    <Info className="w-4 h-4" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#101F70]">
                    Performance &amp; Analytics Cookies
                  </h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${categories.analytics ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                    {categories.analytics ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                  These collect anonymous telemetry regarding which academic disciplines receive the highest engagement, page load speeds, and broken link diagnostics. No personally identifiable profiling is performed.
                </p>
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-[#6573A8] uppercase tracking-wider mb-1">
                    Examples &amp; Purpose:
                  </p>
                  <ul className="text-xs text-[#6573A8] space-y-1 list-disc pl-4">
                    <li>Aggregated page view durations and curriculum discovery paths.</li>
                    <li>Core Web Vitals performance benchmarks across desktop and mobile devices.</li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <button
                  type="button"
                  onClick={() => toggleCategory('analytics')}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#182A9A] ${
                    categories.analytics ? 'bg-[#101F70]' : 'bg-slate-300'
                  }`}
                  aria-pressed={categories.analytics}
                  aria-label="Toggle analytics cookies"
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      categories.analytics ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 4. Marketing */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#DCE3FF] bg-white hover:border-[#182A9A]/40 transition-all shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-[#182A9A]/10 text-[#182A9A]">
                    <Sliders className="w-4 h-4" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#101F70]">
                    Marketing &amp; Outreach Cookies
                  </h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${categories.marketing ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                    {categories.marketing ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                  Used exclusively to avoid repeating informational announcements to existing advisory candidates across academic discovery channels.
                </p>
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-[#6573A8] uppercase tracking-wider mb-1">
                    Examples &amp; Purpose:
                  </p>
                  <ul className="text-xs text-[#6573A8] space-y-1 list-disc pl-4">
                    <li>Deduplicating academic cohort deadline notifications.</li>
                    <li>Preventing unwanted promotion across external search platforms.</li>
                  </ul>
                </div>
              </div>
              <div className="shrink-0 pt-1">
                <button
                  type="button"
                  onClick={() => toggleCategory('marketing')}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#182A9A] ${
                    categories.marketing ? 'bg-[#101F70]' : 'bg-slate-300'
                  }`}
                  aria-pressed={categories.marketing}
                  aria-label="Toggle marketing cookies"
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      categories.marketing ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls Footer */}
        <div className="mt-10 max-w-4xl mx-auto pt-6 border-t border-[#DCE3FF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6573A8] text-center sm:text-left">
            Need more information? Read our detailed{' '}
            <Link href="/cookie-policy" className="text-[#182A9A] font-semibold hover:underline">
              Cookie Policy
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="text-[#182A9A] font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#101F70] text-white hover:bg-[#182A9A] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Save Preferences</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
