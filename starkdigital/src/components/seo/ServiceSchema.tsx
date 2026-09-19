import { SITE_URL, SITE_NAME } from '@/lib/seo'

type ServiceSchemaProps = {
  name: string
  description: string
  url: string
  areaServed?: string
}

export default function ServiceSchema({
  name,
  description,
  url,
  areaServed = 'Dublin, Ireland',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    areaServed,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
      email: 'maik@starkdigital.ie',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dublin',
        addressCountry: 'IE',
      },
    },
    serviceType: 'Google Ads Management',
    category: 'Digital Marketing',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
