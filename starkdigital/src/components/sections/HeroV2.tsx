'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function HeroV2() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Eyebrow slides in
      tl.fromTo(
        eyebrowRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )

      // Each headline line: text slides up from inside mask (Webflow style)
      const lines = headlineRef.current?.querySelectorAll('.hl-inner')
      if (lines && lines.length > 0) {
        tl.fromTo(
          Array.from(lines),
          { y: '105%' },
          { y: '0%', duration: 1.0, stagger: 0.1, ease: 'power4.out' },
          '-=0.3'
        )
      }

      // Sub, CTAs, Trust
      tl.fromTo(
        [subRef.current, ctaRef.current, trustRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.09 },
        '-=0.5'
      )

      // Image: clip-path wipe from bottom
      tl.fromTo(
        imageWrapRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut' },
        0.15
      )

      // Image itself fades to remove banding
      tl.fromTo(
        imageRef.current,
        { scale: 1.06 },
        { scale: 1, duration: 1.4, ease: 'power2.out' },
        0.15
      )

      // Card pops in
      tl.fromTo(
        cardRef.current,
        { y: 12, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' },
        1.0
      )

      // Parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section
      ref={sectionRef}
      className="relative bg-canvas overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-8 lg:gap-12 xl:gap-16 items-center"
          style={{ minHeight: '100svh', paddingTop: '7rem', paddingBottom: '3rem' }}
        >

          {/* ── Left column ────────────────────────────── */}
          <div className="flex flex-col justify-center py-4 lg:py-8 order-2 lg:order-1">

            {/* Eyebrow */}
            <p ref={eyebrowRef} className="label mb-6 md:mb-8 flex items-center gap-3">
              <span className="w-5 h-px bg-amber inline-block" />
              Google Ads · Dublin · Professional Services
            </p>

            {/* Headline — mask-reveal per line */}
            <h1
              ref={headlineRef}
              className="font-serif font-bold text-white tracking-[-0.01em] mb-8 md:mb-10"
              style={{ fontSize: 'clamp(36px, 5.5vw, 82px)', lineHeight: 1.0 }}
              aria-label="Google Ads that get more clients for Dublin's best professional services firms."
            >
              {/* Each line wrapped in overflow-hidden mask — extra padding for Cormorant descenders */}
              <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
                <span className="hl-inner block">Google Ads that</span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
                <span className="hl-inner block">get more clients</span>
              </span>
              <span className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
                <span className="hl-inner block">
                  for Dublin&apos;s{' '}
                  <em className="text-amber not-italic">best.</em>
                </span>
              </span>
            </h1>

            {/* Sub copy */}
            <div ref={subRef} className="mb-8 md:mb-10 max-w-lg">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Solicitors, accountants, financial advisors — we run
                high-performance Google Ads campaigns for professional services
                firms in Ireland. Boutique by design. Results by default.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-3 md:gap-4 items-center mb-10 md:mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber text-canvas font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-sm hover:bg-amber-dim transition-colors duration-200"
              >
                Let&apos;s Talk
                <span>→</span>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm md:text-base font-medium px-6 md:px-8 py-3.5 md:py-4 rounded-sm hover:border-amber/50 hover:text-white transition-all duration-200"
              >
                See Client Results
              </Link>
            </div>

            {/* Mobile-only result card */}
            <div className="lg:hidden mb-8 inline-flex items-center gap-4 bg-surface border border-surface-2 rounded-sm px-5 py-3.5 shadow-card self-start">
              <div>
                <p
                  className="font-serif font-bold text-amber leading-none"
                  style={{ fontSize: 'clamp(22px, 5vw, 28px)' }}
                >
                  +112%
                </p>
                <p className="label-muted text-[10px] mt-1">Client enquiries</p>
              </div>
              <div className="h-8 w-px bg-surface-2" />
              <div>
                <p className="label-muted text-[10px]">Anthony Joyce Solicitors</p>
                <p className="label-muted text-[9px] mt-0.5" style={{ opacity: 0.6 }}>90 days</p>
              </div>
            </div>

            {/* Trust strip */}
            <div ref={trustRef} className="flex flex-wrap gap-4 md:gap-7 border-t border-surface-2 pt-6 md:pt-8">
              {[
                'No long-term contracts',
                'Max. 8 active clients',
                'Results in 2–4 weeks',
                'Dublin-based specialist',
              ].map((t) => (
                <span key={t} className="label-muted flex items-center gap-2 text-[10px]">
                  <span className="w-1 h-1 rounded-full bg-amber inline-block shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column — image ──────────────────── */}
          <div className="hidden lg:flex flex-col gap-4 py-8 order-1 lg:order-2 self-center">

            {/* Main image with clip-path reveal wrapper */}
            <div ref={imageWrapRef} className="relative w-full overflow-hidden rounded-sm bg-surface-2" style={{ aspectRatio: '3/4' }}>
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src="/images/Maik.webp"
                  alt="Maik — Google Ads Specialist, Dublin"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(244,240,234,0.06)' }}
                />
              </div>
            </div>

            {/* Floating result card */}
            <div
              ref={cardRef}
              className="bg-canvas border border-surface-2 rounded-sm px-5 py-4 shadow-card self-start ml-5 -mt-14 relative z-10"
            >
              <p
                className="font-serif font-bold text-amber leading-none"
                style={{ fontSize: 'clamp(26px, 2.5vw, 36px)' }}
              >
                +112%
              </p>
              <p className="label-muted mt-2 text-[10px]">Client enquiries</p>
              <p className="label-muted text-[9px] mt-0.5" style={{ opacity: 0.6 }}>
                Anthony Joyce Solicitors · 90 days
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
