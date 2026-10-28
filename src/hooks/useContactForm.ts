'use client';

import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormSchemaType } from '@/lib/validations';
import { SubmissionStatus } from '@/types/contact';
import { markSubmissionSuccess } from '@/lib/enquirySession';

export interface UseContactFormProps {
  defaultProgramSlug?: string;
  defaultInquiryType?: 'Program Inquiry' | 'Academic Guidance' | 'General Question' | 'Partnership' | 'Other';
}

export function useContactForm({
  defaultProgramSlug = '',
  defaultInquiryType = 'Program Inquiry',
}: UseContactFormProps = {}) {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
    setValue,
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      inquiryType: defaultInquiryType,
      programSlug: defaultProgramSlug,
      subject: '',
      message: '',
      consent: false as unknown as true,
    },
    mode: 'onTouched',
  });

  const onSubmit = useCallback(
    async (data: ContactFormSchemaType) => {
      setStatus('submitting');
      setErrorMessage(null);

      try {
        const response = await fetch('/api/enquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            program: data.programSlug,
            category: data.inquiryType,
            subject: data.subject,
            message: data.message,
            hp: (data as unknown as { hp?: string }).hp,
            source: 'Contact Page Consultation Form',
          }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.error ||
              'Unable to process your consultation request at this time. Please try again or reach out directly.'
          );
        }

        setStatus('success');
        markSubmissionSuccess();
        reset();
      } catch (err: unknown) {
        setStatus('error');
        setErrorMessage(
          err instanceof Error
            ? err.message
            : 'Unable to deliver message at this time. Please try again.'
        );
      }
    },
    [reset]
  );

  const resetStatus = useCallback(() => {
    setStatus('idle');
    setErrorMessage(null);
  }, []);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: isSubmitting || status === 'submitting',
    status,
    errorMessage,
    resetStatus,
    setValue,
    isValid,
  };
}
