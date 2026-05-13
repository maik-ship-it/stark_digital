'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fadeUp, revealLine } from '@/lib/gsap'

const PROOF_STATS = [
  { value: '+112%', label: 'Enquiries', sub: '90 days' },
  { value: '−38%', label: 'Cost / Lead', sub: 'Same budget' },
  { value: '3.4×', label: 'ROAS', sub: 'Rolling avg.' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const els = sectionRef.current.querySelectorAll('[data-fade]')
    fadeUp(Array.from(els) as Element[])
    if (lineRef.current) revealLine(lineRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-canvas min-h-screen flex items-center overflow-x-hidden"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Radial gold glow — top left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,144,58,0.06) 0%, transparent 65%)',
        }}
      />

      {/* Radial gold glow — bottom right */}
      <div
        className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,144,58,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 xl:gap-24 items-center">

          {/* ── Left: Copy ───────────────────────────────── */}
          <div>

            {/* Live badge */}
            <div className="boutique-badge mb-8" data-fade>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Accepting new clients · Dublin, Ireland
            </div>

            {/* Gold reveal line */}
            <div ref={lineRef} className="gold-line mb-8" />

            {/* H1 */}
            <h1
              className="font-display leading-[0.95] tracking-[-3px] mb-8 text-text-primary"
              style={{ fontSize: 'var(--text-display-xl)' }}
              data-fade
            >
              Performance
              <br />
              marketing for
              <br />
              firms that value
              <br />
              their{' '}
              <em className="italic text-gradient-gold">reputation.</em>
            </h1>

            {/* Sub */}
            <p
              className="text-lg text-text-secondary max-w-lg leading-relaxed mb-10"
              data-fade
            >
              High-performance Google Ads for solicitors, accountants,
              and financial advisors across Ireland. Boutique by design —
              you work directly with a specialist, never an account manager.
            </p>

            {/* Inline proof stats */}
            <div
              className="flex flex-wrap items-start gap-8 mb-10 pb-10 border-b border-surface-2"
              data-fade
            >
              {PROOF_STATS.map(({ value, label, sub }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="font-display font-semibold text-text-primary leading-none"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                  >
                    {value}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold">
                    {label}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest uppercase text-text-muted">
                    {sub}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" data-fade>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-gold text-canvas text-sm font-medium px-7 py-4 rounded-lg hover:bg-gold-light transition-colors duration-300 shadow-glow-gold"
              >
                Get a Free Audit
                <span>→</span>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-7 py-4 rounded-lg hover:border-gold/40 hover:text-text-primary transition-all duration-300"
              >
                See Client Results
              </Link>
            </div>

            {/* Trust strip */}
            <p className="mt-7 font-mono text-[10px] text-text-muted tracking-[0.18em] uppercase" data-fade>
              No long-term contracts · Max. 8 active clients · Dublin-based specialist
            </p>
          </div>

          {/* ── Right: Photo card ─────────────────────── */}
          <div className="relative hidden lg:block" data-fade>

            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-2xl border border-gold/10 pointer-events-none" />

            {/* Card shell */}
            <div className="relative bg-surface border border-surface-2 rounded-2xl overflow-hidden shadow-card-hover">

              {/* Photo */}
              <div className="relative h-[520px]">
                <Image
                  src="/images/maik.jpg"
                  alt="Maik Stark — Google Ads Specialist Dublin"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface/90 to-transparent" />
                {/* Gold left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/40 to-transparent z-10" />
              </div>

              {/* Card footer */}
              <div className="px-5 py-4 flex items-center justify-between border-t border-surface-2 bg-surface">
                <div>
                  <p className="font-body font-medium text-text-primary text-sm">Maik Stark</p>
                  <p className="font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-0.5">
                    Google Ads Specialist · Dublin
                  </p>
                </div>
                <div className="boutique-badge text-[9px] shrink-0">
                  Boutique Agency
                </div>
              </div>
            </div>

            {/* Floating result chip */}
            <div className="absolute -bottom-5 -left-6 bg-gold text-canvas rounded-xl px-5 py-3.5 shadow-card-hover z-10">
              <p className="font-display text-3xl font-semibold leading-none">+112%</p>
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-canvas/70 mt-1.5">
                Client enquiries
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
