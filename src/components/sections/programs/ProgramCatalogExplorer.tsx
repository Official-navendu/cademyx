'use client';

import React, { useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Program } from '@/types/program';
import { useProgramFilters } from '@/hooks/useProgramFilters';
import { ProgramsHero } from './ProgramsHero';
import { ProgramFilters } from './ProgramFilters';
import { ProgramGrid } from './ProgramGrid';
import { Pagination } from '@/components/ui/Pagination';
import { EmptyState } from '@/components/ui/EmptyState';
import { Container } from '@/components/ui/Container';

export interface ProgramCatalogExplorerProps {
  initialPrograms: Program[];
}

const ITEMS_PER_PAGE = 9;

export const ProgramCatalogExplorer: React.FC<ProgramCatalogExplorerProps> = ({
  initialPrograms,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedFormat,
    setSelectedFormat,
    filteredPrograms,
    hasActiveFilters,
    resetFilters,
    totalCount,
    filteredCount,
  } = useProgramFilters(initialPrograms);

  // Compute pagination parameters
  const totalPages = Math.max(1, Math.ceil(filteredCount / ITEMS_PER_PAGE));

  // Parse page from URL query param, gracefully handling invalid values
  const rawPage = searchParams.get('page');
  const parsedPage = rawPage ? parseInt(rawPage, 10) : 1;
  const currentPage = !isNaN(parsedPage) && parsedPage >= 1 ? Math.min(parsedPage, totalPages) : 1;

  // Paginated slice of programs
  const paginatedPrograms = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPrograms.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPrograms, currentPage]);

  // Navigate to target page and update URL query param
  const handlePageChange = (page: number) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      currentParams.delete('page');
    } else {
      currentParams.set('page', page.toString());
    }

    const query = currentParams.toString();
    const newUrl = query ? `${pathname}?${query}` : pathname;
    router.push(newUrl, { scroll: false });

    // Smooth scroll to top of catalogue grid
    const gridElem = document.getElementById('catalogue-grid');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Reset page to 1 whenever filters change
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (currentPage > 1) {
      handlePageChange(1);
    }
  };

  const handleFormatSelect = (format: string) => {
    setSelectedFormat(format);
    if (currentPage > 1) {
      handlePageChange(1);
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (currentPage > 1) {
      handlePageChange(1);
    }
  };

  const handleResetFilters = () => {
    resetFilters();
    handlePageChange(1);
  };

  // Range indicators
  const startIndex = filteredCount > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0;
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredCount);

  return (
    <>
      {/* Discovery Hero with Integrated Search & Categories */}
      <ProgramsHero
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClearSearch={() => handleSearchChange('')}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        totalCount={totalCount}
        filteredCount={filteredCount}
      />

      {/* Catalogue Grid Section */}
      <section id="catalogue-grid" className="py-12 sm:py-16 bg-[#F5F7FB] border-t border-[#E2E8F0]">
        <Container size="default">
          {/* Active Filter Bar & Counter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <ProgramFilters
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
              selectedFormat={selectedFormat}
              onSelectFormat={handleFormatSelect}
              hasActiveFilters={hasActiveFilters}
              onReset={handleResetFilters}
              totalCount={totalCount}
            />

            <div className="text-sm text-[#5A6A85] font-semibold shrink-0 sm:text-right">
              Showing <span className="text-[#061B35] font-bold">{startIndex}–{endIndex}</span> of{' '}
              <span className="font-bold text-[#061B35]">{filteredCount}</span> programs
              {totalPages > 1 && (
                <span className="text-xs text-[#7E96B8] block sm:inline sm:ml-2">
                  (Page {currentPage} of {totalPages})
                </span>
              )}
            </div>
          </div>

          {/* Results / Empty State */}
          {filteredCount > 0 ? (
            <div className="space-y-10">
              <ProgramGrid programs={paginatedPrograms} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <EmptyState
              title="No Programs Match Your Criteria"
              description="We could not find any academic tracks matching your current filters. Try searching for different keywords or resetting the filters."
              onReset={handleResetFilters}
              resetLabel="Clear All Filters"
            />
          )}
        </Container>
      </section>
    </>
  );
};
