import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getAllBlogPosts } from '@/data/blog';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Academic Insights & Guidance Journal | CademyX Blog',
  description:
    'Explore authoritative editorial perspectives on higher education trajectories, degree selection criteria, and strategic academic milestones.',
  canonical: '/blog',
  image: '/assets/og.png',
});

export default function BlogListingPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061B35] via-[#061B35] to-[#061B35] py-12 sm:py-16 lg:py-20 text-white border-b border-[#075AC8]/60 bg-grain">
        {/* Ambient Gold & Navy Glow */}
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#F4B72F]/15 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#075AC8]/35 blur-2xl"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-academic-grid-dark opacity-45 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <Breadcrumbs
            items={[{ label: 'Blog' }]}
            className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#F4B72F] [&_span]:text-slate-100"
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061B35]/90 border border-[#F4B72F]/40 text-xs font-bold mb-5 shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F4B72F]" />
                <span className="text-[11px] font-extrabold tracking-wider uppercase gold-gradient-text">
                  The CademyX Journal • Scholarly Insights
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Academic Direction, Curricular Strategy &amp; Mentorship Insights.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal max-w-xl">
                Thoughtful, evidence-informed perspectives designed to help students, researchers, and families navigate higher education choices with clarity and confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#BACCE4] border-t border-[#075AC8]/60 pt-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <BookOpen className="w-4 h-4 text-[#F4B72F]" />
                  <span>Curricular Analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-[#F4B72F]" />
                  <span>Admissions Roadmaps</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-[#F4B72F]" />
                  <span>Peer-Reviewed Strategy</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column — Blog Hero Image (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#075AC8]/60 shadow-2xl bg-[#061B35] group">
                <div className="aspect-[16/10] sm:aspect-[16/11] relative w-full overflow-hidden">
                  <Image
                    src="/assets/images/hero/blog-hero.jpg"
                    alt="CademyX Scholarly Research Environment & University Library"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Thin gold accent border line */}
                <div className="h-1 bg-gradient-to-r from-[#061B35] via-[#F4B72F] to-[#075AC8]" />
              </div>

              {/* Decorative accent glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#F4B72F]/20 to-[#075AC8]/20 blur-xl -z-10 opacity-70 pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Editorial Article Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <Container size="default">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4B72F]">
                Featured Article
              </span>
              <h2 className="text-2xl font-extrabold text-[#061B35] mt-1">
                Latest Editorial Publication
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#64748B] hidden sm:inline">
              1 Publication Available
            </span>
          </div>

          {featuredPost ? (
            <article className="group bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#F4B72F] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden gold-glow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Cover Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[340px] overflow-hidden bg-[#061B35]">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#061B35]/90 text-[#F4B72F] border border-[#F4B72F]/50 backdrop-blur-md shadow-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Article Card Content */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] mb-4">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#F4B72F]" />
                        {featuredPost.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#F4B72F]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#061B35] group-hover:text-[#061B35] leading-snug transition-colors">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="focus-visible:outline-2 focus-visible:outline-[#F4B72F] rounded-sm hover:underline decoration-[#F4B72F] underline-offset-4"
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>

                    {/* Takeaway Badges Preview */}
                    <div className="mt-6 pt-5 border-t border-[#F1F5F9] space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block">
                        Core Takeaways:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#334155]">
                        {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B72F] mt-1.5 shrink-0" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Author & CTA */}
                  <div className="mt-8 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#061B35] text-[#F4B72F] flex items-center justify-center font-bold text-xs border border-[#F4B72F]/40 shadow-2xs">
                        CX
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#061B35]">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[11px] text-[#64748B]">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#061B35] hover:bg-[#061B35] text-[#F4B72F] font-bold text-xs shadow-sm transition-all group-hover:gap-2.5"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F4B72F] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0] p-8">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#061B35]">Articles Coming Soon</h3>
              <p className="text-sm text-[#64748B] mt-1">
                Editorial analyses are currently being reviewed by the CademyX advisory board.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
