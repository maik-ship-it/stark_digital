import Link from 'next/link'

/**
 * Renders a body string that may carry inline links written as [anchor](/path).
 *
 * The copy for services and industries lives in plain strings in src/lib, which
 * meant a sentence could never link anywhere. Internal links want keyword anchor
 * text inside a real sentence, not a "read more" bolted on underneath, so the
 * strings carry the link and this turns it into one.
 */
const PATTERN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g

export default function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let last = 0

  for (const m of text.matchAll(PATTERN)) {
    const [full, anchor, href] = m
    const start = m.index ?? 0
    if (start > last) parts.push(text.slice(last, start))
    parts.push(
      <Link key={`${href}-${start}`} href={href} className="underline underline-offset-4 decoration-orange/40 hover:decoration-orange transition-colors">
        {anchor}
      </Link>,
    )
    last = start + full.length
  }

  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}
