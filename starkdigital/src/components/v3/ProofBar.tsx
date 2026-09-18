import { claims } from '@/lib/proof'
import Reveal from './Reveal'

const SHOWN = [claims.enquiries, claims.costPerLead, claims.roas]

/**
 * Numbers with their measurement basis printed underneath, not in a tooltip.
 * If a figure cannot carry a basis line, it does not belong on the page.
 */
export default function ProofBar() {
  return (
    <section className="px-3 sm:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-5">One client, real numbers</p>
            <h2
              className="display max-w-[16ch]"
              style={{ fontSize: 'var(--text-display-md)' }}
            >
              Anthony Joyce Solicitors, first 90 days.
            </h2>
          </div>
          <p className="text-text-soft text-sm leading-relaxed max-w-sm">
            This is one account, not an average across clients. The basis for each
            figure is printed under it so you can check whether it means anything
            for your business.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-[18px] overflow-hidden"
        >
          {SHOWN.map((c) => (
            <div
              key={c.label}
              className="bg-paper-2 p-7 md:p-9 flex flex-col"
              style={{ outline: '1px solid var(--color-paper-3)' }}
            >
              <p
                className="display text-orange mb-3"
                style={{ fontSize: 'clamp(40px, 5vw, 66px)' }}
              >
                {c.value}
              </p>
              <p className="label mb-5">{c.label}</p>
              <p className="text-text-soft text-[13px] leading-relaxed mt-auto">
                {c.basis}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
