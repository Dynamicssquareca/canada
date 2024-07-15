import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";
import ModalVideo from "react-modal-video";

const Index = () => {
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
        <meta name="robots" content="index,follow" />
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
              <h1>Microsoft Dynamics 365 Business Central ERP Partner Vancouver</h1>
              <p>Simplify daily operations, connect teams, unify business data, and automate complex tasks with Microsoft Dynamics 365 Business Central.</p>
              <p style={{ marginTop: '-20px' }}><b>Accelerate growth, break data silos, boost ROI, and access your system from anywhere with an all-in-one ERP solution.</b></p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Let’s Get Started!</span>
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
                <h2>Dynamics 365 Business Central – Your Reliable Partner in Growth</h2>
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
                <p>Dynamics 365 Business Central, formerly known as <a href="/solutions/microsoft-dynamics-nav/" ><b>Dynamics NAV</b></a>, is a comprehensive cloud ERP solution embedded with modern technologies of AI and BI to streamline the diverse processes of <b>SMBs</b>.</p>
                <p>Microsoft Business Central is a powerful solution that comes with advanced capabilities and business-centric functionalities for businesses. It connects, manages, and streamlines different departments that include finance, sales, <a href="/solutions/dynamics-365-supply-chain-management/"><b>supply chain</b></a> operations, and HR.</p>
                <p>D365 BC offers the power of AI enabled Copilot assistance to enhance productivity, get real-time insights to make data-driven decisions, and simplify processes to enhance overall efficiency with improved visibility. </p>
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
                <h3>Want to eliminate data silos and boost business productivity?</h3>
                <p>Accept innovation and embrace cloud computing with a cost-effective Business Central implementation. Break silos and boost profits with a FREE Business Central trial.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Unlock Growth. Start Your Trial Today</span>
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
                <h2>The Powerhouse Within: Exploring D365 BC Capabilities</h2>
                <p>Connect your entire business processes, make smarter decisions, and start growing easily with game-changing Business Central capabilities.</p>
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
                        <span>Deploy the Cloud Faster, Reduce Downtime</span>
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
                        <span>Amaze Customers and Drive Loyalty</span>
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
                        <span>Close More Deals with AI</span>
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
                        <span>Skyrocket Performance with Data Analytics</span>
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
                        <span>Deliver Projects on Time, On Budget</span>
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
                        <span>Real-Time Financials: Gain Control, Make Money</span>
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
                        <span>Cut Inventory Costs and Boost Availability</span>
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
                        <span>In-built Intelligent Supply Chain Management</span>
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
                        <span>Finance Management</span>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Internal Transactions</h4>
                                <p>Manages internal financial transactions without any errors.</p>
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
                                <p>Estimates future cash inflows, outflows, and financial position.</p>
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
                                <p>Plans and tracks financial resources to control expenses.</p>
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
                                <p>Track inventory value to forecast expenses and maintain inventory levels. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Multi-Companies Management</h4>
                                <p>Combines financial data from multiple entities to analyze finance. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Costs and Expense Allocation </h4>
                                <p>Allocate expenses and revenues accurately using a common journal. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Treasury </h4>
                                <p>Manage cash instruments, offering visibility and control over finance. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Accounts Receivable </h4>
                                <p>Tracks and manages incoming payments and settles customer accounts. </p>
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
                                <p>Tracks and manages outgoing payments to suppliers and vendor partners. </p>
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
                                <p>Manage and track long-term assets, including maintenance costs and insurance policies. </p>
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
                        <span>Sales Management</span>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Client management </h4>
                                <p>Manage your customer base, resolve queries, and increase customer satisfaction. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Quote </h4>
                                <p>Modify and send sales quotes to provide customers with detailed pricing. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Order </h4>
                                <p>Create sales orders and manage the sale of products or services to customers. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Sales Invoices </h4>
                                <p>Generate invoices for products or services customers have purchased. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Drop Shipments </h4>
                                <p>Fulfill customer orders by shipping products directly using a purchase order. </p>
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
                                <p>Process and manage returned items and ensure accurate inventory.</p>
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
                                <p>Connect sales requirements with warehouse activities to fulfill orders.</p>
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
                                <p>Plan and promise delivery dates to ensure smooth order fulfillment.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Generate Single Invoice</h4>
                                <p>Create single invoice for multiple shipments with detailed information.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Correction or Cancel Unpaid Invoices </h4>
                                <p>Correct or cancel unpaid invoices to manage billing errors or customers.</p>
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
                        <span>Supply Chain Management</span>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Manage Suppliers</h4>
                                <p>Find and manage vendors while building strong relationships. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Optimize Warehouse </h4>
                                <p>Optimize warehouse space to accommodate growing volumes of inventory. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Track Goods during Transportation </h4>
                                <p>Monitor goods in transit. Get valuable insight into shipment status and location. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Communication</h4>
                                <p>Enhance collaboration across partners to promote efficient operations. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Adopt New Technologies </h4>
                                <p>Integrate advanced SCM solutions to adapt faster, work smarter, and perform better. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Built-in Intelligence </h4>
                                <p>Automate tasks with in-built Copilot assistance to improve decision-making. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Enhance Profitability </h4>
                                <p>Reduce costs and boost margins. Increase turnover and productivity. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Improve Sustainability </h4>
                                <p>Use sustainability entries to track emissions and follow best practices. </p>
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
                        <span>Project Management</span>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Creation </h4>
                                <p>Create, schedule, and manage projects. Define the project scope and start processes.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Allocations </h4>
                                <p>Allocate resources based on their skills and experience to ensure project completion. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Time Sheet Management </h4>
                                <p>Track and record the time spent by team members on project tasks in real time. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Budget Management </h4>
                                <p>Set a realistic budget based on the project requirements. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Resource Consumptions </h4>
                                <p>Monitor resource consumption, identify bottlenecks, and optimize resource allocation. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Supplies </h4>
                                <p>Manage and track materials, equipment, and other supplies needed to complete the project.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project WIP Methods </h4>
                                <p>Estimate the financial value of the ongoing project using a general ledger. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Track Project Progress</h4>
                                <p>Access project progress based on different parameters and specifications.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Project Invoicing </h4>
                                <p>Generate and send invoices to clients for a project for multiple users. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Merge Duplicate Records </h4>
                                <p>Eliminate duplicate entries to improve data accuracy and ensure reliable reporting. </p>
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
                        <span>Inventory Management</span>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Master Management</h4>
                                <p>List and maintain key information of inventory with complete data.</p>
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
                                <p>Estimate the amount of materials, plan purchases, and ensure part availability.</p>
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
                                <p>Categorize items based on type, brand, or other criteria to classify items. </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Attributes </h4>
                                <p>Distribute attributes of inventory items and assign codes to find them easily. </p>
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
                                <p>Creates a catalog item to simplify the procurement process. </p>
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
                                <p>Perform physical stock counts to ensure data accuracy and identify discrepancies.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availability</h4>
                                <p>Check current stock levels to detect item availability and optimize sales.</p>
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
                                <p>Move stock between warehouses or locations efficiently.</p>
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
                                <p>Allocate specific inventory items to sales, purchase, or production needs.</p>
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
                                <p>Monitor the movement of your inventory using a serial or lot number.</p>
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
                        <span>Warehouse Management</span>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Receiving</h4>
                                <p>Inspect, verify, and record receiving goods in the warehouse.</p>
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
                                <p>Manage goods shipments from your warehouse for smooth movement.</p>
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
                                <p>Transfer items directly from receiving to shipping without storing them.</p>
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
                                <p>Organize your warehouse to place received items at designated storage locations.</p>
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
                                <p>Transport goods between locations to optimize storage space.</p>
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
                                <p>Select specific items from their storage locations to fulfill customer orders.</p>
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
                                <p>Track items and reduce manual data entry by utilizing barcode scanners.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Inventory Replenishment</h4>
                                <p>Maintain optimum inventory levels to meet customer demands.</p>
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
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Production Planning</h4>
                                <p>Plan, schedule production runs, and suggest changes based on requirements.</p>
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
                                <p>Analyze forecasting material needs and procure goods to optimize delivery.</p>
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
                                <p>Predict goods quantity and allocate resources to meet consumer demands.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Creation of Production Order</h4>
                                <p>Automatically create a planned production order from a sales order. </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Order Planning </h4>
                                <p>Leverage BOM (Bill of Material) to forecast sales and product demand.</p>
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
                                <p>Automate the supply chain by calculating materials and components.</p>
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
                                <p>Create supply chain data and request the purchase using the document. </p>
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
                                <p>Schedule production orders and ensure realistic completion.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="busines-service-list">
                              <div className="icons">
                                <i className="bi bi-check-lg"></i>
                              </div>
                              <div className="content">
                                <h4>Item Availability</h4>
                                <p>Check component availability and a specific item's influence on production.</p>
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
                                <p>Specify crucial information about items and create production orders with ease.</p>
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
                  <h3>Finance Management</h3>
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
                  <h3>Sales Management</h3>
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
                  <h3>Supply Chain Management </h3>
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
                  <h3>Project Management </h3>
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
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                          <p>Manages internal financial transactions without any errors.</p>
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
                          <p>Estimates future cash inflows, outflows, and financial position.</p>
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
                          <p>Plans and tracks financial resources to control expenses.</p>
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
                          <p>Track inventory value to forecast expenses and maintain inventory levels. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Multi-Companies Management</h4>
                          <p>Combines financial data from multiple entities to analyze finance. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Costs and Expense Allocation </h4>
                          <p>Allocate expenses and revenues accurately using a common journal. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Treasury </h4>
                          <p>Manage cash instruments, offering visibility and control over finance. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Accounts Receivable </h4>
                          <p>Tracks and manages incoming payments and settles customer accounts. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Accounts Payable </h4>
                          <p>Tracks and manages outgoing payments to suppliers and vendor partners. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Fixed Assets </h4>
                          <p>Manage and track long-term assets, including maintenance costs and insurance policies. </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                          <h4>Client management </h4>
                          <p>Manage your customer base, resolve queries, and increase customer satisfaction. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Quote </h4>
                          <p>Modify and send sales quotes to provide customers with detailed pricing. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Order </h4>
                          <p>Create sales orders and manage the sale of products or services to customers. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Sales Invoices </h4>
                          <p>Generate invoices for products or services customers have purchased. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Drop Shipments </h4>
                          <p>Fulfill customer orders by shipping products directly using a purchase order. </p>
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
                          <p>Process and manage returned items and ensure accurate inventory.</p>
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
                          <p>Connect sales requirements with warehouse activities to fulfill orders.</p>
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
                          <p>Plan and promise delivery dates to ensure smooth order fulfillment.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Generate Single Invoice</h4>
                          <p>Create single invoice for multiple shipments with detailed information.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Correction or Cancel Unpaid Invoices </h4>
                          <p>Correct or cancel unpaid invoices to manage billing errors or customers.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                          <h4>Manage Suppliers</h4>
                          <p>Find and manage vendors while building strong relationships. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Optimize Warehouse </h4>
                          <p>Optimize warehouse space to accommodate growing volumes of inventory. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Track Goods during Transportation </h4>
                          <p>Monitor goods in transit. Get valuable insight into shipment status and location. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Communication</h4>
                          <p>Enhance collaboration across partners to promote efficient operations. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Adopt New Technologies </h4>
                          <p>Integrate advanced SCM solutions to adapt faster, work smarter, and perform better. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Built-in Intelligence </h4>
                          <p>Automate tasks with in-built Copilot assistance to improve decision-making. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Enhance Profitability </h4>
                          <p>Reduce costs and boost margins. Increase turnover and productivity. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Improve Sustainability </h4>
                          <p>Use sustainability entries to track emissions and follow best practices. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                          <h4>Project Creation </h4>
                          <p>Create, schedule, and manage projects. Define the project scope and start processes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations </h4>
                          <p>Allocate resources based on their skills and experience to ensure project completion. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management </h4>
                          <p>Track and record the time spent by team members on project tasks in real time. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management </h4>
                          <p>Set a realistic budget based on the project requirements. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions </h4>
                          <p>Monitor resource consumption, identify bottlenecks, and optimize resource allocation. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies </h4>
                          <p>Manage and track materials, equipment, and other supplies needed to complete the project.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods </h4>
                          <p>Estimate the financial value of the ongoing project using a general ledger. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Track Project Progress</h4>
                          <p>Access project progress based on different parameters and specifications.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing </h4>
                          <p>Generate and send invoices to clients for a project for multiple users. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records </h4>
                          <p>Eliminate duplicate entries to improve data accuracy and ensure reliable reporting. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                          <p>List and maintain key information of inventory with complete data.</p>
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
                          <p>Estimate the amount of materials, plan purchases, and ensure part availability.</p>
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
                          <p>Categorize items based on type, brand, or other criteria to classify items. </p>
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes </h4>
                          <p>Distribute attributes of inventory items and assign codes to find them easily. </p>
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
                          <p>Creates a catalog item to simplify the procurement process. </p>
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
                          <p>Perform physical stock counts to ensure data accuracy and identify discrepancies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availability</h4>
                          <p>Check current stock levels to detect item availability and optimize sales.</p>
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
                          <p>Move stock between warehouses or locations efficiently.</p>
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
                          <p>Allocate specific inventory items to sales, purchase, or production needs.</p>
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
                          <p>Monitor the movement of your inventory using a serial or lot number.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                          <p>Inspect, verify, and record receiving goods in the warehouse.</p>
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
                          <p>Manage goods shipments from your warehouse for smooth movement.</p>
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
                          <p>Transfer items directly from receiving to shipping without storing them.</p>
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
                          <p>Organize your warehouse to place received items at designated storage locations.</p>
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
                          <p>Transport goods between locations to optimize storage space.</p>
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
                          <p>Select specific items from their storage locations to fulfill customer orders.</p>
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
                          <p>Track items and reduce manual data entry by utilizing barcode scanners.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Replenishment</h4>
                          <p>Maintain optimum inventory levels to meet customer demands.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                          <h4>Production Planning</h4>
                          <p>Plan, schedule production runs, and suggest changes based on requirements.</p>
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
                          <p>Analyze forecasting material needs and procure goods to optimize delivery.</p>
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
                          <p>Predict goods quantity and allocate resources to meet consumer demands.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order</h4>
                          <p>Automatically create a planned production order from a sales order. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning </h4>
                          <p>Leverage BOM (Bill of Material) to forecast sales and product demand.</p>
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
                          <p>Automate the supply chain by calculating materials and components.</p>
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
                          <p>Create supply chain data and request the purchase using the document. </p>
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
                          <p>Schedule production orders and ensure realistic completion.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availability</h4>
                          <p>Check component availability and a specific item's influence on production.</p>
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
                          <p>Specify crucial information about items and create production orders with ease.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#exampleModal"
                          className="btn-get-started scrollto"
                        >
                          <span>Let’s Get Started!</span>
                        </a>
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
                <h3>Switch to Microsoft Business Central Today! <br />Your Gateway to Immeasurable Success.</h3>
                <p>Simplify, automate, and succeed by leveraging the limitless capabilities of Business Central.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Switch Now!</span>
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
                <h2>What Makes Business Central ERP Stand Out?</h2>
                <h3>The modern features, unlimited AI capabilities, pure cloud-based deployment, and cost-effective per-user subscription licensing make this solution unique and powerful for SMBs.</h3>
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
                        AI-Powered <br /> Assistant
                      </h3>
                      <div className="overlay">
                        <p>Business Central comes embedded with Microsoft Copilot, which works as an AI assistant to help you with daily tasks. It helps you eliminate recurring tasks, leverage automation functionalities, and streamline diverse operations.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>Unified and <br />Modern Approach</h3>
                      <div className="overlay">
                        <p>Business Central ERP offers a centralized data repository that lets you access data of different solutions from anywhere and anytime. You can utilize all tools efficiently using an attractive user-interface and easy navigation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>Integration <br /> Capabilities</h3>
                      <div className="overlay">
                        <p>Microsoft Dynamics 365 offers strong integration capabilities with Business Central Extension technology. It lets you connect with different solutions of Microsoft Dynamics Ecosystem with a click.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>Cloud-enabled<br /> technology</h3>
                      <div className="overlay">
                        <p>The cloud empowers you to connect with the world instantly. It is cost-effective, very low maintenance, and offers great accessibility. Even so, it enables Business Central to receive automatic installation of updates and upgrades for free.</p>
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
                          <h3>Transform your business digitally!</h3>
                          <p>Implement Business Central and revolutionize your business to achieve goals, promote collaboration, and generate more revenue.</p>
                          <div className="new-btn new-btn-nn">
                            <a
                              href="/contact-us/"
                              className="btn-get-started-color"
                            >
                              <span>Avail Business Central Demo Today!</span>
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

      {/* <section className="new-style-bg" style={{ background: "#f7f7f7" }}>
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
      </section> */}

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
                <h2>Microsoft 365 Business Central Services</h2>
                <p>Explore our efficient, reliable, and cost-efficient services, specially curated for growing businesses.</p>
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
                  <p>Streamline and boost your business with a seamless implementation process.</p>
                  <div className="action-content">
                    <Link href="/dynamics-365-business-central-erp-system-implementation/">
                      <a>Unlock Growth!</a>
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
                  <h3>Migrate to Business Central</h3>
                  <p>Transform your business digitally by utilizing advanced tools to push growth.</p>
                  <div className="action-content">
                    <Link href="/dynamics-365-business-central-upgrade/">
                      <a>Switch to Tech!</a>
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
                  <p>Improve the existing processes and eliminate all future issues with reliable support.</p>
                  <div className="action-content">
                    <Link href="/dynamics-365-business-central-erp-support/">
                      <a>Revive Business!</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-style-bg" style={{ background: "#f7f7f7" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-8">
              <header className="section-header">
                <h2>Move to Business Central and Drive Digitalization</h2>
                <p>Moving to Microsoft Business Central can open up the doors of limitless opportunities and push your business towards sustainable growth.</p>
              </header>
            </div>
          </div>
          <div className="row g-5 pad2xyr">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Dynamics NAV to BC Upgrade</h3>
                  <p>Struggling with data silos, downtime, and system complexities? Go for a Dynamics NAV to BC upgrade to simplify processes, avail AI-enabled automation, and limitless scalability.</p>
                  <div className="price-btn-newx">
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-whits">Schedule a Free Demo</a>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-content">
                  <h3>Dynamics GP to BC Migration</h3>
                  <p>Dealing with limited support and customization intricacies? Opt for Dynamics GP to BC migration to eliminate complexities, centralize data, and customize your system as per requirements.</p>
                  <div className="price-btn-newx">
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-whits">Schedule a Free Demo</a>
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
              <p>Choose the plan that fits right to your business needs! </p>
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
            <h2>Dynamics 365 Business Central Pricing: Find the Best Plan</h2>
            <p>Take a look at Dynamics 365 Business Central Pricing and choose the perfect plan among Team Member, Essential, and Premium Licensing options. </p>
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
                <h3>Your Trusted Microsoft Dynamics 365 Business Central Partner of 300+ Global Businesses</h3>
                <p>Being a reliable and trusted Microsoft Dynamics 365 Gold Partners in Canada, we are helping businesses grow in fierce competition and find their true potential. </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Free Business Central Trial!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="left--side-title">
                <h2>Why Are Business Preferring Dynamics Square?</h2>
                <p>Companies choose us as a Dynamics 365 support partner due to reliable service, trust, competitive pricing, etc. Here are a few points that make us favorites:</p>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="right--side-pic right--side-pic-b">
                <Image
                  width={579}
                  height={376}
                  src="/img/ds-new-shape.png"
                  alt="ds-new-shape-logo"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/business-centric-solutions.png"
                    alt="business-centric-solutions"
                  />
                </div>
                <div className="rig">
                  <h3>Tailored Solutions, Built for You</h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/certified-consultants.png"
                    alt="certified-consultants"
                  />
                </div>
                <div className="rig">
                  <h3>Team of Dynamics 365 Experts</h3>
                  <p>With a team of 135+ Dynamics 365 consultants, we are available on your side to tackle any challenge and craft growth-oriented strategies for your business.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/sufficient-resources.png"
                    alt="sufficient-resources"
                  />
                </div>
                <div className="rig">
                  <h3>Best-in-class Infrastructure</h3>
                  <p>We have adequate resources and perfect infrastructure to empower businesses of all sizes achieve goals and grow with a rapid speed.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bc---soprt">
                <div className="lef">
                  <Image
                    width={57}
                    height={48}
                    src="/img/on-site-support.png"
                    alt="on-site-support"
                  />
                </div>
                <div className="rig">
                  <h3>Hands-On Support</h3>
                  <p>We offer on-site support for complex problems or interruptions to ensure your company gets back on track quickly and affordably.</p>
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

export default Index;
