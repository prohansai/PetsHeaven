import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import './Navbar.css';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    toast.success('Logged out successfully!');
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/availablePets" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Available Pets</Link>
        </li>
        <li>
          <Link to="/adoptionProcess" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Adoption Process</Link>
        </li>
        <li>
          <Link to="/donate" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Donate</Link>
        </li>
        <li>
          <Link to="/contactUs" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </li>
        {!user ? (
          <li>
            <Link to="/login" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          </li>
        ) : (
          <li className="profile-icon" onClick={handleProfileClick}>
            <FaUserCircle size={24} />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <ul>
                  <li>
                    <Link to="/addPet">
                      <button className="logout-button" onClick={() => {setShowProfileMenu(false); setIsMobileMenuOpen(false);}}>Add a Pet</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myPets">
                      <button className="logout-button" onClick={() => {setShowProfileMenu(false); setIsMobileMenuOpen(false);}}>My Pets</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myAdoptions">
                      <button className="logout-button" onClick={() => {setShowProfileMenu(false); setIsMobileMenuOpen(false);}}>My Adoptions</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/myDonations">
                      <button className="logout-button" onClick={() => {setShowProfileMenu(false); setIsMobileMenuOpen(false);}}>My Donations</button>
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
