/**
 * Every markdown table in a post, wrapped so it can scroll.
 *
 * Registered as the `table` override in the MDX component map, so posts keep
 * using ordinary pipe-table syntax and get this for free. The wrapper is what
 * makes a wide table usable on a phone; see .prose-table-wrap in globals.css.
 */
export default function Table(props: React.ComponentProps<'table'>) {
  return (
    <div className="prose-table-wrap">
      <p className="prose-table-hint" aria-hidden>
        Scroll sideways →
      </p>
      <table {...props} />
    </div>
  )
}
