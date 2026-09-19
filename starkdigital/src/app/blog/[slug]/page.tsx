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
import Table from '@/components/blog/mdx/Table'
import CTA from '@/components/v3/CTA'
import { buildMetadata, SITE_URL } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

// `table` is an element override: every pipe table in a post gets the
// scrolling wrapper without the post having to ask for it.
const mdxComponents = { Callout, StatBlock, FAQ, table: Table }

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
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug && p.published)
  if (!post) notFound()

  const publishedPosts = posts.filter((p) => p.published)
  const formatted = new Date(post.date).toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article>
      <ReadingProgress />
      <BlogPostSchema
        title={post.title}
        description={post.description}
        date={post.date}
        slug={post.slug}
        readingTime={post.readingTime}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ]}
      />

      {/* ── Header panel ─────────────────────────────── */}
      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-14 pt-14 md:pt-20 pb-12 md:pb-16">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2.5">
                <li>
                  <Link href="/" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>
                    Home
                  </Link>
                </li>
                <li className="label" style={{ color: 'var(--color-on-ink-faint)' }}>/</li>
                <li>
                  <Link href="/blog" className="label hover:text-orange transition-colors" style={{ color: 'var(--color-on-ink-faint)' }}>
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-7">
              <span className="label" style={{ color: 'var(--color-on-ink-soft)' }}>
                {formatted}
              </span>
              {post.readingTime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-orange shrink-0" aria-hidden />
                  <span className="label" style={{ color: 'var(--color-on-ink-faint)' }}>
                    {post.readingTime} min
                  </span>
                </>
              )}
              {post.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="label-muted px-2.5 py-1 rounded-full border"
                  style={{ borderColor: 'var(--color-ink-line)', color: 'var(--color-on-ink-faint)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="display text-on-ink mb-6"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              {post.title}
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
              {post.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────── */}
      <section className="px-3 sm:px-4 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 xl:gap-20">
            <div className="max-w-3xl mx-auto lg:mx-0 w-full min-w-0">
              <div className="prose-stark">
                <MDXContent code={post.body} />
              </div>

              <AuthorBio />

              <RelatedPosts
                currentSlug={post.slug}
                currentTags={post.tags ?? []}
                allPosts={publishedPosts}
              />
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </article>
  )
}
