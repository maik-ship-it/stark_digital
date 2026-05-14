'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="my-8 border border-surface-2 rounded-sm divide-y divide-surface-2">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-white group-hover:text-amber transition-colors duration-200 leading-snug">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 text-amber font-mono text-sm transition-transform duration-200 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
