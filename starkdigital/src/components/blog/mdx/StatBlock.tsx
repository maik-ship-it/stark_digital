interface Stat {
  value: string
  label: string
}

interface StatBlockProps {
  stats: Stat[]
}

export default function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-surface border border-surface-2 rounded-sm px-5 py-4 text-center"
        >
          <p className="font-serif font-bold text-white text-2xl leading-none mb-1">
            {stat.value}
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
