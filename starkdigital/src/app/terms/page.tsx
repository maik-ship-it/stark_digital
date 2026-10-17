import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'
import { buildMetadata } from '@/lib/seo'
import { legal } from '@/lib/legal'

export const metadata: Metadata = buildMetadata({
  title: 'Legal Information',
  description:
    'Who runs starkdigital.ie, the business details Irish law requires a website to publish, and what this site is and is not.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Who runs this site, and on what basis."
      intro="The business details Irish law requires a website to publish, and what the pages here are. The terms of any actual work are agreed with you in writing, not set out on a public page."
      current="/terms"
    >
      <h2>Business details</h2>
      <ul>
        <li><strong>Business:</strong> {legal.business}</li>
        <li><strong>Website:</strong> starkdigital.ie, trading as {legal.site}</li>
        <li><strong>Address:</strong> {legal.address}, {legal.country}</li>
        <li><strong>Email:</strong> <a href={`mailto:${legal.email}`}>{legal.email}</a></li>
        <li><strong>VAT number:</strong> {legal.vat}</li>
      </ul>

      <h2>What this site is</h2>
      <p>
        A description of the work I do and how I think about it. Nothing on it is an offer in the
        contractual sense, and sending the contact form does not commit you to anything. It starts a
        conversation, which is all it is meant to do.
      </p>

      <h2>How work is actually agreed</h2>
      <p>
        Every engagement is set out in writing before it starts: what is in scope, what it costs,
        how long the notice period is, who approves what. Those terms are agreed with you
        individually, because a solicitor advertising personal injury work and a plumber taking
        emergency calls do not need the same arrangement.
      </p>
      <p>
        Where this site quotes a figure, such as a starting price, it is a starting point for that
        conversation rather than a term of your contract. If the two ever disagree, your written
        agreement is the one that counts.
      </p>

      <h2>What is not promised</h2>
      <p>
        No ranking, position, volume of enquiries, cost per enquiry or return is guaranteed here, by
        me or by anybody being straight with you. The auction, the competition and the market are
        outside anyone&apos;s control.
      </p>
      <p>
        The figures published on this site come from specific accounts over specific periods, and
        each one carries the basis it was measured on. They describe what happened in that account.
        They are not a forecast for yours.
      </p>

      <h2>The content here</h2>
      <p>
        The writing, the charts and the case studies are mine. Quoting a passage with attribution and
        a link is welcome; republishing a piece wholesale is not. Client figures appear only where
        the client has signed off on them in writing, which is why there are fewer case studies here
        than an agency of this age might otherwise show.
      </p>

      <h2>Links to other sites</h2>
      <p>
        Where this site links somewhere else, including to Google&apos;s documentation and to the
        tools mentioned in the writing, I have no control over what those sites do or how they handle
        your data.
      </p>

      <h2>Your data</h2>
      <p>
        What happens to personal data here is on the <Link href="/privacy">privacy page</Link>, and
        the measurement cookies are listed on the <Link href="/cookies">cookie page</Link>.
      </p>

      <h2>Complaints and governing law</h2>
      <p>
        If something is wrong, email <a href={`mailto:${legal.email}`}>{legal.email}</a> and you will
        get an answer the same working day. Irish law governs this site and the Irish courts have
        jurisdiction. If you are a consumer rather than a business, nothing here affects the
        statutory rights you have under Irish and EU consumer law.
      </p>
    </LegalPage>
  )
}
