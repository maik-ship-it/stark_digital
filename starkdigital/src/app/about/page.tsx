import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Maik Stark — Google Ads specialist based in Dublin, helping professional service businesses across Ireland grow through performance marketing.',
  alternates: { canonical: 'https://starkdigital.ie/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-32 md:pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Copy */}
            <div>
              <p className="label mb-6">About</p>
              <h1
                className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] mb-8"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                Performance marketing,{' '}
                <em className="italic text-amber">done properly.</em>
              </h1>

              <div className="space-y-5 text-text-secondary leading-relaxed text-[1.0625rem]">
                <p>
                  I&apos;m Maik — a Google Ads specialist based in Dublin. I work
                  with professional service firms across Ireland who want more
                  enquiries from Google, without the guesswork.
                </p>
                <p>
                  Stark Digital is intentionally small. No account managers, no
                  junior teams managing your campaigns. When you work with Stark
                  Digital, you work directly with me.
                </p>
                <p>
                  I specialise in professional services because it&apos;s where I
                  can make the most difference — I understand the compliance
                  requirements, the search behaviour, and the economics of these
                  businesses.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200"
              >
                Work with me →
              </Link>

              {/* Values */}
              <div className="space-y-7 mt-14">
                {[
                  {
                    title: 'Transparency first',
                    description:
                      'You always know exactly where your budget is going. Monthly reports, honest conversations, no smoke and mirrors.',
                  },
                  {
                    title: 'Specialist, not generalist',
                    description:
                      "I don't work with e-commerce or retail. Professional services is my focus — it's where I can genuinely add value.",
                  },
                  {
                    title: 'Results, not activity',
                    description:
                      "More campaigns, more keywords, more ad groups — that's not the goal. More qualified enquiries for your business is.",
                  },
                ].map((v) => (
                  <div key={v.title} className="border-l-2 border-amber/30 pl-5">
                    <h3 className="font-display text-base md:text-lg font-semibold text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-surface-2">
                <Image
                  src="/images/maik.jpg"
                  alt="Maik Stark — Google Ads Specialist Dublin"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-canvas border border-surface-2 shadow-card rounded-sm px-5 py-4">
                <p className="font-serif font-bold text-amber leading-none text-2xl md:text-3xl">Max. 8</p>
                <p className="label-muted mt-1.5">Active clients at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
