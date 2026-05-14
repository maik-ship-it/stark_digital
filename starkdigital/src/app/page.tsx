import type { Metadata } from 'next'
import HeroV2 from '@/components/sections/HeroV2'
import MetricsTicker from '@/components/sections/MetricsTicker'
import RealityCheck from '@/components/sections/RealityCheck'
import ResultsV2 from '@/components/sections/ResultsV2'
import ServicesV2 from '@/components/sections/ServicesV2'
import CaseStudyFeature from '@/components/sections/CaseStudyFeature'
import ProcessV2 from '@/components/sections/ProcessV2'
import Pricing from '@/components/sections/Pricing'
import TestimonialV2 from '@/components/sections/TestimonialV2'
import FAQ from '@/components/sections/FAQ'
import CtaV2 from '@/components/sections/CtaV2'
import FAQSchema from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Google Ads Agency Dublin | Stark Digital',
  description:
    'Boutique Google Ads management for professional services in Dublin. Solicitors, accountants, financial advisors — we specialise in your market.',
  alternates: { canonical: 'https://starkdigital.ie' },
}

const homeFAQs = [
  {
    q: 'How much does Google Ads management cost in Ireland?',
    a: 'Management fees start at €1,000/month depending on ad spend and campaign complexity. No hidden setup fees, no long-term lock-in.',
  },
  {
    q: 'How quickly can I see results from Google Ads?',
    a: 'Most clients see meaningful results within 2–4 weeks. Unlike SEO, Google Ads drives traffic from day one.',
  },
  {
    q: 'Do you work with small businesses in Dublin?',
    a: "We focus on professional service firms — solicitors, accountants, financial advisors, dental practices, and tradespeople. If that's you, get in touch.",
  },
  {
    q: 'What makes Stark Digital different from other Google Ads agencies?',
    a: "We're intentionally small. Maximum 8 active clients at a time. You work directly with a specialist — not an account manager who rotates every few months.",
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No. We work month-to-month. We earn your business by delivering results, not by locking you in.',
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homeFAQs} />

      {/* 1. Hero — full viewport, bold headline */}
      <HeroV2 />

      {/* 2. Amber metrics ticker */}
      <MetricsTicker />

      {/* 3. Reality check — boutique statement */}
      <RealityCheck />

      {/* 4. Results — big animated numbers */}
      <ResultsV2 />

      {/* 5. Services — numbered industry list */}
      <ServicesV2 />

      {/* 6. Featured case study — editorial layout */}
      <CaseStudyFeature />

      {/* 7. Process — 4 steps */}
      <ProcessV2 />

      {/* 8. Pricing — transparent investment section */}
      <Pricing />

      {/* 9. Testimonial — one large editorial quote */}
      <TestimonialV2 />

      {/* 10. FAQ */}
      <FAQ faqs={homeFAQs} />

      {/* 11. CTA — full amber section */}
      <CtaV2 />
    </>
  )
}
