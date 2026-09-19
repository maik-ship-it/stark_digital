import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { industries, getIndustry } from '@/lib/industries'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import CTA from '@/components/v3/CTA'
import Reveal from '@/components/v3/Reveal'
import FAQList from '@/components/v3/FAQList'
import RichText from '@/components/v3/RichText'
import { buildMetadata, SITE_URL } from '@/lib/seo'
import { claims } from '@/lib/proof'

type Props = { params: Promise<{ industry: string }> }

const BASE = SITE_URL

export function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params
  const ind = getIndustry(slug)
  if (!ind) return {}
  return buildMetadata({
    title: ind.title,
    description: ind.metaDescription,
    path: `/google-ads-dublin/${ind.slug}`,
  })
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params
  const ind = getIndustry(slug)
  if (!ind) notFound()

  const url = `${BASE}/google-ads-dublin/${ind.slug}`
  const others = industries.filter((i) => i.slug !== ind.slug)

  return (
    <>
      <FAQSchema faqs={ind.faqs} />
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: BASE },
          { name: 'Google Ads Dublin', url: `${BASE}/google-ads-dublin` },
          { name: ind.nav, url },
        ]}
      />
      <ServiceSchema name={ind.title} description={ind.metaDescription} url={url} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <Image
            src="/images/v3/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(120deg, rgba(7,21,40,0.95) 35%, rgba(7,21,40,0.72) 100%)' }}
          />
          <div className="absolute inset-0 bg-grid-ink" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-24 pb-14 md:pb-20">
            <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
              <ol className="flex flex-wrap items-center gap-2.5">
                <li>
                  <Link href="/" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>Home</Link>
                </li>
                <li className="label" style={{ color: 'var(--color-on-ink-faint)' }}>/</li>
                <li>
                  <Link href="/google-ads-dublin" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>Google Ads</Link>
                </li>
                <li className="label" style={{ color: 'var(--color-on-ink-faint)' }}>/</li>
                <li className="label" style={{ color: 'var(--color-on-ink-soft)' }}>{ind.nav}</li>
              </ol>
            </nav>

            <p className="eyebrow eyebrow-on-ink mb-7">{ind.eyebrow}</p>

            <h1
              className="display text-on-ink max-w-[18ch] mb-8"
              style={{ fontSize: 'var(--text-display-xl)' }}
            >
              {ind.headline.map((line) => (
                <span key={line} className="block line-mask">
                  <span className={line === ind.accent ? 'block text-orange' : 'block'}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              {ind.subheadline}
            </p>

            <Link href="/contact" className="btn btn-orange">
              Book a call
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── The observation ──────────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-20">
            <div>
              <p className="eyebrow mb-6">What I see in this market</p>
              <h2 className="display max-w-[16ch]" style={{ fontSize: 'var(--text-display-md)' }}>
                {ind.observation.heading}
              </h2>
            </div>
            <div className="space-y-6">
              {ind.observation.body.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'text-text text-lg md:text-xl font-medium'
                      : 'text-text-soft text-base md:text-lg'
                  }`}
                >
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── How the account gets built ───────────────── */}
      <section className="px-3 sm:px-4 py-6">
        <div className="panel bg-ink relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28">
            <Reveal className="mb-14 max-w-3xl">
              <p className="eyebrow eyebrow-on-ink mb-6">How the account gets built</p>
              <h2 className="display text-on-ink" style={{ fontSize: 'var(--text-display-lg)' }}>
                What that means in practice.
              </h2>
            </Reveal>

            <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-px">
              {ind.specifics.map((sp, i) => (
                <div
                  key={sp.title}
                  className="p-8 md:p-10"
                  style={{
                    background: 'rgba(242,240,235,0.035)',
                    outline: '1px solid var(--color-ink-line)',
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="display text-orange" style={{ fontSize: '14px', letterSpacing: '0.1em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display text-on-ink" style={{ fontSize: 'clamp(19px, 2vw, 25px)' }}>
                      {sp.title}
                    </h3>
                  </div>
                  <p className="text-on-ink-soft text-sm md:text-[15px] leading-relaxed">
                    <RichText text={sp.body} />
                  </p>
                  {sp.figures && sp.figures.length > 0 && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-x-10 gap-y-4">
                        {sp.figures.map((f) => (
                          <div key={f.label}>
                            <div className="display text-on-ink" style={{ fontSize: 'clamp(19px, 2vw, 25px)' }}>
                              {f.value}
                            </div>
                            <div className="label" style={{ color: 'var(--color-on-ink-faint)' }}>
                              {f.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      {sp.basis && (
                        <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--color-on-ink-faint)' }}>
                          {sp.basis}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Case study, where there is one ───────────── */}
      {ind.caseStudy && (
        <section className="px-3 sm:px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <Reveal className="panel bg-paper-2 p-8 md:p-12">
              <p className="eyebrow mb-6">A client in this market</p>
              <h2 className="display mb-8 max-w-[20ch]" style={{ fontSize: 'var(--text-display-md)' }}>
                Anthony Joyce &amp; Co. Solicitors, first 90 days.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-9">
                {[claims.enquiries, claims.costPerLead, claims.roas].map((c) => (
                  <div key={c.label}>
                    <p className="display text-orange mb-2" style={{ fontSize: 'clamp(30px, 3.5vw, 46px)' }}>
                      {c.value}
                    </p>
                    <p className="label mb-3">{c.label}</p>
                    <p className="text-text-soft text-[13px] leading-relaxed">{c.basis}</p>
                  </div>
                ))}
              </div>
              {ind.caseStudyNote && (
                <p className="text-text-soft text-base md:text-lg leading-relaxed max-w-3xl mb-9">
                  {ind.caseStudyNote}
                </p>
              )}
              <Link href={`/case-studies/${ind.caseStudy}`} className="btn btn-ink">
                Read the full breakdown
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-6">Questions</p>
              <h2 className="display max-w-[12ch]" style={{ fontSize: 'var(--text-display-lg)' }}>
                {ind.nav}, asked properly.
              </h2>
            </Reveal>
            <FAQList faqs={ind.faqs} />
          </div>
        </div>
      </section>

      {/* ── Further reading and other industries ─────── */}
      <section className="px-3 sm:px-4 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-6">Further reading</p>
            {/* Every industry page points back at both services by name. The
                anchor is the thing being linked to, not "learn more". */}
            <p className="text-text-soft text-base leading-relaxed mb-8">
              This page is the paid side of the work. The same firms usually want{' '}
              <Link href="/seo-dublin" className="underline underline-offset-4 decoration-orange/40 hover:decoration-orange transition-colors">
                SEO in Dublin
              </Link>{' '}
              running underneath it, and the wider picture on{' '}
              <Link href="/google-ads-dublin" className="underline underline-offset-4 decoration-orange/40 hover:decoration-orange transition-colors">
                Google Ads in Dublin
              </Link>{' '}
              sits one level up from here.
            </p>
            <ul className="space-y-px">
              {ind.blogLinks.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/blog/${b.slug}`}
                    className="group flex items-center justify-between gap-5 py-5 border-b border-paper-3"
                  >
                    <span className="display text-[17px] md:text-[19px] group-hover:text-orange transition-colors">
                      {b.title}
                    </span>
                    <span className="text-orange transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow mb-6">Other markets</p>
            <div className="flex flex-wrap gap-2.5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/google-ads-dublin/${o.slug}`}
                  className="label px-4 py-2.5 rounded-full border border-paper-3 hover:border-ink hover:text-text transition-colors"
                >
                  {o.nav}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
