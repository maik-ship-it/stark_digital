import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import Script from 'next/script'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import './globals.css'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? ''

// One typeface across the whole site. Weight and size carry the hierarchy.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Google Ads & SEO Agency Dublin | Stark Digital',
    template: '%s | Stark Digital',
  },
  description:
    'Search advertising, SEO, AI search and landing pages for Irish businesses. One specialist owns the whole path from the search to the enquiry.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/',
    siteName: SITE_NAME,
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>
        {GTM_ID && (<Script id="gtm-head" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>)}
        {GTM_ID && (<noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>)}
        <LocalBusinessSchema />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
