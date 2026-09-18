import Image from 'next/image'
import { testimonial } from '@/lib/proof'
import Reveal from './Reveal'

/** One rendering of the client quote, used on the index and in the case study. */
export default function Testimonial({ onInk = false }: { onInk?: boolean }) {
  const { quote, name, role, firm, portrait } = testimonial

  return (
    <Reveal
      className={`panel p-8 md:p-11 ${onInk ? 'bg-ink' : 'bg-paper-2'}`}
    >
      <blockquote
        className={`display mb-9 ${onInk ? 'text-on-ink' : ''}`}
        style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', lineHeight: 1.25 }}
      >
        {quote}
      </blockquote>

      <div className="flex items-center gap-4">
        {portrait && (
          <div
            className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden shrink-0"
            style={{ outline: '1px solid var(--color-paper-3)' }}
          >
            <Image
              src={portrait}
              alt={`${name}, ${role} at ${firm}`}
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className={`font-semibold ${onInk ? 'text-on-ink' : 'text-text'}`}>{name}</p>
          <p className="label-muted mt-1.5">
            {role} · {firm}
          </p>
        </div>
      </div>
    </Reveal>
  )
}
