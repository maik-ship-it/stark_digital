import { SITE_URL, SITE_NAME } from '@/lib/seo'

interface BlogPostSchemaProps {
  title: string
  description: string
  date: string
  updated?: string
  slug: string
  readingTime?: number
}

export default function BlogPostSchema({
  title,
  description,
  date,
  updated,
  slug,
  readingTime,
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: updated ?? date,
    url: `${SITE_URL}/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Maik Stark',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(readingTime
      ? { timeRequired: `PT${readingTime}M` }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
