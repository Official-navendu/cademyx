import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'outline-gold' | 'gold' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leadingIcon,
  trailingIcon,
  children,
  className,
  ...rest
}) => {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-bold tracking-tight transition-all duration-250 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#182A9A] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-4 py-2 rounded-lg gap-2 shadow-xs',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2.5 shadow-sm',
    lg: 'text-base px-6 sm:px-7 py-3.5 rounded-xl gap-3 shadow-md font-extrabold',
  };

  const variantStyles: Record<ButtonVariant, string> = {
    // Primary: Royal Deep Blue with clean hover state
    primary:
      'bg-[#182A9A] text-white border border-[#182A9A] hover:bg-[#101F70] hover:border-[#101F70] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    // Gold: (Primary branded CTA) Royal Deep Blue to Deep Navy Blue gradient with light sweep
    gold:
      'bg-gradient-to-r from-[#182A9A] via-[#182A9A] to-[#101F70] text-white border border-[#182A9A] hover:from-[#101F70] hover:to-[#0B1650] hover:shadow-xl hover:-translate-y-0.5 btn-shine-sweep active:translate-y-0 font-extrabold',
    // Secondary: Deep Navy Blue base with subtle periwinkle border
    secondary:
      'bg-[#101F70] text-white hover:bg-[#182A9A] border border-[#DCE3FF]/20 hover:border-[#DCE3FF]/40 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    // Outline: Clean transparent background with Royal Deep Blue hover
    outline:
      'bg-transparent text-[#182A9A] border border-[#DCE3FF] hover:border-[#182A9A] hover:text-[#101F70] hover:bg-[#F3F5FF] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    // Outline Light: For dark navy backgrounds with white hover
    'outline-light':
      'bg-white/10 text-white border border-white/25 hover:border-white hover:bg-white hover:text-[#182A9A] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-xs',
    // Outline Gold: Crisp Royal Deep Blue outline
    'outline-gold':
      'bg-transparent text-[#182A9A] border border-[#182A9A] hover:bg-[#182A9A] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    // Text: Minimal link button with Royal Deep Blue hover
    text:
      'bg-transparent text-[#182A9A] hover:text-[#101F70] p-0 font-semibold underline-offset-4 hover:underline shadow-none',
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin text-current" aria-hidden="true" />
      ) : (
        leadingIcon && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:scale-105">{leadingIcon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {!isLoading && trailingIcon && (
        <span className="relative z-10 inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-1">
          {trailingIcon}
        </span>
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, isExternal, target, rel, ...linkProps } = rest as ButtonAsLink;
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
          {...linkProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button
      type={buttonProps.type || 'button'}
      disabled={isLoading || buttonProps.disabled}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...buttonProps}
    >
      {content}
    </button>
  );
};
