'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, CheckCircle2, ShieldCheck, Send, GraduationCap, AlertCircle } from 'lucide-react';
import { programs, PROGRAM_CATEGORIES } from '@/data/programs';
import { Button } from '@/components/ui/Button';

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialProgramSlug?: string;
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
}) => {
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

  // Close on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
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
      newErrors.phone = 'Contact telephone is required';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid phone number';
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
          source: initialProgramSlug
            ? `Program Detail Modal (${initialProgramSlug})`
            : 'Global Enquiry Modal',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || 'Unable to deliver your consultation request at this time.'
        );
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#061B35]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#CBD5E1] overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#D99519]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#152C45] flex items-center justify-center transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#D99519] uppercase tracking-wider block">
                CademyX Academic Advisory
              </span>
              <h2
                id="enquiry-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-[#061B35] tracking-tight"
              >
                Request Academic Consultation
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5A6A85] mb-6 leading-relaxed">
            Connect directly with an academic mentor to evaluate your eligibility, review curriculum tracks, and receive structured admissions guidance.
          </p>

          {/* Submission Feedback */}
          {submitError && (
            <div
              role="alert"
              className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-900 text-xs sm:text-sm"
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
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-extrabold text-[#061B35]">
                Consultation Request Received
              </h3>
              <p className="text-sm text-[#5A6A85] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#061B35]">{formData.fullName}</strong>. Your consultation request for{' '}
                <strong className="text-[#061B35]">
                  {programs.find((p) => p.slug === formData.targetProgram)?.title ||
                    formData.targetProgram}
                </strong>{' '}
                has been recorded. A senior academic advisor will reach out within 1 business day.
              </p>
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#5A6A85] max-w-sm mx-auto">
                Our educational advisory committee will reach out to you directly via{' '}
                <strong className="text-[#061B35]">{formData.email}</strong> or{' '}
                <strong className="text-[#061B35]">{formData.phone}</strong>.
              </div>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="gold"
                  size="md"
                  onClick={onClose}
                  className="font-bold cursor-pointer"
                >
                  Done
                </Button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#075AC8] font-semibold hover:underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label className="block text-xs font-bold text-[#061B35] uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#061B35] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-rose-500 focus:ring-rose-200'
                      : 'border-[#CBD5E1] focus:border-[#F4B72F] focus:ring-[#F4B72F]/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#061B35] uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#061B35] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-200'
                        : 'border-[#CBD5E1] focus:border-[#F4B72F] focus:ring-[#F4B72F]/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#061B35] uppercase tracking-wider mb-1">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 83758 97148"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#061B35] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-500 focus:ring-rose-200'
                        : 'border-[#CBD5E1] focus:border-[#F4B72F] focus:ring-[#F4B72F]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Academic Level & Program Track */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#061B35] uppercase tracking-wider mb-1">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-sm text-[#061B35] bg-white focus:outline-none focus:border-[#F4B72F] focus:ring-2 focus:ring-[#F4B72F]/20 transition-all cursor-pointer"
                  >
                    {PROGRAM_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat} Programs
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#061B35] uppercase tracking-wider mb-1">
                    Specific Program Track
                  </label>
                  <select
                    value={formData.targetProgram}
                    onChange={(e) => setFormData({ ...formData, targetProgram: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-sm text-[#061B35] bg-white focus:outline-none focus:border-[#F4B72F] focus:ring-2 focus:ring-[#F4B72F]/20 transition-all cursor-pointer"
                  >
                    <option value="general-advisory">General Advisory (Explore Options)</option>
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
                <label className="block text-xs font-bold text-[#061B35] uppercase tracking-wider mb-1">
                  Questions or Current Academic Goals
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your educational background, target universities, or desired career direction..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-sm text-[#061B35] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#F4B72F] focus:ring-2 focus:ring-[#F4B72F]/20 transition-all"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#334155]">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-[#CBD5E1] text-[#075AC8] focus:ring-[#F4B72F]"
                  />
                  <span>
                    I agree to the processing of my academic details in accordance with the{' '}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className="text-[#075AC8] font-semibold underline hover:text-[#061B35]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.consent}</p>
                )}
              </div>

              {/* Trust statement */}
              <div className="flex items-center gap-2 text-[11px] text-[#152C45]/70 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F4B72F] shrink-0" />
                <span>Strict academic privacy. We never share your details.</span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full font-bold shadow-md cursor-pointer"
                  trailingIcon={<Send className="w-4 h-4" />}
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
