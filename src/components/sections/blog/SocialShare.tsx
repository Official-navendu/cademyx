'use client';

import React, { useState } from 'react';
import { Check, Copy, Share2, Info } from 'lucide-react';

export interface SocialShareProps {
  url: string;
  title: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title, className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [instagramModalOpen, setInstagramModalOpen] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // Real, official sharing platform endpoints
  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgColor: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bgColor: 'hover:bg-[#0F1419] hover:text-white hover:border-[#0F1419]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgColor: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V10.13H5.06v8.37h2.8z" />
        </svg>
      ),
    },
  ];

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleInstagramShare = async () => {
    // Copy the link first
    await handleCopyLink();
    // Try native Web Share API if supported
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        return;
      } catch {
        // Fallback to modal instruction if dismissed or unsupported
      }
    }
    setInstagramModalOpen(true);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6573A8]">
        <Share2 className="w-3.5 h-3.5 text-[#182A9A]" />
        <span>Share Article</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Real Platform Share Links */}
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${item.name}`}
            title={`Share on ${item.name}`}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-[#F3F5FF] text-[#26345C] border border-[#DCE3FF] shadow-2xs transition-all duration-200 cursor-pointer ${item.bgColor}`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </a>
        ))}

        {/* Instagram Share (Honest clipboard flow + Web Share API) */}
        <button
          type="button"
          onClick={handleInstagramShare}
          aria-label="Share on Instagram (copies article URL)"
          title="Share to Instagram Story or Message"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-[#F3F5FF] text-[#26345C] border border-[#DCE3FF] hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent shadow-2xs transition-all duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="hidden sm:inline">Instagram</span>
        </button>

        {/* Copy Link Button with Live Tooltip Feedback */}
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Copy canonical article URL"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#182A9A] text-white hover:bg-[#101F70] border border-[#DCE3FF]/40 shadow-xs transition-all duration-200 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-white" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>

      {/* Instagram Instruction Modal / Dialog */}
      {instagramModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sharing to Instagram"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101F70]/70 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-[#DCE3FF] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#101F70]">Share on Instagram</h4>
                <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Article URL Copied to Clipboard
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F3F5FF] rounded-xl border border-[#DCE3FF] text-xs text-[#26345C] leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-[#182A9A] shrink-0 mt-0.5" />
              <span>
                Instagram does not provide a direct prefilled web-share endpoint. Your article link has been copied so you can paste it directly into an <strong>Instagram Story link sticker</strong>, <strong>Direct Message</strong>, or your <strong>Bio</strong>.
              </span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setInstagramModalOpen(false)}
                className="px-4 py-2 bg-[#182A9A] hover:bg-[#101F70] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
