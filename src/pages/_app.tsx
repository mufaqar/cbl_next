import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics measurementId="G-Q1VGHRVGLX" />
      <script src=//b-js.ringba.com/CA7b594600650445d183a4f303631553d4 async></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-396439267"></script>
      <script>
        gtag('event', 'conversion', {'send_to': 'AW-396439267/vIIYCOHA6IAZEOPdhL0B'});
      </script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
