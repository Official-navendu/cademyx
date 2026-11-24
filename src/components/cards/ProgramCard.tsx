import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Program } from '@/types/program';
import { cn } from '@/lib/utils';

export interface ProgramCardProps {
  program: Program;
  className?: string;
  priority?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  className,
  priority = false,
}) => {
  return (
    <article
      className={cn(
        'group relative flex flex-col h-full bg-white rounded-2xl border border-[#DCE3FF] hover:border-[#182A9A] transition-all duration-300 hover:shadow-2xl overflow-hidden hover:-translate-y-2',
        className
      )}
    >
      {/* Top Blue Hover Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#182A9A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Visual Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101F70]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Category & Status Badge in content container below image */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={cn(
              'px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border border-[#DCE3FF] bg-[#F3F5FF] text-[#182A9A]'
            )}
          >
            {program.category}
          </span>

          {program.badge && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#DCE3FF] text-[#101F70] border border-[#DCE3FF]">
              {program.badge}
            </span>
          )}
        </div>
        <h3 className="card-headline font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors leading-snug line-clamp-2">
          <Link
            href={`/programs/${program.slug}`}
            className="focus-visible:outline-2 focus-visible:outline-[#182A9A] rounded-sm"
          >
            {program.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-[#26345C] leading-relaxed line-clamp-3 flex-1 font-normal">
          {program.shortDescription}
        </p>

        {/* Highlights / Metadata if available */}
        {program.highlights && program.highlights.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#DCE3FF]/40 flex flex-wrap gap-1.5">
            {program.highlights.slice(0, 2).map((h, i) => (
              <span
                key={i}
                className="text-xs font-medium text-[#26345C] bg-[#F3F5FF] border border-[#DCE3FF] px-2.5 py-0.5 rounded-md"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-5 pt-4 border-t border-[#DCE3FF]/40 flex items-center justify-between">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors focus-visible:outline-2 focus-visible:outline-[#182A9A] rounded-sm"
          >
            <span>View Program Details</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#182A9A]" />
          </Link>

          <Link
            href={`/contact?program=${program.slug}`}
            className="text-xs sm:text-sm text-[#182A9A] bg-[#F3F5FF] hover:bg-[#182A9A] hover:text-white border border-[#DCE3FF] px-3 py-1 rounded-lg font-bold transition-all shadow-2xs"
            title={`Inquire about ${program.title}`}
          >
            Inquire
          </Link>
        </div>
      </div>
    </article>
  );
};
