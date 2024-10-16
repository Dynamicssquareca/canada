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
const MicrosoftDynamics365FieldServiceNew = () => {

  return (
    <>
       <Head>
      <title>Microsoft Dynamics 365 Field Service: AI-Enabled Service Tool</title>

        <meta
          name="description"
          content="Explore Dynamics 365 for Field Service and Transform your field services to deliver customer-preferred end-to-end field service. Contact support for more info."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-field-service/"
        />
        <meta property="og:locale" content="CAD" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Microsoft Dynamics 365 Field Service: AI-Enabled Service Tool" />
        <meta property="og:description" content="Explore Dynamics 365 for Field Service and Transform your field services to deliver customer-preferred end-to-end field service. Contact support for more info." />
        <meta property="og:url" content="https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-field-service/" />
        <meta property="og:site_name" content="Dynamics Square CA" />
        <meta property="og:image" content="https://www.dynamicssquare.ca/img/field-service-new-banner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_ca" />
        <meta name="twitter:title" content="Microsoft Dynamics 365 Field Service: AI-Enabled Service Tool" />
        <meta name="twitter:description" content="Explore Dynamics 365 for Field Service and Transform your field services to deliver customer-preferred end-to-end field service. Contact support for more info." />
        <meta name="twitter:image" content="https://www.dynamicssquare.ca/img/field-service-new-banner.png" />
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
                "name": "dynamics 365 field service",
                "item": "https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-field-service/"  
              }
            ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Microsoft Dynamics 365 Field Service",
              "description": "Dynamics 365 for Field Service helps you become more proactive. With this field service solution, employees can attain better response times, accurate data, effective communication, and less hectic collaboration. It uses real-time data insights for a highly connected field service experience.",
              "operatingSystem": "All",
              "applicationCategory": "CRM Software",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Dynamics 365 Field Service",
                  "price": "128.90",
                  "priceCurrency": "CAD"
                }
              ],
              "url": "https://www.dynamicssquare.ca/solutions/microsoft-dynamics-365-field-service/",
              "publisher": {
                "@type": "Organization",
                "name": "Dynamicssquare CA",
                "url": "https://www.dynamicssquare.ca/"
              }
            })
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
                    <h1>Microsoft Dynamics 365 Field Service </h1>
                    <span>Smart Scheduling, Seamless Service, Satisfied Customers</span>
                    <p>Increase field agent’s productivity, optimize resource schedules, ensure proactive maintenance, and improve the first-time fix rate with Dynamics 365 Field Service. </p>
                  </div>
                  <div className="top-info-img text-center">
                    <Image src="/img/field-service-new-banner.png" alt="field-service-new-banner" width={913} height={531} priority={true} />
                  </div>
                  <div className="bottom-info-cta">
                    <a data-bs-toggle="modal"
                      href="#exampleModal" className="btn">Let’s Get Started!</a>
                    <span>Drive connected and collaborated field service</span>
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
                  <h2>Microsoft Dynamics 365 Field Service – Streamlines On-Site Service Delivery </h2>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="vide-s">
                 <Image src="/img/field-service-side-pic.png" alt="field-service-side-pic" width={640} height={355} />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="new-sol-con-side">
                 <p>Dynamics 365 Field Service is a comprehensive solution within the <a href="/solutions/microsoft-dynamics-365/"><b>Microsoft Dynamics 365</b></a> suite. It is designed to streamline and optimize field service operations, like asset-routing for businesses of all sizes. The solution comes with capabilities like advance automation, work order management, enhanced tracking, resource management, and scheduling. This ensures the right technicians are dispatched at the right time with the right skills and tools. </p>
                 <p>Field Service software comes with an integrated toolset that helps organizations in a time-sensitive service aspect while offering an optimal level of customer satisfaction. By using the solution, businesses can track their field technicians, schedule service appointments, track service history, improve invoice accuracy, allocate resources and improve overall customer satisfaction. </p>
                 <p>D365 Field Service allows businesses to provide faster and more efficient service, reducing customer wait times and increasing first-time fix rates. Businesses can also ensure compliance with industry regulations and standards. </p>
                </div>
              </div>
            </div>

            <div className="row bg-new-callaction justify-content-center">
              <div className="col-lg-9">
                <div className="solution-new-caltoaction">
                  <h2>Having difficulty analyzing and improving technician performance? </h2>
                  <p>Dynamics 365 Field Service offers advanced reporting and real-time dashboards for actionable insights, improving performance. </p>
                  <a data-bs-toggle="modal"
                      href="#exampleModal" className="btn bt-bg">Schedule a demo! </a>
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
                  <h2>Maximizing Efficiency with Dynamics 365 Field Service Benefits </h2>
                  <p>Improve customer satisfaction, increase service agent productivity, enhance decision-making, and improve resource utilization with D365 Field Service. </p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-60.png" alt="Optimized Resource Scheduling " width={40} height={40} />
                  <h3>Optimized Resource Scheduling </h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Reduced rescheduled appointments </span></li>
                    <li><i className="bi bi-check"></i><span>Automatically adjust schedules </span></li>
                    <li><i className="bi bi-check"></i><span>Accommodate last-minute changes </span></li>
                    <li><i className="bi bi-check"></i><span>Increase technician efficiency </span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-61.png" alt="Enhanced Customer Experienc" width={40} height={40} />
                  <h3>Enhanced Customer Experienc</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Real-time appointment visibility </span></li>
                    <li><i className="bi bi-check"></i><span>Automated appointment status notifications </span></li>
                    <li><i className="bi bi-check"></i><span>Track technician’s arrival </span></li>
                    <li><i className="bi bi-check"></i><span>Reduce waiting times</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-62.png" alt="Proactive Maintenance " width={40} height={40} />
                  <h3>Proactive Maintenance </h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Get real-time data </span></li>
                    <li><i className="bi bi-check"></i><span>Monitor equipment condition </span></li>
                    <li><i className="bi bi-check"></i><span>Automate maintenance requests </span></li>
                    <li><i className="bi bi-check"></i><span>Extend asset lifespan </span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-63.png" alt="Improved First-Time Fix Rate " width={40} height={40} />
                  <h3>Improved First-Time Fix Rate </h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Access to service history </span></li>
                    <li><i className="bi bi-check"></i><span>Support mixed reality tools </span></li>
                    <li><i className="bi bi-check"></i><span>Reduce operational cost </span></li>
                    <li><i className="bi bi-check"></i><span>Reduce downtime </span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-64.png" alt="Route Optimization, Reduce Travel Time" width={40} height={40} />
                  <h3>Route Optimization, Reduce Travel Time</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Optimize route </span></li>
                    <li><i className="bi bi-check"></i><span>Minimize fuel consumption </span></li>
                    <li><i className="bi bi-check"></i><span>Efficient technician scheduling </span></li>
                    <li><i className="bi bi-check"></i><span>Reduce unnecessary travel </span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-65.png" alt="Accurate Arrival Times" width={40} height={40} />
                  <h3>Accurate Arrival Times</h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Track real-time technician locations </span></li>
                    <li><i className="bi bi-check"></i><span>Accurate estimated arrival times </span></li>
                    <li><i className="bi bi-check"></i><span>Get traffic updates </span></li>
                    <li><i className="bi bi-check"></i><span>Notify arrival times changes </span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-66.png" alt="Technician Management " width={40} height={40} />
                  <h3>Technician Management </h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Faster issue resolution </span></li>
                    <li><i className="bi bi-check"></i><span>Identify technicians with intended skills </span></li>
                    <li><i className="bi bi-check"></i><span>Get technical assistance </span></li>
                    <li><i className="bi bi-check"></i><span>Complete more service calls </span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/icon-inner-67.png" alt="Manage Follow-Up " width={40} height={40} />
                  <h3>Manage Follow-Up </h3>
                  <ul>
                    <li><i className="bi bi-check"></i><span>Easily schedule follow-up tasks </span></li>
                    <li><i className="bi bi-check"></i><span>Provide timely attention </span></li>
                    <li><i className="bi bi-check"></i><span>Identify upsell and cross-sell opportunities </span></li>
                    <li><i className="bi bi-check"></i><span>Improve service quality </span></li>
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
                  <h2>Must-Have Features for Enhanced Agent Performance</h2>
                  <p>Customize work orders, adjust schedules in real-time, and monitor equipment with IoT integration with Dynamics Field Service. </p>
                </header>
              </div>
            </div>

            <div className="row m-tt-30">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
                <div className="d-flex align-items-start new-solution-tab">
                  <div className="nav flex-column nav-pills me-3" id="solu-pills-tab">
                    <div className="nav-link active" id="solution-one-tab" data-bs-toggle="pill" data-bs-target="#solution-one" ><h3>Work Order Management</h3></div>
                    <div className="nav-link" id="solution-two-tab" data-bs-toggle="pill" data-bs-target="#solution-two"><h3>Resource Scheduling and Dispatch</h3></div>
                    <div className="nav-link" id="solution-three-tab" data-bs-toggle="pill" data-bs-target="#solution-three"><h3>Mobile App for Field Technicians </h3></div>
                    <div className="nav-link" id="solution-four-tab" data-bs-toggle="pill" data-bs-target="#solution-four"><h3>IoT Integration and Predictive Maintenance </h3></div>
                    <div className="nav-link" id="solution-five-tab" data-bs-toggle="pill" data-bs-target="#solution-five"><h3>Inventory Managemen</h3></div>
                    <div className="nav-link" id="solution-six-tab" data-bs-toggle="pill" data-bs-target="#solution-six"><h3>Service Agreements and Contracts </h3></div>
                   
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
                              Automated Work Order Generation 
                            </div>
                            <p>Create work orders automatically from various triggers. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Work Order Lifecycle Tracking 
                            </div>
                            <p>Monitor work order progress from creation to completion. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Work Order Templates 
                            </div>
                            <p>Standardize work orders with predefined templates. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Task and Subtask Management 
                            </div>
                            <p>Break down complex work orders into smaller tasks. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Priority and Status Indicators 
                            </div>
                            <p>Prioritize and track work order status effectively. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Service Task Assignments 
                            </div>
                            <p>Assign tasks to technicians based on expertise and availability. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Work Order Customization 
                            </div>
                            <p>Tailor work orders to fit specific business needs. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Work Order Escalation Process 
                            </div>
                            <p>Address high-priority work orders promptly. </p>
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
                              Dynamic Scheduling Board 
                            </div>
                            <p>Visualize technician schedules, assignments, and availability. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Drag-and-Drop Scheduling Interface 
                            </div>
                            <p>Easily assign or reassign jobs to technicians. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Technician Skill Matching 
                            </div>
                            <p>Match work orders to technicians based on skills. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Proximity-Based Technician Dispatch 
                            </div>
                            <p>Dispatch technicians based on their proximity to the job site. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Real-Time Schedule Adjustments 
                            </div>
                            <p>Adjust schedules in real time to accommodate emergency requests. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Multi-Resource Scheduling 
                            </div>
                            <p>Schedule multiple technicians, equipment, or vehicles required for a single job. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Capacity Planning and Forecasting 
                            </div>
                            <p>Plan resource capacity and forecast future workloads. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Automated Schedule Optimization 
                            </div>
                            <p>Optimize schedules using AI-driven algorithms. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Overtime and Shift Scheduling 
                            </div>
                            <p>Manage technician shifts and overtime to minimize overtime. </p>
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
                              Offline Functionality 
                            </div>
                            <p>Access work orders, customer information, and other critical data offline. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Real-Time Work Order Updates 
                            </div>
                            <p>Receive real-time updates on work orders. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              GPS-Enabled Route Optimization 
                            </div>
                            <p>Get optimized routes for navigation to reach the job sites quickly. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Push Notifications and Alerts 
                            </div>
                            <p>Receive notifications for assignments and updates. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Mobile Signature Capture 
                            </div>
                            <p>Capture signatures directly on the mobile device. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Parts and Equipment Lookup 
                            </div>
                            <p>Search for parts and equipment availability directly from the app. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Mobile Time Logging 
                            </div>
                            <p>Log in time spent on tasks, ensuring accurate labor hours.  </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Photo and Video Documentation 
                            </div>
                            <p>Capture visual evidence of work to show service is performed. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Interactive Customer Forms 
                            </div>
                            <p>Fill out and submit forms directly from the app.  </p>
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
                              IoT Sensor Integration 
                            </div>
                            <p>Integrate with IoT sensors for equipment monitoring. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Real-Time Equipment Monitoring 
                            </div>
                            <p>Monitor equipment performance with real-time data on performance metrics. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Automated Maintenance Alerts 
                            </div>
                            <p>Trigger maintenance alerts based on IoT data. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Predictive Maintenance Scheduling 
                            </div>
                            <p>Ensure equipment is serviced before breakdown with schedule maintenance. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Anomaly Detection Algorithms 
                            </div>
                            <p>Detect anomalies in IoT data for early intervention. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Remote Diagnostics 
                            </div>
                            <p>Perform diagnostics remotely to reduce on-site visits. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Proactive Service Scheduling 
                            </div>
                            <p>Ensure equipment works in optimal condition with proactive schedule service. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              IoT Data Analytics 
                            </div>
                            <p>Get insights into equipment performance, usage patterns, and maintenance needs. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Condition-Based Maintenance Triggers 
                            </div>
                            <p>Trigger maintenance based on specific conditions to prevent failures. </p>
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
                              Real-Time Inventory Tracking 
                            </div>
                            <p>Monitor inventory levels across locations to ensure availability. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Parts Availability Check 
                            </div>
                            <p>Check parts availability before scheduling jobs, reducing delay risk. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Warehouse Location Mapping 
                            </div>
                            <p>Track parts storage locations to enable quick retrieval. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Automated Inventory Replenishment 
                            </div>
                            <p>Automatically reorder parts and materials to ensure optimal levels. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Inventory Usage Reporting 
                            </div>
                            <p>Generate reports on inventory usage to plan future inventory needs. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Return Merchandise Authorization (RMA) Management 
                            </div>
                            <p>Manage returns and warranty claims to proceed with replacement or refund. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Inventory Cost Tracking 
                            </div>
                            <p>Track inventory costs to track inventory expenses. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Inventory Reconciliation Tools 
                            </div>
                            <p>Reconcile inventory levels to ensure accurate inventory records. </p>
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
                              Contract Creation and Management
                            </div>
                            <p>Create and manage service agreements. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Service Level Agreement (SLA) Tracking 
                            </div>
                            <p>Monitor and enforce SLAs to prevent breaches. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Warranty and Coverage Details 
                            </div>
                            <p>Track warranties and coverage to provide appropriate service. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Contract Renewal Reminders 
                            </div>
                            <p>Send renewal reminders to maintain continuous service. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Automated Billing and Invoicing 
                            </div>
                            <p>Automate billing and invoicing to reduce the risk of errors. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Prepaid Service Bundles 
                            </div>
                            <p>Offer prepaid service bundles to improve cash flow. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Contract Compliance Monitoring 
                            </div>
                            <p>Ensure that all service activities are compliant with contract terms. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Recurring Service Scheduling 
                            </div>
                            <p>Automatically schedule recurring services, ensuring consistent service delivery.  </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check"></i>
                              Service Agreement Reporting 
                            </div>
                            <p>Generate detailed reports on service agreements to optimize opportunities. </p>
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
                  <h2>Are you losing out on contract renewals and customer retention? </h2>
                  <p>Automate contract renewals and manage service agreements seamlessly to prevent breach of contract. </p>
                  <a  data-bs-toggle="modal"
                      href="#exampleModal" className="btn bt-bg">Get Field Service Now! </a>
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
                  <h2>Why Dynamics 365 Field Service Outperforms Other Solutions? </h2>
                  <p>Microsoft Dynamics 365 Field Service allows businesses to optimize their operations, improve customer satisfaction, and drive business growth. </p>
                </header>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Comprehensive End-to-End Management </h3>
                  <p>Dynamics 365 Field Service offers a complete solution, like work order creation, resource scheduling, dispatch, and post-service follow-up. </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Optimized Resource Scheduling </h3>
                  <p>Reduces travel time and costs by dispatching the right technician with the right skills at the right time. </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Real-Time Mobile Capabilities </h3>
                  <p>Technicians can update job statuses using smart phones on the go and resolve issues faster, resulting in higher first-time fix rates with mobile app access. </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 d-flex">
                <div className="card-four">
                  <h3>Proactive Maintenance with IoT Integration </h3>
                  <p>Dynamics 365 Field Service integrates seamlessly with IoT devices, enabling proactive maintenance by monitoring equipment in real time. </p>
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
                  <h2>Optimize Your Application with Expert Ed-to-End Services </h2>
                  <p>Explore the wide range of services that are reliable, world-class quality, and competitive pricing. </p>
                </header>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a data-bs-toggle="modal" href="#exampleModal"><Image src="/img/serv-img-1.jpg" alt="Implementation" width={826} height={368} /></a>
                  </div>
                  <div className="info-card">
                    <h3>Dynamics 365 Field Service Implementation </h3>
                    <p>Improve service delivery and enhance user proficiency with tailored implementation. </p>
                    <div className="act-bb">
                      <a data-bs-toggle="modal" href="#exampleModal">Implement Today!  <i className="bi bi-arrow-right"></i></a>
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
                    <h3>Upgrade to Dynamics 365 Field Service </h3>
                    <p>Access the latest features and improve functionality to maintain a competitive edge. </p>
                    <div className="act-bb">
                      <a href="/services/dynamics-365-upgrade/">Upgrade Instantly!   <i className="bi bi-arrow-right"></i></a>
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
                    <h3>Get Comprehensive Support </h3>
                    <p>Enhance operational efficiency and customer satisfaction with reliable support. </p>
                    <div className="act-bb">
                      <a data-bs-toggle="modal" href="/services/dynamics-365-support/" >Empower Your Team!  <i className="bi bi-arrow-right"></i></a>
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
                  <h2>Why Dynamics Square is the Best Choice? </h2>
                  <p>Dynamics Square is a leading Microsoft Gold Partner in Ontario with over 14 years of experience. We follow the Microsoft certified 3600 approaches to provide you with a perfect service you need to grow consistently. Here is why you can choose us: </p>
                </header>
              </div>
            </div>


            <div className="row g-3">
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                  <Image src="/img/s-com-09.png" alt="Proven Expertise" width={48} height={48} />
                  <h3>Proven Expertise </h3>
                  <p>We follow Microsoft-proven methodology to deliver high-quality Dynamics 365 Field Services Implementations and support, offering the best out of your investment. </p>

                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                <Image src="/img/s-com-10.png" alt="Microsoft Certified Consultants" width={48} height={48} />
                  <h3>Microsoft Certified Consultants </h3>
                  <p>We have a team of 135+ certified consultants that have extensive knowledge and expertise, offering tailored services. </p>
                  <div className="bg-img">
                    <img src="/img/shpe-11.png" alt="shape" width={650} height={736} />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six">
                <Image src="/img/s-com-11.png" alt="99% Success Rate" width={48} height={48} />
                  <h3>99% Success Rate </h3>
                  <p>Over the years, we have served 250+ clients, including Canada, with a remarkable 99% success rate, ensuring seamless transition. </p>
                  <div className="img-flips">
                    <img src="/img/shpe-11.png" alt="shape" width={650} height={736} />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 d-flex">
                <div className="crad-six c-white">
                <Image src="/img/s-com-12.png" alt="Tailored Solutions for Your Business" width={48} height={48} />
                  <h3>Tailored Solutions for Your Business </h3>
                  <p>We offer customized solutions to enhance customer satisfaction and drive operational efficiency, fulfilling unique business requirements. </p>

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
                  <h2>Copilot: Your Field Service Assistant in Dynamics 365 </h2>
                  <p>Copilot can further enhance the capabilities of Dynamics 365 Field Service. It helps improve efficiency, reduce costs, and deliver exceptional customer service. </p>
                </header>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6 d-flex">
                <div className="card-seven">
                  {/* <div className="card-top-pic">
                    <img src="/img/micrsoft-nva-ds.png" alt="micrsoft-nva-ds" />
                  </div> */}
                  <h3>Get Real-time Guidance </h3>
                  <p>Technicians can receive step-by-step instructions, troubleshooting tips, and knowledge base articles directly within their mobile or web apps. </p>
                  <a href="#exampleModal" data-bs-toggle="modal" className="btn bt-bg">Increase Output! </a>
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
                  <h3>Predictive Maintenance </h3>
                  <p>Copilot can analyze equipment data to identify potential failures and recommend preventive actions, minimizing downtime and costs. </p>
                  <a href="#exampleModal" data-bs-toggle="modal" className="btn bt-bg">Act Proactively! </a>
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
                  <h2>Dynamics 365 Field Service Pricing: What You Need to Know </h2>
                  <p>To make the informed decisions, it is essential to know the Dynamics 365 Field Service pricing. Here is the detailed table with pricing in 2024.  </p>
                </header>
              </div>
            </div>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 d-flex">
                <div className="box box-999">
                  <h3>
                  Dynamics 365 Field Service Contractor 
                  </h3>
                  <div className="price">
                  CAD $67.80 <span>user/month</span>
                  </div>
                <ul>
                  <li>- App access </li>
                  <li>- Access to Dynamics 365 Guides (limited)  </li>
                  <li>- Access to Dynamics 365 Remote Assist (limited)  </li>
                  <li>- Vendor and contractor management (limited)  </li>
                  <li>- Scheduling and resource dispatching (limited)  </li>
                
                </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="box box-999">
                  <h3>Dynamics 365 Field Service </h3>
                
                  <div className="price">
                  CAD $128.90 <span>user/month</span>
                  </div>
                 <ul>
                  <li>- Everything in Contractctor license + </li>
                  <li>- Planned maintenance agreements </li>
                  <li>- Returns processing </li>
                  <li>- Copilot </li>
                  <li>- Technician performance analysis </li>
                 </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="box box-999">
                  <h3>
                  Dynamics 365 Field Service - Resource Scheduling Optimization 
                  </h3>
                  <div className="price">
                  CAD$40.70<span>resource/month</span>
                  </div>
             
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
                  <h2>Got any questions About <br/>Field Service  </h2>
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
                    >What is the difference between Dynamics 365 Customer Service and Field Service? </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Customer Service focuses on managing customer interactions, support tickets, and service-related inquiries, aiming to enhance customer satisfaction. On the other hand, Dynamics 365 Field Service manages on-site service delivery, including work orders, scheduling, and resource management. It is designed for businesses that dispatch technicians to customers' locations for repairs or installations. </p></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >Is Dynamics 365 Field Service free? </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>No, Dynamics 365 Field Service is not free. It requires a separate subscription, which includes various pricing tiers based on the features and number of users. However, it offers free trials to allow businesses to explore its capabilities before committing to a paid plan. </p>
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
                    >What is Connected Field Service in Dynamics 365?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Connected Field Service in Dynamics 365 integrates IoT capabilities to monitor and manage equipment remotely. It enables proactive maintenance by alerting service teams to potential issues before they occur. This allows for predictive maintenance and reducing downtime. It leads to more efficient service delivery and improved customer satisfaction. </p>
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
                    >What are the benefits of Dynamics 365 Field Service? </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist5"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Field Service offers numerous benefits, including improved scheduling and resource allocation, enhanced customer satisfaction through timely service, and reduced operational costs via optimized routes. It also increases technician productivity by providing real-time information and streamlining work orders. </p>
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
                    >What is the purpose of the Requirement Group feature? </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist6"
                  >
                    <div className="accordion-body">
                      <p>The Requirement Group feature in Dynamics 365 Field Service allows businesses to define and group multiple service requirements for a job, ensuring that all necessary skills, resources, and equipment are available. It streamlines complex service jobs by matching the right technicians and resources, improving efficiency and ensuring successful service delivery. </p>
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

export default MicrosoftDynamics365FieldServiceNew;
