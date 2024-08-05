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
                         <span>All-in-one solution for all your<br/>
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
      <section id="section1" className="section">Section 1 Content</section>
      <section id="section2" className="section">Section 2 Content</section>
      <section id="section3" className="section">Section 3 Content</section>
      <section id="section4" className="section">Section 4 Content</section>
      <section id="section5" className="section">Section 5 Content</section>
      <section id="section6" className="section">Section 6 Content</section>
      <style jsx>{`
        .section {
          height: 100vh;
          padding: 20px;
          margin: 20px 0;
        }
        #section1 { background-color: #ffffff; }
        #section2 { background-color: red; }
        #section3 { background-color: blue; }
        #section4 { background-color: #c4c4c4; }
        #section5 { background-color: #b4b4b4; }
             #section6 { background-color: green; }
      `}</style>








        </main>
      </>
    );
  };
  
  export default DD;
