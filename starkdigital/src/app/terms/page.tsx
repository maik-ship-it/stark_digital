import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'
import { buildMetadata } from '@/lib/seo'
import { legal } from '@/lib/legal'
import { terms as commercial } from '@/lib/proof'

export const metadata: Metadata = buildMetadata({
  title: 'Terms and Business Details',
  description:
    'Who you are contracting with at Stark Digital, what the service includes, what it costs, how notice works, and who owns the advertising accounts.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Who you are dealing with, and on what basis."
      intro="The business details Irish law requires a website to publish, and the terms the work runs on. Written to be read rather than survived."
      current="/terms"
    >
      <h2>Business details</h2>
      <ul>
        <li><strong>Trading name:</strong> {legal.tradingName}</li>
        <li><strong>Operated by:</strong> {legal.owner}, {legal.structure}</li>
        <li><strong>Address:</strong> {legal.address}, {legal.city}, {legal.country}</li>
        <li><strong>Email:</strong> <a href={`mailto:${legal.email}`}>{legal.email}</a></li>
        <li>
          <strong>VAT:</strong>{' '}
          {legal.vat ? legal.vat : 'not registered for VAT, so no VAT is charged on invoices.'}
        </li>
      </ul>

      <h2>What the service is</h2>
      <p>
        Management of paid search, SEO, AI search visibility and landing pages, as agreed in writing
        before the work starts. The scope of any engagement is whatever that written agreement says;
        this page covers the terms around it rather than replacing it.
      </p>
      <p>
        The work is done by {legal.owner} personally. Intake is capped at {commercial.intake.toLowerCase()} for
        that reason, and nothing is passed to a subcontractor without telling you first.
      </p>

      <h2>Fees and payment</h2>
      <ul>
        <li>
          Management starts at {commercial.priceFrom} {commercial.priceUnit}, invoiced monthly in
          advance, payable within 14 days.
        </li>
        <li>
          Advertising spend is separate and is paid by you directly to Google. I never hold your ad
          budget, and the fee does not change with how much you spend.
        </li>
        <li>
          The arrangement is {commercial.contract.toLowerCase()}. There is no minimum term and no
          automatic annual renewal.
        </li>
      </ul>

      <h2>Ending it</h2>
      <p>
        Either side can end the arrangement with 30 days&apos; written notice, by email. Work and
        invoicing continue through the notice period. There is no exit fee, and no clause that makes
        leaving awkward.
      </p>

      <h2>Who owns what</h2>
      <p>
        You own your Google Ads account, your Google Analytics property, your Google Business
        Profile, your domain and your website. Where an account is created for you, it is created in
        your name with you as the owner, and administrative access is handed over at the end without
        being asked twice. Campaign structures, landing pages and content produced for you are yours
        once invoices are paid.
      </p>
      <p>
        What stays mine: the methods, templates and internal tooling used to do the work, including
        Stark Digital Ads Brain.
      </p>

      <h2>What I need from you</h2>
      <ul>
        <li>Approval of advertising copy before it runs, which matters most for regulated work. If you are a solicitor, an accountant or a financial advisor, the compliance decision is yours and I will not run copy you have not approved.</li>
        <li>Accurate information about the business, its services and its claims.</li>
        <li>Somebody who answers enquiries. Paid search produces phone calls, and an unanswered phone is a lost job rather than a delayed one.</li>
      </ul>

      <h2>What is not promised</h2>
      <p>
        No specific ranking, position, volume of enquiries, cost per enquiry or return is guaranteed,
        by me or by anyone who is being honest with you. The auction, the competition and the market
        are outside anyone&apos;s control. What is promised is the work, the reasoning behind each
        decision, and figures reported with the basis they were measured on.
      </p>

      <h2>Liability</h2>
      <p>
        Nothing here limits liability for death, personal injury, fraud, or anything else that cannot
        be limited by Irish law. Beyond that, liability for any claim is limited to the fees you paid
        in the three months before it arose, and does not extend to lost profit, lost revenue or lost
        opportunity.
      </p>

      <h2>Confidentiality and data</h2>
      <p>
        Account data, figures and anything commercially sensitive stay confidential, during the work
        and afterwards. Nothing identifying a client is published without written sign-off, which is
        why the case studies on this site exist only where that sign-off was given. How personal data
        is handled is on the <Link href="/privacy">privacy page</Link>.
      </p>

      <h2>Complaints and governing law</h2>
      <p>
        If something is wrong, email <a href={`mailto:${legal.email}`}>{legal.email}</a> and it gets
        answered the same working day. These terms are governed by Irish law and the courts of
        Ireland have jurisdiction. If you are a consumer rather than a business, this does not affect
        the statutory rights you have under Irish and EU consumer law.
      </p>
    </LegalPage>
  )
}
