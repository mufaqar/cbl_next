import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/config/client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics measurementId="G-Q1VGHRVGLX" />
      <Header />
      <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </>
  )
}
