# CademyX — Complete Premium Education Platform Frontend

A polished, trustworthy, and modern academic guidance website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically around the **CademyX** brand identity—featuring a distinctive deep navy-blue and gold aesthetic, rigorous typography, accessible interactions, and modular architecture.

---

## 1. Project Overview

CademyX is an education and academic advisory brand that equips secondary, collegiate, and postgraduate scholars with structured pathways, personalized guidance, and intellectual clarity.

This frontend application delivers:
- **Shared Layout & Brand Shell**: Sticky header with official CademyX branding, active navigation indicators, responsive mobile drawer menu, top admissions announcement banner, and comprehensive academic footer.
- **Home Page (`/`)**: 14-step information architecture—Announcement Bar, Header, Hero, Trust Highlights, Academic Program Categories, Curated Featured Programs, About CademyX Introduction, Academic Guidance & Mentorship Services, The CademyX Advantage, Four-Stage Learning Journey, Scholar Perspectives, Accordion FAQ, Strong Final Navy/Gold CTA, and Footer.
- **About Page (`/about`)**: Brand-story-first structure—Hero, Brand Story, dual Mission & Vision blocks, Core Value cards, 4-step Educational Approach, Audience Scope breakdown, and dedicated advisory CTA.
- **Programs Discovery Portal (`/programs`)**: Real-time client-side search across program titles, descriptions, and outcomes; category and format filters; URL query parameter category synchronization; clear filter resets; active result counters; and empty state handling.
- **Dynamic Program Detail Pages (`/programs/[slug]`)**: Static generation (`generateStaticParams`), dynamic metadata (`generateMetadata`), program overview, deliverable outcomes, curriculum framework, advisory scope, interactive fact-sheet sidebar, and related track suggestions with 404 handling.
- **Interactive Contact & Consultation (`/contact`)**: Multi-channel advisory details, validated inquiry form using **React Hook Form** + **Zod**, query parameter preselection (`/contact?program=stem-research-fellowship`), mock submission loading feedback, and accessible FAQ accordion.

---

## 2. Strategic Reference Analysis & Applied Patterns

Before implementation, four leading educational platforms were studied as strategic references for information architecture, UX hierarchy, academic positioning, and conversion flows:

### A. Course Discovery (Inspired by Henry Harvin)
- **Reference Insight**: Henry Harvin organizes high-volume catalogues using clear categorizations, modular highlights, and explicit inquiry entry-points, while suffering from visual clutter and aggressive sales prompts.
- **CademyX Implementation**: We adopted the structured multi-category exploration, modular learning outcomes, and prominent inquiry actions—while stripping away all marketing noise in favor of a restrained, high-trust academic editorial experience. All program details and outcomes are presented transparently without fabricated counts.

### B. Organized Program Architecture (Inspired by Eduminds Learning)
- **Reference Insight**: Eduminds structures programs cleanly across distinct academic levels (Bachelor's, Master's, Doctorate) and emphasizes flexible, future-ready learning with clear category pathways and upcoming batch information.
- **CademyX Implementation**: CademyX organizes its catalogue across 6 confirmed academic categories (*University Prep*, *STEM & Research*, *Global Pathways*, *Honors & Scholars*, *Humanities*, *Postgraduate*). The homepage features interactive category exploration tiles that seamlessly navigate into the filtered programs explorer with pre-selected filters.

### C. Academic Guidance Positioning (Inspired by Aimlay)
- **Reference Insight**: Aimlay positions itself around academic guidance, research support, PhD/doctoral assistance, and credential evaluation, helping learners navigate complex scholastic decisions.
- **CademyX Implementation**: We introduced a dedicated **Academic Guidance & Mentorship Services** section showcasing confirmed advisory capabilities: *Academic Profile Audits*, *Pre-Collegiate Research Mentorship*, *Admissions Narrative Guidance*, and *Postgraduate Thesis Advisory*.

### D. Contemporary Program Presentation (Inspired by Nextskilledge)
- **Reference Insight**: Nextskilledge demonstrates modern editorial cards, focused typography, clear pathway separation, and polished FAQs rather than an overcrowded marketplace.
- **CademyX Implementation**: Implemented clean, high-contrast cards with subtle hover elevation, clear typography hierarchy, WAI-ARIA accessible accordions, and unified design tokens.

---

## 3. Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict mode, fully typed domain models)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens (`src/styles/design-tokens.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Selective, respecting `prefers-reduced-motion`)
- **Icons**: [Lucide React](https://lucide.dev/) (Curated, tree-shaken icon mappings)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) via `@hookform/resolvers`
- **Typography**: Plus Jakarta Sans (`next/font/google`)

---

## 4. Brand Identity & Design Tokens

The application strictly implements the official CademyX brand palette:

| Token Name | Hex Value | Application |
| :--- | :--- | :--- |
| **Primary Navy** | `#0B1B3C` | Primary brand tone, header accents, primary buttons, card crests |
| **Dark Navy** | `#0A1430` | Top announcement bar, footer background, hero backdrop |
| **Navy Surface** | `#10234B` | Elevated dark cards, sidebar badges |
| **Gold** | `#D4A017` | High-emphasis CTAs, active highlights, icons, borders |
| **Light Gold** | `#F7D27A` | Secondary gold accents, badge text on navy, glowing borders |
| **Golden Gradient** | `linear-gradient(90deg, #D4A017 0%, #FFE08A 100%)` | Academic crests, accent lines, gradient text |
| **White** | `#FFFFFF` | Main background, contrast text on dark navy |
| **Light Gray** | `#F5F7FB` | Secondary section backgrounds, card containers |
| **Dark Text** | `#0F172A` | High-contrast editorial body text |

Design tokens are centralized in:
- `src/styles/design-tokens.css`
- `src/app/globals.css`
- `src/lib/constants.ts`

---

## 5. Brand Asset Convention

All official brand assets follow the clean naming convention:

- `/public/assets/brand/cademyx-logo.png` — Dark navy & gold logo on transparent background (for light backgrounds).
- `/public/assets/brand/cademyx-logo-white.png` — Pure white & gold logo on transparent background (for dark navy header/footer).
- `/public/assets/brand/cademyx-monogram.png` — High-resolution 512x512 emblem crest with academic cap, star, and CX geometry.
- `/public/favicon.ico` — Vector-derived 64x64 favicon.
- `/public/assets/images/*` — Section visuals and program illustrations.

---

## 6. Folder Architecture

```
cademyx/
├── public/
│   ├── assets/
│   │   ├── brand/
│   │   │   ├── cademyx-logo.png
│   │   │   ├── cademyx-logo-white.png
│   │   │   ├── cademyx-monogram.png
│   │   │   └── *.svg
│   │   └── images/
│   │       ├── home/
│   │       ├── about/
│   │       ├── programs/
│   │       └── contact/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML shell, fonts, SiteHeader & SiteFooter
│   │   ├── page.tsx                # Home page composing 14-step architecture
│   │   ├── globals.css             # Tailwind v4 import & token rules
│   │   ├── not-found.tsx           # Academic 404 page with navigation options
│   │   ├── error.tsx               # Route error boundary with retry triggers
│   │   ├── loading.tsx             # Route-level loading state
│   │   ├── robots.ts               # Search engine crawler directives
│   │   ├── sitemap.ts              # Dynamic XML sitemap generation
│   │   ├── about/
│   │   │   └── page.tsx            # About page composing 7 narrative sections
│   │   ├── programs/
│   │   │   ├── page.tsx            # Programs catalogue explorer
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Dynamic Program details with SSG & metadata
│   │   └── contact/
│   │       └── page.tsx            # Consultation booking & advisory inquiries
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx # Top advisory cycle announcement
│   │   │   ├── SiteHeader.tsx      # Sticky header with logo & navigation
│   │   │   ├── DesktopNavigation.tsx # Active link state navigation
│   │   │   ├── MobileNavigation.tsx  # Hamburger button controller
│   │   │   ├── MobileMenu.tsx      # Accessible slide-over drawer
│   │   │   ├── SiteFooter.tsx      # White logo, links, and contact channels
│   │   │   └── PageContainer.tsx   # Standardized container layout wrapper
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Multi-variant, accessible Link/Button
│   │   │   ├── SectionHeading.tsx  # Editorial section heading with eyebrow & alignment
│   │   │   ├── Breadcrumbs.tsx     # Semantic WAI-ARIA breadcrumbs
│   │   │   ├── Container.tsx       # Standardized responsive width wrapper
│   │   │   ├── Badge.tsx           # Category & status badges
│   │   │   ├── Input.tsx           # Accessible text input with error state
│   │   │   ├── Textarea.tsx        # Accessible textarea with error state
│   │   │   ├── Select.tsx          # Accessible select dropdown with custom chevron
│   │   │   ├── Checkbox.tsx        # Styled accessible checkbox with validation
│   │   │   ├── FormField.tsx       # Label, required indicator & error wrapper
│   │   │   ├── Accordion.tsx       # Accessible FAQ disclosure accordion
│   │   │   ├── EmptyState.tsx      # Filter/search empty result state with reset
│   │   │   ├── ErrorMessage.tsx    # Accessible alert banner with retry
│   │   │   └── LoadingState.tsx    # Accessible status spinner
│   │   │
│   │   ├── cards/
│   │   │   ├── FeatureCard.tsx     # Academic feature card with icon & badge
│   │   │   ├── ProgramCard.tsx     # Program catalog card with metadata tags
│   │   │   └── ValueCard.tsx       # Core value statement card
│   │   │
│   │   ├── providers/
│   │   │   └── MotionProvider.tsx  # Framer Motion config with reduced-motion support
│   │   │
│   │   └── sections/
│   │       ├── home/               # 12 dedicated home sections
│   │       ├── about/              # 7 dedicated about sections
│   │       ├── programs/           # Explorer, search, filters, details
│   │       └── contact/            # Hero, channels, consultation form, FAQ
│   │
│   ├── data/
│   │   ├── navigation.ts           # Central header and footer link definitions
│   │   ├── programs.ts             # Single source of truth for all programs
│   │   ├── home.ts                 # Central homepage copy, categories, and features
│   │   ├── about.ts                # Narrative history, mission, vision, values
│   │   ├── testimonials.ts         # Representative cohort reflection entries
│   │   ├── faqs.ts                 # Home & contact FAQ accordion records
│   │   └── contact.ts              # Office info, inquiry categories & channels
│   │
│   ├── hooks/
│   │   ├── useMobileMenu.ts        # Mobile drawer state & Escape listener
│   │   ├── useProgramFilters.ts    # Search, category, format & reset logic
│   │   └── useContactForm.ts       # React Hook Form + Zod submit workflow
│   │
│   ├── lib/
│   │   ├── utils.ts                # cn class combiner, slugify, truncate
│   │   ├── validations.ts          # Zod schema for contact inquiries
│   │   ├── constants.ts            # Brand constants & contact placeholders
│   │   └── metadata.ts             # SEO metadata generator helper
│   │
│   ├── types/
│   │   ├── common.ts               # Shared interfaces (Breadcrumbs, FAQs, Steps)
│   │   ├── navigation.ts           # Header and footer navigation types
│   │   ├── program.ts              # Program domain model & filter types
│   │   └── contact.ts              # Form data & submission status types
│   │
│   └── styles/
│       └── design-tokens.css       # Official brand CSS variables & utilities
│
├── scripts/
│   └── generate-assets.mjs         # Sharp script generating logos & section graphics
├── .env.example                    # Environment variable template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 7. Installation & Development

### Prerequisites
- Node.js `v20.x` or higher (tested on Node.js `v24.x`)
- npm `v10.x` or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Run Production Build
```bash
npm run build
npm run start
```

### 4. Run Lint Checks
```bash
npm run lint
```

---

## 8. Developer Guides

### How to Add a New Program
All program cards, search filters, related recommendations, and dynamic detail pages derive from `src/data/programs.ts`.

1. Open `src/data/programs.ts`.
2. Add a new object adhering to the `Program` type:
```typescript
{
  id: 'prog-07',
  slug: 'ai-data-science-scholars',
  title: 'AI & Data Science Scholars Track',
  category: 'STEM & Research',
  shortDescription: 'Foundational machine learning, Python data pipelines, and research mentorship.',
  description: 'Full program overview paragraph explaining the curriculum and mentorship structure...',
  image: '/assets/images/programs/ai-data-science-scholars.png',
  duration: '18 Weeks Cohort',
  format: 'Cohort-Based',
  eligibility: 'Students with algebra and basic Python programming experience',
  learningOutcomes: [
    'Original computational project repository',
    'Literature synthesis on ethical AI frameworks',
  ],
  curriculumHighlights: [
    'Python data structures and linear algebra review',
    'Neural network modeling with PyTorch',
  ],
  advisoryScope: [
    'Weekly synchronous seminars',
    'Code reviews with industry and faculty researchers',
  ],
  featured: true,
}
```
3. Save the file. The program will immediately appear in `/programs`, in category filters, on the homepage if marked `featured: true`, and at `/programs/ai-data-science-scholars`.

---

### How to Update Homepage Copy
All text, steps, features, and quotes are centralized in `src/data/home.ts`:
- **Hero Title & Subheading**: Modify `homeHeroData`.
- **Value Pillars**: Modify `trustHighlights`.
- **Academic Categories**: Modify `academicCategoriesData`.
- **Brand Introduction**: Modify `homeIntroductionData`.
- **Guidance & Mentorship Pillars**: Modify `guidanceServicesData`.
- **Why CademyX Blocks**: Modify `whyCademyXFeatures`.
- **Milestone Steps**: Modify `learningJourneySteps`.
- **Integrity Statements**: Modify `impactStatements`.
- **Final CTA Copy**: Modify `homeFinalCTA`.

---

### How the Contact Form Works & Connecting a Future Backend

The contact form is built with **React Hook Form** and **Zod** in `src/hooks/useContactForm.ts` and `src/components/sections/contact/ContactForm.tsx`:

- **Validation Rules** (`src/lib/validations.ts`):
  - `fullName`: Minimum 2 characters, trimmed.
  - `email`: Valid RFC email format.
  - `phone`: Optional, sanitized length.
  - `inquiryType`: Validated against accepted inquiry enum options.
  - `programSlug`: Validated against existing program records.
  - `message`: Minimum 10 characters, max 2000 characters.
  - `consent`: Required boolean acceptance.

- **Preselection via URL Query**:
  Navigating to `/contact?program=stem-research-fellowship` validates the slug and pre-selects the program in the dropdown with an alert pill.

- **Mock Submission Flow**:
  In `src/hooks/useContactForm.ts`, the `onSubmit` function simulates an asynchronous API round-trip with `contactPageData.mockSubmissionDelayMs` (1200ms delay), displaying a loading spinner and disabling duplicate submissions.

- **Connecting a Real Backend Endpoint**:
  Replace the mock timeout in `src/hooks/useContactForm.ts` with a real `fetch`:
  ```typescript
  const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API_URL || '/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Server error while saving inquiry. Please try again.');
  }
  ```

---

## 9. Business Items Requiring Owner Confirmation

In compliance with our ethical guidelines, the following business items are implemented as cleanly marked, configurable development placeholders in `src/lib/constants.ts` and `src/data/*`:

1. **Official Support Email**: Currently configured as `advisory@cademyx.org`.
2. **Official Telephone Line**: Currently configured as `+1 (800) 555-CADX`.
3. **Physical Office Address**: Currently configured as `Academic Advisory Center, Suite 400, Boston, MA 02108`.
4. **Official Social Media Handles**: LinkedIn, X/Twitter, and YouTube links should be connected once official handles are registered.
5. **Verified Student/Parent Testimonials**: `src/data/testimonials.ts` contains representative sample feedback clearly identified as developmental samples until official verified cohort releases.
6. **Official Production Domain**: Configured via `NEXT_PUBLIC_SITE_URL` in `.env.example` (defaulting to `https://cademyx.org`).

---

## 10. Accessibility & Standards

- Semantic HTML5 landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Dynamic, accessible headings (`h1` through `h4`) with logical hierarchy.
- ARIA attributes: `aria-expanded`, `aria-controls`, `aria-modal`, `aria-label`, `aria-invalid`, `role="region"`, `role="alert"`, `role="status"`, `aria-live="polite"`.
- Keyboard navigation: Full tab order, Enter and Space support on accordion toggles, Escape key listener on mobile menu drawer.
- Color contrast: Deep navy (`#0B1B3C`) against white exceeds WCAG AAA (16.2:1); Gold accents on navy exceed WCAG AA.
- `prefers-reduced-motion`: Configured globally via `MotionProvider.tsx` (`reducedMotion="user"`).

---

## 11. License

Copyright © 2026 CademyX Education Inc. All rights reserved.
