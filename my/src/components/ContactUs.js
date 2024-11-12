// import React from 'react';
// import './ContactUs.css'; // Importing the CSS file for this component

// const ContactUs = () => {
//   return (
//     <div id="contact-us" className="contact-section">
//       <h2>Contact Us</h2>
//       <p>Email: support@petsheaven.com</p>
//       {/* <p>Phone: 123-456-7890</p> */}
//       <form className="contact-form">
//         <label>Name:</label>
//         <input type="text" required /><br />
        
//         <label>Email:</label>
//         <input type="email" required /><br />
        
//         <label>Message:</label>
//         <textarea required></textarea><br />
        
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;

//--------------------------------end of working without email send button use------------------------------

import React from 'react';
import './ContactUs.css'; // Importing the CSS file for this component

const ContactUs = () => {
  const supportEmail = "support@petsheaven.com";

  return (
    <div id="contact-us" className="contact-section">
      <h2>Contact Us</h2>
      <p>Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" required /><br />
        
        {/* <label>Email:</label>
        <input type="email" required /><br /> */}
        
        <label>Message:</label>
        <textarea required></textarea><br />
        
        <button type="button" onClick={() => window.open(`mailto:${supportEmail}?subject=Contact from ${document.querySelector('input[type="text"]').value}&body=${document.querySelector('textarea').value}`)}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;


