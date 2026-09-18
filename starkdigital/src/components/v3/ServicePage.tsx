import Link from 'next/link'
import Image from 'next/image'
import type { Service } from '@/lib/services'
import { services } from '@/lib/services'
import { terms } from '@/lib/proof'
import Reveal from './Reveal'
import FAQList from './FAQList'
import CTA from './CTA'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import FAQSchema from '@/components/seo/FAQSchema'

const BASE = 'https://starkdigital.ie'

export default function ServicePage({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug)
  const url = `${BASE}/${service.slug}`

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: BASE },
          { name: service.nav, url },
        ]}
      />
      <ServiceSchema
        name={service.metaTitle}
        description={service.metaDescription}
        url={url}
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, rgba(7,21,40,0.95) 35%, rgba(7,21,40,0.7) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-grid-ink" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-24 pb-14 md:pb-20">
            <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
              <ol className="flex flex-wrap items-center gap-2.5">
                <li>
                  <Link
                    href="/"
                    className="label hover:text-orange transition-colors"
                    style={{ color: 'var(--color-on-ink-faint)' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="label" style={{ color: 'var(--color-on-ink-faint)' }}>
                  /
                </li>
                <li className="label" style={{ color: 'var(--color-on-ink-soft)' }}>
                  {service.nav}
                </li>
              </ol>
            </nav>

            <p className="eyebrow eyebrow-on-ink mb-7">{service.eyebrow}</p>

            <h1
              className="display text-on-ink max-w-[18ch] mb-8"
              style={{ fontSize: 'var(--text-display-xl)' }}
            >
              {service.headline.map((line) => (
                <span key={line} className="block line-mask">
                  <span className={line === service.accent ? 'block text-orange' : 'block'}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              {service.intro}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-orange">
                Book a call
                <span aria-hidden>→</span>
              </Link>
              <a href={`mailto:${terms.email}`} className="btn btn-ghost-on-ink">
                {terms.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── The opinionated bit ──────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-20">
            <div>
              <p className="eyebrow mb-6">Straight up</p>
              <h2
                className="display max-w-[14ch]"
                style={{ fontSize: 'var(--text-display-md)' }}
              >
                {service.take.heading}
              </h2>
            </div>
            <div className="space-y-6">
              {service.take.body.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? 'text-text text-lg md:text-xl font-medium'
                      : 'text-text-soft text-base md:text-lg'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What the work is ─────────────────────────── */}
      <section className="px-3 sm:px-4 py-6">
        <div className="panel bg-ink relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28">
            <Reveal className="mb-14 md:mb-18 max-w-3xl">
              <p className="eyebrow eyebrow-on-ink mb-6">What the work is</p>
              <h2
                className="display text-on-ink"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                What you are actually paying for.
              </h2>
            </Reveal>

            <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-px">
              {service.work.map((w, i) => (
                <div
                  key={w.title}
                  className="p-8 md:p-10"
                  style={{
                    background: 'rgba(242,240,235,0.035)',
                    outline: '1px solid var(--color-ink-line)',
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span
                      className="display text-orange"
                      style={{ fontSize: '14px', letterSpacing: '0.1em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="display text-on-ink"
                      style={{ fontSize: 'clamp(19px, 2vw, 26px)' }}
                    >
                      {w.title}
                    </h3>
                  </div>
                  <p className="text-on-ink-soft text-sm md:text-[15px] leading-relaxed">
                    {w.body}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What it does not do ──────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Reveal className="mb-10 md:mb-14 max-w-3xl">
            <p className="eyebrow mb-6">The limits</p>
            <h2 className="display" style={{ fontSize: 'var(--text-display-lg)' }}>
              What this will not do for you.
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper-3 rounded-[18px] overflow-hidden"
          >
            {service.limits.map((l) => (
              <div key={l.title} className="bg-paper-2 p-8 md:p-10">
                <h3
                  className="display mb-4 max-w-[18ch]"
                  style={{ fontSize: 'clamp(18px, 1.9vw, 23px)' }}
                >
                  {l.title}
                </h3>
                <p className="text-text-soft text-[15px] leading-relaxed">{l.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-6">Questions</p>
              <h2
                className="display max-w-[12ch]"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                {service.nav}, asked properly.
              </h2>
            </Reveal>
            <FAQList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* ── Where it fits ────────────────────────────── */}
      <section className="px-3 sm:px-4 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Reveal className="mb-8">
            <p className="eyebrow mb-6">Where it fits</p>
            <p className="text-text-soft text-base md:text-lg leading-relaxed max-w-2xl">
              These are rarely bought one at a time. Most work starts with whichever
              is most urgent and grows into the others once the numbers argue for it.
            </p>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ...others.map((o) => ({
                href: `/${o.slug}`,
                nav: o.nav,
                line: o.metaTitle,
              })),
              {
                href: '/google-ads-dublin',
                nav: 'Google Ads',
                line: 'Google Ads Agency Dublin',
              },
            ].map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="panel bg-paper-2 p-7 md:p-8 group hover:bg-ink transition-colors duration-300"
              >
                <p className="label mb-3 group-hover:text-orange transition-colors">
                  {o.line}
                </p>
                <p
                  className="display group-hover:text-on-ink transition-colors flex items-center gap-2"
                  style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                >
                  {o.nav}
                  <span
                    className="text-orange transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
