interface CalloutProps {
  children: React.ReactNode
  type?: 'tip' | 'warning' | 'stat'
  title?: string
}

export default function Callout({ children, type = 'tip', title }: CalloutProps) {
  const styles = {
    tip: {
      wrapper: 'bg-amber-glow border-l-[3px] border-amber',
      label: 'text-amber',
    },
    warning: {
      wrapper: 'bg-surface border-l-[3px] border-surface-3',
      label: 'text-text-secondary',
    },
    stat: {
      wrapper: 'bg-surface border border-surface-2',
      label: 'text-amber',
    },
  }[type]

  const defaultTitles = { tip: 'Key insight', warning: 'Note', stat: 'Quick stat' }

  return (
    <div className={`rounded-sm px-5 py-4 my-6 ${styles.wrapper}`}>
      <p className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${styles.label}`}>
        {title ?? defaultTitles[type]}
      </p>
      <div className="text-[0.9375rem] text-text-secondary leading-relaxed [&_strong]:text-white [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  )
}
