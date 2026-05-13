'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function CtaV2() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-cta-eyebrow]',
        { y: 14, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      )

      const lines = headlineRef.current?.querySelectorAll('.cta-line')
      if (lines) {
        gsap.fromTo(
          Array.from(lines),
          { y: '105%' },
          {
            y: '0%', duration: 1.0, stagger: 0.1, ease: 'power4.out', delay: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
          }
        )
      }

      gsap.fromTo(
        '[data-cta-body]',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.35,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: 'var(--color-ink)' }}
    >
      <div className="absolute inset-0 bg-grid-ink pointer-events-none" />

      {/* Large watermark */}
      <p
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none hidden md:block"
        style={{ fontSize: 'clamp(200px, 30vw, 480px)', color: 'rgba(255,255,255,0.025)' }}
        aria-hidden
      >
        →
      </p>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <p className="label-on-dark mb-8 md:mb-10 flex items-center gap-3" data-cta-eyebrow>
          <span className="w-5 h-px bg-amber inline-block" />
          Free — no obligation
        </p>

        <h2
          ref={headlineRef}
          className="font-serif font-bold tracking-[-0.02em] mb-10 md:mb-12 max-w-4xl"
          style={{ fontSize: 'clamp(40px, 7vw, 110px)', lineHeight: 0.95, color: '#F4F0EA' }}
        >
          <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
            <span className="cta-line block">Ready to get</span>
          </span>
          <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
            <span className="cta-line block">more clients?</span>
          </span>
        </h2>

        <p
          className="text-base md:text-xl leading-relaxed mb-10 md:mb-12 max-w-lg"
          style={{ color: 'rgba(244,240,234,0.5)' }}
          data-cta-body
        >
          We don&apos;t work with everyone. But if you run a professional
          service firm in Ireland and you&apos;re serious about growth —
          let&apos;s talk.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-16 md:mb-20" data-cta-body>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-canvas font-semibold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-sm hover:bg-amber-dim transition-colors duration-200"
          >
            Book a Call →
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-medium text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-sm border hover:bg-white/5 transition-colors duration-200"
            style={{ color: 'rgba(244,240,234,0.4)', borderColor: 'rgba(244,240,234,0.1)' }}
          >
            Who we work with
          </Link>
        </div>

        <div
          className="flex flex-wrap gap-6 md:gap-10 pt-8 md:pt-10 border-t"
          style={{ borderColor: 'rgba(244,240,234,0.08)' }}
          data-cta-body
        >
          {['No long-term contracts', 'Max. 8 active clients', 'Results in 2–4 weeks', 'Direct specialist access'].map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'rgba(244,240,234,0.25)' }}
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
