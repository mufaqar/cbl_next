import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-TNZF6NMR"></script> */}
        <script async src="/script.js" />
        {/* <script src="//scripts.iconnode.com/121949.js" async></script> */}
      </Head>
      <body>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNZF6NMR" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Main />
        <NextScript />
        {/* <script src="//b-js.ringba.com/CA16708bc067a6445c9f8eb7c27832ba60" async></script> */}
      </body>
    </Html>
  )
}
