'use client'
import { useEffect, useRef } from 'react'
import { animateCounter, fadeUp } from '@/lib/gsap'

const RESULTS = [
  {
    value: 112,
    suffix: '%',
    prefix: '+',
    label: 'More client enquiries',
    context: 'Anthony Joyce Solicitors',
    timeframe: '90 days',
  },
  {
    value: 38,
    suffix: '%',
    prefix: '−',
    label: 'Reduction in cost per lead',
    context: 'Legal services, Dublin',
    timeframe: 'Same campaign',
  },
  {
    value: 3.4,
    suffix: '×',
    prefix: '',
    label: 'Return on ad spend',
    context: 'Across managed accounts',
    timeframe: 'Rolling average',
  },
]

interface ResultCardProps {
  item: (typeof RESULTS)[number]
  index: number
}

function ResultCard({ item, index }: ResultCardProps) {
  const numRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!numRef.current) return
    const timer = setTimeout(() => {
      if (numRef.current) {
        animateCounter(numRef.current, item.value, item.suffix)
      }
    }, index * 200)
    return () => clearTimeout(timer)
  }, [item.value, item.suffix, index])

  return (
    <div className="border-l border-surface-2 pl-10 first:border-l-0 first:pl-0">
      {/* Big number */}
      <p
        className="font-display leading-none font-semibold text-text-primary mb-4"
        style={{ fontSize: 'clamp(60px, 8vw, 108px)' }}
      >
        {item.prefix}
        <span ref={numRef}>0</span>
      </p>

      {/* Label */}
      <p className="font-body text-base text-text-secondary mb-5 leading-snug max-w-[180px]">
        {item.label}
      </p>

      {/* Meta */}
      <div className="space-y-1.5">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold">
          {item.context}
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-muted">
          {item.timeframe}
        </p>
      </div>
    </div>
  )
}

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const els = sectionRef.current.querySelectorAll('[data-fade]')
    fadeUp(Array.from(els) as Element[])
  }, [])

  return (
    <section ref={sectionRef} className="bg-surface py-32 overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

      {/* Gold radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(200,144,58,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20" data-fade>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold" />
            <p className="section-label">Proven results</p>
          </div>
          <h2
            className="font-display text-text-primary leading-[1.0] tracking-[-2px] max-w-2xl"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            Numbers that speak{' '}
            <em className="italic text-gradient-gold">for themselves.</em>
          </h2>
        </div>

        {/* Results grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-0 mb-20"
          data-fade
        >
          {RESULTS.map((item, i) => (
            <ResultCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Footer statement */}
        <div
          className="border-t border-surface-2 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          data-fade
        >
          <p className="text-text-secondary text-sm max-w-md leading-relaxed">
            Real numbers from a real client relationship. Not projections, not
            industry averages — actual campaign results from a Dublin law firm.
          </p>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-6 py-3 rounded-lg hover:border-gold/40 hover:text-gold transition-all duration-300 shrink-0"
          >
            See the full story
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
