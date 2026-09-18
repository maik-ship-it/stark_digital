import Image from 'next/image'
import Reveal from './Reveal'

/**
 * Each image is a screenshot of the live page, taken headless at 1440px and set
 * on the brand background. These are the landing pages themselves, not the
 * clients' main sites, because the section claims pages I built.
 */
const PROJECTS = [
  {
    image: '/images/v3/work-1.jpg',
    client: 'Anthony Joyce & Co.',
    url: 'immigration.anthonyjoyce.ie',
    sector: 'Solicitors, Dublin 8',
    built: 'Immigration landing page and the campaign behind it',
    note: 'Citizenship, work permits and IRP renewals, aimed at people who are out of permission and want to talk to somebody today. So the page is built around the phone number rather than a form, and says plainly that a qualified solicitor answers the call.',
  },
  {
    image: '/images/v3/work-2.jpg',
    client: 'Byrock Technologies',
    url: 'trial.byrocktechnologies.com',
    sector: 'Veterinary research, Ohio',
    built: 'Trial recruitment page and paid search',
    note: 'Recruiting horse owners for a research evaluation of an investigational laminitis treatment. Nothing about the product can be claimed, which removes every normal persuasion lever and leaves the page to do the work through clarity alone.',
  },
  {
    image: '/images/v3/work-3.jpg',
    client: 'Saloot',
    url: 'saloot.de',
    sector: 'E-commerce, Germany',
    built: 'Shopify storefront and category pages',
    note: 'Battery storage for balcony solar, bought by people who work out the payback before they order. The category page leads with capacity, cell chemistry and entry price, then splits into the four decisions a buyer is actually making.',
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
