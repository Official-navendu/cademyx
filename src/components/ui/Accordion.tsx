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
                ? 'bg-[#101F70] border-2 border-[#182A9A] shadow-[0_8px_28px_rgba(24,42,154,0.18)]'
                : 'bg-white border border-[#DCE3FF] hover:border-[#182A9A]/60 shadow-xs hover:shadow-sm'
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 group focus-visible:outline-2 focus-visible:outline-[#182A9A] cursor-pointer"
              >
                <span
                  className={cn(
                    'font-bold text-base sm:text-lg leading-snug transition-colors',
                    isOpen ? 'text-white' : 'text-[#101F70] group-hover:text-[#182A9A]'
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    'shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300',
                    isOpen
                      ? 'bg-[#182A9A] text-white rotate-180 shadow-sm'
                      : 'bg-[#F3F5FF] text-[#182A9A] group-hover:bg-[#DCE3FF]'
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
                  <div className="px-6 pb-6 pt-3 text-sm sm:text-base text-[#DCE3FF] leading-relaxed">
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
