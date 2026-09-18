import Link from 'next/link'
import { terms } from '@/lib/proof'
import Reveal from './Reveal'

const INCLUDED = [
  'Campaign strategy, build and ongoing management',
  'Keyword and search term work, including negative lists',
  'Ad copy, plus the testing to find out which version earns its place',
  'Conversion tracking and call tracking, set up properly',
  'Landing pages where the campaign needs one',
  'A monthly report written by the person who did the work',
  'Your own email address for me, not a shared inbox',
]

const NOT_INCLUDED = [
  'Your ad spend, which goes to Google directly from your own card',
  'Anything you have not agreed to, added quietly to next month’s invoice',
]

export default function Pricing() {
  return (
    <section className="px-3 sm:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <Reveal className="mb-10 md:mb-14 max-w-3xl">
          <p className="eyebrow mb-6">What it costs</p>
          <h2 className="display" style={{ fontSize: 'var(--text-display-lg)' }}>
            From {terms.priceFrom} a month.
          </h2>
          <p className="text-text-soft text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            One fee for the work, whichever parts of it your business needs. Where
            you land above that depends on how much you spend and how many campaigns
            and pages are in play. You get the number before you commit to anything.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-4">
          <Reveal className="panel bg-paper-2 p-8 md:p-11">
            <p className="label mb-7">In the fee</p>
            <ul className="space-y-4 mb-10">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-[9px] w-[7px] h-[7px] rounded-full bg-orange shrink-0"
                    aria-hidden
                  />
                  <span className="text-text-soft text-[15px] md:text-base leading-relaxed">
                    {i}
                  </span>
                </li>
              ))}
            </ul>

            <p className="label mb-6">Not in the fee</p>
            <ul className="space-y-4">
              {NOT_INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-[9px] w-[7px] h-[7px] rounded-full bg-paper-3 shrink-0"
                    aria-hidden
                  />
                  <span className="text-text-soft text-[15px] md:text-base leading-relaxed">
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="panel bg-ink p-8 md:p-11 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-ink" />
            <div className="relative flex flex-col h-full">
              <p className="label mb-4" style={{ color: 'var(--color-on-ink-faint)' }}>
                Starting at
              </p>
              <p
                className="display text-on-ink leading-none"
                style={{ fontSize: 'clamp(46px, 6vw, 76px)' }}
              >
                {terms.priceFrom}
              </p>
              <p className="text-on-ink-soft text-base mt-3 mb-9">{terms.priceUnit}</p>

              <div
                className="pt-7 border-t space-y-5"
                style={{ borderColor: 'var(--color-ink-line)' }}
              >
                <div>
                  <p className="text-on-ink font-semibold text-base mb-1.5">
                    {terms.intake}
                  </p>
                  <p className="text-on-ink-soft text-sm leading-relaxed">
                    That is the limit, and it is the whole reason you get answered the
                    same day. When the two are taken, the next start date is the
                    following month.
                  </p>
                </div>
                <div>
                  <p className="text-on-ink font-semibold text-base mb-1.5">
                    {terms.contract}
                  </p>
                  <p className="text-on-ink-soft text-sm leading-relaxed">
                    Thirty days&rsquo; notice, no exit fee. The account and the data are
                    yours from day one and you take them with you.
                  </p>
                </div>
              </div>

              <Link href="/contact" className="btn btn-orange mt-9 w-fit">
                Ask for a number
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
