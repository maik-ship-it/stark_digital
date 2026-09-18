import Link from 'next/link'
import Image from 'next/image'
import { terms } from '@/lib/proof'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="px-3 sm:px-4 pb-4">
      <div className="relative panel bg-ink overflow-hidden">
        <Image
          src="/images/v3/cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(110deg, rgba(7,21,40,0.93) 30%, rgba(7,21,40,0.62) 100%)' }}
        />
        <div className="absolute inset-0 bg-grid-ink" />

        <Reveal className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 md:py-28">
          <p className="eyebrow eyebrow-on-ink mb-7">Next step</p>
          <h2
            className="display text-on-ink max-w-[14ch] mb-8"
            style={{ fontSize: 'var(--text-display-xl)' }}
          >
            Thirty minutes, and an honest answer.
          </h2>
          <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Tell me what you sell and what a customer is worth to you. I will tell
            you whether search is worth your money, roughly what it would take, and
            if the answer is no, what I would do instead.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-orange">
              Book a call
              <span aria-hidden>→</span>
            </Link>
            <a href={`mailto:${terms.email}`} className="btn btn-ghost-on-ink">
              {terms.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
