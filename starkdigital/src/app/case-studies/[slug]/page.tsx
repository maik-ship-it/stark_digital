import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import { caseStudies } from '../../../../.velite'
import CTA from '@/components/v3/CTA'
import Testimonial from '@/components/v3/Testimonial'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

function MDXContent({ code }: { code: string }) {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function('runtime', `${code}; return { default: default_export }`)
  const { default: Component } = fn(runtime) as { default: React.ComponentType }
  return <Component />
}

export function generateStaticParams() {
  return caseStudies.filter((c) => c.published).map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return buildMetadata({
    title: cs.title,
    description: `${cs.client}, ${cs.industry}, ${cs.location}. What 90 days of paid search changed, with the measurement basis for every figure.`,
    path: `/case-studies/${cs.slug}`,
    type: 'article',
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug && c.published)
  if (!cs) notFound()

  return (
    <article>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: 'https://starkdigital.ie' },
          { name: 'Case Studies', url: 'https://starkdigital.ie/case-studies' },
          { name: cs.client, url: `https://starkdigital.ie/case-studies/${cs.slug}` },
        ]}
      />

      {/* ── Header panel ─────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <Image
            src="/images/v3/case-study.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(120deg, rgba(7,21,40,0.95) 40%, rgba(7,21,40,0.72) 100%)' }}
          />
          <div className="absolute inset-0 bg-grid-ink" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-14 md:pt-20 pb-12 md:pb-16">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2.5">
                <li>
                  <Link href="/" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>Home</Link>
                </li>
                <li className="label" style={{ color: 'var(--color-on-ink-faint)' }}>/</li>
                <li>
                  <Link href="/case-studies" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>Case Studies</Link>
                </li>
              </ol>
            </nav>

            <p className="eyebrow eyebrow-on-ink mb-7">
              {cs.industry} · {cs.location}
            </p>
            <h1
              className="display text-on-ink max-w-[20ch] mb-10"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              {cs.title}
            </h1>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t"
              style={{ borderColor: 'var(--color-ink-line)' }}
            >
              {cs.metrics.map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="display text-orange mb-2"
                    style={{ fontSize: 'clamp(28px, 3.2vw, 46px)' }}
                  >
                    {value}
                  </p>
                  <p className="label" style={{ color: 'var(--color-on-ink-faint)' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The two pages the account was built on ───── */}
      <section className="px-3 sm:px-4 pt-14 md:pt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <p className="eyebrow mb-6">The pages behind it</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                src: '/images/v3/case-notary.jpg',
                url: 'notary.anthonyjoyce.ie',
                line: 'AHPRA document certification for nurses and doctors moving to Australia',
              },
              {
                src: '/images/v3/work-1.jpg',
                url: 'immigration.anthonyjoyce.ie',
                line: 'Citizenship, work permits and IRP renewals, built around the phone number',
              },
            ].map((s) => (
              <figure key={s.url}>
                <div className="relative panel aspect-[4/3] bg-paper-2 mb-4">
                  <Image
                    src={s.src}
                    alt={`Screenshot of ${s.url}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption>
                  <p className="label mb-2">{s.url}</p>
                  <p className="text-text-soft text-[15px] leading-relaxed">{s.line}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-3 sm:px-6">
          <div className="prose-stark">
            <MDXContent code={cs.body} />
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-3 sm:px-6">
          <p className="eyebrow mb-6">In their words</p>
          <Testimonial />
        </div>
      </section>

      <CTA />
    </article>
  )
}
