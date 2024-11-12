// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';
// import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext
// import './Navbar.css';

// const Navbar = () => {
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const { user, logout } = useContext(AuthContext); // Get user and logout function

//   const handleProfileClick = () => {
//     setShowProfileMenu(!showProfileMenu);
//   };

//   const handleLogout = () => {
//     logout(); // Call logout function from AuthContext
//     setShowProfileMenu(false); // Hide the profile menu after logging out
//   };

//   return (
//     <nav className="nav">
//       <ul>
//         <li>
//           <Link to="/" className="nav-link">Home</Link>
//         </li>
//         <li>
//           <Link to="/availablePets" className="nav-link">Available Pets</Link>
//         </li>
//         <li>
//           <Link to="/adoptionProcess" className="nav-link">Adoption Process</Link>
//         </li>
//         <li>
//           <Link to="/donate" className="nav-link">Donate</Link>
//         </li>
//         <li>
//           <Link to="/contactUs" className="nav-link">Contact Us</Link>
//         </li>
//         {!user ? ( // Show Login link if not authenticated
//           <li>
//             <Link to="/login" className="nav-link">Login</Link>
//           </li>
//         ) : ( // Show profile and logout if authenticated
//           <>
//             <li className="profile-icon" onClick={handleProfileClick}>
//               <FaUserCircle size={24} />
//               {showProfileMenu && (
//                 <div className="profile-dropdown">
//                   <ul>
//                     <li>
//                       <Link to="/addPet" onClick={() => setShowProfileMenu(false)}>Add a Pet</Link>
//                     </li>
//                     <li>
//                       <Link to="/myPets" onClick={() => setShowProfileMenu(false)}>My Pets</Link>
//                     </li>
//                     <li>
//                       <Link to="/myAdoptions" onClick={() => setShowProfileMenu(false)}>My Adoptions</Link>
//                     </li>
//                     <li>
//                       <Link to="/myDonations" onClick={() => setShowProfileMenu(false)}>My Donations</Link>
//                     </li>
//                     <li>
//                       <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu); // Toggle profile menu on click
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/availablePets" className="nav-link">Available Pets</Link>
        </li>
        <li>
          <Link to="/adoptionProcess" className="nav-link">Adoption Process</Link>
        </li>
        <li>
          <Link to="/donate" className="nav-link">Donate</Link>
        </li>
        <li>
          <Link to="/contactUs" className="nav-link">Contact Us</Link>
        </li>
        {!user ? (
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        ) : (
          <li className="profile-icon" onClick={handleProfileClick}>
            <FaUserCircle size={24} />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <ul>
                  <li>
                    <Link to="/addPet">
                      <button className="logout-button" onClick={() => setShowProfileMenu(false)}>Add a Pet</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myPets">
                      <button className="logout-button" onClick={() => setShowProfileMenu(false)}>My Pets</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myAdoptions">
                      <button className="logout-button" onClick={() => setShowProfileMenu(false)}>My Adoptions</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myDonations">
                      <button className="logout-button" onClick={() => setShowProfileMenu(false)}>My Donations</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
