import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'
import { buildMetadata } from '@/lib/seo'
import { legal } from '@/lib/legal'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Stark Digital collects, uses and protects personal data on starkdigital.ie and in the Stark Digital Ads Brain tool.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="What happens to your data here."
      intro="Short version: the contact form reaches my inbox and nowhere else, the site measures visits with Google's tools, and nothing is sold to anyone."
      current="/privacy"
    >
      <h2>Who you are dealing with</h2>
      <p>
        {legal.site} is the website of {legal.business}, a one-person marketing practice in Dublin.
        For personal data collected through starkdigital.ie and through the internal tool Stark
        Digital Ads Brain, {legal.business} is the data controller under the GDPR.
      </p>
      <p>
        Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        <br />
        Address: {legal.address}, {legal.country}
        <br />
        VAT number: {legal.vat}
      </p>

      <h2>The website</h2>
      <p>Three things happen on starkdigital.ie that involve your data.</p>
      <ul>
        <li>
          <strong>The contact form.</strong> Your name, email address, and whatever else you put in
          the form, including your website, what you are looking for and your message. It is sent to
          my inbox by Resend, an email delivery provider, and I use it to answer you. Legal basis:
          steps taken at your request before entering a contract, and my legitimate interest in
          replying to enquiries.
        </li>
        <li>
          <strong>Hosting.</strong> The site runs on Vercel, which keeps server logs containing your
          IP address, browser and the time of the request, in order to serve and protect the site.
          Legal basis: legitimate interest in running a website that works.
        </li>
        <li>
          <strong>Analytics and advertising.</strong> Google Tag Manager, Google Analytics and Google
          Ads conversion tracking, which set cookies and process your IP address and device data so I
          can see how the site is used and which ads produce enquiries. What each one does, how long
          it lasts and how to refuse it is set out on the <Link href="/cookies">cookie page</Link>.
        </li>
      </ul>

      <h2>Stark Digital Ads Brain</h2>
      <p>
        Stark Digital Ads Brain is an internal tool I use to manage Google Ads accounts for clients.
        It is not offered to the public and only I can sign in to it.
      </p>
      <p>
        <strong>What Google data it accesses.</strong> Signing in with Google requests the email
        address of the account signing in, to confirm it is authorised, and access to the Google Ads
        API (the <code>adwords</code> scope) for the Google Ads accounts that account already manages.
      </p>
      <p>
        <strong>What it is used for.</strong> Google Ads data such as campaigns, budgets, keywords,
        search terms, ads and performance metrics, used only to report on and manage client
        advertising: analysing performance, proposing changes, and applying them after approval. It is
        not used for anything else, not used to serve advertising, and not sold.
      </p>
      <p>
        <strong>Storage and security.</strong> The access token is stored encrypted with AES-256-GCM
        in a database inside the European Union (Cloudflare D1, EU jurisdiction). Access requires
        Google Sign In with the authorised account, and every change made through the tool is logged.
      </p>
      <p>
        <strong>Sharing.</strong> Google user data is not shared with third parties, other than with
        the client who owns the Google Ads account in question, with the infrastructure providers
        needed to run the tool (Cloudflare, Google), or where the law requires it.
      </p>
      <p>
        <strong>Keeping and deleting it.</strong> The access token is kept until the connection is
        removed. You can revoke access at any time at{' '}
        <a href="https://myaccount.google.com/permissions" rel="noopener">
          myaccount.google.com/permissions
        </a>
        . Change logs are kept for up to 24 months. To have stored data deleted, email me.
      </p>
      <p>
        Stark Digital Ads Brain&apos;s use and transfer of information received from Google APIs
        adheres to the{' '}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2>Client data</h2>
      <p>
        When I work for a client I process data about their enquiries and campaigns on their behalf.
        In that situation the client is the controller and I am the processor, under a data
        processing agreement, and the data is used only to deliver the service.
      </p>

      <h2>How long things are kept</h2>
      <ul>
        <li>Enquiries that do not become work: up to 24 months, so I can pick up a conversation that restarts.</li>
        <li>Correspondence and records relating to paid work: six years, which is what Irish tax and limitation periods require.</li>
        <li>Analytics data: for the retention period set in Google Analytics, currently 14 months.</li>
        <li>Ads Brain access tokens and logs: as described above.</li>
      </ul>

      <h2>Transfers outside the EEA</h2>
      <p>
        Some providers, including Google, Vercel, Cloudflare and Resend, may process data outside the
        European Economic Area. Where that happens the transfer is covered by the European
        Commission&apos;s Standard Contractual Clauses or by the EU-US Data Privacy Framework.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you can ask for access to your personal data, correction or deletion of it, a
        copy of it, or a restriction on how it is used, and you can object to processing based on
        legitimate interest. Email <a href={`mailto:${legal.email}`}>{legal.email}</a> and I will deal
        with it within a month.
      </p>
      <p>
        If you are not satisfied, you can complain to the Data Protection Commission, 21 Fitzwilliam
        Square South, Dublin 2, D02 RD28, at{' '}
        <a href="https://www.dataprotection.ie" rel="noopener">
          dataprotection.ie
        </a>
        .
      </p>

      <h2>Changes</h2>
      <p>
        This page changes when what it describes changes. The date at the top is the version you are
        reading.
      </p>
    </LegalPage>
  )
}
