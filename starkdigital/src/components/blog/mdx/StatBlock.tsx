interface Stat {
  value: string
  label: string
}

interface StatBlockProps {
  stats: Stat[]
}

/**
 * Restyled to match the figure blocks on the case study: one hairline grid,
 * brand radius, display numerals. The old version used `rounded-sm` and the
 * retired surface/white tokens, which read as a different site.
 */
export default function StatBlock({ stats }: StatBlockProps) {
  // Three stats in a two-column phone grid leave a hole in the corner, so the
  // last one takes the full width when the count is odd.
  const fillsRow = stats.length % 2 === 1

  return (
    <div className="prose-block my-9 grid grid-cols-2 sm:grid-cols-3 gap-px bg-paper-3 rounded-[18px] overflow-hidden">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`bg-paper-2 px-5 py-6 md:px-6 md:py-7 ${
            fillsRow && i === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''
          }`}
        >
          <p
            className="display text-orange mb-2"
            style={{ fontSize: 'clamp(26px, 3.4vw, 38px)' }}
          >
            {stat.value}
          </p>
          <p
            className="text-[11px] font-semibold uppercase text-text-soft"
            style={{ letterSpacing: '0.1em', lineHeight: 1.45 }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
