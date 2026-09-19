import type { Figure } from '@/lib/case-studies/anthony-joyce'
import Reveal from '@/components/v3/Reveal'

/**
 * A row of figures with the measurement basis printed underneath each one.
 *
 * The basis is the point of the component. A number on an agency site is worth
 * nothing without the sentence explaining what was counted, so there is no
 * variant of this that hides it.
 */
export default function Figures({
  figures,
  columns = 3,
  size = 'lg',
}: {
  figures: Figure[]
  columns?: 2 | 3
  size?: 'lg' | 'sm'
}) {
  return (
    <Reveal
      stagger
      className={`grid grid-cols-1 ${
        columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
      } gap-px bg-paper-3 rounded-[18px] overflow-hidden prose-block my-10`}
    >
      {figures.map((f) => (
        <div key={f.label} className="bg-paper-2 p-6 md:p-8 flex flex-col">
          <p
            className="display text-orange mb-3"
            style={{ fontSize: size === 'lg' ? 'clamp(32px, 4vw, 52px)' : 'clamp(26px, 3vw, 38px)' }}
          >
            {f.value}
          </p>
          <p className="label mb-4">{f.label}</p>
          <p className="text-text-soft text-[13px] leading-relaxed mt-auto">{f.basis}</p>
        </div>
      ))}
    </Reveal>
  )
}
