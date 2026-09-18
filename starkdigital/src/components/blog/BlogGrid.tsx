import BlogCard from './BlogCard'
import Reveal from '@/components/v3/Reveal'

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

  if (allPublished.length === 0) {
    return (
      <div className="panel bg-paper-2 py-20 px-8 text-center">
        <p className="eyebrow justify-center mb-4">Coming soon</p>
        <p className="text-text-soft">Articles are on the way.</p>
      </div>
    )
  }

  if (filtered.length === 0) {
    return (
      <div className="panel bg-paper-2 py-20 px-8 text-center">
        <p className="eyebrow justify-center mb-4">Nothing under that tag</p>
        <p className="text-text-soft">Try another one, or go back to all.</p>
      </div>
    )
  }

  const [featured, ...rest] = filtered
  const grid = activeTag ? filtered : rest

  return (
    <div className="space-y-4">
      {featured && !activeTag && (
        <Reveal>
          <BlogCard {...featured} featured />
        </Reveal>
      )}

      <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {grid.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </Reveal>
    </div>
  )
}
