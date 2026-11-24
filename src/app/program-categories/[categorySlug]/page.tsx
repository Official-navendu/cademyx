import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  BookOpen,
  ArrowRight,
  ChevronRight,
  Target,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { programs } from '@/data/programs';
import { CATEGORIES_DETAIL_DATA, CATEGORY_SLUGS } from '@/data/categories';
import { constructMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({
    categorySlug: slug,
  }));
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
    title: `${data.name} — Curriculum, Eligibility & Degrees | CademyX`,
    description: data.overview.slice(0, 155),
    canonical: `/program-categories/${data.slug}`,
  });
}

export default async function ProgramCategoryDetailPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const data = CATEGORIES_DETAIL_DATA[categorySlug];

  if (!data) {
    notFound();
  }

  // Find all programs belonging to this discipline
  const categoryPrograms = programs.filter(
    (p) => p.categorySlug === categorySlug || p.category === data.name
  );

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Category Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#101F70] via-[#101F70] to-[#0A1445] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#182A9A]/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#182A9A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DCE3FF]/20" />

        <Container size="default" className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#DCE3FF]/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#DCE3FF]/40" />
            <Link href="/programs" className="hover:text-white transition-colors">
              Programs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#DCE3FF]/40" />
            <span className="text-white font-medium">{data.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#DCE3FF]/30 text-xs font-semibold text-[#DCE3FF] uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#DCE3FF]" />
                <span>Academic Discipline</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {data.name}
              </h1>

              <p className="text-base sm:text-lg text-[#DCE3FF]/90 font-medium italic mb-5">
                {data.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#DCE3FF]/80 leading-relaxed mb-8">
                {data.overview}
              </p>

              {/* Quick Advisory Meta Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#DCE3FF]/20">
                {data.advisoryHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-white border border-[#DCE3FF]/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DCE3FF]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Header Image Container */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#DCE3FF]/30 shadow-2xl bg-[#101F70]">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101F70]/80 backdrop-blur-md border border-[#DCE3FF]/20 text-xs text-white">
                  <div className="font-bold mb-1">{data.name} Catalog</div>
                  <div className="text-[11px] text-[#DCE3FF]/80">
                    {categoryPrograms.length} Accredited Degree Programs &amp; Specializations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Target Audience & Prerequisites */}
      <section className="py-16 bg-[#F3F5FF] border-b border-[#DCE3FF]/60">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-[#DCE3FF] shadow-sm">
              <div className="flex items-center gap-2.5 text-[#182A9A] font-bold text-sm uppercase tracking-wider mb-3">
                <Target className="w-4 h-4" />
                <span>Target Audience &amp; Candidacy</span>
              </div>
              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                {data.targetAudience}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#DCE3FF] shadow-sm">
              <div className="flex items-center gap-2.5 text-[#182A9A] font-bold text-sm uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Prerequisites &amp; Academic Background</span>
              </div>
              <p className="text-xs sm:text-sm text-[#26345C] leading-relaxed">
                {data.prerequisites}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Popular Courses in Discipline */}
      {data.popularCourses && data.popularCourses.length > 0 && (
        <section className="py-20 bg-white border-b border-[#DCE3FF]/40">
          <Container size="default">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F5FF] border border-[#DCE3FF] text-[11px] font-bold uppercase tracking-wider text-[#182A9A] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Offerings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight">
                Popular Courses in {data.name}
              </h2>
              <p className="mt-2 text-sm text-[#26345C] max-w-2xl leading-relaxed">
                Explore the premier undergraduate and postgraduate tracks most frequently selected by scholars in this discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.popularCourses.map((course) => {
                const programRecord = programs.find((p) => p.slug === course.slug);
                const title = course.title;
                const badge = course.badge || programRecord?.badge || 'POPULAR';
                const image = programRecord?.image || data.image;
                const desc =
                  programRecord?.shortDescription ||
                  `Accredited ${title} degree pathway delivering comprehensive academic curriculum and verified university credentials.`;

                return (
                  <div
                    key={course.slug}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101F70]">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#182A9A] text-white text-[10px] font-bold tracking-wider uppercase">
                          {badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow p-5">
                      <h3 className="text-lg font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors mb-2">
                        {title}
                      </h3>
                      <p className="text-xs text-[#26345C]/80 line-clamp-3 leading-relaxed mb-5">
                        {desc}
                      </p>

                      <div className="mt-auto pt-4 border-t border-[#DCE3FF]/40">
                        <Link
                          href={`/programs/${course.slug}`}
                          className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#F3F5FF] hover:bg-[#182A9A] text-[#182A9A] hover:text-white font-semibold text-xs tracking-wide transition-colors border border-[#DCE3FF] hover:border-[#182A9A]"
                        >
                          <span>View Course Curriculum</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* 4. Complete Program Catalog for Discipline */}
      {categoryPrograms.length > 0 && (
        <section className="py-20 bg-[#F3F5FF] border-b border-[#DCE3FF]/60">
          <Container size="default">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight">
                All {data.name} Degree Programs ({categoryPrograms.length})
              </h2>
              <p className="mt-2 text-sm text-[#26345C] max-w-2xl leading-relaxed">
                Full directory of accredited university tracks available through CademyX academic counseling.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPrograms.map((p) => (
                <Link
                  key={p.id}
                  href={`/programs/${p.slug}`}
                  className="group flex flex-col p-5 rounded-2xl bg-white border border-[#DCE3FF] hover:border-[#182A9A] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-base font-bold text-[#101F70] group-hover:text-[#182A9A] transition-colors">
                      {p.title}
                    </span>
                    {p.badge && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#F3F5FF] text-[#182A9A] border border-[#DCE3FF] uppercase shrink-0">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#26345C]/80 line-clamp-2 leading-relaxed mb-4">
                    {p.shortDescription}
                  </p>
                  <div className="mt-auto pt-3 border-t border-[#DCE3FF]/40 flex items-center justify-between text-xs text-[#6573A8]">
                    <span>{p.duration || 'Full Track'}</span>
                    <span className="font-bold text-[#182A9A] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. Frequently Asked Questions */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-20 bg-white border-b border-[#DCE3FF]/40">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#182A9A] mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Advisory FAQs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F70] tracking-tight mb-8">
                Questions Regarding {data.name}
              </h2>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF]"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#101F70] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#26345C]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 6. Consultation CTA */}
      <section className="py-16 bg-[#101F70] text-white">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#182A9A]/40 to-transparent border border-[#DCE3FF]/20">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Ready to Apply in {data.name}?
              </h3>
              <p className="text-sm text-[#DCE3FF]/90 leading-relaxed">
                Receive personalized guidance on syllabus prerequisites, accredited university options, entrance requirements, and application deadlines.
              </p>
            </div>
            <Link
              href="/schedule-a-consultation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#101F70] hover:bg-[#F3F5FF] font-bold text-sm tracking-wide transition-all shrink-0 shadow-lg"
            >
              <span>Book Advisory Session</span>
              <ArrowRight className="w-4 h-4 text-[#182A9A]" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
