import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/lib/industries'
import FAQSchema from '@/components/seo/FAQSchema'
import CtaV2 from '@/components/sections/CtaV2'

type Props = { params: Promise<{ industry: string }> }

export function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) return {}
  return {
    title: ind.title,
    description: ind.metaDescription,
    alternates: { canonical: `https://starkdigital.ie/google-ads-dublin/${ind.slug}` },
  }
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) notFound()

  const lines = ind.headline.split('\n')

  return (
    <>
      {ind.faqs.length > 0 && <FAQSchema faqs={ind.faqs} />}

      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label mb-6">Google Ads · {ind.title.split(' ').slice(-2).join(' ')}</p>
          <h1
            className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] max-w-3xl mb-6"
            style={{ fontSize: 'var(--text-display-xl)' }}
          >
            {lines[0]}
            {lines[1] && (
              <>
                <br />
                <em className="italic text-amber">{lines[1]}</em>
              </>
            )}
          </h1>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-10">
            {ind.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats (if available) */}
      {ind.stats.length > 0 && (
        <section className="bg-surface py-20 border-t border-surface-2">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ind.stats.map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="font-serif font-bold text-amber mb-2"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                  >
                    {value}
                  </p>
                  <p className="label-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {ind.faqs.length > 0 && (
        <section className="bg-canvas py-24 border-t border-surface-2">
          <div className="max-w-6xl mx-auto px-6">
            <p className="label mb-10">Common questions</p>
            <div className="max-w-2xl">
              {ind.faqs.map((faq, i) => (
                <div key={i} className="border-b border-surface-2 py-6 last:border-0">
                  <h3 className="font-body font-medium text-white mb-3">{faq.q}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaV2 />
    </>
  )
}
