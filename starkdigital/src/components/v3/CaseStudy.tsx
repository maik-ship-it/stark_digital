import Link from 'next/link'
import Image from 'next/image'
import { claims } from '@/lib/proof'
import Reveal from './Reveal'

export default function CaseStudy() {
  return (
    <section className="px-3 sm:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
          <p className="eyebrow mb-6">Case study</p>
          <h2
            className="display max-w-[18ch]"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            A Dublin law firm that was invisible on the searches that mattered.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Reveal className="relative panel bg-ink min-h-[340px] lg:min-h-[520px]">
            <Image
              src="/images/v3/case-study.jpg"
              alt="Anthony Joyce Solicitors campaign"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-grid-ink" />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <p
                className="label mb-2"
                style={{ color: 'var(--color-on-ink-faint)' }}
              >
                Anthony Joyce &amp; Co. Solicitors
              </p>
              <p className="text-on-ink text-lg md:text-xl font-semibold leading-snug max-w-sm">
                Personal injury and medical negligence, Dublin 1
              </p>
            </div>
          </Reveal>

          <Reveal className="panel bg-paper-2 p-7 md:p-10 lg:p-12 flex flex-col">
            <div className="space-y-5 text-text-soft text-base md:text-lg leading-relaxed">
              <p>
                The firm had a steady name in Dublin and almost nothing to show for
                it online. Enquiries came from referrals and the occasional walk-in,
                which meant a good month and a bad month looked nothing alike and
                neither was anyone&rsquo;s doing.
              </p>
              <p>
                We started with the searches people use when they have already
                decided to talk to a solicitor, built a page for each of the three
                practice areas worth paying for, and put call tracking on every one
                of them so the firm could see which search produced which phone call.
              </p>
              <p>
                The ads were the smaller half of the work. Most of the gain came
                from sending people to a page written for the thing they searched
                for, instead of a homepage that asked them to go hunting.
              </p>
            </div>

            <div className="mt-9 pt-7 border-t border-paper-3 grid grid-cols-2 gap-6">
              {[claims.enquiries, claims.costPerLead].map((c) => (
                <div key={c.label}>
                  <p
                    className="display text-orange mb-1.5"
                    style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
                  >
                    {c.value}
                  </p>
                  <p className="label">{c.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/case-studies/anthony-joyce-solicitors"
                className="btn btn-ink"
              >
                Read the full breakdown
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
