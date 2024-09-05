import React from "react";
import Head from 'next/head';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import NavBar from '../../../components/NavBar';
const SalesManagement = () => {
  return (
    <>
      <Head>
        <title>Dynamics 365 Business Central for Sales & Marketing </title>
        <meta
          name="description"
          content="With Dynamics 365 Business Central Sales module, businesses gain real-time insights into their sales pipeline, automate repetitive tasks, and focus on qualified leads to close deals efficiently. "
        />
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/sales-management/"
        />
        <meta property="og:locale" content="CAD" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dynamics 365 Business Central for Sales & Marketing " />
        <meta property="og:description" content="With Dynamics 365 Business Central Sales module, businesses gain real-time insights into their sales pipeline, automate repetitive tasks, and focus on qualified leads to close deals efficiently. " />
        <meta property="og:url" content="https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/sales-management/" />
        <meta property="og:site_name" content="Dynamics Square CA" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Warehouse-Management-banner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_ca" />
        <meta name="twitter:title" content="Dynamics 365 Business Central for Sales & Marketing " />
        <meta name="twitter:description" content="With Dynamics 365 Business Central Sales module, businesses gain real-time insights into their sales pipeline, automate repetitive tasks, and focus on qualified leads to close deals efficiently." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/Warehouse-Management-banner.png" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({


            })
          }}
        /> */}
      </Head>
      <main>
        <section className="center-hero-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="hero-bnner-info text-center">
                  <div className="top-info">
                    <h1>Business Central for Sales Management</h1>
                    <p>Streamline the sales process, improve customer relationship management, get in-built AI assistance, and make data-driven decisions with Business Central for Sales. </p>
                  </div>
                  <div className="top-info-img text-center">
                    <Image src="/img/bc-erp-partner-banner.png" alt="c-erp-partner-banner" width={1093} height={531} />
                  </div>
                  <div className="bottom-info-cta">
                    <a data-bs-toggle="modal"
                      href="#exampleModal" className="btn">Let’s Get Started!</a>
                    <span>All-in-one solution for all your<br />
                      business practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <img src="/img/hero-p-shape.png" alt="hero-p-shape" />
              </div>
            </div>
          </div>
        </div>

        <NavBar />



        <section id="section1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header section-header-color">
                  <h2>Streamline Sales Management and <br />Boost Sales Efficiency </h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="vide-s">
                  <video
                    className="video-screen"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/img/video-thumb.png"
                  >
                    <source src="/video/BC.mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="new-sol-con-side">
                  <p>Microsoft Dynamics BC is a perfect <a href="/solutions/microsoft-dynamics-erp/">ERP solution</a> that also comes with standard CRM features to offer a robust sales management solution and boost business efficiency. <a href="/solutions/dynamics-365-business-central/">Dynamics Business Central</a> enables you to manage the entire sales cycle, tracking each milestone from lead generation to order fulfillment. </p>
                  <p>It enables you to gain real-time data insight into your sales pipeline, automate repetitive tasks, focus on qualified leads to close deals, and <b>generate maximized revenue</b>. </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header section-header-color">
                  <h2>Advantages of Using the <br />Business Central Sales Module</h2>
                  <p>Microsoft Business Central for sales management provides numerous benefits to keep businesses connected with their customers and strengthen customer relationships. </p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Advanced Lead Management</h3>
                  <p>Microsoft Dynamics BC helps businesses <b>classify leads</b> based on different scenarios. It helps separate each lead automatically based on quality and makes the process smooth and efficient. </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Real-time Sales Dashboard </h3>
                  <p>D365 BC offers a real-time dashboard, helping organizations to provide or renew contracts, close deals on time, contact customers, and <a href="/dynamics-365-business-central-erp-support/">provide support</a>.  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="container">
            <div className="row bg-new-callaction m-o justify-content-center">
              <div className="col-lg-9">
                <div className="solution-new-caltoaction">
                  <h2>Want to eliminate data silos and boost business productivity?</h2>
                  <p>Accept innovation and embrace cloud computing with a cost-effective Business Central implementation. Break silos and boost profit margins with a FREE Business Central trial.</p>
                  <a data-bs-toggle="modal"
                    href="#exampleModal" className="btn bt-bg">Unlock Growth. Start Your Trial Today</a>
                </div>
                <div className="ffloting-pic">
                  <img src="/img/new-shape-call.png" alt="new-shape-call" />
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="section2">
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header section-header-color">
                  <h2>Advantages of Using the <br />Business Central Sales Module</h2>
                  <p>Microsoft Business Central for sales management provides numerous benefits to keep businesses connected with their customers and strengthen customer relationships. </p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Advanced Lead Management</h3>
                  <p>Microsoft Dynamics BC helps businesses <b>classify leads</b> based on different scenarios. It helps separate each lead automatically based on quality and makes the process smooth and efficient. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Real-time Sales Dashboard </h3>
                  <p>D365 BC offers a real-time dashboard, helping organizations to provide or renew contracts, close deals on time, contact customers, and <a href="/dynamics-365-business-central-erp-support/">provide support</a>.  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Track Customers</h3>
                  <p>D365 Business Central for Sales helps companies track their customer journey from the day they buy your products or services. You can also track inquiry tickets until the sales team solves them. </p>
                </div>
              </div>
            </div>


          </div>
        </section>


     


        <section className="call-bg-gray">
          <div className="container">
            <div className="row po-realtive">
              <div className="col-lg-7">
                <div className="call-to-action-three">
                  <h2>Switch to Microsoft Business Central Today! <br />Your Gateway to Immeasurable Success.</h2>
                  <p>Simplify, automate, and succeed by leveraging the limitless capabilities of Business Central.</p>
                  <a data-bs-toggle="modal"
                    href="#exampleModal" className="btn bt-bg">Switch Now!</a>
                  <div className="im-abso">
                    <img src="/img/frame-shape.png" alt="frame-shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      


      






        <section id="section5">

          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header section-header-color">
                  <h2>Advantages of Using the <br />Business Central Sales Module</h2>
                  <p>Microsoft Business Central for sales management provides numerous benefits to keep businesses connected with their customers and strengthen customer relationships. </p>
                </header>
              </div>
            </div>


            <div className="row g-3">
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                  <h3>Tailored Solutions, Built for You</h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>

                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                  <h3>Team of Certified Dynamics 365 Experts</h3>
                  <p>We are a team of over <b>135+</b> Microsoft-certified Dynamics 365 consultants. At Dynamics Square, the best industry minds are on your side to tackle any challenge and craft growth-oriented strategies.</p>
                  <div className="bg-img">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                  <h3>Adequate Resources Available</h3>
                  <p>We have adequate resources and infrastructure to empower businesses of all sizes. With our robust Dynamics 365 Business Central support services, you can match your ambition to scale.</p>
                  <div className="img-flips">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                  <h3>Hands-On Support</h3>
                  <p>We offer on-site support for complex problems or interruptions to ensure your company gets back on track quickly and affordably.</p>

                </div>
              </div>
            </div>

          </div>



        </section>




   
     
      </main>
    </>
  );
};

export default SalesManagement;

