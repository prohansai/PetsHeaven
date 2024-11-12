// admin/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';
import AddDonation from './pages/AddDonation';
import AddAdoption from './pages/AddAdoption';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
                    <Route path="/add-donation" element={<PrivateRoute component={AddDonation} />} />
                    <Route path="/add-adoption" element={<PrivateRoute component={AddAdoption} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
