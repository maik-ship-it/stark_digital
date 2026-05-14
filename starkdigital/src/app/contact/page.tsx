import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Stark Digital — Google Ads agency Dublin. Request a free audit or ask a question.',
  alternates: { canonical: 'https://starkdigital.ie/contact' },
}

export default function ContactPage() {
  return <ContactForm />
}
