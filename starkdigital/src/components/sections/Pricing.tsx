'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const INCLUDED = [
  'Full campaign setup & build',
  'Keyword research & negative lists',
  'Ad copy & A/B testing',
  'Conversion tracking setup',
  'Weekly optimisation & monitoring',
  'Monthly performance report',
  'Direct access to Maik — no account manager middlemen',
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-pr-label]',
        { y: 14, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-pr-label]', start: 'top 84%', once: true },
        }
      )

      gsap.fromTo(
        '[data-pr-card]',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-pr-card]', start: 'top 82%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-canvas py-24 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 md:mb-16">
          <p className="label mb-5" data-pr-label>Investment</p>
          <h2
            className="font-serif font-bold text-white tracking-[-0.01em]"
            style={{ fontSize: 'var(--text-display-lg)', lineHeight: 0.95 }}
          >
            Transparent pricing.{' '}
            <em className="text-amber not-italic">No surprises.</em>
          </h2>
        </div>

        {/* Card */}
        <div
          data-pr-card
          className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0 border border-surface-2 rounded-sm overflow-hidden"
        >
          {/* Left: what's included */}
          <div className="bg-surface p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-surface-2">
            <p className="label mb-7 md:mb-8">What&apos;s included</p>
            <ul className="space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full bg-amber inline-block shrink-0"
                  />
                  <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-text-muted text-xs mt-8 leading-relaxed">
              Ad spend is separate and paid directly to Google — we never touch your ad budget.
            </p>
          </div>

          {/* Right: price + CTA */}
          <div className="bg-surface p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="label mb-6">Management fee</p>

              <div className="mb-2">
                <span
                  className="font-serif font-bold text-white leading-none"
                  style={{ fontSize: 'clamp(42px, 5vw, 64px)' }}
                >
                  €1,000
                </span>
                <span className="text-text-muted text-sm ml-2">/ month</span>
              </div>
              <p className="text-text-muted text-xs mb-8">starting from · ad spend separate</p>

              <ul className="space-y-3 mb-10">
                {[
                  'No setup fee',
                  'No long-term contract',
                  'Cancel any month',
                  'Max. 8 active clients',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-amber text-sm leading-none">✓</span>
                    <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-canvas font-semibold text-sm px-6 py-3.5 rounded-sm hover:bg-amber-dim transition-colors duration-200 w-full text-center"
            >
              Book a free audit →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
