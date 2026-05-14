import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

const CASE_STUDIES = [
  {
    slug: 'anthony-joyce-solicitors',
    title: 'How Anthony Joyce Solicitors Increased Client Enquiries by 112%',
    client: 'Anthony Joyce Solicitors Co',
    industry: 'Legal / Solicitors',
    location: 'Dublin 8, Ireland',
    published: true,
    metrics: [
      { label: 'Return on Ad Spend', value: '3.4×' },
      { label: 'Cost per Lead', value: '−38%' },
      { label: 'Client Enquiries', value: '+112%' },
      { label: 'Timeframe', value: '90 days' },
    ],
  },
]

export function generateStaticParams() {
  return CASE_STUDIES.filter((c) => c.published).map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) return {}
  return { title: cs.title }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs || !cs.published) notFound()

  return (
    <article className="bg-canvas pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <p className="label mb-6">{cs.industry} · {cs.location}</p>
          <h1
            className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] mb-12"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            {cs.title}
          </h1>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-surface border border-surface-2 rounded-sm mb-16">
            {cs.metrics.map(({ label, value }) => (
              <div key={label} className="text-center">
                <p
                  className="font-serif font-bold text-amber mb-1"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
                >
                  {value}
                </p>
                <p className="label-muted">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-text-secondary">Full case study coming soon.</p>

          <div className="mt-16 pt-12 border-t border-surface-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
