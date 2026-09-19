import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import { caseStudies } from '../../../../.velite'
import CTA from '@/components/v3/CTA'
import Testimonial from '@/components/v3/Testimonial'
import TableOfContents from '@/components/blog/TableOfContents'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Figures from '@/components/case-study/Figures'
import type { Figure } from '@/lib/case-studies/anthony-joyce'
import BeforeChart from '@/components/case-study/BeforeChart'
import PerformanceChart from '@/components/case-study/PerformanceChart'
import MonthTable from '@/components/case-study/MonthTable'
import Pull from '@/components/case-study/Pull'
import DraftNotice from '@/components/case-study/DraftNotice'
import Table from '@/components/blog/mdx/Table'
import { ahpra, first90 } from '@/lib/case-studies/anthony-joyce'
import { buildMetadata, SITE_URL } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }
type CaseStudy = (typeof caseStudies)[number]

/**
 * Components the MDX can use.
 *
 * `HeadlineFigures` is bound to this case study's own frontmatter so the header
 * row and the block in the body cannot drift apart. The two client-specific
 * sets come from src/lib/case-studies/anthony-joyce.ts, which is where every
 * figure on that page has to live with its basis.
 */
function mdxComponentsFor(cs: CaseStudy) {
  return {
    HeadlineFigures: () => (
      <Figures
        figures={cs.metrics.filter((m): m is Figure => Boolean(m.basis))}
        columns={2}
      />
    ),
    AhpraFigures: () => <Figures figures={ahpra} columns={3} size="sm" />,
    First90Figures: () => <Figures figures={first90} columns={3} size="sm" />,
    BeforeChart,
    PerformanceChart,
    MonthTable,
    Pull,
    // Same scrolling wrapper the blog uses, so a plain markdown table in a
    // future case study behaves on a phone.
    table: Table,
  }
}

function MDXContent({ code, components }: { code: string; components: object }) {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function('runtime', `${code}; return { default: default_export }`)
  const { default: Component } = fn(runtime) as {
    default: React.ComponentType<{ components?: object }>
  }
  return <Component components={components} />
}

export function generateStaticParams() {
  return caseStudies.filter((c) => c.published).map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}

  const meta = buildMetadata({
    title: cs.title,
    description: cs.description,
    path: cs.permalink,
    type: 'article',
    publishedTime: cs.date,
  })

  // A case study naming a client stays out of the index until it is signed off.
  return cs.status === 'live' ? meta : { ...meta, robots: { index: false, follow: false } }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug && c.published)
  if (!cs) notFound()

  const isDraft = cs.status !== 'live'
  const updated = cs.updated
    ? new Date(cs.updated).toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <article>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
          { name: cs.client, url: `${SITE_URL}${cs.permalink}` },
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
            className="object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(120deg, rgba(7,21,40,0.96) 42%, rgba(7,21,40,0.74) 100%)' }}
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
              {cs.period ? ` · ${cs.period}` : ''}
            </p>
            <h1
              className="display text-on-ink max-w-[19ch] mb-8"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              {cs.title}
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl mb-12">
              {cs.description}
            </p>

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
            <p className="text-on-ink-faint text-[13px] mt-6">
              Each of these is set out with its measurement basis further down. Nothing
              on this page is quoted without one.
            </p>
          </div>
        </div>
      </section>

      {isDraft && (
        <section className="px-3 sm:px-4">
          <div className="max-w-7xl mx-auto">
            <DraftNotice items={cs.signOff} />
          </div>
        </section>
      )}

      {/* ── The two pages the account was built on ───── */}
      <section className="px-3 sm:px-4 pt-14 md:pt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <p className="eyebrow mb-6">The pages behind it</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                src: '/images/v3/work-1.jpg',
                url: 'immigration.anthonyjoyce.ie',
                line: 'Citizenship, work permits and IRP renewals, built around the phone number rather than a form. Takes the majority of the account’s traffic.',
              },
              {
                src: '/images/v3/case-notary.jpg',
                url: 'notary.anthonyjoyce.ie',
                line: 'AHPRA document certification for nurses and doctors registering to practise in Australia. A tiny market, and the firm holds 84 per cent of it.',
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

      {/* ── Body, with the contents rail alongside ───── */}
      <section className="px-3 sm:px-4 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 xl:gap-20">
            <div className="max-w-3xl mx-auto lg:mx-0 w-full">
              <div className="prose-stark">
                <MDXContent code={cs.body} components={mdxComponentsFor(cs)} />
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Client quote ─────────────────────────────── */}
      <section className="px-3 sm:px-4 pb-14 md:pb-20">
        <div className="max-w-3xl mx-auto px-3 sm:px-6">
          <p className="eyebrow mb-6">What the firm said</p>
          <Testimonial />
          {updated && (
            <p className="text-text-faint text-[13px] mt-8">
              {cs.client}, {cs.location}. Figures last updated {updated}. This page is
              refreshed with new monthly figures each quarter.
            </p>
          )}
        </div>
      </section>

      <CTA />
    </article>
  )
}
