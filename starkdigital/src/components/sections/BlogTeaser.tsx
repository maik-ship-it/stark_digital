import Link from 'next/link'

interface Post {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  readingTime?: number
}

interface BlogTeaserProps {
  posts: Post[]
}

const TAG_ACCENT: Record<string, string> = {
  'solicitors':        'bg-amber',
  'accountants':       'bg-amber',
  'financial advisors':'bg-amber',
  'dental':            'bg-amber',
  'tradespeople':      'bg-amber',
  'google ads':        'bg-amber',
  'strategy':          'bg-surface-3',
  'seo':               'bg-surface-3',
  'pricing':           'bg-surface-3',
}

function getAccent(tags?: string[]): string {
  if (!tags) return 'bg-surface-3'
  for (const tag of tags) {
    const match = TAG_ACCENT[tag.toLowerCase()]
    if (match) return match
  }
  return 'bg-surface-3'
}

export default function BlogTeaser({ posts }: BlogTeaserProps) {
  if (posts.length === 0) return null

  return (
    <section className="bg-surface py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-surface-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="label mb-5">From the blog</p>
            <h2
              className="font-serif font-bold text-white tracking-[-0.01em]"
              style={{ fontSize: 'var(--text-display-lg)', lineHeight: 0.95 }}
            >
              Google Ads insights for
              <br />
              <em className="text-amber not-italic">Irish professionals.</em>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-5">
              Practical guides written from experience — not templates.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-surface-2 text-text-secondary text-sm font-medium px-5 py-2.5 rounded-sm hover:border-amber/40 hover:text-amber transition-all duration-200"
            >
              See all articles →
            </Link>
          </div>
        </div>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-canvas border border-surface-2 shadow-card rounded-sm overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Accent bar */}
              <div className={`h-[3px] w-full ${getAccent(post.tags)} opacity-70`} />

              <div className="p-7">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
                  <p className="label">
                    {new Date(post.date).toLocaleDateString('en-IE', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </p>
                  {post.readingTime && (
                    <span className="font-mono text-[10px] text-text-muted tracking-wide">
                      {post.readingTime} min read
                    </span>
                  )}
                </div>

                <div className="h-px bg-surface-2 mb-5" />

                <h3 className="font-display text-lg font-semibold text-white leading-snug group-hover:text-amber transition-colors duration-200 mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {post.description}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-widest uppercase text-text-muted border border-surface-2 px-2 py-0.5 rounded-sm"
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
          ))}
        </div>

      </div>
    </section>
  )
}
