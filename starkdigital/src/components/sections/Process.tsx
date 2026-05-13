'use client'
import { useEffect, useRef } from 'react'
import { fadeUp, revealLine } from '@/lib/gsap'

const STEPS = [
  {
    number: '01',
    title: 'Free audit',
    description:
      'We review your existing campaigns (or your market, if you\'re starting fresh) and tell you honestly what\'s possible — before you spend a penny.',
  },
  {
    number: '02',
    title: 'Strategy & setup',
    description:
      'Keyword research, campaign architecture, conversion tracking, ad copy — we build everything properly from the start. No shortcuts.',
  },
  {
    number: '03',
    title: 'Launch & optimise',
    description:
      'Campaigns go live. We monitor daily, optimise weekly, and report monthly. You always know exactly where your money is going.',
  },
  {
    number: '04',
    title: 'Scale what works',
    description:
      'Once we know what drives enquiries, we double down. No guesswork — every decision is backed by data from your own campaigns.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const els = sectionRef.current.querySelectorAll('[data-fade]')
    fadeUp(Array.from(els) as Element[])
    if (lineRef.current) revealLine(lineRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="bg-canvas py-32 relative overflow-hidden">
      {/* Right-side glow */}
      <div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(200,144,58,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <p className="section-label mb-4">How it works</p>
          <div ref={lineRef} className="gold-line mb-7" />
          <h2
            className="font-display text-text-primary leading-[1.0] tracking-[-2px] max-w-lg"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            Simple process.{' '}
            <em className="italic text-gradient-gold">Clear results.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              data-fade
              className="relative border-l border-surface-2 pl-8 pb-8 lg:pb-0 first:border-l-0 first:pl-0 lg:border-l lg:border-t-0"
            >
              {/* Connector dot */}
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gold/30 border border-gold/50 first:hidden lg:block" />

              {/* Number */}
              <p
                className="font-display font-semibold text-gold/20 leading-none mb-6"
                style={{ fontSize: 'clamp(48px, 5vw, 64px)' }}
              >
                {step.number}
              </p>

              {/* Gold accent line */}
              <div className="gold-line mb-5" />

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed pr-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
