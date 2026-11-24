import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Admissions announcement" className="relative bg-[#101F70] text-white text-xs py-2 overflow-hidden border-b border-[#DCE3FF]/20">
      <Container size="default">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center gap-1 font-bold text-white tracking-wider uppercase text-[10px] bg-[#182A9A] border border-[#DCE3FF]/30 px-2.5 py-0.5 rounded shadow-xs">
              <Sparkles className="h-3 w-3 text-[#DCE3FF]" aria-hidden="true" />
              Advisory Cycle
            </span>
            <span className="text-[#DCE3FF] hidden sm:inline">
              Now accepting inquiries for upcoming academic honors &amp; college advisory cohorts.
            </span>
            <span className="text-[#DCE3FF] sm:hidden">
              Now accepting upcoming advisory cohorts.
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#DCE3FF]">
            <Link
              href="/schedule-a-consultation"
              className="inline-flex items-center gap-1 font-bold text-white hover:text-[#DCE3FF] transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
      {/* 1px bottom accent rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#182A9A] to-transparent opacity-80" />
    </aside>
  );
};
