'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Program } from '@/types/program';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/motion';

export interface ProgramGridProps {
  programs: Program[];
  className?: string;
}

export const ProgramGrid: React.FC<ProgramGridProps> = ({ programs, className }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8',
        className
      )}
    >
      <AnimatePresence mode="popLayout">
        {programs.map((program, idx) => (
          <motion.div
            key={program.id}
            variants={staggerItem}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProgramCard
              program={program}
              priority={idx < 3}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
