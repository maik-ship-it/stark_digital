'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('.prose-stark')
    if (!article) return

    const els = Array.from(article.querySelectorAll('h2, h3')) as HTMLElement[]
    const parsed: Heading[] = els.map((el) => {
      const text = el.innerText
      const id = slugify(text)
      el.id = id
      return { id, text, level: el.tagName === 'H2' ? 2 : 3 }
    })
    setHeadings(parsed)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0% -70% 0%' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (headings.length < 2) return null

  return (
    <nav aria-label="Table of contents">
      <p className="label mb-4">On this page</p>
      <div className="h-px bg-surface-2 mb-4" />
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '0.875rem' : '0' }}>
            <a
              href={`#${h.id}`}
              className={`block text-sm leading-snug py-1 transition-colors duration-150 ${
                activeId === h.id
                  ? 'text-amber font-medium'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
