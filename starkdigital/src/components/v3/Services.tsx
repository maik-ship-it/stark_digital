'use client'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from './Reveal'

const WORK = [
  {
    num: '01',
    title: 'Paid search',
    lede: 'Google Ads, Shopping, and the parts of Performance Max worth keeping.',
    body: 'Most accounts I take over are losing money in the same three places: broad match with no negative list, conversions counted twice, and a budget spread across keywords nobody profitable is searching. That gets fixed in week one, before anything clever happens.',
  },
  {
    num: '02',
    title: 'SEO',
    lede: 'Rankings that bring enquiries, not just impressions.',
    body: 'Technical fixes, the pages you are missing, and content built around what people actually type when they are ready to hire someone. Slower than ads and cheaper per lead once it lands. Worth starting early for exactly that reason.',
  },
  {
    num: '03',
    title: 'AI search',
    lede: 'Being the answer when someone asks ChatGPT or Google AI instead of searching.',
    body: 'A growing share of research now happens inside an assistant that never sends a click. Getting named there depends on things you can influence: clear pages a model can parse, being cited on sites it trusts, and structured data that says plainly what you do and where.',
  },
  {
    num: '04',
    title: 'Landing pages and websites',
    lede: 'The page the traffic arrives on, built to convert.',
    body: 'I build these myself, so the page and the campaign are never two suppliers blaming each other. Fast, written for the search that brought the visitor, and tracked properly so you can see which page turns clicks into calls.',
  },
]

export default function Services() {
  return (
    <section className="px-3 sm:px-4 py-6">
      <div className="panel bg-ink relative">
        <Image
          src="/images/v3/services.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        {/* The wash has to stay heavy enough for body text to sit on it, but the
            previous 0.92 to 0.97 over a 30% image left roughly 1.5% of the
            photograph visible, which is the same as having no photograph. */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(140deg, rgba(7,21,40,0.80), rgba(7,21,40,0.93))' }}
        />
        <div className="absolute inset-0 bg-grid-ink" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 mb-16 md:mb-20 items-end">
            <div>
              <p className="eyebrow eyebrow-on-ink mb-6">What you are hiring</p>
              <h2
                className="display text-on-ink max-w-[14ch]"
                style={{ fontSize: 'var(--text-display-lg)' }}
              >
                One job. Not four line items.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-on-ink-soft text-base md:text-lg leading-relaxed">
                A campaign that sends people to a weak page wastes money. A page
                nobody can find wastes it the same way, in the other direction. So
                the brief is always the same thing: get the right people to a page
                that turns them into an enquiry.
              </p>
              <p className="text-on-ink-soft text-base md:text-lg leading-relaxed">
                What that takes depends on your business. Usually it starts with
                one of these and grows into the others once the numbers say so.
              </p>
            </div>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {WORK.map((w) => (
              <div
                key={w.num}
                className="relative p-8 md:p-10"
                style={{
                  background: 'rgba(242,240,235,0.035)',
                  outline: '1px solid var(--color-ink-line)',
                }}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    className="display text-orange"
                    style={{ fontSize: '15px', letterSpacing: '0.1em' }}
                  >
                    {w.num}
                  </span>
                  <h3
                    className="display text-on-ink"
                    style={{ fontSize: 'clamp(24px, 2.6vw, 34px)' }}
                  >
                    {w.title}
                  </h3>
                </div>
                <p className="text-on-ink text-base md:text-lg leading-snug mb-4 font-medium">
                  {w.lede}
                </p>
                <p className="text-on-ink-soft text-sm md:text-[15px] leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="text-on-ink-soft text-sm md:text-base leading-relaxed max-w-xl">
              You are not picking a package in month one. Where the budget goes after
              that is a conversation we have with the numbers in front of us.
            </p>
            <Link href="/contact" className="btn btn-orange shrink-0">
              Talk it through
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
