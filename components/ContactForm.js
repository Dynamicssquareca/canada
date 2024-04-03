import React from 'react';

const ContactForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const url = 'https://crm.zoho.in/crm/WebToLeadForm';
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                console.log('Form submitted successfully!');
                // Reset form fields manually
                event.target.querySelectorAll('input, textarea').forEach((field) => {
                    field.value = '';
                });
            } else {
                console.error('Failed to submit form:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div id='crmWebToEntityForm' className='main-form-wrper' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
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
        </div>
    );
};

export default ContactForm;
