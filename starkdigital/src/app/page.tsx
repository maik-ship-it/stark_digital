import type { Metadata } from 'next'
import Hero from '@/components/v3/Hero'
import ProofBar from '@/components/v3/ProofBar'
import Services from '@/components/v3/Services'
import CaseStudy from '@/components/v3/CaseStudy'
import Work from '@/components/v3/Work'
import Process from '@/components/v3/Process'
import Pricing from '@/components/v3/Pricing'
import FAQ from '@/components/v3/FAQ'
import CTA from '@/components/v3/CTA'
import FAQSchema from '@/components/seo/FAQSchema'
import { homeFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Google Ads & SEO Agency Dublin | Stark Digital',
  description:
    'Search advertising, SEO, AI search and landing pages for businesses in Dublin and across Ireland. One specialist owns the whole path from the search to the enquiry.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homeFaqs} />

      <Hero />
      <ProofBar />
      <Services />
      <CaseStudy />
      <Work />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
