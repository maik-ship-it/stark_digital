import type { Metadata } from 'next'
import ContactForm from '@/components/v3/ContactForm'
import Reveal from '@/components/v3/Reveal'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { buildMetadata, SITE_URL } from '@/lib/seo'
import { terms } from '@/lib/proof'

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Talk to Stark Digital about search advertising, SEO, AI search or landing pages. Thirty minutes, no pitch deck, and an honest answer about whether it is worth your money.',
  path: '/contact',
})

const STEPS = [
  {
    num: '01',
    title: 'You send the form',
    body: 'Or email me directly if you would rather. Both land in the same place, which is my inbox rather than a shared one.',
  },
  {
    num: '02',
    title: 'I reply the same working day',
    body: 'Usually with a question or two, because the useful version of this conversation needs to know what a customer is worth to you.',
  },
  {
    num: '03',
    title: 'We talk for half an hour',
    body: 'If you already run ads I go through the account beforehand, so we spend the call on your numbers instead of on generalities.',
  },
  {
    num: '04',
    title: 'You get it in writing',
    body: 'What I would do, what it would cost, and what I would expect it to produce. Nothing attached to it, no follow-up sequence.',
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-24 pb-14 md:pb-20">
            <p className="eyebrow eyebrow-on-ink mb-7">Contact · {terms.location}</p>
            <h1
              className="display text-on-ink max-w-[16ch] mb-8"
              style={{ fontSize: 'var(--text-display-xl)' }}
            >
              Tell me what you sell. I will tell you if I can help.
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
              No pitch deck and no three-stage discovery process. One call, thirty
              minutes, and an answer you can act on, including the answer that you
              should spend the money somewhere else.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form and what happens next ───────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-start">

            <Reveal>
              <p className="eyebrow mb-6">What happens next</p>
              <h2
                className="display mb-10 max-w-[14ch]"
                style={{ fontSize: 'var(--text-display-md)' }}
              >
                Four steps, none of them a funnel.
              </h2>

              <ol className="space-y-8">
                {STEPS.map((s) => (
                  <li key={s.num} className="flex gap-5">
                    <span
                      className="display text-orange shrink-0 pt-1"
                      style={{ fontSize: '14px', letterSpacing: '0.1em' }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <h3 className="display mb-2" style={{ fontSize: 'clamp(17px, 1.8vw, 21px)' }}>
                        {s.title}
                      </h3>
                      <p className="text-text-soft text-[15px] leading-relaxed max-w-md">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 pt-8 border-t border-paper-3">
                <p className="text-text-soft text-[15px] leading-relaxed max-w-md mb-5">
                  If I do not think I am the right fit, I will say so on the call and
                  point you at someone who is. That happens often enough to be worth
                  mentioning here rather than wasting your half hour.
                </p>
                <a
                  href={`mailto:${terms.email}`}
                  className="text-text font-medium hover-amber inline-block"
                >
                  {terms.email}
                </a>
                <p className="label-muted mt-3">{terms.intakeShort}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
