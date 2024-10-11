import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40c2c4a8-8d0b-4e18-8751-9d01fcd29db1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    // Alert message
    alert(res.message);

    // Clear the message box
    event.target.reset();
  };

  // Function to open Google Maps
  const openMap = () => {
    const bhubaneswarLocation = "Bhubaneshwar, India";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(bhubaneswarLocation)}`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take lesser Projects. Feel free to talk with me...</p>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:rishavranjan2395@gmail.com">
                <img src={mail_icon} alt="Email Icon" />
              </a> 
              <p>rishavranjan2395@gmail.com</p>
            </div>
            <div className="contact-detail">
              <a href="tel:+919693989969">
                <img src={call_icon} alt="Phone Icon" />
              </a> 
              <p>+91 9693989969</p>
            </div>
            <div className="contact-detail" onClick={openMap} style={{ cursor: 'pointer' }}> {/* Add onClick handler */}
              <img src={location_icon} alt="Location Icon" /> 
              <p>Bhubaneshwar, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
