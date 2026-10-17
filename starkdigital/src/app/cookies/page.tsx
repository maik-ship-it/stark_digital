import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'
import { buildMetadata } from '@/lib/seo'
import { legal } from '@/lib/legal'

export const metadata: Metadata = buildMetadata({
  title: 'Cookie Policy',
  description:
    'Which cookies starkdigital.ie sets, what Google Tag Manager, Analytics and Ads conversion tracking collect, and how to refuse them.',
  path: '/cookies',
})

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Which cookies this site sets, and how to refuse them."
      intro="There is no advertising network running here and nothing is sold on. What there is: Google's measurement tools, named individually, with the way to switch each of them off."
      current="/cookies"
    >
      <h2>What is actually set</h2>
      <p>
        A cookie is a small file a site stores in your browser. This site uses them for one purpose
        only, which is measurement: how many people arrive, which pages they read, and whether an
        enquiry came from an advertisement.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>What it does</th>
            <th>Roughly how long</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Tag Manager</td>
            <td>Loads the two tools below. Sets no cookie of its own.</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Counts visits and pages, distinguishes repeat visits, records which site sent you.</td>
            <td>Up to 2 years</td>
          </tr>
          <tr>
            <td>Google Ads conversion tracking</td>
            <td>Connects an enquiry back to the advertisement and search that produced it.</td>
            <td>Up to 90 days</td>
          </tr>
        </tbody>
      </table>
      <p>
        No advertising profile is built here, no data is sold, and there is no Meta pixel, no
        LinkedIn tag and no third-party advertising network on the site.
      </p>

      <h2>Where consent stands</h2>
      <p>
        Under the Irish ePrivacy Regulations these measurement cookies need your consent before they
        are set. A consent banner is being added to the site. Until it is live, the tools load when
        you arrive, and the controls in the next section are the way to refuse them. If that matters
        to you, email me and I will confirm what was recorded and have it deleted.
      </p>

      <h2>How to refuse them</h2>
      <ul>
        <li>
          <strong>In your browser.</strong> Every major browser can block or delete cookies for a
          single site. In Chrome, Safari, Firefox and Edge it sits under privacy or site settings.
        </li>
        <li>
          <strong>Google Analytics specifically.</strong> The{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">
            opt-out browser add-on
          </a>{' '}
          stops Analytics on every site, not just this one.
        </li>
        <li>
          <strong>Ad personalisation.</strong> Google&apos;s{' '}
          <a href="https://myadcenter.google.com" rel="noopener">
            My Ad Center
          </a>{' '}
          controls how your Google account is used for advertising.
        </li>
      </ul>
      <p>
        Blocking them changes nothing about how the site works for you. It only means I cannot see
        that you were here.
      </p>

      <h2>The rest of it</h2>
      <p>
        What happens to the data these tools collect, who processes it and what rights you have is on
        the <Link href="/privacy">privacy page</Link>. Questions go to{' '}
        <a href={`mailto:${legal.email}`}>{legal.email}</a>.
      </p>
    </LegalPage>
  )
}
