import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  {
    heading: 'Services',
    links: [
      { label: 'Google Ads Dublin', href: '/google-ads-dublin' },
      { label: 'For Solicitors', href: '/google-ads-dublin/solicitors' },
      { label: 'For Accountants', href: '/google-ads-dublin/accountants' },
      { label: 'For Financial Advisors', href: '/google-ads-dublin/financial-advisors' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-2">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/images/logo-stark.png"
                alt="Stark Digital"
                width={110}
                height={37}
                className="h-9 w-auto"
              />
            </Link>

            <p className="text-sm leading-relaxed text-text-secondary max-w-xs mb-5">
              Performance-first Google Ads for professional services in
              Dublin and across Ireland.
            </p>
            <a
              href="mailto:hello@starkdigital.ie"
              className="text-sm text-text-secondary hover:text-amber transition-colors duration-200"
            >
              hello@starkdigital.ie
            </a>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="label mb-5">{col.heading}</p>
              <ul className="space-y-3 text-sm">
                {col.links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-text-secondary hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-surface-2 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Stark Digital. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted">
            Dublin, Ireland
          </p>
        </div>
      </div>
    </footer>
  )
}
