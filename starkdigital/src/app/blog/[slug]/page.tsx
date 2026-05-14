import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import * as runtime from 'react/jsx-runtime'
import { blog as posts } from '../../../../.velite'
import BlogPostSchema from '@/components/seo/BlogPostSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ReadingProgress from '@/components/blog/ReadingProgress'
import TableOfContents from '@/components/blog/TableOfContents'
import AuthorBio from '@/components/blog/AuthorBio'
import RelatedPosts from '@/components/blog/RelatedPosts'
import Callout from '@/components/blog/mdx/Callout'
import StatBlock from '@/components/blog/mdx/StatBlock'
import FAQ from '@/components/blog/mdx/FAQ'

type Props = { params: Promise<{ slug: string }> }

const mdxComponents = { Callout, StatBlock, FAQ }

function MDXContent({ code }: { code: string }) {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function('runtime', `${code}; return { default: default_export }`)
  const { default: Component } = fn(runtime) as {
    default: React.ComponentType<{ components?: typeof mdxComponents }>
  }
  return <Component components={mdxComponents} />
}

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

  const publishedPosts = posts.filter((p) => p.published)

  return (
    <article className="pt-36 pb-24 bg-canvas">
      <ReadingProgress />
      <BlogPostSchema
        title={post.title}
        description={post.description}
        date={post.date}
        slug={post.slug}
        readingTime={post.readingTime}
      />
      <BreadcrumbSchema crumbs={[
        { name: 'Home', url: 'https://starkdigital.ie' },
        { name: 'Blog', url: 'https://starkdigital.ie/blog' },
        { name: post.title, url: `https://starkdigital.ie/blog/${post.slug}` },
      ]} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-2 mb-12 text-xs font-mono tracking-wider uppercase text-text-muted">
          <Link href="/" className="hover:text-amber transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-amber transition-colors duration-200">Blog</Link>
          <span>/</span>
          <span className="text-text-secondary truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="max-w-2xl mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="label">
              {new Date(post.date).toLocaleDateString('en-IE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {post.readingTime && (
              <span className="font-mono text-[10px] text-text-muted tracking-wide">
                — {post.readingTime} min read
              </span>
            )}
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="font-mono text-[10px] text-text-muted">—</span>
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest uppercase text-text-muted border border-surface-2 px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>
          <h1
            className="font-serif font-bold text-white leading-[0.95] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            {post.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {post.description}
          </p>
          <div className="h-px bg-surface-2 mt-10" />
        </header>

        {/* Two-column layout: content + ToC sidebar */}
        <div className="flex gap-16 items-start">
          {/* Main content */}
          <div className="min-w-0 flex-1">
            <div className="prose-stark">
              <MDXContent code={post.body} />
            </div>

            <AuthorBio />

            <RelatedPosts
              currentSlug={post.slug}
              currentTags={post.tags ?? []}
              allPosts={publishedPosts}
            />

            {/* End CTA */}
            <div className="mt-16 pt-12 border-t border-surface-2">
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

          {/* Sticky ToC sidebar — desktop only */}
          <aside className="hidden xl:block w-56 flex-shrink-0 sticky top-32 self-start">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </article>
  )
}
