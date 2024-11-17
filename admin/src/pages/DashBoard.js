import React from 'react';
import Navbar from '../components/Navbar';
import './Dashboard.css'; // Ensure to use the correct stylesheet

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Adding Image Tag */}
            <img src="https://t3.ftcdn.net/jpg/08/78/55/80/240_F_878558084_m6v522ozrUo9V8amBaufbecorO0IY7S8.jpg" alt="Background" className="background-image" />
            <Navbar />
            <div className="dashboard-content">
                <h1>Welcome to Pets Heaven Admin</h1>
            </div>
        </div>
    );
};

export default Dashboard;
