import type { Metadata } from 'next'
import { blog as posts } from '../../../.velite'
import BlogGrid from '@/components/blog/BlogGrid'
import BlogTagFilter from '@/components/blog/BlogTagFilter'
import CTA from '@/components/v3/CTA'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { buildMetadata, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Blog, Search Marketing for Irish Businesses',
  description:
    'Practical writing on Google Ads, SEO and landing pages for businesses in Ireland. Written by the person doing the work, not by a content team.',
  path: '/blog',
})

type Props = { searchParams: Promise<{ tag?: string }> }

export default async function BlogPage({ searchParams }: Props) {
  const { tag } = await searchParams
  const published = posts.filter((p) => p.published)
  const allTags = Array.from(new Set(published.flatMap((p) => p.tags ?? []))).sort()

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />

      <section className="px-3 sm:px-4 pt-20 md:pt-24 pb-3 sm:pb-4">
        <div className="relative panel bg-ink overflow-hidden">
          <div className="absolute inset-0 bg-grid-ink" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 md:pt-24 pb-14 md:pb-20">
            <p className="eyebrow eyebrow-on-ink mb-7">Writing</p>
            <h1
              className="display text-on-ink max-w-[14ch] mb-8"
              style={{ fontSize: 'var(--text-display-xl)' }}
            >
              Mostly me arguing with common advice.
            </h1>
            <p className="text-on-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
              Guides on paid search, SEO and landing pages for Irish businesses,
              with the actual numbers in them. Written by the person doing the work,
              which is why there are fewer of these than a content calendar would
              produce.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          {allTags.length > 1 && (
            <div className="mb-10">
              <BlogTagFilter tags={allTags} />
            </div>
          )}
          <BlogGrid posts={published} activeTag={tag} />
        </div>
      </section>

      <CTA />
    </>
  )
}
