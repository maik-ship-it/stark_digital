import { homeFaqs } from '@/lib/faqs'
import Reveal from './Reveal'
import FAQList from './FAQList'

export default function FAQ() {
  return (
    <section className="px-3 sm:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-6">Straight answers</p>
            <h2
              className="display max-w-[12ch]"
              style={{ fontSize: 'var(--text-display-lg)' }}
            >
              Including the ones that lose me work.
            </h2>
          </Reveal>

          <FAQList faqs={homeFaqs} />
        </div>
      </div>
    </section>
  )
}
