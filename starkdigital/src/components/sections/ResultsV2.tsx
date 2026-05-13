'use client'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const METRICS = [
  {
    value: 112,
    suffix: '%',
    prefix: '+',
    label: 'More client enquiries',
    context: 'Anthony Joyce Solicitors',
    period: '90 days',
  },
  {
    value: 38,
    suffix: '%',
    prefix: '−',
    label: 'Reduction in cost per lead',
    context: 'Legal services, Dublin',
    period: 'Same campaign',
  },
  {
    value: 3.4,
    suffix: '×',
    prefix: '',
    label: 'Return on ad spend',
    context: 'Across all managed accounts',
    period: 'Rolling average',
  },
]

function MetricItem({
  item,
  index,
}: {
  item: (typeof METRICS)[number]
  index: number
}) {
  const numRef = useRef<HTMLSpanElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapRef.current || !numRef.current) return

    const el = numRef.current
    const target = item.value
    const suffix = item.suffix

    gsap.fromTo(
      wrapRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: index * 0.12,
        scrollTrigger: { trigger: wrapRef.current, start: 'top 82%', once: true },
      }
    )

    const obj = { val: 0 }
    ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.0,
          ease: 'power2.out',
          delay: index * 0.12 + 0.2,
          onUpdate: () => {
            el.textContent = (Number.isInteger(target) ? Math.round(obj.val) : parseFloat(obj.val.toFixed(1))) + suffix
          },
        })
      },
    })
  }, [item.value, item.suffix, index])

  return (
    <div
      ref={wrapRef}
      className="relative border-t border-surface-2 pt-8 md:pt-10 pb-8 md:pb-10
                 md:border-t-0 md:border-l md:pl-10 lg:pl-14 md:first:border-l-0 md:first:pl-0"
    >
      <p
        className="font-serif font-bold text-amber leading-none mb-3 md:mb-4"
        style={{ fontSize: 'clamp(60px, 8vw, 120px)' }}
      >
        {item.prefix}
        <span ref={numRef}>0</span>
      </p>
      <p className="text-text-secondary text-base md:text-lg leading-snug mb-5 md:mb-6 max-w-[200px]">
        {item.label}
      </p>
      <div className="space-y-1.5">
        <p className="label">{item.context}</p>
        <p className="label-muted">{item.period}</p>
      </div>
    </div>
  )
}

export default function ResultsV2() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-rv-label]',
        { y: 14, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-rv-label]', start: 'top 84%', once: true },
        }
      )

      const lines = headlineRef.current?.querySelectorAll('.rv-line')
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
        '[data-rv-footnote]',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-rv-footnote]', start: 'top 85%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-canvas py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="label mb-5 md:mb-6" data-rv-label>Proven results</p>
          <h2
            ref={headlineRef}
            className="font-serif font-bold text-white tracking-[-0.01em] max-w-2xl"
            style={{ fontSize: 'var(--text-display-lg)', lineHeight: 0.95 }}
          >
            <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
              <span className="rv-line block">The numbers from one</span>
            </span>
            <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
              <span className="rv-line block text-amber">real Dublin campaign.</span>
            </span>
          </h2>
        </div>

        {/* Metrics — horizontal scroll on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {METRICS.map((item, i) => (
            <MetricItem key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-surface-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 md:gap-6"
          data-rv-footnote
        >
          <p className="text-text-secondary text-sm leading-relaxed max-w-md">
            Not projections. Not industry averages. Real numbers from Anthony
            Joyce Solicitors after 90 days of Google Ads management.
          </p>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-5 md:px-6 py-2.5 md:py-3 rounded-sm hover:border-amber/40 hover:text-amber transition-all duration-200 shrink-0"
          >
            Read the full case study →
          </a>
        </div>
      </div>
    </section>
  )
}
