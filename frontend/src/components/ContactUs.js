import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const supportEmail = "support@petsheaven.com";

  return (
    <div className="mine">
      <div id="contact-us" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" required /><br />

          <label>Message:</label>
          <textarea required></textarea><br />

          <button 
            type="button" 
            onClick={() => 
              window.open(`mailto:${supportEmail}?subject=Contact from ${document.querySelector('input[type="text"]').value}&body=${document.querySelector('textarea').value}`)
            }
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="photo">
        <img 
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww" 
          alt="Contact Us Image"
        />
      </div>
    </div>
  );
};

export default ContactUs;


