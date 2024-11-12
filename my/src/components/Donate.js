

// import React, { useState, useEffect } from 'react';
// import './Donate.css';

// const Donate = () => {
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState('');
//   const [donors, setDonors] = useState([]);

//   // Fetch the list of donors from the backend
//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/donations');
//         const data = await response.json();
//         setDonors(data);
//       } catch (error) {
//         console.error('Error fetching donors:', error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   const handleDonation = () => {
//     // Logic for showing QR code instead of handling the API request
//     alert("Please scan the QR code to donate.");
//   };

//   return (
//     <div className="donate-container">
//       <div className="donate-form">
//         <h2>Donate</h2>
//         <p>Your contributions help us care for pets in need. Thank you for your generosity!</p>
//         <input
//           type="number"
//           placeholder="Enter donation amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <textarea
//           placeholder="Add a message (optional)"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={handleDonation}>Donate Now</button>

//         <div className="qr-code-container">
//           <img
//             src="your_qr_code_image_url_here" // Replace with your actual QR code image URL
//             alt="QR code for donation"
//             className="qr-code-image"
//           />
//           <p>Scan the QR code to donate.</p>
//         </div>
//       </div>

//       <div className="donors-list">
//         <h3>Our Proud Donors</h3>
//         <ul>
//           {donors.map((donor) => (
//             <li key={donor._id}>
//               <strong>{donor.personId?.name}</strong> donated ₹{donor.amount}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Donate;


import React, { useState, useEffect } from 'react';
import './Donate.css';

const Donate = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [donors, setDonors] = useState([]);

  // Fetch the list of donors from the backend
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/donations');
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  const handleShowQRCode = () => {
    setShowQRCode(true);
  };

  return (
    <div className="donate-container">
      <div className="donate-info">
        <h2>Why Donate to Us?</h2>
        <p>Your donations help us provide food, shelter, and medical care for pets in need.</p>
        <ul>
          <li>We ensure every penny goes toward the welfare of our animals.</li>
          <li>Help us save lives and give pets a second chance.</li>
          <li>Your contribution will directly impact the care and well-being of pets.</li>
        </ul>
        <button onClick={handleShowQRCode} className="donate-button">
          Show QR Code to Donate
        </button>

        {showQRCode && (
          <div className="qr-code-container">
            <img
              src="your_qr_code_image_url_here" // Replace with your actual QR code image URL
              alt="QR code for donation"
              className="qr-code-image"
            />
            <p>Scan the QR code in your PhonePe app to donate.</p>
          </div>
        )}
      </div>

      <div className="donors-list">
        <h3>Our Proud Donors</h3>
        <ul>
          {donors.map((donor) => (
            <li key={donor._id}>
              <strong>{donor.personId?.name}</strong> donated ₹{donor.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Donate;
