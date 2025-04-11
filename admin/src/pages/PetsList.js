import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './PetsList.css';
import { toast } from 'react-toastify';

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets from the backend
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://petsheaven-backend.onrender.com/api/pets'); // Change with your backend route
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  const handleDeletePet = async (petId) => {
    try {
      await axios.delete(`https://petsheaven-backend.onrender.com/api/pets/admin/${petId}`);
      setPets(pets.filter(pet => pet._id !== petId)); // Remove the deleted pet from the state
      toast.success("Pet deleted successfully")
    } catch (error) {
      console.error('Error deleting pet:', error);
      toast.error("Error in deleting pet")
    }
  };

  return (
    <div className="pets-list-container">
      <Navbar />
      
      <div className="pets-list">
        {pets.length === 0 ? (
          <p>No pets available</p>
        ) : (
          pets.map(pet => (
            <div key={pet._id} className="pet-card">
              {pet.images && pet.images.length > 0 && (
                <img src={pet.images[0]} alt={pet.name} className="pet-image" />
              )}
              <h3>{pet.name}</h3>
              <p>Breed: {pet.breed}</p>
              <button className="delete-btn" onClick={() => handleDeletePet(pet._id)}>Delete Pet</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PetsList;
