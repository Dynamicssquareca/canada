import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
// import FormFooterSubscriber from "../components/FormFooterSubscriber";
import Link from "next/link";
import Image from "next/image";
import FormNewUI from "../components/FormNewUI";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Dynamics Square | Book Free Consultation</title>
        <meta
          name="description"
          content="Contact Dynamics Square experts for Dynamics 365 CRM/ERP implementation, Support and Upgrade benefits. Book a free online consultation to know more."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/contact-us/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({


            })
          }}
        />
      </Head>
      <main>
        <section className="Solution-banner about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">

                <div className="new-contant-head">
                  <h1>Ready for Digital Renovation? Let’s talk it over!</h1>
                  <p>Unlock the true potential of Microsoft solutions configured for your business!</p>
                  <div className="new-flex-wraper">
                    <h2>Why Choose Dynamics Square</h2>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/card_travel.png" alt="card_travel" />
                      </div>
                      <div className="right">
                        <span>350+ Successful Project Delivery and Counting!</span>
                      </div>
                    </div>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/workspace_premi.png" alt="workspace_premi" />
                      </div>
                      <div className="right">
                        <span>150+ Accredited Professionals at Your Command!</span>

                      </div>
                    </div>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/chronic.png" alt="chronic" />
                      </div>
                      <div className="right">
                        <span>Assured 24/7 Support!</span>

                      </div>
                    </div>
                    <div className="new-flex-se">
                      <div className="left">
                        <img src="/img/diversity-3.png" alt="diversity-3" />
                      </div>
                      <div className="right">
                        <span>2x Boost in Business Operations!</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-7 align-self-center">
                <FormNewUI />
              </div>
            </div>
          </div>
        </section>

        <section className="cont-into cont-into-bg">
          <div className="container">
            <div className="pddd-30">
              <div className="row pddd-40">
                <div className="col-lg-4 col-sm-12">
                  <div className="addre-left">
                    <h4>Ontario</h4>
                    <p>800 Steeles Ave. W. #B10155 <br />Thornhill, ON. L4J 7L2</p>
                    <p>+1 289 807 0740</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="addre-left addre-left-border">
                    <h4>British Columbia</h4>
                    <p>398-2416 Main St. Vancouver <br />BC V5T 3E2</p>
                    <p>+1 778 381 5388</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className='picc'>
                    <img src="/img/m-partner.png" alt="m-partner" />
                  </div>
                </div>


              </div>
              {/* <div className="col-lg-12">
                <div className="new-co-title new-co-title-ll text-center">
                  <h3>350+ Global Businesses Trust Dynamics Square</h3>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section id="casestudys" className="casestudys ">
          <div className="container" data-aos="fade-up">
            <div className="row  gy-4">
              <div className="col-lg-5 align-self-center">
                <Image
                  src="/img/case-study-side-banner.png"
                  alt="case-study-side-banner"
                  width={640}
                  height={592}
                />
              </div>
              <div className="col-lg-1 align-self-center"></div>
              <div className="col-lg-6 align-self-center">
                <div className="sec-title">
                  <h2>Glimpse Of What We Delivered</h2>
                  <p>Dynamics 365 Case Stories</p>
                </div>
                <Swiper
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper casestudys-sled-1"
                >
                  <SwiperSlide>
                    <div className="casestudys-slider-item">
                      <div className="profile mt-auto">

                        <p>Implemented Custom EFT Module to improvise Payment Methods</p>
                        <div className="case-button">
                          <a
                            href="/case-studies/dynamics-nav13-eft-implementation/"
                            className="btn btn-md btn-custom-1"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="casestudys-slider-item">
                      <div className="profile mt-auto">

                        <p>Implementation of Microsoft Dynamics Business Central Cloud</p>

                        <div className="case-button">
                          <a
                            href="/case-studies/nav13-to-d365-business-central-upgrade/"
                            className="btn btn-md btn-custom-1"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-bgs">
          <div className="container">
            <header className="section-header">
              <h2>Our offices around the world</h2>
            </header>
            <div className="row hero-bg-3">
              <div className="col-md-12">
                <ul
                  className="nav nav-tabs justify-content-center contact-tbs"
                  id="myTab"
                  role="tablist"
                >
                  {/* <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-1"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-1"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Canada
                    </button>
                  </li> */}
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link  active"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      USA
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      UK
                    </button>
                  </li>


                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-2"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-2"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Europe
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-5"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-5"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Australia
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-4"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Singapore
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-3"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      India
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>California</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            2372 Morse Ave, Ste. 310 Irvine, CA 92614
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 213 784 0845</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Texas</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            10101 Southwest Freeway Houston, TX 77074
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 281 899 0865</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Illinois</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            111 North Wabash Ave. Ste.100
                            The Garland Building
                            Chicago, IL 60602
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>

                          <div className="content-right">+1 312 488 1043</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>New Jersey</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            500 Paterson Plank Road
                            Union City, NJ 07087
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 732 893 0520</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Massachusetts</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            867 Boylston Street Boston, MA 02116

                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 617 765 7669</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 124 City Road,London, EC1V 2NX, U.K.
                            {/* Kemp House, 152-160 City Road, London, EC1V 2NX, U.K */}
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.ca">
                              info@dynamicssquare.ca
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            International House 61 Mosley Street, Manchester, M2
                            3HZ, United Kingdom
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 745 9948 273</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.ca">
                              info@dynamicssquare.ca
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Birmingham</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Izabella House, 24 - 26 Regents Place, City Centre, Birmingham
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">
                            <a target="_self" rel="" href="tel:+441213182798">
                              +44 121 318 2798
                            </a>
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">info@dynamicssquare.ca</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div
                    className="tab-pane fade"
                    id="contact-1"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Ontario</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            800 Steeles Ave. W. #B10155 Thornhill, ON. L4J
                            7L2
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 289 807 0740</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>British Columbia</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            398-2416 Main St. Vancouver BC V5T 3E2
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+1 778 381 5388</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div> */}
                  <div
                    className="tab-pane fade"
                    id="contact-2"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+31 970 102 57044</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.ca">
                              info@dynamicssquare.ca
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>India</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            1114, JMD Megapolis, Sector 48, Gurugram, Haryana
                            122018
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+91 124 495 71650</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-4"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Singapore</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            #10-11, International Plaza, 10 Anson Rd, Singapore
                            079903
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+65 6232 6935</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.ca">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-5"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Sydney</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            2/4A Meridian Place Bella Vista NSW 2153, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 2 8607 5117</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Brisbane</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Suite 105, 42 Manilla Street East Brisbane, QLD
                            4169, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 7 3506 2909</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Melbourne</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Suite 4847, 805/220 Collins Street Melbourne VIC
                            3000, Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 3 8400 4784</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="cont-hh">
                          <h3>Perth</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Level 24, 77 St Georges Terrace, Perth, WA 6000,
                            Australia
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+61 8 6219 8209</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
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
      </main>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="/" className="logo d-flex align-items-center">
                  <img
                    src="/img/dynamics_square_tm_logo_footer.svg"
                    alt="Dynamics Square TM Logo"
                    width="301"
                    height="21"
                    style={{ marginBottom: "20px" }}
                  />
                </a>
                <p>Dynamics Square is Canada's leading Microsoft Gold Certified Partner
                  that caters to the needs of orgnizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.</p>
                <img
                  src="/img/microsoft-partner-footer.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width="210" height="74"
                />
                <img
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img"
                  width="683" height="154"
                />
                <div className="footer-award">
                  <img src="/img/award-1.png" alt='top micrsoft dynamics crm company' width="108" height="108" />
                  <img src="/img/award-2.png" alt='top micrsoft dynamics crm company' width="108" height="108" />
                  <img src="/img/award-3.png" alt='top micrsoft dynamics crm company' width="108" height="108" />
                </div>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/dynamics-365-business-central/">
                      Business Central
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/microsoft-dynamics-365-finance/">
                      Finance
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/microsoft-dynamics-365-sales/">
                      Sales
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/microsoft-power-bi/">
                      Power BI
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/microsoft-azure/">Azure IoT</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/solutions/microsoft-dynamics-crm/">
                      CRM
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/about-us/">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/why-us/">Why Us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/services/">Our Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/partner/">Our Partners</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/contact-us/">Contact Us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/blog/" rel="">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/privacy-policy/">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    rel=""
                    href="https://twitter.com/dsquare_ca"
                    className="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.facebook.com/dynamicssquareca"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.youtube.com/c/DynamicsSquare"
                    className="instagram"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.linkedin.com/company/dynamics-square-canada/"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <br />
                {/* <div className="subbb">
                    <p>Subscribe Newsletter</p>
                    <span>
                      Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                      Offers And Much More!
                    </span>
                    <FormFooterSubscriber />
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
            <div className="footer-extra-link">
              <a href="/terms-of-use/">Terms of Use </a>
              <a href="/cookie-policy/">| Cookie </a>
              {/* <a href="/sitemap.xml">| Sitemap</a> */}
            </div>
          </div>
        </div>
      </footer>
      <div className='call-bb-wr'>
        <button className="fixed-button wobble" type="button">
          <a href="tel:+12898070740" target="_self"><i className="bi bi-telephone-fill"></i></a>
        </button>

      </div>
    </>
  );
};

export default ContactUs;
