import Link from 'next/link'
import Image from 'next/image'
import { terms } from '@/lib/proof'
import { allServices } from '@/lib/services'

const FOOTER_LINKS = [
  {
    heading: 'Services',
    links: allServices.map((s) => ({ label: s.nav, href: `/${s.slug}` })),
  },
  {
    heading: 'Google Ads by industry',
    links: [
      { label: 'For solicitors', href: '/google-ads-dublin/solicitors' },
      { label: 'For accountants', href: '/google-ads-dublin/accountants' },
      { label: 'For financial advisors', href: '/google-ads-dublin/financial-advisors' },
      { label: 'For dental clinics', href: '/google-ads-dublin/dental-clinics' },
      { label: 'For tradespeople', href: '/google-ads-dublin/tradespeople' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="px-3 sm:px-4 pb-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-14">
          <div>
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/images/logo-stark.png"
                alt="Stark Digital"
                width={120}
                height={41}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-text-soft text-[15px] leading-relaxed max-w-xs mb-6">
              Search advertising, SEO, AI search and landing pages for businesses in
              Dublin and across Ireland.
            </p>
            <a
              href={`mailto:${terms.email}`}
              className="text-text font-medium hover-amber inline-block"
            >
              {terms.email}
            </a>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="label mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-text-soft text-[15px] hover:text-orange transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-paper-3 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="label-muted">© {new Date().getFullYear()} Stark Digital</p>
          <p className="label-muted">{terms.location}</p>
        </div>
      </div>
    </footer>
  )
}
