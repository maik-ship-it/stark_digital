/**
 * Single source of truth for every number shown on the site.
 *
 * Rule: no figure appears anywhere in the UI unless it lives here and has a
 * `basis` string that explains how it was measured. If you cannot write the
 * basis, the number does not go on the site.
 *
 * ⚠️ CONFIRM BEFORE LAUNCH : the entries marked `confirmed: false` carry a
 * placeholder basis written from the old site's figures. Check each against
 * the actual Google Ads / GA4 / WhatConverts data and set `confirmed: true`.
 */

export type Claim = {
  value: string
  label: string
  /** How this number was measured. Shown to the visitor, not hidden in a tooltip. */
  basis: string
  confirmed: boolean
}

export const claims = {
  enquiries: {
    value: '+112%',
    label: 'Client enquiries',
    basis:
      'Anthony Joyce Solicitors. Tracked form submissions and phone calls in the 90 days after launch, compared with the 90 days before.',
    confirmed: false,
  },
  costPerLead: {
    value: '-38%',
    label: 'Cost per enquiry',
    basis:
      'Anthony Joyce Solicitors. Google Ads spend divided by tracked enquiries, same two 90-day periods.',
    confirmed: false,
  },
  roas: {
    value: '3.4x',
    label: 'Return on ad spend',
    basis:
      'Anthony Joyce Solicitors. Signed cases attributed to Google Ads, valued at the firm’s own average case value, divided by ad spend over the same period. A modelled figure, not measured revenue, and not an account-wide average across clients.',
    confirmed: false,
  },
  responseTime: {
    value: 'Same day',
    label: 'Reply to your email',
    basis: 'Working days, Dublin hours. You email one person and that person answers.',
    confirmed: true,
  },
} satisfies Record<string, Claim>

/** Commercial terms. Change them here, they update everywhere. */
export const terms = {
  priceFrom: '€1,500',
  priceUnit: 'per month',
  intake: 'Two new clients a month',
  intakeShort: '2 new clients / month',
  contract: 'Rolling monthly',
  location: 'Dublin, Ireland',
  email: 'maik@starkdigital.ie',
} as const

/**
 * The client testimonial, in one place because it appears on the case study
 * index and inside the case study itself.
 *
 * Portrait is cropped from anthony-joyce.png at left 78, top 0, 300x300, which
 * centres the head in the round frame and keeps the face readable at 72px.
 *
 * The previous site attributed this to "Eoin Gallagher, Managing Director".
 * Confirmed with Maik: the words are Anthony Joyce's, the firm's owner. Photo
 * use is cleared with the client.
 */
export const testimonial = {
  quote:
    'Working with Maik was incredibly smooth. He understood what we needed right away and we have already noticed more client enquiries coming in.',
  name: 'Anthony Joyce',
  role: 'Owner',
  firm: 'Anthony Joyce & Co. Solicitors',
  portrait: '/images/anthony-joyce-portrait.png',
} as const
