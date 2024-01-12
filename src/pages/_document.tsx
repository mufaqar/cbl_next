import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-TNZF6NMR"></script> */}
        <script async src="/script.js" />
      </Head>
      <body>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNZF6NMR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
        {/* <script async src="/footer-script.js" /> */}
      </body>
    </Html>
  )
}
