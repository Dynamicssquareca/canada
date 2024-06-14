import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



const FormNewUI = () => {
  const router = useRouter();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const form = useRef();
  const [defaultCountryCode, setDefaultCountryCode] = useState('ca'); // Default to 'ca'
  const [formData, setFormData] = useState({
    phone: ''
  });
  const [errors, setErrors] = useState({});
/*auto fetch*/
useEffect(() => {
  // Fetch IP information when the component mounts
  fetchCountryCodeByIP();
}, []);

const fetchCountryCodeByIP = () => {
  fetch(`https://api.ipdata.co?api-key=481c4d32f20be30420f3d2b39e39c6a7cbe770c3fa3776f37ea89df4`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch IP information');
      }
      return response.json();
    })
    .then(data => {
      let countryCode = data.country_code.toLowerCase();
      console.log("Country Code:", countryCode); // 
      setDefaultCountryCode(countryCode);
      console.log("Default Country Code:", defaultCountryCode);
    })
    .catch(error => {
      console.error('Error fetching IP information:', error);
      setDefaultCountryCode('ca');
    });
};
  

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(String(email).toLowerCase());
  };


  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };
  const isValidPhoneNumber = (phone) => {
    // Phone number should be between 10 to 13 characters
    return /^\d{10,15}$/.test(phone);
  };


  // const validatePhone = (phone) => {
  //   const phoneRegex = /^\d{10,13}$/;
  //   const isValid = phoneRegex.test(phone);
  //   if (!isValid && phone.length > 0) {
  //     setPhoneError("Please enter a valid phone number (10-13 digits).");
  //   } else {
  //     setPhoneError("");
  //   }
  //   return isValid;
  // };

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
    let isValid = true;

    isValid = validateName(form.current.name.value) && isValid;
    isValid = validateCompanyName(form.current.companyname.value) && isValid;
    isValid = validateMessage(form.current.message.value) && isValid;

    if (!validateEmail(form.current.email.value)) {
      setEmailError("Please enter a valid work email address.");
      isValid = false;
    } else {
      setEmailError(""); // Clear email error if email is valid
    }

    // if (form.current.phone.value && !validatePhone(form.current.phone.value)) {
    //   isValid = false;
    // }

    if (isValid) {
      setIsSubmitting(true); // Start loading animation

      try {
        await emailjs.sendForm('service_7pxmyip', 'template_e4x6ryp', form.current, 'iOfmJhDFEupCGYBmx');
        console.log('Email sent successfully');
        setTimeout(() => {
          router.push("/thank-you/");
        }, 500); // Redirect to thank-you page after 5 seconds
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle error
      } finally {
        setIsSubmitting(false); // Stop loading animation
        form.current.reset(); // Reset form
      }
    }
  };


  return (
    <div className='rows-box-sh'>
      <div className="main-form-wrper main_form-wrper_contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className='row'>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="name"
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
                  name="job"
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
                  name="email"
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
                {/* <input
                  type="tel"
                  className="form-control"
                  placeholder=""
                  name="phone"
                  onBlur={(e) => validatePhone(e.target.value)}
                />
                <label htmlFor="phone">Phone Number</label> */}
                  <PhoneInput inputStyle={{ width: '100%', height: 'auto',paddingLeft:"60px" }}
                  country={defaultCountryCode}
                  type="tel" // Set default country code
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder=""
                  inputClass="form-control" // CSS class for the input
                  inputProps={{
                    name: 'phone',
                    required: false,
                    autoFocus: false,
                    onBlur: () => {
                      if (formData.phone.trim() !== '') { // Check if phone number is not empty before validation
                        if (!isValidPhoneNumber(formData.phone)) {
                          setErrors({ ...errors, phone: 'Invalid phone number format' });
                        } else {
                          delete errors.phone; // Clear error if phone number is valid
                        }
                      } else {
                        delete errors.phone; // Clear error if phone number is empty
                      }
                    }
                  }}
                  countryCodeEditable={false}
                  // onlyCountries={['us', 'ca', 'mx', 'gb']}
                  excludeCountries={['pk']}
                />
              </div>
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="companyname"
                  onBlur={() => validateCompanyName(form.current.companyname.value)}
                  onChange={() => setCompanyNameError("")}
                />
                <label htmlFor="Company Name">*Company Name</label>
              </div>
              {companyNameError && <small className="text-danger">{companyNameError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <select className="form-select" name="service">
                  <option disabled selected hidden>Looking For?</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Upgrade/Migration">Upgrade/Migration</option>
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
                  name="message"
                  onBlur={() => validateMessage(form.current.message.value)}
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
                <button
                  type="submit"
                  className="btn btn-primary fomr-submit"
                  disabled={isSubmitting} // Disable button while submitting
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
                    <a href="tel:+12818990865" target="_self">
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
                  <span>+1-281-899-0865 </span>
                </div>
                <div className="cont-info">
                  <span>
                    Technical Support:{" "}
                  </span>
                  <span>+1-281-899-0716</span>
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

        </form>
      </div>
    </div>
  );
}

export default FormNewUI;
