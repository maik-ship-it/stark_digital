import type { Faq } from './faqs'

export type Service = {
  slug: string
  /** Short name for nav, footer and cross-links. */
  nav: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  /** Rendered as separate mask lines, so keep each line short. */
  headline: string[]
  /** Word inside `headline` to set in orange. Must match exactly. */
  accent: string
  intro: string
  /** The opinionated part. This is what stops the page reading like every other agency page. */
  take: { heading: string; body: string[] }
  work: { title: string; body: string }[]
  limits: { title: string; body: string }[]
  faqs: Faq[]
  image: string
}

export const services: Service[] = [
  {
    slug: 'seo-dublin',
    nav: 'SEO',
    metaTitle: 'SEO Agency Dublin',
    metaDescription:
      'SEO for businesses in Dublin and across Ireland. Technical fixes, the pages you are missing, and content built around the searches people make when they are ready to hire someone.',
    eyebrow: 'SEO · Dublin & Ireland',
    headline: ['The rankings worth', 'having are the', 'boring ones.'],
    accent: 'boring ones.',
    intro:
      'Search engine optimisation for businesses in Dublin and across Ireland. Slower than advertising and cheaper per enquiry once it lands, which is the whole argument for starting it before you think you need it.',
    take: {
      heading: 'What most SEO reports are hiding',
      body: [
        'Almost every SEO report opens with the number of keywords in the top ten, and that number is easy to move. It goes up when you start ranking for searches nobody buys from, for questions people ask once out of curiosity, and for your own company name. None of that produces a phone call.',
        'The question worth asking is much narrower. For the ten or fifteen searches somebody makes in the week before they hire a firm like yours, where do you appear, and what happens to them when they land on your page? That list is short enough to write on one sheet of paper, and most businesses have never written it down.',
        'So that is where I start. Not with an audit of four hundred issues sorted by a tool, but with the handful of searches that are actually worth owning, and an honest read on whether you can own them.',
      ],
    },
    work: [
      {
        title: 'The search list, written down',
        body: 'Before anything technical, we agree which searches matter and roughly what each one is worth to you. Everything after this is measured against that list. If a fix does not move something on it, it waits.',
      },
      {
        title: 'Technical work, only the parts that bite',
        body: 'Crawling, indexation, page speed, the internal linking that decides which of your pages Google treats as important. Audit tools flag hundreds of issues and most of them change nothing. I fix the ones that are actually holding a page back and tell you why the rest can wait.',
      },
      {
        title: 'The pages you do not have yet',
        body: 'Most Irish businesses are missing pages, not keywords. One page covering five services will lose to five pages covering one service each, every time. Finding those gaps is usually the single biggest gain available.',
      },
      {
        title: 'Content written for the person, not the crawler',
        body: 'Pages that answer the question properly, in your voice, at the length the question deserves. Google has been good at spotting content written to hit a word count for years now, and readers were always better at it.',
      },
      {
        title: 'Local search',
        body: 'Your Google Business Profile, the map pack, reviews, and the citations that decide whether you show up for somebody searching two streets away. For a Dublin business with an office, this is often worth more than anything else on this list.',
      },
      {
        title: 'Measurement you can read',
        body: 'Rankings for the agreed list, organic enquiries, and which pages produce them. Not a forty-page PDF nobody opens.',
      },
    ],
    limits: [
      {
        title: 'It does not work in four weeks',
        body: 'Three to six months before it is fair to judge, longer in a competitive area like legal or finance. If you need enquiries next month, that is a paid search conversation, not this one.',
      },
      {
        title: 'It cannot create demand that is not there',
        body: 'If nobody searches for what you sell, ranking first for it changes nothing. That sounds obvious and it is still the most common reason an SEO project fails.',
      },
      {
        title: 'It does not survive a site rebuild nobody planned',
        body: 'The fastest way to lose a year of SEO is a new website launched without redirects. If you are planning a rebuild, tell me before it happens rather than after.',
      },
    ],
    faqs: [
      {
        q: 'How long until SEO pays for itself?',
        a: 'For most Dublin businesses, somewhere between six and twelve months, depending on how competitive your area is and how much of the groundwork already exists. It is worth saying plainly that this makes SEO a bad fit if cash is tight right now. Paid search costs more per enquiry but it produces them immediately, and the honest sequence for a lot of businesses is ads first, SEO started quietly in the background, then the balance shifting as the SEO lands.',
      },
      {
        q: 'Do you build links?',
        a: 'I do not buy them. Paid link networks are the fastest route to a penalty and the risk sits with you, not with whoever sold them. What does work is slower: being genuinely worth citing, industry directories that people actually use, local press, and relationships you already have. If someone quotes you a price for fifty links a month, that is the thing I am describing.',
      },
      {
        q: 'Can you guarantee a first position?',
        a: 'No, and neither can anyone else. Google does not sell positions and does not publish the algorithm. What I can do is show you the list of searches we agreed on and where you sit on it month by month, which is the closest thing to an honest promise available here.',
      },
      {
        q: 'Should I do SEO or Google Ads?',
        a: 'Most businesses that can afford both should run both, because they answer different problems. Ads buy you the top of the page today and stop the moment you stop paying. SEO takes months and then keeps working. If you can only afford one and you need enquiries soon, start with ads. If you have patience and a long sales cycle, start with SEO.',
      },
    ],
    image: '/images/v3/services.jpg',
  },
  {
    slug: 'geo-ai-search',
    nav: 'AI Search',
    metaTitle: 'AI Search Optimisation Ireland',
    metaDescription:
      'Getting your business named when people ask ChatGPT, Gemini or Google AI Overviews instead of searching. What is actually known about AI search optimisation, and what is still guesswork.',
    eyebrow: 'AI Search · GEO',
    headline: ['When the answer', 'comes from an AI,', 'you are in it or not.'],
    accent: 'you are in it or not.',
    intro:
      'A growing share of research now happens inside an assistant that never sends a click. This page is about what can actually be done about that, and it is also honest about how much of the field is still guesswork.',
    take: {
      heading: 'Read this part before you spend anything',
      body: [
        'AI search optimisation, or GEO, is roughly two years old as a discipline. Nobody has five years of data because there are not five years to have. Anyone selling you a guaranteed method here is selling you a guess with a price attached, and quite a few people are doing exactly that right now.',
        'What is genuinely known is narrower but not nothing. Assistants build answers from sources they can read and from sites they already trust. Being named depends heavily on being mentioned somewhere the model was trained on or can retrieve from, on having pages that state plainly what you do and where you do it, and on the same reputation signals that have always mattered.',
        'Which means most of the useful work here overlaps with good SEO and good content, done with a slightly different reader in mind. I would rather tell you that than invent a new service category with a new fee attached to it.',
      ],
    },
    work: [
      {
        title: 'Pages a model can actually parse',
        body: 'Clear headings, direct answers near the top, claims stated plainly instead of buried in marketing language. A page that opens with three paragraphs about your passion for excellence gives a model nothing to quote.',
      },
      {
        title: 'Structured data that states the facts',
        body: 'Schema markup saying what you do, where you are, what you charge, what you are qualified in. This is the least ambiguous way to tell a machine something, and most Irish business sites have none of it.',
      },
      {
        title: 'Being cited where assistants look',
        body: 'Industry bodies, credible directories, local press, review platforms, and any publication in your sector that carries weight. This is the slowest part and the one that matters most, because a model naming you is usually a model repeating somebody else.',
      },
      {
        title: 'Checking whether it worked',
        body: 'Running the actual questions your customers would ask, across the main assistants, on a schedule, and recording whether you appear. It is manual and slightly tedious. It is also the only direct measurement available at the moment.',
      },
      {
        title: 'Watching the referral side',
        body: 'Assistants do send some traffic, and it shows up in analytics if you set it up to be visible. Small numbers today, worth tracking from the start so you can see the direction.',
      },
    ],
    limits: [
      {
        title: 'There is no placement to buy',
        body: 'No ad slot, no ranking factor list, no submission form. If that changes, and it probably will, I will tell you the day it does.',
      },
      {
        title: 'Attribution is genuinely poor',
        body: 'Someone can read about you inside ChatGPT and then search your name an hour later. That enquiry will look like direct traffic. Anyone showing you a clean revenue figure attributed to AI search is showing you a model, not a measurement.',
      },
      {
        title: 'It is not a substitute for SEO',
        body: 'The overlap is large but not total, and search still sends far more traffic than assistants do. Doing this instead of SEO would be a bad trade today.',
      },
    ],
    faqs: [
      {
        q: 'Is this worth paying for yet?',
        a: 'For most small Irish businesses, not as a separate project. It is worth doing as part of SEO, because the work overlaps so heavily that splitting it into two invoices mostly benefits the agency. Where it does justify its own attention is if you are in a research-heavy field where people ask long comparison questions before they buy, or if you already rank well and are watching that traffic fall while your rankings hold.',
      },
      {
        q: 'What is GEO, and is it the same as AEO?',
        a: 'GEO stands for generative engine optimisation, AEO for answer engine optimisation, and in practice people use them for roughly the same work. The terminology is unsettled because the field is new. Do not read much into which label an agency uses.',
      },
      {
        q: 'Will AI search kill SEO?',
        a: 'It is already changing it. Searches that ended in a click now often end in an answer, which is why plenty of sites are seeing organic traffic fall while their rankings hold steady. The searches that still produce clicks are the ones where somebody wants to hire, buy or book, and those are the ones worth owning anyway. So the short answer is that it is shrinking the top of the funnel and leaving the bottom mostly intact.',
      },
      {
        q: 'How do you measure it?',
        a: 'By running the questions your customers would actually ask, across ChatGPT, Gemini and Google AI Overviews, on a schedule, and recording whether you are named and what is said. Plus referral traffic from AI sources in analytics. Both are imperfect. I would rather hand you an imperfect measurement and say so than a confident number I made up.',
      },
    ],
    image: '/images/v3/services.jpg',
  },
  {
    slug: 'web-design-dublin',
    nav: 'Web & Landing Pages',
    metaTitle: 'Web Design & Landing Pages Dublin',
    metaDescription:
      'Websites and campaign landing pages for businesses in Dublin, built to convert rather than to win design awards. Fast, tracked, and written for the search that brought the visitor.',
    eyebrow: 'Web & Landing Pages · Dublin',
    headline: ['A page whose only', 'job is turning a click', 'into a phone call.'],
    accent: 'into a phone call.',
    intro:
      'Websites and campaign landing pages for businesses in Dublin and across Ireland. I build these myself, which is why the page and the campaign are never two suppliers explaining that the problem is the other half.',
    take: {
      heading: 'Why the page is usually the problem',
      body: [
        'When a campaign underperforms, the ads get blamed, because the ads are where the reporting lives. But an ad account can only decide who arrives. What happens in the next eight seconds is entirely the page, and the page is usually the part nobody has touched in three years.',
        'The common version of this: an ad for a specific service sends somebody to a homepage. The homepage is about the company. The visitor now has to work out where to go next, on a phone, while three other tabs are open. Most of them do not bother. The account looks like it is wasting money and the page is what wasted it.',
        'The fix is unglamorous. One page per thing you want to sell, saying the thing the person searched for, with the phone number where a thumb can reach it. Then measure it, because the version you are certain about is wrong roughly half the time.',
      ],
    },
    work: [
      {
        title: 'Landing pages built per campaign',
        body: 'One page for each service you advertise, matching what the person typed. If your ad says conveyancing, the page says conveyancing in the first line, not on the fourth scroll.',
      },
      {
        title: 'Full websites',
        body: 'Built in Next.js, the same stack as this site. Static where it can be, which means it loads fast and costs almost nothing to host. Not WordPress, so there is no plugin stack quietly breaking every few months.',
      },
      {
        title: 'Speed, treated as a requirement',
        body: 'A page that takes four seconds on a phone on 4G loses a meaningful share of the people you just paid to bring there. This is measured before launch, not hoped for.',
      },
      {
        title: 'Forms and call tracking wired in',
        body: 'Every enquiry traceable back to the campaign, the keyword and the page. This goes in during the build. Adding it afterwards is always worse and usually means a month of unusable data.',
      },
      {
        title: 'The words as well as the layout',
        body: 'The copy is part of the build. A well-designed page with vague copy converts worse than a plain page that says the right thing, and I would rather not hand you a template to fill in yourself.',
      },
      {
        title: 'It is yours',
        body: 'Code, domain, hosting, analytics, all in your name. If we stop working together, nothing switches off and nothing needs to be bought back.',
      },
    ],
    limits: [
      {
        title: 'It is not a rebrand',
        body: 'I do not design logos or build brand identities. If you need that, get it done first or alongside, and I will work with what the brand designer gives me.',
      },
      {
        title: 'It is not a forty-page corporate site',
        body: 'Projects with six stakeholders and a committee sign-off are a different kind of work than this, and a bigger studio will serve you better on them.',
      },
      {
        title: 'A good page cannot fix a weak offer',
        body: 'If your price, your reviews or your response time are the actual problem, design will not cover it. It will just get more people to the point where they notice.',
      },
    ],
    faqs: [
      {
        q: 'What does a landing page cost?',
        a: 'If you are already working with me on campaigns, landing pages are part of the monthly fee rather than a separate line item, because a campaign without a proper page is not a campaign I want my name on. As a standalone project, it depends on how many pages and how much of the copy you already have. You get a fixed number before anything starts.',
      },
      {
        q: 'Can you work with my existing website?',
        a: 'Usually yes. Campaign landing pages can sit on your current site or on a subdomain, and a lot of the time that is the sensible move rather than rebuilding everything. If the existing site is slow enough to be actively costing you enquiries I will say so, but that is a separate decision.',
      },
      {
        q: 'Why not WordPress?',
        a: 'Because most of the WordPress sites I am asked to rescue are slow for the same reason: a theme plus fifteen plugins, each loading its own scripts, none of them removable without breaking something. If you are already on WordPress and it works, I am not going to push you off it. For something new I will build it in a way that does not accumulate that problem.',
      },
      {
        q: 'How long does it take?',
        a: 'A campaign landing page is usually a week from having the copy agreed. A small business site is three to five weeks. The part that slows projects down is almost never the building, it is waiting on content, photos and someone to approve the wording.',
      },
    ],
    image: '/images/v3/services.jpg',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
