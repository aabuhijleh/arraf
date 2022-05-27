import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta name="application-name" content="عرّاف" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="عرّاف" />
          <meta name="description" content="إسأل عرّاف وإكشف الخفايا" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#9f00a7" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#FF1467" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://arraf.vercel.app" />
          <meta name="twitter:title" content="عرّاف" />
          <meta name="twitter:description" content="إسأل عرّاف وإكشف الخفايا" />
          <meta
            name="twitter:image"
            content="https://arraf.vercel.app/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@aabuhijleh_dev" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="عرّاف" />
          <meta property="og:description" content="إسأل عرّاف وإكشف الخفايا" />
          <meta property="og:site_name" content="عرّاف" />
          <meta property="og:url" content="https://arraf.vercel.app" />
          <meta
            property="og:image"
            content="https://arraf.vercel.app/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
