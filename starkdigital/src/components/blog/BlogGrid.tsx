import BlogCard from './BlogCard'

interface Post {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  readingTime?: number
  published: boolean
}

interface BlogGridProps {
  posts: Post[]
  activeTag?: string
}

export default function BlogGrid({ posts, activeTag }: BlogGridProps) {
  const allPublished = posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const filtered = activeTag
    ? allPublished.filter((p) => p.tags?.includes(activeTag))
    : allPublished

  if (filtered.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="label mb-4">No articles found</p>
        <div className="h-px bg-surface-2 w-16 mx-auto mb-6" />
        <p className="text-text-secondary">Try a different filter.</p>
      </div>
    )
  }

  if (allPublished.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="label mb-4">Coming soon</p>
        <div className="h-px bg-surface-2 w-16 mx-auto mb-6" />
        <p className="text-text-secondary">Articles launching shortly.</p>
      </div>
    )
  }

  const [featured, ...rest] = filtered

  return (
    <div className="space-y-8">
      {/* Featured article */}
      {featured && !activeTag && (
        <div className="max-w-2xl">
          <BlogCard key={featured.slug} {...featured} featured />
        </div>
      )}

      {/* Rest of the articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(activeTag ? filtered : rest).map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
