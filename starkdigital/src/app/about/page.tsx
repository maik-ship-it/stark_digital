import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/v3/CTA'
import Reveal from '@/components/v3/Reveal'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { buildMetadata } from '@/lib/seo'
import { terms } from '@/lib/proof'

export const metadata: Metadata = buildMetadata({
  title: 'About Maik Stark, Search Specialist in Dublin',
  description:
    'How Stark Digital started. From running Google Ads on a tight budget at a solar energy startup to search, SEO and landing pages for businesses across Ireland.',
  path: '/about',
})

const JOURNEY = [
  {
    num: '01',
    label: 'The starting point',
    heading: 'Learning paid search with real money on the line',
    body: 'I started running Google Ads at a solar energy startup. No agency behind me, no formal training, no safety net. A limited budget, a product that needed leads, and the knowledge that if the campaigns did not work then neither did the business. That context teaches you quickly that paid search is not a tool you set up and leave running. Every keyword, every bid, every line of ad copy has a price attached to it.',
  },
  {
    num: '02',
    label: 'The expensive part',
    heading: 'Every mistake came out of a real budget',
    body: 'I burned money on broad keywords that brought in the wrong people. I wrote ads that earned clicks and produced nothing. I built campaigns that looked correct on paper and generated no enquiries at all. Because it was real money, each lesson stuck in a way that reading about it never would have. It is the reason I am tedious about negative keyword lists, match types and whether the landing page actually matches the search.',
  },
  {
    num: '03',
    label: 'What changed',
    heading: 'Two numbers that make most decisions obvious',
    body: 'At some point I became the person colleagues came to when an account was not performing, and what had clicked for me was simpler than any technique. What is one new customer worth to this business, and what does it cost to get one? Once those two numbers are clear, most of the arguments about tactics answer themselves. That is the framework I bring to every account now, and it is also why I sometimes tell people not to advertise.',
  },
]

const HOW = [
  {
    title: 'You get the person doing the work',
    body: 'There is nobody to escalate to and nobody to be handed off to, because it is me either way. That is the upside and it is also the limit, which is why the intake is capped at two new clients a month.',
  },
  {
    title: 'Numbers before opinions',
    body: 'Design taste and marketing theory are cheap. What a customer is worth and what one costs to acquire are not opinions, and almost every decision worth making follows from them.',
  },
  {
    title: 'I will tell you to stop',
    body: 'If an account is not going to work, the useful moment to say so is month two, not month nine. Keeping a client on a retainer that is not earning its keep is just a slower way of losing them.',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: 'https://starkdigital.ie' },
          { name: 'About', url: 'https://starkdigital.ie/about' },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-24 pb-14 md:pb-20">
            <p className="eyebrow eyebrow-on-ink mb-7">About · {terms.location}</p>
            <h1
              className="display text-on-ink max-w-[15ch] mb-8"
              style={{ fontSize: 'var(--text-display-xl)' }}
            >
              I learned this by paying for the mistakes.
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
              I am Maik. I run search advertising, SEO and the landing pages behind
              them for businesses in Dublin and across Ireland. Most of the work so
              far has been with professional services firms, which is where I know
              the search behaviour and the compliance edges best.
            </p>
          </div>
        </div>
      </section>

      {/* ── Portrait and position ────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-16 items-center">
            <Reveal className="relative panel bg-paper-2" >
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/Maik.webp"
                  alt="Maik Stark, search specialist in Dublin"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="space-y-6">
              <p className="text-text text-lg md:text-xl leading-relaxed font-medium">
                Stark Digital is one person on purpose, not one person yet.
              </p>
              <p className="text-text-soft text-base md:text-lg leading-relaxed">
                There are no account managers and no junior team running your
                campaigns while someone senior appears for the quarterly review. You
                talk to the person who builds the thing. It means you get answers the
                same day, and it means I cannot take on twenty clients at once.
              </p>
              <p className="text-text-soft text-base md:text-lg leading-relaxed">
                It also means the campaign and the page it points at come from the
                same hand. That sounds like a small detail until you have watched an
                ad agency and a web agency spend a month explaining that the problem
                is the other one.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="btn btn-ink">
                  Work with me
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How I got here ───────────────────────────── */}
      <section className="px-3 sm:px-4 py-6">
        <div className="panel bg-ink relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28">
            <Reveal className="mb-14 md:mb-18 max-w-3xl">
              <p className="eyebrow eyebrow-on-ink mb-6">How I got here</p>
              <h2
                className="display text-on-ink"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                Three stages, one of them expensive.
              </h2>
            </Reveal>

            <Reveal stagger className="space-y-px">
              {JOURNEY.map((j) => (
                <div
                  key={j.num}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 md:gap-10 p-8 md:p-10"
                  style={{
                    background: 'rgba(242,240,235,0.035)',
                    outline: '1px solid var(--color-ink-line)',
                  }}
                >
                  <div className="md:w-40">
                    <span
                      className="display text-orange block mb-2"
                      style={{ fontSize: '14px', letterSpacing: '0.1em' }}
                    >
                      {j.num}
                    </span>
                    <span
                      className="label"
                      style={{ color: 'var(--color-on-ink-faint)' }}
                    >
                      {j.label}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="display text-on-ink mb-4 max-w-[24ch]"
                      style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
                    >
                      {j.heading}
                    </h3>
                    <p className="text-on-ink-soft text-[15px] md:text-base leading-relaxed max-w-2xl">
                      {j.body}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-14 md:mt-18">
              <blockquote
                className="display text-on-ink max-w-[22ch] border-l-2 pl-7"
                style={{
                  fontSize: 'clamp(24px, 3vw, 42px)',
                  borderColor: 'var(--color-orange)',
                }}
              >
                Every euro I wasted in that startup was tuition. I just did not know
                it at the time.
              </blockquote>
              <p
                className="label mt-6 pl-7"
                style={{ color: 'var(--color-on-ink-faint)' }}
              >
                Maik Stark, Stark Digital
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How I work ───────────────────────────────── */}
      <section className="px-3 sm:px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <Reveal className="mb-10 md:mb-14 max-w-3xl">
            <p className="eyebrow mb-6">How I work</p>
            <h2 className="display" style={{ fontSize: 'var(--text-display-lg)' }}>
              Three things I will not bend on.
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper-3 rounded-[18px] overflow-hidden"
          >
            {HOW.map((v) => (
              <div key={v.title} className="bg-paper-2 p-8 md:p-10">
                <h3
                  className="display mb-4 max-w-[16ch]"
                  style={{ fontSize: 'clamp(18px, 1.9vw, 24px)' }}
                >
                  {v.title}
                </h3>
                <p className="text-text-soft text-[15px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
