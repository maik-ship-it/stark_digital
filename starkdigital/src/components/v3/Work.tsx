import Image from 'next/image'
import Reveal from './Reveal'

/**
 * ⚠️ CONFIRM BEFORE LAUNCH
 * These are the projects visible in your files. Check the descriptions, swap the
 * placeholder images for real screenshots, and add a live URL where there is one.
 */
const PROJECTS = [
  {
    image: '/images/v3/work-1.jpg',
    client: 'Anthony Joyce & Co.',
    sector: 'Solicitors, Dublin',
    built: 'Practice-area landing pages and Google Ads',
    note: 'A separate page per practice area, each written for the search that brings the visitor, with call tracking wired to the campaign.',
  },
  {
    image: '/images/v3/work-2.jpg',
    client: 'Byrock Technologies',
    sector: 'Agricultural technology',
    built: 'Two landing pages and a Google Ads funnel',
    note: 'A niche product with a small, specific audience, which makes the page doing its job far more important than the size of the budget.',
  },
  {
    image: '/images/v3/work-3.jpg',
    client: 'SolarGen',
    sector: 'Renewables',
    built: 'Website and campaign landing pages',
    note: 'Built for a market where people compare four quotes before they call anyone, so the page has to answer the comparison questions first.',
  },
]

export default function Work() {
  return (
    <section className="px-3 sm:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-6">Selected work</p>
            <h2
              className="display max-w-[15ch]"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              Pages I built, not just accounts I logged into.
            </h2>
          </div>
          <p className="text-text-soft text-sm md:text-base leading-relaxed max-w-sm">
            Every one of these is a page and a campaign from the same hand. If
            something underperforms there is no argument about whose half it was.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <article key={p.client} className="group">
              <div className="relative panel aspect-[4/3] bg-paper-2 mb-5 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.client} project`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="label mb-2">{p.sector}</p>
              <h3
                className="display mb-2"
                style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
              >
                {p.client}
              </h3>
              <p className="text-text font-medium text-[15px] mb-2.5">{p.built}</p>
              <p className="text-text-soft text-sm leading-relaxed">{p.note}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
