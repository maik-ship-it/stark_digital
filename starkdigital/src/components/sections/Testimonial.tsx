'use client'
import { useEffect, useRef } from 'react'
import { fadeUp, revealLine } from '@/lib/gsap'

const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      'Working with Maik was incredibly smooth. He understood what we needed right away and we\'ve already noticed more client enquiries coming in.',
    name: 'Eoin Gallagher',
    role: 'Managing Director',
    company: 'Anthony Joyce Solicitors',
    result: '+112%',
    resultLabel: 'enquiries',
  },
  {
    stars: 5,
    quote:
      'Finally an agency that actually understands our industry. No jargon, no fluff — just clear reporting and results we can see in the business.',
    name: 'Client Name',
    role: 'Director',
    company: 'Professional Services Firm',
    result: 'Soon',
    resultLabel: 'case study',
  },
  {
    stars: 5,
    quote:
      'The difference between working with Stark Digital and our previous agency is night and day. Direct access, fast responses, real results.',
    name: 'Client Name',
    role: 'Partner',
    company: 'Dublin-based Firm',
    result: 'Soon',
    resultLabel: 'case study',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonial() {
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
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(200,144,58,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4" data-fade>Client feedback</p>
          <div ref={lineRef} className="gold-line mb-7" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="font-display text-text-primary leading-[1.0] tracking-[-2px]"
              style={{ fontSize: 'var(--text-display-lg)' }}
              data-fade
            >
              What clients say.
            </h2>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed" data-fade>
              We let results speak first. These are real people,
              not marketing copy.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              data-fade
              className="bg-surface border border-surface-2 rounded-xl p-7 flex flex-col justify-between hover:border-gold/20 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Stars count={t.stars} />
                <p className="text-text-primary leading-relaxed text-[15px] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-end justify-between border-t border-surface-2 pt-5 mt-auto">
                <div>
                  <p className="font-body font-medium text-text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] text-text-muted tracking-[0.12em] uppercase mt-1">
                    {t.role} · {t.company}
                  </p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="font-display text-xl font-semibold text-gold block leading-none">
                    {t.result}
                  </span>
                  <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
                    {t.resultLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div className="mt-10 flex items-center gap-3" data-fade>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-gold text-xs">★</span>
            ))}
          </div>
          <p className="font-mono text-[10px] text-text-muted tracking-[0.18em] uppercase">
            5-star Google Reviews · Dublin, Ireland
          </p>
        </div>
      </div>
    </section>
  )
}
