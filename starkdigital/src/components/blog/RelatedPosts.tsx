import Link from 'next/link'

interface Post {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  readingTime?: number
}

interface RelatedPostsProps {
  currentSlug: string
  currentTags: string[]
  allPosts: Post[]
}

export default function RelatedPosts({ currentSlug, currentTags, allPosts }: RelatedPostsProps) {
  const related = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: (p.tags ?? []).filter((t) => currentTags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  if (related.length === 0) return null

  return (
    <div className="max-w-2xl mx-auto mt-16 pt-12 border-t border-surface-2">
      <p className="label mb-6">Continue reading</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-surface border border-surface-2 rounded-sm p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <p className="label">{new Date(post.date).toLocaleDateString('en-IE', { year: 'numeric', month: 'short' })}</p>
              {post.readingTime && (
                <span className="font-mono text-[10px] text-text-muted tracking-wide">
                  {post.readingTime} min
                </span>
              )}
            </div>
            <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-amber transition-colors duration-200 line-clamp-2">
              {post.title}
            </h4>
            <p className="mt-1 text-xs text-text-muted group-hover:text-amber transition-colors duration-200">
              Read →
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
