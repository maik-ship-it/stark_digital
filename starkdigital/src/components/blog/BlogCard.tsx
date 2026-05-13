import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  readingTime?: number
}

export default function BlogCard({
  title,
  description,
  date,
  slug,
  tags,
  readingTime,
}: BlogCardProps) {
  const formatted = new Date(date).toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-canvas border border-surface-2 shadow-card rounded-sm p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Meta */}
      <div className="flex items-center gap-3 mb-5">
        <p className="label">{formatted}</p>
        {readingTime && (
          <span className="font-mono text-[10px] text-text-muted tracking-wide">
            {readingTime} min read
          </span>
        )}
      </div>

      <div className="h-px bg-surface-2 mb-5" />

      {/* Content */}
      <h2 className="font-display text-xl font-semibold text-white mb-3 leading-snug group-hover:text-amber transition-colors duration-200">
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
    </Link>
  )
}
