// // admin/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './AuthContext'; // Import the AuthProvider
// import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/DashBoard';
// import AddDonation from './pages/AddDonation';
// import AddAdoption from './pages/AddAdoption';
// import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

// const App = () => {
//     return (
//         <AuthProvider>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<LoginPage />} />
//                     <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
//                     <Route path="/add-donation" element={<PrivateRoute component={AddDonation} />} />
//                     <Route path="/add-adoption" element={<PrivateRoute component={AddAdoption} />} />
//                 </Routes>
//             </Router>
//         </AuthProvider>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for React-Toastify

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';
import AddDonation from './pages/AddDonation';
import AddAdoption from './pages/AddAdoption';
import PetsList from './pages/PetsList';
import UsersList from './pages/UsersList';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const App = () => {
    return (
        <AuthProvider>
            <Router>
                {/* ToastContainer allows toasts to appear in the app */}
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
                    <Route path="/add-donation" element={<PrivateRoute component={AddDonation} />} />
                    <Route path="/add-adoption" element={<PrivateRoute component={AddAdoption} />} />
                    <Route path="/pets-list" element={<PetsList />} />
                    <Route path="/users-list" element={<UsersList />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
