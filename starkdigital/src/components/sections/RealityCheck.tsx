'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const POINTS = [
  {
    number: '01',
    title: 'You talk directly to the specialist',
    body: 'No account managers, no handoffs, no juniors. When you work with Stark Digital, you work with Maik — the person who actually builds and runs your campaigns.',
  },
  {
    number: '02',
    title: 'We only work in professional services',
    body: "Solicitors, accountants, financial advisors. That's it. We don't take on e-commerce, restaurants, or random enquiries. Narrow focus makes us better.",
  },
  {
    number: '03',
    title: 'Maximum 8 active clients — by design',
    body: 'Not a boast. A constraint we enforce deliberately. Your campaigns get the attention they deserve, not a fraction of it divided among 200 accounts.',
  },
  {
    number: '04',
    title: 'You own everything. Always.',
    body: 'Your Google Ads account, your data, your results. You can walk away any time and take it all with you. Zero lock-in. We earn your trust every month.',
  },
]

export default function RealityCheck() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Label fade
      gsap.fromTo(
        '[data-rc-label]',
        { y: 14, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '[data-rc-label]', start: 'top 84%', once: true },
        }
      )

      // Headline lines mask reveal
      const lines = headlineRef.current?.querySelectorAll('.rc-line')
      if (lines) {
        gsap.fromTo(
          Array.from(lines),
          { y: '108%' },
          {
            y: '0%', duration: 0.9, stagger: 0.08, ease: 'power4.out',
            scrollTrigger: { trigger: headlineRef.current, start: 'top 82%', once: true },
          }
        )
      }

      // Right col fades in
      gsap.fromTo(
        '[data-rc-right]',
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: '[data-rc-right]', start: 'top 82%', once: true },
        }
      )

      // Grid cards stagger with clip-path
      const cards = sectionRef.current?.querySelectorAll('[data-rc-card]')
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { y: 32, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: '[data-rc-grid]', start: 'top 82%', once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  void ScrollTrigger

  return (
    <section ref={sectionRef} className="bg-surface py-24 md:py-32 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-surface-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-24 items-end">

          <div>
            <p className="label mb-6 md:mb-8" data-rc-label>Why boutique beats big</p>
            <h2
              ref={headlineRef}
              className="font-serif font-bold text-white tracking-[-0.01em]"
              style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', lineHeight: 0.95 }}
            >
              {['8 clients.', 'Not 200.', "That's the", 'whole point.'].map((line, i) => (
                <span key={i} className="block overflow-hidden" style={{ paddingBottom: '0.16em' }}>
                  <span className={`rc-line block${i === 1 ? ' text-amber' : ''}`}>{line}</span>
                </span>
              ))}
            </h2>
          </div>

          <div data-rc-right>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
              Most Google Ads agencies in Ireland manage hundreds of clients.
              That&apos;s their business model — volume, not quality. More clients
              means more revenue for them, even if results slide.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              We do the opposite. We deliberately limit how many businesses
              we take on, so every campaign gets the time and attention it
              actually needs to perform.
            </p>
            <div className="h-px bg-surface-2 mt-10" />
          </div>
        </div>

        {/* Points grid — 2x2 + 1 photo card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-2" data-rc-grid>
          {POINTS.map((p) => (
            <div
              key={p.number}
              data-rc-card
              className="group bg-surface p-8 md:p-10 hover:bg-canvas transition-colors duration-300 relative overflow-hidden cursor-default"
            >
              {/* Watermark */}
              <span
                className="absolute top-6 right-6 font-display font-bold select-none transition-colors duration-300"
                style={{ fontSize: 'clamp(56px, 7vw, 88px)', lineHeight: 1, color: 'var(--color-surface-2)' }}
                aria-hidden
              >
                {p.number}
              </span>

              {/* Amber accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />

              <h3
                className="font-display font-bold text-white mb-4 leading-tight relative z-10"
                style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
              >
                {p.title}
              </h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed relative z-10 max-w-xs">
                {p.body}
              </p>
            </div>
          ))}

          {/* Photo card — Maik */}
          <div
            data-rc-card
            className="relative bg-surface-2 overflow-hidden min-h-[380px] md:min-h-[420px]"
          >
            <Image
              src="/images/maik.jpg"
              alt="Maik Stark — Google Ads Specialist, Stark Digital"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-display font-bold text-white text-base md:text-lg">Maik Stark</p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Founder · Google Ads Specialist · Dublin
              </p>
            </div>
          </div>

          {/* Fifth card — promise */}
          <div
            data-rc-card
            className="group bg-amber/8 border-l-2 border-amber p-8 md:p-10 relative overflow-hidden cursor-default"
            style={{ background: 'rgba(192,122,8,0.05)' }}
          >
            <p
              className="font-serif font-bold text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
            >
              &ldquo;We earn your business every single month.&rdquo;
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              No retainer lock-in. No 12-month contracts. If the results aren&apos;t
              there, you&apos;re free to leave — and we&apos;ll help you transition cleanly.
            </p>
            <div className="mt-6 pt-5 border-t border-surface-2 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-amber inline-block" />
              <span className="label-muted text-[10px]">Month-to-month · No hidden fees</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
