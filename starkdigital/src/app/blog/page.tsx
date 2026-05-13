import type { Metadata } from 'next'
import { blog as posts } from '../../../.velite'
import BlogGrid from '@/components/blog/BlogGrid'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical guides on Google Ads for professional service businesses in Ireland — written by a specialist, not a content team.',
  alternates: { canonical: 'https://starkdigital.ie/blog' },
}

export default function BlogPage() {
  return (
    <section className="bg-canvas pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="label mb-6">Insights</p>
        <h1
          className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] max-w-2xl mb-6"
          style={{ fontSize: 'var(--text-display-xl)' }}
        >
          Google Ads insights for{' '}
          <em className="italic text-amber">Irish businesses.</em>
        </h1>
        <p className="text-lg text-text-secondary max-w-md leading-relaxed mb-16">
          Practical, no-nonsense articles on paid search for professional
          services in Ireland. Written by a specialist.
        </p>

        <BlogGrid posts={posts} />
      </div>
    </section>
  )
}
