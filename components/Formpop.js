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
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=70c24d4975512dfa7c830f36618daa8b5f66cda1aebefba8da147efd1b1cf38a51e7734f6276ee68531d3dde2f66505bgidbce83620d0affb176e22c184c40961d722298bb645dfc580f90e46cfbc81ac1bgidb962b13717e09f15c42efb1e69b82e3ad9ead811e3a0b4988c817e26d11086a6gid1270d5357a99165409a48ec01bc36882cefae2a662492fb22065575acac426ba&tw=f3456c97c3a524a3f1fd6030bd7b8ba932dff0128fa15094cce82b29449dd003`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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
             <form id='webform196947000014082111' onSubmit={handleSubmit}>
             <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='a4a8a2dc05d921d1c72778cebd46d475cb9656401fc994179f5491f37ba92fa0' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='bb9094d5996050da0a5575a6bb1bd3e239a20804ef5dccf84e824f18f377aec65a9741794edebb6050a4018d296c5ef1' />
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
