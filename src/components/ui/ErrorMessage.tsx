import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Something Went Wrong',
  message,
  onRetry,
  className,
}) => {
  return (
    <div
      role="alert"
      className={cn(
        'p-5 sm:p-6 rounded-xl border border-red-200 bg-red-50/70 text-red-900',
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          <h4 className="font-bold text-sm text-red-900">{title}</h4>
          <p className="mt-1 text-xs sm:text-sm text-red-700 leading-relaxed">{message}</p>
          {onRetry && (
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                leadingIcon={<RefreshCw className="h-3.5 w-3.5" />}
                className="border-red-300 text-red-800 hover:bg-red-100"
              >
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
