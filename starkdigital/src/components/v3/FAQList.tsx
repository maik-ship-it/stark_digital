'use client'
import { useState } from 'react'
import type { Faq } from '@/lib/faqs'
import Reveal from './Reveal'

/** Accordion list. Shared by the homepage FAQ and every service page. */
export default function FAQList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Reveal stagger className="border-t border-paper-3">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="border-b border-paper-3">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 text-left py-6 md:py-7 group"
            >
              <span
                className="display pr-2 transition-colors duration-200 group-hover:text-orange"
                style={{ fontSize: 'clamp(17px, 1.7vw, 22px)', lineHeight: 1.25 }}
              >
                {f.q}
              </span>
              <span
                className="shrink-0 mt-1 w-7 h-7 rounded-full border border-paper-3 flex items-center justify-center transition-all duration-300"
                style={{
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  borderColor: isOpen ? 'var(--color-orange)' : undefined,
                  color: isOpen ? 'var(--color-orange)' : 'var(--color-text-soft)',
                }}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-400 ease-out"
              style={{ maxHeight: isOpen ? 640 : 0, opacity: isOpen ? 1 : 0 }}
            >
              <p className="text-text-soft text-[15px] md:text-base leading-relaxed pb-7 max-w-2xl">
                {f.a}
              </p>
            </div>
          </div>
        )
      })}
    </Reveal>
  )
}
