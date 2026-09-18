import type { Metadata } from 'next'
import ServicePage from '@/components/v3/ServicePage'
import { getService } from '@/lib/services'
import { buildMetadata } from '@/lib/seo'

const service = getService('geo-ai-search')!

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
})

export default function Page() {
  return <ServicePage service={service} />
}
