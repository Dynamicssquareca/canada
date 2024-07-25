import { useState,useEffect } from 'react';
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation,Mousewheel } from "swiper";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import LinkWithFadeOut from "../components/LinkWithFadeOut";
import ROIPage from "../components/ROIPage";


const Test = () => {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        setIsLastSlide(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  const handleWheel = (event) => {
    if (isLastSlide) {
      event.preventDefault(); // Prevent default scrolling
      document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event) => {
    if (isLastSlide && (event.key === 'PageUp' || event.key === 'ArrowUp')) {
      event.preventDefault(); // Prevent default scrolling
      document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLastSlide]);


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
            {/* <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h1>Top-rated Dynamics 365 Partner in Canada</h1>
                  <p>Dynamics Square is a top-rated Microsoft Partner offering tailored Dynamics 365 solutions to boost productivity and efficiency. </p>
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
                  <h2>Amplify Growth with a Reliable Microsoft Solutions Partner </h2>
                  <p>Dynamics Square, a leading Microsoft Dynamics 365 partner, embraces innovations and technologies to revolutionize your business for maximized growth. </p>
                  <Link href="/about/">
                    <a className="btn">
                      About Us <i class="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="slider-banner">
                <div className="video-bg">
                  <img src="/img/ca-banner-1.png" alt="ca-banner-1" />
                </div>
                <div className="video-conte">
                  <h1>Canda’s Trusted Microsoft Dynamics 365 Partner </h1>
                  <p>From implementation to training, Dynamics Square is your go-to partner that utilizes AI-driven technologies that drive the digital transformation of business. </p>
                  <Link href="#exampleModal">
                    <a className="btn"  data-bs-toggle="modal"
                    >Talk to Expert <i class="bi bi-arrow-right"></i>
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
                  <h2>Trusted by Global Brands! </h2>
                  <p>Being a Microsoft Gold Partner, our years of expertise and knowledge can drive your business towards exceptional outcomes and enhanced performance through innovative Dynamics 365 solutions. </p>
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
                    <h3>14+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="new-counter">
                    <h3>24*7</h3>
                    <p>Reliable Support</p>
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
                  <h2>Dynamics 365 Solutions: Innovative Solutions for Modern Businesses </h2>
                  <p>We help organizations utilize the power of <a href="/solutions/microsoft-dynamics-365/">Dynamics 365 Solutions</a> to streamline complex operations, promote collaboration, enhance customer experiences, and drive business growth. We not only empower businesses to adapt with agility and innovation, but we also support them to stay competitive. </p>
                </div>
              </div>
            </div>

            <div className="row new-image-card">
              <div className="col-lg-4 d-flex">
                <div className="card-image-ver-1">
                  <a href="/solutions/dynamics-365-business-central/">
                    <div className="card-head-top">
                      <img src="/img/BusinessCentral_scalable.png" alt="BusinessCentral_scalable" className="icon" />
                      <h3>Dynamics 365 <br />Business Central</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>A complete ERP solution for SMBs embedded with automation and cloud capabilities.</p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i class="bi bi-check-lg"></i>Simplify Business Operations </li>
                        <li><i class="bi bi-check-lg"></i>Boost Overall Efficiency </li>
                        <li><i class="bi bi-check-lg"></i>Enhance Productivity </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-dynamics-365-finance/">
                    <div className="card-head-top">
                      <img src="/img/Finance_scalable.png" alt="Finance_scalable" className="icon" />
                      <h3>Dynamics 365<br />
                        Finance</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Streamline complex financial operations while managing the entire business on the go. .</p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i class="bi bi-check-lg"></i>Get Clear Financial Picture </li>
                        <li><i class="bi bi-check-lg"></i>Simplify Financial transactions </li>
                        <li><i class="bi bi-check-lg"></i>Perform data-driven Planning </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card-image-ver-1">
                  <a href="/solutions/dynamics-365-supply-chain-management/">
                    <div className="card-head-top">
                      <img src="/img/SupplyChainManagement_scalable.png" alt="SupplyChainManagement_scalable" className="icon" />
                      <h3>Dynamics 365<br />
                        Supply Chain</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>From raw material to customer delivery, track your supply chain with real-time status. </p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i class="bi bi-check-lg"></i>Optimize Product Flow </li>
                        <li><i class="bi bi-check-lg"></i>Enable 24*7 Inventory Visibility </li>
                        <li><i class="bi bi-check-lg"></i>Enhance Demand Planning </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-dynamics-365-sales/">
                    <div className="card-head-top">
                      <img src="/img/Sales_scalable.png" alt="Sales_scalable" className="icon" />
                      <h3>Dynamics 365 <br />Sales</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Supercharge sales operations, convert more leads, and offer a superior customer experience. </p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i class="bi bi-check-lg"></i>Close Deals Faster </li>
                        <li><i class="bi bi-check-lg"></i>Build Strong Relationships </li>
                        <li><i class="bi bi-check-lg"></i>Boost Sales Performance </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card-image-ver-1">
                  <a href="/solutions/microsoft-power-bi/">
                    <div className="card-head-top">
                      <img src="/img/PowerBI_scalable.png" alt="PowerBI_scalable" className="icon" />
                      <h3>Microsoft <br/>Power BI</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Connect multiple data sources, perform data analysis, and find hidden information through interactive visualizations. </p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i class="bi bi-check-lg"></i>Turn Data into Insights </li>
                        <li><i class="bi bi-check-lg"></i>Build Interactive Reports </li>
                        <li><i class="bi bi-check-lg"></i>Share Useful Insights Across Team </li>
                      </ul>
                    </div>
                    <span>Know More <i className="bi bi-arrow-right"></i></span>
                  </a>

                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card-image-ver-1">
                  <a href="/">
                    <div className="card-head-top">
                      <img src="/img/Copilot_scalable.png" alt="Copilot_scalable" className="icon" />
                      <h3>Microsoft <br/>Copilot</h3>
                    </div>
                    <div className="card-mid-se">
                      <p>Leverage the limitless capabilities of Microsoft’s AI-assistance with natural language prompts.</p>
                    </div>
                    <div className="card-bottom-se">
                      <ul>
                        <li><i class="bi bi-check-lg"></i>Avail Automation </li>
                        <li><i class="bi bi-check-lg"></i>Enhance Productivity </li>
                        <li><i class="bi bi-check-lg"></i>Expand Knowledge </li>
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
                  <h2>Transform and Optimize your Business with our Reliable Services </h2>
                  <p>Experience seamless business transformation and achieve operational excellence with our tailor-made Dynamics 365 services, specially curated for unique business like yours. </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="/services/dynamics-365-implementation/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Implementation</h3>
                    <p className="card-text">Adapt a personalized Dynamics 365 solution that suits your requirements to drive growth, efficiency, and consistent profitability.</p>
                    <a href="/services/dynamics-365-implementation/">Start Transformation Now! <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="/services/dynamics-365-upgrade/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Upgrade Services</h3>
                    <p className="card-text">Upgrade to Dynamics 365 and revolutionize your operations. Eliminate manual tasks, reduce errors, and unlock new growth opportunities. </p>
                    <a href="/services/dynamics-365-upgrade/">Upgrade Now!  <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card poster-card">
                  <a href="/services/dynamics-365-support/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/poster-3.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Support Services</h3>
                    <p className="card-text">Ensure seamless operations and stay consistent on your growth path with our dedicated team of Microsoft experts.</p>
                    <a href="/services/dynamics-365-support/">Get Seamless Support!  <i class="bi bi-arrow-right"></i>
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
                  <h2>Industries that Rely on Us! </h2>
                  <p>As a leading Dynamics 365 partner in Canada, we are catering our services to diverse industries and enabling them to utilize their full business potential. Our deep industry expertise and proven track record enable us to deliver tailored solutions that drive growth, efficiency, and innovation. We're more than just a partner; we're your strategic ally in achieving business excellence. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-d" onWheel={handleWheel}>
            <Swiper
            onSwiper={setSwiperInstance}
              spaceBetween={30}
              centeredSlides={true}
              grabCursor={true}
              mousewheel={{
                enabled: !isLastSlide, // Disable mousewheel if on the last slide
                sensitivity: 1,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Mousewheel]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
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
                    <h3 className="card-title">Healthcare</h3>
                    <p className="card-text">Improve patient care, track medical supplies, and streamline different healthcare operations to enhance patient engagement. </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/dynamics-365-for-ecommerce/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Retail & E-commerce</h3>
                    <p className="card-text">Enhance customer experience, optimize supply chain operations, and drive offline as well as online sales for maximum revenue. </p>
                    <a href="/industries/dynamics-365-for-ecommerce/">
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
                    <h3 className="card-title">Education </h3>
                    <p className="card-text">Perform accurate resource allocation, improve student engagement, and simplify different administrative tasks. </p>
                    <a href="#">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/microsoft-cloud-for-manufacturing/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-1.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Manufacturing </h3>
                    <p className="card-text">Eliminate redundancies from the system, improve product quality, and boost production efficiency with Dynamics 365 for manufacturing. </p>
                    <a href="/industries/microsoft-cloud-for-manufacturing/">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/dynamics-365-for-startups/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Startup</h3>
                    <p className="card-text">Supervise processes, accelerate growth, simplify finances, and focus on scaling business rather than managing it. </p>
                    <a href="/industries/dynamics-365-for-startups/">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/microsoft-cloud-for-nonprofit/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Not for Profit</h3>
                    <p className="card-text">Maximize impact, track donations, maintain strong relationships with donors, and do more for society with the same resources.</p>
                    <a href="/industries/microsoft-cloud-for-nonprofit/">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card poster-card poster-card-hei">
                  <a href="/industries/dynamics-365-for-food-and-beverages/">
                    {" "}
                    <img
                      className="card-img-top"
                      src="/img/industry-poster-2.jpg"
                      alt="Card image cap"
                    />
                  </a>
                  <div className="card-body">
                    <h3 className="card-title">Food & Beverages</h3>
                    <p className="card-text">Maintain optimum food quality, ensure compliance acceptance, and track the entire supply chain with Dynamics 365 for Food & Beverages.</p>
                    <a href="/industries/dynamics-365-for-food-and-beverages/">
                      Know More <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>


        <section className="col-pd-22" id="next-section">
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
              <div className="col-lg-4 d-flex">
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





              
              <div className="col-lg-4 d-flex">
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
              <div className="col-lg-4 d-flex">
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
                  <h2>Partner with a Passionate Team: The Dynamics Square Advantage </h2>
                  <p>We are a team of <b>135+</b> Microsoft-certified Dynamics consultants with a proven track record of offering reliable and trustworthy services to <b>350+</b> global clients. Our superior infrastructure enables us to offer cost-effective services around the clock. For the last <b>14+ years</b>, Dynamics Square has been transforming businesses with futuristic solutions and an exceptional customer experience. </p>
                </div>
              </div>
            </div>

            <div className="row home-bottom-card">
              <div className="col-lg-4 d-flex">
                <div className="home-bottom-card-one flex-aa">
                    <div className="top-tr">
                      <i class="bi bi-check-lg"></i>
                      <h3>Accelerated ROI </h3>
                    </div>
                    <p>Our customized solutions deliver great ROI by streamlining operations, enhancing efficiency, and boosting productivity. </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="home-bottom-card-one flex-aa">
                    <div className="top-tr">
                      <i class="bi bi-check-lg"></i>
                      <h3>Industry Expertise </h3>
                    </div>
                    <p>We have experts with deep understanding of different industries that enable them to find your business challenges and eliminate them with the perfect solution. </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="home-bottom-card-one flex-aa">
                    <div className="top-tr">
                      <i class="bi bi-check-lg"></i>
                      <h3>End-to-End Support</h3>
                    </div>
                    <p>From business audits to post-implementation support, our dedicated team ensures the smooth functioning of your Dynamics 365 solution. </p>
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
