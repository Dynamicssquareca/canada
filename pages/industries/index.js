
import Head from 'next/head'
import Link from 'next/link';
const IndustriesList = () => {
  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 for Industries: Explore Your Solution</title>
        <meta
          name="description"
          content="Microsoft Dynamics 365 is a suite of intelligent business apps devised to help large and mid-market-sized industries. Contact Dynamics Square for more info."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/"
        />
        <meta property="og:locale" content="CAD" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Microsoft Dynamics 365 for Industries: Explore Your Solution" />
        <meta property="og:description" content="Microsoft Dynamics 365 is a suite of intelligent business apps devised to help large and mid-market-sized industries. Contact Dynamics Square for more info." />
        <meta property="og:url" content="https://www.dynamicssquare.ca/industries/" />
        <meta property="og:site_name" content="Dynamics Square CA" />
        <meta property="og:image" content="https://www.dynamicssquare.ca/img/Dynamics-365-for-professional-services.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_ca" />
        <meta name="twitter:title" content="Microsoft Dynamics 365 for Industries: Explore Your Solution" />
        <meta name="twitter:description" content="Microsoft Dynamics 365 is a suite of intelligent business apps devised to help large and mid-market-sized industries. Contact Dynamics Square for more info." />
        <meta name="twitter:image" content="https://www.dynamicssquare.ca/img/Dynamics-365-for-professional-services.png" />
         {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({


            })
          }}
        /> */}
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Industries</h1>
              <p>Accelerate your growth with the power of <Link href="/solutions/microsoft-dynamics-crm/"><a>cloud CRM</a></Link> and <Link href="/solutions/microsoft-dynamics-erp/"><a>ERP apps</a></Link> from <Link href="/solutions/microsoft-dynamics-365/"><a>Microsoft Dynamics 365</a></Link>, bring agility to business operations and make a real impact.</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/Dynamics-365-for-professional-services.png"
                alt="Dynamics-365-for-professional-services"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>Choose your Industry</h2>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Startup</h3>
                <div className="text-lg-center">
                  <a
                    href="/industries/startups/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Not for Profit</h3>
                <div className="text-lg-center">
                  <a
                    href="/industries/microsoft-cloud-for-nonprofit/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>E-Commerce</h3>
                <div className="text-lg-center">
                  <a
                    href="/industries/ecommerce/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Manufacturing & Distribution</h3>
                <div className="text-lg-center">
                  <a
                    href="/industries/microsoft-cloud-for-manufacturing/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Professional Services</h3>
                <div className="text-lg-center">
                  <a
                    href="/industries/professional-services/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Food & Beverages</h3>
                <div className="text-lg-center">
                  <a
                    href="/industries/food-and-beverages/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default IndustriesList;