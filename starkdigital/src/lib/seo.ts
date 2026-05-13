import type { Metadata } from 'next'

const BASE_URL = 'https://starkdigital.ie'
const SITE_NAME = 'Stark Digital'

export function buildMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  publishedTime,
}: {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: 'en_IE',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
      ...(publishedTime ? { publishedTime } : {}),
    },
  }
}
