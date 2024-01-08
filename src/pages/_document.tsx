import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-396439267"></script>
        <script async src="/script.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="/footer-script.js" />
      </body>
    </Html>
  )
}
