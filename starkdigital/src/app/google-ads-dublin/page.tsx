import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/lib/industries'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import CtaV2 from '@/components/sections/CtaV2'

export const metadata: Metadata = {
  title: 'Google Ads Agency Dublin',
  description:
    'Performance Google Ads management for professional services across Dublin and Ireland. Solicitors, accountants, financial advisors — we know your market.',
  alternates: { canonical: 'https://starkdigital.ie/google-ads-dublin' },
}

const serviceFAQs = [
  {
    q: 'What industries do you specialise in?',
    a: 'We focus exclusively on professional services — solicitors, accountants, financial advisors, dental practices, and tradespeople across Dublin and Ireland.',
  },
  {
    q: 'Do you manage Google Ads for businesses outside Dublin?',
    a: 'Yes — while we are Dublin-based, we manage campaigns for businesses across Ireland.',
  },
  {
    q: 'What is included in your Google Ads management?',
    a: 'Keyword research, campaign setup, ad copy, conversion tracking, ongoing optimisation, and monthly reporting. Everything — no hidden extras.',
  },
]

export default function GoogleAdsDublinPage() {
  return (
    <>
      <FAQSchema faqs={serviceFAQs} />
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: 'https://starkdigital.ie' },
        { name: 'Google Ads Dublin', url: 'https://starkdigital.ie/google-ads-dublin' },
      ]} />

      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label mb-6">Google Ads · Dublin</p>
          <h1
            className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] max-w-3xl mb-6"
            style={{ fontSize: 'var(--text-display-xl)' }}
          >
            Google Ads management for{' '}
            <em className="italic text-amber">professional services</em> in Dublin.
          </h1>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-10">
            We specialise in one thing — running high-performance Google Ads
            campaigns for professional service businesses in Ireland. No
            generalist approach. No wasted budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-surface py-24 border-t border-surface-2">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label mb-10">Industries we serve</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/google-ads-dublin/${ind.slug}`}
                className="group bg-canvas border border-surface-2 shadow-card rounded-sm p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-px bg-amber/30 mb-5" />
                <h2 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-amber transition-colors duration-200">
                  {ind.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {ind.subheadline}
                </p>
                <p className="mt-5 text-sm text-text-secondary font-medium group-hover:text-amber transition-colors duration-200">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaV2 />
    </>
  )
}
