import { useState, useEffect } from 'react';
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import LinkWithFadeOut from "../components/LinkWithFadeOut";


const Home = () => {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        setIsLastSlide(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  const handleWheel = (event) => {
    if (isLastSlide) {
      event.preventDefault(); // Prevent default scrolling
      document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event) => {
    if (isLastSlide && (event.key === 'PageUp' || event.key === 'ArrowUp')) {
      event.preventDefault(); // Prevent default scrolling
      document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLastSlide]);


  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 Partner in Canada | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics Square is leading Microsoft Dynamics 365 Partner in Canada. Elevate your business operations with our expertise in Microsoft cloud technology."
        />
        <link rel="canonical" href="https://www.dynamicssquare.ca/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Partner in Canada | Dynamics Square" />
        <meta property="og:site_name" content="Dynamics Square" />
        <meta property="og:url" content="https://www.dynamicssquare.ca/" />
        <meta property="og:description" content="Dynamics Square is leading Microsoft Dynamics 365 Partner in Canada. Elevate your business operations with our expertise in Microsoft cloud technology." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.dynamicssquare.ca/img/banner-head-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.ca/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Partner in Canada | Dynamics Square" />
        <meta property="twitter:description" content="Dynamics Square is leading Microsoft Dynamics 365 Partner in Canada. Elevate your business operations with our expertise in Microsoft cloud technology." />
        <meta property="twitter:image" content="https://www.dynamicssquare.ca/img/banner-head-image.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.dynamicssquare.ca/#organization",
                  "name": "Dynamics Square",
                  "url": "https://www.dynamicssquare.ca/",
                  "sameAs": [
                    "https://www.facebook.com/dynamicssquareca",
                    "https://twitter.com/dsquare_ca",
                    "https://www.linkedin.com/company/dynamics-square-canada/",
                    "https://www.youtube.com/c/DynamicsSquare"
                  ],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.ca/#logo",
                    "inLanguage": "en-US",
                    "url": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
                    "contentUrl": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
                    "width": "1024",
                    "height": "1024",
                    "caption": "Dynamics Square"
                  },
                  "image": { "@id": "https://www.dynamicssquare.ca/#logo" }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dynamicssquare.ca/#website",
                  "url": "https://www.dynamicssquare.ca/",
                  "name": "Dynamics Square Canada | Microsoft Dynamics 365 and Cloud consultancy providing experts.",
                  "description": "We simplify your complex business processes and challenges by implementing cloud-based ERP, CRM and other Microsoft cloud solutions.",
                  "publisher": { "@id": "https://www.dynamicssquare.ca/#organization" },
                  "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://www.dynamicssquare.ca/?s={search_term_string}" }, "query-input": "required name=search_term_string" }],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "ImageObject",
                  "@id": "hhttps://www.dynamicssquare.ca/#primaryimage",
                  "inLanguage": "en-US",
                  "url": "https://www.dynamicssquare.ca/img/banner-head-image.png",
                  "contentUrl": "https://www.dynamicssquare.ca/img/banner-head-image.png",
                  "width": 1561,
                  "height": 667,
                  "caption": "dynamicssquare"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.dynamicssquare.ca/#webpage",
                  "url": "https://www.dynamicssquare.ca/",
                  "name": "Dedicated CRM and ERP Consultants for Canada Region | Dynamics Square",
                  "isPartOf": { "@id": "https://www.dynamicssquare.ca/#website" },
                  "about": { "@id": "https://www.dynamicssquare.ca/#organization" },
                  "primaryImageOfPage": { "@id": "https://www.dynamicssquare.ca/#primaryimage" },
                  "datePublished": "2022-08-31T06:09:16+00:00",
                  "dateModified": "2022-11-07T09:15:37+00:00",
                  "description": "We are CRM and ERP consultants in Canada who help your business thrive by implementing the best CRM, ERP, and Microsoft cloud solutions for your specific needs.",
                  "breadcrumb": { "@id": "https://www.dynamicssquare.ca/#breadcrumb" },
                  "inLanguage": "en-US",
                  "potentialAction": [{ "@type": "ReadAction", "target": ["https://www.dynamicssquare.ca/"] }]
                },
                { "@type": "BreadcrumbList", "@id": "https://www.dynamicssquare.ca/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Dynamics Square Canada Ltd.",
              "description": "Helping your business to grow at scale by providing unbiased advice to select the right ERP and CRM solutions.",
              "image": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
              "alternateName": "Dynamics Square Software company in Ontario, Canada",
              "telephone": "+12898072802, +17786523656",
              "email": "info@dynamicssquare.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "800 Steeles Ave W",
                "addressLocality": "800 Steeles Ave W, #B10155 Thornhill, Ontario L4J 7L23E2",
                "addressRegion": "Ontario",
                "addressCountry": "Canada",
                "postalCode": "L4J 7L23E2"
              },
              "brand": {
                "@type": "Brand",
                "name": "Dynamics Square Canada Ltd.",
                "logo": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg"
              },
              "aggregateRating":
              {
                "@type": "AggregateRating",
                "ratingValue": "4.2",
                "reviewCount": "18"
              },
              "url": "https://www.dynamicssquare.ca/",
              "sameAs": [
                "https://www.facebook.com/dynamicssquareca",
                "https://twitter.com/dsquare_ca",
                "https://www.linkedin.com/company/dynamics-square-canada/",
                "https://www.youtube.com/c/DynamicsSquare"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "Headline": "Assisting you in successfully leveraging the power of CRM, ERP, and cloud technology.",
              "description": "You have a goal, a vision or an issue to address. We have 140+ Microsoft certified consultants, creative thinkers, and developers proactively ready to support in your digital transformation journey. Our mission is to alleviate your problems and make your vision a reality.",
              "Keywords": ["erp consultants canada", "crm consultancy", "d365 business central", "crm expert online", "d365 for finance", "dynamics crm implementation", "d365 field service", "crm implementation services"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dynamics Square Canada Ltd.",
              "alternateName": "Dynamics Square Software company in Ontario, Canada",
              "url": "https://www.dynamicssquare.ca/"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "localBusiness",
              "name": "Dynamics Square Canada Ltd.",
              "description": "Helping your business to grow at scale by providing unbiased advice to select the right ERP and CRM solutions.",
              "image": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg",
              "alternateName": "Dynamics Square Software company in Ontario, Canada",
              "telephone": "+12898072802, +17786523656",
              "email": "info@dynamicssquare.com",
              "priceRange": "$$$-$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "800 Steeles Ave W",
                "addressLocality": "800 Steeles Ave W, #B10155 Thornhill, Ontario L4J 7L23E2",
                "addressRegion": "Ontario",
                "addressCountry": "Canada",
                "postalCode": "L4J 7L23E2"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 54.63996281303019,
                "longitude": -103.34901546818584
              },

              "brand": {
                "@type": "Brand",
                "name": "Dynamics Square Canada Ltd.",
                "logo": "https://www.dynamicssquare.ca/img/dynamicssqure-logo.svg"
              },
              "aggregateRating":
              {
                "@type": "AggregateRating",
                "ratingValue": "4.2",
                "reviewCount": "18"
              },

              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednessday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "5:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday - closed"


                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday - Closed"

                }
              ],


              "url": "https://www.dynamicssquare.ca/",
              "sameAs": [
                "https://www.facebook.com/dynamicssquareca",
                "https://twitter.com/dsquare_ca",
                "https://www.linkedin.com/company/dynamics-square-canada/",
                "https://www.youtube.com/c/DynamicsSquare"
              ]
            })
          }}
        />
      </Head>

      <main>
      <div className='banner-animated' style={{
      backgroundImage: `url(/img/frame-132.webp)`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
    }}>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-12'>
              <div className='h-banner-animated'>
                <div className='top-he'>
                <h1>Canada's Trusted <br/>Microsoft Dynamics 365 Partner </h1>
                <p>From implementation to training, Dynamics Square is your go-to partner that utilizes AI-driven technologies to drive the digital transformation.</p>
                </div>
                <div className='cal-btn-t'>
                <a data-bs-toggle="modal" href="#exampleModal" className='btn btn-danger'>Get Started Today</a>
                <span>Free consultation with no obligations</span>
                </div>
                <div className='flot-imm'>
                  <img width={564} height={316} src="/img/ca-banner-p-l.png" className='left' alt="a-banner-p-l" />
                  <img width={547} height={319} src="/img/ca-banner-p-r.png" className='right' alt="a-banner-p-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="row home-clint-d justify-content-center">
              <div className='col-lg-10'>
                <div className='text-s'>
                  <span>Trusted by 350+ Businesses</span>
                </div>
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    300: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className='home-client'>
                      <Image
                        src="/img/cli-1.png"
                        className="img-fluid a-fluid"
                        alt="cli-1"
                        width={238}
                        height={80}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/cli-2.png"
                      className="img-fluid a-fluid"
                      alt="Spectra-Aluminum-logo"
                      width={238}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/cli-3.png"
                      className="img-fluid a-fluid"
                      alt="MexiLand_logos"
                      width={238}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/cli-4.png"
                      className="img-fluid a-fluid"
                      alt="VidPro_logo"
                      width={238}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/cli-5.png"
                      className="img-fluid a-fluid"
                      alt="PLASP-LOGO"
                      width={238}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
    
                </Swiper>
              </div>

            </div>

        </div>
      </div>





        {/* <div className="main-banner">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 555555,
              disableOnInteraction: false,
            }}
          
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mySwipe-home-slider"
          >
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h1>Top-rated Dynamics 365 Partner in Canada</h1>
                  <p>Dynamics Square is a top-rated Microsoft Partner offering tailored Dynamics 365 solutions to boost productivity and efficiency. </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h2>Amplify Growth with a Reliable Microsoft Solutions Partner </h2>
                  <p>Dynamics Square, a leading Microsoft Dynamics 365 partner, embraces innovations and technologies to revolutionize your business for maximized growth. </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h1>Canada's Trusted Microsoft Dynamics 365 Partner </h1>
                  <p>From implementation to training, Dynamics Square is your go-to partner that utilizes AI-driven technologies to drive the digital transformation.</p>
                  <Link href="#exampleModal">
                    <a className="btns" data-bs-toggle="modal"
                    >Talk to Expert <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div> */}
        <section className="into-banner-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 align-self-center">
                <img
                  className="new-pic"
                  src="/img/m--partner.png"
                  alt="parten image"
                  width={263}
                  height={168}
                />
              </div>
              <div className="col-lg-1">
                <div className="sh"></div>
              </div>
              <div className="col-lg-9 align-self-center">
                <div className="info-right-new">
                  <div className="info-img-new">
                    <img src="/img/clutch-img.png" alt="parten image"  width={293}
                  height={317} />
                  </div>
                  <div className="info-contr-new">
                    <h3>
                      Experience Personalized Microsoft Cloud <br />
                      Solutions for Simplified Operations
                    </h3>
                    <div className="info">
                      <span>Streamline Processes</span>
                      <span>Minimize Expenses</span>
                      <span>Set New Records</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Trusted by Global Brands! </h2>
                  <p>Being a Microsoft Gold Partner, our years of expertise and knowledge can drive your business towards exceptional outcomes and enhanced performance through innovative Dynamics 365 solutions. </p>
                </div>
              </div>
            </div>
            <div className="row inner-side-pad">
              <div className="col-lg-12">
                <div className="new-counter-wraper">
                  <div className="new-counter">
                    <h3>350+</h3>
                    <p>Clients Worldwide</p>
                  </div>
                  <div className="new-counter">
                    <h3>150+</h3>
                    <p>Certified Pofessionals</p>
                  </div>
                  <div className="new-counter">
                    <h3>14+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="new-counter">
                    <h3>24*7</h3>
                    <p>Reliable Support</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row home-clint-dd justify-content-center">
              <div className='col-lg-10'>
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    300: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className='home-client'>
                      <Image
                        src="/img/clients/JVEquip_logo.png"
                        className="img-fluid"
                        alt="JVEquip_logo"
                        width={200}
                        height={80}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/clients/Spectra-Aluminum-logo-new.png"
                      className="img-fluid"
                      alt="Spectra-Aluminum-logo"
                      width={200}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/clients/MexiLand_logos.png"
                      className="img-fluid"
                      alt="MexiLand_logos"
                      width={200}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image
                      src="/img/clients/VidPro_logo.png"
                      className="img-fluid"
                      alt="VidPro_logo"
                      width={200}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='home-client'>
                  <Image style={{ mixBlendMode: 'darken' }}
                      src="/img/clients/PLASP-LOGO.png"
                      className="img-fluid"
                      alt="PLASP-LOGO"
                      width={200}
                      height={80}
                    />
                  </div>
                  </SwiperSlide>
    
                </Swiper>
              </div>

            </div> */}
          </div>
        </section>



        <section>
          <VideoPlayer poster="/img/poster-1.webp" src="/video/Slide4-1.mp4" preload="none" />
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Microsoft Dynamics 365 Solutions: Innovative Solutions for Modern Businesses </h2>
                  <p>We help organizations utilize the power of <a href="/solutions/microsoft-dynamics-365/">Microsoft Dynamics 365 Solutions</a> to streamline complex operations, promote collaboration, enhance customer experiences, and drive business growth. We not only empower businesses to adapt with agility and innovation, but we also support them to stay competitive. </p>
                </div>
              </div>
            </div>

            <div className="row new-image-card sliding-row">
              <div className="col-lg-4 d-flex sliding-col">
                <div className="card-image-ver-1">
                  <a href="/solutions/dynamics-365-business-central/">
                    <div className="card-head-top">
                      <img src="/img/BusinessCentral_scalable.png" alt="BusinessCentral_scalable" className="icon" width={48} height={48} />
                      <h3>Dynamics 365 <br />Business Central</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>A complete ERP solution for SMBs embedded with automation and cloud capabilities.</p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i className="bi bi-check-lg"></i>Simplify Business Operations </li>
                        <li><i className="bi bi-check-lg"></i>Boost Overall Efficiency </li>
                        <li><i className="bi bi-check-lg"></i>Enhance Productivity </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex sliding-col">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-dynamics-365-finance/">
                    <div className="card-head-top">
                      <img src="/img/Finance_scalable.png" alt="Finance_scalable" className="icon" width={48} height={48} />
                      <h3>Dynamics 365<br />
                        Finance</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Streamline complex financial operations while managing the entire business on the go.</p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i className="bi bi-check-lg"></i>Get Clear Financial Picture </li>
                        <li><i className="bi bi-check-lg"></i>Simplify Financial Transactions </li>
                        <li><i className="bi bi-check-lg"></i>Perform data-driven Planning </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex sliding-col">
                <div className="card-image-ver-1">
                  <a href="/solutions/dynamics-365-supply-chain-management/">
                    <div className="card-head-top">
                      <img src="/img/SupplyChainManagement_scalable.png" alt="SupplyChainManagement_scalable" className="icon" width={48} height={48} />
                      <h3>Dynamics 365<br />
                        Supply Chain</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>From raw material to customer delivery, track your supply chain with real-time status. </p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i className="bi bi-check-lg"></i>Optimize Product Flow </li>
                        <li><i className="bi bi-check-lg"></i>Enable 24*7 Inventory Visibility </li>
                        <li><i className="bi bi-check-lg"></i>Enhance Demand Planning </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex sliding-col">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-dynamics-365-sales/">
                    <div className="card-head-top">
                      <img src="/img/Sales_scalable.png" alt="Sales_scalable" className="icon" width={48} height={48} />
                      <h3>Dynamics 365 <br />Sales</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Supercharge sales operations, convert more leads, and offer superior customer experience. </p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i className="bi bi-check-lg"></i>Close Deals Faster </li>
                        <li><i className="bi bi-check-lg"></i>Build Strong Relationships </li>
                        <li><i className="bi bi-check-lg"></i>Boost Sales Performance </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex sliding-col">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-power-bi/">
                    <div className="card-head-top">
                      <img src="/img/PowerBI_scalable.png" alt="PowerBI_scalable" className="icon" width={48} height={48} />
                      <h3>Microsoft <br />Power BI</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Connect multiple data sources, perform data analysis, and find hidden information through interactive visualizations. </p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i className="bi bi-check-lg"></i>Turn Data into Insights </li>
                        <li><i className="bi bi-check-lg"></i>Build Interactive Reports </li>
                        <li><i className="bi bi-check-lg"></i>Share Useful Insights Across Team </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex sliding-col">
                <div className="card-image-ver-1">
                  <a href="/">
                    <div className="card-head-top">
                      <img src="/img/Copilot_scalable.png" alt="Copilot_scalable" className="icon" width={48} height={48} />
                      <h3>Microsoft <br />Copilot</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Leverage the limitless capabilities of Microsoft’s AI-assistance with natural language prompts.</p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i className="bi bi-check-lg"></i>Avail Automation </li>
                        <li><i className="bi bi-check-lg"></i>Enhance Productivity </li>
                        <li><i className="bi bi-check-lg"></i>Expand Knowledge </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
            </div>


          </div>
        </section>



        <section className="p-222">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Transform and Optimize your Business with our Reliable Services </h2>
                  <p>Experience seamless business transformation and achieve operational excellence with our tailor-made Microsoft Dynamics 365  services, specially curated for unique businesses like yours. </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="/services/dynamics-365-implementation/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-1.jpg"
                      alt="Card image cap"
                      width={827}
                      height={368}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Implementation</h3>
                    <p className="card-text">Adapt a personalized Microsoft Dynamics 365  solution that suits your requirements to drive growth, efficiency, and consistent profitability.</p>
                    <a href="/services/dynamics-365-implementation/">Start Transformation Now! <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="/services/dynamics-365-upgrade/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-2.jpg"
                      alt="Card image cap"
                      width={828}
                      height={368}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Upgrade Services</h3>
                    <p className="card-text">Upgrade to Microsoft Dynamics 365  and revolutionize your operations. Eliminate manual tasks, reduce errors, and unlock new growth opportunities. </p>
                    <a href="/services/dynamics-365-upgrade/">Upgrade Now!  <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="/services/dynamics-365-support/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-3.jpg"
                      alt="Card image cap"
                      width={826}
                      height={368}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">Ensure seamless operations and stay consistent on your growth path with our dedicated team of Microsoft experts.</p>
                    <a href="/services/dynamics-365-support/">Get Seamless Support!  <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bc-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Industries that Rely on Us! </h2>
                  <p>As a leading Dynamics 365 partner in Canada, we are catering our services to diverse industries and enabling them to utilize their full business potential. Our deep industry expertise and proven track record enable us to deliver tailored solutions that drive growth, efficiency, and innovation. We're more than just a partner; we're your strategic ally in achieving business excellence. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-d" onWheel={handleWheel}>
            <Swiper
              onSwiper={setSwiperInstance}
              spaceBetween={30}
              centeredSlides={true}
              grabCursor={true}
              // mousewheel={{
              //   enabled: !isLastSlide, 
              //   sensitivity: 1,
              // }}
              pagination={{
                clickable: false,
              }}
              modules={[Mousewheel]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}

              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/free-dynamics-365-system-health-check/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Healthcare-industry.jpg"
                      alt="Healthcare-industry"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Healthcare</h3>
                    <p className="card-text">Improve patient care, track medical supplies, and streamline different healthcare operations to enhance patient engagement. </p>
                    <a href="/free-dynamics-365-system-health-check/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/dynamics-365-for-ecommerce/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Retail-&-E-commerce.jpg"
                      alt="Retail-&-E-commerce"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Retail & E-commerce</h3>
                    <p className="card-text">Enhance customer experience, optimize supply chain operations, and drive offline as well as online sales for maximum revenue. </p>
                    <a href="/industries/dynamics-365-for-ecommerce/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/solutions/dynamics-365-business-central/education/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Education-industy.jpg"
                      alt="Education-industy"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Education </h3>
                    <p className="card-text">Perform accurate resource allocation, improve student engagement, and simplify different administrative tasks. </p>
                    <a href="/solutions/dynamics-365-business-central/education/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/microsoft-cloud-for-manufacturing/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Manufacturing-industry.jpg"
                      alt="Manufacturing-industry"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Manufacturing </h3>
                    <p className="card-text">Eliminate redundancies from the system, improve product quality, and boost production efficiency with Dynamics 365 for manufacturing. </p>
                    <a href="/industries/microsoft-cloud-for-manufacturing/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/dynamics-365-for-startups/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Startup-industr.jpg"
                      alt="Startup-industr"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Startups</h3>
                    <p className="card-text">Supervise processes, accelerate growth, simplify finances, and focus on scaling business rather than managing it. </p>
                    <a href="/industries/dynamics-365-for-startups/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/microsoft-cloud-for-nonprofit/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Not-for-Profit.jpg"
                      alt="Not-for-Profit"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Not for Profit</h3>
                    <p className="card-text">Maximize impact, track donations, maintain strong relationships with donors, and do more for society with the same resources.</p>
                    <a href="/industries/microsoft-cloud-for-nonprofit/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/dynamics-365-for-food-and-beverages/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/Food-Beverages.jpg"
                      alt="Food-Beverages"
                      width={700}
                      height={500}
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Food & Beverages</h3>
                    <p className="card-text">Maintain optimum food quality, ensure compliance acceptance, and track the entire supply chain with Dynamics 365 for Food & Beverages.</p>
                    <a href="/industries/dynamics-365-for-food-and-beverages/">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>


        <section className="col-pd-22" id="next-section">
          <div className="container">
            <LinkWithFadeOut />

          </div>
        </section>

        <section className="p-222-1 d-none">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Read what Thought Leaders<br />
                    Have to Say</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Up To 15% Increase In Microsoft Cloud Solution Prices: What You Need To Know</h3>
                    <p className="card-text">We at Dynamics Square believe in seamless Microsoft dynamics implementation along with long-term assistance</p>
                    <a href="#">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>






              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Install Microsoft Dynamics 365 Business Central (On Premises)</h3>
                    <p className="card-text">We have successfully transformed businesses with our futuristic Upgrading services.</p>
                    <a href="#">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Up To 15% Increase In Microsoft Cloud Solution Prices: What You Need To Know</h3>
                    <p className="card-text">We at Dynamics Square believe in seamless Microsoft dynamics implementation along with long-term assistance</p>
                    <a href="#">
                      Know More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="new-testi-wraper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="testmonial-new-slider">
                  <div className='floating-pp'>
                    <img src="/img/marketing-integration-google-reviews-badge.png"  alt="marketing-integration-google-reviews-badge" width={190} height={58} />
                  </div>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mySwiper-testi"
                  >
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          {/* <h3>Our Leadership</h3> */}
                          <p>We had an excellent experience with Dynamics Square. Arish was incredibly helpful and responsive, ensuring our needs were met quickly. The development and project teams expertly translated our requirements into effective solutions, exceeding our expectations. We're very pleased with the results and highly recommend Dynamics Squared for their professionalism and commitment to client satisfaction. Thank you, Arish and team!</p>
                          <span>-David Karpiak</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          {/* <h3>Our Leadership</h3> */}
                          <p>Good pricing and quick response from our account manager. They helped us with trouble shoot and trainings.</p>
                          <span>-Emma Liang</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          {/* <h3>Our Leadership</h3> */}
                          <p>We were using an outgrown legacy system with potential chances of errors, data loss, and cyber-attacks. These are some of the reasons that pushed us to upgrade to Dynamics 365 Finance and Operations with a cloud deployment. The team at Dynamics Square has successfully implemented this solution in the stated time without any after-sales cost.</p>
                          <span>-Chief Financial Officer at a Non-profit organization</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          {/* <h3>Our Leadership</h3> */}
                          <p>The NAV to Business Central upgrade was our best choice when it comes to business growth, simplified operations, and establishing communication between different teams in different departments. Dynamics Square has made the entire process smooth and efficient.</p>
                          <span>-Vice Principal at a leading college</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          {/* <h3>Our Leadership</h3> */}
                          <p>Dynamics Square understood our requirements and suggested Microsoft Power BI for our data analytics needs. They also integrated this with our existing ERP solution for a continuous data flow.</p>
                          <span>-Head of Marketing at the renowned clothing brand</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          {/* <h3>Our Leadership</h3> */}
                          <p>Dynamics Squared is a fantastic partner and helped us move from an existing CRM to Dynamics 365. The process improvement for our business was significant, and the visibility to our company performance was exactly what we needed. They took the time to understand our needs, and are extremely capable and flexible, which attributed to the success that we had. Glad to have them supporting our business into the future.</p>
                          <span>-Sina Moatamed</span>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Partner with a Passionate Team: The Dynamics Square Advantage </h2>
                  <p>We are a team of <b>150+</b> Microsoft-certified Dynamics consultants with a proven track record of offering reliable and trustworthy services to <b>350+</b> global clients. Our superior infrastructure enables us to offer cost-effective services around the clock. For the last <b>14+ years</b>, Dynamics Square has been transforming businesses with futuristic solutions and an exceptional customer experience. </p>
                </div>
              </div>
            </div>

            <div className="row home-bottom-card">
              <div className="col-lg-4 d-flex">
                <div className="home-bottom-card-one flex-aa">
                  <div className="top-tr">
                    <i className="bi bi-check-lg"></i>
                    <h3>Accelerated ROI </h3>
                  </div>
                  <p>Our customized solutions deliver great ROI by streamlining operations, enhancing efficiency, and boosting productivity. </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="home-bottom-card-one flex-aa">
                  <div className="top-tr">
                    <i className="bi bi-check-lg"></i>
                    <h3>Industry Expertise </h3>
                  </div>
                  <p>We have experts with deep understanding of different industries that enable them to find your business challenges and eliminate them with the perfect solution. </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="home-bottom-card-one flex-aa">
                  <div className="top-tr">
                    <i className="bi bi-check-lg"></i>
                    <h3>End-to-End Support</h3>
                  </div>
                  <p>From business audits to post-implementation support, our dedicated team ensures the smooth functioning of your Dynamics 365 solution. </p>
                </div>
              </div>
            </div>


          </div>
        </section>

  

      </main>
    </>
  );
};

export default Home;
