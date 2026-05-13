'use client'
import { useEffect, useRef } from 'react'
import { fadeUp } from '@/lib/gsap'

const DIFFERENCES = [
  {
    number: '01',
    title: 'You talk to the specialist',
    description:
      'No account managers, no handoffs to junior teams. When you work with Stark Digital, you work directly with Maik — the person who actually runs your campaigns.',
  },
  {
    number: '02',
    title: 'We only work in professional services',
    description:
      "We don't manage campaigns for e-commerce, restaurants, or anyone who calls us. Our focus is solicitors, accountants, and financial advisors. That focus makes us better at it.",
  },
  {
    number: '03',
    title: 'Maximum 8 active clients',
    description:
      'By design, not by accident. Limiting client numbers means your campaigns get the attention they deserve — not divided among 50 accounts.',
  },
  {
    number: '04',
    title: 'Full transparency, always',
    description:
      'You own the Google Ads account. You see every number. You know exactly where every euro goes. No lock-in, no opaque reporting.',
  },
]

export default function BoutiqueStatement() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const els = sectionRef.current.querySelectorAll('[data-fade]')
    fadeUp(Array.from(els) as Element[])
  }, [])

  return (
    <section ref={sectionRef} className="bg-canvas py-32 relative overflow-hidden">
      {/* Subtle left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left, rgba(200,144,58,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <p className="section-label mb-4" data-fade>Why boutique beats big</p>
            <div className="gold-line mb-7" />
            <h2
              className="font-display text-text-primary leading-[1.0] tracking-[-2px]"
              style={{ fontSize: 'var(--text-display-lg)' }}
              data-fade
            >
              Not the biggest agency.
              <br />
              <em className="italic text-gradient-gold">The right one.</em>
            </h2>
          </div>
          <p className="text-text-secondary leading-relaxed text-lg" data-fade>
            Most Google Ads agencies in Ireland manage hundreds of clients.
            That&apos;s their business model — volume over quality. Ours is
            different. We take fewer clients intentionally, so every campaign
            gets proper attention.
          </p>
        </div>

        {/* Differences grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DIFFERENCES.map((d) => (
            <div
              key={d.number}
              data-fade
              className="group relative bg-surface border border-surface-2 rounded-xl p-8 hover:border-gold/20 hover:shadow-card-hover transition-all duration-400"
            >
              {/* Number watermark */}
              <p
                className="font-display font-semibold text-surface-2 leading-none absolute top-6 right-7 select-none group-hover:text-gold/8 transition-colors duration-400"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
              >
                {d.number}
              </p>

              <div className="gold-line mb-6" />
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3 leading-snug">
                {d.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
