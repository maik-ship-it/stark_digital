interface CalloutProps {
  children: React.ReactNode
  type?: 'tip' | 'warning' | 'stat'
  title?: string
}

/**
 * Restyled onto the paper/ink palette. It previously used `bg-amber-glow`,
 * which is not a token this theme defines, so the default 'tip' variant, the
 * one most callouts in the blog use, rendered with no background at all.
 *
 * Deliberately not marked .prose-block: the body is MDX, so a list written
 * inside a callout should keep the prose bullet. The paragraph size is brought
 * down with variants instead, which win because utilities outrank the prose
 * layer.
 */
export default function Callout({ children, type = 'tip', title }: CalloutProps) {
  const style = {
    tip: {
      wrapper: 'bg-orange-soft',
      border: 'var(--color-orange)',
      label: 'var(--color-orange-dim)',
      body: 'text-text-soft [&_strong]:text-text',
    },
    warning: {
      wrapper: 'bg-paper-2',
      border: 'var(--color-paper-3)',
      label: 'var(--color-text-soft)',
      body: 'text-text-soft [&_strong]:text-text',
    },
    stat: {
      wrapper: 'bg-ink',
      border: 'var(--color-orange)',
      label: 'var(--color-orange)',
      body: 'text-on-ink-soft [&_strong]:text-on-ink',
    },
  }[type]

  const defaultTitles = { tip: 'Key insight', warning: 'Note', stat: 'Quick stat' }

  return (
    <div
      className={`my-8 px-6 py-5 md:px-7 md:py-6 ${style.wrapper}`}
      style={{ borderLeft: `3px solid ${style.border}`, borderRadius: 'var(--radius-card)' }}
    >
      <p
        className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-2.5 mt-0"
        style={{ color: style.label }}
      >
        {title ?? defaultTitles[type]}
      </p>
      <div
        className={`${style.body} [&_p]:text-[16px] [&_p]:leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:font-semibold`}
      >
        {children}
      </div>
    </div>
  )
}
