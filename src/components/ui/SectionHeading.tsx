import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWords?: string;
  description?: string;
  align?: 'left' | 'center';
  isDarkTheme?: boolean;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWords,
  description,
  align = 'left',
  isDarkTheme = false,
  action,
  className,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-10 lg:mb-14',
        isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border',
            isCentered && 'justify-center',
            isDarkTheme
              ? 'bg-[#182A9A]/30 border-[#DCE3FF]/30 text-[#DCE3FF]'
              : 'bg-[#F3F5FF] border-[#DCE3FF] text-[#182A9A]'
          )}
        >
          <Sparkles className={cn('h-3 w-3', isDarkTheme ? 'text-[#DCE3FF]' : 'text-[#182A9A]')} aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={cn(
          'section-headline font-extrabold tracking-tight',
          isDarkTheme ? 'text-white' : 'text-[#101F70]'
        )}
      >
        {highlightWords && title.includes(highlightWords) ? (
          <>
            {title.split(highlightWords)[0]}
            <span className={isDarkTheme ? 'text-[#DCE3FF]' : 'text-[#182A9A]'}>{highlightWords}</span>
            {title.split(highlightWords)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            isDarkTheme ? 'text-[#DCE3FF]' : 'text-[#26345C]'
          )}
        >
          {description}
        </p>
      )}

      {action && (
        <div className={cn('mt-6', isCentered && 'flex justify-center')}>
          {action}
        </div>
      )}
    </div>
  );
};
