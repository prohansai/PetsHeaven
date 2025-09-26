import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AvailablePets from './components/AvailablePets';
import AdoptionProcess from './components/AdoptionProcess';
import Donate from './components/Donate';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import AddPet from './components/AddPet';
import MyPets from './components/MyPets';
import MyAdoptions from './components/MyAdoptions';
import MyDonations from './components/MyDonations';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/availablePets" element={<AvailablePets />} />
        <Route path="/adoptionProcess" element={<AdoptionProcess />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addPet" element={<AddPet />} />
        <Route path="/myPets" element={<MyPets />} />
        <Route path="/myAdoptions" element={<MyAdoptions />} />
        <Route path="/myDonations" element={<MyDonations />} />
      </Routes>
    </Router>
  );
};

export default App;
