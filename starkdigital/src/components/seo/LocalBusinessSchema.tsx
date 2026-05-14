export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
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
    priceRange: '€€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Anthony Joyce',
        },
        reviewBody:
          'Maik understood exactly what we needed. He delivered a clean, results-driven campaign and we\'ve already seen a significant increase in client enquiries coming in.',
        datePublished: '2024-10-01',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
