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
import NavBar from '../../components/NavBar';
const Saless = () => {

  return (
    <>
     <Head>
      <title>Dynamics 365 for Sales|Dynamics Square CA</title>
        <meta
          name="description"
          content="Dynamics 365 for Sales is a cutting-edge cloud CRM software designed to improve customer relationships, drive revenue, and boost ROI. Get a free demo now."
        />
        <meta name="robots" content="noindex, nofollow" /> 
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-sales/"
        />
        <meta property="og:locale" content="CAD" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dynamics 365 Customer Engagement Partner Canada" />
        <meta property="og:description" content="Dynamics 365 for Sales is a cutting-edge cloud CRM software designed to improve customer relationships, drive revenue, and boost ROI. Get a free demo now." />
        <meta property="og:url" content="https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-sales/" />
        <meta property="og:site_name" content="Dynamics Square CA" />
        <meta property="og:image" content="https://www.dynamicssquare.ca/img/Sales-banner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_ca" />
        <meta name="twitter:title" content="Dynamics 365 Customer Engagement Partner Canada" />
        <meta name="twitter:description" content="Dynamics 365 for Sales is a cutting-edge cloud CRM software designed to improve customer relationships, drive revenue, and boost ROI. Get a free demo now." />
        <meta name="twitter:image" content="https://www.dynamicssquare.ca/img/Sales-banner.png" />
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
                "name": "dynamics 365 sales",
                "item": "https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-sales/"  
              }
            ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Microsoft's Dynamics 365 Sales",
                "description": "Microsoft's Dynamics 365 Sales (formerly, Dynamics CRM) is an AI-driven sales management application that helps you win new customers through teamwork and manage your day-to-day business operations through its modern customer relationship management (CRM) capabilities. Integrating preferred communication channels like Microsoft Teams to Dynamics 365 Sales, you can better connect sellers to customers, accelerate your revenue generation, and close sales faster.",
                "operatingSystem": "All",
                "applicationCategory": "CRM Software",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Dynamics 365 Sales Professional",
                    "price": "88.20",
                    "priceCurrency": "CAD"
                  },
                  {
                    "@type": "Offer",
                    "name": "Dynamics 365 Sales Enterprise",
                    "price": "128.90",
                    "priceCurrency": "CAD"
                  },
                  {
                    "@type": "Offer",
                    "name": "Dynamics 365 Sales Premium",
                    "price": "183.20",
                    "priceCurrency": "CAD"
                  }
                ],
                "url": "https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-sales/",
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

     
      <main>
        <section className="center-hero-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="hero-bnner-info text-center">
                  <div className="top-info">
                    <h1>Microsoft Dynamics 365 Sales</h1>
                    <span>Build stronger customer relationships, grow your business</span>
                    <p>Close more deals, manage customer interaction, optimize sales processes, and access real-time dashboards with Dynamics 365 Sales.</p>
                  </div>
                  <div className="top-info-img text-center">
                    <Image src="/img/Mirc-finace-banner.png" alt="c-erp-partner-banner" width={932} height={531} priority={true} />
                  </div>
                  <div className="bottom-info-cta">
                    <a data-bs-toggle="modal"
                      href="#exampleModal" className="btn">Let’s Get Started!</a>
                    <span>Drive end-to-end sales practices</span>
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
                <img src="/img/hero-p-shape.png" alt="hero-p-shape" width={1341} height={393} />
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
                  <h2>Dynamics 365 Sales: Drive Revenue and Accelerate Growth</h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="vide-s">
                 <Image src="/img/Mirc-finace-side-pic.png" alt="Mirc-finace-side-pic" width={527} height={364} />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="new-sol-con-side">
                 <p>Microsoft Dynamics 365 Sales is a robust cloud <a href="/solutions/microsoft-dynamics-crm/"><b>CRM solution</b></a> designed to streamline sales processes, enhance customer interactions, and drive revenue growth. It provides sales teams with the tools, like analytics, e-signature, and tracking, to effectively manage leads, opportunities, and accounts. This results in improved sales performance and productivity.</p>
                 <p>You can automate routine tasks, such as lead qualification and opportunity management, to improve sales efficiency. With Dynamics Sales, you can predict sales trends, optimize resource allocation, understand customer needs, and accelerate the sales cycle.</p>
                </div>
              </div>
            </div>

            <div className="row bg-new-callaction justify-content-center">
              <div className="col-lg-9">
                <div className="solution-new-caltoaction">
                  <h2>Are you tired of manual sales processes slowing down your team?</h2>
                  <p>Dynamics 365 Sales can automate repetitive tasks and boost productivity.</p>
                  <a data-bs-toggle="modal"
                      href="#exampleModal" className="btn bt-bg">Get in touch now!</a>
                </div>
                <div className="ffloting-pic">
                  <img src="/img/new-shape-call.png" alt="new-shape-call" width={404} height={192} />
                </div>
              </div>

            </div>


          </div>
        </section>
        

        <section id="section2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <header className="section-header-new">
                  <h2>Accelerate Growth and Drive Success with Dynamics 365 Sales</h2>
                  <p>Automate repetitive tasks, strengthen customer relationships, and prioritize high prospect leads with Dynamics 365 Sales.</p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-60.png" alt="Enhanced Sales Efficiency, Make Data-Driven Decision" width={40} height={40} />
                  <h3>Enhanced Sales Efficiency, Make Data-Driven Decision</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Optimize sales processes</span></li>
                    <li><i className="bi bi-check"></i><span>Close more deals faster</span></li>
                    <li><i className="bi bi-check"></i><span>Prioritize leads and opportunities</span></li>
                    <li><i className="bi bi-check"></i><span>Focus on qualified prospects</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-61.png" alt="Comprehensive Customer Engagement, Higher Satisfaction Level" width={40} height={40} />
                  <h3>Comprehensive Customer Engagement, Higher Satisfaction Level</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Exceed customer expectations</span></li>
                    <li><i className="bi bi-check"></i><span>Build lasting relationships</span></li>
                    <li><i className="bi bi-check"></i><span>Foster stronger connections</span></li>
                    <li><i className="bi bi-check"></i><span>Higher growth opportunities</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-62.png" alt="Sales Process Automation, Boost Productivity" width={40} height={40} />
                  <h3>Sales Process Automation, Boost Productivity</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Simplify repeatable sales processes</span></li>
                    <li><i className="bi bi-check"></i><span>Reduce burden of administrative tasks</span></li>
                    <li><i className="bi bi-check"></i><span>Automate workflows</span></li>
                    <li><i className="bi bi-check"></i><span>Generate meeting summaries</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-63.png" alt="Improved Task Management, Better Collaboration" width={40} height={40} />
                  <h3>Improved Task Management, Better Collaboration</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Prepare for more complex tasks</span></li>
                    <li><i className="bi bi-check"></i><span>Reduce data loss risk</span></li>
                    <li><i className="bi bi-check"></i><span>Stick to deadline</span></li>
                    <li><i className="bi bi-check"></i><span>Optimize work allocation</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-64.png" alt="Real-Time Pipeline Insights, Make Accurate and Fast Decisions" width={40} height={40} />
                  <h3>Real-Time Pipeline Insights, Make Accurate and Fast Decisions</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Deeper sales pipeline insight</span></li>
                    <li><i className="bi bi-check"></i><span>Track key performance indicators</span></li>
                    <li><i className="bi bi-check"></i><span>Predict revenue</span></li>
                    <li><i className="bi bi-check"></i><span>Identify areas for improvement</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-65.png" alt="Scale Your Business, Increase Revenue Potential" width={40} height={40} />
                  <h3>Scale Your Business, Increase Revenue Potential</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Reach to new market</span></li>
                    <li><i className="bi bi-check"></i><span>Get competitive edge</span></li>
                    <li><i className="bi bi-check"></i><span>Improve profitability</span></li>
                    <li><i className="bi bi-check"></i><span>Ensure long-term sustainability</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-66.png" alt="Improved Customer Interaction, Fast Query Resolution" width={40} height={40} />
                  <h3>Improved Customer Interaction, Fast Query Resolution</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Boost brand image</span></li>
                    <li><i className="bi bi-check"></i><span>Improve profit margin</span></li>
                    <li><i className="bi bi-check"></i><span>Ensure repeat business</span></li>
                    <li><i className="bi bi-check"></i><span>Foster trust</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-67.png" alt="Embedded Copilot, Intelligent Assistance" width={40} height={40} />
                  <h3>Embedded Copilot, Intelligent Assistance</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Achieve better results</span></li>
                    <li><i className="bi bi-check"></i><span>Deliver tailored customer experience</span></li>
                    <li><i className="bi bi-check"></i><span>Gain detailed data analysis</span></li>
                    <li><i className="bi bi-check"></i><span>Make data-driven decisions</span></li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </section>


        <section id="section3">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <header className="section-header-new">
                  <h2>Boost Sales Productivity with Cutting-Edge Features</h2>
                  <p>Improve your sales team productivity, automate workflow, predict market trends, and make data-driven decisions with Dynamics 365 Sales.</p>
                </header>
              </div>
            </div>

            <div className="row m-tt-30">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
                <div className="d-flex align-items-start new-solution-tab">
                  <div className="nav flex-column nav-pills me-3" id="solu-pills-tab">
                    <div className="nav-link active" id="solution-one-tab" data-bs-toggle="pill" data-bs-target="#solution-one" ><h3>Collaboration Across Teams</h3></div>
                    <div className="nav-link" id="solution-two-tab" data-bs-toggle="pill" data-bs-target="#solution-two"><h3>Microsoft Copilot Integration</h3></div>
                    <div className="nav-link" id="solution-three-tab" data-bs-toggle="pill" data-bs-target="#solution-three"><h3>AI-Driven Lead Scoring</h3></div>
                    <div className="nav-link" id="solution-four-tab" data-bs-toggle="pill" data-bs-target="#solution-four"><h3>Adaptive Sales Guidance</h3></div>
                    <div className="nav-link" id="solution-five-tab" data-bs-toggle="pill" data-bs-target="#solution-five"><h3>Predictive Analytics</h3></div>
                    <div className="nav-link" id="solution-six-tab" data-bs-toggle="pill" data-bs-target="#solution-six"><h3>Automated Sales Processes</h3></div>
                    <div className="nav-link" id="solution-seven-tab" data-bs-toggle="pill" data-bs-target="#solution-seven"><h3>Customer Data Unification</h3></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                <div className="tabs-ss">
                  <div className="tab-content" id="solu-pills-tabContent">
                    <div className="tab-pane fade show active" id="solution-one">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Cross-Department Collaboration
                            </div>
                            <p>Enhances collaboration between sales, marketing, and service teams.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Shared Customer Insights
                            </div>
                            <p>Improve communication and alignment with customer needs across departments.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Integrated Communication Tools
                            </div>
                            <p>Utilize platforms like Microsoft Teams to streamline information sharing.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Real-Time Collaboration
                            </div>
                            <p>Enable real-time collaboration for quicker decision-making and problem-solving.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Unified Sales Strategies
                            </div>
                            <p>Create a cohesive sales approach across departments to maximize results.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Enhanced Team Productivity
                            </div>
                            <p>Increase overall team efficiency and productivity through better collaboration.</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-two">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Automated Task Management
                            </div>
                            <p>Automates repetitive tasks like email drafting and meeting summaries.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Real-Time Insights
                            </div>
                            <p>Provide real-time insights to inform sales decisions and actions</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Enhanced Meeting Preparation
                            </div>
                            <p>Generate comprehensive meeting summaries to optimize preparation and follow-up.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              AI-Powered Follow-Up
                            </div>
                            <p>Improve follow-up effectiveness through AI-powered suggestions.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Security and Compliance
                            </div>
                            <p>Protect sensitive customer data with robust security measures.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Cross-Platform Data Syncing
                            </div>
                            <p>Integrate with existing business applications for a seamless workflow.</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-three">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Prioritize High-Value Leads
                            </div>
                            <p>Identify high-potential leads to prioritize who is more likely to convert</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Dynamic Scoring Adjustments
                            </div>
                            <p>Real-time updates to stay focused on high-potential prospects.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Increased Conversion Rates
                            </div>
                            <p>Increase sales conversion rates by focusing on qualified leads.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Data-Driven Decision Making
                            </div>
                            <p>Make data-driven decisions to optimize sales strategies.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Customization of Scoring Criteria
                            </div>
                            <p>Customize scoring models to fit your unique sales processes and criteria.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Improved Sales Forecasting
                            </div>
                            <p>Predict accurate revenue and set realistic sales goals based on lead scores.</p>
                          </div>
                        </div>
                        
                       
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-four">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Contextual Sales Advice
                            </div>
                            <p>Provide actionable strategies and insights based on the current sales stage.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Budget Control
                            </div>
                            <p>Prevent overspending by <b>monitoring expenditures</b> against budgeted amounts.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Automated Sales Sequences
                            </div>
                            <p>Automate routine sales tasks to increase efficiency.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Proactive Opportunity Management
                            </div>
                            <p>Alerts reps about potential risks and opportunities proactively.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Personalized Selling Strategies
                            </div>
                            <p>Customizes sales approaches based on customer data.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Sales Playbooks
                            </div>
                            <p>Leverage pre-defined sales best practices for improved outcomes.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              AI-Driven Next Best Actions
                            </div>
                            <p>Recommend the most effective next steps based on AI analysis.</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-five">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Data-Driven Forecasting
                            </div>
                            <p>Uses historical and real-time data for accurate sales predictions.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Risk Identification 
                            </div>
                            <p>Identify potential risks in the pipeline that could impact revenue.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Scenario Modeling
                            </div>
                            <p>Model different sales scenarios, like <b>"what-if"</b> analysis for strategic planning.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Goal Tracking
                            </div>
                            <p>Track progress towards sales targets and adjust strategies.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Predictive Insights
                            </div>
                            <p>Anticipate future market trends to stay ahead of competition.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Performance Benchmarking
                            </div>
                            <p>Compare performance to industry benchmarks for improvement.</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-six">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Streamlined Workflow Automation
                            </div>
                            <p>Automate tasks like follow-ups to save time and resources.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Sales Process Standardization
                            </div>
                            <p>Ensure consistent sales processes across the organization.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Reduced Manual Errors
                            </div>
                            <p>Minimizes human errors and improves data accuracy through automation.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Increased Sales Efficiency
                            </div>
                            <p>Increase sales team productivity and efficiency by reducing manual work.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Improved Lead Management
                            </div>
                            <p>Effectively manage and nurture leads through automation.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Enhanced Productivity
                            </div>
                            <p>Free up sales reps to focus on building relationships.</p>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-seven">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Centralized Customer Information
                            </div>
                            <p>Consolidate customer information into a single source of truth.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              360-Degree Customer View
                            </div>
                            <p>Gain a comprehensive view of each customer for better understanding.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Improved Data Accuracy
                            </div>
                            <p>Improve data quality and consistency across the organization.</p>
                          </div>
                        </div>
                       
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Real-Time Data Access
                            </div>
                            <p>Access customer data in real-time for timely decisions.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Enhanced Customer Segmentation
                            </div>
                            <p>Create targeted customer segments for personalized campaigns.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Simplified Data Management
                            </div>
                            <p>Efficiently manage and maintain customer data.</p>
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


        <section className="call-bg-gray">
          <div className="container">
            <div className="row po-realtive">
              <div className="col-lg-7">
                <div className="call-to-action-three">
                  <h2>Want to improve your sales forecasting accuracy?</h2>
                  <p>Dynamics 365 Sales comes with built-in Copilot that provides advanced analytics and insights to help you predict sales trends.</p>
                  <a  data-bs-toggle="modal"
                      href="#exampleModal" className="btn bt-bg">Schedule a personalized demo</a>
                  <div className="im-abso">
                    <img src="/img/frame-shape.png" alt="frame-shape" width={650} height={736} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section >

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Why is Dynamics 365 Sales the Best CRM Solution?</h2>
                  <p>Dynamics 365 Sales enables you to identify high opportunity leads, automate routine tasks, reduce data loss risk, and optimize the sales process.</p>
                </header>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Advanced Automation Capabilities</h3>
                  <p>Dynamics 365 Sales comes with in-built Copilot that provides AI-driven insights to predict customer needs, identify high-priority leads, and automate routine tasks.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Comprehensive Relationship Management</h3>
                  <p>Dynamics 365 Sales aggregates data from various touchpoints and provides a 360-degree view of customers to understand customer behaviors, preferences, and histories.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Customizable as Per Needs</h3>
                  <p>Dynamics 365 Sales allows businesses to tailor the solution as per specific needs, like custom dashboards, workflows, or integrations with third-party tools.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Integration with Dynamics 365 Ecosystem</h3>
                  <p>It integrates with other Microsoft solutions such as Teams, Power BI, and Dynamics 365, ensuring easy data access and smooth customer relationship management.</p>
                </div>
              </div>
            </div>

          </div>



        </section>


        <section id="section4" className="section">

          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <header className="section-header-new">
                  <h2>Get Comprehensive Services for Dynamics 365 Sales</h2>
                  <p>Tailor business needs, troubleshoot problems, integrate with existing systems, and get the most out of your investment.</p>
                </header>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a href="/services/dynamics-365-implementation/"><Image src="/img/serv-img-1.jpg" alt="Implementation" width={826} height={368} /></a>
                  </div>
                  <div className="info-card">
                    <h3>Dynamics 365 Sales Implementation</h3>
                    <p>Get tailored implementation service and expert guidance throughout the journey.</p>
                    <div className="act-bb">
                      <a href="/services/dynamics-365-implementation/">Experience Seamless Transition! <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a href="/services/dynamics-365-upgrade/"><Image src="/img/serv-img-2.jpg" alt="Upgrade Services" width={829} height={368} /></a>
                  </div>
                  <div className="info-card">
                    <h3>Upgrade to D365 Sales</h3>
                    <p>Leverage latest innovations and Improve performance and efficiency with upgradation.</p>
                    <div className="act-bb">
                      <a href="/services/dynamics-365-upgrade/">Upgrade Today! <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a href="/services/dynamics-365-support/" ><Image src="/img/serv-img-3.jpg" alt="Support Services" width={827} height={368} /></a>
                  </div>
                  <div className="info-card">
                    <h3>Get Hand-on Support</h3>
                    <p>Access expert assistance, resolve issues quickly, and get personalized support.</p>
                    <div className="act-bb">
                      <a href="/services/dynamics-365-support/" >Get Expert Help! <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </section>







        <section id="section5">

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Maximize Your Sales Potential with Dynamics Square</h2>
                  <p>Dynamics Square, a trusted Microsoft Solutions Partner in <b>Ontario</b>, has deep expertise in D365 Sales and helps you achieve your sales goals. Here is why business chose us:</p>
                </header>
              </div>
            </div>


            <div className="row g-3">
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                  <Image src="/img/icon-inner-68.png" alt="micrsoft-nva-ds" width={48} height={48} />
                  <h3>End-to- end Solution</h3>
                  <p>We provide end-to-end tailored solutions for implementation, upgrade, or support to empower your sales team.</p>

                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                <Image src="/img/icon-inner-69.png" alt="micrsoft-nva-ds" width={48} height={48} />
                  <h3>Certified Implementation Methodology</h3>
                  <p>We follow a proven and structured approach certified by Microsoft that is effective, efficient, and consistent for Dynamics 365 Sales deployments.</p>
                  <div className="bg-img">
                    <img src="/img/shpe-11.png" alt="shape" width={650} height={736} />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                <Image src="/img/icon-inner-70.png" alt="micrsoft-nva-ds" width={48} height={48} />
                  <h3>Hands-on Support</h3>
                  <p>Our <b>150+</b> consultants provide real-time assistance and guidance throughout the process, resolve your queries, and ensure hassle-free troubleshooting.</p>
                  <div className="img-flips">
                    <img src="/img/shpe-11.png" alt="shape" width={650} height={736} />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                <Image src="/img/icon-inner-71.png" alt="micrsoft-nva-ds" width={48} height={48} />
                  <h3>24*7 Availability</h3>
                  <p>Our team is always available to assist you to ensure uninterrupted business operations and quick issue resolution.</p>

                </div>
              </div>
            </div>

          </div>



        </section>




        <section style={{ background: '#f5f5f5' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Close More Deals Faster with Microsoft Copilot for Sales</h2>
                  <p>Microsoft Copilot for Sales helps businesses streamline tasks like data entry, follow-up scheduling, and report generation to work smarter.</p>
                </header>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6 d-flex">
                <div className="card-seven">
                  {/* <div className="card-top-pic">
                    <img src="/img/micrsoft-nva-ds.png" alt="micrsoft-nva-ds" />
                  </div> */}
                  <h3>Accelerate Sales Cycles</h3>
                  <p>Leverage AI-driven insights to identify opportunities, create personalized pitches, and close deals faster.</p>
                  <a href="#exampleModal" data-bs-toggle="modal" className="btn bt-bg">Sell Smarter, Faster</a>
                  <div className="bg-r-img">
                    <img src="/img/micrsoft-nva-ds-bott.png" alt="micrsoft-nva-ds-bott" width={144} height={144} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="card-seven card-w">
                  {/* <div className="card-top-pic">
                    <img src="/img/micrsoft-nva-ds.png" alt="micrsoft-nva-ds" />
                  </div> */}
                  <h3>Enhance Customer Relationships</h3>
                  <p>Understand customer needs, increase customer satisfaction, and deliver personalized experiences that drive sales.</p>
                  <a href="#exampleModal" data-bs-toggle="modal" className="btn bt-bg">Close More Deals!</a>
                  <div className="bg-r-img">
                    <img src="/img/micrsoft-nva-ds-bott.png" alt="micrsoft-nva-ds-bott" width={144} height={144} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section6"  className="pricing pricing-colo">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <header className="section-header-new">
                  <h2>Dynamics 365 Sales Pricing: <br/>Choose the Best License</h2>
                  <p>There are multiple Dynamics 365 Sales pricing options, and you can choose one according to your requirement. </p>
                </header>
              </div>
            </div>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 d-flex">
                <div className="box box-999">
                  <h3>
                  Dynamics 365 Sales Professional
                  </h3>
                  <p>From</p>
                  <div className="price">
                  $88.20(CAD)<span>user/month</span>
                  </div>
                 <p>Core sales force automation and Microsoft 365 integration</p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="box box-999">
                  <h3>
                  Dynamics 365 Sales Enterprise Edition
                  </h3>
                  <p>From</p>
                  <div className="price">
                  $128.90(CAD)<span>user/month</span>
                  </div>
                 <p>Industry-leading sales force automation with contextual insights and advanced customization capabilities</p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="box box-999">
                  <h3>
                  Dynamics 365 Sales Premium
                  </h3>
                  <p>From</p>
                  <div className="price">
                  $183.20(CAD)<span>user/month</span>
                  </div>
                  <p>Dynamics 365 Sales Enterprise plus prebuilt customizable intelligence solutions for sellers and managers</p>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="price-btn d-flex justify-content-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                   className="btn bt-bg">Get Started Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solution-faq faq" style={{marginTop:'-40px'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <header className="section-header-new text-center">
                  <h2>Got any questions About <br/>Dynamics 365 Sales </h2>
                  <p>Click through to our FAQ for the best answers!</p>
                </header>
              </div>
            </div>
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
                    >Are Dynamics 365 sales the same as CRM?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, Dynamics 365 Sales is a CRM solution. It's specifically designed for sales teams to manage customer interactions, opportunities, and sales processes.</p>
                     
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
                    >What are the solution sales of MS Dynamics 365?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Solution sales for MS Dynamics 365 involves selling the software and its related services to businesses. This includes understanding customer needs, demonstrating the software's value, and providing implementation and support solutions.</p>
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
                    >What is the difference between Dynamics 365 sales and customer engagement?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Sales focuses specifically on sales processes and customer interactions. Customer engagement is a broader term encompassing sales, marketing, and <a href="/solutions/microsoft-dynamics-365-customer-service/"><b>customer service</b></a> activities. It provides a holistic view of the customer’s journey.</p>
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
                    >What are the stages of the Dynamics 365 Sales process?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The typical stages in Dynamics 365 Sales include lead management, opportunity qualification, proposal creation, order processing, and customer relationship management. These stages can be customized to fit specific business needs.</p>
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
                    >What is Dynamics 365 Sales used for?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist6"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Sales is used to manage and nurture leads, track sales opportunities, automate sales processes, improve sales forecasting, and gain insights into customer behavior to drive sales growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
      
    </>
  );
};

export default Saless;
