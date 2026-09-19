import type { Metadata } from 'next'

/**
 * The canonical host, with www, because that is what the server actually
 * serves. Everything that prints an absolute URL, metadata or JSON-LD,
 * derives it from here so the two cannot drift apart again.
 */
export const SITE_URL = 'https://www.starkdigital.ie'
export const SITE_NAME = 'Stark Digital'

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
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
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
