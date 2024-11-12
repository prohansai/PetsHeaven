// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyDonations = () => {
//   const [donations, setDonations] = useState([]);

//   const fetchDonations = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/donations/my', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setDonations(response.data);
//     } catch (error) {
//       console.error('Error fetching donations:', error);
//     }
//   };

//   useEffect(() => {
//     fetchDonations();
//   }, []);

//   return (
//     <div>
//       <h2>My Donations</h2>
//       {donations.length > 0 ? (
//         <ul>
//           {donations.map(donation => (
//             <li key={donation._id}>
//               <strong>Amount:</strong> {donation.amount} <br />
//               <strong>Date:</strong> {new Date(donation.date).toLocaleDateString()} <br />
//               <strong>Message:</strong> {donation.message || 'N/A'} <br />
//               <strong>Payment Method:</strong> {donation.paymentMethod || 'N/A'} <br />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No donations found.</p>
//       )}
//     </div>
//   );
// };

// export default MyDonations;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyDonations.css'; // Import CSS file

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donations/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className="donations-container">
      <h2>My Donations</h2>
      {donations.length > 0 ? (
        <div className="donation-cards">
          {donations.map(donation => (
            <div className="donation-card" key={donation._id}>
              <h3>Donation Details</h3>
              <p><strong>Amount:</strong> ${donation.amount}</p>
              <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}</p>
              <p><strong>Message:</strong> {donation.message || 'N/A'}</p>
              <p><strong>Payment Method:</strong> {donation.paymentMethod || 'N/A'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No donations found.</p>
      )}
    </div>
  );
};

export default MyDonations;
