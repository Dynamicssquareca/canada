import React, { useRef ,useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const Formpop = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();

  useEffect(() => {
    // Load the Zoho script after DOM content is fully loaded
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=71ca64a1fe67db33666b60e6738e2b0e12110cfe01bd5448b4b480868c2e106c6645a91382b95de9744e2bb1d2c15c32gid073c63466c9273296fb4068383baeb645a9d2756e0cb91ceaf8afe45e000b736giddabedeb2a6c65b880d1e1ff667bbff8bba3e9dbed9be61f8c245aed2c9079fb5gid669e5b448523bde9cc318c8c7d98dfd7e73899fd5c333e46de26c7f858c59770&tw=abc2925aeb8aa7182cf0be03ba5ba4e7ecc9b45383c5dec09dbdb1c6916e6d67`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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


    return (
        <div>
              <div className="main-form-wrper">
             <form id='webform196947000014082111' onSubmit={handleSubmit} action='https://crm.zoho.in/crm/WebToLeadForm' name='webform196947000014082111' method='POST' acceptCharset='UTF-8' >
             <input type='text' style={{ display: 'none' }}name='xnQsjsdp'
            value='42fffc10b8e1bd0e89bb7473bab050424c77218dd0b16acc0f772507673b99de' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }}  name='xmIwtLD'
            value='b2d1db1dd5ce2e5430708477a3c62c74a0da5c93fd161077f829e00b758aa6a033290cd3475f624a4df6eb7bfb51b510' />
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
    );
}

export default Formpop;
