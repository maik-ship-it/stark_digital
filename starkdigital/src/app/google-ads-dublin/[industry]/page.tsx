import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { industries } from '@/lib/industries'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
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
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: 'https://starkdigital.ie' },
        { name: 'Google Ads Dublin', url: 'https://starkdigital.ie/google-ads-dublin' },
        { name: ind.title, url: `https://starkdigital.ie/google-ads-dublin/${ind.slug}` },
      ]} />
      <ServiceSchema
        name={ind.title}
        description={ind.metaDescription}
        url={`https://starkdigital.ie/google-ads-dublin/${ind.slug}`}
      />

      {/* Hero */}
      <section className="bg-canvas pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-2 mb-10 text-xs font-mono tracking-wider uppercase text-text-muted">
            <Link href="/" className="hover:text-amber transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/google-ads-dublin" className="hover:text-amber transition-colors duration-200">Google Ads Dublin</Link>
            <span>/</span>
            <span className="text-text-secondary">{ind.title.split(' ').slice(-2).join(' ')}</span>
          </nav>

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
              Get a Free Audit →
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-6 py-3 rounded-sm hover:border-surface-3 hover:text-white transition-colors duration-200"
            >
              Read our insights
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Pain Points — "Sound familiar?" */}
      {ind.painPoints.length > 0 && (
        <section className="bg-canvas py-24 border-t border-surface-2">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="label mb-6">The challenge</p>
                <h2
                  className="font-serif font-bold text-white leading-[0.95] mb-6"
                  style={{ fontSize: 'var(--text-display-md)' }}
                >
                  Sound familiar?
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Most professional service businesses in Dublin face the same core problem — unpredictable client flow and no reliable system to fix it. Google Ads, done right, solves this.
                </p>
              </div>
              <ul className="space-y-4">
                {ind.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-amber/40 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    </span>
                    <p className="text-text-secondary leading-relaxed text-[0.9375rem]">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* What We Do */}
      {ind.whatWeDo.length > 0 && (
        <section className="bg-surface py-24 border-t border-surface-2">
          <div className="max-w-6xl mx-auto px-6">
            <p className="label mb-6">How we work</p>
            <h2
              className="font-serif font-bold text-white leading-[0.95] mb-14 max-w-xl"
              style={{ fontSize: 'var(--text-display-md)' }}
            >
              What we actually do for{' '}
              <em className="italic text-amber">
                {ind.title.toLowerCase().replace('google ads for ', '').replace(' dublin', '')}
              </em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ind.whatWeDo.map((item, i) => (
                <div
                  key={i}
                  className="bg-canvas border border-surface-2 rounded-sm p-7 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-amber">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-amber/20" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Links — Further reading */}
      {ind.blogLinks.length > 0 && (
        <section className="bg-canvas py-20 border-t border-surface-2">
          <div className="max-w-6xl mx-auto px-6">
            <p className="label mb-6">Further reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {ind.blogLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={`/blog/${link.slug}`}
                  className="group flex items-start gap-4 bg-surface border border-surface-2 rounded-sm p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="mt-0.5 flex-shrink-0 text-amber font-mono text-sm">↗</span>
                  <span className="text-sm font-medium text-white leading-snug group-hover:text-amber transition-colors duration-200">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {ind.faqs.length > 0 && (
        <section className="bg-surface py-24 border-t border-surface-2">
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
