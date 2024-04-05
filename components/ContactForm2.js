import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const ContactForm2 = () => {
  const router = useRouter();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const form = useRef();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,13}$/;
    const isValid = phoneRegex.test(phone);
    if (!isValid && phone.length > 0) {
      setPhoneError("Please enter a valid phone number (10-13 digits).");
    } else {
      setPhoneError("");
    }
    return isValid;
  };

  const validateName = (name) => {
    if (!name) {
      setNameError("Please enter your full name.");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateCompanyName = (companyName) => {
    if (!companyName) {
      setCompanyNameError("Please enter your company name.");
      return false;
    } else {
      setCompanyNameError("");
      return true;
    }
  };

  const validateMessage = (message) => {
    if (!message) {
      setMessageError("Please enter your message.");
      return false;
    } else {
      setMessageError("");
      return true;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Ensure that form.current is defined before accessing its properties
    if (!form.current) {
      console.error("Form reference is not set.");
      return;
    }

    const formData = new FormData(form.current);
    const url = 'https://crm.zoho.in/crm/WebToLeadForm';
    let isValid = true;

    isValid = validateName(formData.get('Last Name')) && isValid;
    isValid = validateCompanyName(formData.get('Company')) && isValid;
    isValid = validateMessage(formData.get('Description')) && isValid;

    const email = formData.get('Email');
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid work email address.");
      isValid = false;
    } else {
      setEmailError(""); // Clear email error if email is valid
    }

    const phone = formData.get('phone');
    if (phone && !validatePhone(phone)) {
      isValid = false;
    }

    if (isValid) {
      setIsSubmitting(true); // Start loading animation

      try {
        await emailjs.sendForm('service_fhump8w', 'template_vq0gu2g', e.target, 'K7wsWama116Jghyaq');
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully!');
        setTimeout(() => {
          router.push("/thank-you/");
        }, 500); // Redirect to thank-you page after 5 seconds
      } catch (error) {
        console.error('Error sending form:', error);
        // Handle error, e.g., display error message to user
      } finally {
        setIsSubmitting(false); // Stop loading animation regardless of success or failure
      }
    }
  };
  

  return (
    <div className='rows-box-sh'>
      <div id='crmWebToEntityForm' className="main-form-wrper main_form-wrper_contact">
        <form id='webform196947000014082029' ref={form} onSubmit={sendEmail} action='https://crm.zoho.in/crm/WebToLeadForm' name='WebToLeads196947000014082029' method='POST' acceptCharset='UTF-8'>
          <input type='text' style={{ display: 'none' }} name='xnQsjsdp' vvalue='7dd97cd6573848c1d3f988e72674f0db3d8b6f5b3c44bc4027d7e4ddeae5a866' />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input type='text' style={{ display: 'none' }}  name='xmIwtLD'  value='5003ccd8063a53aef0a9ec8e9d2ba1d57cb4198968d444c3bb755f18cb3cacb13613368ade1eca29db0da4ba1fe4650e' />
          <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
          <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.ca/thank-you/' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="Last Name"
                  id="name"
                  onBlur={() => validateName(form.current.name.value)}
                  onChange={() => setNameError("")}

                />
                <label htmlFor="name">*Name</label>
                <input type="hidden" value={router.asPath} name="url" />
              </div>
              {nameError && <small className="text-danger">{nameError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="LEADCF5"
                />
                <label htmlFor="Job">Job title</label>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  name="Email"
                  onBlur={(e) => {
                    if (!validateEmail(e.target.value)) {
                      setEmailError("Please enter a valid work email address.");
                    } else {
                      setEmailError("");
                    }
                  }}
                />
                <label htmlFor="email">*Work Email</label>
              </div>
              {emailError && <small className="text-danger">{emailError}</small>}
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder=""
                  name="Phone"
                  onBlur={(e) => validatePhone(e.target.value)}
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
              {phoneError && <small className="text-danger">{phoneError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="Company"
                  onBlur={() => validateCompanyName(form.current.Company.value)}
                  onChange={() => setCompanyNameError("")}
                />
                <label htmlFor="Company Name">*Company Name</label>
              </div>
              {companyNameError && <small className="text-danger">{companyNameError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <select className="form-select" name="LEADCF7" aria-label="Default select example">
                  <option disabled selected hidden>Looking For?</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Upgrade&#x2f;Migration">Upgrade/Migration</option>
                  <option value="Support">Support</option>
                </select>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder=""
                  rows="3"
                  name="Description"
                  onBlur={() => validateMessage(form.current.Description.value)}
                  onChange={() => setMessageError("")}
                ></textarea>
                <label htmlFor="message">*Any specific requirements or questions?</label>
              </div>
              {messageError && <small className="text-danger">{messageError}</small>}
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="form-check-input"
                  id="exampleCheck1"
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
              {/* <div className='zcwf_col_fld'>
                        <input type='submit' id='formsubmit' className='btn btn-primary fomr-submit formsubmit zcwf_button' value='Submit' title='Submit' />
                    </div> */}
                <button
                  id='formsubmit'
                  type="submit"
                  title='Submit'
                  value='Submit'
                  className="btn btn-primary fomr-submit"
                  disabled={isSubmitting} 
                >
                  {isSubmitting ? 'Sending...' : 'Let’s Connect'}
                </button>
              </div>
            </div>

          </div>
          <div className='row pa-43'>
            <div className='col-lg-5'>
              <div className='text-center text-center-ff'>
                <p>Get in touch Instantly</p>
                <div className='coant-ii d-flex'>
                  <div className='icns-boxx'>
                    <a href="tel:+12898070740" target="_self">
                      <img src="/img/group_call.png" alt="group_call" />
                      <span>Call</span>
                    </a>
                  </div>
                  <div className='icns-boxx'>
                    <a href="mailto:info@dynamicssquare.com">
                      <img src="/img/group_mail.png" alt="group_mail" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>
              <div className="addre-rigt-new">
                <div className="cont-info">
                  <span>
                    Sales Support:{" "}
                  </span>
                  <span>+1 289 807 0740</span>
                </div>
                <div className="cont-info">
                  <span>
                    <span>
                      Email Us:{" "}
                    </span>
                    <a href="mailto:info@dynamicssquare.com">
                      info@dynamicssquare.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Do not remove this --- Analytics Tracking code starts */}
          <script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=40f5af88001e4da2b4b6c3586c4b8ac031f7247714d3ceed215be26031e767033562ceb3a70e2ee8f09cc6d57e92df5cgid187a6c52c312cf1b9ae288ea16d1ab59510bf1ff6ec311333f1ba8ef59dcfa82gide9e25cb7d73650421a79d57c7f8520c8481b2d3579a39d504244288458aafef6gid40fcd50c5be571e9cc0f7e63ac028e0a999541b267c4f25d9a366f584a6c7966&tw=e1c5c50bd7e5623c049cebcdfb2afc28949310643c32f1f6f05ce0bef5967715'></script>
        </form>
      </div>
    </div>
  );
}

export default ContactForm2;
