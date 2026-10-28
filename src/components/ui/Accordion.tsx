'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types/common';
import { cn } from '@/lib/utils';

export interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
  defaultOpenId,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : [items[0]?.id].filter(Boolean)
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3.5', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              'rounded-2xl transition-all duration-300 overflow-hidden',
              isOpen
                ? 'bg-[#061B35] border-2 border-[#F4B72F] shadow-[0_8px_28px_rgba(244,183,47,0.18)]'
                : 'bg-white border border-[#E2E8F0] hover:border-[#F4B72F]/60 shadow-xs hover:shadow-sm'
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 group focus-visible:outline-2 focus-visible:outline-[#F4B72F] cursor-pointer"
              >
                <span
                  className={cn(
                    'font-bold text-base sm:text-lg leading-snug transition-colors',
                    isOpen ? 'text-white' : 'text-[#061B35] group-hover:text-[#075AC8]'
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    'shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300',
                    isOpen
                      ? 'bg-[#F4B72F] text-[#061B35] rotate-180 shadow-sm'
                      : 'bg-[#F1F4F9] text-[#061B35] group-hover:bg-[#E2E8F0]'
                  )}
                >
                  <ChevronDown className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: { height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25, delay: 0.05 } },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { height: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.15 } },
                  }}
                  className="overflow-hidden border-t border-white/15"
                >
                  <div className="px-6 pb-6 pt-3 text-sm sm:text-base text-[#BACCE4] leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
