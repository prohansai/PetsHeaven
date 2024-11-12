// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyAdoptions = () => {
//   const [adoptions, setAdoptions] = useState([]);

//   const fetchAdoptions = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/adoptions/my', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setAdoptions(response.data);
//     } catch (error) {
//       console.error('Error fetching adoptions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAdoptions();
//   }, []);

//   return (
//     <div>
//       <h2>My Adoptions</h2>
//       {adoptions.length > 0 ? (
//         <ul>
//           {adoptions.map(adoption => (
//             <li key={adoption._id}>
//               Adopted Pet ID: {adoption.petId} - Status: {adoption.status}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No adoptions found.</p>
//       )}
//     </div>
//   );
// };

// export default MyAdoptions;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './MyAdoptions.css';

// const MyAdoptions = () => {
//   const [adoptions, setAdoptions] = useState([]);

//   const fetchAdoptions = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/adoptions/my', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       console.log(response.data); // Check if petId has name

//       setAdoptions(response.data);
//     } catch (error) {
//       console.error('Error fetching adoptions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAdoptions();
//   }, []);

//   return (
//     <div>
//       <h2>My Adoptions</h2>
//       <div className="adoption-cards-container">
//         {adoptions.length > 0 ? (
//           adoptions.map(adoption => (
//             <div key={adoption._id} className="adoption-card">
//               <h4>Pet Name: {adoption.petId?.name || 'Unknown'}</h4>
//               <p>Owner: {adoption.ownerId?.name || 'Unknown'}</p>
//               <p>Owner Email: {adoption.ownerId?.email || 'Unavailable'}</p>
//               <p>Adoption Date: {new Date(adoption.date).toLocaleDateString()}</p>
//               <p>Status: {adoption.status}</p>
//             </div>
//           ))
//         ) : (
//           <p>No adoptions found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyAdoptions;


//after pet name, image
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyAdoptions.css';

const MyAdoptions = () => {
  const [adoptions, setAdoptions] = useState([]);

  const fetchAdoptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/adoptions/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setAdoptions(response.data);
    } catch (error) {
      console.error('Error fetching adoptions:', error);
    }
  };

  useEffect(() => {
    fetchAdoptions();
  }, []);

  return (
    <div>
      <h2>My Adoptions</h2>
      <div className="adoption-cards-container">
        {adoptions.length > 0 ? (
          adoptions.map((adoption) => (
            <div key={adoption._id} className="adoption-card">
              <h4>Pet Name: {adoption.petName || 'Unknown'}</h4>
              {adoption.petImage && <img src={adoption.petImage} alt={adoption.petName} className="pet-image" />}
              <p>Owner: {adoption.ownerId?.name || 'Unknown'}</p>
              <p>Owner Email: {adoption.ownerId?.email || 'Unavailable'}</p>
              <p>Adoption Date: {new Date(adoption.date).toLocaleDateString()}</p>
              <p>Status: {adoption.status}</p>
            </div>
          ))
        ) : (
          <p>No adoptions found.</p>
        )}
      </div>
    </div>
  );
};

export default MyAdoptions;
