'use client'
import { useState } from 'react'
import Link from 'next/link'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const NEEDS = [
  'Not sure yet, I want to talk it through',
  'Google Ads',
  'SEO',
  'AI search',
  'A website or landing pages',
  'Someone to look at an account that is underperforming',
]

const SECTORS = [
  'Solicitor or law firm',
  'Accountant or accounting firm',
  'Financial advisor or IFA',
  'Dental or medical practice',
  'Trade business',
  'Other',
]

const fieldClass =
  'w-full bg-paper border border-paper-3 rounded-[12px] px-4 py-3.5 text-text text-[15px] placeholder-text-faint focus:outline-none focus:border-orange transition-colors disabled:opacity-50'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const value = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
        ?.value ?? ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: value('name'),
          email: value('email'),
          website: value('website'),
          need: value('need'),
          business: value('business'),
          message: value('message'),
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Unknown error')
      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="panel bg-paper-2 p-8 md:p-11">
        <p className="eyebrow mb-6">Message sent</p>
        <p className="display mb-5" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
          Got it. You will hear from me today.
        </p>
        <p className="text-text-soft text-base leading-relaxed mb-8 max-w-md">
          If it is already evening in Dublin, then first thing tomorrow. In the
          meantime there is a case study with the full breakdown of a campaign, and
          a blog that is mostly me arguing with common advice.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/case-studies" className="btn btn-ink">
            Case studies
          </Link>
          <Link href="/blog" className="btn btn-ghost">
            Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form className="panel bg-paper-2 p-7 md:p-10 space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block label mb-2.5" htmlFor="name">
          Your name
        </label>
        <input
          type="text" id="name" name="name" required autoComplete="name"
          disabled={state === 'loading'} className={fieldClass}
          placeholder="John Murphy"
        />
      </div>

      <div>
        <label className="block label mb-2.5" htmlFor="email">
          Email
        </label>
        <input
          type="email" id="email" name="email" required autoComplete="email"
          disabled={state === 'loading'} className={fieldClass}
          placeholder="john@murphysolicitors.ie"
        />
      </div>

      <div>
        <label className="block label mb-2.5" htmlFor="website">
          Your website
        </label>
        <input
          type="text" id="website" name="website" autoComplete="url"
          disabled={state === 'loading'} className={fieldClass}
          placeholder="murphysolicitors.ie"
        />
        <p className="text-text-faint text-[13px] mt-2">
          Optional, but it means I can look before we speak instead of during.
        </p>
      </div>

      <div>
        <label className="block label mb-2.5" htmlFor="need">
          What do you think you need?
        </label>
        <select
          id="need" name="need" disabled={state === 'loading'} className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>Pick the closest one</option>
          {NEEDS.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block label mb-2.5" htmlFor="business">
          What kind of business
        </label>
        <select
          id="business" name="business" disabled={state === 'loading'} className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>Select one</option>
          {SECTORS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block label mb-2.5" htmlFor="message">
          Anything else worth knowing
        </label>
        <textarea
          id="message" name="message" rows={4}
          disabled={state === 'loading'} className={`${fieldClass} resize-none`}
          placeholder="What you sell, roughly what a customer is worth to you, and what you have tried already."
        />
      </div>

      {state === 'error' && (
        <p
          className="text-[15px] rounded-[12px] px-4 py-3.5"
          style={{
            color: '#B42318',
            background: 'rgba(180,35,24,0.07)',
            border: '1px solid rgba(180,35,24,0.2)',
          }}
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn btn-orange w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? (
          <>
            <span
              className="w-3.5 h-3.5 rounded-full animate-spin"
              style={{ border: '2px solid rgba(255,246,242,0.4)', borderTopColor: '#FFF6F2' }}
            />
            Sending
          </>
        ) : (
          <>
            Send it
            <span aria-hidden>→</span>
          </>
        )}
      </button>
    </form>
  )
}
