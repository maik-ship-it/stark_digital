'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function TestimonialV2() {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Label
      gsap.fromTo(
        '[data-t-label]',
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      )

      // Image slides in from left with clip
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 0 0 100%)', x: -12 },
        {
          clipPath: 'inset(0 0 0 0%)', x: 0, duration: 1.0, ease: 'power3.inOut', delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      )

      // Quote words stagger
      gsap.fromTo(
        quoteRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.25,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      )

      // Attribution + footer
      gsap.fromTo(
        '[data-t-attr]',
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-surface py-24 md:py-32 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-surface-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <p className="label mb-10 md:mb-14" data-t-label>What clients say</p>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start mb-16 md:mb-20">

          {/* Photo of Anthony Joyce */}
          <div ref={imageRef} className="w-48 h-56 md:w-64 md:h-72 lg:w-full lg:h-80 relative rounded-sm overflow-hidden bg-surface-2 flex-shrink-0">
            <Image
              src="/images/anthony-joyce.png"
              alt="Anthony Joyce — Managing Partner, Anthony Joyce Solicitors"
              fill
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 280px"
              className="object-cover"
              style={{ objectPosition: '62% top' }}
            />
          </div>

          {/* Quote */}
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-6 md:mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-amber text-lg md:text-xl">★</span>
              ))}
            </div>

            <blockquote
              ref={quoteRef}
              className="font-serif font-semibold text-white leading-[1.05] tracking-[-0.01em] mb-8 md:mb-10"
              style={{ fontSize: 'clamp(22px, 3.5vw, 52px)' }}
            >
              &ldquo;Maik understood exactly what we needed. He delivered a clean,
              results-driven campaign and we&apos;ve already seen a
              significant increase in client enquiries coming in.&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pt-6 border-t border-surface-2" data-t-attr>
              <div>
                <p className="font-display font-bold text-white text-lg md:text-xl">Anthony Joyce</p>
                <p className="label-muted mt-1.5">Managing Partner · Anthony Joyce Solicitors · Dublin</p>
              </div>
              <div>
                <p
                  className="font-serif font-bold text-amber leading-none"
                  style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                >
                  +112%
                </p>
                <p className="label-muted mt-1">enquiries · 90 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof footer */}
        <div
          className="flex flex-wrap items-center gap-5 md:gap-8 pt-8 border-t border-surface-2"
          data-t-attr
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-amber text-sm">★</span>
            ))}
          </div>
          <p className="label-muted">5-star Google Reviews</p>
          <div className="h-4 w-px bg-surface-2 hidden sm:block" />
          <p className="label-muted">Dublin, Ireland</p>
          <div className="h-4 w-px bg-surface-2 hidden sm:block" />
          <p className="label-muted">100% client satisfaction</p>
        </div>

      </div>
    </section>
  )
}
