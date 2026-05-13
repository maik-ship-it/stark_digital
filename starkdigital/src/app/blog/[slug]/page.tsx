import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { blog as posts } from '../../../../.velite'
import BlogPostSchema from '@/components/seo/BlogPostSchema'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.filter((p) => p.published).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://starkdigital.ie/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug && p.published)
  if (!post) notFound()

  return (
    <article className="pt-36 pb-24 bg-canvas">
      <BlogPostSchema
        title={post.title}
        description={post.description}
        date={post.date}
        slug={post.slug}
        readingTime={post.readingTime}
      />
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <header className="max-w-2xl mx-auto text-center mb-16">
          <p className="label mb-6">
            {new Date(post.date).toLocaleDateString('en-IE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {post.readingTime && ` — ${post.readingTime} min read`}
          </p>
          <h1
            className="font-serif font-bold text-white mb-6 leading-[0.95] tracking-[-0.01em]"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            {post.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Content */}
        <div className="max-w-2xl mx-auto prose-stark">
          {/* MDX body rendered via velite compile output */}
        </div>

        {/* End CTA */}
        <div className="max-w-2xl mx-auto mt-20 pt-12 border-t border-surface-2">
          <p className="label mb-6">Free consultation</p>
          <h3
            className="font-serif font-bold text-white mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            Ready to see what&apos;s possible?
          </h3>
          <p className="text-text-secondary mb-8 leading-relaxed">
            We&apos;ll review your current setup and show you exactly what a well-run
            Google Ads campaign could achieve for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-6 py-3 rounded-sm hover:bg-amber-dim transition-colors duration-200"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </div>
    </article>
  )
}
