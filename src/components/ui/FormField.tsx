import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required,
  error,
  hint,
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-[#061B35] tracking-wide flex items-center gap-1 select-none"
        >
          <span>{label}</span>
          {required && (
            <span className="text-red-500 font-bold" aria-hidden="true">
              *
            </span>
          )}
          {required && <span className="sr-only">(required)</span>}
        </label>
      )}

      {children}

      {hint && !error && (
        <p className="text-xs text-[#152C45]/70 mt-0.5">{hint}</p>
      )}

      {error && (
        <p className="text-xs text-red-600 font-medium mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
