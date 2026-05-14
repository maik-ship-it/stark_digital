'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'

/** Native asset 523×462 — we render ~half width so it stays sharp on retina. */
const IMG_W = 262
const IMG_H = 231

const STATS = [
  { value: '+112%', label: 'Client enquiries', sub: '90 days' },
  { value: '−38%', label: 'Cost per lead', sub: 'Same budget' },
  { value: '3.4×', label: 'Return on ad spend', sub: 'Measured attribution' },
]

export default function CaseStudyFeature() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-cs-header]',
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-cs-header]', start: 'top 82%', once: true },
        }
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 88%', once: true },
        },
      )

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, x: 16 },
        {
          opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.08,
          scrollTrigger: { trigger: quoteRef.current, start: 'top 88%', once: true },
        },
      )

      const statItems = statsRef.current?.querySelectorAll('[data-stat]')
      if (statItems) {
        gsap.fromTo(
          Array.from(statItems),
          { y: 14, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 84%', once: true },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section
      ref={sectionRef}
      className="bg-canvas py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="case-study-heading"
    >
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14" data-cs-header>
          <p className="label mb-3">Client results · Dublin</p>
          <h2
            id="case-study-heading"
            className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em]"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            Real numbers.
            <br />
            <em className="text-amber not-italic">One Dublin campaign.</em>
          </h2>
        </div>

        {/* Single card: metrics band + story row with small portrait */}
        <div className="rounded-sm border border-surface-2 bg-surface shadow-card overflow-hidden">
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-surface-2 bg-surface-2/40"
          >
            {STATS.map(({ value, label, sub }) => (
              <div key={label} data-stat className="px-6 py-7 md:px-8 md:py-8">
                <p
                  className="font-serif font-bold text-amber leading-none mb-2"
                  style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
                >
                  {value}
                </p>
                <p className="text-white font-medium text-sm md:text-[15px] mb-1.5 leading-snug">{label}</p>
                <p className="label-muted">{sub}</p>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
              {/* Small portrait — fixed pixel width in DOM, no stretched fill layout */}
              <div ref={imageRef} className="flex flex-col items-center lg:items-start shrink-0">
                <figure className="relative">
                  <div
                    className="rounded-sm overflow-hidden ring-1 ring-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.45)] bg-surface-2"
                    style={{ width: IMG_W, maxWidth: 'min(262px, 86vw)' }}
                  >
                    <Image
                      src="/images/anthony-joyce.png"
                      alt="Anthony Joyce — Managing Partner, Anthony Joyce Solicitors"
                      width={IMG_W}
                      height={IMG_H}
                      sizes="262px"
                      className="w-full h-auto object-cover object-[58%_12%] block"
                      priority={false}
                    />
                  </div>
                  <figcaption className="mt-4 text-center lg:text-left max-w-[262px]">
                    <span className="font-display font-bold text-white text-sm md:text-base block">Anthony Joyce</span>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase mt-1.5 text-text-secondary leading-snug block">
                      Managing Partner · Anthony Joyce Solicitors · Dublin
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div ref={quoteRef} className="flex-1 min-w-0 flex flex-col justify-between gap-8">
                <blockquote className="text-text-secondary text-[15px] md:text-lg leading-relaxed italic font-serif border-l-2 border-amber/50 pl-5 md:pl-6">
                  &ldquo;Maik understood what we needed right away. We&apos;ve seen more client enquiries since
                  launching our new campaign.&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-2 border-t border-surface-2">
                  <div>
                    <p className="text-white font-medium text-sm">Anthony Joyce</p>
                    <p className="label-muted mt-1">Managing Partner, Anthony Joyce Solicitors</p>
                  </div>
                  <Link
                    href="/case-studies/anthony-joyce-solicitors"
                    className="inline-flex shrink-0 items-center justify-center sm:justify-start gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-5 py-2.5 rounded-sm hover:border-amber/40 hover:text-amber transition-all duration-200"
                  >
                    Read full case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
