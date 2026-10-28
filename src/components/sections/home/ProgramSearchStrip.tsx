'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { programs, PROGRAM_CATEGORIES, CATEGORY_META } from '@/data/programs';
import { ProgramCategory } from '@/types/program';

export const ProgramSearchStrip: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter programs based on query and selected category
  const filteredResults = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return programs.filter((p) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!categoryMatch) return false;

      // If no query, don't show all 104 in preview unless search is focused with active category
      if (!query) return true;

      // Keyword / Title / Description match
      const titleMatch = p.title.toLowerCase().includes(query);
      const descMatch = p.description.toLowerCase().includes(query);
      const catMatch = p.category.toLowerCase().includes(query);
      const highlightMatch = p.highlights?.some((h) => h.toLowerCase().includes(query)) || false;

      return titleMatch || descMatch || catMatch || highlightMatch;
    });
  }, [searchTerm, selectedCategory]);

  const hasActiveFilters = searchTerm.trim().length > 0 || selectedCategory !== 'All';

  const handleClear = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative z-30 -mt-6 sm:-mt-8 px-4 sm:px-6">
      <Container size="default" className="max-w-5xl">
        <div ref={containerRef} className="relative">
          {/* Main Capsule Search Bar - CademyX Dark Theme */}
          <div className="bg-[#061B35] rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-2xl border border-[#152C45] hover:border-[#F4B72F]/50 transition-all duration-300 ring-1 ring-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
            >
              {/* Heading / Icon Badge */}
              <div className="hidden lg:flex items-center gap-2.5 pl-3.5 pr-3 py-1 shrink-0 border-r border-[#152C45]">
                <div className="w-8 h-8 rounded-full bg-[#075AC8] text-[#F4B72F] flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#F4B72F] uppercase tracking-wider block leading-none">
                    Fast Discovery
                  </span>
                  <span className="text-xs font-extrabold text-white leading-snug">
                    Find Your Ideal Program
                  </span>
                </div>
              </div>

              {/* Text Search Input */}
              <div className="relative flex-1 flex items-center">
                <Search className="w-4.5 h-4.5 text-[#F4B72F] absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder="Search 150+ programs (e.g. B.Tech, MBA, Data Science, PhD)..."
                  aria-label="Search academic programs"
                  className="w-full pl-10 pr-9 py-2.5 sm:py-2 text-sm text-white placeholder:text-slate-400 bg-[#152C45]/85 hover:bg-[#152C45] focus:bg-[#152C45] border border-[#203D5E] focus:border-[#F4B72F] rounded-xl sm:rounded-full focus:outline-none transition-colors"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search text"
                    className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Dropdown Filter */}
              <div className="shrink-0 flex items-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setIsOpen(true);
                  }}
                  aria-label="Filter by academic category"
                  className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#152C45]/85 hover:bg-[#152C45] border border-[#203D5E] rounded-xl sm:rounded-full focus:outline-none focus:ring-1 focus:ring-[#F4B72F]/50 transition-all cursor-pointer"
                >
                  <option value="All" className="bg-[#061B35] text-white">All Categories ({programs.length})</option>
                  {PROGRAM_CATEGORIES.map((cat) => {
                    const count = programs.filter((p) => p.category === cat).length;
                    return (
                      <option key={cat} value={cat} className="bg-[#061B35] text-white">
                        {cat} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-2.5 rounded-xl sm:rounded-full bg-gradient-to-r from-[#F4B72F] to-[#D99519] hover:from-[#E5A00F] hover:to-[#C68000] text-[#061B35] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#061B35]" />
                  <span>Search</span>
                </button>

                {/* Reset button when filter is active */}
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClear}
                    title="Reset search and filters"
                    aria-label="Reset search and filters"
                    className="p-2 sm:p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Interactive Results Dropdown Panel - Dark Theme */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#061B35] rounded-2xl shadow-2xl border border-[#152C45] overflow-hidden z-50 max-h-[460px] flex flex-col animate-in fade-in slide-in-from-top-2 duration-200 text-white ring-1 ring-white/10">
              {/* Results Header */}
              <div className="px-5 py-3 border-b border-[#152C45] bg-[#0A2342] flex items-center justify-between text-xs">
                <span className="font-bold text-white">
                  {filteredResults.length === 0
                    ? 'No matching programs'
                    : `Found ${filteredResults.length} program${filteredResults.length === 1 ? '' : 's'}`}
                  {selectedCategory !== 'All' && (
                    <span className="text-[#F4B72F] font-semibold ml-1">in {selectedCategory}</span>
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-slate-300 hover:text-white font-semibold cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              {/* Results List */}
              <div className="overflow-y-auto divide-y divide-[#152C45] p-2 space-y-1">
                {filteredResults.length === 0 ? (
                  <div className="py-10 text-center px-4">
                    <BookOpen className="w-10 h-10 text-[#152C45] mx-auto mb-2" />
                    <p className="text-sm font-bold text-white">No academic programs found</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      Try searching with broader terms like &quot;MBA&quot;, &quot;Computer Science&quot;, &quot;Doctorate&quot;, or select &quot;All Categories&quot;.
                    </p>
                    <button
                      type="button"
                      onClick={handleClear}
                      className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#152C45] text-[#F4B72F] text-xs font-bold hover:bg-[#F4B72F] hover:text-[#061B35] transition-all cursor-pointer"
                    >
                      <span>Reset Filters</span>
                    </button>
                  </div>
                ) : (
                  filteredResults.slice(0, 10).map((prog) => {
                    const meta = CATEGORY_META[prog.category as ProgramCategory];
                    return (
                      <Link
                        key={prog.id}
                        href={`/programs/${prog.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-start justify-between p-3 rounded-xl hover:bg-[#152C45] transition-all"
                      >
                        <div className="pr-4 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                meta?.badgeClass || 'bg-[#152C45] text-[#F4B72F]'
                              }`}
                            >
                              {prog.category}
                            </span>
                            {prog.badge && (
                              <span className="text-[10px] font-semibold text-[#F4B72F] bg-[#F4B72F]/15 px-2 py-0.5 rounded-full border border-[#F4B72F]/30">
                                {prog.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#F4B72F] transition-colors leading-snug">
                            {prog.title}
                          </h4>
                          <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                            {prog.description}
                          </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-[#F4B72F] group-hover:text-white pt-2">
                          <span className="hidden sm:inline">View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>

              {/* View all in catalog link */}
              {filteredResults.length > 10 && (
                <div className="p-3 bg-[#0A2342] border-t border-[#152C45] text-center">
                  <Link
                    href={`/programs?q=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(selectedCategory)}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-bold text-slate-200 hover:text-[#F4B72F] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View all {filteredResults.length} matching programs in complete catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4B72F]" />
                  </Link>
                </div>
              )}
            </div>
          )}

        </div>
      </Container>
    </section>
  );
};
