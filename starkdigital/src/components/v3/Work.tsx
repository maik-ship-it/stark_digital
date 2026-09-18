import Image from 'next/image'
import Reveal from './Reveal'

/**
 * Each image is a screenshot of the live site, taken at 1440px and set on the
 * brand background. Regenerate them if a client redesigns.
 */
const PROJECTS = [
  {
    image: '/images/v3/work-1.jpg',
    client: 'Anthony Joyce & Co.',
    url: 'anthonyjoyce.ie',
    sector: 'Solicitors, Dublin',
    built: 'Practice-area landing pages and Google Ads',
    note: 'A separate page per practice area, each written for the search that brings the visitor, with call tracking wired back to the campaign that produced the call.',
  },
  {
    image: '/images/v3/work-2.jpg',
    client: 'Byrock Technologies',
    url: 'byrocktechnologies.com',
    sector: 'Equine health, Ireland',
    built: 'Site build and a Google Ads funnel',
    note: 'A treatment for laminitis sold to a small, specific audience. When the addressable market is that narrow, the page doing its job matters far more than the size of the budget.',
  },
  {
    image: '/images/v3/work-3.jpg',
    client: 'Saloot',
    url: 'saloot.de',
    sector: 'E-commerce, Germany',
    built: 'Shopify storefront and savings calculator',
    note: 'Balcony solar kits, sold to people who work out the payback period before they buy. So the shop leads with a calculator that answers that question instead of burying it in a spec table.',
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
Screenshots of the live sites, not mockups. Where I run the campaign
            as well as build the page, there is no argument about which half
            underperformed.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <article key={p.client} className="group">
              <div className="relative panel aspect-[4/3] bg-paper-2 mb-5 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.client} website`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="label mb-2">
                {p.sector} · {p.url}
              </p>
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
