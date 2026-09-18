import type { Metadata } from 'next'
import ServicePage from '@/components/v3/ServicePage'
import { googleAds } from '@/lib/services'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: googleAds.metaTitle,
  description: googleAds.metaDescription,
  path: `/${googleAds.slug}`,
})

export default function Page() {
  return <ServicePage service={googleAds} />
}
