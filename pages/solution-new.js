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
import NavBar from "../components/NavBar";
const DD = () => {
  return (
    <>
      <Head>
        <title>Why Dynamics Square | Your Trusted Microsoft Partner in UK</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <section className="center-hero-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="hero-bnner-info text-center">
                  <div className="top-info">
                    <h1>Microsoft Business Central
                      Power your SME with an all-in-one ERP Solution
                    </h1>
                    <p>Accelerate growth, break data silos, centralize data, connect teams, and access your system from anywhere and anytime.</p>
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
                  <h2>Dynamics 365 Business Central – Your Partner in Growth</h2>
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
                  <p>Dynamics 365 Business Central, formerly known as  <a href="/solutions/microsoft-dynamics-nav/" ><b>Dynamics NAV</b></a>, is a comprehensive cloud ERP solution embedded with modern technologies of AI and BI to streamline the diverse processes of SMBs.</p>
                  <p>Microsoft Business Central is a powerful solution that comes with advanced capabilities and business-centric functionalities to deal with different complexities. It connects, manages, and streamlines different departments that include <b>finance, sales, supply chain operations, and HR.</b></p>
                  <p>D365 BC leverages the power of AI enabled Copilot assistance to enhance productivity, get real-time insights to make data-driven decisions, and simplify processes to enhance overall efficiency with improved visibility. </p>
                </div>
              </div>
            </div>

            <div className="row bg-new-callaction justify-content-center">
              <div className="col-lg-9">
                <div className="solution-new-caltoaction">
                  <h2>Want to eliminate data silos and boost business productivity?</h2>
                  <p>Accept innovation and embrace cloud computing with a cost-effective Business Central implementation. Break silos and boost profit margins with a FREE Business Central trial.</p>
                  <a href="#" className="btn bt-bg">Unlock Growth. Start Your Trial Today</a>
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
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Dynamics 365 Business Central: <br/>Core Benefits You Must Know</h2>
                  <p>Get holistic visibility, real-time insights, and an impactful customer experience to achieve business goals with Microsoft Dynamics 365 BC.</p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Accelerated Deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced Accessibility</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Increased Uptime</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Easy to Scale</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/pages.png" alt="pages" />
                  <h3>Amaze Customers and Drive Loyalty</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Improved Customer Experience</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Personalized Interactions</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Efficient Order Management</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Effective CRM Features</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/sleep_score.png" alt="sleep_score" />
                  <h3>Close More Deals with AI</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Intelligent Sales Insights</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Avail Automation</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Predictive Sales Forecasting</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Personalized Sales Pitch</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/rocket_launch_icon.png" alt="rocket_launch_icon" />
                  <h3>Skyrocket Performance with Data Analytics</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Data-Driven Decision Making</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Improved Efficiency</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced Forecasting</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Real-time Performance Monitoring</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/memory.png" alt="memory" />
                  <h3>Deliver Projects on Time, On Budget</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Improved Project Planning</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced Collaboration</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Real-time Project Tracking</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Resource Optimization</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/pie_chart.png" alt="pie_chart" />
                  <h3>Real-Time Financials: Gain Control, Make Money</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Accurate Financial Data</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Improved Cash Flow Management</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced Financial Reporting</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Follow Regulatory Compliances</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/work_update.png" alt="work_update" />
                  <h3>Cut Inventory Costs and Boost Availability</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Optimized Inventory Levels</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Improved Demand Forecasting</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Efficient Warehouse Management</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Reduced Inventory Shrinkage</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/inventory_2.png" alt="inventory_2" />
                  <h3>In-built Intelligent Supply Chain Management</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>360-Degree SCM Visibility</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Improved Team Collaboration</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Risk Management</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Maximized Performance</span></li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </section>


        <section id="section3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>The Powerhouse Within: Exploring Business Central Capabilities</h2>
                  <p>Connect your entire business processes, make smarter decisions, and start growing easily with game-changing Business Central capabilities.</p>
                </header>
              </div>
            </div>

            <div className="row m-tt-30">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                <div className="d-flex align-items-start new-solution-tab">
                  <div className="nav flex-column nav-pills me-3" id="solu-pills-tab">
                    <div className="nav-link active" id="solution-one-tab" data-bs-toggle="pill" data-bs-target="#solution-one" ><h3>Finance</h3></div>
                    <div className="nav-link" id="solution-two-tab" data-bs-toggle="pill" data-bs-target="#solution-two"><h3>Sales</h3></div>
                    <div className="nav-link" id="solution-three-tab" data-bs-toggle="pill" data-bs-target="#solution-three"><h3>Supply Chain Management </h3></div>
                    <div className="nav-link" id="solution-four-tab" data-bs-toggle="pill" data-bs-target="#solution-four"><h3>Project Management </h3></div>
                    <div className="nav-link" id="solution-five-tab" data-bs-toggle="pill" data-bs-target="#solution-five"><h3>Inventory Management</h3></div>
                    <div className="nav-link" id="solution-six-tab" data-bs-toggle="pill" data-bs-target="#solution-six"><h3>Warehouse Management</h3></div>
                    <div className="nav-link" id="solution-seven-tab" data-bs-toggle="pill" data-bs-target="#solution-seven"><h3>Manufacturing</h3></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-lg-8 col-md-8 col-sm-8">
                <div className="tabs-ss">
                  <div className="tab-content" id="solu-pills-tabContent">
                    <div className="tab-pane fade show active" id="solution-one">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Internal Transactions 
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Forecast Cash Flows 
                            </div>
                            <p>Estimates future cash inflows, outflows, and financial position. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Budgeting 
                            </div>
                            <p>Plans and tracks financial resources to control expenses. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Inventory Costing 
                            </div>
                            <p>Track inventory value to forecast expenses and maintain inventory levels. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Multi-Companies Management
                            </div>
                            <p>Combines financial data from multiple entities to analyze finance. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Costs and Expense Allocation 
                            </div>
                            <p>Allocate expenses and revenues accurately using a common journal. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Treasury 
                            </div>
                            <p>Manage cash instruments, offering visibility and control over finance. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Accounts Receivable 
                            </div>
                            <p>Tracks and manages incoming payments and settles customer accounts. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Accounts Payable 
                            </div>
                            <p>Tracks and manages outgoing payments to suppliers and vendor partners. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Fixed Assets 
                            </div>
                            <p>Manage and track long-term assets, including maintenance costs and insurance policies. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-two">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Client management 
                            </div>
                            <p>Manage your customer base, resolve queries, and increase customer satisfaction.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Sales Quote 
                            </div>
                            <p>Modify and send sales quotes to provide customers with detailed pricing. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Sales Order 
                            </div>
                            <p>Create sales orders and manage the sale of products or services to customers. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Sales Invoices 
                            </div>
                            <p>Generate invoices for products or services customers have purchased. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Drop Shipments 
                            </div>
                            <p>Fulfill customer orders by shipping products directly using a purchase order. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Sales Returns 
                            </div>
                            <p>Process and manage returned items and ensure accurate inventory. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Assembly Order 
                            </div>
                            <p>Connect sales requirements with warehouse activities to fulfill orders. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Order Planning & Promising 
                            </div>
                            <p>Plan and promise delivery dates to ensure smooth order fulfillment. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Generate Single Invoice
                            </div>
                            <p>Create a single invoice for multiple shipments with detailed information. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Correction or Cancel Unpaid Invoices 
                            </div>
                            <p>Correct or cancel unpaid invoices to manage billing errors or customers. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-three">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Manage Suppliers
                            </div>
                            <p>Find and manage vendors while building strong relationships. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Optimize Warehouse 
                            </div>
                            <p>Optimize warehouse space to accommodate growing volumes of inventory. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Track Goods during Transportation 
                            </div>
                            <p>Monitor goods in transit. Get valuable insight into shipment status and location. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Communication 
                            </div>
                            <p>Enhance collaboration across partners to promote efficient operations. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Adopt New Technologies 
                            </div>
                            <p>Integrate advanced SCM solutions to adapt faster, work smarter, and perform better. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Built-in Intelligence 
                            </div>
                            <p>Automate tasks with in-built Copilot assistance to improve decision-making. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Enhance Profitability 
                            </div>
                            <p>Reduce costs and boost margins. Increase turnover and productivity. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Improve Sustainability 
                            </div>
                            <p>Use sustainability entries to track emissions and follow best practices.  </p>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-four">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Project Creation 
                            </div>
                            <p>Create, schedule, and manage projects. Define the project scope and start processes.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Resource Allocations 
                            </div>
                            <p>Allocate resources based on their skills and experience to ensure project completion. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Time Sheet Management 
                            </div>
                            <p>Track and record the time spent by team members on project tasks in real time. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Project Budget Management 
                            </div>
                            <p>Set a realistic budget based on the project requirements. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Resource Consumptions 
                            </div>
                            <p>Monitor resource consumption, identify bottlenecks, and optimize resource allocation. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Project Supplies 
                            </div>
                            <p>Manage and track materials, equipment, and other supplies needed to complete the project. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Project WIP Methods 
                            </div>
                            <p>Estimate the financial value of the ongoing project using a general ledger. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Track Project Progress
                            </div>
                            <p>Access project progress based on different parameters and specifications. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Project Invoicing 
                            </div>
                            <p>Generate and send invoices to clients for a project for multiple users. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Merge Duplicate Records 
                            </div>
                            <p>Eliminate duplicate entries to improve data accuracy and ensure reliable reporting. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-five">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Master Management 
                            </div>
                            <p>List and maintain key information of inventory with complete data. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Bill of Materials 
                            </div>
                            <p>Estimate the amount of materials, plan purchases, and ensure part availability. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Categorization 
                            </div>
                            <p>Categorize items based on type, brand, or other criteria to classify items. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Attributes 
                            </div>
                            <p>Distribute attributes of inventory items and assign codes to find them easily. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Catalog 
                            </div>
                            <p>Creates a catalog item to simplify the procurement process. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Inventory Counting 
                            </div>
                            <p>Perform physical stock counts to ensure data accuracy and identify discrepancies. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Availability 
                            </div>
                            <p>Check current stock levels to detect item availability and optimize sales.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Inventory Transfer 
                            </div>
                            <p>Move stock between warehouses or locations efficiently. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Reservation 
                            </div>
                            <p>Allocate specific inventory items to sales, purchase, or production needs. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Tracking 
                            </div>
                            <p>Monitor the movement of your inventory using a serial or lot number. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-six">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Receiving 
                            </div>
                            <p>Inspect, verify, and record receiving goods in the warehouse. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Shipments 
                            </div>
                            <p>Manage goods shipments from your warehouse for smooth movement.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Cross Dock Items 
                            </div>
                            <p>Transfer items directly from receiving to shipping without storing them.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Putting Items Away 
                            </div>
                            <p>Organize your warehouse to place received items at designated storage locations. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Moving Items 
                            </div>
                            <p>Transport goods between locations to optimize storage space. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Picking Items 
                            </div>
                            <p>Select specific items from their storage locations to fulfill customer orders. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Automated Data Capture Systems (ADCS) 
                            </div>
                            <p>Track items and reduce manual data entry by utilizing barcode scanners. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Inventory Replenishment  
                            </div>
                            <p>Maintain optimum inventory levels to meet customer demands. </p>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-seven">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Production Planning 
                            </div>
                            <p>Plan, schedule production runs, and suggest changes based on requirements. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Supply Planning 
                            </div>
                            <p>Analyze forecasting material needs and procure goods to optimize delivery. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Demand Forecasting 
                            </div>
                            <p>Predict goods quantity and allocate resources to meet consumer demands.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Creation of Production Order
                            </div>
                            <p>Automatically create a planned production order from a sales order. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Order Planning 
                            </div>
                            <p>Leverage BOM (Bill of Material) to forecast sales and product demand. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              MRP & MPS 
                            </div>
                            <p>Automate the supply chain by calculating materials and components.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Requisition Worksheet 
                            </div>
                            <p>Create supply chain data and request the purchase using the document. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Calculate Work Centre Calendar 
                            </div>
                            <p>Schedule production orders and ensure realistic completion.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Item Availability 
                            </div>
                            <p>Check component availability and a specific item's influence on production. </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Production Order 
                            </div>
                            <p>Specify crucial information about items and create production orders with ease. </p>
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
                  <h2>Switch to Microsoft Business Central Today! — <br/>Your Gateway to Immeasurable Success.</h2>
                  <p>Simplify, automate, and succeed by leveraging the limitless capabilities of Business Central.</p>
                  <a href="#" className="btn bt-bg">Switch Now!</a>
                  <div className="im-abso">
                    <img src="/img/frame-shape.png" alt="frame-shape" />
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
                  <h2>What Makes Business Central ERP Stand Out?</h2>
                  <p>The modern features, unlimited AI capabilities, pure cloud-based deployment, and cost-effective per-user subscription licensing make this solution unique and powerful for SMBs.</p>
                </header>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>AI Powered Assistance</h3>
                  <p>Business Central comes embedded with Microsoft Copilot to help you eliminate recurring or manual tasks and avail automation.</p>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>Unified and Modern Approach</h3>
                  <p>Business Central ERP offers centralized data to offer data accessibility <b>24*7</b> with an attractive user-interface and easy navigation.</p>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>Integration Capabilities</h3>
                  <p>Utilize one-click Business Central Extension technology to integrate solutions of Microsoft Dynamics 365 ecosystem without any hassle.</p>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>Cloud-enabled technology</h3>
                  <p>Cloud technology is cost-effective, low in maintenance, and enables businesses to automatically receive updates for free. </p>
                </div>
              </div>
            </div>

          </div>



        </section>


        <section id="section4" className="section">

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Microsoft 365 Business Central Services</h2>
                  <p>Explore our efficient, reliable, and cost-efficient services, specially curated for growing businesses.</p>
                </header>
              </div>
            </div>


            <div className="row">
              <div className="col-xl-4 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a href=""><img src="/img/serv-img-1.jpg" alt="Implementation" /></a>
                  </div>
                  <div className="info-card">
                    <h3>Business Central Implementation</h3>
                    <p>Streamline and boost your business with a seamless implementation process.</p>
                    <div className="act-bb">
                      <a href="/d365-business-central-implementation/">Unlock Growth! <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a href=""><img src="/img/serv-img-2.jpg" alt="Upgrade Services" /></a>
                  </div>
                  <div className="info-card">
                    <h3>Migrate to Business Central</h3>
                    <p>Transform your business digitally by utilizing advanced tools to push growth.</p>
                    <div className="act-bb">
                      <a href="/dynamics-nav-to-business-central-upgrade/">Switch to Tech! <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex">
                <div className="card-five">
                  <div className="pic">
                    <a href=""><img src="/img/serv-img-3.jpg" alt="Support Services" /></a>
                  </div>
                  <div className="info-card">
                    <h3>Business Central Support</h3>
                    <p>Improve the existing processes and eliminate all future issues with reliable support.</p>
                    <div className="act-bb">
                      <a href="/dynamics-365-business-central-erp-support/">Revive Business! <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </section>







        <section>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Why Are Business Preferring Dynamics Square?</h2>
                  <p>Companies choose us as a Dynamics 365 support partner due to reliable service, trust, competitive pricing, etc. Here are a few points that make us favorites:</p>
                </header>
              </div>
            </div>


            <div className="row g-3">
              <div className="col-xl-6 d-flex">
                <div className="crad-six c-white">
                  <h3>Tailored Solutions, Built for You</h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>

                </div>
              </div>
              <div className="col-xl-6 d-flex">
                <div className="crad-six">
                  <h3>Team of Certified Dynamics 365 Experts</h3>
                  <p>We are a team of over <b>135+</b> Microsoft-certified Dynamics 365 consultants. At Dynamics Square, the best industry minds are on your side to tackle any challenge and craft growth-oriented strategies.</p>
                  <div className="bg-img">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 d-flex">
                <div className="crad-six">
                  <h3>Adequate Resources Available</h3>
                  <p>We have adequate resources and infrastructure to empower businesses of all sizes. With our robust Dynamics 365 Business Central support services, you can match your ambition to scale.</p>
                  <div className="img-flips">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 d-flex">
                <div className="crad-six c-white">
                  <h3>Hands-On Support</h3>
                  <p>We offer on-site support for complex problems or interruptions to ensure your company gets back on track quickly and affordably.</p>

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
                  <h2>Move to Business Central and Drive Digitalization</h2>
                  <p>Moving to Microsoft Business Central can open up the doors of limitless opportunities and push your business towards sustainable growth.</p>
                </header>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-lg-6 d-flex">
                <div className="card-seven">
                  <div className="card-top-pic">
                    <img src="/img/micrsoft-nva-ds.png" alt="micrsoft-nva-ds" />
                  </div>
                  <h3>Dynamics NAV <br />to BC Upgrade</h3>
                  <p>Struggling with data silos, downtime, and system complexities? Go for a Dynamics NAV to BC upgrade to simplify processes, avail AI-enabled automation, and limitless scalability.</p>
                  <a href="/dynamics-nav-to-business-central-upgrade/" className="btn bt-bg">Schedule a Free Demo</a>
                  <div className="bg-r-img">
                    <img src="/img/micrsoft-nva-ds-bott.png" alt="micrsoft-nva-ds-bott" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="card-seven card-w">
                  <div className="card-top-pic">
                    <img src="/img/micrsoft-nva-ds.png" alt="micrsoft-nva-ds" />
                  </div>
                  <h3>Dynamics GP<br />
                    to BC Migration</h3>
                  <p>Dealing with limited support and customization intricacies? Opt for Dynamics GP to BC migration to eliminate complexities, centralize data, and customize your system as per requirements.</p>
                  <a href="#" className="btn bt-bg">Schedule a Free Demo</a>
                  <div className="bg-r-img">
                    <img src="/img/micrsoft-nva-ds-bott.png" alt="micrsoft-nva-ds-bott" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing pricing-colo">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Dynamics 365 Business Central Pricing: Find the Best Plan</h2>
                  <p>Take a look at Dynamics 365 Business Central Pricing and choose the perfect plan among Team Member, Essential, and Premium Licensing options.</p>
                </header>
              </div>
            </div>
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
        <section className="solution-faq faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <header className="section-header-new text-center">
                  <h2>Dynamics 365 Business Central Pricing: Find the Best Plan</h2>
                  <p>Take a look at Dynamics 365 Business Central Pricing and choose the perfect plan among Team Member, Essential, and Premium Licensing options.</p>
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
      </main>
    </>
  );
};

export default DD;
