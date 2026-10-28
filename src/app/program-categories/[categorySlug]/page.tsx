import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  GraduationCap,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  ChevronRight,
  Clock,
  Layers,
  Target,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { programs } from '@/data/programs';
import { CATEGORIES_DETAIL_DATA } from '@/data/categories';
import { constructMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return [
    { categorySlug: 'bachelor-programs' },
    { categorySlug: 'masters-programs' },
    { categorySlug: 'doctorate-programs' },
    { categorySlug: 'certification-programs' },
  ];
}

interface PageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const data = CATEGORIES_DETAIL_DATA[categorySlug];

  if (!data) {
    notFound();
  }

  return constructMetadata({
    title: `${data.title} — Academic Curriculum & Catalog`,
    description: data.overview.slice(0, 155),
    canonical: `/program-categories/${data.slug}`,
    image: '/assets/og.png',
  });
}

export default async function ProgramCategoryDetailPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const data = CATEGORIES_DETAIL_DATA[categorySlug];

  if (!data) {
    notFound();
  }

  // Filter all programs from central catalog belonging to this category
  const categoryPrograms = programs.filter((p) => p.category === data.category);

  // Icon mapping for header
  const categoryIcons: Record<string, React.ElementType> = {
    Bachelor: BookOpen,
    Masters: Sparkles,
    Doctorate: GraduationCap,
    Certifications: Award,
  };
  const MainIcon = categoryIcons[data.category] || GraduationCap;

  return (
    <main className="min-h-screen bg-[#FDFDFE]">
      {/* Category Hero Section */}
      <section className="relative overflow-hidden bg-[#061B35] text-white pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#075AC8] bg-grain">
        {/* Glow auroras */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#F4B72F]/[0.09] to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-gradient-to-t from-[#075AC8]/[0.2] to-transparent blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-[#BACCE4]">
              <li>
                <Link href="/" className="hover:text-[#F4B72F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#F4B72F]" />
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#F4B72F] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#F4B72F]" />
              </li>
              <li className="text-[#F4B72F] font-semibold" aria-current="page">
                {data.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#F4B72F]/35 text-[#F4B72F] text-xs font-bold uppercase tracking-wider mb-5">
              <MainIcon className="w-3.5 h-3.5 text-[#F4B72F]" />
              <span>{data.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {data.title}
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-[#F4B72F] leading-snug">
              {data.tagline}
            </p>

            <p className="mt-5 text-sm sm:text-base text-[#BACCE4] leading-relaxed max-w-3xl font-normal">
              {data.overview}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-[#075AC8]/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#7E96B8] block text-[11px] uppercase font-bold tracking-wider">
                  Catalog Depth
                </span>
                <span className="text-xl font-extrabold text-white mt-0.5 block">
                  {categoryPrograms.length} Tracks
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#7E96B8] block text-[11px] uppercase font-bold tracking-wider">
                  Academic Focus
                </span>
                <span className="text-sm font-bold text-[#F4B72F] mt-0.5 block truncate">
                  {data.disciplines.length} Disciplines
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#7E96B8] block text-[11px] uppercase font-bold tracking-wider">
                  Guidance Standard
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  1-on-1 Mentorship
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#7E96B8] block text-[11px] uppercase font-bold tracking-wider">
                  Advisory Mode
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  Global &amp; Hybrid
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Audience, Prerequisites & Scholastic Outcomes */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E2E8F0]">
        <Container size="default">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F4B72F]">
              Academic Candidacy &amp; Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061B35] mt-1.5 tracking-tight">
              Who This Academic Tier Is Engineered For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {/* 1. Target Audience */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center border border-[#075AC8] shadow-xs">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#061B35]">Target Audience</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {data.targetAudience}
              </p>
            </div>

            {/* 2. Prerequisites */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center border border-[#075AC8] shadow-xs">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#061B35]">Prerequisites &amp; Eligibility</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {data.prerequisites}
              </p>
            </div>

            {/* 3. Scholastic Outcomes */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#061B35] text-[#F4B72F] flex items-center justify-center border border-[#075AC8] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#F4B72F]" />
              </div>
              <h3 className="text-base font-bold text-[#061B35]">Scholastic Outcomes</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {data.scholasticOutcomes}
              </p>
            </div>
          </div>

          {/* Key Disciplines Sub-Tracks */}
          <div className="mt-14 pt-10 border-t border-[#E2E8F0]">
            <h3 className="text-lg sm:text-xl font-bold text-[#061B35] mb-6">
              Key Academic Disciplines Covered in This Category
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.disciplines.map((d) => (
                <div
                  key={d.name}
                  className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#F4B72F]/40 transition-colors"
                >
                  <h4 className="text-sm font-bold text-[#061B35]">{d.name}</h4>
                  <p className="text-xs text-[#556987] mt-1.5 leading-relaxed">{d.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {d.sampleTracks.map((st) => (
                      <span
                        key={st}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FEF8E9] text-[#D99519] border border-[#FDE6B0]"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Program Listing Grid from Central Data */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4B72F]">
                Central Program Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061B35] mt-1 tracking-tight">
                All {categoryPrograms.length} {data.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#556987] mt-1">
                Explore full curriculum specifications, career outcomes, and individual syllabus outlines.
              </p>
            </div>

            <Link
              href="/schedule-a-consultation"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#061B35] hover:bg-[#061B35] text-[#F4B72F] text-xs font-bold shadow-sm transition-all shrink-0"
            >
              <span>Consult an Advisor for This Tier</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F4B72F]" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPrograms.map((program) => (
              <div
                key={program.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#F4B72F] hover:shadow-xl transition-all duration-200 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-44 w-full bg-[#061B35] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  {program.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#D99519] border border-[#F4B72F]/30 shadow-xs">
                        {program.badge}
                      </span>
                    </div>
                  )}

                  {/* Discipline / Category indicator */}
                  {program.discipline && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#061B35]/80 text-[#BACCE4] backdrop-blur-xs">
                        {program.discipline}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-[#061B35] group-hover:text-[#F4B72F] transition-colors leading-snug line-clamp-1">
                    {program.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#556987] leading-relaxed line-clamp-2 flex-1">
                    {program.shortDescription}
                  </p>

                  {/* Meta details */}
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#64748B]">
                    {program.duration && (
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#F4B72F]" />
                        <span>{program.duration}</span>
                      </span>
                    )}
                    {program.format && (
                      <span className="flex items-center gap-1 font-medium text-slate-500">
                        <Layers className="w-3.5 h-3.5 text-slate-400" />
                        <span>{program.format}</span>
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#061B35] group-hover:text-[#F4B72F] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#F4B72F]"
                    >
                      <span>Explore Program Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F4B72F] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
