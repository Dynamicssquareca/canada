import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';

const ContactForm = () => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        setDisplay("spinner-border text-success");
        event.preventDefault();
        setDisplay("spinner-border text-success");
        const formData = new FormData(event.target);
        const url = 'https://crm.zoho.in/crm/WebToLeadForm';

        try {
            // Send email using EmailJS
            // await emailjs.sendForm('service_fhump8w', 'template_vq0gu2g', event.target, 'K7wsWama116Jghyaq');

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
                    router.push('/thank-you');
                }, 4000);
            } else {
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            {/* <div id='crmWebToEntityForm' className='main-form-wrper' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
            <form id='webform583330000000339005' onSubmit={handleSubmit}>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='ad5c4e51162238d204dc5b9178c4c687f9acbe466af2e0ae9e7ee4a13ae57565' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='19c0a3b5fa3815ccfa9f3584c4d2fd8b943b9eee353c8adad5a9ba467600b3dc4139560365218aa5dbf412848aa1df65' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https://canda-new-13-update.vercel.app/thank-you/' />
                
                <div className='zcwf_title' style={{ maxWidth: '600px', color: 'black', fontFamily: 'Arial' }}>Contact Us</div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='First_Name'>First Name</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxLength='40'  className="form-control" /></div>
                </div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Last_Name'>Last Name <span style={{ color: 'red' }}>*</span></label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxLength='80' required  className="form-control" /></div>
                </div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Email'>Email</label></div>
                    <div className='zcwf_col_fld'><input type='text' ftype='email' autoComplete='false' id='Email' name='Email' crmLabel='' maxLength='100'  className="form-control"  /></div>
                </div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Mobile'>Mobile</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Mobile' name='Mobile' maxLength='30'  className="form-control" /></div>
                </div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Designation'>Company</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Designation' name='Designation'  className="form-control"  maxLength='100' /></div>
                </div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Description'>Description</label></div>
                    <div className='zcwf_col_fld'><textarea  className="form-control" id='Description' name='Description'></textarea></div>
                </div>
                
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'></div>
                    <div className='zcwf_col_fld'>
                        <input type='submit' id='formsubmit' className='btn btn-primary fomr-submit formsubmit zcwf_button' value='Submit' title='Submit' />
                        <input type='reset' className='btn btn-primary fomr-submit zcwf_button' name='reset' value='Reset' title='Reset' />
                    </div>
                </div>
            </form>
        </div> */}

            <div id='crmWebToEntityForm' className='main-form-wrper'>
                <form id='webform583330000000339005' onSubmit={handleSubmit}>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='ad5c4e51162238d204dc5b9178c4c687f9acbe466af2e0ae9e7ee4a13ae57565' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='19c0a3b5fa3815ccfa9f3584c4d2fd8b943b9eee353c8adad5a9ba467600b3dc4139560365218aa5dbf412848aa1df65' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.ca/thank-you/' />
                    <div className="mb-3">
                        <input
                            type="text"
                            id="First_Name"
                            className="form-control"
                            placeholder="*Full Name"
                            name="First Name"
                            required
                        />
                        <input type="hidden" value={router.asPath} name="url" />
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            id='Email'
                            className="form-control"
                            placeholder="* Work Email"
                            name="Email"
                            pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            id='Designation'
                            className="form-control"
                            placeholder="*Company Name"
                            name="Designation"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="tel"
                            id="Mobile"
                            className="form-control"
                            placeholder="*Phone Number"
                            name="Mobile"
                            pattern="^\d{10,13}$"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id='Description'
                            placeholder="* How Can We Help You?"
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
                            id='formsubmit'
                            type="submit"
                            className="btn btn-primary fomr-submit"
                            title='Submit'
                            value='Submit'
                        >
                            Submit
                        </button>
                        {/* <div className={display} role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
