import type { Metadata } from 'next'
import Link from 'next/link'
import CtaV2 from '@/components/sections/CtaV2'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results from real clients — see how Stark Digital has helped professional service businesses in Dublin grow through Google Ads.',
  alternates: { canonical: 'https://starkdigital.ie/case-studies' },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label mb-6">Results</p>
          <h1
            className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] max-w-2xl mb-6"
            style={{ fontSize: 'var(--text-display-xl)' }}
          >
            Real results from{' '}
            <em className="italic text-amber">real clients.</em>
          </h1>
          <p className="text-lg text-text-secondary max-w-md leading-relaxed">
            Numbers from actual campaigns — no projections, no estimates.
          </p>
        </div>
      </section>

      {/* Anthony Joyce teaser */}
      <section className="bg-surface py-20 border-t border-surface-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-canvas border border-surface-2 shadow-card rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Metrics */}
              <div className="p-10 border-b lg:border-b-0 lg:border-r border-surface-2">
                <p className="label mb-6">Anthony Joyce Solicitors</p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '+112%', label: 'Client enquiries' },
                    { value: '−38%', label: 'Cost per lead' },
                    { value: '3.4×', label: 'Return on ad spend' },
                    { value: '90 days', label: 'Timeframe' },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <p
                        className="font-serif font-bold text-amber mb-1"
                        style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                      >
                        {value}
                      </p>
                      <p className="label-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <p
                    className="font-serif text-amber leading-none mb-2"
                    style={{ fontSize: '3rem' }}
                  >
                    &ldquo;
                  </p>
                  <blockquote className="font-serif text-xl text-white leading-snug mb-6">
                    Working with Maik was incredibly smooth. He understood what
                    we needed right away and we&apos;ve already noticed more
                    client enquiries coming in.
                  </blockquote>
                  <p className="text-sm font-medium text-white">Eoin Gallagher</p>
                  <p className="label-muted mt-1">
                    Managing Director · Legal Services · Dublin 8
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/case-studies/anthony-joyce-solicitors"
                    className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-6 py-3 rounded-sm hover:border-amber/40 hover:text-amber transition-all duration-200"
                  >
                    Read full case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaV2 />
    </>
  )
}
