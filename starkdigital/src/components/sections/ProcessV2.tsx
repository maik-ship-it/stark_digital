'use client'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const STEPS = [
  {
    num: '01',
    title: 'Free audit',
    body: "We review your market and any existing campaigns. Honest assessment of what's possible before you spend a cent.",
  },
  {
    num: '02',
    title: 'Strategy & build',
    body: 'Keyword research, campaign structure, conversion tracking, ad copy. Built right from the start — no patching bad foundations.',
  },
  {
    num: '03',
    title: 'Launch & optimise',
    body: 'Campaigns go live. Daily monitoring, weekly optimisation, monthly reporting. Every euro accounted for.',
  },
  {
    num: '04',
    title: 'Scale what works',
    body: 'When we know what drives enquiries, we go harder on it. Data-led decisions, no guesswork, no wasted budget.',
  },
]

export default function ProcessV2() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-pv-label]',
        { y: 14, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-pv-label]', start: 'top 84%', once: true },
        }
      )

      const lines = headlineRef.current?.querySelectorAll('.pv-line')
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

      // Steps slide in staggered from below
      const steps = sectionRef.current?.querySelectorAll('[data-pv-step]')
      if (steps) {
        gsap.fromTo(
          Array.from(steps),
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: '[data-pv-grid]', start: 'top 82%', once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-surface py-24 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="label mb-5 md:mb-6" data-pv-label>How it works</p>
          <h2
            ref={headlineRef}
            className="font-serif font-bold text-white tracking-[-0.01em]"
            style={{ fontSize: 'var(--text-display-lg)', lineHeight: 0.95 }}
          >
            <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
              <span className="pv-line block">Four steps.</span>
            </span>
            <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
              <span className="pv-line block text-amber">No surprises.</span>
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" data-pv-grid>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-pv-step
              className="relative border-t-2 border-surface-2 pt-8 md:pt-10 pb-6 md:pb-8 lg:pr-10"
              style={{ borderTopColor: i === 0 ? 'var(--color-amber)' : undefined }}
            >
              <p
                className="font-display font-bold leading-none mb-6 md:mb-8"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--color-text-muted)' }}
              >
                {step.num}
              </p>

              <h3
                className="font-display font-bold text-white mb-3 md:mb-4 leading-tight tracking-[-0.02em]"
                style={{ fontSize: 'clamp(16px, 1.8vw, 21px)' }}
              >
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {step.body}
              </p>

              {i < STEPS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-8 right-0 text-xl translate-x-1/2"
                  style={{ color: 'var(--color-surface-3)' }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
