
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
            {/* <Script id='zsiqchat' strategy="beforeInteractive">
              {
                `
                var $zoho=$zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode:"siq2c0a7348126da1eec1533d7b2fe81669a9a9454a36812c4485ee1ce065e0a657e9757eecc59243ed2c9ad7fb7bda1383", values:{},ready:function(){}};
                var d=document;
                var s=d.createElement("script");
                s.type="text/javascript";
                s.id="zsiqscript";
                s.defer=true;
                s.src="https://salesiq.zohopublic.in/widget";
                var t=d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s,t);
                `
              }
            </Script> */}
          
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          <script src="//code.jivosite.com/widget/ayximyoru5" async></script>
          {/* <script
            id="zsiqchat"
            async
            dangerouslySetInnerHTML={{
              __html: `
                var $zoho=$zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode:"siq2c0a7348126da1eec1533d7b2fe81669a9a9454a36812c4485ee1ce065e0a657e9757eecc59243ed2c9ad7fb7bda1383", values:{},ready:function(){}};
                var d=document;
                var s=d.createElement("script");
                s.type="text/javascript";
                s.id="zsiqscript";
                s.defer=true;
                s.src="https://salesiq.zohopublic.in/widget";
                var t=d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s,t);
              `
            }}
          /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument