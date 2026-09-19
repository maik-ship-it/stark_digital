/**
 * Every number that appears on the Anthony Joyce case study page.
 *
 * Same rule as src/lib/proof.ts: a figure does not go on the site unless it
 * lives here with a `basis` string saying how it was measured, and that basis
 * is printed for the visitor rather than hidden in a tooltip.
 *
 * Three sources, and nothing else:
 *   REPORTS  the firm's own monthly marketing reports, Jan 2024 to Aug 2025
 *   ADS      the Google Ads account
 *   WC       WhatConverts, the call and form tracking installed Nov 2025
 *
 * ⚠️ SIGN-OFF: Anthony has to approve the firm name, the spend figures and the
 * pre-takeover section in writing before `status` flips to 'live'. Until then
 * the page renders with a banner and a noindex tag.
 */

export const meta = {
  client: 'Anthony Joyce & Co. Solicitors',
  location: 'Dublin 8, Ireland',
  industry: 'Legal',
  /** The day the account was handed over. */
  takeover: '25 November 2025',
  period: 'November 2025 to September 2026',
  /** Last month in the table is partial. */
  through: '19 September 2026',
} as const

export type Figure = {
  value: string
  label: string
  basis: string
}

/**
 * The four headline figures live in the MDX frontmatter, not here, because the
 * page header and the `HeadlineFigures` block in the body both read them from
 * the same place. Each carries its own `basis` there. Everything below is the
 * series and set data that the in-body components draw.
 */

/**
 * What the firm was getting before we arrived.
 *
 * Fourteen monthly figures for clients attributed to Google Ads, taken from the
 * firm's own reports, followed by the two months the campaigns were switched
 * off. Roughly €42,000 of spend sits behind the whole series.
 *
 * ⚠️ The reports gave fourteen values for a sixteen-month window. They are laid
 * out here from May 2024 with July and August 2025 as the switched-off months,
 * which is the only alignment consistent with the reports' own commentary.
 * Check the month labels against the source reports before this page goes live.
 */
export type BeforeMonth = { label: string; short: string; clients: number | null }

export const before: BeforeMonth[] = [
  { label: 'May 2024', short: 'M', clients: 3 },
  { label: 'June 2024', short: 'J', clients: 2 },
  { label: 'July 2024', short: 'J', clients: 2 },
  { label: 'August 2024', short: 'A', clients: 2 },
  { label: 'September 2024', short: 'S', clients: 1 },
  { label: 'October 2024', short: 'O', clients: 2 },
  { label: 'November 2024', short: 'N', clients: 1 },
  { label: 'December 2024', short: 'D', clients: 0 },
  { label: 'January 2025', short: 'J', clients: 0 },
  { label: 'February 2025', short: 'F', clients: 1 },
  { label: 'March 2025', short: 'M', clients: 0 },
  { label: 'April 2025', short: 'A', clients: 0 },
  { label: 'May 2025', short: 'M', clients: 0 },
  { label: 'June 2025', short: 'J', clients: 0 },
  // Campaigns switched off in July 2025. No spend, so no bar and no zero either.
  { label: 'July 2025', short: 'J', clients: null },
  { label: 'August 2025', short: 'A', clients: null },
]

export const beforeSource =
  'Clients attributed to Google Ads in Anthony Joyce & Co.’s own monthly marketing reports, May 2024 to August 2025. Monthly spend over the same period ran between €1,200 and €1,700. The firm switched the campaigns off in July 2025. The reports record fourteen monthly figures across this sixteen-month window, so the two switched-off months are placed at the end, which is the only reading consistent with the reports’ own commentary.'

/**
 * What the account did after the rebuild.
 *
 * `cpe` is the figure the account reports, not spend ÷ enquiries rounded. The
 * two differ by a euro in a couple of months because WhatConverts splits a
 * conversion across more than one click, which leaves half enquiries in the
 * underlying data. For the same reason the monthly column sums to 597 while
 * the account's own total for the period is 596.
 */
export type Month = {
  label: string
  short: string
  spend: number
  clicks: number
  enquiries: number
  cpe: number
  /** Printed under the chart, not in the table. */
  note?: string
}

export const months: Month[] = [
  { label: 'Nov 2025', short: 'N', spend: 643, clicks: 190, enquiries: 6, cpe: 107, note: 'Tracking build. Five weeks of spend, three of them before the new campaigns existed.' },
  { label: 'Dec 2025', short: 'D', spend: 2819, clicks: 1101, enquiries: 67, cpe: 42 },
  { label: 'Jan 2026', short: 'J', spend: 3087, clicks: 922, enquiries: 65, cpe: 47 },
  { label: 'Feb 2026', short: 'F', spend: 2182, clicks: 1735, enquiries: 45, cpe: 49 },
  { label: 'Mar 2026', short: 'M', spend: 1461, clicks: 1203, enquiries: 30, cpe: 50 },
  { label: 'Apr 2026', short: 'A', spend: 2054, clicks: 562, enquiries: 24, cpe: 86, note: 'The bad month. We were rebalancing the personal injury campaign and got it wrong for about three weeks.' },
  { label: 'May 2026', short: 'M', spend: 2651, clicks: 882, enquiries: 42, cpe: 63 },
  { label: 'Jun 2026', short: 'J', spend: 3836, clicks: 2076, enquiries: 41, cpe: 94 },
  { label: 'Jul 2026', short: 'J', spend: 6978, clicks: 2347, enquiries: 130, cpe: 54, note: 'Peak. 130 enquiries, and more than the firm could answer the same day, so they asked us to slow down.' },
  { label: 'Aug 2026', short: 'A', spend: 3590, clicks: 1163, enquiries: 70, cpe: 51 },
  { label: 'Sep 2026', short: 'S', spend: 1668, clicks: 902, enquiries: 77, cpe: 22, note: 'To the 19th. Half the budget of July, and the cheapest enquiries of the engagement.' },
]

/** Stated by the account for the whole period, not re-derived from the column. */
export const totals = {
  spend: 30969,
  clicks: 13083,
  enquiries: 596,
  cpe: 52,
} as const

export const monthsSource =
  'Google Ads account, 25 November 2025 to 19 September 2026. A tracked enquiry is a call or form submission matched to a paid click by WhatConverts. September is a partial month. The monthly column sums to 597 against an account total of 596, because conversions attributed across more than one click leave half figures in the underlying data.'

/** The AHPRA notarial campaign, which is small on purpose. */
export const ahpra: Figure[] = [
  {
    value: '46',
    label: 'Clicks in ten months',
    basis: 'Google Ads, AHPRA notarial campaign, full period. A tiny market, deliberately.',
  },
  {
    value: '84%',
    label: 'Impression share',
    basis:
      'Search impression share for the campaign over the full period. When somebody in Ireland searches for this, the firm appears almost every time.',
  },
  {
    value: '€10.90',
    label: 'Cost per click',
    basis:
      'Campaign average, full period. High, and worth it: each enquiry is a specific, time-sensitive piece of work with almost no competition.',
  },
]

/** The figures quoted on the front of the site, repeated here with their basis. */
export const first90: Figure[] = [
  {
    value: '+112%',
    label: 'Tracked enquiries',
    basis:
      'First 90 days after launch against the 90 days of the firm’s previous paid search period. Form submissions and phone calls, Google Ads.',
  },
  {
    value: '−38%',
    label: 'Cost per enquiry',
    basis: 'Same two 90-day periods, Google Ads spend divided by tracked enquiries.',
  },
  {
    value: '3.4×',
    label: 'Return on ad spend',
    basis:
      'Modelled, not measured: signed cases attributed to Google Ads, valued at the firm’s own average case value, divided by spend over the same period. Specific to this account, and not quoted as a general expectation.',
  },
]
