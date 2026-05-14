export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stark Digital',
    description:
      'Google Ads agency in Dublin specialising in performance marketing for professional service businesses across Ireland.',
    url: 'https://starkdigital.ie',
    email: 'maik@starkdigital.ie',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressRegion: 'County Dublin',
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.3498,
      longitude: -6.2603,
    },
    areaServed: [
      { '@type': 'City', name: 'Dublin' },
      { '@type': 'Country', name: 'Ireland' },
    ],
    serviceType: [
      'Google Ads Management',
      'PPC Advertising',
      'Paid Search Marketing',
      'Performance Marketing',
    ],
    priceRange: '€€',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
