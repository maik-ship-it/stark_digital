import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  readingTime?: number
  featured?: boolean
}

const TAG_COLORS: Record<string, string> = {
  'google ads':  'bg-amber',
  'seo':         'bg-surface-3',
  'solicitors':  'bg-surface-3',
  'accountants': 'bg-surface-3',
  'dental':      'bg-surface-3',
  'tradespeople':'bg-surface-3',
  'ireland':     'bg-surface-2',
  'pricing':     'bg-surface-2',
  'strategy':    'bg-surface-2',
}

function getAccentClass(tags?: string[]): string {
  if (!tags) return 'bg-surface-2'
  for (const tag of tags) {
    const match = TAG_COLORS[tag.toLowerCase()]
    if (match) return match
  }
  return 'bg-surface-2'
}

export default function BlogCard({
  title,
  description,
  date,
  slug,
  tags,
  readingTime,
  featured = false,
}: BlogCardProps) {
  const formatted = new Date(date).toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const accentClass = getAccentClass(tags)

  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative block bg-canvas border border-surface-2 shadow-card rounded-sm overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className={`h-[3px] w-full ${accentClass} opacity-70`} />

      <div className="p-7">
        {/* Meta */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <p className="label">{formatted}</p>
            {readingTime && (
              <span className="font-mono text-[10px] text-text-muted tracking-wide">
                {readingTime} min read
              </span>
            )}
          </div>
          {featured && (
            <span className="font-mono text-[9px] tracking-widest uppercase text-amber border border-amber px-2 py-0.5 rounded-sm opacity-80">
              Latest
            </span>
          )}
        </div>

        <div className="h-px bg-surface-2 mb-5" />

        {/* Content */}
        <h2
          className={`font-display font-semibold text-white leading-snug group-hover:text-amber transition-colors duration-200 mb-3 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}
        >
          {title}
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-widest uppercase text-text-muted border border-surface-2 px-2 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="mt-5 text-sm text-text-secondary font-medium group-hover:text-amber transition-colors duration-200">
          Read article →
        </p>
      </div>
    </Link>
  )
}
