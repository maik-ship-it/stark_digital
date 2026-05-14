import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CtaV2 from '@/components/sections/CtaV2'

export const metadata: Metadata = {
  title: 'About Maik Stark — Google Ads Specialist Dublin',
  description:
    'The story behind Stark Digital — how Maik Stark went from running Google Ads at a solar energy startup to becoming a specialist for professional services in Dublin and Ireland.',
  alternates: { canonical: 'https://starkdigital.ie/about' },
}

const values = [
  {
    title: 'Transparency first',
    description:
      'You always know exactly where your budget is going. Monthly reports, honest conversations, no smoke and mirrors.',
  },
  {
    title: 'Specialist, not generalist',
    description:
      "I don't work with e-commerce or retail. Professional services is my focus — it's where I can genuinely add value.",
  },
  {
    title: 'Results, not activity',
    description:
      "More campaigns, more keywords, more ad groups — that's not the goal. More qualified enquiries for your business is.",
  },
]

const journey = [
  {
    label: '01 — The starting point',
    heading: 'Learning Google Ads with real stakes',
    body: "I started running Google Ads at a solar energy startup — no agency, no formal training, no safety net. Just a limited budget, a product that needed leads, and the pressure of knowing that if the campaigns didn't work, neither did the business. I learned quickly that Google Ads isn't a set-it-and-forget-it tool. Every decision — keyword, bid, ad copy, landing page — has a cost attached. That context sharpens your thinking fast.",
  },
  {
    label: '02 — The expensive lessons',
    heading: 'Every mistake was paid for in real money',
    body: "I wasted budget on broad keywords that brought the wrong audience. I wrote ads that got clicks but zero enquiries. I built campaigns that looked good on paper and delivered nothing. Each mistake cost real money — and because it was real money, each lesson stuck. I didn't read about what not to do. I paid for it. That's a different kind of education, and it's the reason I'm obsessive about negative keyword lists, match types, and landing page relevance in every campaign I run today.",
  },
  {
    label: '03 — The edge',
    heading: 'The best paid-search performer in the room',
    body: "Over time, I became the person colleagues came to when their campaigns weren't performing. What clicked for me was the core question that drives everything in paid search: what is one new customer actually worth to this business, and what does it cost to acquire one? When you understand those two numbers clearly, the right decisions become obvious. That framework — economic clarity, not marketing theory — is what I now bring to every professional services firm I work with in Dublin.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-32 md:pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Copy */}
            <div>
              <p className="label mb-6">About</p>
              <h1
                className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] mb-8"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                Performance marketing,{' '}
                <em className="italic text-amber">done properly.</em>
              </h1>

              <div className="space-y-5 text-text-secondary leading-relaxed text-[1.0625rem]">
                <p>
                  I&apos;m Maik — a Google Ads specialist based in Dublin. I work
                  with professional service firms across Ireland who want more
                  enquiries from Google, without the guesswork.
                </p>
                <p>
                  Stark Digital is intentionally small. No account managers, no
                  junior teams managing your campaigns. When you work with Stark
                  Digital, you work directly with me.
                </p>
                <p>
                  I specialise in professional services because it&apos;s where I
                  can make the most difference — I understand the compliance
                  requirements, the search behaviour, and the economics of these
                  businesses.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200"
              >
                Work with me →
              </Link>

              {/* Values */}
              <div className="space-y-7 mt-14">
                {values.map((v) => (
                  <div key={v.title} className="border-l-2 border-amber/30 pl-5">
                    <h3 className="font-display text-base md:text-lg font-semibold text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-surface-2">
                <Image
                  src="/images/Maik.webp"
                  alt="Maik Stark — Google Ads Specialist Dublin"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-canvas border border-surface-2 shadow-card rounded-sm px-5 py-4">
                <p className="font-serif font-bold text-amber leading-none text-2xl md:text-3xl">Max. 8</p>
                <p className="label-muted mt-1.5">Active clients at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey — "How I got here" */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: 'var(--color-ink)' }}
      >
        <div className="absolute inset-0 bg-grid-ink pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="mb-16 md:mb-20">
            <p className="label-on-dark mb-4">Background</p>
            <h2
              className="font-serif font-bold leading-[0.92] tracking-[-0.01em] max-w-2xl"
              style={{ fontSize: 'var(--text-display-md)', color: 'var(--color-surface)' }}
            >
              How I got here
            </h2>
          </div>

          {/* Journey steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {journey.map((step) => (
              <div key={step.label} className="border-t border-white/10 pt-8">
                <p className="font-mono text-[10px] tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {step.label}
                </p>
                <h3
                  className="font-display text-lg font-semibold mb-4 leading-snug"
                  style={{ color: 'var(--color-surface)' }}
                >
                  {step.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,240,234,0.5)' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="border-t border-white/10 pt-12 md:pt-16 max-w-3xl">
            <blockquote
              className="font-serif font-bold italic leading-[1.1] tracking-[-0.02em] mb-6"
              style={{
                fontSize: 'clamp(28px, 4vw, 52px)',
                color: 'var(--color-surface)',
              }}
            >
              &ldquo;Every euro I wasted in that startup was tuition. I just didn&apos;t know it at the time.&rdquo;
            </blockquote>
            <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
              — Maik Stark, Founder · Stark Digital
            </p>
          </div>

        </div>
      </section>

      <CtaV2 />
    </>
  )
}
