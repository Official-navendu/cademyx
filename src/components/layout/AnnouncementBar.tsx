import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Admissions announcement" className="relative bg-gradient-to-r from-[#041326] via-[#061B35] to-[#152C45] text-white text-xs py-2 overflow-hidden border-b border-[#075AC8]/40">
      <Container size="default">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center gap-1 font-bold text-[#F4B72F] tracking-wider uppercase text-[10px] bg-[#F4B72F]/15 border border-[#F4B72F]/40 px-2.5 py-0.5 rounded shadow-xs">
              <Sparkles className="h-3 w-3 text-[#F4B72F]" aria-hidden="true" />
              Advisory Cycle
            </span>
            <span className="text-[#D3E1F5] hidden sm:inline">
              Now accepting inquiries for upcoming academic honors &amp; college advisory cohorts.
            </span>
            <span className="text-[#D3E1F5] sm:hidden">
              Now accepting upcoming advisory cohorts.
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#BACCE4]">
            <Link
              href="/schedule-a-consultation"
              className="inline-flex items-center gap-1 font-bold text-[#F4B72F] hover:text-white transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
      {/* 1px bottom metallic gold accent rule */}
      <div className="gold-accent-line absolute bottom-0 left-0 right-0 opacity-80" />
    </aside>
  );
};
