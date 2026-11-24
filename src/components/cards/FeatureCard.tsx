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
        'group relative flex flex-col h-full p-7 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden',
        className
      )}
    >
      {/* Top Blue Hover Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#182A9A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-13 w-13 rounded-2xl bg-[#F3F5FF] text-[#182A9A] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#182A9A] border border-[#DCE3FF] shadow-xs">
          <IconComponent className="h-6 w-6 stroke-[1.8]" />
        </div>

        {feature.badge && (
          <span className="text-xs font-bold text-[#101F70] bg-[#DCE3FF] px-3 py-1 rounded-full border border-[#DCE3FF] shadow-2xs">
            {feature.badge}
          </span>
        )}
      </div>

      <h3 className="card-headline font-bold text-[#101F70] leading-snug group-hover:text-[#182A9A] transition-colors">
        {feature.title}
      </h3>

      <p className="mt-3 text-sm text-[#26345C] leading-relaxed flex-1 font-normal">
        {feature.description}
      </p>

      {/* Animated Expanding Blue Accent Line */}
      <div className="mt-6 pt-4 border-t border-[#DCE3FF]/40">
        <div className="h-0.5 w-8 bg-gradient-to-r from-[#182A9A] to-[#101F70] transition-all duration-300 group-hover:w-full rounded-full" />
      </div>
    </div>
  );
};
