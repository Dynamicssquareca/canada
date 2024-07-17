import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const CaseStudySpectra = () => {
  return (
    <>
      <Head>
        <title>Dynamics NAV 2013 | Implement Custom EFT Module</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Learn how a custom EFT module was implemented in Dynamics NAV 2013 for an aluminum extrusion company, streamlining payment processing. " />
        <link rel="canonical" href="https://www.dynamicssquare.ca/case-studies/dynamics-nav13-eft-implementation/" />
        <meta name="robots" content="noindex, nofollow" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({


            })
          }}
        /> */}
      </Head>

      <div className="banner-case">
      </div>
      <div className="banner-case-info">
        <div className="container">
          <div className="row g-color">
            <div className="col-lg-9">
              <div className="banner-case-info-con">
                <span>Case Study</span>
                <h1>Personalized Power Apps <br /> Development</h1>
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="banner-case-info-right">
                <span>Location</span>
                <p>British Columbia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row p-20-3">
            <div className="col-lg-6">
              <div className="case-s-heading">
                <h2>Client Overview</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="case-s-paragraph">
                <p>The client is a world-popular brand in the manufacturing of electric chain hoists, manual chain hoists, lever hoists, electric wire rope hoists, and other lifting products. Also, they deal in manufacturing customized light lifting technology solutions to meet specific business demands. With a reach of 65+ countries, the business is offering world-leading quality while exceeding industry standards to manufacture the best products for evolving businesses.</p>
              </div>
            </div>
          </div>
          <div className="row p-20-4">
            <div className="col-lg-12">
              <div className="case-s-image">
                <img src="/img/case-study-bottom.jpg" alt="case-study-bottom" />
              </div>
            </div>
          </div>
          <div className="row p-20-5">
            <div className="col-lg-6">
              <div className="case-s-heading">
                <h2>Business Challenges</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="case-s-paragraph">
                <p>The client is a leading manufacturer of hoists and industrial lifting equipment, faced inefficiencies and process inconsistencies in their testing and certification processes. These processes were crucial for ensuring the safe and reliable operation of their equipment.</p>
                <p>Here are the key challenges encountered by the business:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Manual Data Entry and Error Prone Testing:</h3>
                <p>The business relied heavily on manual data entry during the testing phase of hoists and similar equipment, which led to errors and inconsistencies.</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Time-Consuming Certificate Generation:</h3>
                <p>Issuing certificates after successful testing involved manual steps, slowing down the overall process and impacting delivery timelines.</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Inefficient <br />Issue Tracking:</h3>
                <p>Their existing application for logging and storing issues resided on an SQL server, requiring significant manual effort for data maintenance and updates.</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Limited Visibility and Accountability:</h3>
                <p>Tracking issues and assigning ownership was cumbersome, creating delays in resolving problems and hindering accountability.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">

            <div className="col-lg-6 align-self-center">
              <img src="/img/Business-Demands-pic.jpg" alt="Business-Demands-pic" />
            </div>
            <div className="col-lg-6">
              <div className="case-new-hedaing">
                <h3>Business Demands</h3>
                <p>The client needed a solution to automate the entire equipment testing and certification process, eliminating manual errors and streamlining the workflow. Additionally, they sought a more efficient system for performing root cause analysis, logging, and tracking issues, with features like:</p>
                <ul>
                  <li><b>Automated Data Capture and Analysis:</b> An application to automatically capture and analyze data during testing, minimizing manual intervention and ensuring accuracy.</li>
                  <li><b>Streamlined Certificate Generation:</b> Automatic certificate generation upon successful completion of testing reduces processing time and administrative burden.</li>
                  <li><b>Centralized Issue Logging and Management:</b> A user-friendly platform for performing root cause analysis and logging issues with pre-defined parameters, allowing for efficient tracking and resolution.</li>
                  <li><b>Improved Issue Ownership and Accountability:</b> The ability to assign ownership to specific individuals or teams for raised issues fosters transparency and faster resolution.</li>
                </ul>
                <p>By addressing these challenges, the business aimed to improve operational efficiency, ensure data accuracy, and expedite equipment delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="case-new-hedaing">
                <h3>Objectives</h3>
                <p>The objective of analyzing the entire issue leads to the implementation of an automated certification and issue logging platform to ease the work. This building of two separate applications with Power Apps leads to:</p>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6">
              <div className="case-new-hedaing">
                <ul>
                  <li>Eliminate manual data entry and errors in the certification process.</li>
                  <li>Reduce certificate generation time by automating the process upon successful testing of equipment.</li>
                  <li>Increase efficiency in logging, tracking, and resolving issues through a centralized platform.</li>
                  <li>Improve data accuracy and consistency by automating data capture and analysis.</li>
                  <li>Enhance transparency and accountability by assigning ownership to specific personnel for raised issues.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="case-new-hedaing">
                <h3>Solution Implemented</h3>
                <p>Following a comprehensive system analysis by our experts, we recommended implementing Microsoft Power Apps as the optimal solution to address the specific requirements of the business. This decision was driven by several key factors:</p>
                <h4>Leveraging Existing Infrastructure:</h4>
                <p>The client already utilized the Microsoft suite with standard licenses, making the transition to Power Apps seamless. Both Power Apps and Microsoft Suite operate on the familiar Microsoft Azure and SharePoint platforms, minimizing the learning curve for the team. Their existing comfort with accessing and utilizing SharePoint's functionalities further facilitated the adoption of Power Apps.</p>
                <h4>Scalability and Future Integration:</h4>
                <p> Power Apps empower the business to scale their solution efficiently as their needs evolve. The platform also offers seamless integration with other solutions within the Microsoft Dynamics ecosystem, allowing to explore additional functionalities in the future.</p>
                <h4>Accelerated Development and Cost Savings:</h4>
                <p>During the successful implementation, we leveraged Microsoft Copilot, the embedded AI system within Power Apps. By utilizing Copilot, we reduced application development efforts by 30%. This efficiency translated to significant cost savings and a shorter implementation timeframe.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/cas-side--p.png" alt="cas-side--p" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-s-heading">
                <h2 style={{ marginBottom: '30px' }}>Benefits</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Manual Data Entry and Error Prone Testing:</h3>
                <p>The business relied heavily on manual data entry during the testing phase of hoists and similar equipment, which led to errors and inconsistencies.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Time-Consuming Certificate Generation:</h3>
                <p>Issuing certificates after successful testing involved manual steps, slowing down the overall process and impacting delivery timelines.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11">
                <h3>Inefficient <br />Issue Tracking:</h3>
                <p>Their existing application for logging and storing issues resided on an SQL server, requiring significant manual effort for data maintenance and updates.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-dd-11">
                <p>Their existing application for logging and storing issues resided on an SQL server, requiring significant manual effort for data maintenance and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-g-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tt-heading">
                <h2>Case Highlight</h2>
                <p>We, Dynamics Square, implemented a solution built on Microsoft Power Apps, leveraging client's existing Microsoft infrastructure and offering key benefits:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11 flex-11-colo">
                <h3>Reduced Errors and Streamlined Workflow:</h3>
                <p>Power Apps automated data capture and analysis during machine testing, eliminating manual errors and streamlining the certification process.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11 flex-11-colo">
                <h3>Faster Delivery Times:</h3>
                <p>Automatic certificate generation upon successful testing of equipment significantly reduced processing time, expediting equipment delivery.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11 flex-11-colo">
                <h3>Enhanced Issue Management:</h3>
                <p>A centralized issue-logging platform with pre-defined parameters simplifies tracking, ownership assignment, and resolution.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11 flex-11-colo">
                <h3>Improved Transparency and Accountability:</h3>
                <p>Assigning ownership to specific personnel fostered faster issue resolution and clear accountability.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="box-dd-1 flex-11 flex-11-colo">
                <h3>Reduced Development Costs and Time:</h3>
                <p>Utilizing Microsoft Copilot, an embedded AI system, minimized development efforts by 30%, resulting in cost savings and a quicker turnaround time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CaseStudySpectra;
