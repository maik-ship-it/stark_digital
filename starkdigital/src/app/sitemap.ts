import type { MetadataRoute } from 'next'
import { blog as posts } from '../../.velite'
import { industries } from '@/lib/industries'
import { services } from '@/lib/services'
import { SITE_URL } from '@/lib/seo'

const BASE = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/google-ads-dublin`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/case-studies/anthony-joyce-solicitors`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE}/google-ads-dublin/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogRoutes: MetadataRoute.Sitemap = posts
    .filter((p) => p.published)
    .map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes]
}
