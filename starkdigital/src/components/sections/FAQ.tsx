'use client'
import { useState, useEffect, useRef } from 'react'
import { fadeUp } from '@/lib/gsap'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  faqs: FAQItem[]
}

function FAQAccordionItem({ item }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-surface-2 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-body font-medium text-white group-hover:text-amber transition-colors duration-200 text-[15px]">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open ? 'border-amber bg-amber/10' : 'border-surface-2'
          }`}
        >
          <span
            className={`font-mono text-sm font-light transition-all duration-300 leading-none ${
              open ? 'text-amber rotate-45' : 'text-text-muted'
            }`}
          >
            +
          </span>
        </span>
      </button>

      {open && (
        <div className="pb-7">
          <div className="h-px bg-amber/30 mb-4" />
          <p className="text-text-secondary leading-relaxed text-sm">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ({ faqs }: FAQProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const els = sectionRef.current.querySelectorAll('[data-fade]')
    fadeUp(Array.from(els) as Element[])
  }, [])

  return (
    <section ref={sectionRef} className="bg-canvas py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Header */}
          <div>
            <p className="label mb-6" data-fade>Common questions</p>
            <h2
              className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: 'var(--text-display-lg)' }}
              data-fade
            >
              Answers before
              <br />
              you ask.
            </h2>
            <p className="mt-7 text-text-secondary leading-relaxed max-w-xs" data-fade>
              If there&apos;s something we haven&apos;t covered, just get in
              touch — we respond to every message within one business day.
            </p>
          </div>

          {/* Right: Accordion */}
          <div data-fade>
            {faqs.map((item, i) => (
              <FAQAccordionItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
