'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { terms } from '@/lib/proof'

const FACTS = [terms.contract, terms.intake, 'Dublin based']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // The intro hides the headline and clips the panel before revealing them.
    // If rAF never runs (background tab on load, throttling, a script error) the
    // page would sit on that hidden start state forever, so reduced motion skips
    // it and a guard forces the end state if the timeline has not finished.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let guard: number | undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        onComplete: () => { if (guard) window.clearTimeout(guard) },
      })

      tl.fromTo(
        '[data-hero-panel]',
        { clipPath: 'inset(14% 8% 14% 8% round 28px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.2, ease: 'power3.inOut' }
      )

      tl.fromTo(imageRef.current, { scale: 1.14 }, { scale: 1, duration: 1.6 }, 0)

      const lines = headlineRef.current?.querySelectorAll('.hl-inner')
      if (lines?.length) {
        tl.fromTo(
          Array.from(lines),
          { yPercent: 108 },
          { yPercent: 0, duration: 1, stagger: 0.09 },
          0.45
        )
      }

      tl.fromTo(
        ['[data-hero-eyebrow]', '[data-hero-sub]', '[data-hero-cta]', '[data-hero-facts]'],
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        0.7
      )

      // Slow parallax drift on the backdrop
      gsap.to(imageRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      if (reduced) {
        tl.progress(1)
      } else {
        guard = window.setTimeout(() => {
          if (tl.progress() < 1) tl.progress(1)
        }, 3000)
      }
    }, sectionRef)

    return () => {
      if (guard) window.clearTimeout(guard)
      ctx.revert()
    }
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
      <div
        data-hero-panel
        className="relative panel bg-ink flex flex-col justify-end overflow-hidden"
        style={{ minHeight: 'min(88svh, 900px)' }}
      >
        {/* Backdrop */}
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/images/v3/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Legibility wash: dark at the bottom where the type sits */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(7,21,40,0.94) 0%, rgba(7,21,40,0.72) 38%, rgba(7,21,40,0.24) 68%, rgba(7,21,40,0.35) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-ink opacity-60" />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-32 pb-10 md:pb-14">
          <p data-hero-eyebrow className="eyebrow eyebrow-on-ink mb-7 md:mb-9">
            Search &amp; Growth · Dublin
          </p>

          <h1
            ref={headlineRef}
            className="display text-on-ink max-w-[19ch]"
            style={{ fontSize: 'var(--text-hero)' }}
          >
            <span className="block line-mask">
              <span className="hl-inner block">We run the ads</span>
            </span>
            <span className="block line-mask">
              <span className="hl-inner block">and build the page</span>
            </span>
            <span className="block line-mask">
              <span className="hl-inner block text-orange">they land on.</span>
            </span>
          </h1>

          <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,52ch)_auto] gap-8 lg:gap-16 lg:items-end">
            <p
              data-hero-sub
              className="text-on-ink-soft text-base md:text-lg leading-relaxed"
            >
              Search advertising, SEO, AI search and landing pages for businesses in
              Dublin and across Ireland. One specialist owns the whole path from the
              search to the enquiry, so nothing gets lost between the click and the
              phone ringing.
            </p>

            <div data-hero-cta className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-orange">
                Book a call
                <span aria-hidden>→</span>
              </Link>
              <Link href="/case-studies" className="btn btn-ghost-on-ink">
                See the work
              </Link>
            </div>
          </div>

          {/* Facts strip */}
          <div
            data-hero-facts
            className="mt-10 md:mt-14 pt-6 border-t flex flex-wrap gap-x-8 gap-y-3"
            style={{ borderColor: 'var(--color-ink-line)' }}
          >
            {FACTS.map((f) => (
              <span
                key={f}
                className="label"
                style={{ color: 'var(--color-on-ink-faint)' }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
