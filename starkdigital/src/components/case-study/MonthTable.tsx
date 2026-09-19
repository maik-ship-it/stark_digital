import { months, totals, monthsSource } from '@/lib/case-studies/anthony-joyce'
import Reveal from '@/components/v3/Reveal'

const euro = (n: number) => `€${n.toLocaleString('en-IE')}`
const num = (n: number) => n.toLocaleString('en-IE')

/**
 * Every month of the engagement, including the bad one.
 *
 * The notes under the table are the months the narrative refers to. They sit
 * beside the figures rather than only in the prose, so somebody who scrolls
 * straight to the numbers still gets the caveats.
 *
 * Styling comes from .cs-table in globals.css, not from utility classes,
 * because .prose-stark's own table rules would beat them.
 */
export default function MonthTable() {
  const noted = months.filter((m) => m.note)

  return (
    <Reveal className="prose-block my-12">
      <figure>
        <p className="label-muted mb-3 sm:hidden" aria-hidden>
          Scroll the table sideways →
        </p>
        <div className="panel bg-paper-2 overflow-x-auto">
          <table className="cs-table">
            <caption className="sr-only">
              Google Ads spend, clicks, tracked enquiries and cost per enquiry by
              month, November 2025 to September 2026.
            </caption>
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Spend</th>
                <th scope="col">Clicks</th>
                <th scope="col">Enquiries</th>
                <th scope="col">Cost / enquiry</th>
              </tr>
            </thead>
            <tbody>
              {months.map((m) => (
                <tr key={m.label}>
                  <th scope="row">
                    {m.label}
                    {m.note && (
                      <span className="text-orange" aria-hidden>
                        {' '}*
                      </span>
                    )}
                  </th>
                  <td>{euro(m.spend)}</td>
                  <td>{num(m.clicks)}</td>
                  <td>{num(m.enquiries)}</td>
                  <td className={m.cpe <= 30 ? 'cs-lead cs-best' : 'cs-lead'}>{euro(m.cpe)}</td>
                </tr>
              ))}
              <tr className="cs-total">
                <th scope="row">Ten months</th>
                <td>{euro(totals.spend)}</td>
                <td>{num(totals.clicks)}</td>
                <td>{num(totals.enquiries)}</td>
                <td>{euro(totals.cpe)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figcaption className="mt-5">
          <ul className="mb-4">
            {noted.map((m) => (
              <li
                key={m.label}
                className="text-[13px] leading-relaxed text-text-soft mb-2"
              >
                <span className="text-orange font-semibold">{m.label}</span>
                {' — '}
                {m.note}
              </li>
            ))}
          </ul>
          <p className="text-text-faint text-[13px] leading-relaxed">{monthsSource}</p>
        </figcaption>
      </figure>
    </Reveal>
  )
}
