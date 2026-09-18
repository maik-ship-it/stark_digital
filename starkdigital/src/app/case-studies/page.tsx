import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '@/components/v3/CTA'
import Reveal from '@/components/v3/Reveal'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { buildMetadata } from '@/lib/seo'
import { claims } from '@/lib/proof'

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies',
  description:
    'Numbers from real campaigns run by Stark Digital in Dublin, with the measurement basis printed alongside each figure.',
  path: '/case-studies',
})

const METRICS = [claims.enquiries, claims.costPerLead, claims.roas]

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: 'https://starkdigital.ie' },
          { name: 'Case Studies', url: 'https://starkdigital.ie/case-studies' },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-24 pb-14 md:pb-20">
            <p className="eyebrow eyebrow-on-ink mb-7">Results</p>
            <h1
              className="display text-on-ink max-w-[15ch] mb-8"
              style={{ fontSize: 'var(--text-display-xl)' }}
            >
              One client, written up properly.
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
              There is one case study here rather than twelve, because there is one
              account I can write up in full with the client&rsquo;s agreement. Every
              figure carries the basis it was measured on, so you can judge whether
              it means anything for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── The case study ───────────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="relative panel bg-ink min-h-[300px] lg:min-h-[460px]">
              <Image
                src="/images/v3/case-study.jpg"
                alt="A Dublin city-centre solicitor's office at dusk, desk beside a sash window overlooking the street"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-grid-ink" />
              <div
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{ background: 'linear-gradient(to top, rgba(7,21,40,0.92) 0%, rgba(7,21,40,0.55) 45%, rgba(7,21,40,0) 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <p className="label mb-2" style={{ color: 'var(--color-on-ink-faint)' }}>
                  Dublin 8 · Legal
                </p>
                <p className="display text-on-ink" style={{ fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
                  Anthony Joyce &amp; Co. Solicitors
                </p>
              </div>
            </div>

            <div className="panel bg-paper-2 p-7 md:p-10 lg:p-12 flex flex-col justify-center">
              <blockquote
                className="display mb-7"
                style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', lineHeight: 1.25 }}
              >
                Working with Maik was incredibly smooth. He understood what we needed
                right away and we have already noticed more client enquiries coming in.
              </blockquote>
              <p className="text-text font-semibold">Eoin Gallagher</p>
              <p className="label-muted mt-1.5">Managing Director · Legal Services · Dublin 8</p>

              <div className="mt-9">
                <Link href="/case-studies/anthony-joyce-solicitors" className="btn btn-ink">
                  Read the full breakdown
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper-3 rounded-[18px] overflow-hidden"
          >
            {METRICS.map((m) => (
              <div key={m.label} className="bg-paper-2 p-7 md:p-9 flex flex-col">
                <p
                  className="display text-orange mb-3"
                  style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}
                >
                  {m.value}
                </p>
                <p className="label mb-5">{m.label}</p>
                <p className="text-text-soft text-[13px] leading-relaxed mt-auto">
                  {m.basis}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
