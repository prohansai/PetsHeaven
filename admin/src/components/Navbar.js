// admin/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import './Navbar.css'; // Import the CSS file


const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Get the logout function from AuthContext

    const handleLogout = () => {
        logout(); // Call logout function
        navigate('/'); // Redirect to login page
    };

    return (
        <nav>
            <ul>
                <li><Link to="/add-donation"><button>Add Donation</button></Link></li>
                <li><Link to="/add-adoption"><button>Add Adoption</button></Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
