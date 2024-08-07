import React from "react";
import Head from 'next/head'
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
                    <h1>Microsoft Dynamics 365
                      Business Central ERP Partner Vancouver</h1>
                    <p>Simplify daily operations, connect teams, unify business data, and automate complex tasks with Microsoft Dynamics 365 Business Central.</p>
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
                  <h2>Dynamics 365 Business Central – Your <br />Reliable Partner in Growth</h2>
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
                  <p>Dynamics 365 Business Central, formerly known as <a href="/solutions/microsoft-dynamics-nav/" ><b>Dynamics NAV</b></a>, is a comprehensive cloud ERP solution embedded with modern technologies of AI and BI to streamline the diverse processes of <b>SMBs</b>.</p>
                  <p>Microsoft Business Central is a powerful solution that comes with advanced capabilities and business-centric functionalities for businesses. It connects, manages, and streamlines different departments that include finance, sales, <a href="/solutions/dynamics-365-supply-chain-management/"><b>supply chain</b></a> operations, and HR.</p>
                  <p>D365 BC offers the power of AI enabled Copilot assistance to enhance productivity, get real-time insights to make data-driven decisions, and simplify processes to enhance overall efficiency with improved visibility. </p>
                </div>
              </div>
            </div>

            <div className="row bg-new-callaction justify-content-center">
              <div className="col-lg-9">
                <div className="solution-new-caltoaction">
                  <h2>Want to eliminate data silos and boost business productivity?</h2>
                  <p>Accept innovation and embrace cloud computing with a cost-effective Business Central implementation. Break silos and boost profits with a FREE Business Central trial.</p>
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
                  <h2>The Powerhouse Within: <br />Exploring D365 BC Capabilities</h2>
                  <p>Connect your entire business processes, make smarter decisions, and start growing easily with game-changing Business Central capabilities.</p>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/cloud_download.png" alt="cloud_download" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/pages.png" alt="pages" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/sleep_score.png" alt="sleep_score" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/rocket_launch_icon.png" alt="rocket_launch_icon" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/memory.png" alt="memory" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/pie_chart.png" alt="pie_chart" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/work_update.png" alt="work_update" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-md-6 d-flex">
                <div className="card-two">
                  <img src="/img/inventory_2.png" alt="inventory_2" />
                  <h3>Deploy the Cloud Faster, Reduce Downtime</h3>
                  <ul>
                    <li><i className="bi bi-check-circle-fill"></i><span>Flexible cloud ERP</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Faster adoption guaranteed</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Secure cloud deployment</span></li>
                    <li><i className="bi bi-check-circle-fill"></i><span>Enhanced team connectivity</span></li>
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
                  <h2>Capabilities Of
                    Dynamics 365 Business Central</h2>
                  <p>Connect Your Entire Business Processes, Make Smarter Decisions, and Start Growing Easily with Game-Changing Business Central Capabilities.</p>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
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
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 d-flex">
                          <div className="card-three">
                            <div className="top-h">
                              <i className="bi bi-check-circle-fill"></i>
                              Internal Transactions
                            </div>
                            <p>Manages internal financial transactions without any errors.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="solution-three">3</div>
                    <div className="tab-pane fade" id="solution-four">4</div>
                    <div className="tab-pane fade" id="solution-five">5</div>
                    <div className="tab-pane fade" id="solution-six">6</div>
                    <div className="tab-pane fade" id="solution-seven">7</div>
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
                  <h2>Switch to Microsoft Business Central Today!
                    Your Gateway to Immeasurable Success.</h2>
                  <p>Simplify, automate, and succeed by leveraging the  <br />limitless capabilities of Business Central.</p>
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
                  <p>Business Central comes embedded with Microsoft Copilot, which works as an AI assistant to help you with daily tasks.</p>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>AI Powered Assistance</h3>
                  <p>Business Central comes embedded with Microsoft Copilot, which works as an AI assistant to help you with daily tasks.</p>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>AI Powered Assistance</h3>
                  <p>Business Central comes embedded with Microsoft Copilot, which works as an AI assistant to help you with daily tasks.</p>
                </div>
              </div>
              <div className="col-xl-3 d-flex">
                <div className="card-four">
                  <h3>AI Powered Assistance</h3>
                  <p>Business Central comes embedded with Microsoft Copilot, which works as an AI assistant to help you with daily tasks.</p>
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
                    <h3>Implementation</h3>
                    <p>We at Dynamics Square believe in seamless Microsoft dynamics implementation along with long-term assistance. Our expertise enables us to deliver a hassle-free implementation of the Dynamics 365 suite of ERP and CRM applications without any traditional glitches & hassles.</p>
                    <div className="act-bb">
                      <a href="">Know More <i className="bi bi-arrow-right"></i></a>
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
                    <h3>Upgrade Services</h3>
                    <p>We have successfully transformed businesses with our futuristic Upgrading services. Dynamic Square ensures that the team can extend developing modern methodologies for unveiling your true business potential.</p>
                    <div className="act-bb">
                      <a href="">Know More <i className="bi bi-arrow-right"></i></a>
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
                    <h3>Support Services</h3>
                    <p>We prioritize long-term associations with you over anything. Our team is happy to assist the clients even after the project is completed.</p>
                    <div className="act-bb">
                      <a href="">Know More <i className="bi bi-arrow-right"></i></a>
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
                  <h3>Tailored Solutions, Built for You</h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>
                  <div className="bg-img">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 d-flex">
                <div className="crad-six">
                  <h3>Tailored Solutions, Built for You</h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>
                  <div className="img-flips">
                    <img src="/img/shpe-11.png" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 d-flex">
                <div className="crad-six c-white">
                  <h3>Tailored Solutions, Built for You</h3>
                  <p>We tailor Business Central with our expert team to fulfill your unique business requirements, exceeding customer expectations and meeting market demands.</p>

                </div>
              </div>
            </div>

          </div>



        </section>




      <section style={{background:'#f5f5f5'}}>
        <div className="container">
        <div className="row">
              <div className="col-lg-6">
                <header className="section-header-new">
                  <h2>Move To Business Central And Drive Digitalization</h2>
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
                  <h3>Dynamics NAV <br/>to BC Upgrade</h3>
                  <p>Struggling with data silos, downtime, and system complexities? Go for a Dynamics NAV to BC upgrade to simplify processes, avail AI-enabled automation, and limitless scalability.</p>
                   <a href="#" className="btn bt-bg">Schedule a Free Demo</a>
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
                  <h3>Dynamics GP<br/>
                  to BC Migration</h3>
                  <p>Struggling with data silos, downtime, and system complexities? Go for a Dynamics NAV to BC upgrade to simplify processes, avail AI-enabled automation, and limitless scalability.</p>
                   <a href="#" className="btn bt-bg">Schedule a Free Demo</a>
                   <div className="bg-r-img">
                      <img src="/img/micrsoft-nva-ds-bott.png" alt="micrsoft-nva-ds-bott" />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section  className="pricing pricing-colo">
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

      </main>
    </>
  );
};

export default DD;
