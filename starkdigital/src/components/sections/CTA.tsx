'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { fadeUp } from '@/lib/gsap'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const els = sectionRef.current.querySelectorAll('[data-fade]')
    fadeUp(Array.from(els) as Element[])
  }, [])

  return (
    <section ref={sectionRef} className="bg-canvas py-32 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Central gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200,144,58,0.08) 0%, transparent 55%)',
        }}
      />

      {/* Large watermark */}
      <p
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-semibold text-surface-2/60 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(200px, 28vw, 380px)' }}
        aria-hidden="true"
      >
        →
      </p>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <div className="boutique-badge mx-auto mb-8" data-fade>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Free — no obligation
        </div>

        <div className="w-10 h-px bg-gold mx-auto mb-10" data-fade />

        <h2
          className="font-display text-text-primary leading-[0.95] tracking-[-3px] max-w-3xl mx-auto mb-8"
          style={{ fontSize: 'var(--text-display-lg)' }}
          data-fade
        >
          Let&apos;s see if we&apos;re
          <br />
          <em className="italic text-gradient-gold">a good fit.</em>
        </h2>

        <p
          className="text-text-secondary text-lg leading-relaxed max-w-md mx-auto mb-12"
          data-fade
        >
          We don&apos;t work with everyone — but if you run a professional
          service firm in Ireland and you&apos;re serious about growth,
          we&apos;d like to hear from you.
        </p>

        <div className="flex flex-wrap gap-4 justify-center" data-fade>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-gold text-canvas text-sm font-medium px-10 py-4 rounded-lg hover:bg-gold-light transition-all duration-300 shadow-glow-gold"
          >
            Request a Free Audit
            <span>→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-8 py-4 rounded-lg hover:border-gold/40 hover:text-text-primary transition-all duration-300"
          >
            Who we work with
          </Link>
        </div>

        {/* Trust strip */}
        <div
          className="mt-16 pt-10 border-t border-surface-2 flex flex-wrap justify-center gap-10"
          data-fade
        >
          {[
            'No long-term contracts',
            'Max. 8 active clients',
            'Results within 2–4 weeks',
            'Direct specialist access',
          ].map((item) => (
            <p key={item} className="font-mono text-[10px] text-text-muted tracking-[0.18em] uppercase">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
