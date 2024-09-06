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
// import NavBar from '../../../components/NavBar';
const SalesManagement = () => {
  return (
    <>
      <Head>
        <title>Dynamics 365 Business Central for Sales & Marketing </title>
        <meta
          name="description"
          content="With Dynamics 365 Business Central Sales module, businesses gain real-time insights into their sales pipeline, automate repetitive tasks, and focus on qualified leads to close deals efficiently. "
        />
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
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/business-sales-abnner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_ca" />
        <meta name="twitter:title" content="Dynamics 365 Business Central for Sales & Marketing " />
        <meta name="twitter:description" content="With Dynamics 365 Business Central Sales module, businesses gain real-time insights into their sales pipeline, automate repetitive tasks, and focus on qualified leads to close deals efficiently." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/business-sales-abnner.png" />
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
                    <Image src="/img/business-sales-abnner.png" alt="c-erp-partner-banner" width={1002} height={595} priority />
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

        {/* <NavBar /> */}

        <section id="section1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header section-header-color">
                  <h2>Streamline Sales Management and <br />Boost Sales Efficiency </h2>
                </header>
              </div>
            </div>
            <div className="row new-pd-02">
              <div className="col-lg-6 align-self-center">
                <div className="vide-s vide-sss">
                  <Image src="/img/streaming-sales.png" alt="streaming-sales" width={516} height={453} />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="new-sol-con-side">
                  <p>Microsoft Dynamics BC is a perfect <a href="/solutions/microsoft-dynamics-erp/"><b>ERP solution</b></a> that also comes with standard CRM features to offer a robust sales management solution and boost business efficiency. <a href="/solutions/dynamics-365-business-central/"><b>Dynamics Business Central</b></a> enables you to manage the entire sales cycle, tracking each milestone from lead generation to order fulfillment. </p>
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
                  <img src="/img/icon-inner-01.png" alt="cloud_download" />
                  <h3>Advanced Lead Management</h3>
                  <p>Microsoft Dynamics BC helps businesses <b>classify leads</b> based on different scenarios. It helps separate each lead automatically based on quality and makes the process smooth and efficient. </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-02.png" alt="cloud_download" />
                  <h3>Real-time Sales Dashboard </h3>
                  <p>D365 BC offers a real-time dashboard, helping organizations to provide or renew contracts, close deals on time, contact customers, and <a href="/dynamics-365-business-central-erp-support/"><b>provide support</b></a>.  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-03.png" alt="cloud_download" />
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
                  <h2>Take your sales processes to the next level? </h2>
                  <p>Get real-time insight into your sales pipeline, automate repetitive tasks, and understand customer demands with Business Central. </p>
                  <a data-bs-toggle="modal"
                    href="#exampleModal" className="btn bt-bg">Contact us now! </a>
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
                  <h2>Core Functionality of Business Central for Sales </h2>
                  <p>The Business Central for Sales module provides a wide range of functionalities that help companies achieve their goals and enhance their revenue.  </p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-04.png" alt="cloud_download" />
                  <h3>Comprehensive Client management</h3>
                  <p>Manage customer profiles, track communications, maintain contact information & purchase history records, and promptly resolve concerns to enhance <a href="/solutions/microsoft-dynamics-365-customer-service/"><b>customer satisfaction</b></a>. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-05.png" alt="cloud_download" />
                  <h3>Accurate Sales Quoting </h3>
                  <p>Offer effective sales quotes to accurately reflect pricing while ensuring that customers receive comprehensive and transparent information. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-06.png" alt="cloud_download" />
                  <h3>Efficient Sales Order Processing </h3>
                  <p>Business Central allows you to check inventory, track order fulfillment, and ensure timely delivery for fewer returns and greater satisfaction. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-07.png" alt="cloud_download" />
                  <h3>Seamless Sales Invoicing </h3>
                  <p>Create, send, and <a href="/solutions/microsoft-dynamics-365-sales/"><b>manage sales invoices</b></a> effortlessly for the products or services that your customers have purchased, ensuring timely payments from customers. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-08.png" alt="cloud_download" />
                  <h3>Drop Shipments </h3>
                  <p>Improve logistics efficiency and facilitate drop-shipping directly from suppliers to customers using a purchase order to reduce delivery times. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-09.png" alt="cloud_download" />
                  <h3>Sales Returns </h3>
                  <p>Track and document returned products to handle and manage returned items. Leverage Microsoft Dynamics 365 Business Central to <a href="/solutions/dynamics-365-business-central/warehouse-management/"><b>optimize inventory</b></a> and offer exceptional service. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-10.png" alt="cloud_download" />
                  <h3>Correction or Cancel Unpaid Invoices </h3>
                  <p>Effectively correct or cancel unpaid invoices with precision and ease. Maintain accurate financial records and ensure customer satisfaction by resolving billing issues promptly. </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two card-two-extra">
                  <img src="/img/icon-inner-11.png" alt="cloud_download" />
                  <h3>Assembly Order </h3>
                  <p>Facilitate the seamless connection between sales requirements and warehouse activities to fulfill orders, optimizing productivity and enhancing customer satisfaction efficiently. </p>
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
                  <h2>Boost your revenue and improve the customer experience with Business Central. </h2>
                  <p>Build sales opportunities, simplify operations, and boost revenue generation by leveraging advanced sales capabilities. </p>
                  <a data-bs-toggle="modal"
                    href="#exampleModal" className="btn bt-bg">Schedule a Business Central demo now! </a>
                  <div className="im-abso">
                    <img src="/img/frame-shape.png" alt="frame-shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section1">
          <div className="container">
           
            <div className="row new-pd-01">

              <div className="col-lg-6 align-self-center">
                <div className="new-sol-con-side">
                   <h2>Are You Struggling to Find Qualified Leads? </h2>
                  <p>Many businesses struggle to find qualified leads. Finding the good fit that is most likely to make a purchase can help you save time and resources. Moreover, not having a single truth of data can also lead to data inconsistency, duplication, and inaccessibility. </p>
                  <p>With <a href="/solutions/dynamics-365-business-central/"><b>Dynamics 365 Business Central</b></a>, you can segment and target your prospects to generate qualified leads based on valuable customer insights. It also ensures real-time data sharing among your sales team to ensure data consistency. </p>

                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="vide-s vide-sss">
                  <Image src="/img/qualified-leads.png" alt="Streamline Sales Management and
Boost Sales Efficiency" width={484} height={462} />
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
                  <h2>Why Choose Dynamics Square for Sales Management in Business Central?</h2>
                  <p>We are your trusted <a href="/"><b>Microsoft solution partner</b></a> for maximizing the potential of Dynamics 365 Business Central. We are a team of <b>135+</b> certified consultants, helping you achieve your sales goal. At Dynamics Square, we offer: </p>
                </header>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                  <img src="/img/icon-inner-12.png" alt="" />
                  <h3>Seamless implementation </h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>

                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                  <img src="/img/icon-inner-13.png" alt="" />
                  <h3>Team of Certified Dynamics 365 Experts</h3>
                  <p>We are a team of over <b>135+</b> Microsoft-certified Dynamics 365 consultants. At Dynamics Square, the best industry minds are on your side to tackle any challenge and craft growth-oriented strategies.</p>
                  <div className="bg-img">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                  <img src="/img/icon-inner-14.png" alt="" />
                  <h3>Adequate Resources Available</h3>
                  <p>We have adequate resources and infrastructure to empower businesses of all sizes. With our robust Dynamics 365 Business Central support services, you can match your ambition to scale.</p>
                  <div className="img-flips">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                  <img src="/img/icon-inner-15.png" alt="" />
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

