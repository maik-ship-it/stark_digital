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

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group flex flex-col panel p-7 md:p-8 transition-colors duration-300 ${
        featured
          ? 'bg-ink hover:bg-ink-raised'
          : 'bg-paper-2 hover:bg-paper-3'
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="label"
          style={featured ? { color: 'var(--color-on-ink-faint)' } : undefined}
        >
          {formatted}
        </span>
        {readingTime && (
          <>
            <span
              className="w-1 h-1 rounded-full bg-orange shrink-0"
              aria-hidden
            />
            <span
              className="label-muted"
              style={featured ? { color: 'var(--color-on-ink-faint)' } : undefined}
            >
              {readingTime} min
            </span>
          </>
        )}
      </div>

      <h2
        className={`display mb-3.5 transition-colors duration-200 group-hover:text-orange ${
          featured ? 'text-on-ink' : ''
        }`}
        style={{
          fontSize: featured ? 'clamp(24px, 3vw, 36px)' : 'clamp(18px, 1.9vw, 23px)',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      <p
        className={`text-[15px] leading-relaxed ${
          featured ? 'text-on-ink-soft max-w-2xl' : 'text-text-soft'
        }`}
      >
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="label-muted px-2.5 py-1 rounded-full border"
              style={{
                borderColor: featured ? 'var(--color-ink-line)' : 'var(--color-paper-3)',
                color: featured ? 'var(--color-on-ink-faint)' : undefined,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <span
        className={`mt-auto pt-6 text-[15px] font-medium flex items-center gap-2 ${
          featured ? 'text-on-ink' : 'text-text'
        }`}
      >
        Read it
        <span
          className="text-orange transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        >
          →
        </span>
      </span>
    </Link>
  )
}
