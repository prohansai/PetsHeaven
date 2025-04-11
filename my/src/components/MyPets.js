import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyPets.css'; // Ensure you import your styles
import { toast } from 'react-toastify';

const MyPets = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pets/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const deletePet = async (petId) => {
    try {
      await axios.delete(`http://localhost:5000/api/pets/${petId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPets(pets.filter((pet) => pet._id !== petId));
      toast.success('Pet deleted successfully');
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };


  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div>
      <h2>My Pets</h2>
      <div className="pets-list">
      
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div key={pet._id} className="pet-card">
              <img src={pet.images && pet.images[0]} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>{pet.description}</p>
              <div className="pet-buttons">
                {/* <button onClick={() => updatePet(pet._id)}>Update Pet</button> */}
                <button onClick={() => deletePet(pet._id)}>Delete Pet</button>
              </div>
            </div>
          ))
        ) : (
          <p>No pets found.</p>
        )}
      </div>
    </div>
  );
};

export default MyPets;
