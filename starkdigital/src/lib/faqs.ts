export type Faq = { q: string; a: string }

/** Homepage FAQ. Also fed to the FAQPage schema, so keep answers self-contained. */
export const homeFaqs: Faq[] = [
  {
    q: 'Should I be running Google Ads at all?',
    a: 'Sometimes you should not. Ads capture demand, they do not create it, so if nobody is searching for what you sell there is nothing there to buy. The other common case is arithmetic: if your average job is worth €200 and a click in your sector costs €12, you need a conversion rate almost nobody hits. I would rather work that out with you on the first call than take a fee for six months of proving it. In both cases there is usually something better to spend the money on, and I will tell you what I think it is.',
  },
  {
    q: 'Why only two new clients a month?',
    a: 'Because the first month of any account is most of the work, and taking on three at once means all three get less than they paid for. It is a limit on how fast I grow rather than a claim about exclusivity. When the two places are gone, the next start date is the following month.',
  },
  {
    q: 'What should I be spending on ads?',
    a: 'It depends on what a customer is worth to you. As a rough starting point, a Dublin professional services firm needs somewhere between €800 and €2,500 a month in spend for the data to be readable and the results to be steady rather than lumpy. Below about €500 a month you are usually better off putting the money into your site and your SEO first, because there is not enough traffic for anyone to optimise anything.',
  },
  {
    q: 'How quickly will I see something?',
    a: 'Paid search produces data within days and usually the first enquiries inside two weeks. Judging whether the account is working takes about 60 to 90 days, which is how long it takes to gather enough conversions to act on. SEO and AI search run on a different clock entirely: three to six months before it is fair to judge them, and worth starting early for exactly that reason.',
  },
  {
    q: 'Is this an agency or one person?',
    a: 'One person, and that is the offer rather than an apology for it. You get the person who builds the campaigns and writes the pages, which is why replies come the same day. It also means I am not the right fit if you need a team of six, round-the-clock cover, or creative production at scale. If that is what you need, I will point you at someone who does it.',
  },
  {
    q: 'Do I own the account and the data?',
    a: 'Yes, all of it, from the first day. The Google Ads account is in your name, the tracking is in your analytics property, and the landing pages belong to you. If you leave, you take everything and I will help hand it over cleanly. Nothing is held back as leverage.',
  },
  {
    q: 'What happens if it does not work?',
    a: 'Some accounts do not work, and the honest version is that you find out in the first two or three months. If the numbers are not there and I cannot see a route to them, I will say so and you can stop with thirty days’ notice. Keeping a client on a retainer that is not earning its keep is a slower way of losing them.',
  },
  {
    q: 'Do you work outside Dublin?',
    a: 'Yes, anywhere in Ireland, and the work is the same. Being in Dublin matters mainly for the local search side of things and for the fact that we can meet in person if you would rather do it that way.',
  },
]
