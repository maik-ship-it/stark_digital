'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const STATS = [
  { value: '+112%', label: 'Client enquiries', sub: '90 days' },
  { value: '−38%', label: 'Cost per lead', sub: 'Same budget' },
  { value: '3.4×', label: 'Return on ad spend', sub: 'Measured attribution' },
]

export default function CaseStudyFeature() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Header fade up
      gsap.fromTo(
        '[data-cs-header]',
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-cs-header]', start: 'top 82%', once: true },
        }
      )

      // Image reveal with clip-path wipe
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power3.inOut',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%', once: true },
        }
      )

      // Content slides in from right
      gsap.fromTo(
        contentRef.current,
        { x: 24, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%', once: true },
        }
      )

      // Stats stagger up
      const statItems = statsRef.current?.querySelectorAll('[data-stat]')
      if (statItems) {
        gsap.fromTo(
          Array.from(statItems),
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-canvas py-24 md:py-32 relative overflow-hidden">

      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-12 md:mb-16" data-cs-header>
          <p className="label mb-3">Client results · Dublin</p>
          <h2
            className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em]"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            Real numbers.
            <br />
            <em className="text-amber not-italic">One Dublin campaign.</em>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0 border border-surface-2 rounded-sm overflow-hidden shadow-card">

          {/* Left: Photo — constrained to native resolution (523×462) */}
          <div ref={imageRef} className="relative bg-surface-2 min-h-[300px] lg:min-h-0 lg:aspect-[523/462] lg:max-h-[420px]">
            <Image
              src="/images/anthony-joyce.png"
              alt="Anthony Joyce — Managing Partner, Anthony Joyce Solicitors"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
            {/* Subtle warm overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 50%, rgba(250,250,247,0.3) 100%)' }}
            />
            {/* Bottom attribution */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/40 to-transparent">
              <p className="font-display font-bold text-white text-base md:text-xl" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                Anthony Joyce
              </p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Managing Partner · Anthony Joyce Solicitors · Dublin
              </p>
            </div>
          </div>

          {/* Right: Stats + quote */}
          <div ref={contentRef} className="bg-surface p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface-2">

            {/* Stats */}
            <div ref={statsRef} className="space-y-7 mb-8">
              {STATS.map(({ value, label, sub }) => (
                <div key={label} data-stat className="border-b border-surface-2 pb-7 last:border-0 last:pb-0">
                  <p
                    className="font-serif font-bold text-amber leading-none mb-1.5"
                    style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
                  >
                    {value}
                  </p>
                  <p className="text-white font-medium text-sm md:text-base mb-1">{label}</p>
                  <p className="label-muted">{sub}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed italic font-serif mb-4" style={{ fontSize: '1rem' }}>
                &ldquo;Maik understood what we needed right away. We&apos;ve seen
                more client enquiries since launching our new campaign.&rdquo;
              </p>
              <p className="text-white font-medium text-sm">Anthony Joyce</p>
              <p className="label-muted mb-5">Managing Partner, Anthony Joyce Solicitors</p>

              <Link
                href="/case-studies/anthony-joyce-solicitors"
                className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-5 py-2.5 rounded-sm hover:border-amber/40 hover:text-amber transition-all duration-200 mt-2"
              >
                Read full case study →
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
