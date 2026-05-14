'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      business: (form.elements.namedItem('business') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Unknown error')
      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setState('error')
    }
  }

  return (
    <section className="bg-canvas pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Copy */}
          <div>
            <p className="label mb-6">Get in touch</p>
            <h1
              className="font-serif font-bold text-white leading-[0.92] tracking-[-0.01em] mb-6"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              Let&apos;s talk about your{' '}
              <em className="italic text-amber">business.</em>
            </h1>
            <p className="text-text-secondary leading-relaxed mb-10 text-[1.0625rem]">
              Tell me a bit about your business and what you&apos;re hoping to
              achieve with Google Ads. I&apos;ll come back to you within one
              business day.
            </p>

            <div className="space-y-4 mb-10">
              {['No obligation', 'Response within 1 business day', 'Dublin-based'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-amber inline-block shrink-0" />
                  <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-secondary">
              Prefer email?{' '}
              <a
                href="mailto:maik@starkdigital.ie"
                className="text-amber underline decoration-amber/30 underline-offset-2 hover:decoration-amber/60 transition-colors duration-200"
              >
                maik@starkdigital.ie
              </a>
            </p>
          </div>

          {/* Right: Form or Success */}
          <div>
            {state === 'success' ? (
              <div className="border border-surface-2 rounded-sm p-10 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber inline-block" />
                  <p className="label">Message sent</p>
                </div>
                <p
                  className="font-serif font-bold text-white leading-tight"
                  style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
                >
                  Thanks — I&apos;ll be in touch shortly.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  You&apos;ll hear from me within one business day. In the meantime,
                  feel free to browse the{' '}
                  <Link href="/case-studies" className="text-amber hover:underline">
                    case studies
                  </Link>{' '}
                  or{' '}
                  <Link href="/blog" className="text-amber hover:underline">
                    blog
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block label mb-2" htmlFor="name">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state === 'loading'}
                    className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-amber/50 transition-colors disabled:opacity-50"
                    placeholder="John Murphy"
                  />
                </div>

                <div>
                  <label className="block label mb-2" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state === 'loading'}
                    className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-amber/50 transition-colors disabled:opacity-50"
                    placeholder="john@murphysolicitors.ie"
                  />
                </div>

                <div>
                  <label className="block label mb-2" htmlFor="business">
                    Business type
                  </label>
                  <select
                    id="business"
                    name="business"
                    disabled={state === 'loading'}
                    className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-amber/50 transition-colors disabled:opacity-50"
                  >
                    <option value="">Select your industry</option>
                    <option>Solicitor / Law firm</option>
                    <option>Accountant / Accounting firm</option>
                    <option>Financial advisor / IFA</option>
                    <option>Dental practice</option>
                    <option>Tradesperson / Trade business</option>
                    <option>Other professional service</option>
                  </select>
                </div>

                <div>
                  <label className="block label mb-2" htmlFor="message">
                    Anything else?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    disabled={state === 'loading'}
                    className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-amber/50 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your business and goals..."
                  />
                </div>

                {state === 'error' && (
                  <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-sm px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full bg-amber text-canvas text-sm font-semibold py-3.5 rounded-sm hover:bg-amber-dim transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-canvas/40 border-t-canvas rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
