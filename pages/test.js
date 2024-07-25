import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import LinkWithFadeOut from "../components/LinkWithFadeOut";
import ROIPage from "../components/ROIPage";


const Test = () => {
  // const [playing, setPlaying] = useState(false);
  // const [showPoster, setShowPoster] = useState(true);
  // const playerRef = useRef(null);
  // const videoContainerRef = useRef(null);

  // const handlePlay = () => {
  //   setPlaying(true);
  //   setShowPoster(false);
  //   playerRef.current?.seekTo(0);
  // };

  // const handleEnded = () => {
  //   setPlaying(false);
  //   setShowPoster(true);
  // };

  // const handlePause = () => {
  //   setPlaying(false);
  // };

  return (
    <>
      <Head>
        <title>Home Dynamics Square | Book Free Consultation</title>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/contact-us/"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main>
        <div className="main-banner">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 555555,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mySwipe-home-slider"
          >
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h1>Dynamics Square is a leading Microsoft Partner in Canada. </h1>
                  <p>We take pride in successfully transforming businesses by delivering effectual single-point solutions.</p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h2>Accelerating your business for tomorrow </h2>
                  <p>We are here to let you stay ahead of the curve. Our professionals specialize in transforming businesses and ensuring they are future-ready.  </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h2>Sustainable Associations</h2>
                  <p>Dynamics Square has joined hands with Microsoft to drive ambitious sustainability outcomes, with smart actions & processes.  </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <section className="into-banner-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 align-self-center">
                <img
                  className="new-pic"
                  src="/img/micrsoft-parten-white.png"
                  alt="parten image"
                />
              </div>
              <div className="col-lg-1">
                <div className="sh"></div>
              </div>
              <div className="col-lg-9 align-self-center">
                <div className="info-right-new">
                  <div className="info-img-new">
                    <img src="/img/clutch-img.png" alt="parten image" />
                  </div>
                  <div className="info-contr-new">
                    <h3>
                      Experience Personalized Microsoft Cloud <br />
                      Solutions for Simplified Operations
                    </h3>
                    <div className="info">
                      <span>Streamline Processes</span>
                      <span>Minimize Expenses</span>
                      <span>Set New Records</span>
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
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>We are Globally Trusted</h2>
                  <p>
                    As a Microsoft Solutions Partner, we have built sustainable
                    futures by serving 500 + projects by delivering an extensive
                    portfolio of successful business solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="row inner-side-pad">
              <div className="col-lg-12">
                <div className="new-counter-wraper">
                  <div className="new-counter">
                    <h3>500+</h3>
                    <p>Clients Worldwide</p>
                  </div>
                  <div className="new-counter">
                    <h3>150+</h3>
                    <p>Certified Pofessionals</p>
                  </div>
                  <div className="new-counter">
                    <h3>12+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="new-counter">
                    <h3>7+</h3>
                    <p>Global Presence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section>
          <VideoPlayer poster="/img/poster-1.png" src="/video/Slide4-1.mp4" />
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>We offer Solutions that help
                    you witness Exponential Growth</h2>
                  <p>We are a Microsoft Dynamics 365 partner in Canada, and we aim to offer services for potential business growth. We are not only helping businesses adapt to agility, innovation, and transformation but we empower them to stay ahead of the curve.</p>
                </div>
              </div>
            </div>

            <div className="row new-image-card">
              <div className="col-lg-4">
                <div className="card-image-ver-1">
                  <a href="/solutions/dynamics-365-business-central/">
                  <div className="card-head-top">
                    <img src="/img/BusinessCentral_scalable.png" alt="BusinessCentral_scalable" className="icon" />
                    <h3>Dynamics 365 <br/>Business Central</h3>
                  </div>
                  <div className="card-mid-se">
                    <p>An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire...</p>
                  </div>
                  <div className="card-bottom-se">
                    <ul>
                      <li><i class="bi bi-check-lg"></i>Integrated Business Processes</li>
                      <li><i class="bi bi-check-lg"></i>Enhanced Productivity</li>
                      <li><i class="bi bi-check-lg"></i>Data-Driven Decision-Making</li>
                    </ul>
                  </div>
                  <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-dynamics-365-finance/">
                  <div className="card-head-top">
                    <img src="/img/Finance_scalable.png" alt="Finance_scalable" className="icon" />
                    <h3>Dynamics 365<br />
                    Finance</h3>
                  </div>
                  <div className="card-mid-se">
                    <p>An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire...</p>
                  </div>
                  <div className="card-bottom-se">
                    <ul>
                      <li><i class="bi bi-check-lg"></i>Integrated Business Processes</li>
                      <li><i class="bi bi-check-lg"></i>Enhanced Productivity</li>
                      <li><i class="bi bi-check-lg"></i>Data-Driven Decision-Making</li>
                    </ul>
                  </div>
                  <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-image-ver-1">
                  <a href="/solutions/dynamics-365-supply-chain-management/">
                  <div className="card-head-top">
                    <img src="/img/SupplyChainManagement_scalable.png" alt="SupplyChainManagement_scalable" className="icon" />
                    <h3>Dynamics 365<br />
                    Supply Chain</h3>
                  </div>
                  <div className="card-mid-se">
                    <p>An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire...</p>
                  </div>
                  <div className="card-bottom-se">
                    <ul>
                      <li><i class="bi bi-check-lg"></i>Integrated Business Processes</li>
                      <li><i class="bi bi-check-lg"></i>Enhanced Productivity</li>
                      <li><i class="bi bi-check-lg"></i>Data-Driven Decision-Making</li>
                    </ul>
                  </div>
                  <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-dynamics-365-sales/">
                  <div className="card-head-top">
                    <img src="/img/Sales_scalable.png" alt="Sales_scalable" className="icon" />
                    <h3>Sales</h3>
                  </div>
                  <div className="card-mid-se">
                    <p>An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire...</p>
                  </div>
                  <div className="card-bottom-se">
                    <ul>
                      <li><i class="bi bi-check-lg"></i>Integrated Business Processes</li>
                      <li><i class="bi bi-check-lg"></i>Enhanced Productivity</li>
                      <li><i class="bi bi-check-lg"></i>Data-Driven Decision-Making</li>
                    </ul>
                  </div>
                  <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-power-bi/">
                  <div className="card-head-top">
                    <img src="/img/PowerBI_scalable.png" alt="PowerBI_scalable" className="icon" />
                    <h3>Power BI</h3>
                  </div>
                  <div className="card-mid-se">
                    <p>An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire...</p>
                  </div>
                  <div className="card-bottom-se">
                    <ul>
                      <li><i class="bi bi-check-lg"></i>Integrated Business Processes</li>
                      <li><i class="bi bi-check-lg"></i>Enhanced Productivity</li>
                      <li><i class="bi bi-check-lg"></i>Data-Driven Decision-Making</li>
                    </ul>
                  </div>
                  <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>
                 
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-image-ver-1">
                  <a href="/">
                  <div className="card-head-top">
                    <img src="/img/Copilot_scalable.png" alt="Copilot_scalable" className="icon" />
                    <h3>Copilot</h3>
                  </div>
                  <div className="card-mid-se">
                    <p>An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire...</p>
                  </div>
                  <div className="card-bottom-se">
                    <ul>
                      <li><i class="bi bi-check-lg"></i>Integrated Business Processes</li>
                      <li><i class="bi bi-check-lg"></i>Enhanced Productivity</li>
                      <li><i class="bi bi-check-lg"></i>Data-Driven Decision-Making</li>
                    </ul>
                  </div>
                  <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>
                 
                </div>
              </div>
            </div>


          </div>
        </section>



        <section className="p-222">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>
                    Are you ready to transform your business with modernized
                    technology?
                  </h2>
                  <p>
                    At Dynamics Square. We transform businesses with Microsoft's
                    most modern tech - Microsoft Cloud, Azure, AI (Artificial
                    Intelligence), Power Apps, Dataverse, Dynamics 365, Power
                    BI, AR (Augmented Reality), VR (Virtual Reality), MR (Mixed
                    Reality), and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Implementation</h3>
                    <p className="card-text">
                      We at Dynamics Square believe in seamless Microsoft
                      dynamics implementation along with long-term assistance.
                      Our expertise enables us to deliver a hassle-free
                      implementation of the Dynamics 365 suite of ERP and CRM
                      applications without any traditional glitches & hassles.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Upgrade Services</h3>
                    <p className="card-text">
                      We have successfully transformed businesses with our
                      futuristic Upgrading services. Dynamic Square ensures that
                      the team can extend developing modern methodologies for
                      unveiling your true business potential.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients even
                      after the project is completed.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bc-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Industries </h2>
                  <p>
                    We are a Microsoft Dynamics 365 partner in Canada, and we
                    aim to offer services for potential business growth. We are
                    not only helping businesses adapt to agility, innovation,
                    and transformation but we empower them to stay ahead of the
                    curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-d">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: false,
              }}

              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients even
                      after the project is completed.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients even
                      after the project is completed.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients even
                      after the project is completed.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients even
                      after the project is completed.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">
                      We prioritize long-term associations with you over
                      anything. Our team is happy to assist the clients even
                      after the project is completed.
                    </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>


        <section className="col-pd-22">
          <div className="container">
            <LinkWithFadeOut />

          </div>
        </section>

        <section className="p-222-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Read what Thought Leaders<br />
                  Have to Say</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Up To 15% Increase In Microsoft Cloud Solution Prices: What You Need To Know</h3>
                    <p className="card-text">We at Dynamics Square believe in seamless Microsoft dynamics implementation along with long-term assistance</p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Install Microsoft Dynamics 365 Business Central (On Premises)</h3>
                    <p className="card-text">We have successfully transformed businesses with our futuristic Upgrading services.</p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card poster-card">
                  <a href="#">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Up To 15% Increase In Microsoft Cloud Solution Prices: What You Need To Know</h3>
                    <p className="card-text">We at Dynamics Square believe in seamless Microsoft dynamics implementation along with long-term assistance</p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="new-testi-wraper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="testmonial-new-slider">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mySwiper-testi"
                  >
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          <h3>Our Leadership</h3>
                          <p>We understand that business complexities are constantly evolving, and being compliant with this paradigm shift is of vital importance for a business to sustain.</p>
                          <span>Manish G</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testn-inner">
                        <div className="client-info">
                          <h3>Our Leadership</h3>
                          <p>We take pride in being an ERP partner, associating with Microsoft for successful sustainability outcomes.  We understand the importance and thereby take measures to accelerate the process  </p>
                          <span>Nitesh</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="new-main-heading">
                  <h2>Why Dynamics Square?</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* <ROIPage /> */}

      </main>
    </>
  );
};

export default Test;
