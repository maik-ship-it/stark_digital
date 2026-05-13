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
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const published = posts.filter((p) => p.published)

  if (published.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="label mb-4">Coming soon</p>
        <div className="h-px bg-surface-2 w-16 mx-auto mb-6" />
        <p className="text-text-secondary">Articles launching shortly.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {published.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  )
}
