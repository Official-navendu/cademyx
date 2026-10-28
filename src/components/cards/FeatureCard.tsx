import React from 'react';
import {
  Compass,
  Milestone,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Target,
  GraduationCap,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import { FeatureItem } from '@/types/common';
import { cn } from '@/lib/utils';

const iconDictionary: Record<string, LucideIcon> = {
  Compass,
  Milestone,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Target,
  GraduationCap,
  BookOpen,
};

export interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className }) => {
  const IconComponent = iconDictionary[feature.iconName] || Compass;

  return (
    <div
      className={cn(
        'group relative flex flex-col h-full p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F4B72F] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 gold-glow-card overflow-hidden',
        className
      )}
    >
      {/* Top Gold Hover Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F4B72F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-13 w-13 rounded-2xl bg-gradient-to-br from-[#061B35] via-[#152C45] to-[#075AC8] text-[#F4B72F] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#F4B72F]/50 border border-[#075AC8]/40 shadow-xs">
          <IconComponent className="h-6 w-6 stroke-[1.8]" />
        </div>

        {feature.badge && (
          <span className="text-xs font-bold text-[#D99519] bg-[#F4B72F]/15 px-3 py-1 rounded-full border border-[#F4B72F]/35 shadow-2xs">
            {feature.badge}
          </span>
        )}
      </div>

      <h3 className="card-headline font-bold text-[#061B35] leading-snug group-hover:text-[#075AC8] transition-colors">
        {feature.title}
      </h3>

      <p className="mt-3 text-sm text-[#152C45] leading-relaxed flex-1 font-normal">
        {feature.description}
      </p>

      {/* Animated Expanding Gold Accent Line */}
      <div className="mt-6 pt-4 border-t border-[#F8FAFC]">
        <div className="h-0.5 w-8 bg-gradient-to-r from-[#F4B72F] to-[#D99519] transition-all duration-300 group-hover:w-full rounded-full" />
      </div>
    </div>
  );
};
