/**
 * Shown on any case study whose `status` is still 'draft'.
 *
 * The page stays reachable so the client can read it on the real URL, and
 * generateMetadata sends noindex for the same condition, so nothing gets
 * indexed before it has been signed off.
 */
export default function DraftNotice({ items }: { items: string[] }) {
  return (
    <aside
      className="prose-block panel p-6 md:p-8 mb-4"
      style={{ background: 'var(--color-orange-soft)', border: '1px solid rgba(255,90,31,0.3)' }}
      aria-label="Draft notice"
    >
      <p className="label mb-3" style={{ color: 'var(--color-orange-dim)' }}>
        Draft · not published
      </p>
      <p className="text-text text-[15px] leading-relaxed mb-4 font-medium">
        This page sends noindex and is kept out of the sitemap, so it will not
        appear in search results. It is still linked from the home page and the
        industry pages, and anyone with the URL can read it. It needs written
        sign-off from the client before the status changes to live.
      </p>
      <ul className="space-y-2">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[14px] leading-relaxed text-text-soft">
            <span className="text-orange shrink-0" aria-hidden>—</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
