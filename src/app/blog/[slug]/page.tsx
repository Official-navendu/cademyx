import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Calendar,
  Clock,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blog';
import { SocialShare } from '@/components/sections/blog/SocialShare';
import { constructMetadata } from '@/lib/metadata';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return constructMetadata({
    title: `${post.title} | CademyX Journal`,
    description: post.excerpt,
    image: post.coverImage,
    canonical: `/blog/${post.slug}`,
    type: 'article',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cademyx.org';
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header & Ambient Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061B35] via-[#061B35] to-[#061B35] py-10 sm:py-14 lg:py-16 text-white border-b border-[#075AC8]/60 bg-grain">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#F4B72F]/15 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-academic-grid-dark opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
            className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#F4B72F] [&_span]:text-slate-100"
          />

          <div className="mt-6 max-w-4xl">
            {/* Category Pill & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4B72F] text-[#061B35] shadow-md border border-[#F4B72F]">
                {post.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#F4B72F]" />
                {post.readTime}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#F4B72F]" />
                {post.publishedAt}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            {/* Introductory Summary */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#BACCE4] leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author Credit */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#F4B72F] to-[#F4B72F] text-[#061B35] flex items-center justify-center font-extrabold text-sm shadow-md">
                CX
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {post.author.name}
                </div>
                <div className="text-xs text-[#BACCE4]">
                  {post.author.role}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Editorial Body Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Article Body (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Cover Image Frame */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-[#061B35]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>

              {/* Key Takeaways Box */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="p-6 sm:p-7 rounded-2xl bg-[#FEF8E9]/60 border border-[#FDE6B0] shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D99519]">
                    <Sparkles className="w-4 h-4 text-[#F4B72F]" />
                    <span>Executive Takeaways</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E293B]">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F4B72F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Structured Article Sections */}
              <div className="prose prose-slate max-w-none space-y-10 text-[#334155] leading-relaxed">
                {post.content.map((sec) => (
                  <section
                    key={sec.sectionId}
                    id={sec.sectionId}
                    className="scroll-mt-28 space-y-4"
                  >
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#061B35] tracking-tight">
                      {sec.heading}
                    </h2>

                    {sec.subheading && (
                      <p className="text-sm font-semibold text-[#64748B] italic">
                        {sec.subheading}
                      </p>
                    )}

                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base sm:text-lg text-[#334155] leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {/* Editorial Callout */}
                    {sec.callout && (
                      <div className="my-6 p-5 sm:p-6 rounded-xl border-l-4 border-[#F4B72F] bg-[#F8FAFC] shadow-2xs space-y-2">
                        <blockquote className="text-base sm:text-lg font-serif italic text-[#061B35] leading-snug">
                          &ldquo;{sec.callout.text}&rdquo;
                        </blockquote>
                        {sec.callout.citation && (
                          <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                            — {sec.callout.citation}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bullet Points */}
                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <ul className="my-4 space-y-2 bg-[#FBFBFE] p-5 rounded-xl border border-[#E2E8F0]">
                        {sec.bulletPoints.map((point, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-[#1E293B]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#F4B72F] mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Article-End Note & Social Sharing */}
              <div className="pt-8 border-t border-[#E2E8F0] space-y-6">
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#061B35]">
                      Looking for Individual Academic Guidance?
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 max-w-md">
                      Connect with a senior CademyX advisor to evaluate your scholastic profile and map out your next milestone.
                    </p>
                  </div>
                  <Link
                    href="/schedule-a-consultation"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#061B35] hover:bg-[#061B35] text-[#F4B72F] text-xs font-bold shadow-sm transition-colors shrink-0"
                  >
                    <span>Schedule Consultation</span>
                  </Link>
                </div>

                {/* Social Share Component */}
                <SocialShare url={articleUrl} title={post.title} />

                {/* Back to Blog Action */}
                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#061B35] hover:text-[#F4B72F] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to All Articles</span>
                  </Link>
                  <Link
                    href="/programs"
                    className="text-xs font-semibold text-[#64748B] hover:text-[#061B35] transition-colors"
                  >
                    Browse Program Directory →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar with Table of Contents & Mentorship Badge (4 cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* Table of Contents */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#061B35] mb-4 pb-2.5 border-b border-[#E2E8F0]">
                  <BookOpen className="w-4 h-4 text-[#F4B72F]" />
                  <span>Table of Contents</span>
                </div>
                <nav aria-label="Table of Contents">
                  <ul className="space-y-2 text-xs text-[#475569]">
                    {post.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-[#F4B72F] hover:underline transition-colors block py-1 font-medium leading-snug"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Sidebar Quick Share */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <SocialShare url={articleUrl} title={post.title} />
              </div>

              {/* Advisory Card */}
              <div className="p-6 rounded-2xl bg-[#061B35] text-white border border-[#075AC8] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4B72F]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F4B72F]/20 text-[#F4B72F] text-[10px] font-extrabold uppercase tracking-wider">
                    <Award className="w-3 h-3 text-[#F4B72F]" />
                    <span>Ethical Advisory</span>
                  </div>
                  <h4 className="text-base font-extrabold text-white leading-snug">
                    Schedule Your Academic Consultation
                  </h4>
                  <p className="text-xs text-[#BACCE4] leading-relaxed">
                    1-on-1 strategic mentorship designed around your authentic strengths, passions, and curricular fit.
                  </p>
                  <Link
                    href="/schedule-a-consultation"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F4B72F] to-[#F4B72F] hover:opacity-95 text-[#061B35] font-extrabold text-xs shadow-md transition-opacity"
                  >
                    <span>Schedule Now</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </article>
  );
}
