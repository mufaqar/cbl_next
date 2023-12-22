import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics measurementId="G-Q1VGHRVGLX" />
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-396439267"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-396439267');
</script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
