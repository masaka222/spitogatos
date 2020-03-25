import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='contactBackground'/>
      <div className="contact">
          <h2 className="mainContent__title" id='contact-title'>Contact Us</h2>
          <p className="mainContent__text" id='contact-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form>
            <div className='form_group'>
              <input type='text' name='full name' id='name' className = 'form_input' required/>
              <label htmlFor='name' className='form-label'> Full Name *</label>
              <div className='error-message'>Help Text</div>
            </div>
            <div className='form_group'>
              <input type='email' name='email' id='email' className = 'form_input' required/>
              <label htmlFor='email' className='form-label'> E-mail *</label>
              <div className='error-message'>Help Text</div>
            </div>
            <div className='form_group'>
              <select id="subject" className = 'form_input' name="subject" required>
                <option disabled="disabled" value="selected" className='dropdown'>Subject</option>
                <option value="subject1">Subject 1</option>
                <option value="subject2">Subject 2</option>
                <option value="subject3">Subject 3</option>
              </select>
              <div className='error-message'>This field is required</div>
            </div>
            <div className='form_group'>
              <textarea name="message" id="message" className = 'form_input' maxLength="500"></textarea>
              <label htmlFor='message' className='form-label'> Message </label>
              <div className='error-message'>500</div>
            </div>
            <div className='checkbox-button'>
              <input type="checkbox" name="check" value="2" required/> 
                <span className='checkbox-text'> 
                  By submitting this form, you confirm that you agree to 
                  <a href='/'> our terms of use</a> and <a href='/'>privacy policy</a>
                </span>
              <input type='submit' value='Submit' className='button' id='contact_button'/>
            </div>
          </form>
        </div>
    </>
  );
}

export default Contact;