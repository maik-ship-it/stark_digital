import type { ReactNode } from 'react'
import Link from 'next/link'
import { legal, legalPages } from '@/lib/legal'

/**
 * Shared shell for the three legal pages. Same ink panel and typography as
 * the rest of the site, narrower measure, because this is text to be read
 * rather than scanned.
 */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  current,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  current: string
  children: ReactNode
}) {
  const others = legalPages.filter((p) => p.href !== current)

  return (
    <>
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-20 pb-12 md:pb-16">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2.5">
                <li>
                  <Link href="/" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>
                    Home
                  </Link>
                </li>
                <li aria-hidden style={{ color: 'var(--color-on-ink-faint)' }}>/</li>
                <li className="label" style={{ color: 'var(--color-on-ink-soft)' }}>{eyebrow}</li>
              </ol>
            </nav>
            <h1 className="display text-on-ink max-w-[16ch] mb-6" style={{ fontSize: 'var(--text-display-lg)' }}>
              {title}
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl mb-7">
              {intro}
            </p>
            <p className="label" style={{ color: 'var(--color-on-ink-faint)' }}>
              Last updated {legal.updated}
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-3 sm:px-6">
          <div className="prose-stark">{children}</div>

          <div className="mt-16 pt-8 border-t border-paper-3">
            <p className="label mb-4">The rest of the legal pages</p>
            <ul className="space-y-2">
              {others.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-orange underline underline-offset-4 decoration-orange/40 hover:decoration-orange transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${legal.email}`} className="text-orange underline underline-offset-4 decoration-orange/40 hover:decoration-orange transition-colors">
                  {legal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
