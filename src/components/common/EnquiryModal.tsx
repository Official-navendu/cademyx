'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, CheckCircle2, ShieldCheck, Send, GraduationCap, AlertCircle } from 'lucide-react';
import { programs, PROGRAM_CATEGORIES } from '@/data/programs';
import { Button } from '@/components/ui/Button';
import { registerModalOpen, navigateToThankYou } from '@/lib/enquirySession';

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialProgramSlug?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  source?: string;
  onSuccess?: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  targetProgram: string;
  notes: string;
  consent: boolean;
  hp?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Bachelor',
  initialProgramSlug,
  title,
  subtitle,
  eyebrow,
  source,
  onSuccess,
}) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-resolve initial category if a program slug was passed
  const resolveInitialState = () => {
    const matched = initialProgramSlug ? programs.find((p) => p.slug === initialProgramSlug) : null;
    return {
      category: matched ? matched.category : initialCategory,
      targetProgram: matched ? matched.slug : initialProgramSlug || 'general-advisory',
    };
  };

  const initialResolved = resolveInitialState();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    category: initialResolved.category,
    targetProgram: initialResolved.targetProgram,
    notes: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [prevProps, setPrevProps] = useState({ isOpen, initialCategory, initialProgramSlug });

  if (
    prevProps.isOpen !== isOpen ||
    prevProps.initialCategory !== initialCategory ||
    prevProps.initialProgramSlug !== initialProgramSlug
  ) {
    setPrevProps({ isOpen, initialCategory, initialProgramSlug });
    if (isOpen) {
      const resolved = resolveInitialState();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        category: resolved.category,
        targetProgram: resolved.targetProgram,
        notes: '',
        consent: true,
      });
      setErrors({});
      setSubmitError(null);
      setIsSubmitted(false);
    }
  }

  // Register active modal and close on Escape key & manage scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const unregister = registerModalOpen();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      unregister();
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid contact number';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to the privacy policy to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const selectedProg = programs.find((p) => p.slug === formData.targetProgram);
      const programTitle = selectedProg
        ? selectedProg.title
        : formData.targetProgram === 'general-advisory'
        ? 'General Academic Advisory'
        : formData.targetProgram;

      const submissionSource =
        source ||
        (initialProgramSlug
          ? `Program Detail Modal (${initialProgramSlug})`
          : 'Global Enquiry Modal');

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          program: programTitle,
          targetProgram: formData.targetProgram,
          message: formData.notes,
          hp: formData.hp,
          source: submissionSource,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || 'Unable to deliver your consultation request at this time.'
        );
      }

      setIsSubmitting(false);
      const originatingUrl =
        typeof window !== 'undefined'
          ? window.location.pathname + window.location.search
          : '/';
      navigateToThankYou(originatingUrl, router);
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      setIsSubmitting(false);
      setSubmitError(
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      );
    }
  };

  const handleReset = () => {
    const resolved = resolveInitialState();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      category: resolved.category,
      targetProgram: resolved.targetProgram,
      notes: '',
      consent: true,
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  // Filter programs by selected category for dropdown
  const filteredPrograms = programs.filter((p) => p.category === formData.category);

  // Dynamic headings & copy
  const matchedProgram = initialProgramSlug ? programs.find((p) => p.slug === initialProgramSlug) : null;
  const displayTitle =
    title ||
    (matchedProgram
      ? `Interested in ${matchedProgram.title}?`
      : 'Request Academic Consultation');
  const displaySubtitle =
    subtitle ||
    (matchedProgram
      ? 'Have questions about eligibility, program details or your next academic step? Send us your enquiry.'
      : 'Connect directly with an academic mentor to evaluate your eligibility, review curriculum tracks, and receive structured admissions guidance.');
  const displayEyebrow =
    eyebrow || (matchedProgram ? `${matchedProgram.category} Advisory` : 'CademyX Academic Advisory');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101F70]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl max-h-[96dvh] sm:max-h-[88vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DCE3FF] overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200 mx-3 sm:mx-auto"
      >
        {/* Top Blue Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70] shrink-0" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2.5 right-2.5 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3F5FF] hover:bg-[#DCE3FF] text-[#101F70] flex items-center justify-center transition-colors z-20 cursor-pointer shadow-2xs"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="p-3.5 sm:p-7 md:p-8 overflow-y-auto overscroll-contain pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {/* Header */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2 pr-9 sm:pr-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#101F70] text-[#DCE3FF] flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#182A9A] uppercase tracking-wider block leading-none">
                {displayEyebrow}
              </span>
              <h2
                id="enquiry-modal-title"
                className="text-base sm:text-2xl font-extrabold text-[#101F70] tracking-tight leading-tight mt-0.5"
              >
                {displayTitle}
              </h2>
            </div>
          </div>

          <p className="text-[11px] sm:text-sm text-[#26345C] mb-2.5 sm:mb-5 leading-snug line-clamp-2 sm:line-clamp-none">
            {displaySubtitle}
          </p>

          {submitError && (
            <div
              role="alert"
              className="mb-3 sm:mb-5 p-2.5 sm:p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-900 text-xs sm:text-sm"
            >
              <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Submission Notice</p>
                <p className="mt-0.5 text-rose-700">{submitError}</p>
              </div>
            </div>
          )}

          {isSubmitted ? (
            /* Success State */
            <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#101F70]">
                Consultation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-[#26345C] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#101F70]">{formData.fullName}</strong>. Your consultation request for{' '}
                <strong className="text-[#101F70]">
                  {programs.find((p) => p.slug === formData.targetProgram)?.title ||
                    formData.targetProgram}
                </strong>{' '}
                has been recorded. A senior academic advisor will reach out within 1 business day.
              </p>
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#F3F5FF] border border-[#DCE3FF] text-xs text-[#26345C] max-w-sm mx-auto">
                Our educational advisory committee will reach out to you directly via{' '}
                <strong className="text-[#101F70]">{formData.email}</strong> or{' '}
                <strong className="text-[#101F70]">{formData.phone}</strong>.
              </div>
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onClose}
                  className="font-bold cursor-pointer"
                >
                  Done
                </Button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#182A9A] font-semibold hover:underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3.5">
              {/* Invisible spam-bot honeypot */}
              <input
                type="text"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.hp || ''}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                className="opacity-0 absolute -z-10 h-0 w-0 pointer-events-none"
              />

              {/* Full Name */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-[#101F70] uppercase tracking-wider mb-0.5 sm:mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3 py-1.5 sm:py-2.5 sm:px-3.5 rounded-lg sm:rounded-xl border text-xs sm:text-sm text-[#101F70] placeholder:text-[#6573A8] focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-rose-500 focus:ring-rose-200'
                      : 'border-[#DCE3FF] focus:border-[#182A9A] focus:ring-[#182A9A]/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[10px] text-rose-600 mt-0.5">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone in 2-Column Grid on Mobile and Desktop */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-[#101F70] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border text-xs sm:text-sm text-[#101F70] placeholder:text-[#6573A8] focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-200'
                        : 'border-[#DCE3FF] focus:border-[#182A9A] focus:ring-[#182A9A]/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-rose-600 mt-0.5 truncate">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-[#101F70] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                    Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone"
                    className={`w-full px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border text-xs sm:text-sm text-[#101F70] placeholder:text-[#6573A8] focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-500 focus:ring-rose-200'
                        : 'border-[#DCE3FF] focus:border-[#182A9A] focus:ring-[#182A9A]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-rose-600 mt-0.5 truncate">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Academic Level & Program Track in 2-Column Grid on Mobile and Desktop */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-[#101F70] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                    Academic Level
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      setFormData({
                        ...formData,
                        category: newCat,
                        targetProgram: 'general-advisory',
                      });
                    }}
                    className="w-full px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#DCE3FF] text-xs sm:text-sm text-[#101F70] bg-white focus:outline-none focus:border-[#182A9A] focus:ring-2 focus:ring-[#182A9A]/20 transition-all cursor-pointer truncate"
                  >
                    {PROGRAM_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat} Programs
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-[#101F70] uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
                    Specific Track
                  </label>
                  <select
                    value={formData.targetProgram}
                    onChange={(e) => setFormData({ ...formData, targetProgram: e.target.value })}
                    className="w-full px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#DCE3FF] text-xs sm:text-sm text-[#101F70] bg-white focus:outline-none focus:border-[#182A9A] focus:ring-2 focus:ring-[#182A9A]/20 transition-all cursor-pointer truncate"
                  >
                    <option value="general-advisory">General Advisory</option>
                    {filteredPrograms.map((prog) => (
                      <option key={prog.id} value={prog.slug}>
                        {prog.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-[#101F70] uppercase tracking-wider mb-0.5 sm:mb-1">
                  Questions or Current Academic Goals
                </label>
                <textarea
                  rows={1}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Academic background, target universities, or goals..."
                  className="w-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-[#DCE3FF] text-xs sm:text-sm text-[#101F70] placeholder:text-[#6573A8] focus:outline-none focus:border-[#182A9A] focus:ring-2 focus:ring-[#182A9A]/20 transition-all"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div>
                <label className="flex items-start gap-2 cursor-pointer text-[10px] sm:text-xs text-[#26345C] leading-tight">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 h-3.5 w-3.5 rounded border-[#DCE3FF] text-[#182A9A] focus:ring-[#182A9A]"
                  />
                  <span>
                    I agree to the processing of my academic details in accordance with the{' '}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className="text-[#182A9A] font-semibold underline hover:text-[#101F70]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[10px] text-rose-600 mt-0.5">{errors.consent}</p>
                )}
              </div>

              {/* Trust statement */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#6573A8] pt-0.5 sm:pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#182A9A] shrink-0" />
                <span>Strict academic privacy. We never share your details.</span>
              </div>

              <div className="pt-1.5 sm:pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  className="w-full font-bold shadow-md cursor-pointer py-2.5 sm:py-3.5 text-xs sm:text-sm"
                  trailingIcon={<Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                >
                  Request Academic Guidance
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
