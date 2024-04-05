
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
            
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          <script src="//code.jivosite.com/widget/ayximyoru5" async></script>

          <script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f4ae692f69047cfb5e521329e28eb92ad716190026f4f75a19e7fee95fa9303543e914ab68721f0d07610e8a4e1779ddgid7a6d634be08b0d742ffd61c20b6b5c31ff4c0724a243eb59967145b5768f1c11gid99cc806988ac712b27ff272419e91a99673c7f13378786badacfd22d69978821gidae4183e7dc1594ead21fccc02d9f0ddd49199502a80206099bde827efd876ca7&tw=c942952f908d26ee48f420d467d0b56ba030e54788e51af4b7c90a541bc70313'></script>    
        </body>
      </Html>
    )
  }
}

export default MyDocument