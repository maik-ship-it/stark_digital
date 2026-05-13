'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { fadeUp, revealLine } from '@/lib/gsap'

const SERVICES = [
  {
    slug: 'solicitors',
    label: 'Legal',
    title: 'Solicitors & Law Firms',
    description:
      'High-intent keyword campaigns built around how people search for legal help in Dublin. Conveyancing, family law, personal injury — we know the territory.',
    stat: '+112% enquiries',
  },
  {
    slug: 'accountants',
    label: 'Finance',
    title: 'Accountants',
    description:
      'Campaigns that target business owners looking for an accountant — not just anyone searching broadly. Every enquiry tracked back to spend.',
    stat: 'Full attribution',
  },
  {
    slug: 'financial-advisors',
    label: 'Wealth',
    title: 'Financial Advisors',
    description:
      'Compliant ad copy, CBI-authorised guidance built in. We help IFAs, mortgage brokers, and financial planning firms attract high-value clients.',
    stat: 'CBI compliant',
  },
  {
    slug: 'dental-clinics',
    label: 'Healthcare',
    title: 'Dental Clinics',
    description:
      'Turn local searches into booked appointments. We know how patients search for dentists — and build campaigns that convert.',
    stat: 'Local targeting',
  },
  {
    slug: 'tradespeople',
    label: 'Trades',
    title: 'Tradespeople',
    description:
      'Local targeting, call-only campaigns, and budgets that make sense for trade businesses. More jobs, less relying on word-of-mouth.',
    stat: 'Call-only option',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('[data-card]')
    fadeUp(Array.from(cards) as Element[])
    if (lineRef.current) revealLine(lineRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="bg-surface py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">What we do</p>
          <div ref={lineRef} className="gold-line mb-7" />
          <h2
            className="font-display text-text-primary leading-[1.0] tracking-[-2px] max-w-xl"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            We specialise in one thing.{' '}
            <em className="italic text-gradient-gold">Professional services.</em>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/google-ads-dublin/${service.slug}`}
              data-card
              className="group bg-canvas border border-surface-2 rounded-xl p-7 hover:border-gold/25 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Label + stat */}
              <div className="flex items-center justify-between mb-6">
                <p className="section-label">{service.label}</p>
                <span className="font-mono text-[10px] text-text-muted tracking-wide">
                  {service.stat}
                </span>
              </div>

              {/* Gold line */}
              <div className="gold-line mb-6 group-hover:w-full transition-all duration-500" />

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <p className="mt-7 text-sm text-text-muted font-medium group-hover:text-gold transition-colors duration-200 flex items-center gap-1.5">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              </p>
            </Link>
          ))}

          {/* CTA card */}
          <div
            data-card
            className="bg-gold/10 border border-gold/20 rounded-xl p-7 flex flex-col justify-between hover:bg-gold/15 transition-all duration-300"
          >
            <div>
              <p className="section-label text-gold mb-4">Not sure?</p>
              <div className="gold-line mb-6" />
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3 leading-snug">
                Let&apos;s talk about your business.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every business is different. Tell us about yours and we&apos;ll
                tell you if Google Ads makes sense for you — honestly.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold text-canvas text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gold-light transition-colors duration-200 w-fit"
            >
              Free consultation
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
