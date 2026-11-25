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
        {/* Section Heading & Description */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase bg-[#F3F5FF] border border-[#DCE3FF] text-[#182A9A] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#182A9A]" />
            <span>FAST DISCOVERY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101F70] tracking-tight">
            Find Your Ideal Program
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#26345C] max-w-lg mx-auto leading-relaxed">
            Explore academic disciplines, doctorate tracks, and professional certifications with guided clarity.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Main Capsule Search Bar - High Contrast CademyX Navy/White Theme */}
          <div className="bg-[#101F70] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-[#DCE3FF]/20 hover:border-[#182A9A] transition-all duration-300 ring-1 ring-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3"
            >
              {/* Text Search Input with Elevated Contrast */}
              <div className="relative flex-1 flex items-center">
                <Search className="w-5 h-5 text-[#182A9A] absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder="Search programs (e.g. MBA, Computer Science, Artificial Intelligence, PhD)..."
                  aria-label="Search academic programs"
                  className="w-full pl-11 pr-10 py-3 sm:py-3.5 text-sm sm:text-base text-[#101F70] placeholder:text-[#6573A8] bg-white border border-[#DCE3FF] focus:border-[#182A9A] focus:ring-2 focus:ring-[#182A9A]/20 rounded-xl sm:rounded-2xl focus:outline-none transition-all shadow-inner font-medium"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search text"
                    className="absolute right-3 p-1.5 rounded-full text-[#6573A8] hover:text-[#101F70] hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category Dropdown Filter — Clean Labels with ZERO Numbers */}
              <div className="shrink-0 flex items-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setIsOpen(true);
                  }}
                  aria-label="Filter by academic category"
                  className="w-full sm:w-auto px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white bg-[#182A9A] hover:bg-[#182A9A]/90 border border-white/20 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/40 transition-all cursor-pointer shadow-sm"
                >
                  <option value="All" className="bg-[#101F70] text-white">
                    All Categories
                  </option>
                  {PROGRAM_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#101F70] text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F3F5FF] text-[#101F70] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#182A9A]" />
                  <span>Search</span>
                </button>

                {/* Reset button when filter is active */}
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClear}
                    title="Reset search and filters"
                    aria-label="Reset search and filters"
                    className="p-2 sm:p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Clean Category Filter Quick-Pills — Clean labels, No numbers, Horizontally scrollable on mobile */}
          <div className="mt-3 sm:mt-3.5 overflow-hidden">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1 overscroll-contain">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setIsOpen(true);
                }}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  selectedCategory === 'All'
                    ? 'bg-[#182A9A] text-white ring-2 ring-[#182A9A]/30'
                    : 'bg-white text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A] border border-[#DCE3FF]'
                }`}
              >
                All Categories
              </button>
              {PROGRAM_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsOpen(true);
                  }}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
                    selectedCategory === cat
                      ? 'bg-[#182A9A] text-white ring-2 ring-[#182A9A]/30 font-bold'
                      : 'bg-white text-[#26345C] hover:bg-[#F3F5FF] hover:text-[#182A9A] border border-[#DCE3FF]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Results Dropdown Panel - Dark Theme */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#101F70] rounded-2xl shadow-2xl border border-[#DCE3FF]/20 overflow-hidden z-50 max-h-[460px] flex flex-col animate-in fade-in slide-in-from-top-2 duration-200 text-white ring-1 ring-white/10">
              {/* Results Header */}
              <div className="px-5 py-3 border-b border-[#DCE3FF]/20 bg-[#182A9A]/30 flex items-center justify-between text-xs">
                <span className="font-bold text-white">
                  {filteredResults.length === 0
                    ? 'No matching programs'
                    : `Found ${filteredResults.length} program${filteredResults.length === 1 ? '' : 's'}`}
                  {selectedCategory !== 'All' && (
                    <span className="text-[#DCE3FF] font-semibold ml-1">in {selectedCategory}</span>
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
              <div className="overflow-y-auto divide-y divide-[#DCE3FF]/15 p-2 space-y-1">
                {filteredResults.length === 0 ? (
                  <div className="py-10 text-center px-4">
                    <BookOpen className="w-10 h-10 text-[#DCE3FF]/40 mx-auto mb-2" />
                    <p className="text-sm font-bold text-white">No academic programs found</p>
                    <p className="text-xs text-[#DCE3FF]/80 mt-1 max-w-sm mx-auto">
                      Try searching with broader terms like &quot;MBA&quot;, &quot;Computer Science&quot;, &quot;Doctorate&quot;, or select &quot;All Categories&quot;.
                    </p>
                    <button
                      type="button"
                      onClick={handleClear}
                      className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#182A9A] text-white text-xs font-bold hover:bg-white hover:text-[#101F70] transition-all cursor-pointer"
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
                        className="group flex items-start justify-between p-3 rounded-xl hover:bg-[#182A9A]/30 transition-all"
                      >
                        <div className="pr-4 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                meta?.badgeClass || 'bg-[#182A9A] text-white'
                              }`}
                            >
                              {prog.category}
                            </span>
                            {prog.badge && (
                              <span className="text-[10px] font-semibold text-white bg-[#182A9A] px-2 py-0.5 rounded-full border border-[#DCE3FF]/30">
                                {prog.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#DCE3FF] transition-colors leading-snug">
                            {prog.title}
                          </h4>
                          <p className="text-xs text-[#DCE3FF]/80 line-clamp-1 mt-0.5">
                            {prog.description}
                          </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-[#DCE3FF] group-hover:text-white pt-2">
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
                <div className="p-3 bg-[#182A9A]/30 border-t border-[#DCE3FF]/20 text-center">
                  <Link
                    href={`/programs?q=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(selectedCategory)}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-bold text-[#DCE3FF] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View all {filteredResults.length} matching programs in complete catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DCE3FF]" />
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
