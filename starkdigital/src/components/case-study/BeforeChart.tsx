import { before, beforeSource } from '@/lib/case-studies/anthony-joyce'
import Reveal from '@/components/v3/Reveal'

/**
 * Clients attributed to Google Ads in the sixteen months before the handover.
 *
 * The chart is almost empty, and that is the whole argument. Nothing is
 * exaggerated to make the point: the y axis stops at three because three was
 * the best month in the series.
 *
 * Drawn as inline SVG on the server. No chart library, no client JavaScript,
 * and the bars are still there with scripting off.
 */

const W = 800
const H = 258
const PAD_L = 40
const PAD_R = 14
const BASE_Y = 186
const TOP_Y = 26
const MAX = 3

const plot = W - PAD_L - PAD_R
const slot = plot / before.length
const barW = 20
const unit = (BASE_Y - TOP_Y) / MAX

const centre = (i: number) => PAD_L + slot * i + slot / 2
/** The two months with the campaigns switched off. */
const offFrom = before.findIndex((m) => m.clients === null)

export default function BeforeChart() {
  const labelled = [0, 4, 8, 12]

  return (
    <Reveal className="prose-block my-12">
      <figure className="m-0">
        <div className="panel bg-paper-2 p-5 sm:p-8">
          <p className="label mb-1">Clients from paid search, per month</p>
          <p className="text-text-faint text-[13px] mb-6">
            May 2024 – August 2025, before the handover
          </p>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            role="img"
            aria-label="Bar chart of clients attributed to Google Ads per month from May 2024 to August 2025. Three in May 2024, then two or fewer every month, then zero in every month from December 2024 except a single client in February 2025. The campaigns were switched off in July 2025."
            style={{ display: 'block', overflow: 'visible' }}
          >
            {/* Gridlines, one per client, because the whole range is 0 to 3 */}
            {[0, 1, 2, 3].map((v) => {
              const y = BASE_Y - v * unit
              return (
                <g key={v}>
                  <line
                    x1={PAD_L}
                    x2={W - PAD_R}
                    y1={y}
                    y2={y}
                    stroke="var(--color-paper-3)"
                    strokeWidth={1}
                    strokeDasharray={v === 0 ? undefined : '3 5'}
                  />
                  <text
                    x={PAD_L - 12}
                    y={y + 4}
                    textAnchor="end"
                    fontSize={14}
                    fontWeight={600}
                    fill="var(--color-text-faint)"
                  >
                    {v}
                  </text>
                </g>
              )
            })}

            {/* The switched-off stretch, marked rather than drawn as zero */}
            <rect
              x={PAD_L + slot * offFrom}
              y={TOP_Y - 10}
              width={slot * (before.length - offFrom)}
              height={BASE_Y - TOP_Y + 10}
              fill="var(--color-paper-3)"
              opacity={0.45}
            />
            <text
              x={PAD_L + slot * offFrom + (slot * (before.length - offFrom)) / 2}
              y={TOP_Y + 6}
              textAnchor="middle"
              fontSize={13}
              fontWeight={700}
              letterSpacing="0.14em"
              fill="var(--color-text-soft)"
            >
              ADS OFF
            </text>

            {before.map((m, i) => {
              if (m.clients === null) return null
              const x = centre(i) - barW / 2

              // A zero month still gets a mark, otherwise the reader cannot tell
              // a month with no clients from a month with no data.
              if (m.clients === 0) {
                return (
                  <rect
                    key={m.label}
                    x={x}
                    y={BASE_Y - 3}
                    width={barW}
                    height={3}
                    fill="var(--color-text-faint)"
                    opacity={0.45}
                  />
                )
              }

              return (
                <g key={m.label}>
                  <rect
                    x={x}
                    y={BASE_Y - m.clients * unit}
                    width={barW}
                    height={m.clients * unit}
                    rx={2}
                    fill="var(--color-ink)"
                    opacity={0.55}
                  />
                  <text
                    x={centre(i)}
                    y={BASE_Y - m.clients * unit - 9}
                    textAnchor="middle"
                    fontSize={15}
                    fontWeight={700}
                    fill="var(--color-text-soft)"
                  >
                    {m.clients}
                  </text>
                </g>
              )
            })}

            {/* Month labels, thinned out so they stay readable on a phone */}
            {before.map((m, i) =>
              labelled.includes(i) ? (
                <text
                  key={`l-${m.label}`}
                  x={centre(i)}
                  y={BASE_Y + 24}
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight={600}
                  fill="var(--color-text-faint)"
                >
                  {m.label.replace(' 20', ' ’')}
                </text>
              ) : null
            )}

          </svg>
        </div>

        <figcaption className="mt-4">
          <p className="text-orange font-semibold text-[15px] leading-snug mb-3">
            One tracked client in the last nine months of the account.
          </p>
          <p className="text-text-faint text-[13px] leading-relaxed">{beforeSource}</p>
        </figcaption>
      </figure>
    </Reveal>
  )
}
