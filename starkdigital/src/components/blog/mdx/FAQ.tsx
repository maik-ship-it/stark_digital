'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

/**
 * Restyled onto the paper/ink palette, and given a real tap target: the rows
 * were 'text-sm' with tight padding, which is awkward on a phone. Questions now
 * sit at 16px with generous vertical padding.
 */
export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div
      className="prose-block my-9 bg-paper-2 overflow-hidden"
      style={{ borderRadius: 'var(--radius-card)' }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{ borderTop: i === 0 ? 'none' : '1px solid var(--color-paper-3)' }}
        >
          <button
            className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[16px] font-semibold text-text group-hover:text-orange transition-colors duration-200 leading-snug">
              {item.question}
            </span>
            <span
              className={`shrink-0 text-orange text-xl leading-none mt-0.5 transition-transform duration-200 ${
                open === i ? 'rotate-45' : ''
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 -mt-1">
              <p className="text-[15px] text-text-soft leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
