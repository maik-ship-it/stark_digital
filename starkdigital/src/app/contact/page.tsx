import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Stark Digital — Google Ads agency Dublin. Request a free audit or ask a question.',
  alternates: { canonical: 'https://starkdigital.ie/contact' },
}

export default function ContactPage() {
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
                href="mailto:hello@starkdigital.ie"
                className="text-amber underline decoration-amber/30 underline-offset-2 hover:decoration-amber/60 transition-colors duration-200"
              >
                hello@starkdigital.ie
              </a>
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <form className="space-y-6" action="/api/contact" method="POST">
              <div>
                <label className="block label mb-2" htmlFor="name">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-amber/50 transition-colors"
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
                  className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-amber/50 transition-colors"
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
                  className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-amber/50 transition-colors"
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
                  className="w-full bg-surface border border-surface-2 rounded-sm px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-amber/50 transition-colors resize-none"
                  placeholder="Tell me about your business and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber text-canvas text-sm font-semibold py-3.5 rounded-sm hover:bg-amber-dim transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Send message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
