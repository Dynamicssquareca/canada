
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
}

  render() {
    return (
      <Html lang='en-CA'>
        <Head>
            <link href="/favicon.png" rel="icon" />
            <link href="/favicon.png" rel="apple-touch-icon" />
            <link
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
            />
            <meta name="theme-color" content="#ee3442" />
            <script async src="https://www.googleoptimize.com/optimize.js?id=OPT-M9Z4742"></script>
            <meta name="google-site-verification" content="xFgE4PTaJv9p6KEkLb3yvhTbsewZhPo7xg8VbUXi_ME" />
            <Script async
            src="https://www.googletagmanager.com/gtag/js?id=UA-243571673-1"
            strategy="beforeInteractive"
            />
            <Script async id="google-analytics" strategy="beforeInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-243571673-1');
                `}
            </Script>
            <Script id="hotjar" strategy="beforeInteractive">
                {`
               (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3340940,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `}
            </Script>
            <script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=948f4cd9be9bd0a0990742d73cae57054f6db4cf60fadf1c40179e618e27a154bc383e6d0864f0639a6bf156e9e0b82dgidcfca0836293a502444394c44154c5d181e2746b3c7b72fb2a29bbf5bd484edf3gid79441142bac69bf8063093608e61e40a0111ece3fbd86a8ba67d66f194a16099gidae57229cd5d755a9095560a43b789a9936b26d3eb67c9fc12f7c2a21479003b9&tw=e3f350a1f3532d71831c9cd9681bf1dca97bd3f0990fa5ae18c4613ed902cbb6'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          <script src="//code.jivosite.com/widget/ayximyoru5" async></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument