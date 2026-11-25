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
});

export default function BlogListingPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative overflow-hidden bg-[#101F70] py-12 sm:py-16 lg:py-20 text-white border-b border-[#DCE3FF]/20 bg-grain">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#182A9A]/30 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#182A9A]/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-academic-grid-dark opacity-45 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <Breadcrumbs
            items={[{ label: 'Blog' }]}
            className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#DCE3FF] [&_span]:text-slate-100"
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1959]/90 border border-[#DCE3FF]/30 text-xs font-bold mb-5 shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#DCE3FF]" />
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#DCE3FF]">
                  ACADEMIC PERSPECTIVES &amp; EDITORIALS
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Scholarly Analysis, Educational Trends, and Academic Guidance
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal max-w-xl">
                Read research-informed analyses on higher education trajectories, degree selection criteria, qualification requirements, and strategic academic milestones prepared by our advisory specialists.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#DCE3FF] border-t border-[#DCE3FF]/20 pt-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <BookOpen className="w-4 h-4 text-[#DCE3FF]" />
                  <span>Curricular Analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-[#DCE3FF]" />
                  <span>Admissions Roadmaps</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-[#DCE3FF]" />
                  <span>Peer-Reviewed Strategy</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column — Blog Hero Image (5 cols on lg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#DCE3FF]/30 shadow-2xl bg-[#101F70] group">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Thin blue accent border line */}
                <div className="h-1 bg-gradient-to-r from-[#101F70] via-[#182A9A] to-[#101F70]" />
              </div>

              {/* Decorative accent glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#182A9A]/20 to-[#101F70]/20 blur-xl -z-10 opacity-70 pointer-events-none" />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Editorial Article Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F3F5FF] border-b border-[#DCE3FF]">
        <Container size="default">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#DCE3FF]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#182A9A]">
                Featured Article
              </span>
              <h2 className="text-2xl font-extrabold text-[#101F70] mt-1">
                Latest Editorial Publication
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#6573A8] hidden sm:inline">
              1 Publication Available
            </span>
          </div>

          {featuredPost ? (
            <article className="group bg-white rounded-2xl border border-[#DCE3FF] hover:border-[#182A9A] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Cover Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[340px] overflow-hidden bg-[#101F70]">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F70]/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#101F70]/90 text-[#DCE3FF] border border-[#DCE3FF]/50 backdrop-blur-md shadow-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Article Card Content */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#6573A8] mb-4">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#182A9A]" />
                        {featuredPost.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#182A9A]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#101F70] group-hover:text-[#182A9A] leading-snug transition-colors">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="focus-visible:outline-2 focus-visible:outline-[#182A9A] rounded-sm hover:underline decoration-[#182A9A] underline-offset-4"
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-4 text-sm sm:text-base text-[#26345C] leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>

                    {/* Takeaway Badges Preview */}
                    <div className="mt-6 pt-5 border-t border-[#DCE3FF]/40 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6573A8] block">
                        Core Takeaways:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#26345C]">
                        {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#182A9A] mt-1.5 shrink-0" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Author & CTA */}
                  <div className="mt-8 pt-5 border-t border-[#DCE3FF]/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#101F70] text-[#DCE3FF] flex items-center justify-center font-bold text-xs border border-[#DCE3FF]/40 shadow-2xs">
                        CX
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#101F70]">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-[11px] text-[#6573A8]">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#182A9A] hover:bg-[#101F70] text-white font-bold text-xs shadow-sm transition-all group-hover:gap-2.5"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#DCE3FF] p-8">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#101F70]">Articles Coming Soon</h3>
              <p className="text-sm text-[#6573A8] mt-1">
                Editorial analyses are currently being reviewed by the CademyX advisory board.
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
