import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/config/client'
import Breadcrum from '@/components/breadcrum'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()
  console.log("🚀 ~ file: _app.tsx:13 ~ App ~ router:", pathname)
  const notInclude = ['/']

  return (
    <>
      <GoogleAnalytics measurementId="G-Q1VGHRVGLX" />
      <Header />
      {
        !(notInclude.includes(pathname)) && <Breadcrum/>
      }
      <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  )
}
