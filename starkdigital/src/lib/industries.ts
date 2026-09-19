import type { Faq } from './faqs'

export type Industry = {
  slug: string
  /** Short label for grids and breadcrumbs. */
  nav: string
  title: string
  metaDescription: string
  eyebrow: string
  headline: string[]
  accent: string
  subheadline: string
  /**
   * The part that is actually specific to this market. Deliberately a different
   * shape and length per industry: these are observations, not a template with
   * the nouns swapped.
   */
  observation: { heading: string; body: string[] }
  /** Varying count on purpose. Some markets need six points, some need three. */
  specifics: {
    title: string
    body: string
    /**
     * Figures printed under the body. Same rule as src/lib/proof.ts: a number
     * only goes on the page with its basis beside it, so the two fields travel
     * together or neither is set.
     */
    figures?: { value: string; label: string }[]
    basis?: string
  }[]
  faqs: Faq[]
  caseStudy: string | null
  blogLinks: { slug: string; title: string }[]
}

export const industries: Industry[] = [
  {
    slug: 'solicitors',
    nav: 'Solicitors',
    title: 'Google Ads for Solicitors Dublin',
    metaDescription:
      'Google Ads for solicitors and law firms in Dublin. Built around the split between urgent legal searches and research searches, and around what Irish advertising rules allow you to say.',
    eyebrow: 'Google Ads · Solicitors',
    headline: ['Two kinds of legal', 'search. Only one of', 'them hires you today.'],
    accent: 'them hires you today.',
    subheadline:
      'Paid search for law firms in Dublin and across Ireland, built around the searches that end in a phone call rather than the ones that end in a blog post.',
    observation: {
      heading: 'The split that decides whether a legal account works',
      body: [
        'Legal search divides cleanly into two groups that look similar in a keyword tool and behave nothing alike. There is the person whose tenancy is being terminated on Friday, who has just been arrested, or whose sale is falling through, and there is the person reading about what probate involves because a relative is ill. Both type things containing the word solicitor. One of them will ring three firms this afternoon.',
        'Most accounts I look at spend the majority of their budget on the second group, because that is where the search volume is. The research terms are cheaper per click and they feel productive in a report. They convert at a fraction of the rate, and in a practice area where a file is worth four figures, that difference is the whole account.',
        'The other thing shaping this work is what you are allowed to say. Legal services advertising in Ireland sits under the Legal Services Regulation Act 2015, and the constraints are real enough that copy needs checking before it runs rather than after somebody complains. It does not stop you advertising. It does mean the version of the ad that a marketer would write first is often not the version that can go live.',
      ],
    },
    specifics: [
      {
        title: 'Urgent terms get the budget',
        body: 'Ad groups are built around intent rather than around practice area alone. The searches that carry urgency get the spend and the best position. Research terms either sit in a separate campaign with its own small budget or get excluded entirely.',
      },
      {
        title: 'A page per practice area',
        body: 'Conveyancing, employment, family and probate are different buyers with different worries. One page covering all of them converts worse than four pages covering one each, and it is usually the single biggest gain available.',
      },
      {
        title: 'Copy checked against the rules before launch',
        body: 'Every headline and description reviewed against Irish legal advertising requirements, with anything that cannot be substantiated taken out. Slower to launch and considerably less stressful afterwards.',
      },
      {
        title: 'Calls tracked back to the search',
        body: 'Most legal enquiries arrive by phone, which means an account without call tracking is an account nobody can evaluate. Every call is attributed to the keyword and page that produced it.',
      },
      {
        title: 'Negatives for a noisy market',
        body: 'Legal terms attract people looking for law jobs, law courses, free advice and the Citizens Information website. That list is maintained weekly, not written once.',
      },
    ],
    faqs: [
      {
        q: 'What should a Dublin law firm budget for Google Ads?',
        a: 'For most practices, EUR 800 to EUR 2,000 a month in ad spend is a workable starting point. Legal clicks are expensive by Irish standards, often EUR 4 to EUR 15 depending on the practice area, but a single conveyancing or probate file is worth enough that the arithmetic still works comfortably. What matters more than the number is whether you can answer the phone when it rings.',
      },
      {
        q: 'Which practice areas work best?',
        a: 'Conveyancing, employment law, family law and probate all perform well, because they are services people search for with a decision already made. Areas where people expect to be referred rather than to search tend to work less well, and commercial work with long relationship-driven sales cycles is usually better served by other channels.',
      },
      {
        q: 'What about advertising personal injury work?',
        a: 'This is the area where the Irish rules bite hardest, and it is worth getting specific advice on your own situation rather than relying on a general answer from an agency website. I will tell you what I understand the constraints to be, and where it is genuinely unclear I will say that rather than guess on your behalf.',
      },
      {
        q: 'How quickly would we see enquiries?',
        a: 'Usually within the first one to two weeks of launch. Getting to a stable, predictable cost per enquiry takes about 60 to 90 days, because that is how long it takes to accumulate enough conversions to make decisions on rather than react to.',
      },
    ],
    caseStudy: 'anthony-joyce-solicitors',
    blogLinks: [
      { slug: 'google-ads-for-solicitors-ireland', title: 'Google Ads for Solicitors in Ireland' },
      { slug: 'how-to-choose-google-ads-agency-dublin', title: 'How to Choose a Google Ads Agency in Dublin' },
    ],
  },

  {
    slug: 'accountants',
    nav: 'Accountants',
    title: 'Google Ads for Accountants Dublin',
    metaDescription:
      'Google Ads for accounting firms in Dublin. Built around the Irish filing calendar and around the searches that signal a business is changing accountant, not shopping on price.',
    eyebrow: 'Google Ads · Accountants',
    headline: ['Your best client is', 'not searching for', 'a cheap accountant.'],
    accent: 'a cheap accountant.',
    subheadline:
      'Paid search for accounting practices in Dublin and across Ireland, aimed at business owners who are switching rather than price-shopping.',
    observation: {
      heading: 'Two things about this market that change how the account is built',
      body: [
        'The first is the calendar. Accounting demand is not flat and pretending otherwise wastes money. Searches climb through September and October ahead of the income tax deadline, spike again around company filing dates, and go quiet in the stretches between. An account running the same daily budget all year underspends when it matters and overspends when nothing is happening. Budget should move with the calendar, and it can be scheduled months ahead because the dates do not change.',
        'The second is which searches are worth having. "Cheap accountant Dublin" and "accountant near me" attract people optimising for price, which is a race you can only win by charging less. The searches worth owning are the ones that signal a business is already moving: changing accountant, setting up a limited company, needing someone who handles a specific thing their current accountant does not. Lower volume, considerably better clients, and most accounts ignore them because a keyword tool ranks them near the bottom.',
        'The third is the clock. Someone searching for an accountant is usually still comparing rather than buying. The search happens in February, the phone call in April, and in between sit the website, the credentials and a conversation with somebody they trust. That is not an argument against paid search. It is an argument for building the account so the practice is still in front of them at the end of the gap, instead of paying for a first visit and hoping it finds its own way back.',
      ],
    },
    specifics: [
      {
        title: 'Budget scheduled against the filing calendar',
        body: 'Spend increases ahead of the deadlines that drive demand and drops back in the quiet weeks. Planned in advance rather than reacted to in the last fortnight when competition is at its most expensive.',
      },
      {
        title: 'Switching intent over price intent',
        body: 'Campaigns aimed at business owners already looking to move, plus company formation and specialist service searches. Price-comparison terms get excluded rather than optimised.',
      },
      {
        title: 'Separate treatment for business and personal',
        body: 'A sole trader wanting a tax return and a company needing full compliance work are different budgets and different pages. Running them together makes both perform worse and makes the reporting useless.',
      },
      {
        title: 'Enquiry value, not enquiry count',
        body: 'A retained limited company client and a one-off tax return are both one conversion in a standard setup. Where the practice can put a value on them, the account optimises toward the ones worth having.',
      },
      {
        title: 'The searches worth paying for',
        body: 'Four groups earn their place: service terms such as company accounts or VAT returns, seasonal triggers around the filing dates, problem searches from people who have missed a deadline or are facing an audit, and business milestones like a first company formation. Phrase and exact match only, with jobs, courses, software and free excluded from the start, because broad match in this market finds students and job seekers long before it finds a business owner.',
      },
      {
        title: 'The months between the search and the call',
        body: 'A business owner who searches in February often makes contact in April, after reading the site, checking the credentials and asking someone they trust. An account built on search campaigns alone pays for that first visit and never sees what became of it. Remarketing carries the practice across the gap, and the search budget rises ahead of the October and January deadlines rather than during them.',
      },
      {
        title: 'What a click costs, and what a budget has to clear',
        body: 'Accountancy clicks sit below legal ones, and they climb from general searches to tax and VAT terms to company formation, which is the dearest of the three. The floor for a budget is not a figure I can quote for every practice: it is whatever produces enough conversions in a month to tell a good keyword from a bad one. Below that the account never leaves the learning phase and the reporting describes noise.',
        // Keyword Planner figures go here once Maik has pulled them. Both
        // fields are set together, never one without the other:
        // figures: [
        //   { value: '', label: 'CPC: general terms' },
        //   { value: '', label: 'CPC: tax and VAT terms' },
        //   { value: '', label: 'CPC: company formation' },
        // ],
        // basis: 'Google Ads Keyword Planner, Ireland, September 2025 to August 2026.',
      },
    ],
    faqs: [
      {
        q: 'When should we start, given the seasonality?',
        a: 'Ideally six to eight weeks before the period you care about, because the account needs time to gather data before the expensive weeks arrive. Starting in mid-October for the income tax deadline means paying peak prices while the campaign is still learning. If you are reading this in October, it is not too late to be useful, it is just a more expensive way to begin.',
      },
      {
        q: 'What does an enquiry cost?',
        a: 'For most Dublin practices, somewhere between EUR 40 and EUR 120 per enquiry depending on the service and the time of year. The figure on its own means nothing until you put it next to what a client is worth over the years they stay with you, which for a retained company client is usually a comfortable multiple of it.',
      },
      {
        q: 'Is Google Ads better than referrals for us?',
        a: 'It is not competing with referrals, it is filling the months when referrals do not arrive. Most practices I speak to have a good year and a bad year and no real idea why. Paid search is the part of the pipeline you can actually turn up or down, which makes the rest of it easier to plan around.',
      },
      {
        q: 'How long before we see anything?',
        a: 'First enquiries usually arrive within a week or two of launch, because paid search does not have to build anything before it starts. Judging the account properly takes sixty to ninety days, which is how long it takes to gather enough conversions to tell a keyword worth keeping from one that is quietly spending. Anyone promising you a settled cost per enquiry in month one is describing luck.',
      },
      {
        q: 'Could we run this ourselves?',
        a: 'You can, and some practices do it adequately. It goes wrong in two ways: spending on searches that were never going to become clients, or setting the budget so low that nothing ever gathers enough data to improve. Both are fixable and both tend to cost more in wasted spend than the management would have, which is the only honest argument for handing it over.',
      },
      {
        q: 'Should we be doing SEO instead?',
        a: 'They run on different clocks rather than against each other. Paid search produces enquiries within weeks and stops when the budget stops. SEO takes six to twelve months and then keeps working. For a practice that needs pipeline this quarter, paid search first with SEO built alongside it is usually the right order. The comparison under further reading goes through the case for each.',
      },
    ],
    caseStudy: null,
    blogLinks: [
      { slug: 'google-ads-vs-seo-ireland', title: 'Google Ads vs SEO for Irish Businesses' },
      { slug: 'how-much-do-google-ads-cost-ireland', title: 'What Google Ads Actually Costs in Ireland' },
    ],
  },

  {
    slug: 'financial-advisors',
    nav: 'Financial Advisors',
    title: 'Google Ads for Financial Advisors Ireland',
    metaDescription:
      'Google Ads for financial advisors, IFAs and mortgage brokers in Ireland. Low volume, high value, and every word of copy sitting under Central Bank advertising requirements.',
    eyebrow: 'Google Ads · Financial Advice',
    headline: ['Fifteen clicks a', 'month can be a', 'very good month.'],
    accent: 'very good month.',
    subheadline:
      'Paid search for IFAs, mortgage brokers and financial planners in Ireland, where the economics and the compliance both work differently from everything else on this site.',
    observation: {
      heading: 'Why this market breaks the usual rules of paid search',
      body: [
        'Almost everything written about Google Ads assumes volume. Gather enough conversions, let the algorithm learn, optimise toward a cost per lead. Financial advice does not play along. The searches are genuinely scarce, the sales cycle runs in months rather than days, and a single pension transfer or protection case can be worth more than an entire quarter of spend. An account producing fifteen clicks and two conversations a month can be performing excellently, and it will look like a failure in any standard report.',
        'That changes what you optimise for. Automated bidding needs conversion volume that this market will not supply, so a lot of the usual advice actively hurts. Manual control, a tight keyword list and patience produce better results than letting a system learn from thirty data points a quarter.',
        'Then there is the regulation. Advertising by regulated firms in Ireland sits under Central Bank requirements, and the parts that matter most for search advertising are the ones about claims, about balance, and about not implying an outcome. An ad headline that would be unremarkable for a plumber can be a problem here. The practical effect is that copy goes through a compliance step before it goes live, and the agency that treats that as an annoyance is the wrong agency.',
      ],
    },
    specifics: [
      {
        title: 'Manual bidding, deliberately',
        body: 'Smart bidding needs conversion volume this market does not produce. Manual control over a small, well-chosen keyword list beats an automated strategy learning from almost nothing.',
      },
      {
        title: 'Copy written to be compliant first',
        body: 'Every headline and description drafted with the Central Bank requirements in mind and sent to you for sign-off before it runs. No performance claims, no implied outcomes, nothing that would need defending.',
      },
      {
        title: 'Timed to the moments people actually look',
        body: 'People search for advice after a job change, around a mortgage approval, and in the weeks after a Budget. Campaigns lean into those windows instead of spending evenly across a year.',
      },
      {
        title: 'Measured on conversations, not clicks',
        body: 'With volume this low, click-through rate and cost per click are nearly meaningless. The report is a short list of who enquired and what they were searching for when they did.',
      },
    ],
    faqs: [
      {
        q: 'Is there even enough search volume to bother?',
        a: 'Often not much, and that is genuinely a reason some advisors should not do this. Where it works is when a single client is worth enough that a handful of enquiries a year pays for everything several times over, which is common in pensions, protection and mortgage broking. Where it does not work is general wealth management in a small area, and I will tell you if that is what I think you are.',
      },
      {
        q: 'Who is responsible for compliance?',
        a: 'You are, as the regulated firm, and nothing I do changes that. What I can do is write copy that is drafted with the requirements in mind, send everything for your sign-off before it runs, and not argue when your compliance view is that something has to change. I am not a compliance adviser and I will not pretend to be one.',
      },
      {
        q: 'What budget makes sense?',
        a: 'EUR 600 to EUR 1,500 a month in ad spend suits most advisory firms. Clicks in this sector are among the most expensive in Ireland, frequently EUR 8 to EUR 20, so the budget buys fewer visitors than you would expect. That is the correct shape for this market rather than a sign something is wrong.',
      },
    ],
    caseStudy: null,
    blogLinks: [
      { slug: 'google-ads-for-financial-advisors-ireland', title: 'Google Ads for Financial Advisors in Ireland' },
      { slug: 'google-ads-vs-facebook-ads-professional-services-dublin', title: 'Google Ads or Facebook Ads for Professional Services' },
    ],
  },

  {
    slug: 'dental-clinics',
    nav: 'Dental Clinics',
    title: 'Google Ads for Dental Clinics Dublin',
    metaDescription:
      'Google Ads for dental practices in Dublin. Emergency and routine work and high-value cosmetic work are two different businesses, and running them in one campaign makes both perform worse.',
    eyebrow: 'Google Ads · Dental',
    headline: ['One practice.', 'Two completely', 'different businesses.'],
    accent: 'different businesses.',
    subheadline:
      'Paid search for dental clinics in Dublin, separating the work that comes from a toothache at 8am from the work someone spends three months deciding on.',
    observation: {
      heading: 'The mistake that costs dental accounts the most',
      body: [
        'A dental practice runs two businesses out of one building. There is emergency and routine work, which is local, urgent and decided in minutes: a broken tooth, pain, a check-up somebody finally got around to booking. Then there is cosmetic and restorative work, which is implants, veneers and aligners, where somebody spends weeks reading, compares four clinics, asks about finance and travels past two other practices to reach the one they picked.',
        'These need opposite campaigns. The urgent side wants tight local radius targeting, phone numbers everywhere and ads running when a person in pain is awake. The cosmetic side wants a considered landing page, finance information, before-and-after evidence and the patience to accept that the enquiry arrives three weeks after the click. Put them in one campaign and the urgent searches eat the budget while the cosmetic searches, which are worth many times more per patient, never get enough impression share to prove anything.',
        'Worth knowing about the cosmetic side specifically: you are not only competing with other Dublin clinics. Treatment abroad advertises hard against exactly those searches, and pretending that is not happening leads to landing pages that never address the comparison the patient is actually making.',
      ],
    },
    specifics: [
      {
        title: 'Two campaign structures, not one',
        body: 'Urgent and routine work in one structure with its own budget and its own hours. Cosmetic and high-value treatment in another, with its own pages and a completely different measure of success.',
      },
      {
        title: 'Radius targeting that matches the treatment',
        body: 'Somebody in pain will not travel. Somebody researching implants will. The geography is set per campaign rather than once for the account.',
      },
      {
        title: 'Ads running when people actually book',
        body: 'Emergency searches peak early morning and evening. If nobody can take the call, the click is wasted, so scheduling follows when the practice can genuinely answer.',
      },
      {
        title: 'Cosmetic pages built for a long decision',
        body: 'Cost ranges, finance options, what the process involves and what the alternatives are. A page that hides the price loses to a page that answers the question, because the question gets answered somewhere regardless.',
      },
      {
        title: 'Bookings tracked, not form fills',
        body: 'Where the practice management system allows it, enquiries are traced through to booked appointments. An enquiry that never turns up is not a result and should not be counted as one.',
      },
    ],
    faqs: [
      {
        q: 'Which treatments justify the spend?',
        a: 'Implants, aligners and full-mouth restorative work carry enough value per patient to absorb a competitive cost per click comfortably. Routine check-ups usually do not on their own, but they are worth running because a check-up patient stays for years, so the honest way to judge them is on the relationship rather than on the first appointment.',
      },
      {
        q: 'What do dental clicks cost in Dublin?',
        a: 'Emergency and general terms typically EUR 2 to EUR 6. Implant and cosmetic terms are considerably higher, often EUR 8 to EUR 20, because everyone bidding on them knows what the patient is worth. That is normal and it is why the two sides need separate budgets rather than one pot.',
      },
      {
        q: 'Can you work with our booking system?',
        a: 'Usually yes, at least to the point of tracking which enquiries became appointments. How deep that goes depends on which system you use and what it will let us connect to. I will tell you what is possible with yours before we start rather than promising integration and discovering later.',
      },
    ],
    caseStudy: null,
    blogLinks: [
      { slug: 'google-ads-for-dental-clinics-dublin', title: 'Google Ads for Dental Clinics in Dublin' },
      { slug: 'how-much-do-google-ads-cost-ireland', title: 'What Google Ads Actually Costs in Ireland' },
    ],
  },

  {
    slug: 'tradespeople',
    nav: 'Tradespeople',
    title: 'Google Ads for Tradespeople Dublin',
    metaDescription:
      'Google Ads for electricians, plumbers, builders and trade businesses in Dublin. Built around the fact that the job is won on the phone, not on the website.',
    eyebrow: 'Google Ads · Trades',
    headline: ['If you cannot answer', 'the phone, do not', 'buy the click.'],
    accent: 'buy the click.',
    subheadline:
      'Paid search for trade businesses in Dublin and the surrounding counties, built around how the work is actually won.',
    observation: {
      heading: 'The thing nobody tells trade businesses before they spend money',
      body: [
        'For most trades the job is decided in the first thirty seconds of a phone call, and often before that, by whether the phone was answered at all. Someone with water coming through a ceiling rings three numbers from the top of the results and books whoever picks up. A missed call is not a delayed enquiry, it is a lost job that went to the next listing.',
        'This is why paid search fails for a lot of trade businesses that are doing everything else right. You are on a roof, or under a sink, or driving between jobs. The ads run, the clicks get paid for, the phone rings out. Before anything is spent, the question worth answering is who answers the phone between nine and five, and if the honest answer is nobody, that gets fixed first or the budget gets scheduled around the hours it is not true.',
        'The second split worth knowing: emergency work and planned work behave nothing alike. A burst pipe converts almost immediately at almost any price. An extension or a rewire involves three quotes over a fortnight. Both are worth having, they just need different pages, different budgets and different expectations about how long the enquiry takes to appear.',
      ],
    },
    specifics: [
      {
        title: 'Call-only where it fits',
        body: 'For emergency work, a call-only campaign skips the website entirely and puts the phone number in front of somebody who wants to dial it now. Fewer moving parts and a shorter path to the job.',
      },
      {
        title: 'Scheduling built around who answers',
        body: 'If calls are only answered between certain hours, ads run in those hours. If an answering service covers the rest, they run wider. Either is fine. Spending into an unanswered phone is not.',
      },
      {
        title: 'Emergency and planned work separated',
        body: 'Two campaigns, two sets of pages, two ways of judging whether it is working. Mixed together, the emergency terms consume the budget and the profitable planned jobs never get a fair test.',
      },
      {
        title: 'A radius that reflects the van',
        body: 'Time spent driving is money. Targeting is set around where the work is worth taking rather than around a county boundary or the whole of Dublin.',
      },
    ],
    faqs: [
      {
        q: 'Is Google Ads worth it against the trade directories?',
        a: 'Different jobs. The directories put you in a list where the customer is comparing you against everyone else on price, and they charge you for the lead either way. Paid search puts you above that list with your own phone number. Most trade businesses I speak to do best with both for a while and then quietly let the directory budget fall away.',
      },
      {
        q: 'What is the smallest budget that makes sense?',
        a: 'Around EUR 400 to EUR 600 a month works for a single-van business covering part of Dublin, mainly because trade clicks are cheaper than professional services and the radius is small. Below that there is not enough volume to learn anything, and you would be better off with a decent website and your Google Business Profile sorted first.',
      },
      {
        q: 'I already get plenty of work by word of mouth. Why bother?',
        a: 'Then possibly do not. Word of mouth is the cheapest lead source there is and no advertising beats it. The reason trade businesses come to me is usually one of two things: the referrals dried up over a quiet winter, or they want a specific kind of work that referrals are not producing. If neither is true for you, keep your money.',
      },
    ],
    caseStudy: null,
    blogLinks: [
      { slug: 'google-ads-for-tradespeople-dublin', title: 'Google Ads for Tradespeople in Dublin' },
      { slug: 'google-ads-vs-seo-ireland', title: 'Google Ads or SEO for an Irish Business' },
    ],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
