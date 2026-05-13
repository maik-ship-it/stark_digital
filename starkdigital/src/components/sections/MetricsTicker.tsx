const STATS = [
  { value: '+112%', label: 'Client Enquiries' },
  { value: '−38%', label: 'Cost per Lead' },
  { value: '3.4×', label: 'Return on Ad Spend' },
  { value: 'Max. 8', label: 'Active Clients' },
]

export default function MetricsTicker() {
  return (
    <div className="border-y border-surface-2 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-2 divide-y md:divide-y-0">
          {STATS.map(({ value, label }) => (
            <div key={label} className="px-5 sm:px-8 py-5 md:py-7 first:pl-0 last:pr-0">
              <p
                className="font-display font-bold text-white leading-none mb-1.5"
                style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}
              >
                {value}
              </p>
              <p className="label-muted text-[10px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
