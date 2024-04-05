import React, { useRef ,useState, useEffect} from 'react';
import Form from "./Form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const Footer = () =>{
  
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal]  = useState(false);
  function handleCloseModal(){            
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
}

useEffect(() => {
  // Load the Zoho script after DOM content is fully loaded
  const loadScript = () => {
    const script = document.createElement('script');
    script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=896f6f18841a36eb90d6248cdaa668a1a7a78bb018f982aac2abeea4c3610378b6453e0f3e43be1481afbaa0b82f9207gidc97ab01bd427e143427a421e60384bc1914b6210642e892ab17840257a84a2d0gidac75d1020e78984dc17c7cf694a500a646601a85fac020faeea1930924216268gid22bf546c1245052771a549fa11f02a4c771f33fc0babbf556c2afc3cf199306d&tw=e21199e9fb52a052561faf16aea1df5b4ca4073a92d8f6f6571eada71346efb7`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
    script.async = true;
    document.body.appendChild(script);
  };

  if (document.readyState === 'complete') {
    loadScript();
  } else {
    window.addEventListener('DOMContentLoaded', loadScript);
  }

  // Clean up function to remove the script when the component unmounts
  return () => {
    const script = document.querySelector('script[src^="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet"]');
    if (script) {
      script.remove();
    }
  };
}, []);

const handleSubmit = async (event) => {
  setDisplay("spinner-border text-success");
  event.preventDefault();
  setDisplay("spinner-border text-success");
  const formData = new FormData(event.target);
  const url = 'https://crm.zoho.in/crm/WebToLeadForm';

  try {
      // Send email using EmailJS
      await emailjs.sendForm('service_fhump8w', 'template_vq0gu2g', event.target, 'K7wsWama116Jghyaq');


      // Submit form data to Zoho CRM
      const response = await fetch(url, {
          method: 'POST',
          body: formData
      });

      if (response.ok) {
          console.log('Form submitted successfully!');
          // Reset form fields manually
          event.target.querySelectorAll('input, textarea').forEach((field) => {
              field.value = '';
              // router.push('/thank-you/');
          });

          // Redirect to thank you page after 4 seconds
          setTimeout(() => {
            event.target.reset();
              router.push('/thank-you/');
          }, 100);
      } else {
          console.error('Failed to submit form:', response.statusText);
      }
  } catch (error) {
      console.error('Error submitting form:', error);
  }
};

    return(
    <>
    {!closeModal && 
     <div
        className="modal fade form-main-model"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Request Callback
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <p></p>
            </div>
            <p>
              Please complete the form below and we will be in touch or{" "}
              <a href="tel:+2818990865" target="_self" rel="">
                book a call
              </a>{" "}
              with one of our Microsoft consultants.
            </p>
            <div className="modal-body">
            <div className="main-form-wrper">
             <form id='webform196947000014082098' onSubmit={handleSubmit} action='https://crm.zoho.in/crm/WebToLeadForm' name='webform196947000014082098' method='POST' acceptCharset='UTF-8'>
             <input type='text' style={{ display: 'none' }} name='xnQsjsdp'
            value='dc3da275598c74f192988980ef0476a73d821628b83fb5cae53f7d150db103fa' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD'
            value='7e571d153c74708b9bd93189b1dad403d1460aa7d265da04e16bf59c4f51d0bbc30151bdddbaf2b0166772ec566cf38b' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.ca/thank-you/' />
                  <div className="mb-3">
                    <input
                      type="text"
                      id='Last_Name'
                      className="form-control"
                      placeholder="*Full Name"
                      name="Last Name"
                      required
                    />
                    <input type="hidden" value={router.asPath} name="url" />
                  </div>

                  <div className="mb-3">
                    <input
                      id='Email'
                      type="email"
                      className="form-control"
                      placeholder="*Work Email"
                      name="Email"
                      pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id='Company'
                      className="form-control"
                      placeholder="*Company Name"
                      name="Company"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      id='Phone'
                      className="form-control"
                      placeholder="*Phone Number"
                      name="Phone"
                      pattern="^\d{10,13}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id='Description'
                      placeholder="*How Can We Help You?"
                      rows="3"
                      name="Description"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      I agree to the
                      <a href="/privacy-policy/" target="_blank">
                        {" "}
                        Privacy Policy{" "}
                      </a>
                      and
                      <a href="/terms-of-use/" target="_blank">
                        {" "}
                        Terms of Service{" "}
                      </a>
                      .
                    </label>
                  </div>

                  <div className="spiner-wrper">
                    <button
                      type="submit"
                      className="btn btn-primary fomr-submit"
                    >
                      Submit
                    </button>
                    {/* <div className={display} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

                  }

      <section id="services" className="services bg-shape ovr-f hidesec">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Book a Free Consultation</h2>
            <p>
              See How Dynamics Square Can Help Transform Your Business With
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row justify-content-md-center">
            <div className="col-lg-10 col-md-10">
              <div className="row g-0 extra-height">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="main-form-wrper-common">
                    <Form />
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-6 hide-c">
                  <img
                    src="/img/contactfor-sede-img.jpg"
                    alt="contactfor-sede-img"
                    className="image-cover"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div className="footer-contact-s">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-4">
              <div className="const-list-name">Ontario</div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  800 Steeles Ave. W. #B10155 Thornhill, ON. L4J 7L2
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+12898070740">
                  +1 289 807 0740
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="const-list-name">British Columbia</div>
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
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+17783815388">
                  +1 778 381 5388
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  />
                </a>
                <p>
                  Dynamics Square is Canada's leading Microsoft Gold Certified Partner
                  that caters to the needs of orgnizations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.
                </p>
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
                    <a href="/products/dynamics-365-business-central/">
                      Business Central
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-power-bi/">
                      Power BI
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-azure/">Azure IoT</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="/products/microsoft-dynamics-crm/">
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
                    <a href="/our-services/">Our Services</a>
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
                    <a
                      target="_self"
                      href="/blog/"
                      rel=""
                    >
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
                      aria-label="visit twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.facebook.com/dynamicssquareca"
                      className="facebook"
                      aria-label="visit facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/c/DynamicsSquare"
                      className="instagram"
                      aria-label="visit instagram"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.linkedin.com/company/dynamics-square-canada/"
                      className="linkedin"
                      aria-label="visit linkedin"
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
             
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2023 Dynamics Square.</span>
            <div className="footer-extra-link">
              <a href="/terms-of-use/" style={{color:'#ff6f7a'}}>Terms of Use </a>
              <a href="/cookie-policy/" style={{color:'#ff6f7a'}}>| Cookie </a>
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
    }
    export default Footer