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
        'group relative flex flex-col h-full bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#F4B72F] transition-all duration-300 hover:shadow-2xl overflow-hidden hover:-translate-y-2 gold-glow-card',
        className
      )}
    >
      {/* Top Gold Hover Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Visual Image Header - Clean with no overlaid badges/text */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#061B35]">
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
              'px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border',
              program.category === 'Bachelor'
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : program.category === 'Doctorate'
                ? 'bg-purple-50 text-purple-800 border-purple-200'
                : program.category === 'Masters'
                ? 'bg-blue-50 text-[#075AC8] border-blue-200'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            )}
          >
            {program.category}
          </span>

          {program.badge && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#F4B72F]/15 text-[#061B35] border border-[#F4B72F]/40">
              {program.badge}
            </span>
          )}
        </div>
        <h3 className="card-headline font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors leading-snug line-clamp-2">
          <Link
            href={`/programs/${program.slug}`}
            className="focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded-sm"
          >
            {program.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-[#152C45] leading-relaxed line-clamp-3 flex-1 font-normal">
          {program.shortDescription}
        </p>

        {/* Highlights / Metadata if available */}
        {program.highlights && program.highlights.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
            {program.highlights.slice(0, 2).map((h, i) => (
              <span
                key={i}
                className="text-xs font-medium text-[#152C45] bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-0.5 rounded-md"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-5 pt-4 border-t border-[#F8FAFC] flex items-center justify-between">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#061B35] group-hover:text-[#075AC8] transition-colors focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded-sm"
          >
            <span>View Program Details</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#075AC8]" />
          </Link>

          <Link
            href={`/contact?program=${program.slug}`}
            className="text-xs sm:text-sm text-[#D99519] bg-[#F4B72F]/15 hover:bg-[#F4B72F] hover:text-[#061B35] border border-[#F4B72F]/40 px-3 py-1 rounded-lg font-bold transition-all shadow-2xs"
            title={`Inquire about ${program.title}`}
          >
            Inquire
          </Link>
        </div>
      </div>
    </article>
  );
};
