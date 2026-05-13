'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const INDUSTRIES = [
  {
    num: '01',
    slug: 'solicitors',
    sector: 'Legal',
    title: 'Solicitors & Law Firms',
    body: 'Conveyancing, family law, personal injury — we build campaigns around how people actually search for legal help in Dublin. High intent, low waste.',
    result: '+112% enquiries',
  },
  {
    num: '02',
    slug: 'accountants',
    sector: 'Finance',
    title: 'Accountants',
    body: 'We target business owners actively looking for an accountant — not generic searchers. Full attribution on every enquiry so you know exactly what works.',
    result: 'Full attribution',
  },
  {
    num: '03',
    slug: 'financial-advisors',
    sector: 'Wealth',
    title: 'Financial Advisors',
    body: 'CBI-compliant copy, qualified audience targeting. We help IFAs, mortgage brokers, and financial planners attract high-value clients without compliance risk.',
    result: 'CBI compliant',
  },
  {
    num: '04',
    slug: 'dental-clinics',
    sector: 'Healthcare',
    title: 'Dental Clinics',
    body: 'Patients search locally with high intent. We turn those searches into booked appointments with precision local targeting and optimised landing pages.',
    result: 'Local targeting',
  },
  {
    num: '05',
    slug: 'tradespeople',
    sector: 'Trades',
    title: 'Tradespeople',
    body: 'Call-only campaigns, local radius targeting, budgets that match how trade businesses actually work. More jobs booked, less dependence on referrals.',
    result: 'Call-only option',
  },
]

export default function ServicesV2() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-sv-label]',
        { y: 14, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-sv-label]', start: 'top 84%', once: true },
        }
      )

      const lines = headlineRef.current?.querySelectorAll('.sv-line')
      if (lines) {
        gsap.fromTo(
          Array.from(lines),
          { y: '108%' },
          {
            y: '0%', duration: 0.9, stagger: 0.09, ease: 'power4.out',
            scrollTrigger: { trigger: headlineRef.current, start: 'top 82%', once: true },
          }
        )
      }

      gsap.fromTo(
        '[data-sv-desc]',
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-sv-desc]', start: 'top 84%', once: true },
        }
      )

      const rows = sectionRef.current?.querySelectorAll('[data-sv-row]')
      if (rows) {
        gsap.fromTo(
          Array.from(rows),
          { x: -16, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out',
            scrollTrigger: { trigger: '[data-sv-list]', start: 'top 82%', once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-surface py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-surface-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <p className="label mb-5 md:mb-6" data-sv-label>Who we help</p>
            <h2
              ref={headlineRef}
              className="font-serif font-bold text-white tracking-[-0.01em]"
              style={{ fontSize: 'var(--text-display-lg)', lineHeight: 0.95 }}
            >
              <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
                <span className="sv-line block">One channel.</span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
                <span className="sv-line block text-amber">Five industries.</span>
              </span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xs" data-sv-desc>
            We only run Google Ads. And we only run them for professional
            services. That focus is the reason our results are better.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-px" data-sv-list>
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/google-ads-dublin/${ind.slug}`}
              data-sv-row
              className="group flex items-center gap-0 bg-canvas border-b border-surface-2 first:border-t hover:bg-surface transition-colors duration-200 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <span
                className="font-display font-bold shrink-0 w-16 sm:w-20 md:w-24 pl-4 sm:pl-6 py-5 md:py-8 select-none transition-colors duration-300"
                style={{ fontSize: 'clamp(16px, 2vw, 28px)', color: 'var(--color-surface-3)' }}
              >
                {ind.num}
              </span>

              <span className="label shrink-0 w-20 md:w-28 hidden sm:block">{ind.sector}</span>

              <span
                className="font-display font-bold text-white group-hover:text-amber transition-colors duration-200 flex-1 py-5 md:py-8 leading-tight tracking-[-0.02em] pr-3"
                style={{ fontSize: 'clamp(14px, 1.8vw, 24px)' }}
              >
                {ind.title}
              </span>

              <span className="text-text-secondary text-sm leading-relaxed hidden xl:block max-w-xs py-8 px-6 flex-shrink-0">
                {ind.body}
              </span>

              <span className="label shrink-0 pr-4 md:pr-6 py-8 text-right hidden md:block" style={{ minWidth: '130px', fontSize: '10px' }}>
                {ind.result}
              </span>

              <span className="text-text-muted group-hover:text-amber group-hover:translate-x-1 transition-all duration-200 pr-4 md:pr-6 shrink-0 text-base md:text-xl">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6 pt-6 md:pt-8 border-t border-surface-2">
          <p className="text-text-secondary text-sm">
            Not sure if your industry fits? Get in touch and we&apos;ll tell you honestly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200 shrink-0"
          >
            Free consultation →
          </Link>
        </div>

      </div>
    </section>
  )
}
