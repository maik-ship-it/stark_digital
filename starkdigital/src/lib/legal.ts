/**
 * The details every legal page has to agree on.
 *
 * ⚠️ BEFORE THIS GOES LIVE: `address` and `vat` are placeholders. The
 * E-Commerce Regulations (S.I. 68/2003) require a geographic address and,
 * where registered, the VAT number, so the pages are not publishable until
 * both are real. Everything else here is already correct.
 */
export const legal = {
  /** The trading name people know. */
  tradingName: 'Stark Digital',
  /** The person who is actually liable, which is what the law asks for. */
  owner: 'Maik Staerk',
  structure: 'sole trader',
  address: '[BUSINESS ADDRESS]',
  city: 'Dublin',
  country: 'Ireland',
  email: 'maik@starkdigital.ie',
  /** Empty string renders the "not registered" wording instead of a number. */
  vat: '',
  /** Shown at the top of each page. Bump when the text changes materially. */
  updated: '17 October 2026',
} as const

export const legalPages = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Terms' },
] as const
