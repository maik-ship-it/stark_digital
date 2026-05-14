import Image from 'next/image'
import Link from 'next/link'

export default function AuthorBio() {
  return (
    <div className="max-w-2xl mx-auto mt-16 pt-12 border-t border-surface-2">
      <div className="flex items-start gap-5">
        <div className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border border-surface-2">
          <Image
            src="/images/Maik.webp"
            alt="Maik Stark"
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="label mb-1">Written by</p>
          <p className="font-display text-base font-semibold text-white">Maik Stark</p>
          <p className="text-sm text-text-secondary mt-1 leading-relaxed">
            Google Ads specialist for professional services in Dublin and Ireland.
            Founder of Stark Digital — no generalist fluff, just results.
          </p>
          <Link
            href="/about"
            className="inline-block mt-3 text-xs font-mono tracking-widest uppercase text-amber hover:text-amber-dim transition-colors duration-200"
          >
            About Maik →
          </Link>
        </div>
      </div>
    </div>
  )
}
