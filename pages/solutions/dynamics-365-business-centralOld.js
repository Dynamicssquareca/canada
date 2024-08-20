import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";
import ModalVideo from "react-modal-video";

const BusinessCentralOld = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Business Central Partner Vancouver</title>
        <meta
          name="description"
          content="We are Canada's trusted Microsoft Dynamics 365 Business Central Partner in Vancouver. Call +1 289 807 0740 for demo, implementation, upgrades & support."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/"
        />
        <meta
          name="keywords"
          content="Business Central, Microsoft Dynamics 365 Business Central, Dynamics 365 Business Central, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365, Microsfot 365 Business, Dynamics 365 Business Central Pricing, Microsoft Business Central Partner, Business Central Integration, Microsoft Business Central Cost, Business Central Support, Microsoft Dynamics 365 Business Central Cost"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/"
        />
        <meta
          property="og:title"
          content="Microsoft Dynamics 365 Business Central ERP Partner Vancouver"
        />
        <meta
          property="og:description"
          content="We are Canada's trusted Microsoft Dynamics 365 Business Central Partner in Vancouver. Call +1 289 807 0740 for demo, implementation, upgrades & support."
        />
        <meta
          property="og:image"
          content="https://www.dynamicssquare.ca/img/Dynamics-365-Business-Central.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/"
        />
        <meta
          property="twitter:title"
          content=" Microsoft Dynamics 365 Business Central ERP Partner Vancouver"
        />
        <meta
          property="twitter:description"
          content="We are Canada's trusted Microsoft Dynamics 365 Business Central Partner in Vancouver. Call +1 289 807 0740 for demo, implementation, upgrades & support."
        />
        <meta
          property="twitter:image"
          content="https://www.dynamicssquare.ca/img/Dynamics-365-Business-Central.png"
        />
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({

              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Why should small businesses use Microsoft Dynamics Business Central?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business Central is one of the best cloud-based ERP available today, which has the following features that can help small businesses stop guessing and start making the most out of their existing operations:<ul><li>Simple and flexible to use.</li><li>Integration with other online Microsoft services, business and productivity apps for increased productivity and better performance.</li><li>Available in more than 130 countries and regions, and in multiple languages and currency modes.</li><li>Business Central is now powered by Dynamics 365 Copilot (Chat GPT4-based, AI-powered language tool) to help users start leveraging its capabilities for more connected and collaborated experiences.</li><li>Ability to manage end-to-end process flows, from finance and supply chain to warehousing, sales, reporting & analytics, HR and payrolls.</li></ul>"
                }
              }, {
                "@type": "Question",
                "name": "How Business Central and Dynamics NAV are related?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dynamics 365 Business Central is the upgraded version of Dynamics NAV (better known as Navision). The difference lies in advanced features and navigations in Business Central than in NAV. Microsoft Dynamics Business Central is designed to help businesses of today and tomorrow across various industries.Important: Existing Dynamics NAV users can get support services but not the mainstream support from Microsoft.We, at Dynamics Square, offer reliable, cost-efficient NAV and Business Central Support Services. Get in touch for Business Central implementation to discuss your business problems in 1:1 meet-ups."
                }
              }, {
                "@type": "Question",
                "name": "What is the ROI of Dynamics 365 Business Central Implementation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Implementing Dynamics 365 Business Central is expected to yield a Return on Investment (ROI) of 162% over three years. The benefits of using Microsoft Dynamics Business Central are expected to outweigh the costs of implementing and maintaining the software.Plus, it can lead to a 10% reduction in finance and operations hiring needs, which could translate to cost savings for the organization. Download the study by Gartner to explore the whole report.Get in touch with your canadian business central partner like Dynamics Square for effortless, successful Business Central ERP implementation."
                }
              }, {
                "@type": "Question",
                "name": "How to upgrade your NAV to Dynamics 365 Business Central?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you are ready to upgrade your legacy systems like NAV to a cloud-based intelligent business application - Dynamics 365 Business Central, we're always a call away. Our team of Dynamics 365 experts and proficient consultants can help implement a highly configured solution for your business and fulfilling all your customized business needs.For more details or to avail our free system health check, get in touch with us today."
                }
              }, {
                "@type": "Question",
                "name": "Who can use Dynamics 365 Business Central Support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The size and niche don't matter with Business Central. This business application can help businesses of all sizes across industries: from e-Commerce, food & beverages, Manufacturing & Distribution, Healthhcare and Professional Services to Non-Profit hubs.Also, if you are just starting out, Microsoft Dynamics Business Central is a pro app for Startups and Microsoft is supporting new small businesses by giving FREE Azure CREDITS to make an impact.Curious to know how Business Central can get implemented for your growing business? We're your best Business Central Implementation partners across Canada. Contact us today!"
                }
              }, {
                "@type": "Question",
                "name": "What is the Dynamics 365 Business Central implementation cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Business Central is a cloud-based ERP system. It takes about 6 to 8 months for its implementation. This is why Dynamics 365 Business Central Implementation cost varies. Thus, pricing may vary depending on your requirements and the complexity of your business process flows. Below are the standard plans available for your business:<ul><li>Essential - Starts at CAD 89.60 per user/month</li><li>Premium - From CAD 128 per user/month</li><li>Team Member - It's available at CAD 10.20 per user/month</li></ul>Still not sure which business central implementation cost plan would best suit your business, call our experts today. We're are always eager to extend help."
                }
              }, {
                "@type": "Question",
                "name": "How to get quick support for Dynamics 365 Business Central?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reach out to your canadian Business Central partner for quick support. If your current partner is not listening to your problems, contact Dynamics Square. We have a dedicated support system and an expert team you provide timely, efficient, and flexible Dynamics 365 Support to our clients.Get in touch with us now to discover the power of Business Central Online ERP"
                }
              }]

            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Dynamicssquare CA",
                  "item": "https://www.dynamicssquare.ca/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "solutions",
                  "item": "https://www.dynamicssquare.ca/solutions/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "/dynamics 365 business central",
                  "item": "https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/"
                }
              ]
            }
            )
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Dynamics 365 Business Central",
              "description": "Dynamics 365 Business Central (formerly Dynamics NAV) is a comprehensive online ERP system. It is designed and developed for small and medium-sized businesses (SMBs) and subsidiaries of large international groups. With Business Central, small businesses across Canada can manage sales, finance services, supply chain operations, HR, Payroll, and other departments. Plus, companies from the manufacturing industry can automate, accelerate, and simplify their processes to increase revenue and nurture scalability.",
              "operatingSystem": "All",
              "applicationCategory": "ERP Software",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Dynamics 365 Business Central Essentials",
                  "price": "95",
                  "priceCurrency": "CAD"
                },
                {
                  "@type": "Offer",
                  "name": "Dynamics 365 Business Central Premium",
                  "price": "135",
                  "priceCurrency": "CAD"
                },
                {
                  "@type": "Offer",
                  "name": "Dynamics 365 Business Central Team Members",
                  "price": "10.90",
                  "priceCurrency": "CAD"
                }
              ],
              "url": "https://www.dynamicssquare.ca/solutions/dynamics-365-business-central/",
              "publisher": {
                "@type": "Organization",
                "name": "Dynamicssquare CA",
                "url": "https://www.dynamicssquare.ca/"
              }
            }
            )
          }}
        />

      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="E7dkVwU6pl0"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1>
                Microsoft Dynamics 365 Business Central ERP Partner Vancouver{" "}
              </h1>
              <p>
                Connect and streamline your services, financials, manufacturing,
                supply chain, and other operational processes with Business
                Central, and adapt faster, work smarter, and perfrom better.
                <strong>
                  {" "}
                  Ready to break down silos in information, 162% ROI, 10%
                  reduction in hiring costs, & one version of truth?
                </strong>{" "}
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started with Business Central </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Dynamics-365-Business-Central.png"
                alt="Dynamics 365 Business Central"
                width={1024}
                height={597}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>Why Choose Dynamics 365 Business Central?</h2>
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
                  poster="/img/video-thumb.png"
                >
                  <source src="/video/BC.mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="new-sol-con-side">
                <p>
                  Originating from Microsoft's hub of innovation,{" "}
                  <b>Dynamics 365 Business Central</b> (formerly{" "}
                  <b>Dynamics NAV</b>) is a comprehensive online ERP system. It
                  is designed and developed for small and medium-sized
                  businesses (SMBs) and subsidiaries of large international
                  groups.
                </p>
                <p>
                  With <b>Business Central</b>, small businesses across canada
                  can manage sales, finance services, supply chain operations,
                  HR, Payroll, and other departments.{" "}
                </p>
                <p>
                  Plus, companies from manufacturing industry can automate,
                  accelerate, and simplify their processes to increase revenue
                  and nurture scalability.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Ready for an All-In-One Cloud ERP Solution?</h3>
                <p>
                  Businesses across Canada can implement this all-in-one cloud
                  ERP solution to scale their growth, enhance sustainability,
                  and improve results.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Click For FREE Business Central Trial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <header className="section-header">
                <h2>
                  Microsoft Dynamics Business Central: Core Features and
                  Benefits{" "}
                </h2>
                <p>
                  <b>Microsoft D365 Business Central</b> is now available in{" "}
                  <b>130+</b> countries and regions. <b>Get Started</b> to{" "}
                  <b>SAVE</b> up to <b>30%</b> for{" "}
                  <Link href="/dynamics-365-business-central-erp-system-implementation/">
                    <a>Business Central Implementation </a>
                  </Link>
                </p>
              </header>
            </div>
          </div>

          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Faster & Confident Cloud Deployment </span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Business Central offers a flexible and adaptable{" "}
                          <Link href="/solutions/microsoft-dynamics-365/">
                            <a>cloud ERP solution</a>
                          </Link>{" "}
                          and allows faster adoption. With reliable and secure
                          cloud-based deployment, you can connect all your teams
                          - sales, service, finance, supply chain management,
                          and operations to ensure business continuity,
                          maximized financial visibility, and enhanced
                          productivity.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Improved Customer Experience (CX)</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          With Microsoft Business Central, businesses can manage
                          their entire sales order and procurement cycles within
                          Outlook. Business Central also offers connected
                          service operations that results in better outcomes.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Boost In Sales with Azure AI </span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Microsoft Business Central has built-in{" "}
                          <Link href="/solutions/microsoft-dynamics-365-ai/">
                            <a>Azure AI</a>
                          </Link>{" "}
                          that helps businesses create a cashflow forecast using
                          Flow Analysis. This enhances informed decision-making
                          so that teams can stay empowered to control your cash
                          flows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Increased Business Performance</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Microsoft Dynamics Business Central is one unified
                          business management suite that connects people,
                          processes, and insights for better and faster informed
                          decision-making. Its embedded ERP/financials, CRM and
                          eCommerce functionality enable businesses to achieve
                          more and attain greater operational excellence - and
                          reduce finance and operations hiring by{" "}
                          <strong>10%</strong>.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewss">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Cost & Time-Efficient Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Business Central helps ensure successful project
                          execution and profitability by offering planning,
                          resourcing, tracking, costing, billing, accounting
                          with real-time project management intelligence.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Deep Financial Visibility</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Dynamics 365 Business Central accelerates financial
                          closure, forecasting, and provides real-time
                          performance metrics and reporting. It also fosters
                          global compliance and regulations across subsidiaries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="accordion" id="accnewss">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Optimized Inventory</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Microsoft Dynamics 365 Business Central provides
                          visibility across purchasing, manufacturing,
                          inventory, and warehouses, enabling businesses to
                          deliver products on time and adapt to evolving demands
                          in no time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <span>Intelligent Supply Chain Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Real-time visibility into the supply chain enables
                          businesses to optimize inventory levels, streamline
                          procurement processes, and improve efficiency.
                          Business Central helps you automate and digitize your
                          supply chain and reduces manual intervention,
                          resulting in significant reduction in operational
                          costs.{" "}
                        </p>
                      </div>
                    </div>
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
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>Capabilities of Dynamics 365 Business Central</h2>
                <p>
                  Connect Your Entire Business Processes, Make Smarter
                  Decisions, and Start Growing Easily with Game-Changing
                  Business Central Capabilities.
                </p>
              </header>
            </div>
          </div>
          <div className="row d-lg-none">
            <div className="col-lg-12">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Finance</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Internal Transactions</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Forecast Cash flows</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Budgeting</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Costing</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Consolidation and Multi-Companies</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Costs and Income Allocation</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Sales</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Customer management</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Quote</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales order</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Invoices</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Drop Shipments</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Returns</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Assembly Order</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning & Promising</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Single invoice Multiple Shipments</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Correction or Cancel Unpaid Invoices</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Pick List Creation</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Purchase</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Vendor Management</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Quote</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Order</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Invoices</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Items for Sales</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Purchase Returns</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Combine Receipts on Single Invoice</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Electronic Documents</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Date Calculation for Purchase</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Merge Duplicate Records</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Inventory Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Master Management</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Bill of Materials</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Categorization</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Attributes</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Catalog</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Counting</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availablity</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Transfer</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Reservation</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Tracking</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Block Items</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Warehouse Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Receiving</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Shipments</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Cross Dock Items</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Putting Items Away</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Moving Items</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Picking Items</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Automated Data Capture Systems (ADCS)</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Creation</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Allocations</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Time Sheet Management</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Budget Management</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Consumptions</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Supplies</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project WIP Methods</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Progress and Performance</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Invoicing</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Merge Duplicate Records</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="row busines-service-list-pad">
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Planning</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Supply Planning</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Demand Forecasting</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>
                                  Creation of Production Order from Sales Order
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>MRP & MPS</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Requisition Worksheet</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Calculate Work Centre Calendar</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availablity</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Order</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Subcontracting</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Consumption & Output</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row busines-bg g-0">
            <div className="col-lg-3 no-pad">
              <div
                className="nav flex-column nav-pills bus-ser-left"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="nav-link active"
                  id="v-pills-Finance-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Finance"
                  role="tab"
                  aria-controls="v-pills-Finance"
                  aria-selected="true"
                >
                  <h3>Finance</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Banking-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Banking"
                  role="tab"
                  aria-controls="v-pills-Banking"
                  aria-selected="false"
                >
                  <h3>Banking</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Sales-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Sales"
                  role="tab"
                  aria-controls="v-pills-Sales"
                  aria-selected="false"
                >
                  <h3>Sales</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Purchase-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Purchase"
                  role="tab"
                  aria-controls="v-pills-Purchase"
                  aria-selected="false"
                >
                  <h3>Purchase</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Management-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Management"
                  role="tab"
                  aria-controls="v-pills-Management"
                  aria-selected="false"
                >
                  <h3>Inventory Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Inventory-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Inventory"
                  role="tab"
                  aria-controls="v-pills-Inventory"
                  aria-selected="false"
                >
                  <h3>Warehouse Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Project-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Project"
                  role="tab"
                  aria-controls="v-pills-Project"
                  aria-selected="false"
                >
                  <h3>Project Management</h3>
                </div>
                <div
                  className="nav-link"
                  id="v-pills-Manufacturing-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Manufacturing"
                  role="tab"
                  aria-controls="v-pills-Manufacturing"
                  aria-selected="false"
                >
                  <h3>Manufacturing</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-Finance"
                  role="tabpanel"
                  aria-labelledby="v-pills-Finance-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Forecast Cash flows</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Budgeting</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Costing</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Consolidation and Multi-Companies</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Costs and Income Allocation</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Banking"
                  role="tabpanel"
                  aria-labelledby="v-pills-Banking-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cost Accounting</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Fixed Assets </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Accounts Receivable</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Accounts Payable </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>General Ledger</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Sales"
                  role="tabpanel"
                  aria-labelledby="v-pills-Sales-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Customer management</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Quote</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales order</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Invoices</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Drop Shipments</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Returns</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Assembly Order</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning & Promising</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Single invoice Multiple Shipments</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Correction or Cancel Unpaid Invoices</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Pick List Creation</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Purchase"
                  role="tabpanel"
                  aria-labelledby="v-pills-Purchase-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Management</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Quote</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Order</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Invoices</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Items for Sales</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Returns</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Combine Receipts on Single Invoice</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Electronic Documents</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Date Calculation for Purchase</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Management"
                  role="tabpanel"
                  aria-labelledby="v-pills-Management-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Master Management</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Block Items</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Inventory"
                  role="tabpanel"
                  aria-labelledby="v-pills-Inventory-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cross Dock Items</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS)</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Project"
                  role="tabpanel"
                  aria-labelledby="v-pills-Project-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Creation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-Manufacturing"
                  role="tabpanel"
                  aria-labelledby="v-pills-Manufacturing-tab"
                >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Demand Forecasting</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>
                  Ready To Experience The Power Of Dynamics 365 Business
                  Central?{" "}
                </h3>
                <p>
                  Implement Business Central and Get Started With Strong Core
                  Financials for GL, AP, AR, & Dimensional reporting.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Contact Now!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>What Makes Business Central ERP Stand Out? </h2>
                <h3>
                  Moving to Business Central Can Be An Intelligent & Profitable
                  Option For Your Business.
                </h3>
              </div>
              {/* <div className="m-o-t m-o-t-b">
                <a
                  href="/dynamics-365-business-central-features/"
                  className="btn-get-started scrollto"
                >
                  <span>Explore More</span>
                </a>
              </div> */}
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Unified & Modern <br /> Business Approach{" "}
                      </h3>
                      <div className="overlay">
                        <p>
                          With{" "}
                          <Link href="/solutions/microsoft-power-bi/">
                            <a>Power BI</a>
                          </Link>{" "}
                          Power Automate, Power Apps, Power Virtual Agents, and
                          Dataverse, Business Central is a comprehensive
                          business application that helps you make better
                          decisions on time through its intelligence.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Excellent <br /> Customer Experience{" "}
                      </h3>
                      <div className="overlay">
                        <p>
                          The UI design elements & data-driven approach provides
                          enhanced user experience (UX) across desktop & mobile
                          devices, helping your sales teams to delight their
                          customers, engage and target potential users in
                          real-time from anywhere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Robust Analytics <br /> & Simplified Reporting{" "}
                      </h3>
                      <div className="overlay">
                        <p>
                          Integrate Business Central with Power BI for invoking
                          inbuilt reporting and analytics capabilities, enabling
                          your workforce to make instant yet productive and
                          market-disrupting decisions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Integration <br /> & Customization
                      </h3>
                      <div className="overlay">
                        <p>
                          Microsoft Dynamics 365 Business Central has
                          capabilities that are easy-to-customize for
                          business-specific needs. Small or small-to-mid market
                          size businesses (SMBs) can integrate Business Central
                          with their existing systems, third-party apps, and
                          other{" "}
                          <Link href="/solutions/microsoft-dynamics-365/">
                            <a>Microsoft Business Apps.</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-n">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <Swiper
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-8 align-self-center">
                        <div className="call_to_action-left">
                          <h3>
                            Want to Switch Your Dynamics NAV, GP, or AX to
                            Business Central?
                          </h3>
                          <p>
                            If your are dissatisfied with your legacy ERP
                            system, or have plans to try Business Central, get
                            in touch with Dynamics Square. We will make sure you
                            look no further to upgrade your{" "}
                            <b> Dynamics AX, NAV, or GP</b>.
                          </p>
                          <div className="new-btn new-btn-nn">
                            <a
                              href="/contact-us/"
                              className="btn-get-started-color"
                            >
                              <span>
                                Connect With Your Dynamics 365 Partner Today!{" "}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="call_to_action-right">
                          <img
                            src="/img/Group-683.png"
                            alt="microsft dynamics Nav"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="new-style-bg" style={{ background: "#f7f7f7" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-8">
              <header className="section-header">
                <h2>What's New in Business Central 21?</h2>
                <p>
                  Dynamics 365 Business Central online is getting highly
                  adaptable and feature rich with each update. Look at the
                  updates form{" "}
                  <a
                    href="https://learn.microsoft.com/en-us/dynamics365-release-plan/2022wave2/smb/dynamics365-business-central/planned-features"
                    target="_blank"
                    rel="nofollow"
                  >
                    2023 Wave 1 release plan{" "}
                  </a>
                  . Look at the updates:
                </p>
              </header>
            </div>
          </div>
          <div className="row g-5 pad2xyr">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Inclusion of GPT4-based Copilot:</h3>
                  <p>Make it easy for your teams to quickly solve problems.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Responsive User Interface: </h3>
                  <p>
                    Improved user interface with a new look and feels that it is
                    more modern and intuitive.
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Improved Integration:</h3>
                  <p>
                    Easily gets integrated with Microsoft Teams, Power BI,
                    Microsoft Loop, and Outlook, enabling you to do more with
                    less!{" "}
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Boosted Workflow Automation:</h3>
                  <p>Enable flexible approvals workflow automation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Enhanced Financial Management:</h3>
                  <p>Enable flexible approvals workflow automation. </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Upgraded Inventory Management:</h3>
                  <p>
                    For SMBs that rely on inventory management, the new features
                    in Business Central include - the ability to manage
                    inventory across multiple locations and increased support
                    for consignment inventory.{" "}
                  </p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>For More, Take Your Sip Here:</h3>
                  <p>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave1/smb/dynamics365-business-central/"
                    >
                      The 2023 Release Wave 1 Plan for Dynamics 365 Business
                      Central
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section style={{ background: "#f7f7f7" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>
                  The Crux of 2023 Release Wave 1 Plan for Business Central
                </h2>
                <p>
                  The crux includes the enhancements for managing multiple
                  companies and intercompany features. It will reduce your
                  onboarding time with quality content and seamless experiences.
                  This development in Business Central also helps you automate
                  your regulatory tasks for compliance. And improvements to
                  usability include personalized columns, bulk actions, and more
                  comprehensive views for increased efficiency.
                </p>
                <p>
                  <strong>Take Your Sip Here:</strong>{" "}
                  <a
                    href="https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave1/smb/dynamics365-business-central/"
                    rel="nofollow"
                    target="_blank"
                  >
                    The 2023 Release Wave 1 Plan for Dynamics 365 Business
                    Central
                  </a>
                </p>
              </header>
            </div>
          </div>
        </div>
      </section> */}

      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/bisin_leftimg.jpg"
                    className="fix-im"
                    alt="Business Central Services"
                    width={514}
                    height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <Image
                          src="/img/Video-Business Central.png"
                          alt="Video Business Central"
                          width={390}
                          height={259}
                        />
                        <span className="cente-icns">
                          <img src="/img/play_icons.svg" alt="play_icons" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics Square Business Central Services</h2>
                <p>
                  Microsoft Dynamics 365 Business Central Implementation Made
                  Easy! Get adevice anywhere, anytime.
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Business Central Implementation</h3>
                  <p>
                    Implement Business Central to enhance your business
                    processes and support your business-continuity.{" "}
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-business-central-erp-system-implementation/">
                      <a>Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Business Central Upgrade</h3>
                  <p>
                    Upgrade your{" "}
                    <Link href="/solutions/microsoft-dynamics-erp/">
                      <a>legacy ERP systems</a>
                    </Link>{" "}
                    and empower your teams with new capabilities that energize
                    your organization to do more with less.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-business-central-upgrade/">
                      <a>Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Business Central Support</h3>
                  <p>
                    The <b>24-hour/7-day, 365-day</b> support system we provide
                    ensures that your business grows at its peak.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-business-central-erp-support/">
                      <a>Get Started</a>
                    </Link>
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
            <header className="section-header">
              <h2>Compare Business Central Licensing options </h2>
              <p>Choose the Plan That Fits Right To Your Business Needs! </p>
            </header>
            <div className="col-lg-12">
              <div>
                <table className="table table-bordered table-responsive table-cc">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Dynamic 365 Business Central Essentials</th>
                      <th>Dynamic 365 Business Central Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Unlimited users</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Customization and extensibility</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Multiple environments</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Multiple companies</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Finance management</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Sales and marketing</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Fulfillment and delivery</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Purchasing and payables</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Inventory</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Supply planning and availability</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Project management</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Warehouse management</td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Service management</td>
                      <td></td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Manufacturing</td>
                      <td></td>
                      <td>
                        <i className="bi bi-circle-fill"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Business Central Pricing & Licensing</h2>
            <p>
              Take a look at Dynamics 365 Business Central Pricing for Team
              Members, Essentials & Premium Plans
            </p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Essentials
                </h3>
                <p>From</p>
                <div className="price">
                  $95(CAD)<span>per user/month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Premium
                </h3>
                <p>From</p>
                <div className="price">
                  $135.70(CAD)<span>per user/month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Sales Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Service Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Manufacturing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Team Members
                </h3>
                <p>From</p>
                <div className="price">
                  $10.90(CAD)<span>per user/month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Read and Approve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Employee Self Serve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Run All Reports
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </a>
                <a
                  href="/assets/pdf/Dynamics-365-Licensing-Guide-June-2022.pdf"
                  className="btn-get-whit"
                  target="_blank"
                  rel=""
                >
                  <span>See Licensing Guide</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Dynamics 365 Business Central Implementation </h3>
                <p>
                  Translate data into meaningful insights, maximize your
                  business potential, and overcome business challenges with{" "}
                  <strong>
                    Microsoft Dynamics 365 Business Central Implementation
                  </strong>
                  . Contact your Dynamics 365{" "}
                  <strong>Business Central Partner</strong> today!
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Learn More The About Implementation Process </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>Looking to explore more about Business Central? </h2>
            <p>Scroll through FAQs tailored for you! </p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Why should small businesses use Microsoft Dynamics
                      Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Business Central is one of the best cloud-based ERP
                        available today.
                      </p>
                      <p>
                        Here's why you should implement Microsoft Business
                        Central:
                      </p>
                      <ul>
                        <li>Simple and flexible to use.</li>
                        <li>
                          Ability to manage end-to-end process flows, from
                          finance and supply chain to warehousing, sales,
                          reporting & analytics, HR and payrolls.{" "}
                        </li>
                        <li>
                          Integration with other online Microsoft services,
                          business and productivity apps for increased
                          productivity and better performance.
                        </li>
                        <li>
                          Available in <b>130+</b> countries and regions, and in
                          multiple languages and currency modes.
                        </li>
                        <li>
                          Business Central is now powered by{" "}
                          <b>Dynamics 365 Copilot</b> (Chat GPT4-based,
                          AI-powered language tool) to help users start
                          leveraging its capabilities for more connected and
                          collaborated experiences.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      How Business Central and Dynamics NAV are related?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Business Central is the upgraded
                        version of{" "}
                        <Link href="/solutions/microsoft-dynamics-nav/">
                          <a>Dynamics NAV</a>
                        </Link>{" "}
                        (also known as Navision). The difference lies in
                        advanced features and navigations in Business Central
                        than in NAV. Microsoft Dynamics Business Central is
                        designed to help businesses of today and tomorrow across
                        various industries.
                      </p>
                      <p>
                        <b>Important:</b> Existing Dynamics NAV users can get
                        support services but not the mainstream support from
                        Microsoft.{" "}
                      </p>
                      <p>
                        We, at <b>Dynamics Square</b>, offer reliable,
                        cost-efficient NAV and{" "}
                        <Link href="/dynamics-365-business-central-erp-support/">
                          <a>Business Central Support Services</a>
                        </Link>
                        . Get in touch for Business Central implementation to
                        discuss your business problems in <b>1:1</b> meet-ups.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      What is the ROI of Dynamics 365 Business Central
                      Implementation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Implementing Dynamics 365 Business Central is expected
                        to yield a Return on Investment (ROI) of{" "}
                        <strong>162%</strong> over three years. The benefits of
                        using Microsoft Dynamics Business Central are expected
                        to outweigh the costs of implementing and maintaining
                        the software.
                      </p>
                      <p>
                        Plus, it can lead to a <strong>10%</strong> reduction in
                        finance and operations hiring needs, which could
                        translate to cost savings for the organization.{" "}
                        <strong>
                          <a
                            href="https://download.microsoft.com/download/f/8/b/f8b3d4db-d2b6-4357-bfc4-a1fdafd8b993/TEI_of_Microsoft_Business%20Central_FINAL.pdf"
                            target="_blank"
                            rel="nofollow"
                          >
                            Download the study by Gartner
                          </a>
                        </strong>{" "}
                        to explore the whole report.
                      </p>
                      <p>
                        <Link href="/contact-us/">
                          <a>Get in touch</a>
                        </Link>{" "}
                        with your <b>Business Central Partner</b> based in
                        Canada like <b>Dynamics Square</b> for effortless,
                        successful Business Central ERP implementation.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      How to upgrade your NAV to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        If you are ready to upgrade your legacy systems like NAV
                        to a cloud-based intelligent business application -
                        Dynamics 365 Business Central, we're always a call away.
                        Our team of{" "}
                        <Link href="/our-services/dynamics-365-implementation-services/">
                          <a>Dynamics 365 experts</a>
                        </Link>{" "}
                        and proficient consultants in Vancouver can help
                        implement a highly configured solution for your business
                        and fulfilling all your customized business needs.{" "}
                      </p>
                      <p>
                        For more details or to avail our{" "}
                        <strong>free system health check</strong>,{" "}
                        <Link href="/contact-us/">
                          <a>get in touch with us today</a>
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      Who can use Dynamics 365 Business Central Support?{" "}
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Small and medium-sized businesses (SMBs) can use
                        Business Central. This can help SMBs cater to companies
                        across industries: e-Commerce, food & beverages,
                        Manufacturing & Distribution, Healthhcare and
                        Professional Services to Non-Profit hubs.
                      </p>
                      <p>
                        Curious to know how Business Central can get implemented
                        for your growing business? We're your best Business
                        Central Implementation partners for manufacturing and
                        service hubs across Canada; Vancouver, Toronto,
                        Montreal, Quebec City, and more.{" "}
                        <Link href="/contact-us/">
                          <a>Contact us</a>
                        </Link>{" "}
                        today!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      What is the Dynamics 365 Business Central implementation
                      cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central is a cloud-based ERP system. It takes
                        about <strong>6</strong> to <strong>8</strong> months
                        for its implementation. This is why Dynamics 365
                        Business Central Implementation cost varies. Thus,
                        pricing may vary depending on your requirements and the
                        complexity of your business process flows. Below are the
                        standard plans available for your business:{" "}
                      </p>
                      <p>
                        <b>Essential</b> - Starts at CAD <strong> 89.60</strong>{" "}
                        per user/month{" "}
                      </p>
                      <p>
                        <b>Premium </b>- From CAD <strong>128</strong> per
                        user/month{" "}
                      </p>
                      <p>
                        <strong>Team Member</strong> - It's available at CAD{" "}
                        <strong>10.20</strong> per user/month{" "}
                      </p>
                      <p>
                        Still not sure which business central implementation
                        cost plan would best suit your business,{" "}
                        <Link href="/contact-us/">
                          <a>call our experts</a>
                        </Link>{" "}
                        based in Vancouver, Canada. We're are always eager to
                        extend help. <b>Connect now!</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      How to get quick support for Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Reach out to your canadian Business Central partner for
                        quick support. If your current partner is not listening
                        to your problems, contact Dynamics Square. We have a
                        dedicated support system and an expert team you provide
                        timely, efficient, and flexible{" "}
                        <Link href="/our-services/dynamics-365-support-services/">
                          <a>Dynamics 365 Support</a>
                        </Link>{" "}
                        to our clients.
                      </p>
                      <p>
                        <b>Get in touch</b>with us now to discover the power of
                        Business Central Online ERP
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                      Can I integrate Power BI with Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Business Central is an all-in-one
                        solution, which is flexible in all business management
                        aspects. Data analytics and data visualization software
                        like{" "}
                        <Link href="/solutions/microsoft-power-bi/">
                          <a>Microsoft Power BI</a>
                        </Link>{" "}
                        are already included in Business Central.{" "}
                      </p>
                      <p>
                        However, if you want to add the functionality of any
                        other Microsoft Business Application or third-party
                        service like Salesforce, you can do so.
                      </p>
                      <p>
                        <b>Contact</b> your{" "}
                        <b>Business Central Partner in Canada</b> to help you
                        get started.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >
                      What is the difference between Dynamics 365 Business
                      Central and F&O?{" "}
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central is designed and developed for small and
                        mid-market sized companies and has basic
                        funcitonalities. While F&O or{" "}
                        <Link href="/solutions/microsoft-dynamics-365-finance-operations/">
                          <a>Dynamics 365 Finance and Operations</a>
                        </Link>{" "}
                        (now available in two separate modules as{" "}
                        <Link href="/solutions/microsoft-dynamics-365-finance/">
                          <a>Dynamics 365 Finance</a>
                        </Link>{" "}
                        and Supply Chain Management) caters to large enterprises
                        that have complex operations to manage.
                      </p>
                      <p>
                        For implementation of{" "}
                        <Link href="/solutions/dynamics-365-supply-chain-management/">
                          <a>Dynamics 365 Supply Chain Management</a>
                        </Link>
                        , you can{" "}
                        <Link href="/contact-us/">
                          <a>contact us</a>
                        </Link>{" "}
                        and share your requirements to get a quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="blogs-extra">
        <div className="container">
        <div className="row justify-content-center">
<div className="col-lg-7 col-md-8">
          <header className="section-header">
            <h2>Help Your Business Grow With Our Best Business Central Resources</h2>
          </header>
          </div></div>
          <div className="row top-2 gx-5 justify-content-center">
           
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="/assets/pdf/Is-Your-Business-Outgrowing-Your-Accounting-Software.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Is Your
                      Business Outgrowing Your Accounting Software?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Business-Owners-Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Business
                      Owner's Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Reimagine-Productivity.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reimagine
                      Productivity
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Four-Technology-Trends-Helping-Businesses-Thrive-in-a-Digital-World.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Technology
                      Trends Helping Businesses Thrive in a Digital World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Reinvent-productivity-with-Dynamics-365-and-Microsoft-365.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reinvent
                      productivity with Dynamics 365 and Microsoft 365
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/The-Total-Economic-Impact-of-Microsoft-Dynamics-365-Business-Central.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> The Total
                      Economic Impact of Dynamics 365 Business Central
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      rel=""
                      href="/why-choose-microsoft-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why Choose
                      Microsoft Dynamics 365 Business Central?
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="/advantages-capabilities/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Advantages
                      and Capabilities
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://www.dynamicssquare.com/upgrade-dynamics-nav-to-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why to
                      Upgrade Dynamics NAV to Business Central
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://www.dynamicssquare.com/reasons-to-upgrade-accounting-software/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BusinessCentralOld;
