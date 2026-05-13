'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  ['Services', '/google-ads-dublin'],
  ['Case Studies', '/case-studies'],
  ['Blog', '/blog'],
  ['About', '/about'],
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-canvas/92 backdrop-blur-xl border-b border-surface-2 py-3.5'
            : 'bg-canvas/0 py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center z-10 shrink-0">
            <Image
              src="/images/logo-stark.png"
              alt="Stark Digital"
              width={140}
              height={48}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-text-secondary hover-amber hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-amber text-canvas text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-amber-dim transition-colors duration-200"
          >
            Let&apos;s Talk →
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-10 p-2 -mr-1 flex flex-col gap-[5px] items-end"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-4' : 'w-4'
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-5'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'var(--color-canvas)' }}
      >
        <div className="flex flex-col justify-center h-full px-6 pt-20 pb-10">

          {/* Logo in mobile menu */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="mb-10">
            <Image
              src="/images/logo-stark.png"
              alt="Stark Digital"
              width={120}
              height={41}
              className="h-9 w-auto"
            />
          </Link>

          {/* Links */}
          <nav className="flex flex-col gap-1 mb-10">
            {NAV_LINKS.map(([label, href], i) => (
              <Link
                key={href}
                href={href}
                className="font-serif font-bold text-white py-3 border-b border-surface-2 last:border-0 transition-colors duration-200 hover:text-amber"
                style={{
                  fontSize: 'clamp(28px, 8vw, 48px)',
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-12px)',
                  opacity: menuOpen ? 1 : 0,
                  transition: `transform 0.4s ease ${i * 0.05}s, opacity 0.4s ease ${i * 0.05}s, color 0.2s ease`,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-canvas font-semibold px-7 py-4 rounded-sm w-fit text-base"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk →
          </Link>

          {/* Footer micro */}
          <div className="mt-auto pt-10 flex gap-6">
            <span className="label-muted text-[10px]">Max. 8 clients</span>
            <span className="label-muted text-[10px]">Dublin, Ireland</span>
            <a href="mailto:hello@starkdigital.ie" className="label-muted text-[10px] hover:text-amber transition-colors">
              hello@starkdigital.ie
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
