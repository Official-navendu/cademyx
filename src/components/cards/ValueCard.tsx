import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Compass,
  type LucideIcon,
} from 'lucide-react';
import { ValueCardItem } from '@/types/common';
import { cn } from '@/lib/utils';

const valueIcons: Record<string, LucideIcon> = {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Compass,
};

export interface ValueCardProps {
  value: ValueCardItem;
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value, className }) => {
  const IconComponent = valueIcons[value.iconName] || Sparkles;

  return (
    <div
      className={cn(
        'group relative flex flex-col h-full p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F4B72F] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 gold-glow-card overflow-hidden',
        className
      )}
    >
      {/* Top Gold Hover Accent Rule */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="h-13 w-13 rounded-2xl bg-gradient-to-br from-[#061B35] via-[#152C45] to-[#075AC8] text-[#F4B72F] border border-[#075AC8]/40 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#F4B72F]/50 shadow-xs">
        <IconComponent className="h-6 w-6 stroke-[1.8]" />
      </div>

      <h3 className="card-headline font-bold text-[#061B35] mb-2.5 group-hover:text-[#075AC8] transition-colors">
        {value.title}
      </h3>

      <p className="text-sm text-[#152C45] leading-relaxed flex-1 font-normal">
        {value.description}
      </p>

      {/* Bottom Expanding Line on Hover */}
      <div className="mt-6 pt-4 border-t border-[#F8FAFC]">
        <div className="h-0.5 w-7 bg-gradient-to-r from-[#F4B72F] via-[#F4B72F] to-[#D99519] transition-all duration-300 group-hover:w-full rounded-full" />
      </div>
    </div>
  );
};
