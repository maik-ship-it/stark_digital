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
    <div className="mt-16 pt-12 border-t border-paper-3">
      <p className="label mb-6">Continue reading</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-paper-2 rounded-[18px] p-6 hover:bg-paper-3 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <p className="label">{new Date(post.date).toLocaleDateString('en-IE', { year: 'numeric', month: 'short' })}</p>
              {post.readingTime && (
                <span className="label-muted">
                  {post.readingTime} min
                </span>
              )}
            </div>
            <h4 className="display text-[17px] leading-snug group-hover:text-orange transition-colors duration-200">
              {post.title}
            </h4>
            <p className="mt-2.5 text-[14px] text-text-soft flex items-center gap-1.5">
              Read
              <span className="text-orange transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
