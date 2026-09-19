import { months } from '@/lib/case-studies/anthony-joyce'
import Reveal from '@/components/v3/Reveal'

/**
 * Spend against cost per enquiry, month by month.
 *
 * Two scales on one plot, which is normally a bad idea, and is the right one
 * here: the story is that the bars went up because the firm asked for more,
 * and the line came down anyway. Separating them loses that.
 *
 * Every value is also in the table underneath, so nobody has to read a pixel
 * to check a number.
 */

const W = 880
const H = 348
const PAD_L = 54
const PAD_R = 58
const TOP_Y = 42
const BASE_Y = 252

const SPEND_MAX = 7000
const CPE_MAX = 110

const plot = W - PAD_L - PAD_R
const slot = plot / months.length
const barW = 30

const centre = (i: number) => PAD_L + slot * i + slot / 2
const spendY = (v: number) => BASE_Y - (v / SPEND_MAX) * (BASE_Y - TOP_Y)
const cpeY = (v: number) => BASE_Y - (v / CPE_MAX) * (BASE_Y - TOP_Y)

const line = months.map((m, i) => `${centre(i)},${cpeY(m.cpe)}`).join(' ')

/**
 * Months worth writing a number next to: the start, the bad one, and the end.
 * July is deliberately not here. Its point is the height of the bar, and a
 * label there lands on top of the line coming down from June.
 */
const CALLOUTS = new Set(['Nov 2025', 'Apr 2026', 'Sep 2026'])

export default function PerformanceChart() {
  return (
    <Reveal className="prose-block my-12">
      <figure className="m-0">
        <div className="panel bg-ink p-5 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-7">
            <p className="label" style={{ color: 'var(--color-on-ink-soft)' }}>
              Spend against cost per enquiry
            </p>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--color-on-ink-faint)' }}>
                <span className="w-3 h-3 rounded-[2px]" style={{ background: 'rgba(242,240,235,0.32)' }} />
                Spend
              </span>
              <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: 'var(--color-on-ink-faint)' }}>
                <span className="w-3 h-[3px] rounded-full bg-orange" />
                Cost / enquiry
              </span>
            </div>
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            role="img"
            aria-label="Combined chart, November 2025 to September 2026. Monthly Google Ads spend rises from 643 euro to a peak of 6,978 euro in July 2026 and then falls by half. Cost per tracked enquiry starts at 107 euro, sits between 42 and 94 euro through the middle of the period, and ends at 22 euro in September 2026."
            style={{ display: 'block', overflow: 'visible' }}
          >
            {/* Left axis, spend */}
            {[0, 3500, 7000].map((v) => (
              <g key={`s${v}`}>
                <line
                  x1={PAD_L}
                  x2={W - PAD_R}
                  y1={spendY(v)}
                  y2={spendY(v)}
                  stroke="var(--color-ink-line)"
                  strokeWidth={1}
                />
                <text
                  x={PAD_L - 12}
                  y={spendY(v) + 4}
                  textAnchor="end"
                  fontSize={13}
                  fontWeight={600}
                  fill="var(--color-on-ink-faint)"
                >
                  {v === 0 ? '€0' : `€${(v / 1000).toFixed(1).replace('.0', '')}k`}
                </text>
              </g>
            ))}

            {/* Right axis, cost per enquiry */}
            {[0, 55, 110].map((v) => (
              <text
                key={`c${v}`}
                x={W - PAD_R + 12}
                y={cpeY(v) + 4}
                textAnchor="start"
                fontSize={13}
                fontWeight={600}
                fill="var(--color-orange)"
                opacity={0.75}
              >
                €{v}
              </text>
            ))}

            {months.map((m, i) => (
              <rect
                key={m.label}
                x={centre(i) - barW / 2}
                y={spendY(m.spend)}
                width={barW}
                height={BASE_Y - spendY(m.spend)}
                rx={3}
                fill="rgba(242,240,235,0.32)"
              />
            ))}

            <polyline
              points={line}
              fill="none"
              stroke="var(--color-orange)"
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {months.map((m, i) => (
              <g key={`d${m.label}`}>
                <circle
                  cx={centre(i)}
                  cy={cpeY(m.cpe)}
                  r={CALLOUTS.has(m.label) ? 5 : 3.5}
                  fill="var(--color-orange)"
                  stroke="var(--color-ink)"
                  strokeWidth={2}
                />
                {CALLOUTS.has(m.label) && (
                  <text
                    x={centre(i)}
                    y={cpeY(m.cpe) - 13}
                    textAnchor="middle"
                    fontSize={16}
                    fontWeight={700}
                    fill="var(--color-orange)"
                  >
                    €{m.cpe}
                  </text>
                )}
              </g>
            ))}

            {/* Month labels */}
            {months.map((m, i) => {
              const [mon, yr] = m.label.split(' ')
              return (
                <g key={`l${m.label}`}>
                  <text
                    x={centre(i)}
                    y={BASE_Y + 24}
                    textAnchor="middle"
                    fontSize={14}
                    fontWeight={600}
                    fill="var(--color-on-ink-soft)"
                  >
                    {mon}
                  </text>
                  {(i === 0 || mon === 'Jan') && (
                    <text
                      x={centre(i)}
                      y={BASE_Y + 40}
                      textAnchor="middle"
                      fontSize={13}
                      fontWeight={600}
                      fill="var(--color-on-ink-faint)"
                    >
                      {yr}
                    </text>
                  )}
                </g>
              )
            })}

          </svg>
        </div>

        <figcaption className="mt-4">
          <p className="text-text text-[15px] leading-relaxed mb-3">
            The bars go up because the firm asked for more budget. The line comes
            down anyway. April is the exception, and July is the month they asked
            us to stop.
          </p>
          <p className="text-text-faint text-[13px] leading-relaxed">
            Google Ads account, November 2025 to 19 September 2026. Bars read
            against the left axis, the line against the right. Every value is in
            the table below.
          </p>
        </figcaption>
      </figure>
    </Reveal>
  )
}
