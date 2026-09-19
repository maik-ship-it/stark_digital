import Reveal from '@/components/v3/Reveal'

/**
 * One sentence, set large, for the two or three lines in a case study that are
 * the actual argument. Not a quote, so not a blockquote.
 *
 * The text sits in a <div>, not a <p>: MDX wraps the children of a block-level
 * component in a paragraph of its own, and a <p> inside a <p> is invalid HTML
 * that the browser silently reparents, which breaks hydration.
 */
export default function Pull({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="prose-block my-12">
      <div
        className="pl-6 md:pl-8"
        style={{ borderLeft: '3px solid var(--color-orange)' }}
      >
        <div
          className="display text-text"
          style={{ fontSize: 'clamp(21px, 2.5vw, 31px)', lineHeight: 1.22 }}
        >
          {children}
        </div>
      </div>
    </Reveal>
  )
}
