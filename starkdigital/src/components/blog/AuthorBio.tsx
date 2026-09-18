import Image from 'next/image'
import Link from 'next/link'

export default function AuthorBio() {
  return (
    <div className="mt-16 pt-12 border-t border-paper-3">
      <div className="flex items-start gap-5">
        <div className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border border-paper-3">
          <Image
            src="/images/Maik.webp"
            alt="Maik Stark"
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="label mb-1.5">Written by</p>
          <p className="display text-lg">Maik Stark</p>
          <p className="text-[15px] text-text-soft mt-2 leading-relaxed max-w-xl">
            Search advertising, SEO and landing pages for businesses in Dublin and
            across Ireland. One person, two new clients a month, and an unusual
            willingness to tell people not to advertise.
          </p>
          <Link href="/about" className="inline-block mt-4 text-[15px] font-medium hover-amber">
            More about me
          </Link>
        </div>
      </div>
    </div>
  )
}
