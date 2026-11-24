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
      <section className="relative overflow-hidden bg-[#101F70] py-10 sm:py-14 lg:py-16 text-white border-b border-[#DCE3FF]/20 bg-grain">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#182A9A]/30 to-transparent blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-academic-grid-dark opacity-40 pointer-events-none" />

        <Container size="default" className="relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
            className="py-1 text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#DCE3FF] [&_span]:text-slate-100"
          />

          <div className="mt-6 max-w-4xl">
            {/* Category Pill & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#182A9A] text-white shadow-md border border-[#DCE3FF]/40">
                {post.category}
              </span>
              <span className="text-xs text-[#DCE3FF] flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#DCE3FF]" />
                {post.readTime}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-[#DCE3FF] flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#DCE3FF]" />
                {post.publishedAt}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            {/* Introductory Summary */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#DCE3FF]/90 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author Credit */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center font-extrabold text-sm shadow-md border border-white/20">
                CX
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {post.author.name}
                </div>
                <div className="text-xs text-[#DCE3FF]/80">
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
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#DCE3FF] shadow-xl bg-[#101F70]">
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
                <div className="p-6 sm:p-7 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#182A9A]">
                    <Sparkles className="w-4 h-4 text-[#182A9A]" />
                    <span>Executive Takeaways</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#26345C]">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#182A9A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Structured Article Sections */}
              <div className="prose prose-slate max-w-none space-y-10 text-[#26345C] leading-relaxed">
                {post.content.map((sec) => (
                  <section
                    key={sec.sectionId}
                    id={sec.sectionId}
                    className="scroll-mt-28 space-y-4"
                  >
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#101F70] tracking-tight">
                      {sec.heading}
                    </h2>

                    {sec.subheading && (
                      <p className="text-sm font-semibold text-[#6573A8] italic">
                        {sec.subheading}
                      </p>
                    )}

                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base sm:text-lg text-[#26345C] leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {/* Editorial Callout */}
                    {sec.callout && (
                      <div className="my-6 p-5 sm:p-6 rounded-xl border-l-4 border-[#182A9A] bg-[#F3F5FF] shadow-2xs space-y-2">
                        <blockquote className="text-base sm:text-lg font-serif italic text-[#101F70] leading-snug">
                          &ldquo;{sec.callout.text}&rdquo;
                        </blockquote>
                        {sec.callout.citation && (
                          <div className="text-xs font-bold text-[#6573A8] uppercase tracking-wider">
                            — {sec.callout.citation}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bullet Points */}
                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <ul className="my-4 space-y-2 bg-[#F3F5FF]/60 p-5 rounded-xl border border-[#DCE3FF]">
                        {sec.bulletPoints.map((point, ptIdx) => (
                          <li
                            key={ptIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-[#26345C]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#182A9A] mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Article-End Note & Social Sharing */}
              <div className="pt-8 border-t border-[#DCE3FF] space-y-6">
                <div className="p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#101F70]">
                      Looking for Individual Academic Guidance?
                    </h4>
                    <p className="text-xs text-[#6573A8] mt-1 max-w-md">
                      Connect with a senior CademyX advisor to evaluate your scholastic profile and map out your next milestone.
                    </p>
                  </div>
                  <Link
                    href="/schedule-a-consultation"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#182A9A] hover:bg-[#101F70] text-white text-xs font-bold shadow-sm transition-colors shrink-0"
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
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#101F70] hover:text-[#182A9A] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to All Articles</span>
                  </Link>
                  <Link
                    href="/programs"
                    className="text-xs font-semibold text-[#6573A8] hover:text-[#101F70] transition-colors"
                  >
                    Browse Program Directory →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar with Table of Contents & Mentorship Badge (4 cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* Table of Contents */}
              <div className="p-6 rounded-2xl bg-[#F3F5FF] border border-[#DCE3FF] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#101F70] mb-4 pb-2.5 border-b border-[#DCE3FF]">
                  <BookOpen className="w-4 h-4 text-[#182A9A]" />
                  <span>Table of Contents</span>
                </div>
                <nav aria-label="Table of Contents">
                  <ul className="space-y-2 text-xs text-[#26345C]">
                    {post.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-[#182A9A] hover:underline transition-colors block py-1 font-medium leading-snug"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Sidebar Quick Share */}
              <div className="p-6 rounded-2xl bg-white border border-[#DCE3FF] shadow-xs">
                <SocialShare url={articleUrl} title={post.title} />
              </div>

              {/* Advisory Card */}
              <div className="p-6 rounded-2xl bg-[#101F70] text-white border border-[#DCE3FF]/20 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#182A9A]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#182A9A]/30 text-[#DCE3FF] text-[10px] font-extrabold uppercase tracking-wider">
                    <Award className="w-3 h-3 text-[#DCE3FF]" />
                    <span>Ethical Advisory</span>
                  </div>
                  <h4 className="text-base font-extrabold text-white leading-snug">
                    Schedule Your Academic Consultation
                  </h4>
                  <p className="text-xs text-[#DCE3FF]/90 leading-relaxed">
                    1-on-1 strategic mentorship designed around your authentic strengths, passions, and curricular fit.
                  </p>
                  <Link
                    href="/schedule-a-consultation"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#182A9A] hover:bg-[#0D1959] text-white font-extrabold text-xs shadow-md border border-[#DCE3FF]/30 transition-colors"
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
