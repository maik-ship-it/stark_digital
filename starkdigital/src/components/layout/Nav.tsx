'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'
import { terms } from '@/lib/proof'

/** Google Ads sits first: it is the strongest page and the usual entry point. */
const SERVICE_LINKS = [
  { label: 'Google Ads', href: '/google-ads-dublin' },
  ...services.map((s) => ({ label: s.nav, href: `/${s.slug}` })),
]

const NAV_LINKS = [
  ['Case Studies', '/case-studies'],
  ['Blog', '/blog'],
  ['About', '/about'],
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close the dropdown on outside click and on Escape
  useEffect(() => {
    if (!servicesOpen) return
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-paper/90 backdrop-blur-xl py-3' : 'py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center z-10 shrink-0">
            <Image
              src="/images/logo-stark.png"
              alt="Stark Digital"
              width={140}
              height={48}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                className="flex items-center gap-1.5 text-[15px] font-medium text-text-soft hover:text-text transition-colors duration-200"
              >
                Services
                <span
                  className="text-[10px] transition-transform duration-200"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none' }}
                  aria-hidden
                >
                  ▾
                </span>
              </button>

              <div
                className="absolute left-0 top-full pt-4 transition-all duration-200"
                style={{
                  opacity: servicesOpen ? 1 : 0,
                  visibility: servicesOpen ? 'visible' : 'hidden',
                  transform: servicesOpen ? 'translateY(0)' : 'translateY(-6px)',
                }}
              >
                <ul className="bg-paper rounded-[14px] p-2 shadow-card min-w-[15rem] border border-paper-3">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 rounded-[9px] text-[15px] font-medium text-text-soft hover:text-text hover:bg-paper-2 transition-colors duration-150"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[15px] font-medium text-text-soft hover-amber hover:text-text transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Wrapped: the .btn utility sets display, which would beat `hidden` */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn btn-ink !py-2.5 !px-5 !text-sm">
              Book a call
            </Link>
          </div>

          <button
            className="md:hidden relative z-10 p-2 -mr-2 flex flex-col gap-[6px] items-end"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[2px] bg-ink rounded-full transition-all duration-300 ${
                menuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'
              }`}
            />
            <span
              className={`block h-[2px] bg-ink rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-5' : 'w-5'
              }`}
            />
            <span
              className={`block h-[2px] bg-ink rounded-full transition-all duration-300 ${
                menuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-4'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden overflow-y-auto transition-all duration-300 bg-paper ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col min-h-full px-6 pt-24 pb-10">
          <p className="label mb-4">Services</p>
          <nav className="flex flex-col mb-9">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="display py-3 border-b border-paper-3 transition-colors duration-200 hover:text-orange"
                style={{ fontSize: 'clamp(24px, 6.5vw, 36px)' }}
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col mb-9">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="py-3 text-lg font-medium text-text-soft border-b border-paper-3 last:border-0 hover:text-orange transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="btn btn-orange w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Book a call
            <span aria-hidden>→</span>
          </Link>

          <div className="mt-auto pt-10 flex flex-col gap-2">
            <span className="label-muted">{terms.intakeShort}</span>
            <a href={`mailto:${terms.email}`} className="label-muted hover:text-orange transition-colors">
              {terms.email}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
