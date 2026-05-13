const ITEMS = [
  { value: '+112%', label: 'Client Enquiries' },
  { value: '−38%', label: 'Cost per Lead' },
  { value: '3.4×', label: 'Return on Ad Spend' },
  { value: '+447%', label: 'Website Enquiries' },
  { value: '90 days', label: 'Average Timeframe' },
  { value: '€4M+', label: 'Revenue Generated' },
  { value: '100%', label: 'Irish-Based Clients' },
  { value: 'Zero', label: 'Long-Term Contracts' },
]

function StripItem({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-5 mx-8 shrink-0">
      <span className="font-display text-2xl font-semibold text-text-primary">
        {value}
      </span>
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-muted">
        {label}
      </span>
      <span className="text-gold/30 text-lg">·</span>
    </span>
  )
}

export default function StatsStrip() {
  return (
    <div className="bg-surface border-y border-surface-2 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <StripItem key={i} value={item.value} label={item.label} />
        ))}
      </div>
    </div>
  )
}
