interface BlogPostSchemaProps {
  title: string
  description: string
  date: string
  slug: string
  readingTime?: number
}

export default function BlogPostSchema({
  title,
  description,
  date,
  slug,
  readingTime,
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    url: `https://starkdigital.ie/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Maik Stark',
      url: 'https://starkdigital.ie/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stark Digital',
      url: 'https://starkdigital.ie',
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
