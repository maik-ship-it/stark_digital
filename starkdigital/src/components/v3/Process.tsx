import Reveal from './Reveal'

const STEPS = [
  {
    num: '01',
    title: 'A call and a look at what you already have',
    body: 'Thirty minutes, no charge, no deck. If you have an existing account I go through it first so the call is about your actual numbers. If I think paid search is the wrong spend for you, I say that on this call rather than three months in.',
  },
  {
    num: '02',
    title: 'A plan with figures attached',
    body: 'What it would cost, what a lead is likely to cost, how many you would need for it to be worth doing, and which part I would start with. If the maths does not work at your average job value, the plan says so.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'Campaigns, pages, tracking. Tracking goes in before anything goes live, because a campaign you cannot measure is a campaign you cannot defend. Usually two to three weeks from go-ahead to live.',
  },
  {
    num: '04',
    title: 'Month by month, out loud',
    body: 'A short report you can read in five minutes, with what changed, what I did about it, and what I am trying next. You email me directly. There is nobody else to go through.',
  },
]

export default function Process() {
  return (
    <section className="px-3 sm:px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <Reveal className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-6">How it runs</p>
          <h2
            className="display"
            style={{ fontSize: 'var(--text-display-lg)' }}
          >
            Four steps, and you can stop after any of them.
          </h2>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-paper-3 rounded-[18px] overflow-hidden">
          {STEPS.map((s) => (
            <div key={s.num} className="bg-paper p-8 md:p-11 relative group">
              <span
                className="display absolute top-7 right-8 select-none pointer-events-none transition-colors duration-300 group-hover:text-orange"
                style={{ fontSize: 'clamp(46px, 6vw, 76px)', color: 'var(--color-paper-2)' }}
                aria-hidden
              >
                {s.num}
              </span>
              <h3
                className="display mb-4 max-w-[16ch] relative"
                style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
              >
                {s.title}
              </h3>
              <p className="text-text-soft text-[15px] md:text-base leading-relaxed max-w-md relative">
                {s.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
