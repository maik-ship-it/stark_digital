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
            Four practice areas is four problems, not one account.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Reveal className="relative panel bg-ink min-h-[340px] lg:min-h-[520px]">
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
              <p
                className="label mb-2"
                style={{ color: 'var(--color-on-ink-faint)' }}
              >
                Anthony Joyce &amp; Co. Solicitors
              </p>
              <p className="text-on-ink text-lg md:text-xl font-semibold leading-snug max-w-sm">
                Immigration, notary and injury law
              </p>
            </div>
          </Reveal>

          <Reveal className="panel bg-paper-2 p-7 md:p-10 lg:p-12 flex flex-col">
            <div className="space-y-5 text-text-soft text-base md:text-lg leading-relaxed">
              <p>
                Anthony Joyce &amp; Co. work across personal injury, medical
                negligence, immigration and notary services. On paper that is one
                firm. In search terms it is four separate problems, and running
                them as one account is the usual reason legal advertising
                disappoints.
              </p>
              <p>
                We started with immigration and notary rather than the
                highest-value work, because those are the two where somebody
                searching knows exactly what they want and where the copy can say
                plainly what the service is. Each got its own landing page and its
                own campaign.
              </p>
              <p>
                The notary page is the sharper example. Not &ldquo;notary public
                Dublin&rdquo;, but Irish nurses and doctors who need documents
                certified the exact way AHPRA requires before they can register in
                Australia. A small audience, on a deadline, with almost no
                alternatives. I have run the account for close to a year now.
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
