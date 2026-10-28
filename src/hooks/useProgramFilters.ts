'use client';

import { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Program } from '@/types/program';
import { PROGRAM_CATEGORIES } from '@/data/programs';

export function useProgramFilters(initialPrograms: Program[]) {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get('category') || '';

  const isCategoryValid = (cat: string) => (PROGRAM_CATEGORIES as readonly string[]).includes(cat);

  // Validate initial category against confirmed categories
  const initialValidCategory = isCategoryValid(queryCategory)
    ? queryCategory
    : 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialValidCategory);
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [prevQueryCategory, setPrevQueryCategory] = useState(queryCategory);

  // Sync if query param updates dynamically
  if (prevQueryCategory !== queryCategory) {
    setPrevQueryCategory(queryCategory);
    if (isCategoryValid(queryCategory)) {
      setSelectedCategory(queryCategory);
    }
  }

  const filteredPrograms = useMemo(() => {
    return initialPrograms.filter((program) => {
      // 1. Search Query filter (matches title, category, discipline, description, badge, or outcomes)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        program.title.toLowerCase().includes(q) ||
        program.category.toLowerCase().includes(q) ||
        (program.discipline && program.discipline.toLowerCase().includes(q)) ||
        program.shortDescription.toLowerCase().includes(q) ||
        program.description.toLowerCase().includes(q) ||
        (program.badge && program.badge.toLowerCase().includes(q)) ||
        (program.learningOutcomes &&
          program.learningOutcomes.some((outcome) =>
            outcome.toLowerCase().includes(q)
          ));

      // 2. Category filter
      const matchesCategory =
        selectedCategory === 'All' || program.category === selectedCategory;

      // 3. Format filter
      const matchesFormat =
        selectedFormat === 'All' || program.format === selectedFormat;

      return matchesSearch && matchesCategory && matchesFormat;
    });
  }, [initialPrograms, searchQuery, selectedCategory, selectedFormat]);

  const hasActiveFilters = useMemo(() => {
    return Boolean(
      searchQuery.trim() !== '' ||
        selectedCategory !== 'All' ||
        selectedFormat !== 'All'
    );
  }, [searchQuery, selectedCategory, selectedFormat]);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedFormat('All');
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedFormat,
    setSelectedFormat,
    filteredPrograms,
    hasActiveFilters,
    resetFilters,
    totalCount: initialPrograms.length,
    filteredCount: filteredPrograms.length,
  };
}
