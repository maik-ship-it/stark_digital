/**
 * The details every legal page has to agree on.
 *
 * `business` is the legal entity, which is a person, and `site` is the name
 * the website goes by. They are deliberately separate fields: the pages state
 * who is liable without claiming a business name that is not registered.
 */
export const legal = {
  /** The name on the website. */
  site: 'Stark Digital',
  /** The person who is actually liable, which is what the law asks for. */
  business: 'Maik Staerk',
  address: 'Clay House, Dublin 8',
  country: 'Ireland',
  email: 'maik@starkdigital.ie',
  vat: 'IE0273594FB',
  /** Shown at the top of each page. Bump when the text changes materially. */
  updated: '17 October 2026',
} as const

export const legalPages = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Legal' },
] as const
