export const industries = [
  {
    slug: 'solicitors',
    title: 'Google Ads for Solicitors Dublin',
    metaDescription:
      'Targeted Google Ads campaigns for solicitors and law firms across Dublin. We specialise in legal services PPC — high-intent keywords, proper tracking, real results.',
    headline: 'More client enquiries\nfor your law firm.',
    subheadline:
      'We specialise in Google Ads for solicitors and law firms in Dublin. High-intent keywords, compliant ad copy, and campaigns built around how people actually search for legal services in Ireland.',
    keywords: [
      'google ads solicitors dublin',
      'ppc law firm ireland',
      'google ads legal services dublin',
    ],
    caseStudy: 'anthony-joyce-solicitors',
    stats: [
      { label: 'Avg. increase in enquiries', value: '+112%' },
      { label: 'Reduction in cost per lead', value: '−38%' },
    ],
    faqs: [
      {
        q: 'How much does Google Ads cost for a solicitor in Dublin?',
        a: 'For most Dublin law firms, a budget of €800–€2,000/month in ad spend is a solid starting point. Legal keywords are competitive, but the value per client is high — making the ROI very strong.',
      },
      {
        q: 'What types of legal services work best with Google Ads?',
        a: 'Conveyancing, personal injury, family law, and employment law all perform well. These are services people search for urgently and with high intent — exactly where Google Ads excels.',
      },
      {
        q: 'Do you understand compliance requirements for legal advertising?',
        a: 'Yes. We understand the guidelines around legal services advertising in Ireland and ensure all ad copy is appropriate and compliant.',
      },
    ],
  },
  {
    slug: 'accountants',
    title: 'Google Ads for Accountants Dublin',
    metaDescription:
      'Google Ads management for accounting firms and independent accountants in Dublin. We track every enquiry back to spend — no wasted budget.',
    headline: 'Get in front of businesses\nlooking for an accountant.',
    subheadline:
      'Targeted Google Ads campaigns for accounting firms across Dublin. We focus on the keywords your ideal business clients actually use — and track every enquiry back to spend.',
    keywords: [
      'google ads accountants dublin',
      'ppc accounting firm ireland',
      'google ads for accountants ireland',
    ],
    caseStudy: null,
    stats: [],
    faqs: [
      {
        q: 'When is the best time to run Google Ads for an accounting firm?',
        a: 'Year-round for business clients, but increase budget around January–April (tax season) and September–October (year-end for many Irish SMEs).',
      },
      {
        q: 'Can you target specific types of businesses with Google Ads?',
        a: 'Yes — we can layer audience targeting to focus on business owners and decision-makers, not just anyone searching for accounting help.',
      },
    ],
  },
  {
    slug: 'financial-advisors',
    title: 'Google Ads for Financial Advisors Dublin',
    metaDescription:
      'Google Ads campaigns for IFAs, mortgage brokers and financial planning firms in Dublin. Compliant ad copy, high-intent targeting, full conversion tracking.',
    headline: 'Attract high-value clients\nactively seeking financial advice.',
    subheadline:
      'Google Ads campaigns built for IFAs, mortgage brokers, and financial planning firms in Dublin. Compliant ad copy, high-intent targeting, and full conversion tracking.',
    keywords: [
      'google ads financial advisors dublin',
      'ppc ifa ireland',
      'financial advisor google ads ireland',
    ],
    caseStudy: null,
    stats: [],
    faqs: [
      {
        q: 'Are there restrictions on advertising financial services on Google?',
        a: 'Yes — financial services advertisers must be authorised by the Central Bank of Ireland. We understand these requirements and ensure campaigns are fully compliant.',
      },
    ],
  },
  {
    slug: 'dental-clinics',
    title: 'Google Ads for Dental Clinics Dublin',
    metaDescription:
      'Google Ads management for dental practices across Dublin. We build campaigns that convert searches into booked appointments.',
    headline: 'Fill your appointment book\nwith new patients.',
    subheadline:
      'Performance Google Ads for dental practices across Dublin. We know how patients search for dentists — and build campaigns that turn those searches into booked appointments.',
    keywords: [
      'google ads dentist dublin',
      'ppc dental clinic ireland',
      'dental google ads dublin',
    ],
    caseStudy: null,
    stats: [],
    faqs: [],
  },
  {
    slug: 'tradespeople',
    title: 'Google Ads for Tradespeople Dublin',
    metaDescription:
      'Google Ads for electricians, plumbers, roofers and builders in Dublin. Local targeting, call-only campaigns, budgets that make sense for trade businesses.',
    headline: 'More jobs.\nLess relying on word-of-mouth.',
    subheadline:
      'Google Ads for electricians, plumbers, roofers, and builders across Dublin. Local targeting, call-only campaigns, and budgets that make sense for trade businesses.',
    keywords: [
      'google ads tradespeople dublin',
      'ppc plumber ireland',
      'google ads electrician dublin',
    ],
    caseStudy: null,
    stats: [],
    faqs: [],
  },
]

export type Industry = (typeof industries)[number]
