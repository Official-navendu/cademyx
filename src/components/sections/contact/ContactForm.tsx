'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { programs, getProgramBySlug } from '@/data/programs';
import { contactPageData } from '@/data/contact';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const rawProgramSlug = searchParams.get('program') || '';

  // Validate query parameter against actual programs dataset (never blindly trust raw query param)
  const preselectedProgram = getProgramBySlug(rawProgramSlug);
  const validatedSlug = preselectedProgram ? preselectedProgram.slug : '';

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    status,
    errorMessage,
    resetStatus,
    setValue,
  } = useContactForm({
    defaultProgramSlug: validatedSlug,
    defaultInquiryType: validatedSlug ? 'Program Inquiry' : 'Academic Guidance',
  });

  // Keep form in sync if search param changes dynamically
  useEffect(() => {
    if (validatedSlug) {
      setValue('programSlug', validatedSlug);
      setValue('inquiryType', 'Program Inquiry');
    }
  }, [validatedSlug, setValue]);

  // Program options array for dropdown
  const programOptions = [
    { value: '', label: 'General / No specific program selected' },
    ...programs.map((p) => ({
      value: p.slug,
      label: `${p.title} (${p.category})`,
    })),
  ];

  return (
    <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl hover:border-[#F4B72F]/40 transition-all duration-300 overflow-hidden">
      {/* Top gold bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#F4B72F]" />

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061B35]">
          Schedule a Consultation
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#5A6A85]">
          Complete this form to connect with an academic advisor. All consultations are confidential.
        </p>
      </div>

      {/* Preselected Program Notification Banner */}
      {preselectedProgram && status !== 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#F4B72F]/15 to-[#F4B72F]/15 border border-[#F4B72F]/35 flex items-center gap-3 text-sm text-[#D99519]">
          <BookOpen className="h-4 w-4 text-[#F4B72F] shrink-0" />
          <span>
            Inquiring about:{' '}
            <strong className="font-bold text-[#061B35]">{preselectedProgram.title}</strong>
          </span>
        </div>
      )}

      {/* SUCCESS STATE */}
      {status === 'success' && (
        <div
          role="status"
          aria-live="polite"
          className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
        >
          <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <h3 className="text-xl font-bold text-emerald-950">
            Consultation Request Received
          </h3>

          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. An academic guidance advisor will review your information and contact you within 1 business day.
          </p>

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetStatus}
              className="border-emerald-300 text-emerald-900 hover:bg-emerald-100"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      )}

      {/* FORM STATE */}
      {status !== 'success' && (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Invisible honeypot field for spam prevention */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="opacity-0 absolute -z-10 h-0 w-0 pointer-events-none"
            {...register('hp')}
          />

          {/* Global submission error alert */}
          {status === 'error' && errorMessage && (
            <div
              role="alert"
              className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-900 text-xs sm:text-sm"
            >
              <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Submission Notice</p>
                <p className="mt-0.5 text-red-700">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              id="fullName"
              label="Full Name"
              required
              error={errors.fullName?.message}
            >
              <Input
                id="fullName"
                type="text"
                placeholder="e.g. Eleanor Vance"
                autoComplete="name"
                error={errors.fullName?.message}
                disabled={isSubmitting}
                {...register('fullName')}
              />
            </FormField>

            <FormField
              id="email"
              label="Email Address"
              required
              error={errors.email?.message}
            >
              <Input
                id="email"
                type="email"
                placeholder="e.g. eleanor@example.edu"
                autoComplete="email"
                error={errors.email?.message}
                disabled={isSubmitting}
                {...register('email')}
              />
            </FormField>
          </div>

          {/* Row 2: Phone & Inquiry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              id="phone"
              label="Telephone (Optional)"
              error={errors.phone?.message}
              hint="For SMS or scheduled callback"
            >
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
                error={errors.phone?.message}
                disabled={isSubmitting}
                {...register('phone')}
              />
            </FormField>

            <FormField
              id="inquiryType"
              label="Inquiry Category"
              required
              error={errors.inquiryType?.message}
            >
              <Select
                id="inquiryType"
                options={contactPageData.inquiryTypes}
                error={errors.inquiryType?.message}
                disabled={isSubmitting}
                {...register('inquiryType')}
              />
            </FormField>
          </div>

          {/* Row 3: Program of Interest & Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              id="programSlug"
              label="Academic Program (Optional)"
              error={errors.programSlug?.message}
            >
              <Select
                id="programSlug"
                options={programOptions}
                disabled={isSubmitting}
                {...register('programSlug')}
              />
            </FormField>

            <FormField
              id="subject"
              label="Subject / Topic (Optional)"
              error={errors.subject?.message}
            >
              <Input
                id="subject"
                type="text"
                placeholder="e.g. Fall 2025 Admissions Timeline"
                disabled={isSubmitting}
                {...register('subject')}
              />
            </FormField>
          </div>

          {/* Message Textarea */}
          <FormField
            id="message"
            label="How Can We Assist Your Academic Journey?"
            required
            error={errors.message?.message}
            hint="Describe your current academic standing, target schools, or specific questions."
          >
            <Textarea
              id="message"
              rows={4}
              placeholder="Tell us about your educational background and what you hope to achieve..."
              error={errors.message?.message}
              disabled={isSubmitting}
              {...register('message')}
            />
          </FormField>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <Checkbox
              id="consent"
              label={
                <span className="text-xs sm:text-sm text-[#334155]">
                  I agree that CademyX advisors may review my academic inquiry in accordance with the{' '}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="text-[#075AC8] font-semibold underline underline-offset-2 hover:text-[#061B35]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              }
              error={errors.consent?.message}
              disabled={isSubmitting}
              {...register('consent')}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              isLoading={isSubmitting}
              trailingIcon={!isSubmitting ? <Send className="h-4 w-4" /> : undefined}
              className="w-full sm:w-auto font-bold shadow-md hover:shadow-lg"
            >
              {isSubmitting ? 'Submitting Consultation Request...' : 'Send Consultation Inquiry'}
            </Button>
          </div>

          {/* Technical Note */}
          <p className="text-xs text-[#94A3B8] pt-2">
            Secure client-side validation powered by Zod and React Hook Form. Configured for direct API integration.
          </p>
        </form>
      )}
    </div>
  );
};
